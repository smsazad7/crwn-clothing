import React, { Component } from "react";
import SHOP_DATA from "./shopData";
import "./shop.scss";
import CollectionInfo from "../../component/collaction-info/CollectionInfo";

export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shopData: SHOP_DATA,
    };
  }

  render() {
    const { shopData } = this.state;
    return (
      <div className="shop-page">
        {shopData.map(({ id, ...shopData }) => (
          <CollectionInfo key={id} {...shopData} />
        ))}
      </div>
    );
  }
}
