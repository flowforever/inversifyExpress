/**
 * Created by trump.wang on 2017/2/24.
 */
var inversify = require('inversify');

var Container =  inversify.Container;

const defaultContainer = new Container({defaultScope: "Singleton"});

/** @global */
var getContainer = function(req) {
    var reqContainer = new Container();
    reqContainer.bind('req').toConstantValue(req);
    if(req) {
        return Container.merge(reqContainer, defaultContainer);
    }
    return defaultContainer;
};
global.getContainer = getContainer;


/**
 * @global
 * @name injectClass
 * */
var injectClass = function(name, Class) {
    defaultContainer.bind(name).to(Class);
    return Class;
};

global.injectClass = injectClass;