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
          <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• Developing Opine web application using responsive UI elements via React framework and Material UI.</ListItem>
          <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• Participating in daily scrum meetings, troubleshooting for continuous improvement, and adding features.</ListItem>
          <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• Daily scrums to design development workflow of tasks.</ListItem>
        </List>
    </div>
  );
}

export default Experience;