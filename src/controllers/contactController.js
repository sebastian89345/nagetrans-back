const nodemailer = require('nodemailer');

const sendEmail = (req,res) => {

    const { interface,dni,petition,name,phoneNumber,email,message } = req.body;

    // Configurar el transporte SMTP
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nagetransoperativo@gmail.com',
            pass: 'dwvrbslceupiitgu'
        }
    });

    // Configurar los detalles del correo electrónico
    let mailOptions = {
        from: 'nagetransoperativo@gmail.com',
        to: 'nagetrans@gmail.com',
        subject: 'Asunto del correo',
        text: 'Contenido del correo enviado desde JavaScript con nodemailer'
    };

    if(interface === "contact"){
        mailOptions.subject = "Mensaje enviado desde el contacto"
        mailOptions.text = `Nombres y apellidos: ${name} \nTelefono: ${phoneNumber} \nCorreo: ${email} \nMensaje: ${message}`;  
    } else if (interface === "pqrs"){
        mailOptions.subject = "Mensaje enviado desde el pqrs"
        mailOptions.text = `Cedula: ${dni} \nNombres y apellidos: ${name} \nPeticion: ${petition} \nTelefono: ${phoneNumber} \nCorreo: ${email} \nDescripcion de la solicitud: ${message}`;
    }

    // Enviar el correo electrónico
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            // console.log(error);
            res.send({status:400,response:'No se pudo enviar el correo electrónico enviado'})
        } else {
            // console.log('Correo electrónico enviado: ' + info.response);
            res.send({status:200, response:'Correo electrónico enviado: ' + info.response})
        }
    });

}

module.exports = { sendEmail }