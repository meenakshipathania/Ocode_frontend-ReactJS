import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import logo from '../../assets/images/logo-7.png';
import StickyMenu from '../../lib/StickyMenu';
import Navigation from '../Navigation';

function HeaderNews({ action }) {
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
    function imageurl(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.logo.data[0].attributes.url;
        return baseurl + dataurl;
    }
    useEffect(() => {
        StickyMenu();
    });
    return (
        <>
            <header className="appie-header-area appie-header-page-area appie-sticky">
                <div className="container">
                    <div className="header-nav-box header-nav-box-3 header-nav-box-inner-page">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
                                <div className="appie-logo-box">
                                    {logo
                                        ? logo.map((x) => (
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
                            <div className="col-lg-7 col-md-2 col-sm-2 order-3 order-sm-2">
                                <div className="appie-header-main-menu">
                                    <Navigation />
                                </div>
                            </div>
                            <div className="col-lg-3  col-md-5 col-sm-5 col-5 order-2 order-sm-3">
                                <div className="appie-btn-box text-right">
                                    {/* <a className="login-btn" href="#">
                                        <i className="fal fa-user"></i>
                                        {logo
                                            ? logo.map((x) => <a>{x.attributes.login}</a>)
                                            : 'hgfhgf'}
                                    </a> */}
                                    <a className="main-btn ml-30" href="/contact">
                                        {logo
                                            ? logo.map((x) => <span>{x.attributes.getstart}</span>)
                                            : 'hgfhgf'}
                                    </a>
                                    <div
                                        onClick={(e) => action(e)}
                                        className="toggle-btn ml-30 canvas_open d-lg-none d-block"
                                    >
                                        <i className="fa fa-bars"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default HeaderNews;
