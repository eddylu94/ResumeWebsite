<?php include 'Header.php';?>

<script>
var titleString="Resume";
document.getElementById("headerTitle").innerHTML = titleString;
</script>

<p style="text-align:right">
<a href="Resume.pdf" target="_blank"><img src="pdficon_small.png"></a>
<font size="4" align="right"><a href="Resume.pdf" target="_blank"><b> Printable Format</b></a></font>
</p>
<br>
<center>
    <embed src="Resume.pdf" width=850px height=1100px>
</center>

<br>

<?php include 'Footer.php';?>