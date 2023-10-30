import React, { useState } from "react";
import { LiaSlidersHSolid } from "react-icons/lia";
import { PiCaretDownBold } from "react-icons/pi";
import "./Header.css";
import { setGrouping, setOrdering } from "../../state-management/actions";
import { useStateValue } from "../../state-management/useStateReducer";

export default function Header() {
  const [{ grouping, ordering }, dispatch] = useStateValue();
  const [viewDropdown, setViewDropdown] = useState(false);

  const handleOptionChange = (event, change) => {
    if (change === 'group') {
      const selectedGroup = event.target.value;
      dispatch(setGrouping(selectedGroup)); 
      localStorage.setItem("group", selectedGroup);
    }
    if (change === 'order') {
      const selectedOrder = event.target.value;
      dispatch(setOrdering(selectedOrder)); 
      localStorage.setItem("order", selectedOrder);
    }
    setViewDropdown(false); 
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
                value={grouping} 
                onChange={(event) => handleOptionChange(event, 'group')}
              >
                <option value="status">Status</option>
                <option value="userId">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="row">
              Ordering
              <select
                name="order"
                id="order"
                className="select txt"
                value={ordering} 
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
