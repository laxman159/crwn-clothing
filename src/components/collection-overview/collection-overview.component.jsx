import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './collection-overview.styles.scss';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';

import  CollectionPreview  from '../collection-preview/collection-preview.component';

const CollectionsOverview = ({ collections }) => (
    <div className='collection-overview'>
         {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key= {id} {...otherCollectionProps} />
                ))
            }
    </div>
);

const mapStateTpProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default  connect(mapStateTpProps)(CollectionsOverview);

