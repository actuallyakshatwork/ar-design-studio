"use client";

import ReactFullpage from "@fullpage/react-fullpage";
import { NewAboutUs, OurTeam, WhatMakesUsDifferent } from "./AboutUs";
import HeroSection from "./HeroSection";

export default function ScrollSnapComponent() {
  return (
    <ReactFullpage
      scrollingSpeed={1000}
      credits={{
        enabled: false,
      }}
      verticalCentered={false}
      scrollOverflow={true}
      render={({ state, fullpageApi }) => {
        return (
          <div className="">
            <HeroSection />
            <NewAboutUs />
            <WhatMakesUsDifferent />
            <OurTeam />
          </div>
        );
      }}
    />
  );
}
