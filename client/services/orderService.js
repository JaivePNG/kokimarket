import axios from 'axios';
import  {urls} from '../constants/config';
import Alert from 'react-s-alert';

export function addOrder(firstName,secondName,officeLocation,email,contactNumber,workLocation,paymentMethod,bag) {
let data={firstName:firstName,secondName:secondName,officeLocation:officeLocation,email:email,contactNumber:contactNumber,workLocation:workLocation,paymentMethod:paymentMethod,bag:bag};
  return axios.post(urls.orderDetails,data)
    .then(response =>response.data)
            //exception handling in case of service is not reachable
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else {
                console.log('Error in addOrder', error.message);
            }

            Alert.error('<h4>error occured while placing an order</h4>');

        });
}