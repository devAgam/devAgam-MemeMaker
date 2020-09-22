import React, { Component } from "react";
import Github from './Github.jsx'
import { Image, Header } from "semantic-ui-react";
export default class MyProfile extends Component {
  render() {
    return (
      <div>
        <Header as="h2">
          <Image
            circular
            src="https://avatars1.githubusercontent.com/u/46868711?s=460&u=e747900d977e184cbc5b47d651c930ad83feb677&v=4"
          />{" "}
          devAgam
        </Header>
        <Header as='h1'>Other Projects</Header>
        <Github />
      </div>
    );
  }
}
