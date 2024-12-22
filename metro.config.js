const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const { withMonicon } = require("@monicon/metro");

const config = getDefaultConfig(__dirname);

const configMonicon = withMonicon(config, {
  collections: ["majesticons", "svg-spinners"],
});

const configNativeWind = withNativeWind(configMonicon, {
  input: "./global.css",
});

module.exports = configNativeWind;
