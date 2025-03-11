import React from "react";
import Tree from "./Tree";
import "../mytree/Tree.css"

export default function AiTree() {
    return (
        <div>
            <div className="PageHeading">
                <h1>My Tree</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>My Tree</span></div>
                    <div className="card-body p-1">
                        <Tree />
                    </div>
                </div>
            </div>
        </div>
    )
}