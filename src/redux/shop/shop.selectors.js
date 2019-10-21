import { createSelector } from 'reselect';

/* used with line 25/26
const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
}
*/

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    /* shop.data was an array & .find would not be suitable for larger
    data since it would search left to right.
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    */
    collections => collections[collectionUrlParam]
  );
