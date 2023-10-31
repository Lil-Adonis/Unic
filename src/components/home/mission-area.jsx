import React from "react";
import { HighlightThree } from "../../svg";

const SvgHighlight = () => (
  <svg
    width="201"
    height="12"
    viewBox="0 0 201 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {" "}
    <path d="M0 0L201 12H0V0Z" fill="#FFDC60" />
  </svg>
);

const contents = {
  shapes: [
    "mission-shape-5.1.png",
    "mission-shape-5.6.png",
    "mission-shape-5.3.png",
  ],
  tabs: [
    { active: true, id: "mission", title: "Our Mission" },
    { id: "vision", title: "Our Vission" },
  ],
  tab_contents: [
    {
      show: true,
      id: "mission",
      title: (
        <>
          <span className="tp-section-highlight">
            {" "}
            Innovation <SvgHighlight />{" "}
          </span>
          {" and "}
          <span className="tp-section-highlight">
            {" "}
            Creativity <SvgHighlight />{" "}
          </span>
        </>
      ),
      text_1: (
        <>
          UNIC's mission is to foster innovation, creativity, and positive
          change within the University of Maiduguri and the broader community.
          We aim to ignite the innovative spirit in every individual, providing
          a platform for learning, collaboration, and the pursuit of
          groundbreaking ideas."
        </>
      ),
      text_2: (
        <>
          Through workshops, events, and hands-on projects, we inspire and
          empower our members to become change-makers, problem solvers, and
          visionaries. We believe in the power of diverse perspectives and the
          unlimited potential of innovation to address societal challenges. UNIC
          is a place where students, faculty, and staff come together to explore
          new horizons, create lasting impact, and leave a legacy of innovation.
          Our commitment to nurturing creativity and fostering a culture of
          innovation shapes a brighter future for all.
        </>
      ),
    },
    {
      id: "vision",
      title: (
        <>
          Our vision is to provide{" "}
          <span className="tp-section-highlight">
            {" "}
            Elasting <HighlightThree />
          </span>{" "}
          <span className="tp-section-highlight">
            {" "}
            Solution <HighlightThree />
          </span>{" "}
          for Humanity
        </>
      ),
      text_1: (
        <>
          UNIC envisions a dynamic, inclusive community at the University of
          Maiduguri where innovation thrives. Our vision is to inspire and equip
          students, faculty, and staff to be catalysts for positive change
          through creative problem-solving and inventive thinking. We see UNIC
          as a hub of collaboration, a place where diverse minds unite to
          explore, learn, and develop solutions that address pressing global
          challenges.
        </>
      ),
      text_2: (
        <>
          UNIC envisions a dynamic, inclusive community at the University of
          Maiduguri where innovation thrives. Our vision is to inspire and equip
          students, faculty, and staff to be catalysts for positive change
          through creative problem-solving and inventive thinking. We see UNIC
          as a hub of collaboration, a place where diverse minds unite to
          explore, learn, and develop solutions that address pressing global
          challenges.
        </>
      ),
    },
  ],
  img: "/assets/img/mission/collage.png",
};

const { shapes, tabs, tab_contents, img } = contents;

const MissionArea = () => {
  return (
    <div className="tp-mission-area pt-130 p-relative">
      {/* {shapes.map((s, i) => (
        <div key={i} className={`bp-mission-shape-${i + 1} d-none d-lg-block`}>
          <img src={`/assets/img/mission/${s}`} alt="" />
        </div>
      ))} */}
      <div className="container">
        <div className="">
          <div
            className="d-flex flex-column justify-content-center align-items-center wow tpfadeLeft"
            data-wow-duration=".5s"
            data-wow-delay=".7s"
          >
            <div className="tp-mission-tab-section pb-10">
              <nav>
                <div className="nav tp-mission-tab" id="nav-tab" role="tablist">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`nav-links ${tab.active ? "active" : ""}`}
                      id={`nav-${tab.id}-tab`}
                      data-bs-toggle="tab"
                      data-bs-target={`#${tab.id}`}
                      type="button"
                      role="tab"
                      aria-controls={`nav-${tab.id}-tab`}
                      aria-selected={tab.active ? "true" : "false"}
                      tabIndex="-1"
                    >
                      <span>{tab.title}</span>
                    </button>
                  ))}
                </div>
              </nav>
            </div>
            <div
              className="tab-content"
              id="nav-tabContent"
            >
              {tab_contents.map((item) => {
                const { id, text_1, text_2, title, show } = item;
                return (
                  <div
                    key={id}
                    className={`tab-pane mb-50 fade ${show ? "show active" : ""}`}
                    id={id}
                    role="tabpanel"
                    aria-labelledby={`nav-${id}-tab`}
                  >
                    <div className="tpmission">
                      <div className="tpmission__content d-flex flex-column justify-content-center align-items-center">
                        <h2 className="tp-mission-title text-center">
                          {title}
                        </h2>
                        <p className="pb-10 pr-0 text-center">{text_1}</p>
                        <p className="pr-0 text-center">{text_2}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <div
            className="col-xl-6 col-lg-5 col-md-12 wow tpfadeRight"
            data-wow-duration=".5s"
            data-wow-delay=".7s"
          >
            <div className="tp-mission-img">
              <img src={img} alt="" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MissionArea;
