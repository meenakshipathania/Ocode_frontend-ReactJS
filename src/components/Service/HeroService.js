import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import thumb from '../../assets/images/fun-fact-thumb.png';

function HeroService() {
    const [logo, Setlogo] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://localhost:1337/api/portfolios?populate=*')
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
        const dataurl = atttribute.image.data[0].attributes.url;
        return baseurl + dataurl;
    }
    return (
        <>
            <div className="appie-page-title-area appie-page-service-title-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-page-title-item">
                                <span>{logo ? logo.map((x) => <span>{x.attributes.text1}</span>) : 'hgfhgf'}</span>
                                <h3 className="title">
                                    {logo ? logo.map((x) => <span>{x.attributes.text2}</span>) : 'hgfhgf'} <br />
                                    {logo ? logo.map((x) => <span>{x.attributes.text3}</span>) : 'hgfhgf'} 
                                </h3>
                                <div className="thumb">
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroService;
