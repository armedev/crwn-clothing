import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import "./collection-overview.styles.scss";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...othecollectionprops }) => (
        <CollectionPreview key={id} {...othecollectionprops} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
