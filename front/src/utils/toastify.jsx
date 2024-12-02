import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify'

export const sucessToast = (message) => {
    toast.success(message, {
      autoClose: 2000,
      hideProgressBar: true, // timer
    //   closeOnClick: true,
    //   pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      progressStyle: {
        backgroundColor: "#007BFF", // cor da barrinha
      },
      className: "custom-toast-success",
      style: {
        borderImage: "1px solid #fff",
        borderRadius: "4px",
        backgroundColor: "#0A131E",
        color: "#fff",
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 8px 0px",
    }})

}

export const errorToast = (message) => {
    toast.error(message, {
      autoClose: 2500,
      hideProgressBar: true, // timer
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
}
