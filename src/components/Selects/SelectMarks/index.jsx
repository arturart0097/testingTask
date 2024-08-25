import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: "220px",
    },
  },
};

const CustomCheckbox = styled(Checkbox)(({ theme, checked }) => ({
  color: checked ? "black" : theme.palette.action.disabled,
  "&.Mui-checked": {
    color: "black",
  },
  width: "24px",
  height: "24px",
  borderRadius: 0,
}));

const CustomSelect = styled(Select)(() => ({
  width: 220,
  height: 48,
  fontWeight: "bold",
  padding: "8px 12px 8px 24px",
  gap: "12px",
  position: "relative",
}));

const defaultNames = [];

function MultipleSelectCheckmarks({ names = defaultNames, selectTitle }) {
  const [selectedNames, setSelectedNames] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedNames(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 220, height: 48 }}>
        <CustomSelect
          id="demo-multiple-checkbox"
          multiple
          value={selectedNames}
          onChange={handleChange}
          renderValue={() =>
            selectedNames.length > 0
              ? `Selected (${selectedNames.length})`
              : selectTitle
          }
          MenuProps={MenuProps}
          displayEmpty
          sx={
            selectedNames.length > 0 ? { color: "#000" } : { color: "#C2C2C2" }
          }
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              sx={{
                width: 220,
                height: "40px",
                padding: "8px 25px 8px 25px",
                gap: "12px",
              }}
            >
              <CustomCheckbox checked={selectedNames.indexOf(name) > -1} />
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      fontFamily: "Rubik",
                      fontSize: "14px",
                      fontWeight: 300,
                      lineHeight: "20px",
                      letterSpacing: "0.2px",
                      textAlign: "left",
                      color: "#5E626B",
                    }}
                  >
                    {name}
                  </Typography>
                }
              />
            </MenuItem>
          ))}
        </CustomSelect>
      </FormControl>
    </div>
  );
}

MultipleSelectCheckmarks.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string),
  selectTitle: PropTypes.string,
};

export default MultipleSelectCheckmarks;
