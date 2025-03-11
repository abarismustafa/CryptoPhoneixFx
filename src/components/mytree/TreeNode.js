import React from "react";

export default function TreeNode({ label, children }) {
    return(<div className="tree-node text-center">
      <div className="user-circle mb-3">{label}</div>
      {children && <div className="tree-children">{children}</div>}
    </div>)
};