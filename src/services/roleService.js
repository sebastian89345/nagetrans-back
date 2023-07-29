const rolesModel = require('../models/rolesModel');

const getAll = async () =>{
    try {
        return await rolesModel.find({ })
    } catch (error) {
        throw error
    }
}

const getId = async (_id) =>{
    try {
        return await rolesModel.find({_id})
    } catch (error) {
        throw error
    }
}

const create = async (name) =>{
    try {
        return await rolesModel.create({name:name});
    } catch (error) {
        throw error
    }
}

const update = async (_id,body) =>{
    try {
        return await rolesModel.findByIdAndUpdate(_id,body);
    } catch (error) {
        throw error
    }
}

const deleteId = async (_id) =>{
    try {
        return await rolesModel.findByIdAndDelete(_id);
    } catch (error) {
        throw error
    }
}

module.exports = {  getAll, getId ,create ,update ,deleteId }