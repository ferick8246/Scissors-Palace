import React from "react";

function Home() {
  return (
    <section>
      <video autoPlay loop muted className="w-auto min-w-full max-w-none">
        <source src="/images/video.mp4" type="video/mp4"/>
        </video>
    </section>
  );
}

export default Home;
