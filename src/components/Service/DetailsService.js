/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import axios from "axios";
import thumb from "../../assets/images/service-details-thumb.jpg";

function DetailsService() {
  const [logo, Setlogo] = useState([]);
  useEffect(() => {
    const request = axios.CancelToken.source();
    axios
      .get("http://localhost:1337/api/portfolios?populate=*")
      .then((res) => {
        Setlogo(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => request.cancel();
  }, []);
  function imageurl(atttribute) {
    const baseurl = "http://localhost:1337";
    const dataurl = atttribute.image1.data[0].attributes.url;
    return baseurl + dataurl;
  }
  function imageurl1(atttribute) {
    const baseurl = "http://localhost:1337";
    const dataurl = atttribute.image2.data[0].attributes.url;
    return baseurl + dataurl;
  }
  function imageurl2(atttribute) {
    const baseurl = "http://localhost:1337";
    const dataurl = atttribute.image3.data[0].attributes.url;
    return baseurl + dataurl;
  }
  return (
    <>
      <section className="appie-service-details-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="service-details-sidebar mr-50">
                <div className="service-category-widget">
                  <ul>
                    <li>
                      <i className="fal fa-home"></i>Fast Development
                    </li>
                    <li>
                      <i className="fal fa-tag"></i>App, UX
                    </li>
                    <li>
                      <i className="fal fa-user-friends"></i>20-30 Employees
                    </li>
                    <li>
                      <i className="fal fa-bookmark"></i>Appie Template
                    </li>
                    <li>
                      <i className="fal fa-globe"></i>quomodosoft.com/appie
                    </li>
                  </ul>
                </div>
                <div className="service-download-widget">
                  <a href="#">
                    <i className="fal fa-download"></i>
                    <span>Download docs</span>
                  </a>
                </div>
                <div className="service-download-widget">
                  <a href="#">
                    <i className="fal fa-file-pdf"></i>
                    <span>Characteristics</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="service-details-content">
                <div className="thumb">
                  <img src={thumb} alt="" />
                </div>
                <div className="content">
                  <h3 className="title">
                    {logo
                      ? logo.map((x) => <span>{x.attributes.heading}</span>)
                      : "hgfhgf"}{" "}
                  </h3>
                  <div className="container">
                    <div className="mainport">
                      
                        <div className="port1">
                            <a href="/luxysource">
                          <div className="subport1">
                            <span className="span1">
                              {logo
                                ? logo.map((x) => (
                                    <img
                                      className="subimg"
                                      src={
                                        x.attributes
                                          ? imageurl(x.attributes)
                                          : "hgghtyu"
                                      }
                                      alt=""
                                    />
                                  ))
                                : "hgfhgf"}
                            </span>
                          </div>
                          <div className="subpara1">
                            <h4>
                              {logo
                                ? logo.map((x) => (
                                    <span>{x.attributes.sub1}</span>
                                  ))
                                : "hgfhgf"}{" "}
                            </h4>
                          </div>
                          <div className="lastport1">
                            {logo
                              ? logo.map((x) => (
                                  <span>{x.attributes.sub4}</span>
                                ))
                              : "hgfhgf"}
                          </div>
                          </a>
                        </div>
                      
                     
                        <div className="port1">
                             <a href="/certifiedcell">
                          <div className="subport1">
                            <span className="span1">
                              {logo
                                ? logo.map((x) => (
                                    <img
                                      className="loimg"
                                      src={
                                        x.attributes
                                          ? imageurl1(x.attributes)
                                          : "hgghtyu"
                                      }
                                      alt=""
                                    />
                                  ))
                                : "hgfhgf"}
                            </span>
                          </div>
                          <div className="subpara1">
                            <h4>
                              {logo
                                ? logo.map((x) => (
                                    <span>{x.attributes.sub2}</span>
                                  ))
                                : "hgfhgf"}{" "}
                            </h4>
                          </div>
                          <div className="lastport1">
                            {logo
                              ? logo.map((x) => (
                                  <span>{x.attributes.sub4}</span>
                                ))
                              : "hgfhgf"}
                          </div>
                           </a>
                        </div>
                        <div className="port1">
                        <a href="/zap">
                          <div className="subport1">
                            <span className="span1">
                              {logo
                                ? logo.map((x) => (
                                    <img
                                      className="loimg"
                                      src={
                                        x.attributes
                                          ? imageurl2(x.attributes)
                                          : "hgghtyu"
                                      }
                                      alt=""
                                    />
                                  ))
                                : "hgfhgf"}
                            </span>
                          </div>
                          <div className="subpara1">
                            <h4>
                              {logo
                                ? logo.map((x) => (
                                    <span>{x.attributes.sub3}</span>
                                  ))
                                : "hgfhgf"}{" "}
                            </h4>
                          </div>
                          <div className="lastport1">
                            {logo
                              ? logo.map((x) => (
                                  <span>{x.attributes.sub4}</span>
                                ))
                              : "hgfhgf"}
                          </div>
                           </a>
                        </div>
                     
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
