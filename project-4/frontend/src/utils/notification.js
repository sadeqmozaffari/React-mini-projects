import toast from "react-hot-toast"


export const successMessage=(message)=>{
    toast.success(message)
}


export const errorMessage=(message)=>{
    toast.error(message)
}