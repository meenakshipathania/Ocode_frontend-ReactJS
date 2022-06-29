/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import singlePost from '../../assets/images/single-post/1.jpg';
// import author from '../../assets/images/single-post/author.png';
// import cmnt1 from '../../assets/images/single-post/c1.png';
// import cmnt2 from '../../assets/images/single-post/c2.png';
// import cmnt3 from '../../assets/images/single-post/c3.png';

function Blog() {
    const [text2, Settext2] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://localhost:1337/api/testiblogs/5?populate[nested][populate]=*')
            .then((res) => {
                Settext2(res.data.data);
            })
            .catch((errordata) => {
                console.log(errordata);
            });
        return () => request.cancel();
    }, []);
    function imageurl(data) {
        const baseurl = 'http://localhost:1337';
        const dataurl = data.data[0].attributes.url;
        return baseurl + dataurl;
    }
    return (
        <>
            <div className="single-post-area">
                {text2['attributes']
                    ? text2['attributes']['nested'].map((x) => <span>{x.para1}</span>)
                    : 'Home'}
                <div className="post-thumb">
                    {text2['attributes']
                        ? text2['attributes']['nested'].map((x) => (
                              <img
                                  src={x.image ? imageurl(x.image) : 'hgghtyu'}
                                  className="img"
                                  alt="img not found"
                              />
                          ))
                        : 'hgfhgf'}
                </div>
                <h4 className="article-title">
                    {text2['attributes']
                        ? text2['attributes']['nested'].map((x) => <span>{x.head}</span>)
                        : 'Home'}
                </h4>
                {text2['attributes']
                    ? text2['attributes']['nested'].map((x) => <span>{x.para2}</span>)
                    : 'Home'}
                {text2['attributes']
                    ? text2['attributes']['nested'].map((x) => <span>{x.para3}</span>)
                    : 'Home'}
                <blockquote>
                    {text2['attributes']
                        ? text2['attributes']['nested'].map((x) => <span>{x.para4}</span>)
                        : 'Home'}
                    <cite>Indigo Violet</cite>
                </blockquote>
                {text2['attributes']
                    ? text2['attributes']['nested'].map((x) => <span>{x.para5}</span>)
                    : 'Home'}
                {/* <div className="post-tags">
                    <h5>Tags:</h5>
                    <a href="#">Bisy LMS</a>
                    <a href="#">Design</a>
                    <a href="#">General</a>
                </div>
                <div className="post-share">
                    <h5>Share:</h5>
                    <a className="fac" href="#">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="twi" href="#">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="goo" href="#">
                        <i className="fab fa-google"></i>
                    </a>
                </div>
                <div className="post-admin">
                    <img src={author} alt="" />
                    <a href="#">Justin Case</a>
                    <span>About Author</span>
                    <p>
                        {text2['attributes']
                            ? text2['attributes']['nested'].map((x) => <span>{x.para6}</span>)
                            : 'Home'}
                    </p>
                </div> */}
            </div>
            {/* <div className="comment-area">
                <h3>Comment (3)</h3>
                <ol className="comment-list">
                    <li>
                        <div className="single-comment">
                            <img src={cmnt1} alt="" />
                            <h5>
                                <a href="#">Jason Response</a>
                            </h5>
                            <span>April 03, 2019</span>
                            <div className="comment">
                                <p>
                                    He legged it bevvy mush owt to do with me such fibber fa about
                                    cup of tea sloshed morish butty bubble. Butty gormless lavatory
                                    twit bits and bobs pardon you daft ummm I'm telling.
                                </p>
                            </div>
                            <a className="comment-reply-link" href="#">
                                <i className="fal fa-reply"></i>Reply
                            </a>
                            <div className="c-border"></div>
                        </div>
                        <ul className="children">
                            <li>
                                <div className="single-comment">
                                    <img src={cmnt2} alt="" />
                                    <h5>
                                        <a href="#">Sue Shei</a>
                                    </h5>
                                    <span>April 14, 2019</span>
                                    <div className="comment">
                                        <p>
                                            Super chancer cheeky bloke haggle give us a bell well
                                            mufty chinwag say bite. lavatory twit bits and bobs
                                            pardon you daft ummm I'm telling. Blatant matie boy say
                                            bugger all mate butty gormless
                                        </p>
                                    </div>
                                    <a className="comment-reply-link" href="#">
                                        <i className="fal fa-reply"></i>Reply
                                    </a>
                                    <div className="c-border"></div>
                                </div>
                            </li>
                            <li>
                                <div className="single-comment">
                                    <img src={cmnt3} alt="" />
                                    <h5>
                                        <a href="#">Douglas Lyphe</a>
                                    </h5>
                                    <span>July 27, 2020</span>
                                    <div className="comment">
                                        <p>
                                            Oxford baking cakes dropped clanger fanny around
                                            vagabond amongst cor blimey guvnor. Blatant matie boy
                                            say bugger all mate butty gormless lavatory twit bits
                                            and bobs pardon you daft ummm I'm telling.
                                        </p>
                                    </div>
                                    <a className="comment-reply-link" href="#">
                                        <i className="fal fa-reply"></i>Reply
                                    </a>
                                    <div className="c-border"></div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ol>
            </div> */}
            <div className="comment-form-area">
                <h3>Post a Comment</h3>
                <p>Your email address will not be published. Required fields are marked</p>
                <div className="comment-form">
                    <form className="row" action="#" method="post">
                        <div className="col-md-6">
                            <input type="text" name="name" placeholder="Name" />
                        </div>
                        <div className="col-md-6">
                            <input type="email" name="email" placeholder="Email" />
                        </div>
                        <div className="col-md-12">
                            <input type="url" name="url" placeholder="Website" />
                        </div>
                        {/* <div className="col-md-12">
                            <div className="save-comment">
                                <input id="history-name" type="checkbox" />
                                <label htmlFor="history-name">
                                    Save my name, email, and website in this browser for the next
                                    time I comment.
                                </label>
                            </div>
                        </div> */}
                        <div className="col-md-12">
                            <textarea placeholder="Coment"></textarea>
                        </div>
                        <div className="col-md-12">
                            <button type="submit">Post Comment</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Blog;
