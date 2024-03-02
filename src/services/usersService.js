const usersModel = require('../models/usersModel');

let vehicle = '65dbe6f499a8b5d6417a7895'

const getAll = async () =>{
    try {
        return await usersModel.find({ }).populate('role').populate('status').populate('model').populate('types').populate('brand');
    } catch (error) {
        throw error
    }
}

const getId = async (_id) =>{
    try {
        return await usersModel.find({_id}).populate('role').populate('status').populate('model').populate('types').populate('brand');
    } catch (error) {
        throw error
    }
}

const create = async (user,placa,types,model,brand,dni,email,names,surnames,phoneNumber,password,status,role,show,internalNumber) =>{
    try {
        return await usersModel.create({
            user:user,
            placa:placa,
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
            show:show,
            internalNumber:internalNumber
        });
    } catch (error) {
        throw error
    }
}

// create con numero interno autogenerado
// const create = async (user,placa,types,model,brand,dni,email,names,surnames,phoneNumber,password,status,role,show) =>{
//     try {
//         let responseInternalNumber;
//         if(role === vehicle){ responseInternalNumber = await internalNumber(role); }
//         return await usersModel.create({
//             user:user,
//             placa:placa,
//             types:types,
//             model:model,
//             brand:brand,
//             dni:dni,
//             email:email,
//             names:names,
//             surnames:surnames,
//             phoneNumber:phoneNumber,
//             password:password,
//             status:status,
//             role:role,
//             show:show,
//             internalNumber:responseInternalNumber
//         });
//     } catch (error) {
//         throw error
//     }
// }

// const internalNumber = async (role) => {
//     let internalNumber;
//     let filterRole = await usersModel.find({ role });
//     if(filterRole.length > 0){
//         let lengthUser = filterRole.length - 1;
//         internalNumber = filterRole[lengthUser].internalNumber + 1;
//     } else {
//         internalNumber = 0;
//     }
//     return internalNumber
// }

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

const vehicleExisting = async (user,placa) =>{
    try {
        const userData = await usersModel.findOne({user:user});
        const placaData = await usersModel.findOne({placa:placa});
        if( userData !== null || placaData !== null ){
            return true;
        } else {
            return false;
        }
    } catch (error) {
        throw error
    }
}

module.exports = { getAll ,getId ,create ,update ,deleteId,personExisting , vehicleExisting }