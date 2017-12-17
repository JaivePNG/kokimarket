import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch, Redirect } from 'react-router';
import AboutUs from '../order-management/AboutUs';
import './CompleteOrder.css'

class CompleteOrder extends Component {

  constructor() {
    super();
    this.state = {
        firstName:'',
        paymentMethod:'',
        bag:''
    };
  }

  componentDidMount(){
        this.setState({bag:this.props.location.state.bag});
        this.setState({firstName:this.props.location.state.firstName});
        this.setState({paymentMethod:this.props.location.state.paymentMethod});
  }
    


  render() {
    return (
      <div>

      <div className="success">  
      <h3>Thank You {this.state.firstName}</h3>
      <p>You have choosen the {this.state.bag}.</p>
      <p>We will deliver your order on [Thursday].</p>
      <p>You will pay by {this.state.paymentMethod}.</p>
      <p>We will be intouch a day before your orderis due to double conﬁrm.About Us Special Requests Contact Us</p>
      
      <div className="au-sr-cu">
          <Link className="au" to="/aboutUs"><strong>About Us</strong></Link> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;                                             
          <a className="sr" href="mailto:hello@kokimarket.com"><strong>Special Request</strong></a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;                                                
          <a className="cu" href="mailto:hello@kokimarket.com"><strong>Contact Us</strong></a>                                       
      </div>
      </div>

      </div>
    );
  }
}

export default CompleteOrder;