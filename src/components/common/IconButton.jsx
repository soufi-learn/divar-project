import { Button } from "@mui/material";

const CustomIconButton = ({ title, icon, align = "start" }) => {
  return (
    <Button
      variant="text"
      color="secondary"
      startIcon={align === "start" ? icon : null}
      endIcon={align === "end" ? icon : null}
      className="hide-on-mobile"
      sx={{
        marginLeft: ".5rem",
        padding: ".5rem 1rem",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.04)",
          color: "black",
        },
      }}
    >
      {title}
    </Button>
  );
};

export default CustomIconButton;
