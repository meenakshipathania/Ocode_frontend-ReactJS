import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import SignupHomeEight from '../HomeEight/SignupHomeEight';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import HeaderCertified from './HeaderCertified';
import HeroCertified from './HeroCertified';
import CertifiedDetail from './CertifiedDetail'


function CertifiedCell() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderCertified drawer={drawer} action={drawerAction.toggle} />
            <HeroCertified />
            <CertifiedDetail />
            <SignupHomeEight />
            <FooterHomeOne className="appie-footer-about-area" />
            <BackToTop />
        </>
    );
}

export default CertifiedCell;
