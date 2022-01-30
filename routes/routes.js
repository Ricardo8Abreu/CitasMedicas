const {Router} = require('express'),
      router = Router(),
      { 
        citasGET, 
        citasPOST, 
        citasPUT, 
        citasDELETE

      } = require('../controllers/citas.controllers')


router.get('/', citasGET) 

router.post('/', citasPOST) 

router.put('/:id', citasPUT) 

router.delete('/:id', citasDELETE)


module.exports = router;