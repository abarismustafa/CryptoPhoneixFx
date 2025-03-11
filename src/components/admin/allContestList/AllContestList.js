
import { Pagination } from "antd"
import { useEffect, useState } from "react"
import { allDataWallets, contestParticipate, contestParticipateAll, contestTypes, dmtTransiList, walletsREports } from "../../../api/login/Login"
import Loader from "../../../common/loader/Loader"
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { MdVerified } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import { Link, useParams } from "react-router-dom";
function AllContestList({ nameHeading }) {

    const param = useParams()
    // console.log(param);

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
        count: '',
        page: '',
        filter_type: '',
        end_date: '',
        start_date: '',
        contest_type: '',
        contest_name: '',
        reward: '',
        amount: ''
        // type: '',
        // trans_type: '',
        // order_id: '',
        // txn_id: '',
        // sortType: '',
        // sortType: ''
    })



    const handleChange = (e) => {
        const clone = { ...filterInitial }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setFilterInitial(clone)
    }

    const [contestTypeData, setContestTypeData] = useState(null)
    // console.log(contestTypeData);


    const contestType = async () => {
        try {
            const res = await contestTypes()
            // console.log(res?.data?.data);
            setContestTypeData(res?.data?.data)

        } catch (error) {

        }
    }

    const getTransitionReport = async (input) => {
        // console.log('iojijip');
        setLoading(true)
        const clone = { ...filterInitial, filter_type: param?.name, count: count, page: input, reward: +filterInitial.reward, amount: +filterInitial.amount, user_id: window.localStorage.getItem('userIdToken') }
        try {
            const res = await contestParticipate(clone)
            // console.log(res?.data?.data);
            setTotalCount(res?.data?.totalCount)
            setData(res?.data?.data)
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
            end_date: '',
            start_date: '',
            contest_type: '',
            contest_name: '',
            reward: '',
            amount: '',
            user_id: window.localStorage.getItem('userIdToken')
        }
        try {
            const res = await contestParticipate(obj)
            setTotalCount(res?.data?.data?.total)
            setData(res?.data?.data)
            setFilterInitial({
                end_date: '',
                start_date: '',
                contest_type: '',
                contest_name: '',
                reward: '',
                amount: '',
            })
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

        const clone = { ...filterInitial, count: count, page: page, reward: +filterInitial.reward, amount: +filterInitial.amount, sortType: +assending, sortKey: key, user_id: window.localStorage.getItem('userIdToken') }
        // console.log(clone);
        try {
            // const res = await walletsREports(clone)
            // // console.log(res?.data?.data?.wallet);
            // setTotalCount(res?.data?.data?.total)
            // setData(res?.data?.data?.wallet)
            // // getTransitionReport()
        } catch (error) {

        }
        setLoading(false)
    };

    const allDataWalletReport = async () => {
        const clone = { ...filterInitial, filter_type: param?.name, count: count, page: page, reward: +filterInitial.reward, amount: +filterInitial.amount, user_id: window.localStorage.getItem('userIdToken') }
        try {
            const res = await contestParticipateAll(clone)
            console.log(res?.data?.data);

            setAllData(res?.data?.data);
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
        contestType()
    }, [param])

    useEffect(() => {
        allDataWalletReport()
        getTransitionReport(0)

    }, [param])
    return (
        <>
            {loading && <Loader />}
            <div className="PageHeading">
                <h1>{nameHeading}</h1>
            </div>
            <div className="ContentArea">
                <div className="card">

                    <div className="card-header"><span>Filter</span></div>
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
                                    {/* <input type="date" name="end_date" id="account_no" className="form-control" value={filterInitial.end_date} onChange={handleChange} /> */}
                                    <input type="date" name="end_date" id="account_no" max={currentDate} defaultValue={currentDate} className="form-control" value={filterInitial.end_date} onChange={handleChange} />
                                </div>
                                <div className="form-group col-lg-4 col-md-12 ">
                                    <label htmlFor="txtUserId">CONTEST NAME</label>
                                    <input type="text" name="contest_name" id="account_no" className="form-control" placeholder="Enter Contest Name" value={filterInitial.contest_name} onChange={handleChange} />
                                    {/* <select class="form-select" name="type" value={filterInitial.type} onChange={handleChange}>
                                        <option selected>Select Type</option>
                                        <option value=" ">All</option>
                                        <option value="credit">Credit</option>
                                        <option value="debit">Debit</option>
                                    </select> */}
                                </div>

                                <div className="form-group col-lg-4 col-md-12 ">
                                    <label htmlFor="txtUserId">CONTEST TYPE</label>
                                    <select class="form-select" name="contest_type" value={filterInitial.contest_type} onChange={handleChange}>
                                        <option selected>Select Transaction Type</option>
                                        {contestTypeData && contestTypeData?.map((item) => {
                                            return <option value={item?._id} key={item?._id}>{item?.title}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="form-group col-lg-4 col-md-12 ">
                                    <label htmlFor="reward">Reward</label>
                                    <input type="number" name="reward" id="order_id" className="form-control" placeholder="Enter Price Money" value={filterInitial.reward} onChange={handleChange} />
                                </div>
                                <div className="form-group col-lg-4 col-md-12 ">
                                    <label htmlFor="amount">Joining fees</label>
                                    {/* <input type="number" name="txn_id " id="txn_id " className="form-control" placeholder="Enter Txn Id" value={filterInitial.txn_id} onChange={handleChange} /> */}
                                    <input type="number" name="amount" id="txn_id" className="form-control" placeholder="Enter Joining fees" value={filterInitial.amount} onChange={handleChange} />
                                </div>
                                <div className="form-group col-md-2">
                                    <label>&nbsp;</label>
                                    <button type="button" className="btn btn-primary mr-3" onClick={() => getTransitionReport(0)}>
                                        Search
                                    </button>
                                    <button type="button" className="btn btn-warning" onClick={ResetData}>Reset</button>
                                </div>

                            </div>
                        </form>
                    </div>

                </div>
                <div className="card mt-4" style={{ overflow: 'auto' }}>
                    <div className="card-body">
                        <div id="myTable_wrapper" className="dataTables_wrapper no-footer">
                            <div className="d-flex  justify-content-between align-items-center">
                                <div className="dataTables_length mb-3" id="myTable_length">
                                    <ReactHTMLTableToExcel
                                        id="test-table-xls-button"
                                        className="download-table-xls-button btn btn-success cusxel"
                                        table="table-to-xlsx"
                                        filename="tablexls"
                                        sheet="tablexls"
                                        buttonText="Download Excel sheet" />
                                </div>
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
                                        {/* <th className="sorting" onClick={() => sortByColumn('createdAt')}>Txn Date</th> */}

                                        {/* <th className="sorting">
                                            Contest Image
                                        </th> */}
                                        <th className="sorting">
                                            Contest Name
                                        </th>
                                        <th className="sorting" >From Date</th>
                                        <th className="sorting" >To Date</th>
                                        <th className="sorting">prediction</th>
                                        <th className="sorting" >Joining fees</th>


                                        <th className="sorting" >Reward</th>
                                        <th className="sorting" >Rank</th>
                                        <th className="sorting" >Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data?.map((item, i) => {
                                        // console.log(item);
                                        return <tr className="odd" key={item?._id}>
                                            <td valign="top" className="dataTables_empty">{(i + 1) + (page * count)}</td>
                                            {/* <td valign="top" className="dataTables_empty">---</td> */}

                                            {/* <td valign="top" className="dataTables_empty">{new Date(item?.createdAt).getDate() + "/" + Number(new Date(item?.createdAt).getMonth() + 1) + "/" + new Date(item?.createdAt).getFullYear() + "," + new Date(item?.createdAt).getHours() + ":" + new Date(item?.createdAt).getMinutes()}</td> */}
                                            {/* <td valign="top" className="dataTables_empty">{item?.updatedAt}</td> */}
                                            <th valign="top" className="dataTables_empty">
                                                {item?.contestid}
                                            </th>
                                            <td valign="top" className="dataTables_empty">{item?.contest_from_date}</td>
                                            <td valign="top" className="dataTables_empty">{item?.contest_to_date}</td>
                                            <td valign="top" className="dataTables_empty">{item?.prediction}</td>
                                            <td valign="top" className="dataTables_empty">{item?.isFree == false ? item?.amount : 'Free'}</td>
                                            <td valign="top" className="dataTables_empty">{item?.reward}</td>
                                            <td valign="top" className="dataTables_empty">{item?.ranking}</td>
                                            <td valign="top" className="dataTables_empty">
                                                <Link to={`/self/deatils/${item?.contest_id}`} className="btn btn-primary mr-3">Self Ranking </Link>
                                                <Link to={`/all/deatils/${item?.contest_id}`} className="btn btn-success">All Ranking </Link>
                                            </td>

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



            <table className="table table-striped table-bordered table-hover display dataTable no-footer dtr-inline collapsed d-none" id="table-to-xlsx" role="grid" aria-describedby="myTable_info" >
                <thead>
                    <tr role="row">
                        <th className="sorting">
                            S.No
                        </th>
                        {/* <th className="sorting" onClick={() => sortByColumn('createdAt')}>Txn Date</th> */}

                        {/* <th className="sorting">
                                            Contest Image
                                        </th> */}
                        <th className="sorting">
                            Contest Name
                        </th>
                        <th className="sorting" >From Date</th>
                        <th className="sorting" >To Date</th>
                        <th className="sorting">prediction</th>
                        <th className="sorting" >Joining fees</th>


                        <th className="sorting" >Price money</th>
                        <th className="sorting" >Rank</th>
                        {/* <th className="sorting" >Action</th> */}
                    </tr>
                </thead>
                <tbody>
                    {allData && allData?.map((item, i) => {
                        // console.log(item);
                        return <tr className="odd" key={item?._id}>
                            <td valign="top" className="dataTables_empty">{(i + 1) + (page * count)}</td>
                            {/* <td valign="top" className="dataTables_empty">---</td> */}

                            {/* <td valign="top" className="dataTables_empty">{new Date(item?.createdAt).getDate() + "/" + Number(new Date(item?.createdAt).getMonth() + 1) + "/" + new Date(item?.createdAt).getFullYear() + "," + new Date(item?.createdAt).getHours() + ":" + new Date(item?.createdAt).getMinutes()}</td> */}
                            {/* <td valign="top" className="dataTables_empty">{item?.updatedAt}</td> */}
                            <th valign="top" className="dataTables_empty">
                                {item?.contestid}
                            </th>
                            <td valign="top" className="dataTables_empty">{item?.contest_from_date}</td>
                            <td valign="top" className="dataTables_empty">{item?.contest_to_date}</td>
                            <td valign="top" className="dataTables_empty">{item?.prediction}</td>
                            <td valign="top" className="dataTables_empty">{item?.isFree == false ? item?.amount : 'Free'}</td>
                            <td valign="top" className="dataTables_empty">{item?.reward}</td>
                            <td valign="top" className="dataTables_empty">{item?.ranking}</td>
                            {/* <td valign="top" className="dataTables_empty">
                                <button>Join Now</button>
                            </td> */}

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
        </>
    )
}
export default AllContestList