/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import teamOne from '../../assets/images/team-1.jpg';
// import teamTwo from '../../assets/images/team-2.jpg';
// import teamThree from '../../assets/images/team-3.jpg';
// import teamFour from '../../assets/images/team-4.jpg';

function TeamHomeOne() {
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
    function imageurl(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image.data[0].attributes.url;
        return baseurl + dataurl;
    }
    return (
        <>
            <section className="appie-team-area pt-90 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Meet our Team Members</h3>
                                <p>Different layouts and styles for team sections.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {home
                            ? home.slice(0,4).map((x) => (                       
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="appie-team-item mt-30 wow animated fadeInUp"
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
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-center">
                                    <h5 className="title">{x.attributes.name}</h5>
                                    <span>{x.attributes.desi}</span>
                                </div>
                            </div>
                            </div>
                        )) 
                        : 'hgfhgf'} 
                        </div>
                        <div className="col-lg-12">
                            <div className="team-btn text-center mt-50">
                            <Link to={{pathname: '/about-us', hash: '#team'}}>
                                    {/* {' '} */}
                                    View all Members <i className="fal fa-arrow-right" />
                            </Link>
                            </div>
                        
                                     
                    </div>
                </div>
            </section>
        </>
    );
}

export default TeamHomeOne;
