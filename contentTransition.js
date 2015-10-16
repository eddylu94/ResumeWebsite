function init() {   

	var content = document.getElementById('content');
	var intensity = 0;
	content.style.opacity = intensity;
    content.style.visibility = 'visible';
	var position = -10;
    content.style.position='relative';
    content.style.left = position+'px';

    var headerTitle = document.getElementById('headerTitle');
	var headerIntensity = 0;
	headerTitle.style.opacity = headerIntensity;
    headerTitle.style.visibility = 'visible';
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

}

window.onload = init;