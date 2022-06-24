import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import SignupHomeEight from '../HomeEight/SignupHomeEight';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import HeaderMagento from './HeaderMagento';
import HeroMagento from './HeroMagento';
import MagentoDetail from './MagentoDetail'


function MagentoExpert() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderMagento drawer={drawer} action={drawerAction.toggle} />
            <HeroMagento />
            <MagentoDetail />
            <SignupHomeEight />
            <FooterHomeOne className="appie-footer-about-area" />
            <BackToTop />
        </>
    );
}

export default MagentoExpert;
