import emailjs from 'emailjs-com';

const sendEmail = (dataSend) => {
  const templateId = 'template_ljl80fl'; 
  const userId = 'qwbcz2cCEXQIfFmgm'; 
  const { fname, lname, user_email, country, contact, projectcategory, projectdetails, resume } = dataSend;

  const emailData = {
    from_name: `${fname} ${lname}`,
    from_email: user_email,
    to_name: 'Echo Glitch Administration',
    user_country: country,
    user_contact: contact,
    project_category: projectcategory,
    project_details: projectdetails,
  };

  return new Promise((resolve, reject) => {
    emailjs.send(
      'service_iwxtv24', 
      templateId,
      emailData,
      userId,
    )
    .then((response) => {
      console.log('Email sent!', response.status, response.text);
      resolve(response); // Resolve the promise on success
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      reject(error); // Reject the promise on error
    });
  });
};




const sendResume = (dataSend) => {
  const templateId = 'template_c0zt9zk'; 
  const userId = 'ZAnazbJHUFOjRUXNs'; 
  const { resume } = dataSend;

  const emailData = new FormData();
  emailData.append('to_name', 'Echo Glitch HR');
  emailData.append('message', 'Please find the attached resume.'); // Optional message

  // Append the resume file to the FormData
  emailData.append('resume', resume);

  return new Promise((resolve, reject) => {
    emailjs.send(
      'service_l2j5sb6', 
      templateId,
      emailData,
      userId,
    )
    .then((response) => {
      console.log('Email sent!', response.status, response.text);
      resolve(response); // Resolve the promise on success
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      reject(error); // Reject the promise on error
    });
  });
};

export { sendEmail, sendResume };