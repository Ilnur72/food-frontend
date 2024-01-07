import React from "react";
import { useAxios } from "../../../hooks/useAxios";

const Body = ({searchValue}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [selectValue, setSelectValue] = React.useState("desc");
  const [toggle, setToggle] = React.useState(false);
  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  const { data: dataCategory, loading } = useAxios({
    url: "/category",
    method: "get",
  });
  const { data } = useAxios({
    url: `/food?filters[category_id]=${activeIndex + 1}&sort[by]=price&sort[order]=${selectValue}${searchValue ? "&q=" + searchValue : ""}`,
    method: "get",
  });
  if (loading) return <p>Loading...</p>;

  return (
    <div className="pt-6">
      <div>
        <ul className="flex gap-20 relative">
          {dataCategory.data.map((item, index) => {
            return (
              <li
                key={item.id}
                className={
                  index === activeIndex
                    ? "text-orange text-md font-semibold text-center relative"
                    : "text-md font-semibold"
                }
                onClick={() => handleButtonClick(index)}
              >
                {item.name}
                {index === activeIndex ? (
                  <div className=" w-full border border-red-500 absolute"></div>
                ) : null}
              </li>
            );
          })}
        </ul>
        <hr className="border border-gray-700" />
      </div>
      <div className="flex justify-between py-6">
        <h3 className="text-2xl font-semibold">Choose Dishes</h3>
        <div className="w-40 h-12 relative">
          <i
            className={`fa-solid fa-chevron-up absolute  top-1/2 right-3 -translate-y-1/2 transition-transform ${
              toggle ? "rotate-0" : "rotate-180"
            }`}
          ></i>
          <select
          onChange={(e) => setSelectValue(e.target.value)}
            onClick={() => setToggle(!toggle)}
            className="w-full h-full outline-none border border-zinc-600 bg-baseDark rounded-lg text-sm font-medium  pl-4 appearance-none"
          >
            <option value="asc">Price: to lowest</option>
            <option value="desc">Price: to highest</option>
          </select>
        </div>
      </div>
      <ul style={{height: "70vh"}} className="flex flex-wrap gap-14 pt-10 overflow-auto ">
        {data.data?.list.map((item) => {
          return (
            <li
              key={item.id}
              className="w-48 h-56 flex flex-col items-center text-center bg-dark rounded-2xl relative "
            >
              <img
                style={{ width: "135px", height: "135px", borderRadius: "50%" }}
                className="absolute -top-10 transition-transform "
                src={`http://localhost:8080/${item.images}`}
                alt={item.name}
              />
              <div className="mt-24 flex flex-col gap-1">
                <h4 className="text-md font-medium">{item.name}</h4>
                <u className="text-md font-normal">$ {item.price}</u>
                <p style={{ color: "#ABBBC2" }} className="text-md font-normal">
                  {item.bowls} Bowls available
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Body;
