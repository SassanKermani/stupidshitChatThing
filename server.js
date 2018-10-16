
/*----------  set up  ----------*/
const express = require('express');
const app = express();
const port = 3000;
/*----------  Routs  ----------*/

//route files
const apiRouter = require('./config/apiRoutes.js');


app.use(`/api/`, apiRouter)

 app.get(`/*`, (req, res)=>{
 	res.send(`Nope`)
 })

/*----------  Up  ----------*/
app.listen(port, function(){
	console.log(`up at ${port}`);
})