const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const router = express.Router();
const app = express();
//config
app.set('port', process.env.PORT || 3306);
app.set('json spaces', 2); //conexion front

//midlewares
app.use(morgan('dev')); //Ver por consola lo que llega al server
app.use(express.urlencoded({extended:false}));
app.use(express.json()); //conexion front
app.use(cors());
app.use(helmet());

// Rutas
const users = require('./routes/users');
const detail = require('./routes/detailUsers');

app.use('/users',detail);
app.use('/users',users);

//Start server
app.listen(app.get('port'), () => {
	console.log('Server on port', app.get('port'));
});