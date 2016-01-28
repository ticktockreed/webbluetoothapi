
    alert('WebComponentsReady');
    var scanButton = document.getElementById('scanForDevices');

    function scanForDevices() {
        navigator.bluetooth.requestDevice({ filters: [{ services: ['device_information'] }] })
        .then(device => {
            console.log('device', device);
        })
        .catch(error => { console.log(error); });
    }

    scanButton.addEventListener('click', scanForDevices);