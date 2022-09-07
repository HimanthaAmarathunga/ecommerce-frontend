import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

export default function Header() {
  return (
    <div className="mb-3 row">
      <label className="col-sm-1 Header-section">
        ADMIN <FontAwesomeIcon icon={faCaretDown} className="caretDown" />
      </label>

      <label className="col-sm-1">
        <FontAwesomeIcon icon={faCircle} className="profileIcon" />
      </label>
    </div>
  );
}
