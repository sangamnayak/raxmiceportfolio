"use client"; // Required in Next.js 13+ (App Router)
import React, { useEffect, useState } from "react";
import GridLayout from "react-grid-layout";
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";

// Grids
import Me from "./grids/me";
import Map from "./grids/map";
import Project from "./grids/project";
import Skills from "./grids/skills";

export default function HomePage() {
  const [calculatedWidth, setCalculatedWidth] = useState(0);
  const [cWidth, setCWidth] = useState(0);
  const [layout, setLayout] = useState([
    { i: "a", x: 0, y: 0, w: 6, h: 1.9, static: true },
    { i: "b", x: 6, y: 0, w: 2.5, h: 1.9, static: true },
    { i: "c", x: 8.5, y: 0, w: 3.5, h: 4.5, static: true },
    { i: "d", x: 0, y: 1.9, w: 8.5, h: 2.6, static: true }
  ]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const calculateWidth = () => {
        const screenWidth = window.innerWidth;
        setCalculatedWidth(screenWidth * 0.7);
        setCWidth(screenWidth);
      };

      calculateWidth();
      window.addEventListener("resize", calculateWidth);

      const timeout = setTimeout(() => {
        console.log("Printed after 3 sec");
      }, 3000);

      return () => {
        window.removeEventListener("resize", calculateWidth);
        clearTimeout(timeout);
      };
    }
  }, []);

  return (
    <div>
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={cWidth * 0.068}
        width={calculatedWidth}
        margin={[15, 15]}
      >
        <div className="gridSec" key="a">
          <Me />
        </div>
        <div key="b">
          <Map />
        </div>
        <div className="projectGrid" key="c">
          <Project />
        </div>
        <div className="projectGrid" key="d">
          <Skills />
        </div>
      </GridLayout>
    </div>
  );
}
