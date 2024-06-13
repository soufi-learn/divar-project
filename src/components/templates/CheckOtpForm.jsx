import { Box, TextField, Typography } from "@mui/material";
import { useField } from "formik";

const CheckOtpForm = ({
  label,
  phoneNumber,
  resetForm,
  handleChangeNumber,
  ...props
}) => {
  const [field, meta] = useField(props);
  const errorText = meta.touched && meta.error ? meta.error : "";

  return (
    <Box mb={2}>
      <Typography variant="h5" component="p" my={2}>
        کد تأیید را وارد کنید
      </Typography>

      <Typography variant="body1" component="p" color="text.secondary" mb={1}>
        کد پیامک‌شده به شمارۀ «{phoneNumber}» را وارد کنید.
      </Typography>

      <TextField
        {...field}
        {...props}
        label={label}
        variant="outlined"
        inputProps={{ dir: "ltr" }}
        autoComplete="off"
        fullWidth
        margin="normal"
        error={!!errorText}
        helperText={errorText}
      />
      
      <Box display="flex" justifyContent="end">
        <button
          type="button"
          className="p-1 px-4 rounded-full bg-slate-100 text-[.9rem] transition-all hover:bg-slate-200"
          onClick={() => handleChangeNumber(resetForm)}
        >
          تغییر شماره موبایل
        </button>
      </Box>
    </Box>
  );
};

export default CheckOtpForm;
