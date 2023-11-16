import React from "react";
import WeekInfoCardComponents from "../WeekInfoCard/Index";
import SearchBox from "../SearchsCity/Index";
import ChooseStateComponents from "../Choosestate/Index";
import HumidityComponents from "../Humidity/Index";
import LeftComponents from "../Left/Index";
const HomeComponents = () => {
  return (
    <>
      <div className="homeWrap">
        <SearchBox />
        <div className="weatherSection">
          <LeftComponents />
          <div className="rightSide">
            {/* <ChooseStateComponents /> */}
            <HumidityComponents />
            <WeekInfoCardComponents />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponents;
