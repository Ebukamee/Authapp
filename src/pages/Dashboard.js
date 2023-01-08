import React from "react";
import "../App.css";
import { Helmet } from "react-helmet";


export default function Dashboard() {

    return (
        <>
        <Helmet>
          <title>Dashboard</title>
           <meta name="description" content="Dashboard" />
          <link rel="canonical" href="/dashboard" />
       </Helmet>
        <h2>WELCOME TO YOUR DASHBOARD</h2>
              </>
    )
}