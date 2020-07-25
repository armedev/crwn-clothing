import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => {
  return (
    <div
      className="menu-item"
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="bg-image"
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
