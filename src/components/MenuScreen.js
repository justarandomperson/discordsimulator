import { Link } from "react-router-dom";
import "./MenuScreen.css";

const MenuScreen = (props) => {
  return (
    <div className="MenuScreen">
      <h1>Sans Dating Simulator</h1>
      <div className="MenuButtons">
        <Link to="/game" className="btn">
          Play
        </Link>
        <Link to="/extras" className="btn">
          Extras
        </Link>
      </div>
    </div>
  );
};

export default MenuScreen;
