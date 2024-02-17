import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/contact.css';
import SectionTitle from './SectionTitle';
import  { sendEmail } from '../services/sendingMails';
import Axios from 'axios';
import { countries } from 'countries-list';





const ContactSection = () => {

const countryCodes = Object.values(countries).map(country => country.code);
const countryNames = Object.values(countries).map(country => country.name);




      const [fname, setFirstName] = useState("");
       const [lname, setLastName] = useState("");
   const [email, setEmail] = useState("");
  
  const [selectedCountry, setSelectedCountry] = useState("Select Country");
  const [contact, setContact] = useState("");
  const [projectcategory, setProjectcategory] = useState("");
  const [projectdetails, setProjectdetails] = useState("");
  const [contactStatus, setContactStatus] = useState("");

 




const contactfunction = async (e) => {
  e.preventDefault();

   if (!fname.trim()) {
    alert("Please enter your first name.");
    return;
  }

  // Validate Last Name
  if (!lname.trim()) {
    alert("Please enter your last name.");
    return;
  }

  // Validate Email
  if (!email.trim()) {
    alert("Please enter your email.");
    return;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!contact.trim()) {
    alert("Please enter your contact information.");
    return;
  } else if (!/^[0-9]{11}$/.test(contact)) {
    alert("Please enter a valid 10-digit contact number.");
    return;
  }

  // Validate Country
  if (!selectedCountry.trim() || selectedCountry === "Select Country") {
    alert("Please select your country.");
    return;
  }

alert(`Dear ${fname}. We recieved your details our team will contact you soon. Thank You \n Echo Glitch Pvt.Ltd`);




let dataSend = {
fname: fname,
lname: lname,
  user_email: email,
  country: selectedCountry,
  contact: contact,
  projectcategory: projectcategory,
  projectdetails: projectdetails,

};

 sendEmail(dataSend)
      .then(() => {
        setContactStatus("Email sent successfully!"); 

        setFirstName('');
        setLastName('');
        setEmail('');
        setSelectedCountry('');
        setContact('');
        setProjectcategory('');
        
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setContactStatus("Failed to send email."); 
      });



}

  return (
    <React.Fragment>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

      <div id="contact" className="contact-area section-padding">
        <div className="container">
        
          <div className="row">
            <div className="col-lg-12">
              <div className="contact">
                <form className="form" name="enq" method="post" action="contact.php" onSubmit={validation}>
                  <div className="row">
                    <div className="form-group col-md-6">
                    <label style={{ textAlign: "left" }}> First Name </label>

                      <input type="text" name="name" className="form-control" placeholder="Type Your First Name" required="required" 
                       onChange={(e) => {setFirstName(e.target.value)}}
                       />
                    </div>
                    <div className="form-group col-md-6">
                    <label className="text-left"> Last Name </label>
                      <input type="text" name="name" className="form-control" placeholder="Type Ypur Last Name" required="required" 
                       onChange={(e) => {setLastName(e.target.value)}}
                       />
                    </div>
                    <div className="form-group col-md-6">
                    <label className="text-left"> Email </label>
                      <input type="email" name="email" className="form-control" placeholder="Email" required="required" 
                      onChange={(e) => {setEmail(e.target.value)}}
                      />
                    </div>
                   <div className="form-group col-md-6">
  <label className="text-left"> Contact # </label>
  <input
    type="number"
    name="subject"
    className="form-control"
    placeholder="Contact"
    required="required"
    onChange={(e) => {setContact(e.target.value)}}
  />
  {/*
  <label className="text-left"> Select Country Code </label>
  <select
    name="countryCode"
    className="form-control"
    required="required"
    onChange={(e) => setSelectedCountry(e.target.value)}
    value={selectedCountry}
  >
    <option className="selected disabled">Select Country Code</option>
    {countryCodes.map((code, index) => (
      <option key={index}>{code}</option>
      
    ))}
  </select>
  {countryCodes.map((code, index) => (
  console.log(code)
))}

*/}
</div>

                    <div className="form-group col-md-6">
                    <label className="text-left"> Project Category </label>
                      <select name="subject" className="form-control" placeholder="Category" required="required" 
                      onChange={(e) => {setProjectcategory(e.target.value)}}
                      >
                      <option className="selected disabled"> Select Project Category </option>
                      <option className=""> Software Development </option>
                      <option className=""> App Development </option>
                      <option className=""> Website Development </option>
                      <option className=""> Digital Marketing </option>
                      <option className=""> Graphic Designing </option>
                      <option className=""> E-Commerce Solutions </option>
                      <option className=""> Maintenance & Support </option>
                      <option className=""> Block Chain </option>
                      <option className=""> AI & Machine Learning </option>
                      </select>
                    </div>
                    <div className="form-group col-md-6">
                    <label className="text-left"> Country </label>
                     <select
  name="subject"
  className="form-control"
  required="required"
  onChange={(e) => setSelectedCountry(e.target.value)}
  value={selectedCountry}
>
  <option className="selected disabled">Select Country</option>
  {countryNames.map((name, index) => (
    <option key={index}>{name}</option>
  ))}
</select>


                    </div>
                    
                    <div className="form-group col-md-12">
                    <label className="text-left"> Project Details </label>
                      <textarea rows="6" name="message" className="form-control" placeholder="Project Details" required="required"
                      onChange={(e) => {setProjectdetails(e.target.value)}}
                      ></textarea>
                    </div>
                    <div className="col-md-12 text-center">
                      <button type="submit" value="Send message" name="submit" id="submitButton" 
                      className="btn btn-contact-bg" title="Submit Your Message!"
                      onClick={contactfunction}>Send Message</button>
                    
                    </div>
                 </div>
                </form>
              </div>
            </div>
            <div className="row contant-us-info text-center">
            <div className="col-lg-4">
            <a href="mailto:info@echoglitch.co?subject=Inquiry&body=Hello, I would like to inquire about...">
              <div className="single_address">
                <i className="fa fa-envelope"></i>
                <h4>Send your message</h4>
                <p>Info@echoglitch.co</p>
              </div>
              </a>
              </div>
              <div className="col-lg-4">
              <a href="tel:+923112669628">
              <div className="single_address">
                <i className="fa fa-phone"></i>
                <h4>Call us on</h4>
                <p>(+92) 311 266 9628</p>
              </div>
              </a>
              </div>
            <div className="col-lg-4">
            <a href="https://www.google.com/maps/place/33%C2%B039'28.3%22N+72%C2%B059'23.1%22E/@33.6578716,72.9871637,17z/data=!3m1!4b1!4m4!3m3!8m2!3d33.6578716!4d72.9897386?hl=en&entry=ttu">
              <div className="single_address">
                <i className="fa fa-map-marker"></i>
                <h4>Our Address</h4>
                <p>G-11, NUST Metro Station, Islamabad, Pakistan</p>
              </div>
              </a>
              </div>
              
              
              
            </div>
            </div>
       
        </div>
      </div>
    </React.Fragment>
  );
};

// Dummy validation function, replace with your own logic
const validation = (event) => {
  // Your validation logic here
  // For example: prevent the form from submitting if validation fails
  // event.preventDefault();
};

export default ContactSection;
