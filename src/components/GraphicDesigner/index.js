import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import SignupHomeEight from '../HomeEight/SignupHomeEight';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import HeaderGraphic from './HeaderGraphic.js';
import HeroGraphic from './HeroGraphic.js';
import GraphicDetail from './GraphicDetail';


function GraphicDesigner() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderGraphic drawer={drawer} action={drawerAction.toggle} />
            <HeroGraphic />
            <GraphicDetail />
           
            <SignupHomeEight />
            <FooterHomeOne className="appie-footer-about-area" />
            <BackToTop />
        </>
    );
}

export default GraphicDesigner;
