
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './index.css';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import doctor from './doctor.png';
import contact from './contact.png';
import jquery from './jquery.png';
import ContactForm from './components/ContactForm';
import reservation from './reservation.png';


class App extends Component {
  render () {
    return ( 
      <>
      <div class="container">
        <Navbar />
        <section id="home">
        <h1>Dylan Taft</h1>
        <h2>Full Stack Web Developer</h2>
        <Button icon labelPosition='right'>
        <a href="#about">
          View My Work
        </a>
      <Icon name='down arrow' />
    </Button>
    </section>
    <section id="about">
      <h1>About Me</h1>
      <p>I am a full stack web developer with a passion for coding.<br /> I love video
        games, music, martial arts, and anything outdoor. 
      </p>
      <br />
      <center><strong><h2><u>Skills</u></h2></strong></center>
      <br />
  <div class ="skills">
      <h3>HTML</h3>
      <h3>CSS/CSS3/Sass/Semantic-UI/Bootstrap</h3>
      <h3>Javascript/ES6/ReactJS/Node.js/Angular</h3>
      <h3>Rails/Django</h3>
  </div>
    </section>

    <section id="projects">
      <h1>My Projects</h1>
      <div class="ui three column grid">
  <div class="column">
    <div class="ui segment">
      <div class="ui fluid image">
      <div class="ui red ribbon label">
        <i class="gem icon"></i> ReactJs
      </div>
      {/* const reservation = require('./reservation.png'); */}
      <a href="https://reservation-example.netlify.com/">
      <img src={reservation} height="100px" width="200px"/>
      </a>
    </div>
    </div>
  </div>
  <div class="column">
    <div class="ui segment">
    <div class="ui fluid image">
      <div class="ui red ribbon label">
        <i class="react icon"></i> ReactJs
      </div>
      {/* const contact = require('./contact.png'); */}
      <a href="https://react-contact-list.netlify.com/">
      <img src={contact} height="100px" width="200px"/>
      </a>
    </div>
    </div>
  </div>
  <div class="column">
    <div class="ui segment">
    <div class="ui fluid image">
      <div class="ui red ribbon label">
        <i class="js icon"></i> jQuery
      </div>
      {/* const jquery = require('./jquery.png'); */}
     <a href="https://dylansjqueryshoppingapp.netlify.com/?_ga=2.6467762.1699282357.1562719571-999286475.1562112743">
      <img src={jquery}/>
      </a>
    </div>
    </div>
  </div>
</div>
    </section>
    <section id="contact">
      <h1>Contact Me</h1>
  <div class="social-btn">
    <Button circular color='facebook' icon='facebook' href="https://www.facebook.com/dylan.d.taft"/>
    <Button circular color='instagram' icon='instagram' href="https://www.instagram.com/dylbronjames16/"/>
    <Button circular color='linkedin' icon='linkedin' href="https://www.linkedin.com/in/dylan-taft-454a1a17a/"/>
    <Button circular color='grey' icon='github' href="https://github.com/PaperPlanes1623"/>
  </div>
  <ContactForm />
    </section>
      </div>
      </>
    )
  }
}

export default App;