const brandModel = require('../models/brandModel');

const getAll = async () =>{
    try {
        return await brandModel.find({ })
    } catch (error) {
        throw error
    }
}

const getId = async (_id) =>{
    try {
        return await brandModel.find({_id})
    } catch (error) {
        throw error
    }
}

const create = async (name) =>{
    try {
        return await brandModel.create({name:name});
    } catch (error) {
        throw error
    }
}

const update = async (_id,body) =>{
    try {
        return await brandModel.findByIdAndUpdate(_id,body);
    } catch (error) {
        throw error
    }
}

const deleteId = async (_id) =>{
    try {
        return await brandModel.findByIdAndDelete(_id);
    } catch (error) {
        throw error
    }
}

module.exports = {  getAll, getId ,create ,update , deleteId }