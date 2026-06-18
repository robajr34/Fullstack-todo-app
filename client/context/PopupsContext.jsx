"use client";
import React, { useState, createContext } from "react";
export const popupContext = createContext();
const PopupsProvider = ({ children }) => {
  const [userSettingIsOpen, setUserSettingIsOpen] = useState(false);
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);
  return (
    <popupContext.Provider
      value={{userSettingIsOpen, setUserSettingIsOpen, formIsOpen, setFormIsOpen, sidebarIsOpen, setSidebarIsOpen }}
    >
      {children}
    </popupContext.Provider>
  );
};

export default PopupsProvider;
