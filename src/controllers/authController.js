const { httpError, messagePersonalized } = require('../helpers/handleMessage');
const { compare } = require('../helpers/handleBcrypt');
const { tokenSign } = require('../helpers/generateToken');
const  authService  = require("../services/authService");

//TODO: Login!
const login = async (req, res) => {
    try {
        const { user, password } = req.body
        const dataUser = await authService.userExisting(user);

        if(dataUser === null) {
            return messagePersonalized(res,404,'usuario no encontrado',dataUser);
        } else if(dataUser.status[0].name === 'Inactivo'){
            return messagePersonalized(res,400,'usuario inactivo',{});
        } 
        
        const checkPassword = await compare(password, dataUser.password) //TODO: Contraseña!
        //TODO JWT 👉
        const tokenSession = await tokenSign(dataUser) //TODO: 2d2d2d2d2d2d2
        
        if (checkPassword) { //TODO Contraseña es correcta!
            dataUser.token = tokenSession
            return messagePersonalized(res,200,'usuario activo',{ token:tokenSession,data:dataUser });
        }

        if (!checkPassword) {
            return messagePersonalized(res,409,'contraseña invalida','null');
        }
        
    } catch (error) {
        httpError(res, error)
    }
}

module.exports = {  login }