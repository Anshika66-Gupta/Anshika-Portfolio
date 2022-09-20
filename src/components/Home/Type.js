import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Jack of all trades, master of self!",
          "Curious Data-driven",
          "Conscientious Developer",
          "Deep Learning Engineer",
          "MERN Stack Developer",
          "Open Source Contributor",
          "Innovator - Ideator - Researcher",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;
