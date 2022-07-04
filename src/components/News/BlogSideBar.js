/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BlogSideBar() {
    const [data, Setdata] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://localhost:1337/api/blogs?populate=*')
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
        <div className="blog-sidebar">
            <aside className="widget widget-search">
                <form className="search-form" action="#" method="post">
                    <input type="search" name="s" placeholder="Search..." />
                    <button type="submit">
                        <i className="fal fa-search"></i>
                    </button>
                </form>
            </aside>
            <aside className="widget widget-categories">
                <h3 className="widget-title">Categories</h3>
                <ul>
                    {data
                        ? data.slice(4,10).map((x) => (
                              <li>
                                  <a href="#">{x.attributes.name}</a>
                              </li>
                          ))
                        : 'hgfhgf'}
                </ul>
            </aside>
            <aside className="widget widget-trend-post">
                <h3 className="widget-title">Popular Posts</h3>
                {data
                    ? data.slice(0,4).map((x) => (
                          <div className="popular-post">
                              <a href="single-post.html">
                                  <img
                                      src={x.attributes ? imageurl(x.attributes) : 'hgghtyu'}
                                      alt=""
                                  />
                              </a>
                              <h5>
                                  <a href="single-post.html">{x.attributes.name}</a>
                              </h5>
                          </div>
                      ))
                    : 'hgfhgf'}
               </aside>
        </div>
    );
}

export default BlogSideBar;
