import React, { useState } from "react";
import image from "../../asesets/banner/default.png";

const deposite = [
    { label: "Account Balance ($9,882,318)", icon: image , index: "0"},
    { label: "Authorize.net - USD", icon: image, index: "0" },
    { label: "BTCPay - BTC", icon: image, index: "0" },
    { label: "Cashmaal - PKR", icon: image, index: "0" },
    { label: "Coinbase Commerce - USD", icon: image, index: "0" },
    { label: "CoinPayments - BTC", icon: image, index: "0" },
    { label: "CoinPayments - ETH", icon: image , index: "0"},
    { label: "CoinPayments Fiat - USD", icon: image, index: "0" },
    { label: "Instamojo - INR", icon: image, index: "0" },
];

export default function DepositType() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="card overflow-auto" style={{ height: "350px" }}>
            <ul className="p-0">
                {deposite.map((item, i) => (
                    <li
                        key={i}
                        className={`p-3 m-0 d-flex align-items-center justify-content-between border ${
                            selectedIndex === item.index ? "selected-item" : ""
                        }`}
                        style={{
                            position: "relative",
                            borderLeft: selectedIndex === item.index ? "5px solid #4A00E0" : "none",
                        }}
                    >
                        <div
                            className="d-flex gap-2"
                            style={{ position: "relative", left: "20px" }}
                        >
                            <input
                                className="form-check-input d-block"
                                type="radio"
                                name="flexRadioDefault"
                                onChange={() => setSelectedIndex(item.index)}
                            />
                            <label className="form-label m-0">{item.label}</label>
                        </div>
                        <div>
                            <div
                                className="rounded-circle overflow-hidden"
                                style={{ width: "40px", height: "40px" }}
                            >
                                <img
                                    src={item.icon}
                                    alt="Icon"
                                    className="w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
