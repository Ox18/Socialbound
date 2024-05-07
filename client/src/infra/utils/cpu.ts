var address,
  os = require("os"),
  ifaces = os.networkInterfaces();

export class CPU {
  constructor() {}

  captureIp() {
    for (var dev in ifaces) {
      // ... and find the one that matches the criteria
      var iface = ifaces[dev].filter(function (details: any) {
        return details.family === 4 && details.internal === false;
      });

      if (iface.length > 0) address = iface[0].address;
    }
    return address;
  }
}
