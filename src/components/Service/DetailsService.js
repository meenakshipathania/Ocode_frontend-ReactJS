/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import thumb from '../../assets/images/service-details-thumb.jpg';

function DetailsService() {
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
        const dataurl = atttribute.image1.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl1(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image2.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl2(atttribute) {
        const baseurl = 'http://localhost:1337';
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
                                    <h3 className="title">{logo ? logo.map((x) => <span>{x.attributes.heading}</span>) : 'hgfhgf'} </h3>
                                    <div className='container'>
                                        <div className='mainport'>
                                        <div className='port1'>
                                            <div className='subport1'>
                                                <span className='span1'>
                                            {logo
                                        ? logo.map((x) => (
                                              <a href="/">
                                                  <img
                                                      className="subimg"
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
                                        </span>
                                            </div>
                                            <div className='subpara1'>
                                                <h4>{logo ? logo.map((x) => <span>{x.attributes.sub1}</span>) : 'hgfhgf'} </h4>
                                            </div>
                                            <div className='lastport1'>
                                            {logo ? logo.map((x) => <span>{x.attributes.sub4}</span>) : 'hgfhgf'}
                                            </div>
                                        </div>
                                        <div className='port2'>
                                        <div className='subport1'>
                                        <span className='span1'>
                                            {logo
                                        ? logo.map((x) => (
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
                                         </span>
                                            </div>
                                            <div className='subpara1'>
                                                <h4>{logo ? logo.map((x) => <span>{x.attributes.sub2}</span>) : 'hgfhgf'} </h4>
                                            </div>
                                            <div className='lastport1'>
                                            {logo ? logo.map((x) => <span>{x.attributes.sub4}</span>) : 'hgfhgf'}
                                            </div>
                                        </div>
                                        <div className='port3'>
                                        <div className='subport1'>
                                        <span className='span1'>
                                            {logo
                                        ? logo.map((x) => (
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
                                         </span>
                                            </div>
                                            <div className='subpara1'>
                                                <h4>{logo ? logo.map((x) => <span>{x.attributes.sub3}</span>) : 'hgfhgf'} </h4>
                                            </div>
                                            <div className='lastport1'>
                                            {logo ? logo.map((x) => <span>{x.attributes.sub4}</span>) : 'hgfhgf'}
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    {/* <p>
                                        Tomfoolery wind up blag me old mucker chap super ruddy
                                        chancer bobby, vagabond it's your round cuppa cheesed off
                                        blower nice one at public school, Why cockup knackered pear
                                        shaped amongst spiffing good time he nicked it.
                                    </p>
                                    <span>
                                        He lost his bottle mufty spend a penny cheeky at public
                                        school daft get stuffed mate don't get shirty.
                                    </span>
                                    <p>
                                        My good sir cup of char no biggie knees up happy days
                                        absolutely bladdered don't get shirty with me chimney pot
                                        James Bond he lost his bottle me old mucker, bobby nice one
                                        cack codswallop what a load of rubbish Jeffrey barmy blower
                                        tomfoolery, crikey only a quid at public school mufty tosser
                                        up the duff say Richard I don't want no agro. Owt to do with
                                        me barney quaint jolly good off his nut vagabond pardon you
                                        gutted mate the little rotter excuse my French, the bee's
                                        knees don't get shirty with me he nicked it give us a bell
                                        zonked lavatory Charles gosh, Eaton the BBC is victoria
                                        sponge a William bog what a load of rubbish. Smashing only a
                                        quid cockup he lost his bottle bugger Jeffrey mufty,
                                        starkers blatant zonked easy peasy brolly car boot, blimey
                                        at public school cheeky bugger you mug david. Tomfoolery a
                                        load of old tosh Queen's English lemon squeezy old
                                        hunky-dory mush chap give us a bell bloke, chancer knackered
                                        cheesed off buggered tinkety tonk old fruit car boot only a
                                        quid spiffing good time chinwag, he lost his bottle pukka
                                        gutted mate naff horse play cup of tea baking cakes a
                                        blinding shot. bobby the wireless matie boy show.
                                    </p> */}
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
