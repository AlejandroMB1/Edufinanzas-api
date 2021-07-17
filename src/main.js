const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const router = express.Router();
const app = express();
//config
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2); //conexion front

//midlewares
app.use(morgan('dev')); //Ver por consola lo que llega al server
app.use(express.urlencoded({extended:false}));
app.use(express.json()); //conexion front
app.use(cors());
app.use(helmet());

// Rutas
const users = require('./routes/users');
const detail = require('./routes/detailUser');
const score = require('./routes/puntaje');
const progress = require('./routes/progreso');
const keys = require('./routes/llaves');
const keysxuser = require('./routes/llavesxusuario');
const activity = require('./routes/actividades');

app.use('/users',users);
app.use('/detailUser',detail);
app.use('/puntaje',score);
app.use('/progreso',progress);
app.use('/llaves',keys);
app.use('/llavesxusuario',keysxuser);
app.use('/actividades',activity);

//Start server
app.listen(app.get('port'), () => {
	console.log('Server on port', app.get('port'));
});