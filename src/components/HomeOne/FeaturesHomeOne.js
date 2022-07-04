/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import thumb from '../../assets/images/features-thumb-1.png';
import shapeSix from '../../assets/images/shape/shape-6.png';
import shapeSeven from '../../assets/images/shape/shape-7.png';
import shapeEight from '../../assets/images/shape/shape-8.png';

function FeaturesHomeOne({ className }) {
    const [home, Sethome] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://localhost:1337/api/homes?populate=*')
            .then((res) => {
                Sethome(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);
    const [tab, setTab] = useState('setting');
    const handleClick = (e, value) => {
        e.preventDefault();
        setTab(value);
    };
    function imageurl(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image1.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl1(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image3.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl2(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image4.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl3(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image5.data[0].attributes.url;
        return baseurl + dataurl;
    }
    return (
        <section className={`appie-features-area pt-100 ${className}`} id="features">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3">
                        <div className="appie-features-tabs-btn">
                            <div
                                className="nav flex-column nav-pills"
                                id="v-pills-tab"
                                role="tablist"
                                aria-orientation="vertical"
                            >
                                <a
                                    onClick={(e) => handleClick(e, 'setting')}
                                    className={`nav-link ${tab === 'setting' ? 'active' : ''}`}
                                    id="v-pills-home-tab"
                                    data-toggle="pill"
                                    href="#v-pills-home"
                                    role="tab"
                                    aria-controls="v-pills-home"
                                    aria-selected="true"
                                >
                                    <i className="fas fa-cog" /> Progressive Web Apps
                                </a>
                                <a
                                    onClick={(e) => handleClick(e, 'report')}
                                    className={`nav-link ${tab === 'report' ? 'active' : ''}`}
                                    id="v-pills-profile-tab"
                                    data-toggle="pill"
                                    href="#v-pills-profile"
                                    role="tab"
                                    aria-controls="v-pills-profile"
                                    aria-selected="false"
                                >
                                    <i className="fas fa-exclamation-triangle" /> Mobile and iOT Apps
                                </a>
                                <a
                                    onClick={(e) => handleClick(e, 'notice')}
                                    className={`nav-link ${tab === 'notice' ? 'active' : ''}`}
                                    id="v-pills-messages-tab"
                                    data-toggle="pill"
                                    href="#v-pills-messages"
                                    role="tab"
                                    aria-controls="v-pills-messages"
                                    aria-selected="false"
                                >
                                    <i className="fas fa-bell" /> Software Integrations
                                </a>
                                <a
                                    onClick={(e) => handleClick(e, 'app')}
                                    className={`nav-link ${tab === 'app' ? 'active' : ''}`}
                                    id="v-pills-settings-tab"
                                    data-toggle="pill"
                                    href="#v-pills-settings"
                                    role="tab"
                                    aria-controls="v-pills-settings"
                                    aria-selected="false"
                                >
                                    <i className="fas fa-lock" /> Ecommerce Solutions
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div
                                className={`${
                                    tab === 'setting' ? 'show active' : ''
                                } tab-pane fade`}
                                id="v-pills-home"
                                role="tabpanel"
                                aria-labelledby="v-pills-home-tab"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-thumb text-center wow animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                           {home
                                        ? home.map((x) => (
                                              <a href="/">
                                                  <img
                                                      className="loimg"
                                                      src={
                                                          x.attributes
                                                              ? imageurl(x.attributes)
                                                              : 'hgghtyu'
                                                      }
                                                      alt=""
                                                  />
                                              </a>
                                          ))
                                        : 'hgfhgf'}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-content wow animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            {/* <span>Custom Reacyions</span> */}
                                            <h3 className="title">
                                            {home ? home.map((x) => <span>{x.attributes.heading}</span>) : 'hgfhgf'}
                                            </h3>
                                            <p>
                                            {home ? home.map((x) => <span>{x.attributes.para1}</span>) : 'hgfhgf'}
                                            </p>
                                            <Link className="main-btn" to="/about-us">
                                            {home ? home.map((x) => <span>{x.attributes.button}</span>) : 'hgfhgf'}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${tab === 'report' ? 'show active' : ''} tab-pane fade`}
                                id="v-pills-profile"
                                role="tabpanel"
                                aria-labelledby="v-pills-profile-tab"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-thumb text-center animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                             {home
                                        ? home.map((x) => (
                                              <a href="/">
                                                  <img
                                                      className="loimg"
                                                      src={
                                                          x.attributes
                                                              ? imageurl1(x.attributes)
                                                              : 'hgghtyu'
                                                      }
                                                      alt=""
                                                  />
                                              </a>
                                          ))
                                        : 'hgfhgf'}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-content animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            {/* <span>Custom  vvvvReacyions</span> */}
                                            <h3 className="title">
                                            {home ? home.map((x) => <span>{x.attributes.heading2}</span>) : 'hgfhgf'}
                                            </h3>
                                            <p>
                                            {home ? home.map((x) => <span>{x.attributes.para3}</span>) : 'hgfhgf'}
                                            </p>
                                            <a className="main-btn" href="/about-us">
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${tab === 'notice' ? 'show active' : ''} tab-pane fade`}
                                id="v-pills-messages"
                                role="tabpanel"
                                aria-labelledby="v-pills-messages-tab"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-thumb text-center animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                            {home
                                        ? home.map((x) => (
                                              <a href="/">
                                                  <img
                                                      className="loimg"
                                                      src={
                                                          x.attributes
                                                              ? imageurl2(x.attributes)
                                                              : 'hgghtyu'
                                                      }
                                                      alt=""
                                                  />
                                              </a>
                                          ))
                                        : 'hgfhgf'}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-content animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            {/* <span>Custom Reacyions</span> */}
                                            <h3 className="title">
                                            {home ? home.map((x) => <span>{x.attributes.heading3}</span>) : 'hgfhgf'}
                                            </h3>
                                            <p>
                                            {home ? home.map((x) => <span>{x.attributes.para4}</span>) : 'hgfhgf'}
                                            </p>
                                            <a className="main-btn" href="/about-us">
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${tab === 'app' ? 'show active' : ''} tab-pane fade`}
                                id="v-pills-settings"
                                role="tabpanel"
                                aria-labelledby="v-pills-settings-tab"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-thumb text-center animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                             {home
                                        ? home.map((x) => (
                                              <a href="/">
                                                  <img
                                                      className="loimg"
                                                      src={
                                                          x.attributes
                                                              ? imageurl3(x.attributes)
                                                              : 'hgghtyu'
                                                      }
                                                      alt=""
                                                  />
                                              </a>
                                          ))
                                        : 'hgfhgf'}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-content animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            {/* <span>Custom Reacyions</span> */}
                                            <h3 className="title">
                                            {home ? home.map((x) => <span>{x.attributes.heading4}</span>) : 'hgfhgf'}
                                            </h3>
                                            <h3>
                                            {home ? home.map((x) => <span>{x.attributes.sutext}</span>) : 'hgfhgf'}
                                            </h3>
                                            <p>
                                            {home ? home.map((x) => <span>{x.attributes.para5}</span>) : 'hgfhgf'}
                                            </p>
                                            <a className="main-btn" href="/about-us">
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features-shape-1">
                <img src={shapeSix} alt="" />
            </div>
            <div className="features-shape-2">
                <img src={shapeSeven} alt="" />
            </div>
            <div className="features-shape-3">
                <img src={shapeEight} alt="" />
            </div>
        </section>
    );
}

export default FeaturesHomeOne;
