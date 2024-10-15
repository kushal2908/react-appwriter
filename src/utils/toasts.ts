import { Slide, toast } from "react-toastify";

export const SUCCESS_TOAST = (msg) => {
  toast.success(msg, {
    position: "top-center",
    transition: Slide,
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
  });
};

export const ERROR_TOAST = (msg) => {
  toast.error(msg, {
    position: "top-center",
    transition: Slide,
    closeOnClick: true,
    pauseOnHover: true,
  });
};
