/*************************************************************************
 * File Name: deferred.js
 * Author: Chris Dai
 * Mail: moonreplace@gmail.com
 * Created Time: 2014-10-16	16:39:04
 ************************************************************************/

var Deferred = require('../../lib/deferred');
var EventEmitter = require('events').EventEmitter;
var should = require('should');

describe('deferred function test', function () {
    describe('initialized can be with new or by itself', function () {
        it ('inherit from EventEmitter', function () {
            var deferred = Deferred();
            deferred.should.be.an.instanceOf(EventEmitter);
        });

        it('should initialized by itself', function () {
            var deferred = Deferred();
            deferred.should.be.an.instanceOf(Deferred);
        });
        
        it('should initialized by new Operation', function () {
            var deferred = new Deferred();
            deferred.should.be.an.instanceOf(Deferred);
        });
    });

    describe('done method', function () {
        it('should accept one parameter', function () {
            var deferred = Deferred();
            var input = function () {};

            deferred.done(input);
            deferred.success.should.have.length(1);
        });

        it('should accept one array as parameter', function () {
            var deferred = Deferred();
            var input = function () {};
            deferred.done([input]);
            deferred.success.should.have.length(1);
            
        });

        it('should return one Deferred Object', function () {
            var deferred = Deferred();
            var input = function () {};
            var newDeferred = deferred.done([input]);
            newDeferred.should.be.an.instanceOf(Deferred);
            (newDeferred === deferred).should.be.true;
        });
    });
});
