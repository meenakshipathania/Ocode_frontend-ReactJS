/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function DetailsService() {
    const [logo, Setlogo] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://localhost:1337/api/logos?populate=*')
            .then((res) => {
                Setlogo(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);
    const [logo1, Setlogo1] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://localhost:1337/api/careers?populate=*')
            .then((res) => {
                Setlogo1(res.data.data);
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
            <section className="appie-service-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="service-details-content">
                                <div className="content">
                                <div className="appie-section-title text-center">
                                <h3 className="appie-title">{logo ? logo.map((x) => <span>{x.attributes.carheading}</span>) : 'hgfhgf'}</h3>
                                <p>{logo ? logo.map((x) => <span>{x.attributes.carpara}</span>) : 'hgfhgf'}</p>
                            </div>
                                    <div className='container'>
                                        <div className='row'>
                                    {logo1 ? logo1.map((x) => (
                                        <div className='col-md-4'>
                                        <Link to={'/'+ x.attributes.slug}>
                                        <div className='mainport'>
                                        <div className='port11'>
                                            <div className='subport1'>
                                                <span className='span1'>
                                                {/* <i class="fa fa-paint-brush fa-5x" aria-hidden="true"></i> */}                                       
                                                  <img
                                                      className="loimg1"
                                                      src={
                                                          x.attributes
                                                              ? imageurl(x.attributes)
                                                              : 'hgghtyu'
                                                      }
                                                      alt=""
                                                  />
                                         </span>
                                            </div>
                                            <div className='subpara1'>
                                                <h4><span>{x.attributes.text}</span> </h4>
                                            </div>
                                            <div className='lastport1'>
                                            <a href="#">
                                            {logo ? logo.map((x) => <span>{x.attributes.t10}</span>) : 'hgfhgf'}
                                            </a>
                                            </div>
                                        </div>
                                        
                                        </div>
                                        </Link>
                                        </div>
                                        )) : 'hgfhgf'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DetailsService;
