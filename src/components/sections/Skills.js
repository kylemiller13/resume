import React from 'react';
import { Typography, Divider, List, ListItem, Box } from '@material-ui/core';

function Skills() {
  return (
    <div>
    <Typography  align="left" variant="h5"><strong>Skills</strong></Typography>
    <Divider variant="fullWidth" style={{ backgroundColor: '#000' }} />
    <List type="ordered"  style={{ paddingTop: 0 }}>
    <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>
      {/* <Box bgcolor="lightblue" width={55} height={20} borderRadius={20} margin={0.3} display="flex" alignItems="center" justifyContent="center">
        <Typography>HTML</Typography>
      </Box>
      <Box bgcolor="lightblue" width={110} height={20} borderRadius={20} margin={0.3} display="flex" alignItems="center" justifyContent="center">
        <Typography>CSS/Bootstrap</Typography>
      </Box>
      <Box bgcolor="lightblue" width={85} height={20} borderRadius={20} margin={0.3} display="flex" alignItems="center" justifyContent="center">
        <Typography>JavaScript</Typography>
      </Box>
      <Box bgcolor="lightblue" width={110} height={20} borderRadius={20} margin={0.3} display="flex" alignItems="center" justifyContent="center">
        <Typography>Ruby on Rails</Typography>
      </Box>
      <Box bgcolor="lightblue" width={70} height={20} borderRadius={20} margin={0.3} display="flex" alignItems="center" justifyContent="center">
        <Typography>React</Typography>
      </Box>
      <Box bgcolor="lightblue" width={175} height={20} borderRadius={20} margin={0.3} display="flex" alignItems="center" justifyContent="center">
        <Typography>Test Driven Development</Typography>
      </Box> */}
      </ListItem>
      <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• HTML • CSS/Bootstrap • JavaScript • Ruby on Rails • React • Test Driven Development • Material UI • Git • MySQL/PSQL • Firebase </ListItem>
      <ListItem style={{ paddingTop: 0,  paddingBottom: 0, marginLeft: '20px' }}>• C# • C#.NET • Python </ListItem>
    </List>
    </div>
  );
}

export default Skills;