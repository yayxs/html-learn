const liveServer = require('live-server')

const params = {
  port: 2222,
  host: '0.0.0.0', // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
  open: false, // When false, it won't load your browser by default.
  file: 'svg.html', // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
  wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
}
liveServer.start(params)
