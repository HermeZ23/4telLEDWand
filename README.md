A web UI that can read `.touchosc` layout files and send OSC messages via a node.js proxy.

### How to Use
Open https://hermez23.github.io/4telLEDWand/ and choose a layout file (e.g. from the `layouts` folder).
**Locally:*** open `index.html` in browser.

### Backend
To translate from websocket to native OSC messages a small proxy needs to be started.
Start server via `npm install && node ws2osc.js`

### About
Uses [OSC.js](https://github.com/colinbdclark/osc.js/) to control [PixelController](https://github.com/master-lincoln/PixelController
) by reading a [TouchOSC layout](https://hexler.net/docs/touchosc-editor-controls-edit).

For general project info see [other README](4telLEDwand.md)

### ToDo

* complete documentation
  * LED type
  * Raspi setup
  * drilling, wiring, bricking
  * how to operate
* add pictures
* create a list of needed things for redoing
* unzip from touchosc via [zip.js](https://github.com/gildas-lormeau/zip.js) ([example](https://github.com/gildas-lormeau/zip.js/blob/gh-pages/demos/demo2.js)
