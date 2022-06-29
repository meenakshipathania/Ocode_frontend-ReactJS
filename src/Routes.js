import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Error from './components/Error';
import Loader from './components/Helper/Loader';
import ScrollToTop from './components/Helper/ScrollToTop';
import HomeEight from './components/HomeEight';
import HomeFive from './components/HomeFive';
import HomeFour from './components/HomeFour';
import HomeOne from './components/HomeOne';
import HomeSeven from './components/HomeSeven';
import HomeSix from './components/HomeSix';
import HomeThree from './components/HomeThree';
import Hometwo from './components/HomeTwo';
import News from './components/News';
import SingleBlog1 from './components/News/SingleBlog1';
import SingleBlog2 from './components/News/SingleBlog2';
import SingleBlog3 from './components/News/SingleBlog3';
import SingleBlog4 from './components/News/SingleBlog4';
import Service from './components/Service';
import Carrer from './components/Carrer';
import WebDesinger from './components/WebDesigner';
import GraphicDesigner from './components/GraphicDesigner';
import PhpDeveloper from './components/PhpDeveloper';
import FullStack from './components/FullStackDeveloper';
import IonicDeveloper from './components/IonicDeveloper';
import MarketingExecutive from './components/MarketingExecutive';
import Bidder from './components/Bidder';
import MagentoExpert from './components/MagentoExpert';
import Recruiter from './components/Recruiter';
import Apply from './components/ApplyNow';
import LuxySource from './components/LuxySource';
import CertifiedCell from './components/CertifiedCell';
import Zap11 from './components/Zap11';

function Routes() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    });
    return (
        <>
            {loading && (
                <div className={`appie-loader ${loading ? 'active' : ''}`}>
                    <Loader />
                </div>
            )}
            <div className={`appie-visible ${loading === false ? 'active' : ''}`}>
                <Router>
                    <ScrollToTop>
                        <Switch>
                            <Route exact path="/" component={HomeOne} />
                            <Route exact path="/home-two" component={Hometwo} />
                            <Route exact path="/home-three" component={HomeThree} />
                            <Route exact path="/home-four" component={HomeFour} />
                            <Route exact path="/home-five" component={HomeFive} />
                            <Route exact path="/home-six" component={HomeSix} />
                            <Route exact path="/home-seven" component={HomeSeven} />
                            <Route exact path="/home-eight" component={HomeEight} />
                            <Route exact path="/news" component={News} />
                            <Route exact path="/news/blog1" component={SingleBlog1} />
                            <Route exact path="/news/blog2" component={SingleBlog2} />
                            <Route exact path="/news/blog3" component={SingleBlog3} />
                            <Route exact path="/news/blog4" component={SingleBlog4} />
                            <Route exact path="/portfolio" component={Service} />
                            <Route exact path="/about-us" component={AboutUs} />
                            <Route exact path="/contact" component={Contact} />
                            <Route exact path="/career" component={Carrer} />
                            <Route exact path="/web-designer" component={WebDesinger} />
                            <Route exact path="/graphic-designer" component={GraphicDesigner} />
                            <Route exact path="/php-developer" component={PhpDeveloper} />
                            <Route exact path="/fullstack-developer" component={FullStack} />
                            <Route exact path="/ionic-developer" component={IonicDeveloper} />
                            <Route exact path="/marketing-executive" component={MarketingExecutive} />
                            <Route exact path="/bidder" component={Bidder} />
                            <Route exact path="/magento-expert" component={MagentoExpert} />
                            <Route exact path="/recruiter" component={Recruiter} />
                            <Route exact path="/apply-now" component={Apply} />
                            <Route exact path="/luxysource" component={LuxySource} />
                            <Route exact path="/certifiedcell" component={CertifiedCell} />
                            <Route exact path="/zap" component={Zap11} />
                            <Route exact path="/error" component={Error} />
                            <Route component={Error} />
                        </Switch>
                    </ScrollToTop>
                </Router>
            </div>
        </>
    );
}

export default Routes;
