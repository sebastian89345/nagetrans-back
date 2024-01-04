const compesationBoxModel = require('../models/compesationBoxModel');

const getAll = async () =>{
    try {
        return await compesationBoxModel.find({ })
    } catch (error) {
        throw error
    }
}

const getId = async (_id) =>{
    try {
        return await compesationBoxModel.find({_id})
    } catch (error) {
        throw error
    }
}

const create = async (name) =>{
    try {
        return await compesationBoxModel.create({name:name});
    } catch (error) {
        throw error
    }
}

const update = async (_id,body) =>{
    try {
        return await compesationBoxModel.findByIdAndUpdate(_id,body);
    } catch (error) {
        throw error
    }
}

const deleteId = async (_id) =>{
    try {
        return await compesationBoxModel.findByIdAndDelete(_id);
    } catch (error) {
        throw error
    }
}

module.exports = { getAll ,getId ,create ,update ,deleteId }