import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import HeaderAbout from '../AboutUs/HeaderAbout';
import HeroNews from '../News/HeroBlog';
import Forms from './Forms';

function Contact() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderAbout drawer={drawer} action={drawerAction.toggle} />
            <HeroNews
                title="Contact Us"
                breadcrumb={[
                    // { link: '/', title: 'Home' },
                    // { link: '/contact', title: 'Contact' },
                ]}
            />
            <Forms />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default Contact;
