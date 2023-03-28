import stocks from "./data"


function Dashboard(props) {
  return (
    <div className="App">
     <h1>Most Active Stocks</h1>
     <table>
      <thead>
        <tr>Company Name:</tr>
        <tr>Price:</tr>
        <tr>Change:</tr>
      </thead>
<tbody>
  {stocks.map((stocksInfo))}
</tbody>




     </table>

    </div>
  );
}

export default Dashboard;