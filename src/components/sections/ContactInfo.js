import React from 'react';
import { Link, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from "@material-ui/icons/Phone";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles({
  iconsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F3F5'
  },
  iconsIcon: {
    marginRight: 8,
  },
});

function ContactInfo() {
  const classes = useStyles();
  return (
    <div className={classes.iconsContainer}>
      <Link
        href="https://www.linkedin.com/in/kyleshigerumiller/"
        target="_blank"
      >
      <LinkedInIcon fontSize="large"/>  
      </Link>
      <span className="mx-1">•</span>
      <PhoneIcon className={classes.iconsIcon}fontSize="medium"/>
      <span>310-850-1762 </span>
      <span className="mx-1">•</span>
      <Link
        href="https://github.com/kylemiller13"
        target="_blank"
        style={{ color: 'black' }}
      >
      <GitHubIcon fontSize="medium" />  
      </Link>
      <span className="mx-1">•</span>
      <EmailIcon 
      className={classes.iconsIcon}
      fontSize="medium"
      style={{ color: 'red' }}/>
      <span>millerkyle85@gmail.com</span>
    </div>
  );
}

export default ContactInfo;