import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";

const Home = () => {
  const [searchValue, setSearchValue] = React.useState("")
  return (
    <div className="flex justify-between">
      <div className="w-full pt-6 pr-6">
        {<Header setSearchValue={setSearchValue}/>}
        {<Body searchValue={searchValue}/>}
      </div>
      <div className="w-2/5 h-screen rounded-l-2xl bg-dark"><img className=" h-28 w-28 rounded-full" src={`http://localhost:8080/image1.png`} alt="" /></div>
    </div>
  );
};

export default Home;
