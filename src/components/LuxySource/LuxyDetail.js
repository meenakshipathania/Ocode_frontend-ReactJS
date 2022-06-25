/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import axios from "axios";

function DetailsService() {
  const [text2, Settext2] = useState([]);
  useEffect(() => {
    const request = axios.CancelToken.source();
    axios
      .get("http://localhost:1337/api/portfolios?populate=*")
      .then((res) => {
        Settext2(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => request.cancel();
  }, []);
  function imageurl(atttribute) {
    const baseurl = "http://localhost:1337";
    const dataurl = atttribute.image11.data[0].attributes.url;
    return baseurl + dataurl;
  }
  return (
    <>
      <section className="appie-service-details-area pt-100 pb-100">
        <div className="container main">
          <h4 className="lux">
            {text2
              ? text2.map((x) => <span>{x.attributes.sub1}</span>)
              : "hfhjkl"}
          </h4>
          <p className="para">
            {text2
              ? text2.map((x) => <span>{x.attributes.para1}</span>)
              : "hfhjkl"}
          </p>
        </div>
        <div className="container main">
          <div className="row pt-30">
            <div class="col-md-8">
              {text2
                ? text2.map((x) => (
                    <a href="/">
                      <img
                        className="loimg"
                        src={x.attributes ? imageurl(x.attributes) : "hgghtyu"}
                        alt=""
                      />
                    </a>
                  ))
                : "hgfhgf"}
            </div>
            <div className="col-md-4">
              <div className="uide">
                <h5>
                  {text2
                    ? text2.map((x) => <span>{x.attributes.h1}</span>)
                    : "hfhjkl"}
                </h5>
                <p>
                  {text2
                    ? text2.map((x) => <span>{x.attributes.headpara}</span>)
                    : "hfhjkl"}
                </p>
                <h5>
                  {text2
                    ? text2.map((x) => <span>{x.attributes.h2}</span>)
                    : "hfhjkl"}
                </h5>
                <p>
                  {text2
                    ? text2.map((x) => <span>{x.attributes.l1}</span>)
                    : "hfhjkl"}
                </p>
                <p>
                  {text2
                    ? text2.map((x) => <span>{x.attributes.l2}</span>)
                    : "hfhjkl"}
                </p>
                <p>
                  {text2
                    ? text2.map((x) => <span>{x.attributes.l3}</span>)
                    : "hfhjkl"}
                </p>
                <p>
                  {text2
                    ? text2.map((x) => <span>{x.attributes.l4}</span>)
                    : "hfhjkl"}
                </p>
                <p>
                  {text2
                    ? text2.map((x) => <span>{x.attributes.l5}</span>)
                    : "hfhjkl"}
                </p>
                <h5>
                  {text2
                    ? text2.map((x) => <span>{x.attributes.h3}</span>)
                    : "hfhjkl"}
                </h5>
                <p>
                  {text2
                    ? text2.map((x) => <span>{x.attributes.l11}</span>)
                    : "hfhjkl"}
                </p>
                <p>
                  {text2
                    ? text2.map((x) => <span>{x.attributes.l22}</span>)
                    : "hfhjkl"}
                </p>
                <p>
                  {text2
                    ? text2.map((x) => <span>{x.attributes.l33}</span>)
                    : "hfhjkl"}
                </p>
                <p>
                  {text2
                    ? text2.map((x) => <span>{x.attributes.l44}</span>)
                    : "hfhjkl"}
                </p>
                <p>
                  {text2
                    ? text2.map((x) => <span>{x.attributes.l55}</span>)
                    : "hfhjkl"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DetailsService;
