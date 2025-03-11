
import React, { useEffect, useState } from 'react'

import { Nifty50 } from './Nifty50/Nifty50';
import { markettype } from '../../api/login/Login';
import Loader from '../../common/loader/Loader';
import CustomMarquee from '../admin/daseboardCheck/CustomMarquee';

export const PlayNif50 = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Dashboard/PlayNif 50",
        path_1: "",
    }
    const [activeTab, setActiveTab] = useState(null);
    // console.log(activeTab);


    // Function to handle tab change
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    const [loader, setLoader] = useState(false)

    const [markettypeData, setMarkettypeData] = useState([])
    // console.log(markettypeData);



    const markettypeDataget = async () => {
        try {
            setLoader(true)
            const res = await markettype()
            // console.log(res?.data?.error);
            setMarkettypeData(res?.data?.data || []);
            if (res?.data?.error == false) {
                setLoader(false)
                if (res?.data?.data?.length > 0) {
                    setActiveTab(res.data.data[0]._id);
                }
            } else {
                setLoader(false)
            }

        } catch (error) {
            setLoader(false)
        }
    }

    useEffect(() => {
        markettypeDataget()
    }, [])

    // const activeTabData = markettypeData.find((item) => item?._id === activeTab);

    const activeTabData = markettypeData.find((item) => {
        return item?._id === activeTab
    })

    // console.log("Active Tab Data: ", activeTabData);
    // console.log("Active Tab ID: ", activeTab);

    return (
        <>

            {loader && <Loader />}
            <div className="ContentArea">
                <div className="card ContentArea-card">
                    <div className="card-body">
                        <div className="row">
                            <CustomMarquee />
                            <div className="col-xl-12 col-sm-6">
                                {/* <div className='set-alter-tab'>
                                    <div className="tabs"> */}
                                {/* {markettypeData && markettypeData?.map((item) => {
                                            return (
                                                <button
                                                    className={activeTab === item?._id ? 'active ' : ''}
                                                    onClick={() => handleTabChange(item?._id)}
                                                    key={item?._id}
                                                >
                                                    {item?.name}
                                                </button>
                                            );
                                        })} */}

                                {/* <button
                                            className={activeTab === 'tab2' ? 'active' : ''}
                                            onClick={() => handleTabChange('tab2')}
                                        >
                                            Niftybank League
                                        </button>
                                        <button
                                            className={activeTab === 'tab3' ? 'active' : 'Stock-League'}
                                            onClick={() => handleTabChange('tab3')}
                                        >
                                            Stock League
                                        </button> */}
                            </div>
                            {/* <div className="tab-content">
                                        {activeTab === 'tab1' && <div>This is the content for Tab 1.</div>}
                                        {activeTab === 'tab2' && <div>This is the content for Tab 2.</div>}
                                        {activeTab === 'tab3' && <div>This is the content for Tab 3.</div>}
                                    </div> */}
                            {/* </div>

                    </div> */}
                            <div className="col-xl-12 col-sm-6">
                                <div className="tab-content-2">
                                    <div className="tab-content">
                                        {/* {activeTabData ? (
                                            <Nifty50 markettypeData={activeTabData} activeTab={activeTab} />
                                        ) : (
                                            <div>No Data Available for this tab</div>
                                        )} */}
                                        <Nifty50 markettypeData={markettypeData} activeTab={activeTab} />
                                        {/* {activeTab === markettypeData[0]?._id && (
                                            <div>
                                                <Nifty50 markettypeData={markettypeData} activeTab={activeTab} />
                                            </div>
                                        )}
                                        {activeTab === markettypeData[1]?._id && (
                                            <div>This is the content for Tab 2.</div>
                                        )}
                                        {activeTab === markettypeData[2]?._id && (
                                            <div>This is the content for Tab 3.</div>
                                        )} */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-xl-3 t-earn">
                        <div className="card">
                            <div className="card-header border-0 pb-0">
                            </div>

                        </div>
                    </div> */}


                    </div>
                </div >
            </div >
        </>
    )
}
