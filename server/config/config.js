// --------
//  PUERTO 
// --------

process.env.PORT = process.env.PORT || 3000;

// ---------
//  ENTORNO
// ---------

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ------------
//  BASE DATOS 
// ------------

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URL;
}

process.env.URLDB = urlDB;

// -------------------
//  VENCIMIENTO TOKEN
// -------------------
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


// -------------------------
//  SEED de Autentificacion
// -------------------------

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';