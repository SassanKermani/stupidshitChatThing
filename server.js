
/*----------  set up  ----------*/
const express = require('express');
const app = express();
const port = 3000;
/*----------  Routs  ----------*/

//route files
const apiRouter = require('./config/apiRoutes.js');
const guiRouter = require('./config/guiRouter.js');

app.use(express.static(__dirname + '/public'))

app.use(`/api/`, apiRouter)

app.use(`/gui`, guiRouter)

 app.get(`/*`, (req, res)=>{
 	res.send(`Nope`)
 })

/*----------  Up  ----------*/
app.listen(port, function(){
	console.log(`up at ${port}`);
})