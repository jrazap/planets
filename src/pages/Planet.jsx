import Tabs from "../includes/Tabs";
import Overview from "../includes/Overview";
import Structure from "../includes/Structure";
import Geology from "../includes/Geology";
import Metadata from "../includes/Metadata";

const Planet = ({ id, planet }) => {
  return (
    <>
      <main id={id} className="planet_main planet_highlights">
        <Tabs planet={planet} />

        <Overview id={id} />

        <Structure id={id} />

        <Geology id={id} />
      </main>
      
      <Metadata id={id} />
    </>
  );
};

export default Planet;
