import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import Blog4 from './Blog4';
import BlogSideBar from './BlogSideBar';
import HeaderBlog from './HeaderBlog';
import HeroBlog from './HeroBlog';

function SingleBlog4() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderBlog action={drawerAction.toggle} />
            <HeroBlog
                title="Blog Detail"
                // breadcrumb={[
                //     { link: '/', title: 'home' },
                //     { link: '/blog', title: 'Blogs' },
                //     { link: '/education/blog4', title: 'Blog' },
                // ]}
            />
            <section className="blogpage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-7">
                            <Blog4 />
                        </div>
                        <div className="col-lg-4 col-md-5">
                            <BlogSideBar />
                        </div>
                    </div>
                </div>
            </section>
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default SingleBlog4;
