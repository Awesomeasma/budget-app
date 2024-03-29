// react router dom imports
import { redirect } from "react-router-dom";

// library
import { toast } from "react-toastify";

// helper imports
import { deleteItem } from "../helpers";

export async function logoutAction() {
    // delete user
    deleteItem({
        key: "userName"
    })
    deleteItem({
        key: "budgets"
    })
    deleteItem({
        key: "expenses"
    })

    toast.success("You've deleted your account!")

    // return redirect
    return redirect("/")
}