import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/RenderSkill";
import Education from "./components/Education";
import Projects from "./components/Projects";
import ContactPage from "./components/ContactPage";
import HashLoader from "react-spinners/HashLoader";

import { useState, useEffect } from "react";

const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "5rem",
  borderColor: "red",
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex h-screen justify-center items-center bg-[#00040f]">
          <div className="text-center">
            <HashLoader
              color="#0891b2"
              loading={loading}
              cssOverride={override}
              size={90}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
      ) : (
        <div>
          <Navbar></Navbar>
          <About></About>
          <br />
          <br />
          <Experience></Experience>
          <Education className="mb-0"></Education>
          <Projects></Projects>
          <ContactPage></ContactPage>
        </div>
      )}
    </>
  );
};
export default App;
