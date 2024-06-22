const Tabs = ({ planet }) => {
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
