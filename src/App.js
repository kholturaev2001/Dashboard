import "./App.css";
import Customers from "./containers/Customers/Customers";
import Dashboard from "./containers/Dashboard/Dashboard";
import Integrations from "./containers/Integrations/Integrations";
import Orders from "./containers/Orders/Orders";
import Reports from "./containers/Reports/Reports";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="reports" element={<Reports />} />
          <Route path="integrations" element={<Integrations />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
