import React from "react";

//style
import "../assets/scss/components/navigation.scss";

function Navigation() {
  return (
    <div className="navigation">
      <div className="layout">
        <p className="guide">
          <span className="ico-home"></span>
          <span className="font-body">MY BOX</span>
        </p>
      </div>
    </div>
  );
}

export default Navigation;
