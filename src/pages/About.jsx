import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Navbar />
      <PageHeader
        title="About Us"
        breadcrumb={
          <>
            <div className="flex gap-2">
              <Link to="/">Home</Link>
              <p>|</p>
              <Link to="/portfolio">Portfoilo</Link>
            </div>
          </>
        }
      />
      <Footer />
    </div>
  );
};

export default About;
