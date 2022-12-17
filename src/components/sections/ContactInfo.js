import React from 'react';
import { Typography, Button } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from "@material-ui/icons/Phone";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from '@material-ui/icons/Email';


function ContactInfo() {
  return (
    <Typography align="center">
      <Button
        href="https://www.linkedin.com/in/kyleshigerumiller/"
        startIcon={<LinkedInIcon />}
        variant="contained"
        color="primary"
        size="small"
        style={{backgroundColor: '#0077B5'}}
      >
      LinkedIn
      </Button>
      <span className="mx-1"></span>
      <Button
        href="tel:310-850-1762"
        startIcon={<PhoneIcon />}
        variant="contained"
        color="primary"
        size="small"
        style={{backgroundColor: '#32CD32'}}
      >
      310-850-1762
      </Button>
      <span className="mx-1"></span>
      <Button
        href="https://github.com/kylemiller13"
        startIcon={<GitHubIcon />}
        variant="contained"
        color="secondary"
        size="small"
        style={{backgroundColor: '#000000'}}
      >
      GitHub
      </Button>
      <span className="mx-1"></span>
      <Button
        href="mailto:millerkyle85@gmail.com"
        type="email"
        startIcon={<EmailIcon />}
        variant="contained"
        color="secondary"
        size="small"
        style={{backgroundColor: '#FF0000'}}
      >
      Email
      </Button>
    </Typography>
  );
}

export default ContactInfo;