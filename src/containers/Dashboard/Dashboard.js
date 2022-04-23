import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";

function Dashboard() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const { data } = await axios.get("https://reqres.in/api/users?page=2");
      setUsers(data.data);
      console.log(data.data, "data");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>Today</h1>
      {users.map(elem => {
        return (
          <Card
            key={elem.id}
            img={elem.avatar}
            email={elem.email}
            fullname={elem.first_name + " " + elem.last_name}
          />
        );
      })}
    </div>
  );
}

export default Dashboard;
