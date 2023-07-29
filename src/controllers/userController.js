const { httpError,messagePersonalized } = require('../helpers/handleMessage');
const  usersService  = require("../services/usersService");
const { encrypt } = require('../helpers/handleBcrypt');

const getAll = async (req, res) => {
    try {
        const response = await usersService.getAll();
        if(response.length > 0){
           return messagePersonalized(res,200,'Registros encontrados',response);
        } else {
            return messagePersonalized(res,404,'No hay informacion',response);
        }
    } catch (e) {
        httpError(res, e)
    }
}

const getId = async (req, res) => {
    try {
        const { _id } = req.params;
        const response = await usersService.getId(_id);
        if(response.length > 0){
            return messagePersonalized(res,200,'Registros encontrados',response);
        } else {
            return messagePersonalized(res,404,'No hay informacion',_id);
        }
    } catch (e) {
        httpError(res, e)
    }
}

const create = async (req, res) => {
    try {
        const { user,vin,type,model,brand,dni,email,names,surname,phoneNumber,password,status,role } = req.body;
        let users;
        
        if (role === '64b2635fcbdc48b0b07b1f0f'){
            users = await usersService.vehicleExisting(user,vin);
        } else {
            users = await usersService.personExisting(user,dni);
        }

        if(users){
            return messagePersonalized(res,400,'usuario o identificacion ya registrados',{user:user,dni:dni,vin:vin});
        }

        const passwordHash = await encrypt(password);
        const response = await usersService.create(user,vin,type,model,brand,dni,email,names,surname,phoneNumber,passwordHash,status,role);
        messagePersonalized(res,201,'Registrado con exito',response);
    } catch (e) {
        httpError(res, e)
    }
}

const update = async (req, res) => {
    try {
        const { _id } = req.params;
        const response = await usersService.update(_id,req.body);
        if(response === null){
           return messagePersonalized(res,404,'No encontrado',_id);
        }
        messagePersonalized(res,200,'Actualizado con exito',response);
    } catch (e) {
        httpError(res, e)
    }
}

const deleteId = async (req, res) => {
    try {
        const { _id } = req.params;
        const response = await usersService.deleteId(_id);
        if(response === null) {
            return messagePersonalized(res,404,'No se pudo eliminar , por que no se encuentra',_id);
        }
        messagePersonalized(res,200,'Eliminado con exito',response);
    } catch (e) {
        httpError(res, e)
    }
}

module.exports = { getAll, getId , create  , update , deleteId }