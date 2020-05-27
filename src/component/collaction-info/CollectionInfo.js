import React from "react";
import "./collectionInfo.scss";
import CollectionItems from "../collection-items/CollectionItems";

const CollectionInfo = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...collection }) => (
            <CollectionItems key={id} {...collection} />
          ))}
      </div>
    </div>
  );
};

export default CollectionInfo;
