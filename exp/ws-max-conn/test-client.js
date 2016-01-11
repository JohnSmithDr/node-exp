'use strict';

var EventEmitter = require('events');

class MSClient extends EventEmitter {
    
  constructor(host, port) {
    super();
    this.ws = null;
    this.clientId = null;
    this.serverId = null;
    this.host = host;
    this.port = port;
  }
  
  init() {
    var ws = new WebSocket(`ws://${this.host}:${this.port}`);
    
    ws.on('open', () => {
      this.clientId = ws._socket.localAddress + ':' + ws._socket.localPort;
      this.serverId = ws._socket.remoteAddress + ':' + ws._socket.remotePort;
      console.log('client %s online !!!', this.clientId);
    });
    
    ws.on('close', () => {
      console.log('client %s offline !!!', this.clientId);
    });
    
    ws.on('error', err => {
      console.error(err);
    });
    
    ws.on('message', msg => {
      console.log('client (%s) received message from server (%s):', this.clientId, this.serverId, msg);
    });
    
    this.ws = ws;
  }
  
}

module.exports = MSClient;
