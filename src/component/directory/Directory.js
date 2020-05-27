import React, { Component } from "react";
import sectionsData from "./DirectoryData";
import MenuItem from "../menuitem/MenuItem";
import "./directory.scss";

export default class Directory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: sectionsData,
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ id, ...sections }) => (
          <MenuItem key={id} {...sections} />
        ))}
      </div>
    );
  }
}
