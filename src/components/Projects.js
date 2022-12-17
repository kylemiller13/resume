import React from 'react';
import { Typography, List, ListItem, Link, Divider } from '@material-ui/core';
function Projects() {
  return (
    <div>
      <Typography  align="left" variant="h5"><strong>Projects</strong></Typography>
      <Divider variant="fullWidth" style={{ backgroundColor: '#000', }} />
        <List type="ordered"  style={{ paddingTop: 0 }}>
          <ListItem style={{ paddingBottom: 0 }}><Link href="https://kylesweathersite.netlify.app/"><strong>Weather Site</strong></Link></ListItem>
          <ListItem style={{ paddingTop: 0, paddingBottom: 0, fontStyle: 'italic' }}>ReactJS</ListItem>
          <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• A weather website where a user can choose a selected city or enter the desired place.</ListItem>
          <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• Uses OpenWeatherMap API to display data for today’s forecast and a six-day future forecast.</ListItem>
        </List>
    </div>
  );
}

export default Projects;