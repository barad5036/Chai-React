import React, { useState } from "react";

function Tabswitching() {
  const [button, setButton] = useState("home");

  return (
    <>
      <button onClick={() => setButton("home")}>Home</button>
      <button onClick={() => setButton("about")}>About</button>
      <button onClick={() => setButton("contact")}>Contact</button>

      {button === "home" ? (
        <div>
          <p>Hello this is the Home page</p>
        </div>
      ) : button === "about" ? (
        <div>
          <p>Hello this is the About page</p>
        </div>
      ) : (
        <div>
          <p>Hello this is the Contact page</p>
        </div>
      )}
    </>
  );
}

export default Tabswitching;
