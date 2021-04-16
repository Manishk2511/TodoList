import React from "react";

export const About = () => {
  let aboutStyle = {
    margin: "10px",
    padding: "20px",
    textAlign: "center",
  };
  let containerStyle = {
    minHeight: "80vh",
    margin: "10px auto",
  };
  return (
    <div className="container bg-dark text-light py-3" style={containerStyle}>
      <h3 className="text-center my-4">About page</h3>
      <p style={aboutStyle}>
        A simple react app to create your daily todo list and manage it easily
        without any need to download it on your mobile. Enjoy :p
      </p>
    </div>
  );
};
