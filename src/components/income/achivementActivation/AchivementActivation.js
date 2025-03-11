
import React, { useEffect, useState } from 'react'
import Loader from '../../../common/loader/Loader';
import { achievemenActivationGet } from '../../../api/login/Login';
import { Pagination } from 'antd';

const AchivementActivation = () => {
    const getCurrentDate = () => {
        const today = new Date();
        return today.toISOString().substr(0, 10);
    };

    const [currentDate, setCurrentDate] = useState(getCurrentDate());
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    // console.log(page);
    const [totalCount, setTotalCount] = useState(null)
    const [data, setData] = useState(null)
    const [allData, setAllData] = useState(null)
    const [filterInitial, setFilterInitial] = useState({
        user_id: '',
        count: '',
        page: '',
        min_amt: 0,
        max_amt: 0,
        end_date: getCurrentDate(),
        start_date: getCurrentDate(),

    })



    const handleChange = (e) => {
        const clone = { ...filterInitial }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setFilterInitial(clone)
    }

    const getTransitionReport = async (input) => {
        // console.log('iojijip');
        setLoading(true)
        const clone = { ...filterInitial, count: count, page: input, user_id: window.localStorage.getItem('userIdToken') }
        try {
            const res = await achievemenActivationGet(clone)
            // console.log(res);
            setTotalCount(res?.data?.totalCount)
            if (res.data.data.length > 0) {
                setData(res.data.data);
            }
            allDataWalletReport()
        } catch (error) {

        }
        setLoading(false)
    }
    const onChangeVal = (e) => {
        console.log(e - 1);

        setPage(e - 1)
        getTransitionReport(e - 1)
    };


    const ResetData = async () => {
        setLoading(true)
        const obj = {
            count: 10,
            page: 0,
            min_amt: 0,
            max_amt: 0,
            end_date: '',
            start_date: '',
            type: '',
            trans_type: '',
            order_id: '',
            txn_id: '',
            sortType: '',
            sortType: '',
            user_id: window.localStorage.getItem('userIdToken')
        }
        try {
            // const res = await walletsREports(obj)
            // setTotalCount(res?.data?.data?.total)
            // setData(res?.data?.data?.wallet)
            // setFilterInitial({
            //     end_date: '',
            //     start_date: '',
            //     type: '',
            //     trans_type: '',
            //     order_id: '',
            //     txn_id: '',
            // })
        } catch (error) {

        }
        setLoading(false)
    }


    const [sortDirection, setSortDirection] = useState();
    // console.log(sortDirection);

    const [assending, setDecending] = useState(1)

    const sortByColumn = async (key) => {
        if (sortDirection == 'asc') {
            setDecending(1)
        } else {
            setDecending(-1)
        }

        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');

        setLoading(true)

        const clone = { ...filterInitial, count: count, page: page, min_amt: +filterInitial.min_amt, max_amt: +filterInitial.max_amt, sortType: +assending, sortKey: key, user_id: window.localStorage.getItem('userIdToken') }
        // console.log(clone);
        try {
            // const res = await walletsREports(clone)
            // // console.log(res?.data?.data?.wallet);
            // setTotalCount(res?.data?.data?.total)
            // setData(res?.data?.data?.wallet)
            // getTransitionReport()
        } catch (error) {

        }
        setLoading(false)
    };

    const allDataWalletReport = async () => {
        const clone = { ...filterInitial, count: count, page: page, min_amt: +filterInitial.min_amt, max_amt: +filterInitial.max_amt, user_id: window.localStorage.getItem('userIdToken') }
        try {
            // const res = await allDataWallets(clone)
            // setAllData(res?.data?.data?.wallet);
        } catch (error) {

        }
    }

    useEffect(() => {
        getCurrentDate()
    }, [])

    useEffect(() => {
        allDataWalletReport()
        getTransitionReport(0)

    }, [])
    return (
        <>
            {loading && <Loader />}
            <div className="PageHeading">
                <h1>Achievement Activated</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>Fillter Achievement Activated</span>
                    </div>
                    <div className="card-body">
                        <form action="" method="post" name="frmReport" id="frmReport">
                            <input type="hidden" id="hidID" name="hidID" />
                            <div className="form-row" style={{ alignItems: 'end' }}>
                                <div className="form-group col-lg-4 col-md-12 ">
                                    <label htmlFor="txtUserId">Start Date</label>
                                    <input type="date" name="start_date" id="account_no" max={currentDate} defaultValue={currentDate} className="form-control" value={filterInitial.start_date} onChange={handleChange} />
                                </div>
                                <div className="form-group col-lg-4 col-md-12 ">
                                    <label htmlFor="txtUserId">End Date</label>
                                    <input type="date" name="end_date" id="account_no" max={currentDate} defaultValue={currentDate} className="form-control" value={filterInitial.end_date} onChange={handleChange} />
                                </div>
                                <div className="form-group col-lg-4 col-md-12 ">
                                    <label>&nbsp;</label>
                                    <button type="button" className="btn btn-primary mr-3" onClick={() => getTransitionReport(0)}>
                                        Search
                                    </button>
                                    {/* <button type="button" className="btn btn-warning" onClick={ResetData}>Reset</button> */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="card mt-2" style={{ overflow: 'auto' }}>
                    <div className="card-body">
                        <div className="GridUi no-header-footer-grid mt-3" id="all_transaction">
                            <div id="rechargehistorytbl_wrapper" className="dataTables_wrapper">

                                <table className="table table-striped table-bordered table-hover display dataTable no-footer dtr-inline collapsed" id="myTable" role="grid" aria-describedby="myTable_info" >
                                    <thead>
                                        <tr role="row">
                                            <th className="sorting">
                                                S.No
                                            </th>
                                            <th className="sorting" >Date</th>
                                            <th className="sorting" >Achievement</th>
                                            <th className="sorting" >Amount</th>
                                            <th className="sorting">No. Of Match</th>
                                            <th className="sorting">No. Of Times</th>
                                            <th className="sorting">No. Of Times Paid</th>
                                            <th className="sorting">Total Invoice</th>
                                            <th className="sorting">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data?.map((item, i) => {
                                            // console.log(item);
                                            return <tr className="odd" key={item?._id}>
                                                <td valign="top" className="dataTables_empty">{(i + 1) + (page * count)}</td>
                                                <td valign="top" className="dataTables_empty">{item?.createdAt}</td>
                                                <td valign="top" className="dataTables_empty">{item?.achievement}</td>
                                                <td valign="top" className="dataTables_empty">{item?.amount}</td>
                                                <td valign="top" className="dataTables_empty">{item?.no_of_match}</td>
                                                <td valign="top" className="dataTables_empty">{item?.no_of_times}</td>
                                                <td valign="top" className="dataTables_empty">{item?.no_of_times_paid}</td>
                                                <td valign="top" className="dataTables_empty">{item?.totalInvoices}</td>


                                                <td valign="top" className="dataTables_empty">{item?.status}</td>

                                                {/* <td valign="top" className="dataTables_empty">{item?.is_approved == true ? 'Yes' : 'No'}</td> */}
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
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
            </div >


            {/* <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} /> */}
            {/* <MatchingIncomeFilter />
      <MatchingIncomeList /> */}
        </>
    )
}

export default AchivementActivation