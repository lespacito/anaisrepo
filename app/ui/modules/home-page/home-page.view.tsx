import { FeaturesView } from "./components/features/features.view";
import { HeroTopView } from "./components/hero-top/hero-top.view";
import { PassionsView } from "./components/passions/passions.view";

export const HomePageView = () => {
  return (
    <>
      <HeroTopView />
      <FeaturesView />
      <PassionsView />
    </>
  );
};
