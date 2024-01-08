const vehicleDocumentModel = require('../models/vehicleDocumentModel');

const getAll = async () =>{
    try {
        return await vehicleDocumentModel.find({ }).populate('users');
    } catch (error) {
        throw error
    }
}

const getId = async (_id) =>{
    try {
        return await vehicleDocumentModel.find({_id}).populate('users');
    } catch (error) {
        throw error
    }
}

const create = async (body) =>{
    try {
        return await vehicleDocumentModel.create(body);
    } catch (error) {
        throw error
    }
}

const update = async (_id,body) =>{
    try {
        return await vehicleDocumentModel.findByIdAndUpdate(_id,body);
    } catch (error) {
        throw error
    }
}

const deleteId = async (_id) =>{
    try {
        return await vehicleDocumentModel.findByIdAndDelete(_id);
    } catch (error) {
        throw error
    }
}

module.exports = { getAll ,getId ,create ,update ,deleteId }