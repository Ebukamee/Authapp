import { createContext } from "react";
import { useReducer } from "react";
import React from "react";
// import profilepic1 from "../images/profilepic1.jpg";
// import profilepic2 from "../images/profilepic2.jpg";
export const theUsers = [
     {
        username: "Nnamdi",
        password: "Nna_guy",
        City:'Port-Harcourt',
        // image: profilepic1

      },
     {
      username: "Onyeisi",
      password: "boss123",
      City:'Onitsha',
    //   image: profilepic2
    },
        {
        username: "Somto",
        password: "Theman",
        City:'Enugu',
        // image: profilepic2
      },  
         {
        username: "Arinze",
        password: "Aristotle",
        City:'Oka',
        // image: profilepic2
      },
       {
        username: "Ikenna",
        password: "Power",
        City:'Owerri',
        // image: profilepic2
      }

  ]






const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload.name, pass: action.payload.pass };
    case "LOGOUT":
      return { ...state, user: null, pass: null };

    default:
      return { ...state };
  }
};

//the children is whatever the AuthContextProvider wraps
export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
    pass: null,
  });

  const logOut = () => {
    dispatch({ type: "LOGOUT" });
  };

  return <UserContext.Provider value={{ ...state, dispatch, logOut }}>{children}</UserContext.Provider>;
};


export const UserContext = createContext()