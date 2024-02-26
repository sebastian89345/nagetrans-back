const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config({path:'./.env'});

//Esto me toco ponerlo por que me estaba mandando un problema con la conexion a la base de datos
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const app = express(); 
const PORT = process.env.PORT || 3000;
app.use(express.json());

const v1TypeRoutes = require('./routes/typeRoutes');
const v1BrandRoutes = require('./routes/brandRoutes');
const v1ModelRoutes = require('./routes/modelRoutes');
const v1StatusRoutes = require('./routes/statusRoutes');
const v1RolesRoutes = require('./routes/rolesRoutes');
const v1UsersRoutes = require('./routes/usersRoutes');
const v1AuthRoutes = require('./routes/authRoutes');
const v1epsRoutes = require('./routes/epsRoutes');
const v1arlRoutes = require('./routes/arlRoutes');
const v1afpRoutes = require('./routes/afpRoutes');
const v1compensationboxRoutes = require('./routes/compensationboxRoutes');
const v1driverDocumentRoutes = require('./routes/driverDocumentRoutes');
const v1vehicleDocumentRoutes = require('./routes/vehicleDocumentRoutes');
const v1listCheckRoutes = require('./routes/listCheckRoutes');

const database = require('./database/database');

//morgan es algo opcionar
app.use(morgan('dev'));

//cors para no tener problemas con peticiones
app.use(cors());

app.use('/api/v1/type/',v1TypeRoutes);
app.use('/api/v1/brand/',v1BrandRoutes);
app.use('/api/v1/model/',v1ModelRoutes);
app.use('/api/v1/status/',v1StatusRoutes);
app.use('/api/v1/role/',v1RolesRoutes);
app.use('/api/v1/users/',v1UsersRoutes);
app.use('/api/v1/auth/',v1AuthRoutes);
app.use('/api/v1/eps/',v1epsRoutes);
app.use('/api/v1/arl/',v1arlRoutes);
app.use('/api/v1/afp/',v1afpRoutes);
app.use('/api/v1/compensationbox/',v1compensationboxRoutes);
app.use('/api/v1/driverDocument/',v1driverDocumentRoutes);
app.use('/api/v1/vehicledocument/',v1vehicleDocumentRoutes);
app.use('/api/v1/listCheck/',v1listCheckRoutes);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT} 🚀`); 
});