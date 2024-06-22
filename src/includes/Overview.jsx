import { useRecoilValue } from "recoil";
import { dataState } from "../state";

const Overview = ({id}) => {
  const data = useRecoilValue(dataState);

  return (
    <>
      <div
        id="overview-img"
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

      <div
        id="overview"
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
    </>
  );
};

export default Overview;
