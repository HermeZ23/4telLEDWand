#!/bin/env node

var PORT = 80;

var osc = require("osc"),
    http = require("http"),
    express = require("express"),
    WebSocket = require("ws");

// Create an Express server app
// and serve up a directory of static files.
var app = express(),
    server = app.listen(PORT);

app.use("/", express.static(__dirname));

// Listen for Web Socket requests.
var wss = new WebSocket.Server({
    server: server
});

// Create an osc.js UDP Port listening on port 57121.
var udpPort = new osc.UDPPort({
    localAddress: "0.0.0.0",
    localPort: 57121,
    metadata: true
});


// Listen for Web Socket connections.
wss.on("connection", function (socket) {
    var socketPort = new osc.WebSocketPort({
        socket: socket,
        metadata: true
    });

    socketPort.on("message", function (oscMsg) {
        console.log("An OSC Message was received!", oscMsg);
        console.log(oscMsg.address, oscMsg.args)
        udpPort.send({
            address: oscMsg.address,
            args: oscMsg.args
        }, "127.0.0.1", 9000);
    });
});


// Listen for incoming OSC bundles.
udpPort.on("bundle", function (oscBundle, timeTag, info) {
    console.log("An OSC bundle just arrived for time tag", timeTag, ":", oscBundle);
    console.log("Remote info is: ", info);
});

// Open the socket.
udpPort.open();


// When the port is read, send an OSC message to, say, SuperCollider
udpPort.on("ready", function () {
  console.log('udpPort ready')
});
