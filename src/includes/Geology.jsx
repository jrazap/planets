import { useRecoilValue } from "recoil";
import { dataState } from "../state";

const Geology = ({ id }) => {
  const data = useRecoilValue(dataState);

  return (
    <>
      <div
        id="geology-img"
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

      <div
        id="geology"
        className="geology item-info"
        role="tabpanel"
        aria-labelledby="surface_tab"
        hidden
      >
        <h1>{data[id].name}</h1>
        <p className="planet_highlights overview">{data[id].geology.content}</p>
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
    </>
  );
};

export default Geology;
