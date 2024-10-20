import "./App.css";
import { useState, useEffect } from "react";
import Timeline from "./components/Timeline";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Bio from "./components/Bio";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
function App() {
  let [projects, setProjects] = useState([]);

  useEffect(() => {
    const getVH = () => {
      return Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0,
      );
    };
    const getIntroBottomHeight = () => {
      let vh = getVH();
      let bioBottom = vh / 2 + document.querySelector(".bio").offsetHeight / 2;
      let headerBottom =
        vh / 2 + document.querySelector(".header").offsetHeight / 2;
      return Math.max(bioBottom, headerBottom);
    };

    const updateArrowVisual = () => {
      let scrollArrow = document.querySelector(".scroll-arrow");
      let maxHeight = getIntroBottomHeight();
      let vh = getVH();
      if (maxHeight >= 0.95 * vh) {
        // if bottom of bio or header is greater than 5% of the viewport height, we need to disable the arrow
        console.log("Removing arrow: too small" + maxHeight + " " + vh);
        scrollArrow.style.bottom = "5vh";
        scrollArrow.style.display = "none";
      } else if (maxHeight > 0.75 * vh) {
        // if bottom of bio or header is greater than 20% of the viewport height, we need to force 5vh
        console.log("Forcing arrow to 5vh: too small " + maxHeight + " " + vh);
        scrollArrow.style.display = "block";
        scrollArrow.style.bottom = "5vh";
      } else if (
        document.body.scrollTop < 10 &&
        document.documentElement.scrollTop < 50
      ) {
        // When big enough and at the top of the page, we need to set the arrow to 20vh so the arrow is more visible
        console.log("Setting arrow to 20vh: at top");
        scrollArrow.style.display = "block";
        scrollArrow.style.bottom = "20vh";
      } else if (
        document.body.scrollTop < vh &&
        document.documentElement.scrollTop < vh
      ) {
        // When big enough and the user starts scrolling, set the arrow to 5vh for fun, and begin to fade opacity
        console.log("Setting arrow to 5vh and fading: scrolling");
        scrollArrow.style.display = "block";
        scrollArrow.style.bottom = "5vh";
      }
      scrollArrow.style.opacity = 1 - document.documentElement.scrollTop / 200;
    };

    const updateWaveVisual = () => {
      let wave = document.querySelector(".bg-wave-1");
      // Simpler than arrow, just move it to 105vh if user scrolls
      if (document.documentElement.scrollTop > 10) {
        wave.style.bottom = "-14vh";
      } else {
        wave.style.bottom = "0vh";
      }
    };

    const updateIntroVisual = () => {
      // shrinks as we scroll down
      let intro = document.querySelector(".intro");
      intro.style.scale = Math.min(
        1 - document.documentElement.scrollTop / (2 * getVH()),
        1,
      );
    };

    const updateTimelineScroll = () => {
      let timeline = document.querySelector(".timeline");
      if (document.documentElement.scrollTop < 10) {
        timeline.scrollTop = 0;
      }
    };

    const updateListeners = () => {
      // only add listener if not mobile
      if (window.innerWidth > 768) {
        console.log("Adding listeners");
        window.onresize = function () {
          updateArrowVisual();
          updateWaveVisual();
        };

        window.onscroll = function () {
          updateArrowVisual();
          updateWaveVisual();
          updateTimelineScroll();
          updateIntroVisual();
        };
      } else {
        //remove waves
        let wave = document.querySelector(".bg-wave-1");
        if (wave) wave.style.display = "none";
        // remove header img
        let header = document.querySelector(".header__img");
        if (header) header.style.display = "none";
        // set to flex column
        let intro = document.querySelector(".intro");
        if (intro) intro.style.flexDirection = "column";
        // set arrow bottom to 5vh
        let arrow = document.querySelector(".scroll-arrow");
        if (arrow) arrow.style.bottom = "0vh";
        // set project cards min width to 90vw
        let projects = document.querySelectorAll(".project__card");

        projects.forEach((project) => {
          project.style.minWidth = "90vw";
          project.style.maxWidth = "90vw";
        });

        // still reset scroll to top
        window.onscroll = function () {
          updateTimelineScroll();
          updateIntroVisual();
        };
      }
    };

    const fetchProjects = async () => {
      try {
        let res = await fetch(
          "https://api.github.com/users/adamllryan/repos?per_page=30",
        );
        if (!res.ok) {
          throw new Error(res.status);
        }
        setProjects(await res.json());
      } catch (err) {
        console.log(err);
        return [];
      }
    };
    fetchProjects();
    updateListeners();
  }, []);
  return (
    <>
      <div className="scroll-arrow">
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      <div className="bg-wave-1">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="snap page intro">
        <Header />
        <Bio />
      </div>
      <div className="snap page timeline">
        <Timeline projects={projects} />
        <Footer />
      </div>
    </>
  );
}

export default App;
