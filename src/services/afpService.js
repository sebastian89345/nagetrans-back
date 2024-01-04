const afpModel = require('../models/afpModel');

const getAll = async () =>{
    try {
        return await afpModel.find({ })
    } catch (error) {
        throw error
    }
}

const getId = async (_id) =>{
    try {
        return await afpModel.find({_id})
    } catch (error) {
        throw error
    }
}

const create = async (name) =>{
    try {
        return await afpModel.create({name:name});
    } catch (error) {
        throw error
    }
}

const update = async (_id,body) =>{
    try {
        return await afpModel.findByIdAndUpdate(_id,body);
    } catch (error) {
        throw error
    }
}

const deleteId = async (_id) =>{
    try {
        return await afpModel.findByIdAndDelete(_id);
    } catch (error) {
        throw error
    }
}

module.exports = { getAll ,getId ,create ,update ,deleteId }