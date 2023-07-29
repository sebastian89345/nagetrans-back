const { httpError,messagePersonalized } = require('../helpers/handleMessage');
const  typeService  = require("../services/typeService");

const getAll = async (req, res) => {
    try {
        const response = await typeService.getAll();
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
        const response = await typeService.getId(_id);
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
        const { name } = req.body;
        const response = await typeService.create(name);
        messagePersonalized(res,201,'Registrado con exito',response);
    } catch (e) {
        httpError(res, e)
    }
}

const update = async (req, res) => {
    try {
        const { _id } = req.params;
        const response = await typeService.update(_id,req.body);
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
        const response = await typeService.deleteId(_id);
        if(response === null) {
            return messagePersonalized(res,404,'No se pudo eliminar , por que no se encuentra',_id);
        }
        messagePersonalized(res,200,'Eliminado con exito',response);
    } catch (e) {
        httpError(res, e)
    }
}

module.exports = {  getAll, getId , create, update, deleteId }