$(document).ready(function(){$('#message').text(getBluetoothApi())})

var scanButton = document.getElementById('scanForDevices');

function getBluetoothApi() {
    return JSON.stringify(navigator.bluetooth) || "No web bluetooth API."
}

function scanForDevices() {
    navigator.bluetooth.requestDevice({ filters: [{ services: ['device_information'] }] })
    .then(device => {
        console.log('device', device);
    })
    .catch(error => { console.log(error); });
}

scanButton.addEventListener('click', scanForDevices);
