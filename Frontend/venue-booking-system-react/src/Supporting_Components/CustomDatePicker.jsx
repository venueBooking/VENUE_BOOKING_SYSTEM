import React, { useState } from "react";

function CustomDatePicker() {
  const [date, setDate] = useState();

  return (
    <>
      <div id="date-div">
        <input
          type="date"
          id="dt-div"
          onChange={(e) => setDate(e.target.value)}
          style={{
            color: "white",
            fontSize: "20px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        />
      </div>
    </>
  );
}

export default CustomDatePicker;
