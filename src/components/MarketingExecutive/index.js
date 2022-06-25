import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import SignupHomeEight from '../HomeEight/SignupHomeEight';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import HeaderMarketing from './HeaderMarketing';
import HeroMarketing from './HeroMarketing';
import MarketingDetail from './MarketingDetail'


function MarketingExecutive() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderMarketing drawer={drawer} action={drawerAction.toggle} />
            <HeroMarketing />
            <MarketingDetail />
            <SignupHomeEight />
            <FooterHomeOne className="appie-footer-about-area" />
            <BackToTop />
        </>
    );
}

export default MarketingExecutive;
