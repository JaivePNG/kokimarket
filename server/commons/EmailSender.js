var nodemailer = require("nodemailer");
var Config = require("./Config");

exports.sendSingleMail = function(data,today){

var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: Config.email.emailId,
        pass: Config.email.password
    }
});

const mailOptions = {
  from: Config.email.sendFrom, // sender address
  to: Config.email.sendTo, // list of receivers
  subject: 'Order Details', // Subject line
  html: '<p>Your order has been successfully created here are the details</p><br/><div>'+
    '<p><span>First Name : </span>&nbsp;&nbsp;<span>'+data.firstName+'</span></p>'+
    '<p><span>Second Name : </span>&nbsp;&nbsp;<span>'+data.secondName+'</span></p>'+
    '<p><span>Office Location : </span>&nbsp;&nbsp;<span>'+data.officeLocation+'</span></p>'+
    '<p><span>Email : </span>&nbsp;&nbsp;<span>'+data.email+'</span></p>'+
    '<p><span>Where do you work : </span>&nbsp;&nbsp;<span>'+data.workLocation+'</span></p>'+
    '<p><span>Contact Number : </span>&nbsp;&nbsp;<span>'+data.contactNumber+'</span></p>'+
    '<p><span>How will you pay : </span>&nbsp;&nbsp;<span>'+data.paymentMethod+'</span></p>'+
    '<p><span>Thanks for choosing : </span>&nbsp;&nbsp;<span>'+data.bag+'</span></p>'+
    '<p><span>Order Created Date : </span>&nbsp;&nbsp;<span>'+today+'</span></p></div>'
};

return new Promise(function(resolve, reject) {
transporter.sendMail(mailOptions, function (err, info) {
try{    
   if(err){
       reject({ status: 500, msg: err });
       console.log(err);
       throw(err);
   }
     
   else{
       resolve({ status: 200, msg: info });
       console.log(info);
   }
}catch (ex) {
    console.log(ex);
}     
});
});

}