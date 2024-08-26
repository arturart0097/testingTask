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

const CustomDropdownIcon = styled("svg")(({ open }) => ({
  transform: open ? "rotate(180deg)" : "rotate(0deg)",
  transition: "transform 0.3s ease",
}));

const CustomSelect = styled(Select)(() => ({
  width: 220,
  height: 48,
  fontWeight: "bold",
  padding: "8px 12px 8px 24px",
  gap: "12px",
  position: "relative",
  border: "1px solid #E3E8EE",
}));

function MultipleSelectCheckmarks({ names, selectTitle, selectedNames, onChange, disabled }) {
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    onChange(typeof value === "string" ? value.split(",") : value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 220, height: 48 }}>
        <CustomSelect
          id="demo-multiple-checkbox"
          multiple
          value={selectedNames}
          onChange={handleChange}
          onOpen={handleOpen}
          onClose={handleClose}
          renderValue={() =>
            selectedNames.length > 0
              ? `Selected (${selectedNames.length})`
              : selectTitle
          }
          MenuProps={MenuProps}
          displayEmpty
          IconComponent={() => (
            <div
              style={{
                width: "32px",
                height: "32px",
                padding: "8px 0px 0px 0px",
                gap: "10px",
              }}
            >
              <CustomDropdownIcon
                open={open}
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2649 6.265C11.1946 6.33522 11.0993 6.37467 10.9999 6.37467C10.9005 6.37467 10.8052 6.33522 10.7349 6.265L5.99992 1.53062L1.26492 6.265C1.19384 6.33124 1.09981 6.3673 1.00266 6.36559C0.905511 6.36387 0.812819 6.32452 0.744112 6.25581C0.675406 6.1871 0.63605 6.09441 0.634336 5.99726C0.632622 5.90011 0.668683 5.80609 0.734923 5.735L5.73492 0.734998C5.80524 0.664773 5.90055 0.625328 5.99992 0.625328C6.0993 0.625328 6.19461 0.664773 6.26492 0.734998L11.2649 5.735C11.3351 5.80531 11.3746 5.90062 11.3746 6C11.3746 6.09937 11.3351 6.19469 11.2649 6.265Z"
                  fill="#1B2438"
                />
              </CustomDropdownIcon>
            </div>
          )}
          sx={
            selectedNames.length > 0
              ? {
                  fontFamily: "Rubik",
                  fontSize: 14,
                  fontWeight: 400,
                  letterSpacing: "0.20002500712871552px",
                  textAlign: "left",
                  color: "#000",
                }
              : {
                  fontFamily: "Rubik",
                  fontSize: 14,
                  fontWeight: 400,
                  letterSpacing: "0.20002500712871552px",
                  textAlign: "left",
                  color: "#C2C2C2",
                }
          }
          disabled={disabled}
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
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectTitle: PropTypes.string.isRequired,
  selectedNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default MultipleSelectCheckmarks;
