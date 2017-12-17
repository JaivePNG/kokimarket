var db=require('../dbconnection');

var OrderDetails={
createOrder:function(data,today,callback){
    var orderDetails={   
        "firstName":data.firstName,
        "secondName":data.secondName,
        "officeLocation":data.officeLocation,
        "email":data.email,
        "contactNumber":data.contactNumber,
        "workLocation":data.workLocation,
        "paymentMethod":data.paymentMethod,
        "orderCreatedDate":today,
        "bag":data.bag
    }
    console.log("inside service-createOrder");
    return db.query("INSERT INTO orderDetails SET ?",orderDetails,callback);    
}
};
module.exports=OrderDetails;


// {
//   "firstName": "johib",
//   "secondName": "khan",
//   "officeLocation": "indore",
//   "email": "johib.khan@gmail.com",
//   "contactNumber": "916000304034",
//   "workLocation": "sdsdsd",
//   "paymentMethod": "case",
//   "bag": "50kskks"
// }
