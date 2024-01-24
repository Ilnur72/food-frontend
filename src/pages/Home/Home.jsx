import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import OrdersPanel from "./Components/ordersPanel";
import Payment from "./Components/Payment";
import { useSelector } from "react-redux";

const Home = () => {
  const next = useSelector((state) => state.nextPage)
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="grid grid-cols-10 justify-between relative">
      <div className="col-span-7 pt-6 pr-6">
        {<Header setSearchValue={setSearchValue} />}
        {<Body searchValue={searchValue} />}
      </div>
      <div className="col-span-3 h-screen p-6 rounded-l-2xl bg-dark ">
        {next ? <OrdersPanel/> : <Payment/>}
      </div>
    </div>
  );
};

export default Home;
