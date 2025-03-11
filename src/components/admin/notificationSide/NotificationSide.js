import React, { useEffect, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Avatar, List, Typography } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { postNotification } from "../../../api/login/Login";
import './NotificationSide.css'; // Make sure to create this CSS file

const { Text, Title } = Typography;

function NotificationSide({ show, handleClose, tokenNoti, NotificationData }) {
    const [intData, setInData] = useState({
        type: "Browser",
        token: "",
        user_id: ""
    });

    const userIdToken = window.localStorage.getItem("userIdToken");

    const fetchNotification = async () => {
        try {
            const clone = { ...intData, token: tokenNoti, user_id: userIdToken };
            const response = await postNotification(clone);
            console.log("response", response);
        } catch (error) {
            console.error("Error fetching notifications:", error);
        }
    };

    useEffect(() => {
        if (userIdToken) {
            fetchNotification();
        }
    }, [userIdToken, tokenNoti]);

    return (
        <Offcanvas show={show} onHide={handleClose} placement="end" className="notification-sidebar">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    <Title level={4}>
                        <BellOutlined /> Notifications
                    </Title>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <List
                    itemLayout="horizontal"
                    dataSource={NotificationData?.notifications || []}
                    renderItem={(item) => (
                        <List.Item className="notification-item">
                            <List.Item.Meta
                                avatar={<Avatar icon={<BellOutlined />} />}
                                title={<Text strong>{item.subject}</Text>}
                                description={
                                    <>
                                        <Text>{item.message}</Text>
                                        <Text type="secondary" className="notification-time">
                                            {new Date(item.createdAt).toLocaleString()}
                                        </Text>
                                    </>
                                }
                            />
                        </List.Item>
                    )}
                />
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default NotificationSide;