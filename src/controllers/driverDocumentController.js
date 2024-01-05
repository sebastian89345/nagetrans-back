const { httpError,messagePersonalized } = require('../helpers/handleMessage');
const  driverDocumentService  = require("../services/driverDocumentService");

const getAll = async (req, res) => {
    try {
        const response = await driverDocumentService.getAll();
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
        const response = await driverDocumentService.getId(_id);
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
        // const {numberLicense,expirationLicense,startLicense,expirationTimeLicense,users,arl,afp,eps,compesationBox} = req.body;
        // const response = await driverDocumentService.create(numberLicense,expirationLicense,startLicense,expirationTimeLicense,users,arl,afp,eps,compesationBox);
        const body = req.body;
        const response = await driverDocumentService.create(body);
        messagePersonalized(res,201,'Registrado con exito',response);
    } catch (error) {
        httpError(res, error)
    }
}

const update = async (req, res) => {
    try {
        const { _id } = req.params;
        const response = await driverDocumentService.update(_id,req.body);
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
        const response = await driverDocumentService.deleteId(_id);
        if(response === null) {
            return messagePersonalized(res,404,'No se pudo eliminar , por que no se encuentra',_id);
        }
        messagePersonalized(res,200,'Eliminado con exito',response);
    } catch (error) {
        httpError(res, error)
    }
}

module.exports = {  getAll, getId, create, update, deleteId }