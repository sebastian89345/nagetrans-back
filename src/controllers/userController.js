const { httpError,messagePersonalized } = require('../helpers/handleMessage');
const  usersService  = require("../services/usersService");
const { encrypt } = require('../helpers/handleBcrypt');

let admin = '65dbdcc015ac149804455694';
let vehicle = '65dbe6f499a8b5d6417a7895';

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
        const { user,placa,types,model,brand,dni,email,names,surnames,phoneNumber,password,status,role,show,internalNumber } = req.body;
        let users;
        
        //Se busca el rol del vehiculo primero
        if (role === vehicle || role === admin){
            users = await usersService.vehicleExisting(user,placa);
        } else {
            users = await usersService.personExisting(user,dni);
        }

        if(users){
            return messagePersonalized(res,400,'usuario o identificacion ya registrados',{user:user,dni:dni,placa:placa});
        }
        const passwordHash = await encrypt(password);
        const response = await usersService.create(user,placa,types,model,brand,dni,email,names,surnames,phoneNumber,passwordHash,status,role,show,internalNumber );
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