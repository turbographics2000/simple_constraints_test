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
    constraintsPreview.innerHTML = constraints;
    var constraintsObj = JSON.parse(constraints);
    preview.onloadedmetadata = evt => {
        msg.textContent = preview.videoWidth + ' x ' + preview.videoHeight;
    }
    navigator.mediaDevices.getUserMedia(constraintsObj).then(stream => {
        preview.srcObject = stream;
    });
}