import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import SignupHomeEight from '../HomeEight/SignupHomeEight';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import HeaderPhp from './HeaderPhp';
import HeroPhp from './HeroPhp';
import PhpDetail from './PhpDetail';


function PhpDeveloper() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderPhp drawer={drawer} action={drawerAction.toggle} />
            <HeroPhp />
            <PhpDetail />
           
            <SignupHomeEight />
            <FooterHomeOne className="appie-footer-about-area" />
            <BackToTop />
        </>
    );
}

export default PhpDeveloper;
