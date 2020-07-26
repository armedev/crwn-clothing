import React from "react";

import "./collection-preview.styles.scss";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, name, price, imageUrl }) => (
            <CollectionItem
              key={id}
              name={name}
              price={price.toString()}
              imageUrl={imageUrl}
            />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
