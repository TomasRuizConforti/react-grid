import "./styles/Main.css";
import Columna from "./Columna";
import Masonry from "react-masonry-css";
const Main = () => {
  return (
    <main>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {/* array of JSX items */}
      </Masonry>
      <Columna />
      <Columna />
      <Columna />
      <Columna />
      <Columna />
    </main>
  );
};

export default Main;
