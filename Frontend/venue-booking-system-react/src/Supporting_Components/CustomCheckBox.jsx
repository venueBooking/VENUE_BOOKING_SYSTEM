import { Checkbox, FormControlLabel } from "@mui/material";
// import { pink } from "@mui/material/colors";
import React from "react";

function CustomCheckBox(props) {
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            id="checkbox-div"
            style={{
              color: "white",
            }}
          />
        }
        label={props.label1}
      />

      <FormControlLabel
        control={
          <Checkbox
            id="checkbox-div"
            style={{
              color: "white",
            }}
          />
        }
        label={props.label2}
      />
      <FormControlLabel
        control={
          <Checkbox
            id="checkbox-div"
            style={{
              color: "white",
            }}
          />
        }
        label={props.label3}
      />
    </>
  );
}

export default CustomCheckBox;
