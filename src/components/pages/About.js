import React from "react";

export default function About() {
  return (
    <div class="center">
      {/* <h1>About Page</h1> */}
      <img class="abtPic" src={process.env.PUBLIC_URL + "/assets/images/avatar (2).jpg"} alt="Avatar" />
      <p id="description">
        He's a super cool dude, that likes to risk it all, and play it close to
        the chest. A time traveler to some, and a prophet to others, he is a
        rouge traveler through space.  Good at computers, getting better at coding!
      </p>
      <a id="description1" href="https://drive.google.com/file/d/1L1aDQvehMLNeMmheiKAulxUJEk9oPo2a/view?usp=sharing">
        R_E_S_U_M_E
      </a>
    </div>
  );
}
