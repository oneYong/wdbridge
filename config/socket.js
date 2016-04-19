/**
 * Created by cloud4u on 2016-04-19.
 */
var axon = require('axon');
var socket = axon.socket('pub-emitter');

socket.connect(1024,'127.0.0.1');

module.exports = socket;