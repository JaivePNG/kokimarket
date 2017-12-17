import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch, Redirect } from 'react-router'
import StartOrder from '../order-management/StartOrder';
import './Home.css'
class Home extends Component {

    constructor() {
        super();
        this.state = {
        };
    }


    render() {
        return (
            <div>

                <div className="home">
                <p>KOKI MARKETCOM KOKI Market is a service to improve peoples diet in Port Moresby by simply delivering fresh market food to you once a week.</p>
                <h3>How To Order</h3>
                <p>Pretty simple. At the bottom of this page is the ordering button. Choose one of three market bag sizes, and then ﬁll in your details. If you are from PNG, the market bags and the prices are self explanatory.</p>
                <h3>How We Deliver</h3>
                <p>We deliverto your ofﬁce during the day. That way you can easily take it home in your car or company vehicle ortaxi or pmv. We deliver twice a week. If you work in town, 3 mile, boroko, in that general direction, we deliver on Tuesday. If you work at Hohohal, Gordons, Waigani, we deliver on Thursdays.</p>
                <h3>Payment</h3>
                <p>You can choose cash or eftpos card to pay us. If we know you, you can also choose credit. Why credit? Because sometimes we know people are broke and their kids might be hungry. But we cant take on too many credit order. Use the special request button at the end of the process or let us know as we communicate before we deliver.</p>
                </div>

                <div className="s-o">
                   <Link className="start-order" to="/startOrder">START YOUR ORDER HERE</Link>                                       
                </div>
                
            </div>
        );
    }
}

export default Home;