import { useRecoilValue } from "recoil";
import { dataState } from "../state";

const Metadata = ({ id }) => {
  const data = useRecoilValue(dataState);

  const information = [
    {
      title: "Rotation Time",
      info: data[id].rotation,
    },
    {
      title: "Revolution Time",
      info: data[id].revolution,
    },
    {
      title: "Radius",
      info: data[id].radius,
    },
    {
      title: "Average Temp.",
      info: data[id].temperature,
    },
  ];

  return (
    <aside id="metaData" className="planet_details planet_details_sub">
      {information.map((item, index) => {
        return (
          <div className="planet_details_sub" key={index}>
            <p className="subtitle">{item.title}</p>
            <p className="info">{item.info}</p>
          </div>
        );
      })}
    </aside>
  );
};

export default Metadata;
