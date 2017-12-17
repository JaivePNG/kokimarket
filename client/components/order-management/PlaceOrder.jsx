import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch, Redirect } from 'react-router';
import CompleteOrder from '../order-management/CompleteOrder';
import './PlaceOrder.css';
import * as validator from '../../validation/validator';
import * as orderService from '../../services/orderService';


class PlaceOrder extends Component {

    constructor(props) {
        super(props);
        this.state = {
        firstName:'',
        secondName:'',
        officeLocation:'',
        email:'',
        contactNumber:'',
        workLocation:'',
        paymentMethod:'',
        bag:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        let bag =this.props.location.state.bag;
        this.setState({bag:bag});
    }
    


    //setting the values of radio buttons
    handleChange(event) {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const id = target.name;
    this.setState({[id]: value});
    }

        handleSubmit(event) {
        event.preventDefault();
        if(validator.isValidOrder(this.state.firstName,this.state.secondName,this.state.officeLocation,this.state.email,this.state.contactNumber,this.state.workLocation,this.state.paymentMethod)){
        orderService.addOrder(this.state.firstName,this.state.secondName,this.state.officeLocation,this.state.email,this.state.contactNumber,this.state.workLocation,this.state.paymentMethod,this.state.bag).then(res => {
            console.log(res);
           if(res.status==200){
                this.props.history.push({
                pathname: '/completeOrder',
                state: {bag:this.state.bag,firstName:this.state.firstName,paymentMethod:this.state.paymentMethod}
                });
           }
        });    
    }else{

    }

    }

    render() {
        return (
            <div>
            <form  onSubmit={this.handleSubmit}>
                <div className="placeOrder">
                    <h3>Thank you for choosing the {this.state.bag}</h3>
                    <h3>Please fill in your details to process your order</h3>
                </div>

                <div className="placeOrder-form">
                    Your First Name* <input className="input-box1" type="text" name="firstName" onChange={this.handleChange} />
                    <br/><br/>
                    Your Second Name* <input className="input-box2" type="text" name="secondName" onChange={this.handleChange} />
                    <br/><br/>
                    Your Office Location*
                    <select className="input-box3" name="officeLocation" onChange={this.handleChange}>
                        <option value=""></option>    
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                    <br/><br/>
                    Your Email* <input className="input-box4" type="text" name="email" onChange={this.handleChange} />
                    <br/><br/>
                    The Best Number To Contact You On* <input className="input-box5" type="text" name="contactNumber" onChange={this.handleChange}  />
                    <br/><br/>
                    Where Do You Work* <input className="input-box6" type="text" name="workLocation" onChange={this.handleChange}/>
                    <br/><br/>
                    How Do You Pay* 
                    <select className="input-box3" name="paymentMethod" className="input-box7" onChange={this.handleChange}>
                        <option value=""></option>
                        <option value="Cash">Cash</option>
                        <option value="Online Payment">Online Payment</option>
                    </select>
                    <br/><br/>
                </div>  

                <div className="c-o">
                   <button type="submit" className="complete-order" >COMPLETE ORDER</button>                                       
                </div>
        </form>
        </div>
        );
    }
}

export default PlaceOrder;