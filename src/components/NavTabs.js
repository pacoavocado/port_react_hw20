import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
      <h1 class="prof-name"> Micah "c" Cox Conn </h1>
      <ul class="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            H_O_M_E
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            A_B_O_U_T
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#projects"
            onClick={() => handlePageChange("Projects")}
            // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === "Projects" ? "nav-link active" : "nav-link"}
          >
            P_R_O_J_E_C_T_S
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            C_O_N_T_A_C_T
          </a>
        </li>
      </ul>
    </>
  );
}

export default NavTabs;
