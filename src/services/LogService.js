/**
 * Created by trump.wang on 2017/2/24.
 */

var inversify = require('inversify');
var {injectable, inject} = inversify;

/**
 * @memberOf services
 * */
@injectable()
class LogService {
    @inject('req')
    req = null;

    logs = [];

    write(str) {
        let msg = `${this.req.userName} : ${str}`;
        this.logs.push(msg);
        console.log(msg);
    }

}


module.exports = injectClass('LogService', LogService);
