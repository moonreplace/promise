/*************************************************************************
 * File Name: deferred.js
 * Author: Chris Dai
 * Mail: moonreplace@gmail.com
 * Created Time: 2014-10-13	16:44:25
 ************************************************************************/

var EventEmitter = require('events').EventEmitter;
var util = require('util');
var customUtil = require('./util');


var state = {
    resolved: 'resolved',
    rejected: 'rejected',
    processing: 'processing'
};

/**
 * deferred Object
 * @constructor
 */
function Deferred() {
    EventEmitter.call(this);

    // should initialize by itself
    if (!(this instanceof Deferred)) {
        return new Deferred();
    }

    /**
     * success list
     */
    this.success = [];
    /**
     * fail list
     */
    this.failure = [];

    /**
     * 显示当前的状态
     */
    this.state = '';

    /**
     * process list
     */
    this.process = [];
} 
util.inherits(Deferred, EventEmitter);

/**
 * 加入最后执行的success list
 * @param {Function|Array} cb success call back function
 * @return {Object} deferred object
 */
Deferred.prototype.done = function (cb) {
    this.success = this.success.concat(cb);
    return this;
};
/**
 * 加入要执行fail的list
 * @param{Function|Array} cb fail call back function
 * @return {Object} deferred object
 */
Deferred.prototype.fail = function (cb) {
    this.failure = this.failure.concat(cb);
    return this;
};

/**
 * resolve当前的done list with the given context
 */
Deferred.prototype.resolveWith = function () {
    // 把当前的arguments,转化为数组
    var args = [].slice.call(arguments, 1);
    var context = arguments[0]; 

    this.success.forEach(function (cb) {
        cb.apply(context, args);
    });
};




module.exports = Deferred;


