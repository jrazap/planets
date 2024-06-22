import { useEffect } from "react";

const Tabs = ({ planet }) => {
  const btns = [
    {
      id: "overview_tab",
      label: "Overview",
      sub: "",
      selected: true,
      number: "01",
    },
    {
      id: "structure_tab",
      label: "Internal",
      sub: "Structure",
      selected: false,
      number: "02",
    },
    {
      id: "surface_tab",
      label: "Surface",
      sub: "Geology",
      selected: false,
      number: "03",
    },
  ];

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
        {btns.map((btn, index) => {
          return (
            <button
              key={index}
              role="tab"
              id={btn.id}
              aria-selected={btn.selected}
              data-name={`${planet}--btn`}
            >
              <span className="number_opacity">{btn.number}</span>
              {btn.label}
              <span className="tab_desk_vis">{btn.sub}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
