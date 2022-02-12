var nav = document.getElementById("nav_darkSwitch");

window.onload = function(){
    var mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
    var isMobileDevice=false
    for(var i=0;i<mobileDevice.length;i++){
        if(navigator.userAgent.match(mobileDevice[i])){
            isMobileDevice=true
        }
    }
    if (isMobileDevice) {
        nav.classList.add('navbar-nav me-auto mb-2 mb-lg-0');
        nav.classList.remove('navbar-nav ms-auto flex-nowrap');
    }
    else{
        nav.classList.add('navbar-nav ms-auto flex-nowrap');
        nav.classList.remove('navbar-nav me-auto mb-2 mb-lg-0');
    }
    console.log(isMobileDevice)
}