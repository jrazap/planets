import { useRecoilValue } from "recoil";
import { dataState } from "../state";

const Structure = ({ id }) => {
    const data = useRecoilValue(dataState);

  return (
    <>
      <div
        id="structure-img"
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

      <div
        id="structure"
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
    </>
  );
};

export default Structure;
