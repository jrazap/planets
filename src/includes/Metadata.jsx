import { useRecoilValue } from "recoil";
import { dataState } from "../state";

const Metadata = ({ id }) => {
  const data = useRecoilValue(dataState);

  return (
    <aside id="metaData" className="planet_details planet_details_sub">
      <div className="planet_details_sub">
        <p className="subtitle">Rotation Time</p>
        <p className="info">{data[id].rotation}</p>
      </div>

      <div className="planet_details_sub">
        <p className="subtitle">Revolution Time</p>
        <p className="info">{data[id].revolution}</p>
      </div>

      <div className="planet_details_sub">
        <p className="subtitle">Radius</p>
        <p className="info">{data[id].radius}</p>
      </div>

      <div className="planet_details_sub">
        <p className="subtitle">Average Temp.</p>
        <p className="info">{data[id].temperature}</p>
      </div>
    </aside>
  );
};

export default Metadata;
