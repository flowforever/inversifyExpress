var express = require('express');
var router = express.Router();

var counter = 0;

/* GET users listing. */
router.get('/', (req, res) => async function () {

    req.userName = `Trump ${counter++}`;

    var container = getContainer(req);

    /** @type {services.LogService}*/
    var logService = container.get('LogService');

    /** @type {services.UserService}*/
    var userService = container.get('UserService');

    await userService.querySomeDB();

    await userService.querySomeDB();

    await userService.querySomeDB();

    logService.write('visit users page.');

    res.send(logService.logs);

}());

module.exports = router;
