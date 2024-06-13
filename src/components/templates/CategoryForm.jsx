import React from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, Controller } from "react-hook-form";
import { addCategory } from "../../services/admin";
import { ThreeDots } from "react-loader-spinner";

const CategoryForm = () => {
  const queryClient = useQueryClient();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");
  const [snackbarSeverity, setSnackbarSeverity] = React.useState("success");

  const mutation = useMutation({
    mutationFn: async (data) => addCategory(data),

    onError: () => {
      setSnackbarMessage(`مشکلی در اضافه کردن دسته بندی به وجود آمده!`);
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    },
    onSuccess: () => {
      setSnackbarMessage("دسته بندی جدید با موفقیت اضافه شد");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);

      queryClient.invalidateQueries(["get-categories"]);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Grid
      item
      xs={12}
      sm={9}
      md={5}
      className="p-6 bg-white rounded-lg shadow-md"
    >
      <Typography
        variant="h4"
        component="h1"
        className="relative  after:absolute after:w-full after:h-1 after:bg-[#A72727] after:content-[''] after:-bottom-2 after:right-0 inline-block after:rounded-sm"
        mb={4}
      >
        دسته بندی جدید
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Box>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: "اسم دسته بندی الزامی است!" }}
            render={({ field }) => (
              <TextField
                fullWidth
                variant="outlined"
                label="اسم دسته بندی"
                size="small"
                {...field}
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ""}
              />
            )}
          />
        </Box>
        <Box>
          <Controller
            name="slug"
            control={control}
            defaultValue=""
            rules={{ required: "اسلاگ الزامی است!" }}
            render={({ field }) => (
              <TextField
                fullWidth
                variant="outlined"
                label="اسلاگ"
                size="small"
                {...field}
                error={!!errors.slug}
                helperText={errors.slug ? errors.slug.message : ""}
              />
            )}
          />
        </Box>
        <Box>
          <Controller
            name="icon"
            control={control}
            defaultValue=""
            rules={{ required: "آیکون الزامی است!" }}
            render={({ field }) => (
              <TextField
                fullWidth
                variant="outlined"
                label="آیکون"
                size="small"
                {...field}
                error={!!errors.icon}
                helperText={errors.icon ? errors.icon.message : ""}
              />
            )}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          color="divar"
          className="w-full py-2"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? (
            <ThreeDots color="#777" height={24} width={24} />
          ) : (
            "افزودن دسته بندی"
          )}
        </Button>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default CategoryForm;
