import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeOrder } from "../../../store/orderSlice";
import { nextPage } from "../../../store/nextSlice";

const OrdersPanel = () => {
  const dispatch = useDispatch()
  const {data} = useSelector((state) => state.addOrder)
  const onDelete = (id) => {
    dispatch(removeOrder(id))
  }
  return (
    <div>
      <strong className="text-xl font-semibold">Order #34562</strong>
      <div className="flex gap-4 py-4">
        <button className="px-3 py-2 bg-inherit flex items-center justify-center rounded-lg border border-gray-700">
          Dine In
        </button>
        <button className="px-3 py-2 bg-inherit flex items-center justify-center rounded-lg border border-gray-700">
          Dine In
        </button>
        <button className="px-3 py-2 bg-inherit flex items-center justify-center rounded-lg border border-gray-700">
          Dine In
        </button>
      </div>
      <div className="grid grid-cols-8">
        <strong className="col-span-6">Item</strong>
        <strong className="col-span-1 ">Qty</strong>
        <strong className="col-span-1 ">Price</strong>
      </div>

      <hr className="border border-baseDark mt-2" />

      <ul style={{height: "56vh", scrollbarWidth: "none", }} className="scroll-bar py-6 flex flex-col gap-6 pr-1 overflow-auto ">
    {data.map((item) => {
      return         <li key={item.id} className="flex justify-between">
      <div className="flex flex-col gap-3">
        <div className="flex items-end justify-between">
          <div className="flex gap-2 items-center">
            <img
              className="rounded-full w-11 h-11"
              src={`http://localhost:8080/${item.images}`}
              alt=""
            />
            <div className="flex flex-col ">
              <p className="text-sm font-medium">{item.name.slice(0,20)+"..."}</p>
              <u className="text-slate-500 text-xs font-medium ">$ {item.price}</u>
            </div>
          </div>
          <span className="grid place-items-center w-12 h-12 border rounded-lg bg-baseDark border-slate-600 ">
            {item.count}
          </span>
        </div>

        <input
          placeholder="Order Note..."
          style={{ background: "#2D303E", color: "#E0E6E9" }}
          className="w-80 h-12 rounded-lg p-3
        border border-zinc-600 focus:border-white outline-none"
          type="text"
        />
      </div>

      <div className="flex flex-col justify-between">
        <u className="text-base font-medium mt-3">$ 4,58</u>
        <button onClick={() => onDelete(item.id)} className="w-12 h-12 border border-pink-500 rounded-lg">
          <i className="fa-regular fa-trash-can text-pink-500"></i>
        </button>
      </div>
    </li>
    })}
      </ul>

      <hr className="border border-baseDark" />

      <div className="flex flex-col gap-4 py-6">
        <div className="flex justify-between">
          <p className="text-base font-normal text-gray-500">Discount</p>
          <u className="text-base font-medium">$0</u>
        </div>
        <div className="flex justify-between">
          <p className="text-base font-normal text-gray-500">Sub total</p>
          <u className="text-base font-medium">$ {data && data.reduce((a,b) =>a + (b.price*b.count),0).toFixed(2)}</u>
        </div>
        <button disabled={data.length ? false : true} onClick={() => dispatch(nextPage(false))} style={{boxShadow: "0px 8px 24px 0px rgba(234, 124, 105, 0.30)"}} className="w-full h-12 bg-orange grid place-items-center rounded-lg">Continue to Payment</button>
      </div>
    </div>
  );
};

export default OrdersPanel;
