import { Link } from "react-router-dom"





export const SelectStock = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Select Stock",
        path_1: "",
    }
    return (
        <>
            <div className="row m-2">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">Select Stock </h4>
                                    <div>
                                        {/* <Link className="btn btn-primary btn-sm" to="/create-colleges" role="button" aria-controls="offcanvasExample">+ CREATE COLLEGES</Link> */}
                                        {/* <button type="button" className="btn btn-secondary btn-sm" >
                                        + Invite Employee
                                    </button> */}
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="stock-header">
                                            <p>Select 11 Companies</p>
                                            <p>Money Left: ₹11,00,000.00</p>
                                        </div>
                                        {/* Progress Bar */}
                                        <div className="progress-bar" />
                                        {/* Instruction Section */}
                                        <div className="instructions">
                                            <p>Pick 11 Stocks worth ₹1,00,000 each</p>
                                            <div className="preview">
                                                <span>Preview</span> ▶
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="search-bar">
                                            <input type="text" placeholder="Search" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="stock-selection-container">
                                            <div className="stock-list">
                                                {/* Stock Item 1 */}
                                                <div className="stock-item">
                                                    <div className="stock-info">
                                                        <h3>NIFTY 50</h3>
                                                        <p className="stock-price">16676.95</p>
                                                        <p className="stock-low">16506.15 <span className="down-arrow">▼</span></p>
                                                    </div>
                                                    <input type="checkbox" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="stock-selection-container">
                                            <div className="stock-list">
                                                {/* Stock Item 1 */}
                                                <div className="stock-item">
                                                    <div className="stock-info">
                                                        <h3>NIFTY 50</h3>
                                                        <p className="stock-price">16676.95</p>
                                                        <p className="stock-low">16506.15 <span className="down-arrow">▼</span></p>
                                                    </div>
                                                    <input type="checkbox" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="stock-selection-container">
                                            <div className="stock-list">
                                                {/* Stock Item 1 */}
                                                <div className="stock-item">
                                                    <div className="stock-info">
                                                        <h3>NIFTY 50</h3>
                                                        <p className="stock-price">16676.95</p>
                                                        <p className="stock-low">16506.15 <span className="down-arrow">▼</span></p>
                                                    </div>
                                                    <input type="checkbox" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="stock-selection-container">
                                            <div className="stock-list">
                                                {/* Stock Item 1 */}
                                                <div className="stock-item">
                                                    <div className="stock-info">
                                                        <h3>NIFTY 50</h3>
                                                        <p className="stock-price">16676.95</p>
                                                        <p className="stock-low">16506.15 <span className="down-arrow">▼</span></p>
                                                    </div>
                                                    <input type="checkbox" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="stock-selection-container">
                                            <div className="stock-list">
                                                {/* Stock Item 1 */}
                                                <div className="stock-item">
                                                    <div className="stock-info">
                                                        <h3>NIFTY 50</h3>
                                                        <p className="stock-price">16676.95</p>
                                                        <p className="stock-low">16506.15 <span className="down-arrow">▼</span></p>
                                                    </div>
                                                    <input type="checkbox" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="stock-selection-container">
                                            <div className="stock-list">
                                                {/* Stock Item 1 */}
                                                <div className="stock-item">
                                                    <div className="stock-info">
                                                        <h3>NIFTY 50</h3>
                                                        <p className="stock-price">16676.95</p>
                                                        <p className="stock-low">16506.15 <span className="down-arrow">▼</span></p>
                                                    </div>
                                                    <input type="checkbox" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 text-center">
                                        <Link to="#" className="btn btn-primary " style={{ width: '200px' }}>Next</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
