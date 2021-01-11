const shopService = require('../services/shop.service');

module.exports.create = async (req,res,next) => {
    try {
            const shop = await shopService.create(req.body);
            return res.status(200).json(shop);
        }
    catch(err){
            console.error(err);
            return res.status(500).json({message:`Something went wrong ${err.message}`});
    }
}

module.exports.getAll = async (req, res, next) => {
    try {
            const shopsGetAll = await shopService.getAll(req.body);
            return res.status(200).json(shopsGetAll);
        }
    catch (err){
            console.error(err);
            return res.status(500).json({message:`Something went wrong ${err.message}`});
    }
}
module.exports.getById = async (req, res, next) => {
    try {
            const shopsGetById = await shopService.getById(req.params.id);
            return res.status(200).json(shopsGetById);
        }
    catch (err){
            console.error(err);
            return res.status(500).json({message:`Something went wrong ${err.message}`});
    }
}