import React from 'react';
import {Paper} from '@material-ui/core';
import Header from './sections/Header';
import Skills from './sections/Skills';
import ContactInfo from './sections/ContactInfo';
import Projects from './sections/Projects.js';
import Experience from './sections/Experience.js';
import Education from './sections/Education.js';



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
