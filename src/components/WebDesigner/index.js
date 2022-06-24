import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import SignupHomeEight from '../HomeEight/SignupHomeEight';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import HeaderWebdesigner from './HeaderWebdesigner';
import HeroWebdesigner from './HeroWebdesigner';
import WebDetail from './webdetail';


function WebDesinger() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderWebdesigner drawer={drawer} action={drawerAction.toggle} />
            <HeroWebdesigner />
            <WebDetail />
           
            <SignupHomeEight />
            <FooterHomeOne className="appie-footer-about-area" />
            <BackToTop />
        </>
    );
}

export default WebDesinger;
