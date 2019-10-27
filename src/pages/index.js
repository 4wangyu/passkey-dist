import React from "react";
// import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

import "./styles.css";
import "./overrides.css";

class MySection extends React.Component {
  render() {
    return (
      <div className="section">
        <h3>{this.props.content}</h3>
      </div>
    );
  }
}

class MyLink extends React.Component {
  render() {
    return (
      <div className="section">
        <h3><a href="https://i.diawi.com/1t2Sgw">passkey</a></h3>
      </div>
    );
  }
}

const IndexPage = () => (
  <ReactFullpage
    navigation
    sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
    render={({ state, fullpageApi }) => {
      return (
        <div>
          <MySection content={"Slide down!"} />
          <MySection content={"Keep going!"} />
          <MyLink />
        </div>
      );
    }}
  />
);

export default IndexPage
