import { React, useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";

function Reports() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(data);
      console.log(data, "data");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>Hello, Reports!</h1>
    </div>
  );
}

export default Reports;
