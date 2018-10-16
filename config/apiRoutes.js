/*----------  Set up  ----------*/

const express = require('express');
const router = express.Router();


router.get(`/*`, (req, res)=>{
	res.send('api')
})



/*----------  return  ----------*/
module.exports = router;