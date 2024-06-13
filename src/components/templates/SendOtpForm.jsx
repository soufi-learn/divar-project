import { Box, Divider, TextField, Typography } from "@mui/material";
import { useField } from "formik";

const SendOtpForm = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.touched && meta.error ? meta.error : "";

  return (
    <Box mb={2}>
      <Typography variant="h5" component="p" my={2}>
        شماره موبایل خود را وارد کنید
      </Typography>

      <Typography variant="body1" component="p" color="text.secondary" mb={1}>
        برای استفاده از امکانات دیوار، لطفاً شماره موبایل خود را وارد کنید.
        <br /> کد تأیید به این شماره پیامک خواهد شد.
      </Typography>

      <TextField
        {...field}
        {...props}
        label={label}
        variant="outlined"
        color="primary"
        inputProps={{ dir: "ltr" }}
        autoComplete="off"
        fullWidth
        margin="normal"
        error={!!errorText}
        helperText={errorText}
      />

      <p className="mt-2 text-[.90rem] mb-6">
        <Typography
          variant="body2"
          component="span"
          color="divar.main"
          fontSize=".90rem"
        >
          شرایط استفاده از خدمات
        </Typography>{" "}
        و{" "}
        <Typography
          variant="body2"
          component="span"
          color="divar.main"
          fontSize=".90rem"
        >
          حریم خصوصی
        </Typography>{" "}
        دیوار را می‌پذیرم.
      </p>
      <Divider />
    </Box>
  );
};

export default SendOtpForm;
