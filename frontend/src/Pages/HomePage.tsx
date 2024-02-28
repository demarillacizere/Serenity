import React from "react";
import { WelcomeBanner } from "../Layouts/WelcomeBanner";

type Props = {};

export default function HomePage({}: Props) {
  return (
    <div className="max-h-screen flex flex-col">
      <WelcomeBanner />
    </div>
  );
}
