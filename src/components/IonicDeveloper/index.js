import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import SignupHomeEight from '../HomeEight/SignupHomeEight';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import HeaderIonic from './HeaderIonic';
import HeroIonic from './HeroIonic';
import IonicDetail from './IonicDetail';


function IonicDeveloper() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderIonic drawer={drawer} action={drawerAction.toggle} />
            <HeroIonic />
            <IonicDetail />
           
            <SignupHomeEight />
            <FooterHomeOne className="appie-footer-about-area" />
            <BackToTop />
        </>
    );
}

export default IonicDeveloper;
