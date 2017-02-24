/**
 * Created by trump.wang on 2017/2/24.
 */
var inversify = require('inversify');
var {injectable, inject} = inversify;

var names = require('./index');

/**
 * @memberOf services
 * */
@injectable()
class UserService {

    /** @type {LogService} */
    @inject('LogService')
    logService = {};

    constructor() {

        /** @public */
        this.counter = 0;
    }

    async querySomeDB() {
        await this.someLongTimeQuery();
        this.logService.write(`query db. ${this.counter++}`);
    }

    async someLongTimeQuery() {
        return new Promise((resolve, reject)=> {
            setTimeout(()=>resolve(1), 5);
        })
    }
}

module.exports = injectClass(names.UserService, UserService);
