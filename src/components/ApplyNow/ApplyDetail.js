/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
// import { Link } from 'react-router-dom';

// import thumb from '../../assets/images/service-details-thumb.jpg';

function DetailsService() {
  const [logo, Setlogo] = useState([]);
  useEffect(() => {
    const request = axios.CancelToken.source();
    axios
      .get("http://localhost:1337/api/logos?populate=*")
      .then((res) => {
        Setlogo(res.data.data);
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
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [qualification, setQualification] = useState("");
  const [post, setPost] = useState("");
  const [experience, setExperience] = useState("");
  const [file, setFile] = useState("");

  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      firstname,
      lastname,
      email,
      phone,
      qualification,
      post,
      experience,
      file,
    };
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setQualification("");
    setPost("");
    setExperience("");
    setFile("");

    // important//////////////
    // emailjs.sendForm('service_6o3palp', 'template_58uclcx', form.current, 'pYfziu1Gd30wQSISj')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    // e.target.reset()

    fetch("http://localhost:1337/api/applies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: contact }),
    }).then(() => {
      console.log("new contact added");
    });
  };
  return (
    <>
      <section className="appie-service-details-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h3 className="ml-50">Submit Your Resume</h3>
              <form
                ref={form}
                onSubmit={handleSubmit}
                action="#"
                method="post"
                className="contact-form row"
              >
                <div className="col-md-12">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="tel"
                    pattern="[0-9]{10}"
                    name="phone"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    name="qualification"
                    placeholder="Qualification"
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                  />
                </div>
                <div className="col-md-12">
                  <label>Apply for the Post*</label>
                  <br />
                  <select
                    name="post"
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                  >
                    <option>- - -</option>
                    <option>Web Designer</option>
                    <option>Graphic Designer</option>
                    <option>PHO Developer</option>
                    <option>Full Stack Developer</option>
                    <option>IOS Developer</option>
                    <option>Marketing Executive</option>
                    <option>Bidder</option>
                    <option>Magento Expert</option>
                    <option>Recruiter</option>
                  </select>
                </div>
                <div className="col-md-12">
                  <label>Experience*</label>
                  <br />
                  <select
                    name="experience"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                  >
                    <option>- - -</option>
                    <option>Fresher</option>
                    <option>1-2 Year's</option>
                    <option>2-3 Year's</option>
                    <option>3-4 Year's</option>
                    <option>4-5 Year's</option>
                    <option>5 Year's</option>
                    <option>5+</option>
                  </select>
                </div>
                <div className="col-md-12">
                  <label>Upload Your Resume</label>
                  <br />
                  <input
                    type="file"
                    name="file"
                    value={file}
                    onChange={(e) => setFile(e.target.value)}
                  ></input>
                </div>
                <br />
                <div className="col-md-12">
                  <button className="main-btn mt-30" type="submit">
                    Apply Now
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              {logo
                ? logo.map((x) => (
                    <a href="/">
                      <img
                        className="mt-70"
                        src={x.attributes ? imageurl(x.attributes) : "hgghtyu"}
                        alt=""
                      />
                    </a>
                  ))
                : "hgfhgf"}
              <h5 className="white">
                We are an equal opportunities employer and we endeavour to
                practise our business with integrity, respecting the dignity,
                different cultures and rights of individuals everywhere we
                operate.
              </h5>
              <p>&nbsp;</p>
              <h4>Want To Submit Your Resume Directly? Send An E-Mail To</h4>
              <h5>
                <a href="mailto:hi@ocodewire.com">
                  <strong>hi@ocodewire.com</strong>
                </a>
              </h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DetailsService;
