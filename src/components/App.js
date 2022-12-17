import React from 'react';
import {Paper} from '@material-ui/core';
import Header from './Header.js'
import Skills from './Skills';
import ContactInfo from './ContactInfo';
import Projects from './Projects.js';
import Experience from './Experience.js';
import Education from './Education.js';



function App() {
  return (
    <React.Fragment>
      <div id="root">
        <div className='paper mx-auto p-3'>
          <Paper elevation={3}>
            
            <Header />
            <ContactInfo />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            
          </Paper>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
