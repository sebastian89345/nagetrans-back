const jwt = require('jsonwebtoken') //TODO : 😎

const tokenSign = async (user) => { //TODO: Genera Token
    return jwt.sign(
        {
            _id: user._id, //TODO: <---
            user: user.user
        }, //TODO: Payload ! Carga útil
        process.env.JWT_SECRET || '123456', //TODO ENV 'secretkey'
        {
            expiresIn: "45m", //TODO tiempo de vida
        }
    );
}

const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET || '123456')
    } catch (e) {
        return null
    }
}

const decodeSign = (token) => { //TODO: Verificar que el token sea valido y correcto
    return jwt.decode(token, null)
}

module.exports = { tokenSign, decodeSign, verifyToken }