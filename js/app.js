$(document).ready(function(){$('#message').text(getBluetoothApi())})

var scanButton = document.getElementById('scanForDevices');

function getBluetoothApi() {
    return JSON.stringify(navigator.bluetooth) || "No web bluetooth API."
}

function scanForDevices() {
    navigator.bluetooth.requestDevice({ 
        // filters: [{ services: ['device_information'] }]         
        filters: [{
            services: [0x1234, 0x12345678, 'b9407f30-f5f8-aff9-25556b57fe6d']
        }] 
    })
    .then(device => {
        console.log('device', device);
    })
    .catch(error => { console.log(error); });
}

scanButton.addEventListener('click', scanForDevices);
