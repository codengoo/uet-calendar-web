"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IToastProviderProps {
    classFont: string;
}

const contextClass = {
    success: "bg-green-600",
    error: "bg-red-500",
    info: "bg-blue-600",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
};

export default function UetToastContainer({ classFont }: IToastProviderProps) {
    return (
        <ToastContainer
            position="top-center"
            autoClose={3000}
            limit={5}
            hideProgressBar
            pauseOnFocusLoss
            pauseOnHover
            theme="colored"
            closeButton={<></>}
            stacked
            bodyClassName={
                classFont +
                " flex flex-row item-center text-sm text-white my-auto"
            }
            toastClassName={(context) =>
                contextClass[context?.type || "default"] +
                " relative flex p-1 min-h-10 rounded-lg justify-between overflow-hidden cursor-pointer"
            }
        />
    );
}
