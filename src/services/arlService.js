const arlModel = require('../models/arlModel');

const getAll = async () =>{
    try {
        return await arlModel.find({ })
    } catch (error) {
        throw error
    }
}

const getId = async (_id) =>{
    try {
        return await arlModel.find({_id})
    } catch (error) {
        throw error
    }
}

const create = async (name) =>{
    try {
        return await arlModel.create({name:name});
    } catch (error) {
        throw error
    }
}

const update = async (_id,body) =>{
    try {
        return await arlModel.findByIdAndUpdate(_id,body);
    } catch (error) {
        throw error
    }
}

const deleteId = async (_id) =>{
    try {
        return await arlModel.findByIdAndDelete(_id);
    } catch (error) {
        throw error
    }
}

module.exports = { getAll ,getId ,create ,update ,deleteId }