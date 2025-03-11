
import React, { useEffect, useState } from 'react'
import Loader from '../../../../common/loader/Loader';
import { Pagination } from 'antd';
import { downlineGet, plan } from '../../../../api/login/Login';
// import { position } from 'html2canvas/dist/types/css/property-descriptors/position';

const MyDownlineTeam = () => {
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
    const [plandata, setPlanData] = useState(null)
    const [firstCall, setFirstCall] = useState(true)
    const [filterInitial, setFilterInitial] = useState({
        user_id: '',
        count: '',
        page: '',
        min_amt: 0,
        max_amt: 0,
        end_date: getCurrentDate(),
        start_date: getCurrentDate(),
        plan_id: "",
        position: "",
        parent_position: "",
    })



    const handleChange = (e) => {
        const clone = { ...filterInitial }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setFilterInitial(clone)
    }

    const getTransitionReport = async (input) => {
        setLoading(true)
        const clone = firstCall ? { ...filterInitial, position: "", plan_id: "", parent_position: "", start_date: "", end_date: "", count: count, page: input, min_amt: +filterInitial.min_amt, max_amt: +filterInitial.max_amt, user_id: window.localStorage.getItem('userIdToken') } : { ...filterInitial, position: filterInitial?.position, plan_id: filterInitial?.plan_id, parent_position: filterInitial.parent_position, count: count, page: input, min_amt: +filterInitial.min_amt, max_amt: +filterInitial.max_amt, user_id: window.localStorage.getItem('userIdToken') }
        try {
            const res = await downlineGet(clone)
            // console.log(res);
            setTotalCount(res?.data?.totalCount)
            setData(res?.data?.data)
            allDataWalletReport()
        } catch (error) {

        }
        setLoading(false)
    }
    const onChangeVal = (e) => {
        // console.log(e - 1);

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
        allDataWalletReport()
        getTransitionReport(0)
        setFirstCall(false)
        const fetch = async () => {
            try {
                const res = await plan()
                setPlanData(res?.data?.data)

            } catch (error) {
                alert(error.message)
            }
        }
        fetch()
    }, [])

    const handleSearch = () => {
        getTransitionReport(0)
    }


    return (
        <>
            {loading && <Loader />}
            <div className="PageHeading">
                <h1>My Downline Team</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>Filter</span></div>
                    <div className="card-body">
                        <form action="" method="post" name="frmReport" id="frmReport">
                            <input type="hidden" id="hidID" name="hidID" />
                            <div className="form-row" style={{ alignItems: 'end' }}>
                                <div className="form-group col-lg-2 col-md-6">
                                    <label htmlFor="txtUserId">Start Date</label>
                                    <input type="date" name="start_date" id="account_no" max={currentDate} defaultValue={currentDate} className="form-control" value={filterInitial.start_date} onChange={handleChange} />
                                </div>
                                <div className="form-group col-lg-2 col-md-6">
                                    <label htmlFor="txtUserId">End Date</label>

                                    <input type="date" name="end_date" id="account_no" max={currentDate} defaultValue={currentDate} className="form-control" value={filterInitial.end_date} onChange={handleChange} />
                                </div>
                                {/* <div className="form-group col-lg-2 col-md-6">
                                    <label htmlFor="txtUserId">Select Parent Position</label>
                                    <select className="form-select" aria-label="Default select example" name='parent_position' value={filterInitial?.parent_position} onChange={handleChange}>
                                        <option selected>Select Position</option>
                                        <option value={""}>All</option>
                                        <option value={"left"}>Left</option>
                                        <option value={"right"}>Right</option>
                                    </select>

                                </div> */}
                                {/* <div className="form-group col-lg-2 col-md-6">
                                    <label htmlFor="txtUserId">Select Refer By Position</label>
                                    <select className="form-select" name='position' aria-label="Default select example" value={filterInitial?.position} onChange={handleChange}>
                                        <option selected>Select Refer By Position</option>
                                        <option value={""}>All</option>
                                        <option value={"left"}>Left</option>
                                        <option value={"right"}>Right</option>
                                    </select>

                                </div> */}
                                <div className="form-group col-lg-2 col-md-6">
                                    <label htmlFor="txtUserId">Select Package</label>
                                    <select className="form-select" name='plan_id' aria-label="Default select example" value={filterInitial?.plan_id} onChange={handleChange}>
                                        <option value={""} >Select Package</option>
                                        {plandata?.map((item, i) => {
                                            return <option value={item?._id}>{item?.name}</option>
                                        })}
                                    </select>
                                </div>

                                <div className="form-group col-lg-2 col-md-6">
                                    <label>&nbsp;</label>
                                    <button type="button" className="btn btn-primary mr-3" onClick={handleSearch}>
                                        Search
                                    </button>
                                    {/* <button type="button" className="btn btn-warning" onClick={ResetData}>Reset</button> */}
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="card mt-4" style={{ overflow: 'auto' }}>
                    <div className="card-body">
                        <div id="myTable_wrapper" className="dataTables_wrapper no-footer">
                            <div className="d-flex  justify-content-between align-items-center">
                                {/* <div className="dataTables_length mb-3" id="myTable_length">
                                    <ReactHTMLTableToExcel
                                        id="test-table-xls-button"
                                        className="download-table-xls-button btn btn-success cusxel"
                                        table="table-to-xlsx"
                                        filename="tablexls"
                                        sheet="tablexls"
                                        buttonText="Download Excel sheet" />
                                </div> */}
                                {/* <div className="form-group col-md-2">
                                    <label >
                                        Search:
                                    </label>
                                    <input className="form-control datefield" id="txtFrom" name="txtFrom" type="text" style={{ cursor: 'pointer' }} />
                                </div> */}
                            </div>
                            <div id="myTable_processing" className="dataTables_processing" style={{ display: 'none' }}>Processing...</div>
                            <table className="table table-striped table-bordered table-hover display dataTable no-footer dtr-inline collapsed" id="myTable" role="grid" aria-describedby="myTable_info" >
                                <thead>
                                    <tr role="row">
                                        <th className="sorting">
                                            S.No
                                        </th>

                                        <th className="sorting">
                                            Member Code
                                        </th>
                                        <th className="sorting">
                                            Member  Name
                                        </th>
                                        <th className="sorting">
                                            Package
                                        </th>
                                        <th className="sorting" >Parent Code</th>
                                        {/* <th className="sorting" >Parent Position</th> */}
                                        <th className="sorting" >Refer By Code</th>
                                        {/* <th className="sorting" >Refer Position</th> */}
                                        <th className="sorting" >Joining Date</th>
                                        <th className="sorting" >Package Purchase Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data?.map((item, i) => {
                                        // console.log(item);
                                        return <tr className="odd" key={item?._id}>
                                            <td valign="top" className="dataTables_empty">{(i + 1) + (page * count)}</td>
                                            {/* <td valign="top" className="dataTables_empty">{new Date(item?.createdAt).getDate() + "/" + Number(new Date(item?.createdAt).getMonth() + 1) + "/" + new Date(item?.createdAt).getFullYear() + "," + new Date(item?.createdAt).getHours() + ":" + new Date(item?.createdAt).getMinutes()}</td> */}
                                            {/* <td valign="top" className="dataTables_empty">{item?.updatedAt}</td> */}
                                            <th valign="top" className="dataTables_empty">
                                                {item?.refer_id}
                                            </th>
                                            <td valign="top" className="dataTables_empty">{item?.name}</td>
                                            <td valign="top" className="dataTables_empty">{item?.plans}</td>
                                            <td valign="top" className="dataTables_empty">{item?.parent_id}</td>
                                            {/* <td>{item?.parent_position}</td> */}

                                            <td valign="top" className="dataTables_empty">{item?.refer_by_code}</td>
                                            {/* <td>{item?.refer_by_code_position}</td> */}
                                            <td valign="top" className="dataTables_empty">{item?.createdAt}</td>
                                            <td valign="top" className="dataTables_empty">{item?.plan_register_time}</td>

                                            {/* {item?.approve == true ? <td valign="top" >
                                               
                                                <div className="approve">
                                                    <p><MdVerified /></p>
                                                    <p className="VERIFIED">SUCCESS</p>
                                                </div>
                                            </td> : <td valign="top" className="dataTables_empty">
                                                <div className="approve approv2">
                                                    <p><GiCancel /></p>
                                                    <p className="VERIFIED">UNVERIFIED</p>
                                                </div>
                                            </td>} */}

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

export default MyDownlineTeam