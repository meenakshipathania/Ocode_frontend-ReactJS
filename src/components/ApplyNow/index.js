import React from "react";
import useToggle from "../../Hooks/useToggle";
import BackToTop from "../BackToTop";
import SignupHomeEight from "../HomeEight/SignupHomeEight";
import FooterHomeOne from "../HomeOne/FooterHomeOne";
import Drawer from "../Mobile/Drawer";
import HeaderApply from "./HeaderApply";
import HeroApply from "./HeroApply";
import ApplyDetail from "./ApplyDetail";

function Apply() {
  const [drawer, drawerAction] = useToggle(false);
  return (
    <>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <HeaderApply drawer={drawer} action={drawerAction.toggle} />
      <HeroApply />
      <ApplyDetail />
      <SignupHomeEight />
      <FooterHomeOne className="appie-footer-about-area" />
      <BackToTop />
    </>
  );
}

export default Apply;
