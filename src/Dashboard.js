import React, { useEffect, useState } from "react";
import Card from "./Card";
import Search from "./Search";
import { API_PRODUCTS, token } from "./API";
import { UserContext } from "./userContext";


function Dashboard() {
  const [items, setItems] = useState([]);



  useEffect(() => {
    fetch(`${API_PRODUCTS}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      res.json().then((data) => {
        setItems(data.items);
      });
    });
  }, []);


  return (
    <div className="dashboard">
      <Search details={items} />
    </div>
  );
}

export default Dashboard;
