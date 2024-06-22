import { useEffect } from "react";

const Tabs = ({ planet }) => {
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
    <div className="tabs planet_buttons_wrapper item-buttons">
      <div
        role="tablist"
        aria-label="Planet Information"
        className="planet_details_buttons"
      >
        <button
          role="tab"
          id="overview_tab"
          aria-selected="true"
          data-name={`${planet}--btn`}
        >
          <span className="number_opacity">01</span>Overview
        </button>
        <button
          role="tab"
          id="structure_tab"
          aria-selected="false"
          data-name={`${planet}--btn`}
        >
          <span className="number_opacity">02</span>
          <span className="tab_desk_vis">Internal </span>Structure
        </button>
        <button
          role="tab"
          id="surface_tab"
          aria-selected="false"
          data-name={`${planet}--btn`}
        >
          <span className="number_opacity">03</span>Surface
          <span className="tab_desk_vis"> Geology</span>
        </button>
      </div>
    </div>
  );
};

export default Tabs;
