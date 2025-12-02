import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import CareerHero from "../components/CareerPageComponent/CareerHero";
import Hiring from "../components/CareerPageComponent/Hiring";
import Benefits from "../components/CareerPageComponent/Benefits";
import Culture from "../components/CareerPageComponent/Culture";

const CareerPage = ({ isLightMode }) => {
















    return (
        <div className={isLightMode ? "bg-white text-[#0f172a]" : "bg-black text-white"}>
            {/* Hero Section */}

            <CareerHero isLightMode={isLightMode} />
            {/* Current Openings Section - New Design */}

            <Hiring isLightMode={isLightMode} />
            {/* Rest of the sections remain the same */}
            {/* Benefits Section */}
            <Benefits isLightMode={isLightMode} />

            {/* Culture Section */}
          <Culture isLightMode={isLightMode} />

           
        </div>
    );
};

export default CareerPage;