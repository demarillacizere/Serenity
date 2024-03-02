import React from "react";
import { WelcomeBanner } from "../Layouts/WelcomeBanner";
import { WhySection } from "../Layouts/WhySection";

type Props = {};

export default function HomePage({}: Props) {
  return (
    <div className=" flex flex-col ">
      <WelcomeBanner />
      <WhySection />
    </div>
  );
}
