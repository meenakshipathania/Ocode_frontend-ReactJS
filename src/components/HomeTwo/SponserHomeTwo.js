import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Sponser1 from '../../assets/images/sponser-1.png';
// import Sponser10 from '../../assets/images/sponser-10.png';
// import Sponser2 from '../../assets/images/sponser-2.png';
// import Sponser3 from '../../assets/images/sponser-3.png';
// import Sponser4 from '../../assets/images/sponser-4.png';
// import Sponser5 from '../../assets/images/sponser-5.png';
// import Sponser6 from '../../assets/images/sponser-6.png';
// import Sponser7 from '../../assets/images/sponser-7.png';
// import Sponser8 from '../../assets/images/sponser-8.png';
// import Sponser9 from '../../assets/images/sponser-9.png';
import sponserShape from '../../assets/images/sponser-shape.png';

function SponserHomeTwo({ className }) {
    const [spo, Setspo] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://localhost:1337/api/teams?populate=*')
            .then((res) => {
                Setspo(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);
    const [home1, Sethome1] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://localhost:1337/api/abouts?populate=*')
            .then((res) => {
                Sethome1(res.data.data);
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
            <section className={`appie-sponser-area pb-100 ${className}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">
                                {home1 ? home1.map((x) => <span>{x.attributes.heading2}</span>) : 'hgfhgf'}<br/>
                                {home1 ? home1.map((x) => <span>{x.attributes.heading3}</span>) : 'hgfhgf'}
                                </h3>
                                {/* <p>Join over 40,000 businesses worldwide.</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    {spo ? spo.slice(8,56).map((x) => (
                        <div className="col-lg-3">
                            <div className="appie-sponser-box d-flex justify-content-center">
                                <div className="sponser-item">
                                <img src={
                                            x.attributes
                                                ? imageurl(x.attributes)
                                                : 'hgghtyu'
                                        } alt="" />
                                </div>
                                {/* <div className="sponser-item">
                                    <img src={Sponser2} alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src={Sponser3} alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src={Sponser4} alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src={Sponser5} alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src={Sponser6} alt="" />
                                </div>
                            </div>
                            <div className="appie-sponser-box item-2 d-flex justify-content-center">
                                <div className="sponser-item">
                                    <img src={Sponser7} alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src={Sponser8} alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src={Sponser9} alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src={Sponser10} alt="" />
                                </div>*/}
                            </div> 
                        </div>
                         )) : 'hgfhgf'}
                    </div>   
                </div>
                <div className="sponser-shape">
                    <img src={sponserShape} alt="" />
                </div>
            </section>
        </>
    );
}

export default SponserHomeTwo;
