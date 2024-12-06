import { g as getCollection } from './linkPreview_CxVHYHB2.mjs';

async function getAllCollections(contentType = "post") {
  return await getCollection(contentType, ({ data }) => {
    return data.draft !== true ;
  });
}
function groupCollectionsByYear(collections) {
  const collectionsByYear = collections.reduce((acc, collection) => {
    const year = new Date(collection.data.updatedDate ?? collection.data.publishDate).getFullYear();
    if (!acc.has(year)) {
      acc.set(year, []);
    }
    acc.get(year).push(collection);
    return acc;
  }, /* @__PURE__ */ new Map());
  return Array.from(
    collectionsByYear.entries()
  ).sort((a, b) => b[0] - a[0]);
}
function sortMDByDate(collections) {
  return collections.sort((a, b) => {
    const aDate = new Date(a.data.updatedDate ?? a.data.publishDate).valueOf();
    const bDate = new Date(b.data.updatedDate ?? b.data.publishDate).valueOf();
    return bDate - aDate;
  });
}
function getAllTags(collections) {
  return collections.flatMap((collection) => [...collection.data.tags]);
}
function getUniqueTags(collections) {
  return [...new Set(getAllTags(collections))];
}
function getUniqueTagsWithCount(collections) {
  return [
    ...getAllTags(collections).reduce(
      (acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
      /* @__PURE__ */ new Map()
    )
  ].sort((a, b) => b[1] - a[1]);
}

export { groupCollectionsByYear as a, getUniqueTags as b, getUniqueTagsWithCount as c, getAllCollections as g, sortMDByDate as s };
