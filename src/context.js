import React, { useState, useContext } from "react";
import data from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const [isSubmenuOpen, setisSubmenuOpen] = useState(false);
  const [info, setInfo] = useState(data);
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });

  const openSidebar = () => {
    setisSidebarOpen(true);
  };
  const closeSidebar = () => {
    setisSidebarOpen(false);
  };

  const openSubmenu = () => {
    setisSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setisSubmenuOpen(false);
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        info,
        alert,
        showAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
