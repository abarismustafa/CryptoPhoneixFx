import { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { IoSettings } from "react-icons/io5";

const DEFAULT_COLOR = "";
function RightSideBarSettings({ name, ...props }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [selectedColor, setSelectedColor] = useState(DEFAULT_COLOR);

    const handleColorChange = (e) => {
        const newColor = e.target.value;
        // setResetTheamm(newColor)
        setSelectedColor(newColor);
        // document.body.style.backgroundColor = newColor;
        // document.getElementById("abc").style.backgroundColor = newColor;
        document.getElementById("abcd").style.backgroundColor = `${newColor}`;
        document.getElementById("aside").style.backgroundColor = newColor;
        document.getElementById("topHeader").style.backgroundColor = newColor;
        setShow(false);
    };

    const resetTheam = () => {
        setSelectedColor(DEFAULT_COLOR);
        document.body.style.backgroundColor = DEFAULT_COLOR;
        document.getElementById("abcd").style.backgroundColor = DEFAULT_COLOR;
        document.getElementById("aside").style.backgroundColor = DEFAULT_COLOR;
        document.getElementById("topHeader").style.backgroundColor = DEFAULT_COLOR;
        setShow(false);
    };


    const [fontSize, setFontSize] = useState(15);

    const increaseFontSize = () => {
        setFontSize((prevSize) => prevSize + 2);
        updateBodyFontSize(fontSize + 2);
    };

    const decreaseFontSize = () => {
        setFontSize((prevSize) => Math.max(prevSize - 2, 8));
        updateBodyFontSize(fontSize - 2);
    };

    const updateBodyFontSize = (size) => {
        // document.body.style.fontSize = `${size}px`;
        var allElements = document.getElementsByTagName("*");
        var newFontSize = `${size}px`;
        for (var i = 0; i < allElements.length; i++) {
            allElements[i].style.fontSize = newFontSize;
        }
    };

    const reset = () => {
        setFontSize(15);
    };


    useEffect(() => {
        updateBodyFontSize(fontSize);
    }, [fontSize]);
    return (
        <>
            <a className="sidebar-right-trigger wave-effect wave-effect-x" onClick={handleShow} data-bs-toggle="tooltip" data-placement="right" data-original-title="Change Layout" href="javascript:void(0);">
                <IoSettings className="fa-spin" />
            </a>
            <Offcanvas
                className="dilog-class"
                show={show}
                onHide={handleClose}
                {...props}
            >
                <Offcanvas.Header
                    closeButton
                    style={{ background: "#161616", color: "white" }}
                >
                    <Offcanvas.Title style={{ color: "white" }}>
                        Pick your style
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="them">
                                <h3>Background Theme</h3>
                                <div className="color-picker-container">
                                    <input
                                        type="color"
                                        value={selectedColor}
                                        onChange={handleColorChange}
                                    />
                                    <button
                                        className=" btn btn-sm border-0 btn-danger btn-danger-2"
                                        onClick={resetTheam}
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="active-projects">
                                <h3>Font Size Change</h3>
                                <button
                                    className="dt-button-2  btn btn-sm border-0"
                                    onClick={decreaseFontSize}
                                >
                                    A-
                                </button>
                                <button
                                    className="dt-button-2 btn btn-sm border-0"
                                    onClick={increaseFontSize}
                                >
                                    A+
                                </button>
                                <button
                                    className=" btn btn-sm border-0 btn-danger"
                                    onClick={reset}
                                >
                                    Reset
                                </button>
                            </div>
                        </div>
                        {/* <div className="col-lg-6 mt-3">
                            <label htmlFor="exampleFormControlInput2" className="form-label">
                                Select Country
                            </label>
                            <select id="disabledSelect" class="form-select">
                                <option selected>--Select Country--</option>
                                <option value="1">--India--</option>
                                <option value="2">--Dubai--</option>
                            </select>
                        </div> */}
                        {/* <div className="col-lg-6 mt-3">
                            <label htmlFor="exampleFormControlInput2" className="form-label">
                                Select Language
                            </label>
                            <select
                                id="disabledSelect"
                                class="form-select"
                           
                            >
                                <option selected>--Select Language--</option>
                                <option value="en">English</option>
                                <option value="hn">Hindi</option>
                                <option value="ar">Arabic</option>
                                <option value="cn">Chinese</option>
                                <option value="pl">Polish</option>
                                <option value="rs">Russian</option>
                                <option value="kn">Kannada</option>
                                <option value="mr">Marathi</option>
                                <option value="pn">Punjabi</option>
                                <option value="ur">Urdu</option>
                                <option value="tl">Tamil</option>
                            </select>
                        </div> */}
                    </div>
                </Offcanvas.Body>
            </Offcanvas>

        </>
    )
    // fa - spin
}
export default RightSideBarSettings