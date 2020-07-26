import React from "react";

import "./shop.styles.scss";
import SHOP_DATA from "./shop.data.js";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...othecollectionprops }) => (
          <CollectionPreview key={id} {...othecollectionprops} />
        ))}
      </div>
    );
  }
}

export default Shop;
