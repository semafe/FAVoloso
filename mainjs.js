function showTwine() {
    var bar = document.getElementById('demobar');
    var labelTwine = document.getElementById('proTwine');
    var labelAnim = document.getElementById('proAnim');
    var labelUnity = document.getElementById('proUnity');
    var labelWiref = document.getElementById('proWirefr');
    var demo = document.getElementById('twine');
    bar.style.width = "25%";
    $( ".demoel" ).css("display", "none");
    labelTwine.style.color = "black";
    labelAnim.style.color = "gray";
    labelUnity.style.color = "gray";
    labelWiref.style.color = "gray";
    demo.style.display = "block";
}

function showVideo() {
    var bar = document.getElementById('demobar');
    var labelTwine = document.getElementById('proTwine');
    var labelAnim = document.getElementById('proAnim');
    var labelUnity = document.getElementById('proUnity');
    var labelWiref = document.getElementById('proWirefr');
    var demo = document.getElementById('animation');
    bar.style.width = "50%";
    $( ".demoel" ).css("display", "none");
    demo.style.display = "block";
    labelTwine.style.color = "black";
    labelAnim.style.color = "black";
    labelUnity.style.color = "gray";
    labelWiref.style.color = "gray";
}

function showUnity() {
    var bar = document.getElementById('demobar');
    var labelTwine = document.getElementById('proTwine');
    var labelAnim = document.getElementById('proAnim');
    var labelUnity = document.getElementById('proUnity');
    var labelWiref = document.getElementById('proWirefr');
    var demo = document.getElementById('unity');
    bar.style.width = "75%";
    $( ".demoel" ).css("display", "none");
    demo.style.display = "block";
    labelTwine.style.color = "black";
    labelAnim.style.color = "black";
    labelUnity.style.color = "black";
    labelWiref.style.color = "gray";
}

function showWirefr() {
    var bar = document.getElementById('demobar');
    var labelTwine = document.getElementById('proTwine');
    var labelAnim = document.getElementById('proAnim');
    var labelUnity = document.getElementById('proUnity');
    var labelWiref = document.getElementById('proWirefr');    
    var demo = document.getElementById('wireframe');
    bar.style.width = "100%";
    $( ".demoel" ).css("display", "none");
    demo.style.display = "block";
    labelTwine.style.color = "black";
    labelAnim.style.color = "black";
    labelUnity.style.color = "black";
    labelWiref.style.color = "black";   
}