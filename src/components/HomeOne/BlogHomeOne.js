/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import axios from "axios";
// import blogOne from '../../assets/images/blog-1.jpg';
// import blogTwo from '../../assets/images/blog-2.jpg';
// import blogThree from '../../assets/images/blog-3.jpg';

function BlogHomeOne() {
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
        <>
            <section className="appie-blog-area pt-90 pb-95">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Latest blog posts</h3>
                                {/* <p>Different layouts and styles for team sections.</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {home
                                 ? home.slice(2,5).map((x) => (
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-blog-item mt-30 wow animated fadeInUp"
                                data-wow-duration="3000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="thumb">
                                <img
                          className="loimg"
                          src={
                            x.attributes ? imageurl(x.attributes) : "hgghtyu"
                          }
                          alt=""
                        />
                                </div>
                                <div className="content">
                                    <div className="blog-meta">
                                        <ul>
                                            <li>March 10, 2022</li>
                                            <li>
                                                <a href="#">Saas & App</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="title">
                                        <a href={'/' + x.attributes.slug}>
                                            {x.attributes.para}
                                        </a>
                                    </h3>
                                    <a href="#">
                                       {x.attributes.name} <i className="fal fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        ))
                        : "hgfhgf"} 
                    </div>
                   
                </div>
            </section>
        </>
    );
}

export default BlogHomeOne;
