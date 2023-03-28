import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Stock from "./Stock";
import Dashboard from "./Dashboard";


function Home() {
  return (
    <div className="App">
      <h1>Stocks Homework</h1>
      <Routes>
        <Route path="/stock/:symbol" element={<Stock />} />
        <Route path="/stock" element={<Dashboard />} />
      </Routes>
<Link to="/stock/:symbol">
      <div>Stocks</div>
    </Link>

    <Link to="/stock">
      <div>Dashboard</div>
    </Link>
    </div>
  );
}

export default Home;
