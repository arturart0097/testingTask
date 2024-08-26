import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 220,
    },
  },
};

const CustomSelect = styled(Select)(() => ({
  width: 500,
  height: 48,
  fontWeight: "bold",
  padding: "8px 12px 8px 24px",
  gap: "12px",
  position: "relative",
  border: "1px solid #E3E8EE",
}));

const CustomMenuItem = styled(MenuItem)(() => ({
  width: 500,
  height: 40,
  padding: "8px 25px 8px 25px",
  gap: "12px",
}));

const CustomTypography = styled(Typography)(() => ({
  fontFamily: "Rubik",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "20px",
  letterSpacing: "0.2px",
  textAlign: "left",
  color: "#5E626B",
}));

const CustomDropdownIcon = styled("svg")(({ open }) => ({
  transform: open ? "rotate(180deg)" : "rotate(0deg)",
  transition: "transform 0.3s ease",
}));

function MultipleSelect({ names = [], value, onChange }) {
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <FormControl sx={{ width: 500 }}>
      <CustomSelect
        value={value}
        onChange={handleChange}
        onOpen={handleOpen}
        onClose={handleClose}
        MenuProps={MenuProps}
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
          value
            ? {
                fontFamily: "Rubik",
                fontSize: 14,
                fontWeight: 400,
                letterSpacing: "0.2px",
                textAlign: "left",
                color: "#000",
              }
            : {
                fontFamily: "Rubik",
                fontSize: 14,
                fontWeight: 400,
                letterSpacing: "0.2px",
                textAlign: "left",
                color: "#C2C2C2",
              }
        }
      >
        {names.map((name) => (
          <CustomMenuItem key={name} value={name}>
            <CustomTypography>{name}</CustomTypography>
          </CustomMenuItem>
        ))}
      </CustomSelect>
    </FormControl>
  );
}

MultipleSelect.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default MultipleSelect;
