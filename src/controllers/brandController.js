const { httpError,messagePersonalized } = require('../helpers/handleMessage');
const  brandService  = require("../services/brandService");

const getAll = async (req, res) => {
    try {
        const response = await brandService.getAll();
        if(response.length > 0){
            messagePersonalized(res,200,'Registros encontrados',response);
        } else {
            messagePersonalized(res,404,'No hay informacion',response);
        }
    } catch (error) {
        httpError(res, error)
    }
}

const getId = async (req, res) => {
    try {
        const { _id } = req.params;
        const response = await brandService.getId(_id);
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
        const response = await brandService.create(name);
        messagePersonalized(res,201,'Registrado con exito',response);
    } catch (error) {
        httpError(res, error)
    }
}

const update = async (req, res) => {
    try {
        const { _id } = req.params;
        const response = await brandService.update(_id,req.body);
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
        const response = await brandService.deleteId(_id);
        if(response === null) {
            return messagePersonalized(res,404,'No se pudo eliminar , por que no se encuentra',_id);
        }
        messagePersonalized(res,200,'Eliminado con exito',response);
    } catch (error) {
        httpError(res, error)
    }
}

module.exports = { getAll, getId, create, update, deleteId }