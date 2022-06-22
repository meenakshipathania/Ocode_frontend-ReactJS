/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import team1 from '../../assets/images/team-1.jpg';
// import team2 from '../../assets/images/team-2.jpg';
// import team3 from '../../assets/images/team-3.jpg';
// import team4 from '../../assets/images/team-4.jpg';

function TeamAbout() {
    const [home, Sethome] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://localhost:1337/api/teams?populate=*')
            .then((res) => {
                Sethome(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);
    const [home1, Sethome1] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://localhost:1337/api/abouts?populate=*')
            .then((res) => {
                Sethome1(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);
    function imageurl(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image.data[0].attributes.url;
        return baseurl + dataurl;
    }
    return (
        <>
            <section className="appie-team-area appie-team-about-area pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">{home1 ? home1.map((x) => <span>{x.attributes.heading1}</span>) : 'hgfhgf'}</h3>
                                <p>{home1 ? home1.map((x) => <span>{x.attributes.para1}</span>) : 'hgfhgf'}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    {home
                            ? home.slice(0,8).map((x) => (
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="appie-team-item appie-team-item-about mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="thumb">
                                <img
                                                      className="loimg"
                                                      src={
                                                          x.attributes
                                                              ? imageurl(x.attributes)
                                                              : 'hgghtyu'
                                                      }
                                                      alt=""
                                                  />
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-left">
                                   <h5 className="title">{x.attributes.name}</h5>
                                   <span>{x.attributes.desi}</span>
                                </div>
                            </div>
                        </div>
                         )) 
                         : 'hgfhgf'}
                        {/* <div className="col-lg-3 col-md-6">
                            <div
                                className="appie-team-item appie-team-item-about mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="thumb">
                                    <img src={team2} alt="" />
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-left">
                                    <h5 className="title">Benjamin Evalent</h5>
                                    <span>CEO-Founder</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="appie-team-item appie-team-item-about mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="thumb">
                                    <img src={team3} alt="" />
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-left">
                                    <h5 className="title">Benjamin Evalent</h5>
                                    <span>CEO-Founder</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="appie-team-item appie-team-item-about mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="800ms"
                            >
                                <div className="thumb">
                                    <img src={team4} alt="" />
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-left">
                                    <h5 className="title">Benjamin Evalent</h5>
                                    <span>CEO-Founder</span>
                                </div>
                            </div>
                        </div> */}
                        
                        {/* <div className="col-lg-12">
                            <div className="team-btn text-center mt-50">
                                <a className="main-btn" href="#">
                                    View all Members <i className="fal fa-arrow-right"></i>
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default TeamAbout;
