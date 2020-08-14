import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import "./shop.styles.scss";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../../pages/collection/collection.component";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const Shop = ({ updateCollections, match }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("i am called");
    const unSubscribeFromSnapshot = firestore
      .collection("collections")
      .onSnapshot(async (snapshot) => {
        const collectionsMap = await convertCollectionsSnapshotToMap(snapshot);
        await updateCollections(collectionsMap);
        setLoading(false);
      });
    return () => {
      console.log("i am unmounted");
      unSubscribeFromSnapshot();
    };
  }, [updateCollections]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(prop) => (
          <CollectionOverviewWithSpinner isLoading={loading} {...prop} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(prop) => (
          <CollectionPageWithSpinner isLoading={loading} {...prop} />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
