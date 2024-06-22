import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { dataState } from "../state";
import Tabs from "../includes/Tabs";

const Planet = ({ id, planet }) => {
  const data = useRecoilValue(dataState);

  useEffect(() => {
    const tabs = document.querySelector(".tabs");
    const tabButtons = tabs.querySelectorAll('[role="tab"]');
    const tabPanels = Array.from(
      document.querySelectorAll('[role="tabpanel"]')
    );

    const handleTabClick = (e) => {
      tabPanels.forEach((panel) => {
        panel.hidden = true;
      });

      tabButtons.forEach((tab) => {
        tab.setAttribute("aria-selected", false);
      });

      e.currentTarget.setAttribute("aria-selected", true);
      const { id } = e.currentTarget;
      const tabPanel = tabPanels.filter(
        (panel) => panel.getAttribute("aria-labelledby") === id
      );
      tabPanel.forEach((panel) => {
        panel.hidden = false;
      });
    };

    tabButtons.forEach((button) =>
      button.addEventListener("click", handleTabClick)
    );
  });

  return (
    <>
      <main id={id} className="planet_main planet_highlights">
        <Tabs planet={planet}/>

        <div id="overview-img"
          className="overview item-image planet"
          role="tabpanel"
          aria-labelledby="overview_tab"
        >
          <img
            className={data[id].name}
            src={data[id].images.planet}
            alt={data[id].overview.alt}
          />
        </div>

        <div id="overview"
          className="overview item-info"
          role="tabpanel"
          aria-labelledby="overview_tab"
        >
          <h1>{data[id].name}</h1>
          <p className="planet_highlights overview">
            {data[id].overview.content}
          </p>
          <p className="source">
            Source :{" "}
            <a
              href={data[id].overview.source}
              title="Click here to visit the wikipedia page"
            >
              Wikipedia <i className="fas fa-external-link-square-alt"></i>
            </a>
          </p>
        </div>

        <div id="structure-img"
          className="structure item-image planet"
          role="tabpanel"
          aria-labelledby="structure_tab"
          hidden
        >
          <img
            className={data[id].name}
            src={data[id].images.internal}
            alt={data[id].structure.alt}
          />
        </div>

        <div id="structure"
          className="structure item-info"
          role="tabpanel"
          aria-labelledby="structure_tab"
          hidden
        >
          <h1>{data[id].name}</h1>
          <p className="planet_highlights overview">
            {data[id].structure.content}
          </p>
          <p className="source">
            Source :{" "}
            <a
              href={data[id].structure.source}
              title="Click here to visit the wikipedia page"
            >
              Wikipedia <i className="fas fa-external-link-square-alt"></i>
            </a>
          </p>
        </div>

        <div id="geology-img"
          className="geology item-image planet"
          role="tabpanel"
          aria-labelledby="surface_tab"
          hidden
        >
          <img
            id="geo_stack_back"
            className={data[id].name}
            src={data[id].images.planet}
            alt={data[id].overview.alt}
          />
          <img
            id="geo_stack_front"
            className="planetGeo__imgSize"
            src={data[id].images.geology}
            alt={data[id].geology.alt}
          />
        </div>

        <div id="geology"
          className="geology item-info"
          role="tabpanel"
          aria-labelledby="surface_tab"
          hidden
        >
          <h1>{data[id].name}</h1>
          <p className="planet_highlights overview">
            {data[id].geology.content}
          </p>
          <p className="source">
            Source :{" "}
            <a
              href={data[id].geology.source}
              title="Click here to visit the wikipedia page"
            >
              Wikipedia <i className="fas fa-external-link-square-alt"></i>
            </a>
          </p>
        </div>
      </main>

      <aside id="metaData" className="planet_details planet_details_sub">
        <div className="planet_details_sub">
        <h4>Rotation Time</h4>
        <h3>{data[id].rotation}</h3>
        </div>

        <div className="planet_details_sub">
        <h4>Revolution Time</h4>
        <h3>{data[id].revolution}</h3>
        </div>

        <div className="planet_details_sub">
        <h4>Radius</h4>
        <h3>{data[id].radius}</h3>
        </div>
        
        <div className="planet_details_sub">
        <h4>Average Temp.</h4>
        <h3>{data[id].temperature}</h3>
        </div>
      </aside>
    </>
  );
};

export default Planet;
