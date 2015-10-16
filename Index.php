<title>Eddy Lu</title>
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
<link rel="icon" href="/favicon.ico" type="image/x-icon">

<html>

<style>
a:not(navBar):link {text-decoration:underline; color:#000000;}
a:not(navBar):visited {text-decoration:underline; color:#000000;}
a:not(navBar):hover {color:#FFCC00;}
a:not(navBar):active {text-decoration:underline; border-bottom: 2px solid #FFCC00; color:#FFCC00;}
    
a, img {
border:none;
outline:none
}
</style>

<?php include 'statRecorder.php';?>

<center>
<body bgcolor = #808080 style="font-family: Calibri"">

<div id="container" style="width:1150px; box-shadow: 0 0 35px rgba(0,0,0,1); margin-top: 20px;">

<div id="header" style="background-color:#333333;width:1110px;height:144px;text-align:left;padding:18px 20px 5px 20px;">

<div id="leftHeader" style="float: left; visibility: hidden;">
<font size="20" face="calibri" color="white"><b>Eddy</font><font size="20" face="calibri" color="FFCC00"> Lu</b></font>
<font size="2"><br><br></font>
<font size="5" face="arial" color="white">
Computer Engineering
<br>Student at McGill University</font></div>
<div style="float: right;text-align:right; vertical-align: bottom">

        <a href="mailto:eddylu@live.ca" target="_blank" style="text-decoration: none">
        <img id="icon1" src="omicon.png" onmouseover="this.src='omiconw_reduced.png'" onmouseout="this.src='omicon_reduced.png'" width="40" height="40" style="vertical-align: bottom; visibility: hidden;">
        </a>
        <td><a href="http://www.facebook.com/eddylu94/" target="_blank" style="text-decoration: none">    
        <img id="icon2" src="oficon.png" onmouseover="this.src='oficonw_reduced.png'" onmouseout="this.src='oficon_reduced.png'" width="40" height="40" style="vertical-align: bottom; visibility: hidden;">
        </a>
        <a href="http://www.twitter.com/eddylu94/" target="_blank" style="text-decoration: none">
        <img id="icon3" src="oticon.png" onmouseover="this.src='oticonw_reduced.png'" onmouseout="this.src='oticon_reduced.png'" width="40" height="40" style="vertical-align: bottom; visibility: hidden;">
        </a>
        <a href="http://www.google.com/+eddylu94/" target="_blank" style="text-decoration: none">
        <img id="icon4" src="ogicon.png" onmouseover="this.src='ogiconw_reduced.png'" onmouseout="this.src='ogicon_reduced.png'" width="40" height="40" style="vertical-align: bottom; visibility: hidden;">
        </a>

        <font face="verdana" color=white size="6"><b><p id="headerTitle"></p></b></font>
   
</div>

</div>

<!--
<div id="line" style="background-image: url(Line.jpg);clear:both;text-align:center;height:5px;width:1100px;vertical-align:middle"></div>
-->

<div id="menu" style="background-color: #333333;width:1150px;height:40px;text-align:center;">

<!--<link rel="stylesheet" type="text/css" href="NavigationBar.css">-->

<font size="3" face="arial"><b>
<center>

<!--
<table>
<tr>
<td style='padding:0px 15px 0px 15px'><a href="Home.php"><b>Home</b></a></td>
<td style='padding:0px 15px 0px 15px'><a href="Education.php"><b>Education</b></a></td>
<td style='padding:0px 15px 0px 15px'><a href="Experience.php"><b>Experience</b></a></td>
<td style='padding:0px 15px 0px 15px'><a href="Projects.php"><b>Projects</b></a></td>
<td style='padding:0px 15px 0px 15px'><a href="Extracurriculars.php"><b>Extracurriculars</b></a></td>
<td style='padding:0px 15px 0px 15px'><a href="Resume.php"><b>Resume</b></a></td>
</tr>
</table>
-->

<style>
    ul {
        text-align: left;
        list-style: none;
        position: relative;
        margin: 0 auto;
        display: inline-table;
    }
    ul li {
        float: left;
        left: -10px;
        margin: 0px 10px 0px 10px;  
    }
    ul li a {
        text-align: center;
        display: inline-block;
        padding: 10px 10px 0px 10px;
        height: 30px;  
    }
    ul li a:hover {
        background-color: #333333;
        text-decoration: none;
        color: #FFFFFF;
    }
    ul li:hover > ul {
        display: block;
        background-color: #333333;
        z-index: 90;
    }
    ul ul {
        display: none;
        position: absolute;
        top: 100%;
        padding: 0px;
    }
    ul ul li {
        float: none;
        position: relative;
        z-index: 100;
    }
    ul ul li a {
        visibility: visible;
        background-color: #333333;
        color: #000000;
    }
    ul ul li a:hover {
        border-bottom: 2px solid #FFCC00;
    }
</style>

<ul class="navBar">
    
    <li><a style="text-decoration:none; color:#FFFFFF;" href="../Home.php">HOME</a></li>
    <li><a style="text-decoration:none; color:#FFFFFF;" href="../Education.php">EDUCATION</a>
        <ul>
            <li><a style="text-decoration:none; color:#FFFFFF;" href="../Education.php#mcgill" style="text-decoration: none;">McGill University</a></li>
            <li><a style="text-decoration:none; color:#FFFFFF;" href="../Education.php#highschool" style="text-decoration: none;">High School</a></li>
        </ul>
    </li>
    <li><a style="text-decoration:none; color:#FFFFFF;" href="../Experience.php">EXPERIENCE</a>
        <ul>
            <li><a style="text-decoration:none; color:#FFFFFF;" href="../Experience.php#alu" style="text-decoration: none;">Alcatel-Lucent</a></li>
            <li><a style="text-decoration:none; color:#FFFFFF;" href="../Experience.php#mcgill" style="text-decoration: none;">McGill Lab</a></li>
            <li><a style="text-decoration:none; color:#FFFFFF;" href="../Experience.php#princeton" style="text-decoration: none;">Princeton Lab</a></li>
            <li><a style="text-decoration:none; color:#FFFFFF;" href="../OtherExperience.php" style="text-decoration: none;">Other</a></li>
        </ul>
    </li>
    <li><a style="text-decoration:none; color:#FFFFFF;" href="../Projects.php">PROJECTS</a>
        <ul>
            <li><a style="text-decoration:none; color:#FFFFFF;" href="../Projects.php#com" style="text-decoration: none;">Modem Interface</a></li>
            <li><a style="text-decoration:none; color:#FFFFFF;" href="../Projects.php#stock" style="text-decoration: none;">Stock Analyzer</a></li>
            <li><a style="text-decoration:none; color:#FFFFFF;" href="../Projects.php#chess" style="text-decoration: none;">Chess Game</a></li>
            <li><a style="text-decoration:none; color:#FFFFFF;" href="../Projects.php#concentration" style="text-decoration: none;">Concentration Game</a></li>
            <li><a style="text-decoration:none; color:#FFFFFF;" href="../Projects.php#dsd" style="text-decoration: none;">FPGA Music Box</a></li>
            <li><a style="text-decoration:none; color:#FFFFFF;" href="../Projects.php#dpm" style="text-decoration: none;">NXT Robot</a></li>
            <li><a style="text-decoration:none; color:#FFFFFF;" href="../Projects.php#ecsess" style="text-decoration: none;">ECSESS Robot</a></li>
            <li><a style="text-decoration:none; color:#FFFFFF;" href="../Projects.php#bomberman" style="text-decoration: none;">Bomberman Game</a></li>
        </ul>
    </li>
    <li><a style="text-decoration:none; color:#FFFFFF;" href="../Extracurriculars.php">EXTRACURRICULARS</a>
        <ul>
            <li><a style="text-decoration:none; color:#FFFFFF;" href="../Extracurriculars.php#soccer" style="text-decoration: none;">Soccer</a></li>
            <li><a style="text-decoration:none; color:#FFFFFF;" href="../Extracurriculars.php#hackathons" style="text-decoration: none;">Hackathons</a></li>
            <li><a style="text-decoration:none; color:#FFFFFF;" href="../Extracurriculars.php#meetups" style="text-decoration: none;">Meetups</a></li>
        </ul>
    </li>
    <li><a style="text-decoration:none; color:#FFFFFF;" href="../Resume.php">RESUME</a>
        <ul>
            <li><a target="_blank" style="text-decoration:none; color:#FFFFFF;" href="../Resume.pdf" style="text-decoration: none;">Printable</a></li>
        </ul>
    </li>
</ul>

</center>
</b></font>
</div>

<div id="goldLine" style="background-image: url(Menu.jpg);width:1150px;height:8px;text-align:center;"></div>

<div id="contentBox" style="background-color:#FFFFFF;overflow:auto;width:1150px;float:left;text-align:left;padding: 15px 0px 15px 0px;">

<div id="content" style="padding: 0px 50px 0px 50px; margin: 0px; visibility: hidden;">

<script src='indexTransition.js' type='text/javascript'></script>

<!--Beginning of Content-->

<img id="overviewPic" src="propic_cropped_reduced.jpg" align="right" width="270" height="270" hspace="10" vspace="5">

<font size = "5" face="arial"><p><b>Hello! I'm Eddy</b></p></font>

<font size = "4">

<p>I am an Electrical and Computer Engineering student at McGill University graduating in May 2016.
</p>

<p>I have most recently completed a Software Development co-op term at Alcatel Lucent.</p>

<p><i>No frameworks, templates, bootstraps were used as all content on this website were created from scratch using HTML, CSS, and JavaScript.</i>
</p>

</font>

<!--End of Content-->

</div>

</div>

<div id="line" style="background-image: url(Line.jpg);clear:both;text-align:center;height:0px;width:1150px;vertical-align:middle"></div>

<div id="goldLine" style="background-image: url(MenuReversed.JPG);width:1150px;height:8px;text-align:center;"></div>

<div id="footer" style="background-color:#333333;width:1120px;height:20px;text-align:right;padding:15px;">
        
<div style="float: left;"><font size="3" color="white">&copy; 2014-2015 Eddy Lu</font></div>
<div style="float: right;">
    <a style="text-decoration:none;" href="About.php"><font size="3" color="FFCC00" face="arial"><b>About</b></font></a>
    &nbsp;
    <a style="text-decoration:none;" href="Statistics.php"><font size="3" color="FFCC00" face="arial"><b>Statistics</b></font></a>
    &nbsp;
    <a style="text-decoration:none;" href="Contact.php"><font size="3" color="FFCC00" face="arial"><b>Contact</b></font></a>
</div>    
    
</div>

</div>


</center>

</body>

</html>