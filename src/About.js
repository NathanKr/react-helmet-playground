import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>This is about page title</title>
        <meta name="description" content="This is about page description" />
      </Helmet>
      <p>This is about page</p>
    </div>
  );
};

export default About;
