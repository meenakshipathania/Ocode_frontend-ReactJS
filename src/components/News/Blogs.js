/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// import blogImg1 from '../../assets/images/blog/1.jpg';
// import blogImg2 from '../../assets/images/blog/2.jpg';
// import blogImg3 from '../../assets/images/blog/3.jpg';
// import blogImg4 from '../../assets/images/blog/4.jpg';
// import blogImg5 from '../../assets/images/blog/5.jpg';
// import blogImg6 from '../../assets/images/blog/6.jpg';
// import blogImg7 from '../../assets/images/blog/7.jpg';
// import blogImg8 from '../../assets/images/blog/8.jpg';

function Blogs() {
    const [data, Setdata] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://localhost:1337/api/testiblogs?populate=*')
            .then((res) => {
                Setdata(res.data.data);
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
            <div className="row">
                {data
                    ? data.slice(2, 6).map((x) => (
                          <div className="col-lg-6">
                              <div className="post-item-1">
                                  <img
                                      src={x.attributes ? imageurl(x.attributes) : 'hgghtyu'}
                                      alt=""
                                  />
                                  <div className="b-post-details">
                                      <div className="bp-meta">
                                          <a href="#">
                                              <i className="fal fa-clock"></i>April 22, 2020
                                          </a>
                                          <a href="#">
                                              <i className="fal fa-comments"></i>6 Comments
                                          </a>
                                      </div>
                                      <h3>
                                          <a href={'/' + x.attributes.slug}>{x.attributes.para}</a>
                                      </h3>
                                      <a className="read-more" href="single-post.html">
                                          Read More<i className="fal fa-arrow-right"></i>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      ))
                    : 'hgfhgf'}
            </div>
        </>
    );
}

export default Blogs;
