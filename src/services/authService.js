const usersModel = require('../models/usersModel');

const userExisting = async (user) => {
    try {
        return await usersModel.findOne({user:user}).populate('role').populate('status'); 
    } catch (error) {
        throw error
    }
}

module.exports = { userExisting }