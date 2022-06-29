import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
// import user from '../../assets/images/testimonial-user.png';

function TestimonialHomeOne() {
 
    const sliderRef = useRef();
    const sliderNext = () => {
        sliderRef.current.slickNext();
    };
    const sliderPrev = () => {
        sliderRef.current.slickPrev();
    };
    const [home, Sethome] = useState([]);
    useEffect(() => {
      const request = axios.CancelToken.source();
      axios
        .get("http://localhost:1337/api/testiblogs?populate=*")
        .then((res) => {
          Sethome(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
      return () => request.cancel();
    }, []);
    function imageurl(atttribute) {
      const baseurl = "http://localhost:1337";
      const dataurl = atttribute.image.data[0].attributes.url;
      return baseurl + dataurl;
    }
    return (
        <section className="appie-testimonial-area pt-100 pb-160" id="testimonial">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="appie-testimonial-slider" style={{ position: 'relative' }}>
                            <span
                                className="prev slick-arrow"
                                style={{ display: 'block' }}
                                onClick={sliderNext}
                                role="button"
                                tabIndex="0"
                            >
                                <i className="fal fa-arrow-left" />
                            </span>
                          
                            <Slider ref={sliderRef} dots arrows={false}>
                              {home
                                 ? home.slice(0,2).map((x) => (
                                <div className="appie-testimonial-item text-center">
                              
                                    <div className="author-info">
                                    <img
                          className="loimg"
                          src={
                            x.attributes ? imageurl(x.attributes) : "hgghtyu"
                          }
                          alt=""
                        />
                                        <h5 className="title">{x.attributes.name}</h5>
                                        {/* <span>April 14, 2022</span> */}
                                    </div>
                                    <div className="text">
                                        <p>
                                           {x.attributes.para}
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                ))
                                               : "hgfhgf"}
                              
                            </Slider>
                                               
                            <span
                                onClick={sliderPrev}
                                role="button"
                                tabIndex="-1"
                                className="next slick-arrow"
                                style={{ display: 'block' }}
                            >
                                <i className="fal fa-arrow-right" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialHomeOne;
