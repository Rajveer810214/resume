import * as React from "react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./component.css";
import Navbar from './Navbar/Navbar'
import { useNavigate } from "react-router-dom";

function DrawerAppBar(props) {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(false);
  const generateOfferLetter = () => {
    if (localStorage.getItem("authtoken") !== null) {
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    const fetchAcceptedInterns = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/users/getuser",
          {
            headers: {
              "auth-token": localStorage.getItem("authtoken"),
              Authorization: "Bearer yourToken",
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        if (data.success) {
          if (data.data.role === "admin") {
            setAdmin(true);
          }
        } else {
          console.error("Error fetching user detail:", data.error);
        }
      } catch (error) {
        console.error("Error fetching user detail:", error);
      }
    };

    fetchAcceptedInterns();
  }, []);

  return (
    <>
      <Navbar />
      
    </>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
