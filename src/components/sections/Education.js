import React from 'react';
import { Typography, List, ListItem, Divider, ListItemSecondaryAction} from '@material-ui/core';



function Education() {

  return (
    <div>
      <Typography align="left" variant="h5"><strong>Education</strong></Typography>
        <Divider variant="fullWidth" style={{ backgroundColor: '#000' }} />
        <List type="ordered" style={{  borderBottom: '10px solid #87CEEB'}}>
          <ListItem style={{ paddingTop: 0, paddingBottom: 0, fontStyle: 'italic' }}><strong>Certificate in Web and Mobile Development</strong></ListItem>
          <ListItem style={{ paddingBottom: 0, paddingTop: 0 }}>Epicodus - Portland, OR
            <ListItemSecondaryAction style={{ top: 10 }}> 
              <Typography color="textSecondary">Jan 2022 - Oct 2022</Typography>
            </ListItemSecondaryAction>
          </ListItem>
            <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• Practiced coding 40+ hours/week</ListItem>
            <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• Collaborated with team members on group projects</ListItem>
            <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• Daily pair programming</ListItem>
          <ListItem style={{ paddingTop: 0,  paddingBottom: 0, fontStyle: 'italic' }}><strong>A.A.S. in Computer Information Systems</strong></ListItem>

          <ListItem style={{ paddingBottom: 0, paddingTop: 0 }}>Portland Community College - Portland, OR
            <ListItemSecondaryAction style={{ top: 7 }}> 
              <Typography color="textSecondary">Jan 2021 - Present</Typography>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• Database development</ListItem>
          <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• Project management</ListItem>
          <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• Programming and application development</ListItem>
        </List>
    </div>
  );
}

export default Education;