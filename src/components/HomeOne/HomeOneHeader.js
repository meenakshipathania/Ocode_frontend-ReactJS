import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import logo from '../../assets/images/logo.png';
import StickyMenu from '../../lib/StickyMenu';
import Navigation from '../Navigation';

function HomeOneHeader({ action }) {
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
    }, []);
    return (
        <header className="appie-header-area appie-sticky">
            <div className="container">
                <div className="header-nav-box">
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
                        <div className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
                            <div className="appie-header-main-menu">
                                <Navigation />
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-7 col-sm-6 col-6 order-2 order-sm-3">
                            <div className="appie-btn-box text-right">
                                <Link to="#"className="login-btn">
                                    <i className="fal fa-user" /> {logo ? logo.map((x) => <span>{x.attributes.login}</span>) : 'hgfhgf'}
                                </Link>
                                <Link to="/contact" className="main-btn ml-30">
                                {logo ? logo.map((x) => <span>{x.attributes.getstart}</span>) : 'hgfhgf'}
                                </Link>
                                <div
                                    onClick={(e) => action(e)}
                                    className="toggle-btn ml-30 canvas_open d-lg-none d-block"
                                >
                                    <i className="fa fa-bars" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HomeOneHeader;
