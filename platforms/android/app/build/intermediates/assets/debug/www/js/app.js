function onDeviceReady() {
    if (navigator.connection.type == Connection.NONE) {
        navigator.notification.alert('An internet connection is required to continue');
    } else {
        window.location="https://evening-waters-97508.herokuapp.com/\"";
    }
}
document.addEventListener("deviceready", onDeviceReady, false);
