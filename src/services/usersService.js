const usersModel = require('../models/usersModel');

const getAll = async () =>{
    try {
        return await usersModel.find({ }).populate('role').populate('status').populate('model').populate('types').populate('brand')
    } catch (error) {
        throw error
    }
}

const getId = async (_id) =>{
    try {
        return await usersModel.find({_id}).populate('role').populate('status').populate('model').populate('types').populate('brand')
    } catch (error) {
        throw error
    }
}

const create = async (user,vin,types,model,brand ,dni,email,names,surnames,phoneNumber,password,status,role,show) =>{
    try {
        return await usersModel.create({
            user:user,
            vin:vin,
            types:types,
            model:model,
            brand:brand,
            dni:dni,
            email:email,
            names:names,
            surnames:surnames,
            phoneNumber:phoneNumber,
            password:password,
            status:status,
            role:role,
            show:show
        });
    } catch (error) {
        throw error
    }
}

const update = async (_id,body) =>{
    try {
        return await usersModel.findByIdAndUpdate(_id,body);
    } catch (error) {
        throw error
    }
}

const deleteId = async (_id) =>{
    try {
        return await usersModel.findByIdAndDelete(_id);
    } catch (error) {
        throw error
    }
}

const personExisting = async (user,dni) =>{
    try {
        const userData = await usersModel.findOne({user:user});
        const dniData = await usersModel.findOne({dni:dni});
        if( userData !== null || dniData !== null ){
            return true;
        } else {
            return false;
        }
    } catch (error) {
        throw error
    }
}

const vehicleExisting = async (user,vin) =>{
    try {
        const userData = await usersModel.findOne({user:user});
        const vinData = await usersModel.findOne({vin:vin});
        if( userData !== null || vinData !== null ){
            return true;
        } else {
            return false;
        }
    } catch (error) {
        throw error
    }
}


module.exports = { getAll ,getId ,create ,update ,deleteId,personExisting , vehicleExisting }