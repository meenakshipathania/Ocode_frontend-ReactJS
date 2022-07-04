import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import thumb from '../../assets/images/traffic-thumb.png';

function TrafficHomeOne() {
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
    function imageurl(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image2.data[0].attributes.url;
        return baseurl + dataurl;
    }
    return (
        <section className="appie-traffic-area pt-140 pb-180">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="appie-traffic-title">
                            {/* <span>Traffic</span> */}
                            <h3 className="title"> {home ? home.map((x) => <span>{x.attributes.heading1}</span>) : 'hgfhgf'}</h3>
                            <p>
                            {home ? home.map((x) => <span>{x.attributes.para2}</span>) : 'hgfhgf'}
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">{home ? home.map((x) => <span>{x.attributes.subt1}</span>) : 'hgfhgf'}</h5>
                                    {/* <p>Mucker plastered bugger all mate morish are.</p> */}
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-2 mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">{home ? home.map((x) => <span>{x.attributes.subt2}</span>) : 'hgfhgf'}</h5>
                                    {/* <p>Mucker plastered bugger all mate morish are.</p> */}
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-3">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">{home ? home.map((x) => <span>{x.attributes.subt3}</span>) : 'hgfhgf'}</h5>
                                    {/* <p>Mucker plastered bugger all mate morish are.</p> */}
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-4">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">{home ? home.map((x) => <span>{x.attributes.subt4}</span>) : 'hgfhgf'}</h5>
                                    {/* <p>Mucker plastered bugger all mate morish are.</p> */}
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="traffic-btn mt-50">
                                    <a className="main-btn" href="/about-us">
                                        Learn More <i className="fal fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="traffic-thumb ">
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
        </section>
    );
}

export default TrafficHomeOne;
