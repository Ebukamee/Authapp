import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../componets/Context";
import { theUsers } from "../componets/Context";




export const useGetUsers = (type) => {
    // get currently logged in user from context
    const  value = theUsers;

    const [data, setData] = useState([]);
    useEffect(() => {
        const user = value
        if (type === "user") {
            setData(user)
        }
    },[value] [type])
    return data;
}


// import { UserContext } from "../componets/Context";
// import { useContext } from "react";

export const useGetUser = () => {
  /**Use auth Context here with UseContext function */
  const context = useContext(UserContext);

  if (!context) {
    throw Error("useAuthContext must be used inside a AuthContextProvider");
  }

  return context;
};