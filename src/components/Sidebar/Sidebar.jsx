import React from "react";
import homeIcon from "../../assets/sidebarIcon/home.svg";
import dashboardIcon from "../../assets/sidebarIcon/dashboard.svg";
import settingIcon from "../../assets/sidebarIcon/setting.svg";
import logo from "../../assets/sidebarIcon/logo.svg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  let links = [
    { img: homeIcon, url: `/` },
    { img: dashboardIcon, url: "/dashboard" },
    { img: settingIcon, url: "/setting" },
  ];
  return (
    <aside style={{ width: "7%" }} className="bg-dark rounded-r-2xl">
      <div className="flex items-center pt-6 gap-8 flex-col">
        <img src={logo} alt="" />
        {links.map((item, key) => {
          return (
            <NavLink
              className={({ isActive }) =>
                `relative ${
                  isActive ? "bg-baseDark" : null
                } w-24 h-20 ml-4 pr-4 flex items-center justify-center rounded-s-xl`
              }
              key={key}
              to={item.url}
            >
              {({ isActive }) => (
                <div className="">
                  <span
                    style={{
                      display: isActive ? "block" : "none",
                    }}
                    className="w-24 absolute h-4 bg-baseDark -top-4 left-0"
                  >
                    <span
                      style={{
                        borderBottomRightRadius: 12,
                      }}
                      className="w-full h-full bg-dark absolute"
                    ></span>
                  </span>
                  <div
                  style={{boxShadow: isActive ? "0px 8px 24px 0px rgba(234, 124, 105, 0.32)" : null}}
                    className={`p-3 ${
                      isActive ? "bg-orange" : null
                    } rounded-lg `}
                  >
                    <img
                      width={30}
                      style={{
                        filter: isActive ? "brightness(2000%)" : null,
                      }}
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <span
                    style={{
                      display: isActive ? "block" : "none",
                    }}
                    className="w-24 absolute h-4 bg-baseDark -bottom-4 left-0"
                  >
                    <span
                      style={{
                        borderTopRightRadius: 12,
                      }}
                      className="w-full h-full bg-dark absolute"
                    ></span>
                  </span>
                </div>
              )}
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
