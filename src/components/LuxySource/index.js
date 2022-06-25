import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import SignupHomeEight from '../HomeEight/SignupHomeEight';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import HeaderLuxy from './HeaderLuxy';
import HeroLuxy from './HeroLuxy';
import LuxyDetail from './LuxyDetail'


function LuxySource() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderLuxy drawer={drawer} action={drawerAction.toggle} />
            <HeroLuxy />
            <LuxyDetail />
            <SignupHomeEight />
            <FooterHomeOne className="appie-footer-about-area" />
            <BackToTop />
        </>
    );
}

export default LuxySource;
