const { httpError,messagePersonalized } = require('../helpers/handleMessage');
const  roleService  = require("../services/roleService");

const getAll = async (req, res) => {
    try {
        const response = await roleService.getAll();
        if(response.length > 0){
           return messagePersonalized(res,200,'Registros encontrados',response);
        } else {
            return messagePersonalized(res,404,'No hay informacion',response);
        }
    } catch (error) {
        httpError(res, error)
    }
}

const getId = async (req, res) => {
    try {
        const { _id } = req.params;
        const response = await roleService.getId(_id);
        if(response.length > 0){
            return messagePersonalized(res,200,'Registros encontrados',response);
        } else {
            return messagePersonalized(res,404,'No hay informacion',_id);
        }
    } catch (error) {
        httpError(res, error)
    }
}

const create = async (req, res) => {
    try {
        const { name } = req.body;
        const response = await roleService.create(name);
        messagePersonalized(res,201,'Registrado con exito',response);
    } catch (error) {
        httpError(res, error)
    }
}

const update = async (req, res) => {
    try {
        const { _id } = req.params;
        const response = await roleService.update(_id,req.body);
        if(response === null){
           return messagePersonalized(res,404,'No encontrado',_id);
        }
        messagePersonalized(res,200,'Actualizado con exito',response);
    } catch (error) {
        httpError(res, error)
    }
}

const deleteId = async (req, res) => {
    try {
        const { _id } = req.params;
        const response = await roleService.deleteId(_id);
        if(response === null) {
            return messagePersonalized(res,404,'No se pudo eliminar , por que no se encuentra',_id);
        }
        messagePersonalized(res,200,'Eliminado con exito',response);
    } catch (error) {
        httpError(res, error)
    }
}

module.exports = { getAll, getId, create, update, deleteId }