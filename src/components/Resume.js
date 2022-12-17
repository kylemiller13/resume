import React, { useState } from 'react';
import {Paper, Typography, Button, Divider, List, ListItem, ListItemSecondaryAction, Collapse , Link} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from "@material-ui/icons/Phone";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from '@material-ui/icons/Email';






function Resume() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div id="root">
      <div className='paper mx-auto p-3'>
        <Paper elevation={3}>
        {/* style={{border: '1px solid black'}} */} 
          <Typography align="center" variant="h4"><strong>Kyle Miller</strong></Typography>
          <Typography align="center" variant="h4">Frontend Developer</Typography>
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
          <Typography  align="left" variant="h5"><strong>Skills</strong></Typography>
          <Divider variant="fullWidth" style={{ backgroundColor: '#000' }} />
          <List type="ordered"  style={{ paddingTop: 0 }}>
            <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• HTML • CSS/Bootstrap • JavaScript • Ruby on Rails • React • Test Driven Development • Material UI • Git • MySQL/PSQL </ListItem>
          </List>
            <Typography  align="left" variant="h5"><strong>Projects</strong></Typography>
            <Divider variant="fullWidth" style={{ backgroundColor: '#000', }} />
            <List type="ordered"  style={{ paddingTop: 0 }}>
              <ListItem style={{ paddingBottom: 0 }}><Link href="https://kylesweathersite.netlify.app/"><strong>Weather Site</strong></Link></ListItem>
              <ListItem style={{ paddingTop: 0, paddingBottom: 0, fontStyle: 'italic' }}>ReactJS</ListItem>
              <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• A weather website where a user can choose a selected city or enter the desired place.</ListItem>
              <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• Uses OpenWeatherMap API to display data for today’s forecast and a six-day future forecast.</ListItem>
            </List>
            <Typography align="left" variant="h5"><strong>Experience</strong></Typography>
            <Divider variant="fullWidth" style={{ backgroundColor: '#000', }} />
            <List type="ordered" style={{ paddingTop: 0 }}>
              <ListItem style={{ paddingBottom: 0 }}><strong>Opine - Remote</strong>
                <ListItemSecondaryAction style={{ top: 20 }}> 
                  <Typography color="textSecondary">Oct 2022 - Dec 2022</Typography>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem style={{ paddingTop: 0, paddingBottom: 0, fontStyle: 'italic' }}>Software Engineer Intern</ListItem>
              <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• Developing Opine web application using responsive UI elements via React framework and Material UI.</ListItem>
              <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• Participating in daily scrum meetings, troubleshooting for continuous improvement, and adding features.</ListItem>
              <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• Daily scrums to design development workflow of tasks.</ListItem>
            </List>
            <Typography align="left" variant="h5"><strong>Education</strong></Typography>
            <Divider variant="fullWidth" style={{ backgroundColor: '#000', }} />
            <List type="ordered" style={{ paddingTop: 0 }}>
              <ListItem style={{ paddingBottom: 0 }}><strong>Epicodus - Portland, OR</strong>
                <ListItemSecondaryAction style={{ top: 20 }}> 
                  <Typography color="textSecondary">Jan 2022 - Oct 2022</Typography>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem style={{ paddingTop: 0, paddingBottom: 0, fontStyle: 'italic' }}>Certificate in Web and Mobile Development</ListItem>
              <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>✓ Practiced coding 40+ hours/week</ListItem>
              <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>✓ Daily pair programming
                <ListItemSecondaryAction style={{ top: 10 }}> 
                  <Button
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                  {expanded ? 'Show less' : 'Show more'}
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>✓ Worked as a member of team projects</ListItem>
                <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>✓ Behavior Driven Development</ListItem>
                <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>✓ Agile environment</ListItem>
                <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>✓ Completed 1000+ hours of coding projects</ListItem>
                <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>✓ Technologies: Git, JavaScript, jQuery, React, Redux, Firebase, Ruby on Rails, MySQL, NPM, VS Code, and many more!</ListItem>
              </Collapse>
              <ListItem style={{ paddingBottom: 0 }}><strong>Portland Community College - Portland, OR</strong>
                <ListItemSecondaryAction style={{ top: 20 }}> 
                  <Typography color="textSecondary">Jan 2020 - Present</Typography>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>Associate of Applied Science - AAS</ListItem>
            </List>
        </Paper>
      </div>
    </div>
  );
}

export default Resume;
