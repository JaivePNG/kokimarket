import React, {Component} from 'react';
import './AboutUs.css'

class AboutUs extends Component {

  constructor() {
    super();
    this.state = {
    };
  }


  render() {
    return (
      <div>

      <div className="aboutUs">    
      <h3>AboutUs</h3>
      <p>This web application uses React, JSX, Node, wordpress, php etc to work.</p>
      <p>This service is based at Koki.</p>
      <p>We go to Gordons, Boroko, wherever we can to ﬁnd fresh food to ﬁll the bags.</p>
      <p>We are attempting to solve a small problem of food securityespecially delivery in Port Moresby, a developing and very ineffecient city.</p>
      <br/><br/>
      <h4>Email Us</h4>
      </div>

      </div>
    );
  }
}

export default AboutUs;