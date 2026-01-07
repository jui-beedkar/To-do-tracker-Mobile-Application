const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.blockList = [
  /.*ElevatedDiagnostics.*/
];

module.exports = config;
