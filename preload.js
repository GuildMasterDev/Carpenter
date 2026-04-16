const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('carpenter', {
  isElectron: true,
  platform: process.platform,
});
