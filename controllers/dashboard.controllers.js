// const HttpError = require("../helpers/HttpError.helpers");
// const Response = require("../helpers/Response.helpers");
// const { DashboardService } = require("../services/dashboard.service");

class DashboardController {

    getAllClients = async (req, res) => {
      console.info("ALL CLIENTS");
    };
  
    getEarningStats = async (req, res) => {
      console.info("EARNING STATISTICS");
    };
  
    getAllPartners = async (req, res) => {
      console.info("ALL PARTNERS");
    };
  
    getAllTransactions = async (req, res) => {
      console.info("ALL TRANSACTIONS");
    };
  
  }
  
  module.exports.DashboardController = new DashboardController();
  