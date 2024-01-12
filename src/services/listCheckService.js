const listCheckModel = require('../models/listCheckModel');

const getAll = async () =>{
    try {
        return await listCheckModel.find({ }).populate('userDriver').populate('userVehicle');
    } catch (error) {
        throw error
    }
}

const getId = async (_id) =>{
    try {
        return await listCheckModel.find({_id}).populate('userDriver').populate('userVehicle');
    } catch (error) {
        throw error
    }
}

const create = async (body) =>{
    try {
        return await listCheckModel.create(body);
    } catch (error) {
        throw error
    }
}

const update = async (_id,body) =>{
    try {
        return await listCheckModel.findByIdAndUpdate(_id,body);
    } catch (error) {
        throw error
    }
}

const deleteId = async (_id) =>{
    try {
        return await listCheckModel.findByIdAndDelete(_id);
    } catch (error) {
        throw error
    }
}

module.exports = { getAll ,getId ,create ,update ,deleteId }