function init() {   

    var circle1 = document.getElementById('circle1');
    var circle2 = document.getElementById('circle2');
    var circle3 = document.getElementById('circle3');
    var circle4 = document.getElementById('circle4');
    var circle5 = document.getElementById('circle5');
    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');
    var image3 = document.getElementById('image3');
    var image4 = document.getElementById('image4');
    var image5 = document.getElementById('image5');
    var caption1 = document.getElementById('caption1');
    var caption2 = document.getElementById('caption2');
    var caption3 = document.getElementById('caption3');
    var caption4 = document.getElementById('caption4');
    var caption5 = document.getElementById('caption5');
    
    circle1.style.opacity = 1;
    circle2.style.opacity = .5;
    circle3.style.opacity = .5;
    circle4.style.opacity = .5;
    circle5.style.opacity = .5;
    circle1.style.visibility = 'visible';
    circle2.style.visibility = 'visible';
    circle3.style.visibility = 'visible';
    circle4.style.visibility = 'visible';
    circle5.style.visibility = 'visible';
    
    image1.style.opacity = 1;
    image1.style.display = 'block';
    caption1.style.display = 'block';

    circle1.onmouseover = function () {
        clearInterval(runSlideTransitions);
        if (image1.style.display == 'block') {
        }
        else {
            $("#image1").stop(true, true).fadeOut();
            $("#caption1").stop(true, true).fadeOut();
            circle1.style.opacity = 1;
            circle2.style.opacity = .5;
            circle3.style.opacity = .5;
            circle4.style.opacity = .5;
            circle5.style.opacity = .5;
            image1.style.display = 'block';
            image2.style.display = 'none';
            image3.style.display = 'none';
            image4.style.display = 'none';
            image5.style.display = 'none';
            caption1.style.display = 'block';
            caption2.style.display = 'none';
            caption3.style.display = 'none';
            caption4.style.display = 'none';
            caption5.style.display = 'none';
        }
    };
    circle2.onmouseover = function () {
        clearInterval(runSlideTransitions);
        if (image2.style.display == 'block') {
        }
        else {
            $("#image2").stop(true, true).fadeOut();
            $("#caption2").stop(true, true).fadeOut();
            circle1.style.opacity = .5;
            circle2.style.opacity = 1;
            circle3.style.opacity = .5;
            circle4.style.opacity = .5;
            circle5.style.opacity = .5;
            image1.style.display = 'none';
            image2.style.display = 'block';
            image3.style.display = 'none';
            image4.style.display = 'none';
            image5.style.display = 'none';
            caption1.style.display = 'none';
            caption2.style.display = 'block';
            caption3.style.display = 'none';
            caption4.style.display = 'none';
            caption5.style.display = 'none';
        }
    };
    circle3.onmouseover = function () {
        clearInterval(runSlideTransitions);
        if (image3.style.display == 'block') {
        }
        else {
            $("#image3").stop(true, true).fadeOut();
            $("#caption3").stop(true, true).fadeOut();
            circle1.style.opacity = .5;
            circle2.style.opacity = .5;
            circle3.style.opacity = 1;
            circle4.style.opacity = .5;
            circle5.style.opacity = .5;
            image1.style.display = 'none';
            image2.style.display = 'none';
            image3.style.display = 'block';
            image4.style.display = 'none';
            image5.style.display = 'none';
            caption1.style.display = 'none';
            caption2.style.display = 'none';
            caption3.style.display = 'block';
            caption4.style.display = 'none';
            caption5.style.display = 'none';
        }
    };
    circle4.onmouseover = function () {
        clearInterval(runSlideTransitions);
        if (image4.style.display == 'block') {
        }
        else {
            $("#image4").stop(true, true).fadeOut();
            $("#caption4").stop(true, true).fadeOut(); circle1.style.opacity = .5;
            circle2.style.opacity = .5;
            circle3.style.opacity = .5;
            circle4.style.opacity = 1;
            circle5.style.opacity = .5;
            image1.style.display = 'none';
            image2.style.display = 'none';
            image3.style.display = 'none';
            image4.style.display = 'block';
            image5.style.display = 'none';
            caption1.style.display = 'none';
            caption2.style.display = 'none';
            caption3.style.display = 'none';
            caption4.style.display = 'block';
            caption5.style.display = 'none';
        }
    };
    circle5.onmouseover = function() {
        clearInterval(runSlideTransitions);
        if (image5.style.display == 'block') {
        }
        else {
            $("#image5").stop(true, true).fadeOut();
            $("#caption5").stop(true, true).fadeOut();
            circle1.style.opacity = .5;
            circle2.style.opacity = .5;
            circle3.style.opacity = .5;
            circle4.style.opacity = .5;
            circle5.style.opacity = 1;
            image1.style.display = 'none';
            image2.style.display = 'none';
            image3.style.display = 'none';
            image4.style.display = 'none';
            image5.style.display = 'block';
            caption1.style.display = 'none';
            caption2.style.display = 'none';
            caption3.style.display = 'none';
            caption4.style.display = 'none';
            caption5.style.display = 'block';
        }
    };

    runSlideTransitions = setInterval(nextTransition, 5500);

    var counter = 1;

    function nextTransition() {
        if (counter == 5) {
            fade5to1();
            counter = 1;
        }
        else {
            if (counter == 1) {
                fade1to2();
            }
            else if (counter == 2) {
                fade2to3();
            }
            else if (counter == 3) {
                fade3to4();
            }
            else {
                fade4to5();
            }
            counter++;
        }
    }

    function fade1to2(){
        circle1.style.opacity = .5;
        circle2.style.opacity = 1;
        $("#image1").fadeOut(3000);
        $("#image2").fadeIn(3000);
        $("#caption1").fadeOut(3000);
        $("#caption2").fadeIn(3000);
    }
    function fade2to3(){
        circle2.style.opacity = .5;
        circle3.style.opacity = 1;
        $("#image2").fadeOut(3000);
        $("#image3").fadeIn(3000);
        $("#caption2").fadeOut(3000);
        $("#caption3").fadeIn(3000);
    } 
    function fade3to4(){
        circle3.style.opacity = .5;
        circle4.style.opacity = 1;
        $("#image3").fadeOut(3000);
        $("#image4").fadeIn(3000);
        $("#caption3").fadeOut(3000);
        $("#caption4").fadeIn(3000);
    } 
    function fade4to5(){
        circle4.style.opacity = .5;
        circle5.style.opacity = 1;
        $("#image4").fadeOut(3000);
        $("#image5").fadeIn(3000);
        $("#caption4").fadeOut(3000);
        $("#caption5").fadeIn(3000);
    } 
    function fade5to1(){
        circle5.style.opacity = .5;
        circle1.style.opacity = 1;
        $("#image5").fadeOut(3000);
        $("#image1").fadeIn(3000);
        $("#caption5").fadeOut(3000);
        $("#caption1").fadeIn(3000);
    } 

    /*
    setTimeout(fade1to2, 3000);

    function fade1to2() {
        image1.style.opacity = 1;
        image2.style.opacity = .5;
        image2.style.display = block;
        intensityChange = 0;
        var runFade1to2 = setInterval(fading1to2, 1);
        image1.style.display = none;
        function fading1to2() {
            if (intensityChange < 1) {
                intensityChange += .01;
                image1.style.opacity = 1-intensityChange;
                image2.style.opacity = intensityChange;
            }
            else {
                clearInterval(runFade1to2);
            }
        }
    }
    */

    /*intialize positions*/

    //welcomeTitle
	var welcomeTitle = document.getElementById('welcomeTitle');
	var welcomeTitleIntensity = 0;
	welcomeTitle.style.opacity = welcomeTitleIntensity;
    welcomeTitle.style.visibility = 'visible';
	var welcomeTitlePosition = -10;
    welcomeTitle.style.position='relative';
    welcomeTitle.style.left = welcomeTitlePosition+'px';

    //slideshowPresentation
    var slideshowPresentation = document.getElementById('slideshowPresentation');
	var slideshowPresentationIntensity = 0;
	slideshowPresentation.style.opacity = slideshowPresentationIntensity;
    slideshowPresentation.style.visibility = 'visible';
	var slideshowPresentationPosition = -10;
    slideshowPresentation.style.position='relative';
    slideshowPresentation.style.left = slideshowPresentationPosition+'px';

    //enterButton
    var enterButton = document.getElementById('enterButton');
	var enterButtonIntensity = 0;
	enterButton.style.opacity = enterButtonIntensity;
    enterButton.style.visibility = 'visible';
	var enterButtonPosition = -10;
    enterButton.style.position='relative';
    enterButton.style.left = enterButtonPosition+'px';

    /*intervals*/

    //welcomeTitle
	var runWelcomeTitleInterval = setInterval(welcomeTitleIntervalFunction, 1);
    function welcomeTitleIntervalFunction() {
        if (welcomeTitleIntensity < 1) {
            welcomeTitleIntensity += .01;
            welcomeTitlePosition += .1;
            welcomeTitle.style.opacity = welcomeTitleIntensity;
            welcomeTitle.style.left = welcomeTitlePosition + 'px';
        }
        else {
            clearInterval(runWelcomeTitleInterval);
        }
    }
    
    //slideshowPresentation
    setTimeout(runSlideshowPresentationIntervalFunction, 800);
    function runSlideshowPresentationIntervalFunction() {
        var runSlideshowPresentationInterval = setInterval(slideshowPresentationIntervalFunction, 1);
    }
    function slideshowPresentationIntervalFunction() {
        if (slideshowPresentationIntensity < 1) {
            slideshowPresentationIntensity += .01;
            slideshowPresentationPosition += .1;
            slideshowPresentation.style.opacity = slideshowPresentationIntensity;
            slideshowPresentation.style.left = slideshowPresentationPosition + 'px';
        }
       else {
            clearInterval(runSlideshowPresentationInterval);
        }
    }

    //enterButton
    setTimeout(runEnterButtonIntervalFunction, 1600);
    function runEnterButtonIntervalFunction() {
        var runEnterButtonInterval = setInterval(enterButtonIntervalFunction, 1);
    }
    function enterButtonIntervalFunction() {
        if (enterButtonIntensity < 1) {
            enterButtonIntensity += .01;
            enterButtonPosition += .1;
            enterButton.style.opacity = enterButtonIntensity;
            enterButton.style.left = enterButtonPosition + 'px';
        }
       else {
            clearInterval(runEnterButtonInterval);
        }
    }
    
}

window.onload = init;