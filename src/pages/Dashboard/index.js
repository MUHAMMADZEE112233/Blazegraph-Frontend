import React, { useEffect, useState } from "react";
import axiosInstance from "../../axiosInstance";
import "./index.css";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axiosInstance
      .get("/dashboard-data") // Replace with your actual API endpoint
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching dashboard data:", error);
      });
  }, []);

  return <div className="dashboard-container"></div>;
};

export default Dashboard;
