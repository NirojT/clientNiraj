import * as React from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Collapse from "@mui/material/Collapse";
import FormControlLabel from "@mui/material/FormControlLabel";

function Test() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <Box sx={{}} className="min-h-screen overflow-hidden">
        <div>
          <div className="" onClick={handleChange}>
            click
          </div>
          <Box>
            <Collapse
              orientation="horizontal"
              in={checked}
              onClick={handleChange}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, officiis nulla! Vel nobis sit voluptatibus
                repudiandae minima perferendis, quaerat explicabo impedit soluta
                magnam similique illo. Perspiciatis, adipisci. Sint, veritatis
                ut?
              </p>
              <img
                src="https://blogs.worldbank.org/sites/default/files/ppps/gif.png"
                alt=""
                className="h-[20em]"
              />
            </Collapse>
          </Box>
        </div>
      </Box>
    </>
  );
}

export default Test;
