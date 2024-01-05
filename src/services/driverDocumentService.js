const driverDocumentModel = require('../models/driverDocumentModel');

const getAll = async () =>{
    try {
        return await driverDocumentModel.find({ }).populate('users').populate('arl').populate('afp').populate('eps').populate('compesationBox');
    } catch (error) {
        throw error
    }
}

const getId = async (_id) =>{
    try {
        return await driverDocumentModel.find({_id}).populate('users').populate('arl').populate('afp').populate('eps').populate('compesationBox');
    } catch (error) {
        throw error
    }
}

const create = async (body) =>{
    try {
        return await driverDocumentModel.create(body);
    } catch (error) {
        throw error
    }
}

const update = async (_id,body) =>{
    try {
        return await driverDocumentModel.findByIdAndUpdate(_id,body);
    } catch (error) {
        throw error
    }
}

const deleteId = async (_id) =>{
    try {
        return await driverDocumentModel.findByIdAndDelete(_id);
    } catch (error) {
        throw error
    }
}

module.exports = { getAll ,getId ,create ,update ,deleteId }