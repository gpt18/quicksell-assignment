import React, { useState } from "react";
import { LiaSlidersHSolid } from "react-icons/lia";
import { PiCaretDownBold } from "react-icons/pi";
import "./Header.css";
import { getCurrentGroupValue, getCurrentOrderValue } from "./Action";

export default function Header() {
  const [viewDropdown, setViewDropdown] = useState(false);
  const [currentGroup, setCurrentGroup] = useState(getCurrentGroupValue());
  const [currentOrder, setCurrentOrder] = useState(getCurrentOrderValue());

  const handleOptionChange = (event, change) => {
    if (change === 'group') {
      setCurrentGroup(event.target.value);
      setViewDropdown(!viewDropdown);
      localStorage.setItem("group", event.target.value);
    } 
    if (change === 'order') {
      setCurrentOrder(event.target.value);
      setViewDropdown(!viewDropdown);
      localStorage.setItem("order", event.target.value);
    }
  };

  return (
    <div className="header">
      <button className="btn" onClick={() => setViewDropdown(!viewDropdown)}>
        <LiaSlidersHSolid />
        Display
        <PiCaretDownBold />
      </button>

      {viewDropdown && (
        <div>
          <div className="dropdown">
            <div className="row mb-1">
              Grouping
              <select
                name="group"
                id="group"
                className="select txt"
                value={currentGroup}
                onChange={(event) => handleOptionChange(event, 'group')}
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="row">
              Ordering
              <select
                name="order"
                id="order"
                className="select txt"
                value={currentOrder}
                onChange={(event) => handleOptionChange(event, 'order')}
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
