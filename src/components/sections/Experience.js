import React from 'react';
import { Typography, List, ListItem, Divider, ListItemSecondaryAction } from '@material-ui/core';

function Experience() {
  return (
    <div>
      <Typography align="left" variant="h5"><strong>Experience</strong></Typography>
        <Divider variant="fullWidth" style={{ backgroundColor: '#000', }} />
        <List type="ordered" style={{ paddingTop: 0 }}>
          <ListItem style={{ paddingBottom: 0 }}><strong>Opine - Remote</strong>
            <ListItemSecondaryAction style={{ top: 20 }}> 
              <Typography color="textSecondary">Oct 2022 - Dec 2022</Typography>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem style={{ paddingTop: 0, paddingBottom: 0, fontStyle: 'italic' }}>Software Engineer Intern</ListItem>
          <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• Conceptualized and redesigned&nbsp;<a href="https://opineschool.com/" target="_blank" rel="noopener noreferrer"> Opine web application</a>&nbsp;frontend using responsive UI elements(Material UI) and React framework</ListItem>
          <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• Engaged in daily scrum meetings to discuss progress and any issues that may arise</ListItem>
          <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• Worked to continuously improve the application by troubleshooting, debugging, and adding new features</ListItem>
          <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• Collaborated with team members to allow us to design and plan the workflow for our development tasks</ListItem>
        </List>
    </div>
  );
}

export default Experience;