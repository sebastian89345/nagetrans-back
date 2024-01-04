const epsModel = require('../models/epsModel');

const getAll = async () =>{
    try {
        return await epsModel.find({ })
    } catch (error) {
        throw error
    }
}

const getId = async (_id) =>{
    try {
        return await epsModel.find({_id})
    } catch (error) {
        throw error
    }
}

const create = async (name) =>{
    try {
        return await epsModel.create({name:name});
    } catch (error) {
        throw error
    }
}

const update = async (_id,body) =>{
    try {
        return await epsModel.findByIdAndUpdate(_id,body);
    } catch (error) {
        throw error
    }
}

const deleteId = async (_id) =>{
    try {
        return await epsModel.findByIdAndDelete(_id);
    } catch (error) {
        throw error
    }
}

module.exports = { getAll ,getId ,create ,update ,deleteId }