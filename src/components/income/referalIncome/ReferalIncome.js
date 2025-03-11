import { Pagination } from "antd"
import { useEffect, useState } from "react";
import { referal_recordGet } from "../../../api/login/Login";
import Loader from "../../../common/loader/Loader";


const ReferalIncome = () => {
    const getCurrentDate = () => {
        const today = new Date();
        return today.toISOString().substr(0, 10);
    };

    const [currentDate, setCurrentDate] = useState(getCurrentDate());
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const [isFirstCall, setFirstCall] = useState(true)
    const [totalCount, setTotalCount] = useState(null)
    const [data, setData] = useState(null)
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
        setLoading(true);
        try {
            const clone = isFirstCall
                ? { start_date: "", end_date: "", count: count, page: input, user_id: window.localStorage.getItem('userIdToken') }
                : { ...filterInitial, count: count, page: input, user_id: window.localStorage.getItem('userIdToken') };

            const res = await referal_recordGet(clone);

            setTotalCount(res?.data?.totalCount);
            if (res.data.data.length > 0) {
                setData(res.data.data);
            }

            allDataWalletReport();

            isFirstCall = false;
        } catch (error) {
            console.error("Error fetching transition report:", error);
        } finally {
            setLoading(false);
        }
    };

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

    const handleSearch = () => {
        getTransitionReport(0)
    }
    // const [currentDate, setCurrentDate] = useState('');
    // console.log(currentDate);

    // const getCurrentDate = () => {
    //     const today = new Date();
    //     const year = today.getFullYear();
    //     const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    //     const day = String(today.getDate()).padStart(2, '0');
    //     const formattedDate = `${year}-${month}-${day}`;
    //     setCurrentDate(formattedDate);
    //     const clone = { ...filterInitial, start_date: formattedDate, end_date: formattedDate }
    //     setFilterInitial(clone)
    // }




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
                <h1>Referral Income</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>Fillter Referral Income</span>
                    </div>
                    <div className="card-body">
                        <form action="" method="post" name="frmReport" id="frmReport">
                            <div className="form-row" >
                                <div className="form-group col-lg-4 col-md-6">
                                    <label htmlFor="txtUserId">Start Date</label>
                                    <input type="date" name="start_date" id="account_no" max={currentDate} defaultValue={currentDate} className="form-control" value={filterInitial.start_date} onChange={handleChange} />
                                </div>
                                <div className="form-group col-lg-4 col-md-6">
                                    <label htmlFor="txtUserId">End Date</label>
                                    <input type="date" name="end_date" id="account_no" max={currentDate} defaultValue={currentDate} className="form-control" value={filterInitial.end_date} onChange={handleChange} />
                                </div>
                                {/* <div className="form-group col-lg-4">
                                    <label htmlFor="txtUserId">Select Position</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Select Position</option>
                                        <option value={"All"}>All</option>
                                        <option value={"Left"}>Left</option>
                                        <option value={"Right"}>Right</option>
                                    </select>

                                </div> */}
                                <div className="form-group col-xl-4">
                                    <button type="button" className="btn btn-primary mr-3" onClick={handleSearch}>
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

                                <table id="rechargehistorytbl" className="table table-striped table-bordered table-hover display fixed_headers dataTable" style={{ width: 1250 }} role="grid" aria-describedby="rechargehistorytbl_info">
                                    <thead>
                                        <tr role="row">
                                            <th style={{ width: '50px' }}>S.No.</th>
                                            <th style={{ width: '150px' }}>Member Code</th>
                                            <th style={{ width: '150px' }}>Joining Date</th>
                                            <th style={{ width: '150px' }}>Package Name</th>
                                            <th style={{ width: '150px' }}>Package Purchase Date</th>
                                            <th style={{ width: '150px' }}>Parent Code</th>
                                            {/* <th style={{ width: '150px' }}>Parent Position</th> */}
                                            <th style={{ width: '150px' }}>Refer By Code</th>
                                            {/* <th style={{ width: '150px' }}>Refer Position</th> */}
                                            <th style={{ width: '150px' }}>Income Amount</th>
                                            <th style={{ width: '150px' }}>Payment Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data?.map((item, i) => {
                                            return <tr key={item?._id}>
                                                <td valign="top" className="dataTables_empty">{(i + 1) + (page * count)}</td>
                                                <td>{item?.reward_by}</td>
                                                <td>{item?.user_register_time}</td>
                                                <td>{item?.plans}</td>
                                                <td>{item?.plan_register_time}</td>
                                                <td>{item?.parent_id}</td>
                                                {/* <td>{item?.parent_position}</td> */}
                                                <td>{item?.refer_by_code}</td>
                                                {/* <td>{item?.refer_by_code_position}</td> */}
                                                <td>{item?.amount}</td>
                                                <td>{item?.pay_status}</td>
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

            {/* <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <LiveincomeFillter />
      <ListLevelincome /> */}
        </>
    )
}

export default ReferalIncome