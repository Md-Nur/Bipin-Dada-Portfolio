"use client";
import NavDropdown from "./NavDropdown";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";

const NavRoutes = () => {
  const user = {
    id: false, // Example user ID, replace with actual user state
    name: "John Doe", // Example user name, replace with actual user state
  };
  return (
    <>
      <NavLink to="/">About</NavLink>
      <NavLink to="/publications">Publications</NavLink>
      <NavLink to="/research">Research</NavLink>
      <NavLink to="/award">Award</NavLink>
      <NavLink to="/teaching">Teaching</NavLink>
      <NavLink to="/hobbies">Hobbies</NavLink>
      <NavLink to="/certifications">Certifications</NavLink>
      <NavLink to="/cv">CV</NavLink>

      {user?.id && (
        <>
          <NavLink to="/dashboard">DASHBOARD</NavLink>
          <NavDropdown
            name="Quiz"
            routes={[
              { name: "Start Quiz", url: "/start-quiz" },
              { name: "Quiz Results", url: "/quiz-results" },
            ]}
          />

          <Logout />
        </>
      )}
    </>
  );
};

export default NavRoutes;
