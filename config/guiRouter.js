/*----------  Set up  ----------*/

const express = require('express');
const router = express.Router();
const path = require('path');

/*----------  Routs  ----------*/

router.get(``, (req, res)=>{
	res.sendfile('./gui/home.html');
})



router.get(`/*`, (req, res)=>{
	res.send('gui')
});



/*----------  return  ----------*/
module.exports = router;