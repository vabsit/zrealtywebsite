import React from "react";
import "./OrgChart.css";

const OrgChartNode = ({ node }: { node: any }) => {
  const hasChildren = node.children?.length > 0;

  return (
    <div className="node-container">
      <div className="node-box" style={{ backgroundColor: node.color }}>
        {node.name}
      </div>

      {hasChildren && (
        <div className="connector">
          <div className="vertical-line"></div>
          <div className="horizontal-wrapper">
            <div className="horizontal-line"></div>
            <div className="children">
              {node.children.map((child: any, idx: number) => (
                <div key={idx} className="child-wrapper">
                  <OrgChartNode node={child} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const OrgChart = () => {
  const data = {
    name: "John Peter",
    color: "#d2f0fd",
    children: [
      {
        name: "Mark Houston",
        color: "#f9f8c9",
        children: [
          {
            name: "Amelia Burrows",
            color: "#e2fbfe",
            children: [
              { name: "Matt Snap", color: "#d7d9ff" },
              { name: "Liz Wiseman", color: "#d7d9ff" }
            ]
          },
          {
            name: "Emily Ross",
            color: "#ffe5e7",
            children: [
              { name: "Alex Hugh", color: "#ffe5e7" }
            ]
          }
        ]
      }
    ]
  };

  return (
    <div className="tree-root">
      <OrgChartNode node={data} />
    </div>
  );
};

export default  OrgChart;

