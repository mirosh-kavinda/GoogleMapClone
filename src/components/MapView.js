import React from "react";
import "../index.css";
import ToastMessage from "./ToastMessage";

const Map = ({ location, direction }) => {
  const images = require.context("../../public/images", true);

  let imgsrc = images(`./${location.name}.png`);

  let styler = {
    backgroundImage: `url(${imgsrc})`,
    padding: "0 0 0 80px",
    margin: "0 auto",
    height: `100vh`,
    width: `100vw`,
    overflow: `hidden`,
  };

  return direction === false ? (
    <iframe
      title="map"
      id="iframe"
      src={location.link}
      style={{
        padding: "0 0 0 80px",
        margin: "0 auto",
        height: `100vh`,
        width: `100%`,
        overflow: `hidden`,
      }}
      loading="lazy"
    ></iframe>
  ) : (
    <div style={styler}>
      <ToastMessage
        message={location.name}
        duration={1000}
        style={{ height: "100vh" }}
      />
    </div>
  );
};

export default Map;
