import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import SignupHomeEight from '../HomeEight/SignupHomeEight';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import SponserHomeTwo from '../HomeTwo/SponserHomeTwo';
import Drawer from '../Mobile/Drawer';
import HeaderCarrer from './HeaderCarrer';
import HeroCarrer from './HeroCarrer';
// import ServicesAbout from './ServicesAbout';
import Carreropening from './Carreropening';

function Carrer() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderCarrer drawer={drawer} action={drawerAction.toggle} />
            <HeroCarrer />
            {/* <ServicesAbout /> */}
            <Carreropening />
            <SponserHomeTwo />
            <SignupHomeEight />
            <FooterHomeOne className="appie-footer-about-area" />
            <BackToTop />
        </>
    );
}

export default Carrer;
