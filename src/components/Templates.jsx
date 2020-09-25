import React, { useEffect, useState, Component } from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { LazyLoad } from "react-lazy-load";
import LoaderComp from "./Loader";
import { openModal } from "../Modals/modalActions.js";
import { connect } from "react-redux";

const actions = {
  openModal,
};

class Templates extends Component {
  render() {
    const { memes, openModal } = this.props;
    return memes.length ? (
      <div>
        {memes &&
          memes.map((temps) => (
            <div className="column" onClick={() => openModal("TestModal", { data: 42 })}>
              <Image src={temps.url}  />
              <Button
                
                color="teal"
                content="Open Modal"
              />
            </div>
          ))}
      </div>
    ) : (
      <LoaderComp />
    );
  }
}
export default connect(null, actions)(Templates);
//onClick={() => openModal("testModal", { data: 42 })}
