import React from 'react';
import { Typography, List, ListItem, Link, Divider } from '@material-ui/core';
function Projects() {
  return (
    <div>
      <Typography  align="left" variant="h5"><strong>Projects</strong></Typography>
      <Divider variant="fullWidth" style={{ backgroundColor: '#000', }} />
        <List type="ordered"  style={{ paddingTop: 0 }}>
          <ListItem style={{ paddingBottom: 0 }}><Link href="https://kylesweathersite.netlify.app/" target="_blank"><strong>Weather Site</strong></Link></ListItem>
          <ListItem style={{ paddingTop: 0, paddingBottom: 0, fontStyle: 'italic' }}>ReactJS</ListItem>
          <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• A website that allows a user to select a specific city or enter a desired location to get weather information.</ListItem>
          <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• The OpenWeatherMap API is used to display data for the current forecast and a forecast for the next seven days.</ListItem>
          <ListItem style={{ paddingBottom: 0 }}><Link href="https://github.com/pangtodd/bike_gallery" target="_blank"><strong>Bike Gallery</strong></Link></ListItem>
          <ListItem style={{ paddingTop: 0, paddingBottom: 0, fontStyle: 'italic' }}>Ruby on Rails</ListItem>
          <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• Pair Programmed with a team of 4 Epicodus students to create a Bike Gallery Site.</ListItem>
          <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• Installed with full CRUD functionality and Authorization via Devise.</ListItem>
          <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• Uses Active Storage and AWS to allow admin users to upload a photo.</ListItem>


        </List>
    </div>
  );
}

export default Projects;