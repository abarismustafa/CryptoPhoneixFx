import { Pagination } from "antd";
import { useEffect, useState } from "react";
import { withdrowRports } from "../../../../api/login/Login";
import Loader from "../../../../common/loader/Loader";
import { useParams } from "react-router-dom";



const ListWithdrawRequests = ({ nameHeading }) => {
    const params = useParams()
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
        type: '',
        trans_type: '',
        order_id: '',
        txn_id: '',
        sortType: '',
        sortType: '',
        search: '',
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
        const clone = { ...filterInitial, count: count, page: input, status: params?.name == 'All' ? '' : params?.name, min_amt: +filterInitial.min_amt, max_amt: +filterInitial.max_amt, user_id: window.localStorage.getItem('userIdToken') }
        try {
            const res = await withdrowRports(clone)
            // console.log(res);
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
            transaction_no: '',
            user_id: window.localStorage.getItem('userIdToken')
        }
        try {
            const res = await withdrowRports(obj)
            setTotalCount(res?.data?.data?.total)
            setData(res?.data?.data?.wallet)
            setFilterInitial({
                end_date: '',
                start_date: '',
                // type: '',
                // trans_type: '',
                // order_id: '',
                // txn_id: '',
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

        const clone = { ...filterInitial, count: count, page: page, min_amt: +filterInitial.min_amt, max_amt: +filterInitial.max_amt, sortType: +assending, sortKey: key, user_id: window.localStorage.getItem('userIdToken') }
        // console.log(clone);
        try {
            // const res = await walletsREports(clone)
            // console.log(res?.data?.data?.wallet);
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
    }, [params])

    useEffect(() => {
        allDataWalletReport()
        getTransitionReport(0)

    }, [params])



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

                                    <input type="date" name="end_date" id="account_no" max={currentDate} defaultValue={currentDate} className="form-control" value={filterInitial.end_date} onChange={handleChange} />
                                </div>
                                <div className="form-group col-lg-4 col-md-12 ">
                                    <label htmlFor="order_id">Txn Number</label>
                                    <input type="text" name="search" id="order_id" className="form-control" placeholder="Enter Order Id" value={filterInitial.search} onChange={handleChange} />
                                </div>
                                {/* <div className="form-group col-lg-4 col-md-12 ">
                                    <label htmlFor="txtUserId">Type</label>
                                    <select class="form-select" name="type" value={filterInitial.type} onChange={handleChange}>
                                        <option selected>Select Type</option>
                                        <option value=" ">All</option>
                                        <option value="credit">Credit</option>
                                        <option value="debit">Debit</option>
                                    </select>
                                </div>

                                <div className="form-group col-lg-4 col-md-12 ">

                                    <label htmlFor="txtUserId">Transaction Type</label>
                                    <select class="form-select" name="trans_type" value={filterInitial.trans_type} onChange={handleChange}>
                                        <option selected>Select Transaction Type</option>
                                        <option value="refund">Refund</option>
                                        <option value="recharge">Recharge</option>
                                        <option value="transfer">Transfer</option>
                                        <option value="order">Order</option>
                                        <option value="bill_pay">bill_pay</option>
                                        <option value="pan">Pan</option>
                                        <option value="fastag">Fastag</option>
                                        <option value="credit_card">Credit Card</option>
                                        <option value="lic_bill">lic bill</option>
                                        <option value="qr_code">qr_code</option>
                                        <option value="add-wallet">add-wallet</option>
                                        <option value="onBoarding">On Boarding</option>
                                        <option value="fromAEPS">fromAEPS</option>
                                        <option value="reversal">reversal</option>
                                        <option value="ureversal">ureversal</option>
                                        <option value="ucommission">commission</option>
                                        <option value="validate_beneficiary">validate_beneficiary</option>
                                        <option value="dmt">dmt</option>
                                        <option value="dmt_rev">dmt_rev</option>
                                        <option value="admintrf">admin transfer</option>
                                        <option value="cms">CMS</option>
                                    </select>

                                </div>
                                <div className="form-group col-lg-4 col-md-12 ">
                                    <label htmlFor="order_id">Order Id</label>
                                    <input type="text" name="order_id" id="order_id" className="form-control" placeholder="Enter Order Id" value={filterInitial.order_id} onChange={handleChange} />
                                </div>
                                <div className="form-group col-lg-4 col-md-12 ">
                                    <label htmlFor="txn_id">Txn Id</label>
                                   
                                    <input type="text" name="txn_id" id="txn_id" className="form-control" placeholder="Enter Txn Id" value={filterInitial.txn_id} onChange={handleChange} />
                                </div> */}
                                <div className="form-group col-lg-4 col-md-12  d-flex">
                                   
                                    <button type="button" className="btn btn-primary mr-2" onClick={() => getTransitionReport(0)}>
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
                                        <th className="sorting" onClick={() => sortByColumn('createdAt')}>Request Date</th>


                                        <th className="sorting">
                                            Bank Name

                                        </th>
                                        <th className="sorting">
                                            Holder Name
                                        </th>
                                        <th className="sorting" >IFSC</th>
                                        <th className="sorting" >Bank Account number</th>
                                        <th className="sorting" >Amount</th>
                                        <th className="sorting">
                                            Txn Date
                                        </th>
                                        <th className="sorting">
                                            Txn Number
                                        </th>

                                        <th className="sorting">
                                            Remark
                                        </th>

                                        <th className="sorting" >Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data?.map((item, i) => {
                                        // console.log(item);
                                        return <tr className="odd" key={item?._id}>
                                            <td valign="top" className="dataTables_empty">{(i + 1) + (page * count)}</td>
                                            <td valign="top" className="dataTables_empty">{item?.createdAt}</td>

                                            {/* <td valign="top" className="dataTables_empty">{new Date(item?.createdAt).getDate() + "/" + Number(new Date(item?.createdAt).getMonth() + 1) + "/" + new Date(item?.createdAt).getFullYear() + "," + new Date(item?.createdAt).getHours() + ":" + new Date(item?.createdAt).getMinutes()}</td> */}
                                            {/* <td valign="top" className="dataTables_empty">{item?.updatedAt}</td> */}
                                            <th valign="top" className="dataTables_empty">
                                                {item?.bank_name}
                                            </th>
                                            <td valign="top" className="dataTables_empty">{item?.holder_name}</td>
                                            <td valign="top" className="dataTables_empty">{item?.ifsc}</td>
                                            {/* <td valign="top" className="dataTables_empty">{item?.approval == true ? 'Yes' : 'No'}</td> */}
                                            <td valign="top" className="dataTables_empty">{item?.bank_account_number}</td>
                                            {/* <td valign="top" className="dataTables_empty">{item?.payment_method}</td> */}
                                            <td valign="top" className="dataTables_empty">{item?.amount}</td>
                                            <td valign="top" className="dataTables_empty">{item?.transaction_date}</td>
                                            <td valign="top" className="dataTables_empty">{item?.transaction_no}</td>
                                            <td valign="top" className="dataTables_empty">{item?.remark}</td>
                                            <td valign="top" className="dataTables_empty">
                                                {item?.status}

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


        </>
    )
}

export default ListWithdrawRequests