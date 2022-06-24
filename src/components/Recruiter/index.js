import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import SignupHomeEight from '../HomeEight/SignupHomeEight';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import HeaderRecruiter from './HeaderRecruiter';
import HeroRecruiter from './HeroRecruiter';
import RecruiterDetail from './RecruiterDetail'


function Recruiter() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderRecruiter drawer={drawer} action={drawerAction.toggle} />
            <HeroRecruiter />
            <RecruiterDetail />
            <SignupHomeEight />
            <FooterHomeOne className="appie-footer-about-area" />
            <BackToTop />
        </>
    );
}

export default Recruiter;
