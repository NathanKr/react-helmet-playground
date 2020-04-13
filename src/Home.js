import React from "react";
import {Helmet} from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>This is home page title</title>
        <meta name="description" content="This is home page description" />
      </Helmet>
      <p>This is home page</p>
    </div>
  );
};

export default Home;
