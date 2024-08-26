import TextField from "@mui/material/TextField";

export default function Input() {
  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      InputProps={{
        sx: {
          width: 500,
          height: 48,
          padding: "8px 12px 8px 24px",
          gap: 12,
          border: "1px solid #E3E8EE",
          fontFamily: "Rubik",
          fontSize: 14,
          fontWeight: 400,
          lineHeight: "20px",
          letterSpacing: "0.2px",
          textAlign: "left",
          boxSizing: "border-box",
        },
      }}
      InputLabelProps={{
        sx: {
          fontFamily: "Rubik",
          fontSize: 14,
          fontWeight: 400,
          letterSpacing: "0.2px",
          color: "#5E626B",
        },
      }}
    />
  );
}
