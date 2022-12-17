import React, { useState } from 'react';
import { Typography, List, ListItem, Divider, ListItemSecondaryAction, Button, Collapse } from '@material-ui/core';


function Education() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
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
    </div>
  );
}

export default Education;