import React from "react";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import ListIcon from "@mui/icons-material/List";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const BottomHeader = () => {
  return (
    <Box
      sx={{
        display: {
          xs: "flex",
          lg: "none",
        },
        justifyContent: "space-around",
        borderTop: "1px solid #ccc",
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#fff",
      }}
    >
      <Link to="/" className="w-full">
        <Button
          variant="text"
          fullWidth
          color="divar"
          sx={{
            borderRadius: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src="divar.svg" alt="Icon" width={28} height={28} />
          <span className="pt-1">آگهی‌ ها</span>
        </Button>
      </Link>
      <Button
        variant="text"
        fullWidth
        color="secondary"
        sx={{
          borderRadius: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "#666",
          "&:hover": { color: "black", background: "rgba(0,0,0,0.1)" },

          padding: "10px",
        }}
      >
        <ListIcon />
        <span className="pt-1"> دسته‌ها</span>
      </Button>

      <Button
        variant="text"
        fullWidth
        color="secondary"
        sx={{
          borderRadius: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "#666",
          "&:hover": { color: "black", background: "rgba(0,0,0,0.1)" },
        }}
      >
        <AddCircleRoundedIcon />
        <span className="pt-1"> ثبت آگهی</span>
      </Button>
      <Button
        variant="text"
        fullWidth
        color="secondary"
        sx={{
          borderRadius: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "#666",
          "&:hover": { color: "black", background: "rgba(0,0,0,0.1)" },
        }}
      >
        <ForumRoundedIcon />
        <span className="pt-1">چت</span>
      </Button>

      <Link to="/dashboard" className="w-full">
        <Button
          variant="text"
          fullWidth
          color="secondary"
          sx={{
            borderRadius: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#666",
            "&:hover": { color: "black", background: "rgba(0,0,0,0.1)" },
            height: "100%",
          }}
        >
          <PersonIcon />
          <span className="pt-1"> دیوار من</span>
        </Button>
      </Link>
    </Box>
  );
};

export default BottomHeader;
