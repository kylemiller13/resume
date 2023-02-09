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
          <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• Developed the Opine web application using responsive UI elements(Material UI) and React framework.</ListItem>
          <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• Participated in daily scrum meetings to discuss progress and any issues that may arise.</ListItem>
          <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• Worked to continuously improve the application by troubleshooting and adding new features.</ListItem>
          <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• Attended daily scrums to allow us to design and plan the workflow for our development tasks.</ListItem>
        </List>
    </div>
  );
}

export default Experience;