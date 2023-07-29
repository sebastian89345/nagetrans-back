const modelVehicleModel = require('../models/modelVehicleModel');

const getAll = async () =>{
    try {
        return await modelVehicleModel.find({ })
    } catch (error) {
        throw error
    }
}

const getId = async (_id) =>{
    try {
        return await modelVehicleModel.find({_id})
    } catch (error) {
        throw error
    }
}

const create = async (name) =>{
    try {
        return await modelVehicleModel.create({name:name});
    } catch (error) {
        throw error
    }
}

const update = async (_id,body) =>{
    try {
        return await modelVehicleModel.findByIdAndUpdate(_id,body);
    } catch (error) {
        throw error
    }
}

const deleteId = async (_id) =>{
    try {
        return await modelVehicleModel.findByIdAndDelete(_id);
    } catch (error) {
        throw error
    }
}

module.exports = {  getAll ,getId ,create ,update ,deleteId}