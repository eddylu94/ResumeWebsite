function init() {   

    /*intialize positions*/

    //leftHeader
	var leftHeader = document.getElementById('leftHeader');
	var leftHeaderIntensity = 0;
	leftHeader.style.opacity = leftHeaderIntensity;
    leftHeader.style.visibility = 'visible';
	var leftHeaderPosition = 10;
    leftHeader.style.position='relative';
    leftHeader.style.left = leftHeaderPosition+'px';

    //content
	var content = document.getElementById('content');
	var intensity = 0;
	content.style.opacity = intensity;
    content.style.visibility = 'visible';
	var position = -10;
    content.style.position='relative';
    content.style.left = position+'px';

    //icon1
    var icon1 = document.getElementById('icon1');
	var icon1Intensity = 0;
	icon1.style.opacity = icon1Intensity;
    icon1.style.visibility = 'visible';
	var icon1Position = -10;
    icon1.style.position='relative';
    icon1.style.left = icon1Position+'px';

    //icon2
    var icon2 = document.getElementById('icon2');
	var icon2Intensity = 0;
	icon2.style.opacity = icon2Intensity;
    icon2.style.visibility = 'visible';
	var icon2Position = -10;
    icon2.style.position='relative';
    icon2.style.left = icon2Position+'px';

    //icon3
    var icon3 = document.getElementById('icon3');
	var icon3Intensity = 0;
	icon3.style.opacity = icon3Intensity;
	icon3.style.visibility = 'visible';
    var icon3Position = -10;
    icon3.style.position='relative';
    icon3.style.left = icon3Position+'px';

    //icon4
    var icon4 = document.getElementById('icon4');
	var icon4Intensity = 0;
	icon4.style.opacity = icon4Intensity;
    icon4.style.visibility = 'visible';
	var icon4Position = -10;
    icon4.style.position='relative';
    icon4.style.left = icon4Position+'px';

    /*intervals*/

    //leftHeader
	var runLeftHeaderInterval = setInterval(leftHeaderIntervalFunction, 1);
    function leftHeaderIntervalFunction() {
        if (leftHeaderIntensity < 1) {
            leftHeaderIntensity += .01;
            leftHeaderPosition -= .1;
            leftHeader.style.opacity = leftHeaderIntensity;
            leftHeader.style.left = leftHeaderPosition + 'px';
        }
        else {
            clearInterval(runLeftHeaderInterval);
        }
    }
    
    //content
    setTimeout(runIntervalFunction, 700);
    function runIntervalFunction() {
        var runInterval = setInterval(intervalFunction, 1);
    }
    function intervalFunction() {
        if (intensity < 1) { 
            intensity += .01;
            position += .1;
            content.style.opacity = intensity;
            content.style.left = position + 'px';
        }
       else {
            clearInterval(runInterval);
        }
    }

    //icon1
    setTimeout(runIcon1IntervalFunction, 2400);
    function runIcon1IntervalFunction() {
        var runIcon1Interval = setInterval(icon1IntervalFunction, 1);
    }
    function icon1IntervalFunction() {
        if (icon1Intensity < 1) { 
            icon1Intensity += .01;
            icon1Position += .1;
            icon1.style.opacity = icon1Intensity;
            icon1.style.left = icon1Position + 'px';
        }
       else {
            clearInterval(runIcon1Interval);
        }
    }

    //icon2
    setTimeout(runIcon2IntervalFunction, 2100);
    function runIcon2IntervalFunction() {
        var runIcon2Interval = setInterval(icon2IntervalFunction, 1);
    }
    function icon2IntervalFunction() {
        if (icon2Intensity < 1) { 
            icon2Intensity += .01;
            icon2Position += .1;
            icon2.style.opacity = icon2Intensity;
            icon2.style.left = icon2Position + 'px';
        }
       else {
            clearInterval(runIcon2Interval);
        }
    }
    
    //icon3
    setTimeout(runIcon3IntervalFunction, 1800);
    function runIcon3IntervalFunction() {
        var runIcon3Interval = setInterval(icon3IntervalFunction, 1);
    }
    function icon3IntervalFunction() {
        if (icon3Intensity < 1) { 
            icon3Intensity += .01;
            icon3Position += .1;
            icon3.style.opacity = icon3Intensity;
            icon3.style.left = icon3Position + 'px';
        }
       else {
            clearInterval(runIcon3Interval);
        }
    }

    //icon4
    setTimeout(runIcon4IntervalFunction, 1500);
    function runIcon4IntervalFunction() {
        var runIcon4Interval = setInterval(icon4IntervalFunction, 1);
    }
    function icon4IntervalFunction() {
        if (icon4Intensity < 1) { 
            icon4Intensity += .01;
            icon4Position += .1;
            icon4.style.opacity = icon4Intensity;
            icon4.style.left = icon4Position + 'px';
        }
       else {
            clearInterval(runIcon4Interval);
        }
    }



}

window.onload = init;