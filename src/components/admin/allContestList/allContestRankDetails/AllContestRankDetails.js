import { useEffect, useState } from "react";
import Loader from "../../../../common/loader/Loader"
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { useParams } from "react-router-dom";
import { contestAllDeatilsRank } from "../../../../api/login/Login";
import { Pagination } from "antd";


export const AllContestRankDetails = () => {
    const param = useParams()
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    // console.log(page);
    const [totalCount, setTotalCount] = useState(null)
    const [data, setData] = useState(null)

    const getTransitionReport = async (input) => {
        // console.log('iojijip');
        setLoading(true)
        const clone = { id: param?.id, count: count, page: input, user_id: window.localStorage.getItem('userIdToken') }
        try {
            const res = await contestAllDeatilsRank(clone)
            // console.log(res?.data?.data);
            setTotalCount(res?.data?.totalCount)
            setData(res?.data?.data)
            // allDataWalletReport()
        } catch (error) {

        }
        setLoading(false)
    }
    const onChangeVal = (e) => {
        // console.log(e - 1);

        setPage(e - 1)
        getTransitionReport(e - 1)
    };


    // useEffect(() => {
    //     // getCurrentDate()
    //     contestType()
    // }, [param])

    useEffect(() => {
        getTransitionReport(0)

    }, [param])
    return (
        <>
            {loading && <Loader />}
            <div className="PageHeading">
                <h1>All Rank Details</h1>
            </div>
            <div className="ContentArea">
                <div className="card mt-4" style={{ overflow: 'auto' }}>
                    <div className="card-body">
                        <div id="myTable_wrapper" className="dataTables_wrapper no-footer">
                            {/* <div className="d-flex  justify-content-between align-items-center">
                                <div className="dataTables_length mb-3" id="myTable_length">
                                    <ReactHTMLTableToExcel
                                        id="test-table-xls-button"
                                        className="download-table-xls-button btn btn-success cusxel"
                                        table="table-to-xlsx"
                                        filename="tablexls"
                                        sheet="tablexls"
                                        buttonText="Download Excel sheet" />
                                </div>
                                
                            </div> */}
                            <div id="myTable_processing" className="dataTables_processing" style={{ display: 'none' }}>Processing...</div>
                            <table className="table table-striped table-bordered table-hover display dataTable no-footer dtr-inline collapsed" id="myTable" role="grid" aria-describedby="myTable_info" >
                                <thead>
                                    <tr role="row">
                                        <th className="sorting">
                                            Rank
                                        </th>
                                        {/* <th className="sorting" onClick={() => sortByColumn('createdAt')}>Txn Date</th> */}

                                        {/* <th className="sorting">
                                            Contest Image
                                        </th> */}
                                        <th className="sorting">
                                            Contest Name
                                        </th>
                                        <th className="sorting" >Reward</th>
                                        <th className="sorting" >Points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data?.map((item, i) => {
                                        // console.log(item);
                                        return <tr className="odd" key={item?._id}>
                                            {/* <td valign="top" className="dataTables_empty">{(i + 1) + (page * count)}</td> */}
                                            {/* <td valign="top" className="dataTables_empty">---</td> */}

                                            {/* <td valign="top" className="dataTables_empty">{new Date(item?.createdAt).getDate() + "/" + Number(new Date(item?.createdAt).getMonth() + 1) + "/" + new Date(item?.createdAt).getFullYear() + "," + new Date(item?.createdAt).getHours() + ":" + new Date(item?.createdAt).getMinutes()}</td> */}
                                            {/* <td valign="top" className="dataTables_empty">{item?.updatedAt}</td> */}
                                            <th valign="top" className="dataTables_empty">
                                                {item?.ranking}
                                            </th>
                                            <td valign="top" className="dataTables_empty">{item?.userid?.name}</td>
                                            <td valign="top" className="dataTables_empty">{item?.reward}</td>
                                            <td valign="top" className="dataTables_empty">{item?.points}</td>

                                        </tr>
                                    })}
                                </tbody>
                            </table>

                        </div>
                        {/* </div> */}
                    </div>
                </div>
                <div className="dataTables_info_page">
                    <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                        Total {totalCount}  entries
                    </div>
                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                        <Pagination
                            // showSizeChanger
                            // onShowSizeChange={''}

                            defaultCurrent={1}
                            onChange={onChangeVal}
                            total={totalCount}
                        />
                    </div>
                </div>

            </div>




        </>
    )
}
