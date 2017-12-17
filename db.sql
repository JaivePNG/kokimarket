create database orderMgmt;
use orderMgmt;

DROP TABLE IF EXISTS `orderDetails`;
CREATE TABLE `orderDetails` (
  `orderDetailsId` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) DEFAULT NULL,
  `secondName` varchar(50) DEFAULT NULL,
  `officeLocation` varchar(50) DEFAULT NULL,
  `email` varchar(25) DEFAULT NULL,
  `contactNumber` varchar(25) DEFAULT NULL,
  `workLocation` varchar(25) DEFAULT NULL,
  `paymentMethod` varchar(10) DEFAULT NULL,
  `orderCreatedDate` datetime DEFAULT NULL,
  `bag` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`orderDetailsId`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;