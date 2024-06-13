import "../styles/header.css";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import SupportIcon from "@mui/icons-material/Support";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import CustomIconButton from "../components/common/IconButton";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar
      className="lg:px-8"
      sx={{ background: "#fff", boxShadow: "0 0 2px #ccc" }}
    >
      <Toolbar className="flex justify-between">
        <Box
          display="flex"
          alignItems="center"
          sx={{
            width: {
              xs: "100%",
              lg: "fit-content",
            },
          }}
        >
          <Link
            to="/"
            className="relative after:absolute after:w-[1.3px] after:h-3/5 after:bg-slate-300 after:top-1/2 after:-translate-y-1/2 after:content-[''] after:-left-5 ml-6 hide-on-mobile"
          >
            <img src="divar.svg" className="w-11" />
          </Link>

          <CustomIconButton
            title="تهران"
            icon={<LocationOnOutlinedIcon />}
            align="start"
          />

          <CustomIconButton
            title=" دسته ها"
            icon={<KeyboardArrowDownRoundedIcon />}
            align="end"
          />

          <div className="relative" id="input-container">
            <input
              type="text"
              placeholder="جستجو در همهٔ آگهی‌ها"
              className="px-4 py-2 mr-4 text-gray-700 transition-all bg-gray-100 border border-slate-200 focus:border-slate-400 rounded-[5px] placeholder:text-[.88rem]  outline-none  placeholder:text-gray-400 pl-10 input-box xl:w-[480px]"
            />

            <Button
              variant="text"
              color="secondary"
              size="small"
              sx={{
                position: "absolute",
                minWidth: "3rem",
                borderRadius: 0,
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.05)",
                  color: "black",
                },
              }}
              className="left-0 h-full -translate-y-1/2 top-1/2 400"
            >
              <SearchIcon fontSize="small" />
            </Button>
          </div>
        </Box>

        <Box display="flex" alignItems="center" className="hide-on-mobile">
          <Link to="/dashboard">
            <CustomIconButton
              title="دیوار من"
              icon={<PersonOutlineRoundedIcon />}
              align="start"
            />
          </Link>
          <CustomIconButton
            title="چت"
            icon={<ChatBubbleOutlineRoundedIcon />}
            align="start"
          />
          <CustomIconButton
            title="پشتیبانی"
            icon={<SupportIcon />}
            align="start"
          />
          <CustomIconButton
            title="Fa"
            icon={<PublicRoundedIcon />}
            align="start"
          />

          <Button
            variant="contained"
            color="divar"
            size="large"
            sx={{ marginLeft: "1.5rem", padding: ".5rem 1rem" }}
          >
            ثبت آگهی
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
