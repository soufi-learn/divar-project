import { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../services/admin";
import { getCookie } from "../utils/cookie";
import axios from "axios";
import toast from "react-hot-toast";
import { styled } from "@mui/material/styles";

const StyledSelect = styled(Select)(({ theme }) => ({
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.divider,
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.text.primary,
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.main,
  },
  "& .MuiOutlinedInput-input": {
    padding: "10px 14px",
  },
}));

const AddPost = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    amount: null,
    category: "",
    images: null,
  });

  const { data, isLoading } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategory,
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    if (name !== "images") {
      setForm({ ...form, [name]: e.target.value });
      console.log(form);
    } else {
      setForm({ ...form, [name]: e.target.files[0] });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // Create a new FormData object
    const formData = new FormData();

    const token = getCookie("accessToken");

    // Append the form data to the FormData object using a loop
    Object.keys(form).forEach((key) => {
      if (key === "file") {
        formData.append(key, form[key][0]);
      } else {
        formData.append(key, form[key]);
      }
    });

    axios
      .post(`${import.meta.env.VITE_BASE_URL}post/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        toast.success("آگهی با موفقیت ایجاد شد");
      })
      .catch((error) => {
        toast.error("موشکلی پیش آمده");
      });
  };

  return (
    <Grid item xs={4} mb={3}>
      <Typography
        variant="h4"
        component="h1"
        className="relative  after:absolute after:w-full after:h-1 after:bg-[#A72727] after:content-[''] after:-bottom-2 after:right-0 inline-block after:rounded-sm"
        mb={4}
      >
        افزودن آگهی
      </Typography>
      <form onSubmit={submitHandler} onChange={changeHandler}>
        <Box mb={3}>
          <TextField
            fullWidth
            name="title"
            variant="outlined"
            label="عنوان"
            size="small"
          />
        </Box>
        <Box mb={3}>
          <TextField
            multiline
            name="content"
            maxRows={4}
            fullWidth
            variant="outlined"
            label="توضیحات"
            size="small"
          />
        </Box>
        <Box mb={3}>
          <TextField
            fullWidth
            name="amount"
            type="number"
            variant="outlined"
            label="قیمت"
            size="small"
          />
        </Box>

        <Box mb={3}>
          <TextField
            fullWidth
            name="city"
            variant="outlined"
            label="شهر"
            size="small"
          />
        </Box>

        <Box>
          {/* <select name="category">
            {data?.data.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
                {isLoading && "در حال بارگذاری..."}
              </option>
            ))}
          </select> */}
          <StyledSelect
            value={form.category}
            onChange={changeHandler}
            displayEmpty
            className="w-full"
            name="category"
            sx={{ marginBottom: 3 }}
          >
            <MenuItem value="" disabled>
              <span className="text-slate-500">دسته بندی</span>
            </MenuItem>
            {data?.data.map((item) => (
              <MenuItem key={item._id} value={item._id}>
                {item.name}
                {isLoading && "در حال بارگذاری..."}
              </MenuItem>
            ))}
          </StyledSelect>
        </Box>

        <Button variant="contained" component="label">
          آپلود تصویر
          <input type="file" hidden name="images" />
        </Button>
        <Button type="submit">ایجاد</Button>
      </form>
    </Grid>
  );
};

export default AddPost;
