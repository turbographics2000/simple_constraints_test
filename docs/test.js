btnTrueFalse.onclick = evt => {
    gUM(truefalseConstraints.textContent);
}
btnNumValue.onclick = evt => {
    gUM(numValueConstraints.textContent);
}
btnExactNumValue.onclick = evt => {
    gUM(exactConstraints.textContent);
}
btnMinMaxNumValue.onclick = evt => {
    gUM(minmaxConstraints.textContent);
}
function gUM(constraints) {
    if(preview.srcObject) {
        preview.srcObject.getTracks().forEach(track => {
            track.stop();
        });
        preview.srcObject = null;
    }
    constraintsPreview.innerHTML = constraints;
    var constraintsObj = JSON.parse(constraints);
    preview.onloadedmetadata = evt => {
        msg.textContent = preview.videoWidth + ' x ' + preview.videoHeight;
    }
    navigator.mediaDevices.getUserMedia(constraintsObj).then(stream => {
        preview.srcObject = stream;
    }).catch(ex => msg.textContent = ex.message);
}