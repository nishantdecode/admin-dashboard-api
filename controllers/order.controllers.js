// const HttpError = require("../helpers/HttpError.helpers");
// const Response = require("../helpers/Response.helpers");
// const { OrderService } = require("../services/order.service");

class OrderController {

    getAllOrders = async (req, res) => {
      console.info("ALL ORDERS");
    };
  
    getOrder = async (req, res) => {
      console.info("ORDER");
    };
  
    createOrder = async (req, res) => {
      console.info("ORDER CREATED");
    };

    updateOrder = async (req, res) => {
      console.info("ORDER UPDATED");
    };
  
    deleteOrder = async (req, res) => {
      console.info("ORDER DELETED");
    };
  
  }
  
  module.exports.OrderController = new OrderController();
  