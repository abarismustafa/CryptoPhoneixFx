import { Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import Loader from '../../../common/loader/Loader';
import { geSocietyIncomeRepots } from '../../../api/login/Login';
import { Badge } from 'react-bootstrap';

const SocityIncome = () => {
    const getCurrentDate = () => new Date().toISOString().substr(0, 10);

    const [currentDate, setCurrentDate] = useState(getCurrentDate());
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10);
    const [page, setPage] = useState(0);
    const [state, setState] = useState(null);

    const [filterInitial, setFilterInitial] = useState({
        user_id: '',
        count: '',
        page: '',
        end_date: getCurrentDate(),
        start_date: getCurrentDate(),
    });

    const handleChange = (e) => {
        setFilterInitial({ ...filterInitial, [e.target.name]: e.target.value });
    };

    const getTransitionReport = async (page = 0) => {
        setLoading(true);
        try {
            const res = await geSocietyIncomeRepots({
                ...filterInitial,
                count,
                page,
                user_id: window.localStorage.getItem('userIdToken')
            });
            setState(res);
        } catch (error) {
            console.error("Error fetching data", error);
        }
        setLoading(false);
    };

    useEffect(() => {
        getTransitionReport();
    }, []);

    return (
        <>
            {loading && <Loader />}
            <div className="PageHeading">
                <h1>Society Income Report</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>Filter</span></div>
                    <div className="card-body">
                        <form>
                            <div className="form-row" style={{ alignItems: 'end' }}>
                                <div className="form-group col-lg-4 col-md-12 ">
                                    <label>Start Date</label>
                                    <input type="date" name="start_date" max={currentDate} className="form-control" value={filterInitial.start_date} onChange={handleChange} />
                                </div>
                                <div className="form-group col-lg-4 col-md-12 ">
                                    <label>End Date</label>
                                    <input type="date" name="end_date" max={currentDate} className="form-control" value={filterInitial.end_date} onChange={handleChange} />
                                </div>
                                <div className="form-group col-md-2">
                                    <label>&nbsp;</label>
                                    <button type="button" className="btn btn-primary" onClick={() => getTransitionReport(0)}>
                                        Search
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card mt-4" style={{ overflow: 'auto' }}>
                    <div className="card-body">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr role="row">
                                    <th className="sorting">
                                        S.No
                                    </th>
                                    <th className="sorting" >Amount</th>
                                    <th className="sorting" >Turn Over</th>
                                    <th className="sorting">
                                        No Of Down line
                                    </th>
                                    <th className="sorting">
                                    Min Pairs Required
                                    </th>
                                    <th className="sorting">
                                    Society
                                    </th>
                                    <th className="sorting" >Member Name</th>
                                    <th className="sorting" >Member Code</th>
                                    <th className="sorting" >Pay Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {state?.data?.data?.map((item, i) => {
                                    return <tr className="odd" key={item?._id}>
                                        <td valign="top" className="dataTables_empty">{(i + 1) + (page * count)}</td>



                                        <th valign="top" className="dataTables_empty">
                                            {item?.amount}
                                        </th>
                                        <td valign="top" className="dataTables_empty">{item?.turnover}</td>
                                        <td valign="top" className="dataTables_empty">{item?.no_of_downlines}</td>
                                        <td valign="top" className="dataTables_empty">{item?.min_pairs_required}</td>
                                        <td valign="top" className="dataTables_empty">{item?.member_name}</td>
                                        <td valign="top" className="dataTables_empty">{item?.member_code}</td>
                                        <td valign="top" className="dataTables_empty">{item?.member_name}</td>
                                        <td valign="top" className="dataTables_empty"><Badge>{item?.pay_status}</Badge></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="dataTables_info_page">
                    <div className="dataTables_info">
                        Total {state?.data?.totalCount} entries
                    </div>
                    <Pagination defaultCurrent={1} onChange={(page) => getTransitionReport(page - 1)} total={state?.data?.totalCount} />
                </div>
            </div>
        </>
    );
};

export default SocityIncome;
