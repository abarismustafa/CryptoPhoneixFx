
import "./BillingAddress.css"; // Import custom styles
import React, { useEffect, useState } from "react";
import { Card, Row, Col, Checkbox, Spin, message } from "antd";
import { Button } from "react-bootstrap";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { getBillingAddress, getShippingAddressDelete } from "../../../api/login/Login";

const BillingAddress = () => {
  const [data, setData] = useState(null);
  const [checkDef, setCheckDef] = useState(null);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const res = await getBillingAddress();
      setData(res.data);
    } catch (error) {
      message.error("Server Error: Failed to load data");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteAddress = async (id) => {
    try {
      await getShippingAddressDelete(id);
      message.success("Address Deleted Successfully");
      getData();
    } catch (error) {
      message.error("Address Not Deleted");
    }
  };

  const setIdAddressEdit = (id) => {
    navigate(`/admin/billing_AddressaForm/${id}`);
  };

  const AddressCard = ({ address, isPermanent, onEdit, onDelete }) => (
    <Card className="billing-address-card mb-3">
      <div className="billing-address-card-header">
        <Checkbox
          checked={isPermanent ? !checkDef : address._id === checkDef}
          onChange={() => setCheckDef(isPermanent ? null : address._id)}
        />
        <h6 className="billing-address-card-title">
          Type: {isPermanent ? "Permanent" : address.type} Address
        </h6>
        {!isPermanent && (
          <div className="billing-address-card-actions">
            <Button variant="link" onClick={() => onEdit(address._id)}>
              <EditOutlined />
            </Button>
            <Button variant="link" onClick={() => onDelete(address._id)}>
              <DeleteOutlined />
            </Button>
          </div>
        )}
      </div>
      <div className="billing-address-card-content">
        {[
          { label: "Name", value: `${address?.firstname} ${address?.lastname || ""}` },
          { label: "Email", value: address?.email },
          { label: "Phone", value: isPermanent ? window.localStorage.getItem("regisNumber") : address?.mobile_number },
          { label: "Country", value: address?.country },
          { label: "State", value: address?.state },
          { label: "City", value: address?.city },
          { label: "Postal code", value: address?.pin_code },
          { label: "Province", value: address?.province },
          { label: "Address Line 1", value: address?.addressLine1 },
          { label: "Address Line 2", value: address?.addressLine2 },
        ].map(({ label, value }) => (
          <div key={label} className="billing-address-card-field">
            <span className="billing-address-card-label">{label}:</span>
            <span className="billing-address-card-value">{value}</span>
          </div>
        ))}
      </div>
    </Card>
  );

  return (
    <div className="billing-address-container">
      <Card title="Billing Address" className="billing-address-main-card">
        {data ? (
          <Row gutter={16}>
            <Col xs={24} lg={12}>
              <AddressCard
                address={data.data.permanent}
                isPermanent={true}
              />
            </Col>
            {data.data.delivery.length > 0 ? (
              data.data.delivery.map((item) => (
                <Col xs={24} lg={12} key={item._id}>
                  <AddressCard
                    address={item}
                    isPermanent={false}
                    onEdit={setIdAddressEdit}
                    onDelete={deleteAddress}
                  />
                </Col>
              ))
            ) : (
              <Col xs={24}>
                <Card className="billing-address-empty-card">
                  <h6>No delivery addresses found</h6>
                </Card>
              </Col>
            )}
          </Row>
        ) : (
          <div className="billing-address-loading">
            <Spin size="large" />
            <h6>Loading...</h6>
          </div>
        )}
      </Card>
    </div>
  );
};

export default BillingAddress;