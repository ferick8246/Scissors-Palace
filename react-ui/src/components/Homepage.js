import React from "react";
import "../homepage.css";

function Homepage() {
  return (
    <>
      <div class="video-background" role="background">
        {" "}
        <video preload autoplay muted loop id="myVideo">
          <source src="./images/video/backgroundVid.mp4" type="video/mp4" />{" "}
        </video>{" "}
      </div>
    </>
  );
}

export default Homepage;
