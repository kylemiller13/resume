import React from 'react';
import Header from './sections/Header';
import Skills from './sections/Skills';
import ContactInfo from './sections/ContactInfo';
import Projects from './sections/Projects.js';
import Experience from './sections/Experience.js';
import Education from './sections/Education.js';
// import Summary from './sections/Summary.js';


function App() {
  return (
    <React.Fragment>
      <div id="root">
        <div className='paper mx-auto p-3' >

            <Header />

            <ContactInfo />

            {/* <Summary /> */}

            <Skills />

            <Projects />

            <Experience />
            
            <Education />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
