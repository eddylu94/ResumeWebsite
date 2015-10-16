function init() {   
/*
    var circle1 = document.getElementById('circle1');
    var circle2 = document.getElementById('circle2');
    var circle3 = document.getElementById('circle3');
    var circle4 = document.getElementById('circle4');
    var circle5 = document.getElementById('circle5');
    
    circle1.style.opacity = .5;
    circle2.style.opacity = .5;
    circle3.style.opacity = .5;
    circle4.style.opacity = .5;
    circle5.style.opacity = .5;

    circle1.onmouseover = function () {
        circle1.style.opacity = 1;
    };
    circle2.onmouseover = function () {
        circle2.style.opacity = 1;
    };
    circle3.onmouseover = function () {
        circle3.style.opacity = 1;
    };
    circle4.onmouseover = function () {
        circle4.style.opacity = 1;
    };
    circle5.onmouseover = function () {
        circle5.style.opacity = 1;
    };

    */
    /*
	var content = document.getElementById('content');
	var intensity = 0;
	content.style.opacity = intensity;
	var position = -10;
    content.style.position='relative';
    content.style.left = position+'px';

    var headerTitle = document.getElementById('headerTitle');
	var headerIntensity = 0;
	headerTitle.style.opacity = headerIntensity;
	var headerPosition = -10;
    headerTitle.style.position='relative';
    headerTitle.style.left = headerPosition+'px';

	var runInterval = setInterval(intervalFunction, 1);

    function intervalFunction() {
        intensity += .01;
        position += .1;
        content.style.opacity = intensity;
        content.style.left = position + 'px';
        if (intensity >= 1) {
            clearInterval(runInterval);
        }
    }
    
    setTimeout(runHeaderIntervalFunction, 1000);

    function runHeaderIntervalFunction() {
        var runHeaderInterval = setInterval(headerIntervalFunction, 1);
    }

    function headerIntervalFunction() {
        if (headerIntensity < 1) {
            headerIntensity += .01;
            headerPosition += .1;
            headerTitle.style.opacity = headerIntensity;
            headerTitle.style.left = headerPosition + 'px';
        }
        else {
            clearInterval(runHeaderInterval);
        }
    }
    */
}

window.onload = init;