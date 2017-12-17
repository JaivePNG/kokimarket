var express = require('express');
var router = express.Router();
var OrderDetails=require('../models/OrderDetails');
var EmailSender= require('../commons/EmailSender')


router.post('/',function(req,res,next){
        var today = new Date();
        OrderDetails.createOrder(req.body,today,function(err,count){
            console.log(req.body);
            if(err)
            {
                res.json({ status: 500, msg: err });
            }
            else{
                EmailSender.sendSingleMail(req.body,today);
                res.json({ status: 200, msg: 'order has been created' });//or return count for 1 & 0
            }
        });
});

module.exports=router;