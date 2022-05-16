const express = require('express');
const cors = require('cors');
const db= require('./db');

const routeIntervention=require('./routes/interventionRoute');
const routeAgent=require('./routes/agentroute');
const routeArticle=require('./routes/articleRoute');
const routeOperateur=require('./routes/operateurRoute');
const routePhoto=require('./routes/photoRoute');
const routeTechnicien=require('./routes/technicienRoute');


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
port = 3000,
app.use('/intervention',routeIntervention )
app.use('/agent',routeAgent )
app.use('/article',routeArticle )
app.use('/operateur',routeOperateur )
app.use('/photo',routePhoto)
app.use('/technicien',routeTechnicien)


app.listen(port, ()=>{
    console.log(`the server is running on port ${port}`);
})
