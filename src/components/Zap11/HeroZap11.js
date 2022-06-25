import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HeroAbout() {
    const [logo, Setlogo] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://localhost:1337/api/portfolios')
            .then((res) => {
                Setlogo(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);
    return (
        <>
            <div className="appie-about-top-title-zap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-about-top-title">
                                <h2 className="title tite1">{logo ? logo.map((x) => <span>{x.attributes.sub3}</span>) : "hsdfgh" }</h2>
                                {/* <p>We offer you a panoply of cutting-edge options.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroAbout;
