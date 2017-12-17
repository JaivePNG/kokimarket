import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch, Redirect } from 'react-router'
import PlaceOrder from '../order-management/PlaceOrder';
import './StartOrder.css'

class StartOrder extends Component {

    constructor() {
        super();
        this.state = {
           bag:''
        };
        this.placeOrder=this.placeOrder.bind(this);
        this.chooseBag=this.chooseBag.bind(this);
    }

    chooseBag(event){
       event.preventDefault();
       //let optedItem=event.target.innerHTML;
       //console.log(optedItem);
       this.setState({bag: event.target.innerHTML});
  
    }

    placeOrder(event){
        event.preventDefault();
        this.props.history.push({
        pathname: '/placeOrder',
        state: {bag:this.state.bag}
        });
    }


    render() {
        return (
            <div>

                <div className="startOrder">
                <div>
                    <h3>CHOOSE YOUR MARKET BAG FOR THIS WEEK</h3>
                </div>

                <div className="b-i1">
                    <img className="bag-image" src="images/pngmarketbag.jpg" />                    
                </div>

                <div className="b-t">                   
                    <button onClick={this.chooseBag} className="bag-title1" data="K50 MARKET BAG">K50 MARKET BAG</button>
                </div>

                <div className="b-i">
                    <img className="bag-image" src="images/pngmarketbag.jpg" />                    
                </div>

                <div className="b-t">                   
                    <button onClick={this.chooseBag} className="bag-title2" data="K25 MARKET BAG">K25 MARKET BAG</button>
                </div>

                <div className="b-i">
                    <img className="bag-image" src="images/pngmarketbag.jpg" />                    
                </div>

                <div className="b-t">                   
                    <button onClick={this.chooseBag} className="bag-title3" data="K15 MARKET BAG">K15 MARKET BAG</button>
                </div>

                <div className="p-o">
                   <button onClick={this.placeOrder} className="place-order">PLACE YOUR ORDER</button>                                       
                </div>
                </div>

            </div>
        );
    }
}

export default StartOrder;