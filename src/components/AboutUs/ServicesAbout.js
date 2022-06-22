import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ServicesAbout() {
    const [logo, Setlogo] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://localhost:1337/api/abouts?populate=*')
            .then((res) => {
                Setlogo(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);
    return (
        <>
            <section className="appie-services-2-area pt-90 pb-55" id="service">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-12 col-md-12">
                            <div className="appie-section-title">
                                <h3 className="appie-title">{logo ? logo.map((x) => <span>{x.attributes.heading}</span>) : 'hgfhgf'}</h3>
                                <p>{logo ? logo.map((x) => <span>{x.attributes.para}</span>) : 'hgfhgf'} </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 appie-single-service-about mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                <i class="fa fa-users" aria-hidden="true"></i>
                                </div>
                                <h4 className="title">{logo ? logo.map((x) => <span>{x.attributes.t1}</span>) : 'hgfhgf'}</h4>
                                {/* <p>He lost his bottle loo don't get shirty with me ruddy.</p> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 appie-single-service-about item-2 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="icon">
                                <i class="fa fa-cloud-upload" aria-hidden="true"></i>
                                </div>
                                <h4 className="title">{logo ? logo.map((x) => <span>{x.attributes.t2}</span>) : 'hgfhgf'}</h4>
                                {/* <p>He lost his bottle loo don't get shirty with me ruddy.</p> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 appie-single-service-about item-3 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="icon">
                                <i class="fa fa-cog" aria-hidden="true"></i>
                                </div>
                                <h4 className="title">{logo ? logo.map((x) => <span>{x.attributes.t3}</span>) : 'hgfhgf'}</h4>
                                {/* <p>He lost his bottle loo don't get shirty with me ruddy.</p> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 appie-single-service-about item-4 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                <i class="fa fa-tachometer" aria-hidden="true"></i>
                                </div>
                                <h4 className="title">{logo ? logo.map((x) => <span>{x.attributes.t4}</span>) : 'hgfhgf'}</h4>
                                {/* <p>He lost his bottle loo don't get shirty with me ruddy.</p> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 appie-single-service-about item-5 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="icon">
                                <i class="fa fa-folder-open" aria-hidden="true"></i>
                                </div>
                                <h4 className="title">{logo ? logo.map((x) => <span>{x.attributes.t5}</span>) : 'hgfhgf'}</h4>
                                {/* <p>He lost his bottle loo don't get shirty with me ruddy.</p> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 appie-single-service-about item-6 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="icon">
                                <i class="fa fa-gift" aria-hidden="true"></i>
                                </div>
                                <h4 className="title">{logo ? logo.map((x) => <span>{x.attributes.t6}</span>) : 'hgfhgf'}</h4>
                                {/* <p>He lost his bottle loo don't get shirty with me ruddy.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServicesAbout;
