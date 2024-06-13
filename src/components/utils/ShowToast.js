import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Function to show a toast with the close button hidden
const showToast = (message, type) => {
  toast(message, {
    type: type,
    closeButton: false,
    hideProgressBar: true,
  });
};

export default showToast;
