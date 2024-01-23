// const HttpError = require("../helpers/HttpError.helpers");
// const Response = require("../helpers/Response.helpers");
// const { ServicesService } = require("../services/services.service");

class ServicesController {

    getAllServices = async (req, res) => {
      console.info("ALL SERVICES");
    };
  
    getService = async (req, res) => {
      console.info("SERVICE");
    };
  
    createService = async (req, res) => {
      console.info("SERVICE CREATED");
    };

    updateService = async (req, res) => {
      console.info("SERVICE UPDATED");
    };
  
    deleteService = async (req, res) => {
      console.info("SERVICE DELETED");
    };
  
  }
  
  module.exports.ServicesController = new ServicesController();
  