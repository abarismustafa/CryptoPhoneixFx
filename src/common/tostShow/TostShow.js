import { toast } from "react-toastify";


export const toastSuccessMessage = (data) => {
    // console.log(data);
    toast.success(`${data}`, {
        position: "top-center",
    });
};

export const toastSuccessMessageError = (data) => {
    // console.log(data);
    toast.error(`${data}`, {
        position: "top-center",
    });
};