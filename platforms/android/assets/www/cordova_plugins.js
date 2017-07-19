cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-backbutton.Backbutton",
        "file": "plugins/cordova-plugin-backbutton/www/Backbutton.js",
        "pluginId": "cordova-plugin-backbutton",
        "clobbers": [
            "navigator.Backbutton"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-splashscreen": "4.0.3",
    "cordova-plugin-backbutton": "0.3.0"
};
// BOTTOM OF METADATA
});