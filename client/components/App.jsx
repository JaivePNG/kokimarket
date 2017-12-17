import React, {Component} from 'react';
import {Route } from 'react-router-dom';
import Header from './shared/Header';
import Home from '../components/order-management/Home';
import StartOrder from '../components/order-management/StartOrder';
import PlaceOrder from '../components/order-management/PlaceOrder';
import CompleteOrder from '../components/order-management/CompleteOrder';
import AboutUs from '../components/order-management/AboutUs'
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
//Alert.error("<h4>Please select file type</h4>");


class App extends Component {

  constructor() {
    super();
    this.state = {
    };
  }


  render() {
    return (
      <div>
        <Header/>
        <div>
          <main>
            <Route path="/" exact component={Home} />
            <Route path="/startOrder" exact component={StartOrder} />
            <Route path="/placeOrder" exact component={PlaceOrder} />
            <Route path="/completeOrder" exact component={CompleteOrder} />
            <Route path="/aboutUs" exact component={AboutUs} />
          </main>
          <Alert stack={{limit: 3}}  html={true}  timeout={300000}  position= 'top-right' effect='jelly'/>
        </div> 
      </div>
    );
  }
}

export default App;