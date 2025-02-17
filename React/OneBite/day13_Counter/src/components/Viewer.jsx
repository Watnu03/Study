import React from "react";

const Viewer = ({ count }) => {
  return (
    <section
      style={{
        height: "135px",
        paddingTop: "20px",
        paddingBottom: "20px",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "start",
      }}
    >
      <p>현재 카운트 :</p>
      <p style={{ fontSize: "28px", fontWeight: "bold" }}>{count}</p>
    </section>
  );
};

export default Viewer;
