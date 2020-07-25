import React from "react";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className="menu-item">
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="bg-image"
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop now</span>
      </div>
    </div>
  );
};

export default MenuItem;
