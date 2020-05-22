import React, { Component } from "react";
import sectionsData from "./DirectoryData";
import { MenuItem } from "../menuitem/MenuItem";
import "./directory.scss";

export default class Directory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: sectionsData,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, linkUrl, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}
