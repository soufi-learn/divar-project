import { useCallback, useState } from "react";
import { Button, Grid, Divider, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import SendOtpForm from "../components/templates/SendOtpForm";
import CheckOtpForm from "../components/templates/CheckOtpForm";
import { checkOtp, sendOtp } from "../services/auth";
import { ToastContainer } from "react-toastify";
import showToast from "../components/utils/ShowToast";
import { ThreeDots } from "react-loader-spinner";
import { setCookie } from "../components/utils/cookie";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../services/user";

// Validation schemas
const phoneValidationSchema = Yup.object({
  phoneNumber: Yup.string()
    .required("وارد کردن شمارهٔ موبایل الزامی است.")
    .matches(/^\d{11}$/, "لطفا یک شماره موبایل معتبر وارد نمایید."),
});

const otpValidationSchema = Yup.object({
  otpCode: Yup.string()
    .required("کد تأیید را وارد کنید.")
    .matches(/^\d{5}$/, "کد تایید معتبر نیست."),
});

const AuthPage = () => {
  const navigate = useNavigate();

  const { refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: () => fetchUser(),
    enabled: false,
  });

  const [step, setStep] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");

  const initialValues = { phoneNumber, otpCode: "" };

  const validationSchema =
    step === 0 ? phoneValidationSchema : otpValidationSchema;

  const handleNext = useCallback(
    async (values, actions) => {
      actions.setSubmitting(true);
      try {
        if (step === 0) {
          // Send OTP to the phone number
          const { response } = await sendOtp(values.phoneNumber);
          if (response && response.status === 200) {
            // Proceed to the next step
            setPhoneNumber(values.phoneNumber);
            setStep(step + 1);
          } else {
            throw new Error("یه مشکلی پیش اومده! لطفا دوباره امتحان کنید.");
          }
        } else if (step === 1) {
          // Verify the OTP code
          const { response, error } = await checkOtp(values);
          if (response && response.status === 200) {
            setCookie(response.data);
            navigate("/");
            showToast("به وبسایت دیوار خوش آمدید :)", "success");
            refetch();
          } else {
            throw new Error("بنظرم کد اشتباهی رو وارد کردی!");
          }
        }
      } catch (error) {
        showToast(error.message, "error");
      }
      actions.setSubmitting(false);
    },
    [step, phoneNumber, navigate]
  );

  // back to number form (step 0) & clear phone number
  const handleChangeNumber = useCallback((resetForm) => {
    setStep(0);
    setPhoneNumber("");
    resetForm({ values: { phoneNumber: "", otpCode: "" } });
  }, []);

  return (
    <Grid
      container
      px={2}
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Grid
        item
        xs={12}
        sm={9}
        md={6}
        lg={4}
        mx="auto"
        className="p-6 bg-white rounded-md shadow-md"
      >
        <Typography variant="h4" component="h5" mb={4}>
          ورود به حساب کاربری
        </Typography>

        <Divider />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleNext}
        >
          {({ isSubmitting, resetForm }) => (
            <Form>
              {step === 0 && (
                <SendOtpForm name="phoneNumber" label="شماره موبایل" />
              )}

              {step === 1 && (
                <CheckOtpForm
                  name="otpCode"
                  label="کد تأیید ۵ رقمی"
                  phoneNumber={phoneNumber}
                  resetForm={resetForm}
                  handleChangeNumber={handleChangeNumber}
                />
              )}

              <div className="flex justify-end mt-6">
                <Button
                  type="submit"
                  variant="contained"
                  color="divar"
                  sx={{
                    padding: ".44rem 2rem",
                    fontSize: "1rem",
                  }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <ThreeDots color="#777" height={24} width={24} />
                  ) : step === 0 ? (
                    "ارسال کد تأیید"
                  ) : (
                    "ورود"
                  )}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
        <ToastContainer stacked className="auth-toast-container" />
      </Grid>
    </Grid>
  );
};

export default AuthPage;
