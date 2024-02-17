import React, { useState } from 'react';
import '../assets/css/jobs.css';
import '../assets/css/global.css';
import SectionTitle from './SectionTitle';
import  { sendResume } from '../services/sendingMails';
import Fade from 'react-reveal/Fade';

const Jobs = ({ sectiontitle }) => {
  
  const [resume, setResume] = useState(null);
  const [name, setName] = useState("");
  const [resumeStatus, setResumeStatus] = useState("");

 const handleFileChange = (e) => {
  const selectedFile = e.target.files[0];
  console.log('Selected File:', selectedFile);
  setResume(selectedFile);
}


  const sendresumefunction = async (e) => {
    e.preventDefault();

    if (!resume) {
      alert("Please upload your resume.");
      return;
    }


    let formData = new FormData();
    formData.append('resume', resume);

    // Assuming sendResume is a function that handles the email sending process.
    sendResume(formData)
      .then(() => {
        setResumeStatus("Email sent successfully!");
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setResumeStatus("Failed to send email.");
      });
  }

  const jobs = [
    {
      jobtitle: 'Web Developer',
      location: 'Managing Director',
      requirements: 'Experience with JavaScript, HTML, and CSS',
    },
    
  ];

  return (
    <section id="" className="jobs-container">
      <div className="row text-center">
        <Fade up>
          <SectionTitle title={sectiontitle} sectiondescription="" />
        </Fade>

       <h2 className="job-notify"> Currently, there are no open positions available. Please submit your resume, and we'll notify you as soon as a suitable job opportunity arises. </h2>
           


        <div className="col-lg-12">
          <div className="contact">
            <form className="form" name="enq" method="post" action="contact.php" onSubmit={sendresumefunction}>
              <div className="row mt-5">
                <div className="form-group col-md-4 ">
                  
                  <input type="text" id="" name="name" placeholder="Type your name" className="form-control" required onChange={setName} />
                  
                </div>
                <div className="form-group col-md-3 ">
                  <label htmlFor="fileInput" className="custom-file-label">Choose a file...</label>
                  <input type="file" id="fileInput" name="name" className="custom-file-input" required onChange={handleFileChange} />
               
                </div>
                <div className="form-group col-md-3 button-box">
                  
                  <button type="submit" className="btn btn-contact-bg" title="Submit Your Resume">Send Resume</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* ... other content ... */}

      </div>
    </section>
  );
};

export default Jobs;


