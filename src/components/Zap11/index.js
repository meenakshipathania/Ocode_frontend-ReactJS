import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import SignupHomeEight from '../HomeEight/SignupHomeEight';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import HeaderZap11 from './HeaderZap11';
import HeroZap11 from './HeroZap11';
import ZapDetail from './ZapDetail'


function Zap11() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderZap11 drawer={drawer} action={drawerAction.toggle} />
            <HeroZap11 />
            <ZapDetail />
            <SignupHomeEight />
            <FooterHomeOne className="appie-footer-about-area" />
            <BackToTop />
        </>
    );
}

export default Zap11;
