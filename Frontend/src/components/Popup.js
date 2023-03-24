import React from "react";
const Popup = ({ feature }) => {
  const { id, name, description } = feature.properties;
  const coords=feature.geometry.coordinates;
  const newx=coords[0].toFixed(2);
  const newy=coords[1].toFixed(2);
  return (
    <div id={`popup-${id}`}>
      <h3>{name}</h3>
      Lattitude:{newx}
      <br/>
      Longitude:{newy}
    </div>
  );
};

export default Popup;
