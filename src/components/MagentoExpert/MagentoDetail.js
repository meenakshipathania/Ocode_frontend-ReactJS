/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

// import thumb from '../../assets/images/service-details-thumb.jpg';

function DetailsService() {
    const [text2, Settext2] = useState([]);
    useEffect(() => {
      const request = axios.CancelToken.source();
      axios.get('http://localhost:1337/api/careers/8?populate[post][populate]=*')
        .then((res) => {
          Settext2(res.data.data);
          console.log(res.data.data)

        })
        .catch((error) => {
          console.log(error);
        });
      return () => request.cancel();
     
    }, []);
    return (
        <>
            <section className="appie-service-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        {text2['attributes'] ? text2['attributes']['post'].map((x) => (
                            <h3 className="headdetail">Position : {x.position}</h3>
                  )) : 'hgfhgf'}
                     {text2['attributes'] ? text2['attributes']['post'].map((x) => (
                            <h6 className="detail">{x.para}</h6>
                  )) : 'hgfhgf'}
                  <h3 className="headdetail">Abilities: </h3>
                  {text2['attributes'] ? text2['attributes']['post'].map((x) => (
                            <h6 className="detail">{x.abilities}</h6>
                  )) : 'hgfhgf'}
                  
                  <h3 className="headdetail">Role: </h3>   {text2['attributes'] ? text2['attributes']['post'].map((x) => (
                            <h6 className="detail">{x.role}</h6>
                  )) : 'hgfhgf'}
                  
                  <h3 className="headdetail">Industry Type: </h3>  {text2['attributes'] ? text2['attributes']['post'].map((x) => (
                            <h6 className="detail">{x.industries}</h6>
                  )) : 'hgfhgf'}
                  <h3 className="headdetail">Functional Area: </h3>  {text2['attributes'] ? text2['attributes']['post'].map((x) => (
                            <h6 className="detail">{x.functional}</h6>
                  )) : 'hgfhgf'}
                  <h3 className="headdetail">Employment Type:  </h3>  {text2['attributes'] ? text2['attributes']['post'].map((x) => (
                            <h6 className="detail">{x.employement}</h6>
                  )) : 'hgfhgf'}
                  <h3 className="headdetail">Role Category: </h3>  {text2['attributes'] ? text2['attributes']['post'].map((x) => (
                            <h6 className="detail">{x.category}</h6>
                  )) : 'hgfhgf'}
                  <br/>
                  <h3 className="headdetail">Education: </h3>
                  {text2['attributes'] ? text2['attributes']['post'].map((x) => (
                            <h6 className="detail">{x.education}</h6>
                  )) : 'hgfhgf'}
                    <br/>
                  <a href="#" target="self"><button className='main-btn'>Apply Now</button></a>
                        
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DetailsService;
