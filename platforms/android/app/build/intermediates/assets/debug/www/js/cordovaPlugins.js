/* Description:
 *
 *
 * File: <cordovaPlugins.js> Author: <Aleksandar Mitkovski>
 * Datum: <24.03.2017> Version: <1.0>
 *
 */


function onBodyLoad() {
    document.addEventListener("deviceready", onDeviceReady,

    false);
}

function onDeviceReady() {
    var element = document.getElementById("device");
    element.innerHTML =
        'device platform: ' + device.platform + "<br>" +
        'device model: ' + device.model  + "<br>" +
        'OS Version: ' + device.version + "<br>" +
        'Cordova Version: ' + device.cordova;
    // Wieso funzt dat nit?
    //document.getElementById("cordovaBtn").addEventListener("click", dialogAlert());
    if (cordova.platformId == 'android ') {
        StatusBar.hide();
    }
}

if (typeof AndroidFullScreen !== 'undefined') {   // Fullscreen plugin exists ?
    function errorFunction(error) { console.error(error); }
    AndroidFullScreen.isSupported(AndroidFullScreen.immersiveMode, errorFunction);
}

function dialogAlert() {

    var message = "";
    var title = "CORDOVA ALERT";
    var buttonName = "Danke für die Info";
    var counter;
    setTimeout(function () {
        if (counter === 0) {
            message = "Es gibt keine neuen Aufgaben!";
        } else {
            message = " Es gibt " + counter + " neue Aufgaben";
        }

        console.log("Vor - Callback");

        navigator.notification.alert(message, checkIfNewTasks(), title, buttonName);
        counter = checkIfNewTasks();
    }, 1000);


    function callbackAlert(){
        console.log("Callback");
    }

}
