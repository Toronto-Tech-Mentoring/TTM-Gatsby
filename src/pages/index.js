import React from "react"
import { MainLayout } from "../layout";
import { HowAreWeDifferentSection, TheBottomLineSection, OurRootsSection } from "../components/Home";
import { CitySVG } from "../components/SVG";

export default function Home() {
  return (
    <MainLayout>
      <p>This is Home (About-us) page</p>
      <CitySVG />
      <HowAreWeDifferentSection />
      <TheBottomLineSection />
      <OurRootsSection />
      <CitySVG />
    </MainLayout>
  )
}
