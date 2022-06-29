import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Navigation() {
    const [text, Settext] = useState([]);
   useEffect(() => {
      const request = axios.CancelToken.source();
         axios.get('http://localhost:1337/api/logos')
            .then((res) => {
               Settext(res.data.data);
            })
            .catch((error) => {
               console.log(error);
            });
      return () => request.cancel();
   }, []);
    return (
        <>
            <ul>
                <li>
                    <Link to="/">{text ? text.map((x) => <span>{x.attributes.nav1}</span>) : 'hgfhgf'}</Link>
                        {/* Home <i className="fal fa-angle-down" /> */}
                    {/* <ul className="sub-menu">
                        <li>
                            <Link to="/">Home 1</Link>
                        </li>
                        <li>
                            <Link to="/home-two">Home 2</Link>
                        </li>
                        <li>
                            <Link to="/home-three">Home 3</Link>
                        </li>
                        <li>
                            <Link to="/home-four">Home 4</Link>
                        </li>
                        <li>
                            <Link to="/home-five">Home 5</Link>
                        </li>
                        <li>
                            <Link to="/home-six">Home 6</Link>
                        </li>
                        <li>
                            <Link to="/home-seven">Home 7</Link>
                        </li>
                        <li>
                            <Link to="/home-eight">Home 8</Link>
                        </li>
                    </ul> */}
                </li>
                <li>
                    <Link to="/portfolio">{text ? text.map((x) => <span>{x.attributes.nav2}</span>) : 'hgfhgf'}</Link>
                </li>
                <li>
                    <Link to="/career">{text ? text.map((x) => <span>{x.attributes.nav3}</span>) : 'hgfhgf'}</Link>
                        {/* Career <i className="fal fa-angle-down" /> */}
                    {/* <ul className="sub-menu">
                        <li>
                            <Link to="/about-us">About</Link>
                        </li>
                        <li>
                            <Link to="/error">Error</Link>
                        </li>
                    </ul> */}
                </li>
                <li>
                <Link to="/about-us">{text ? text.map((x) => <span>{x.attributes.nav4}</span>) : 'hgfhgf'}</Link>
                        {/* About Us <i className="fal fa-angle-down" /> */}
                    {/* <ul className="sub-menu">
                        <li>
                            <Link to="/news">News Page</Link>
                        </li>
                        <li>
                            <Link to="/news/single-news">Single News</Link>
                        </li>
                    </ul> */}
                </li>
                <li>
                    <Link to="/contact">{text ? text.map((x) => <span>{x.attributes.nav5}</span>) : 'hgfhgf'}</Link>
                </li>
            </ul>
        </>
    );
}

export default Navigation;
