import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCollectionForPreview} from "../../redux/shop/shop.selectors";

import CollectionsPreview from "../collection-preview/collection-preview.component";

import "./collections-overview.styles.scss";

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionsPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);