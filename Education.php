<?php include 'Header.php';?>

<script>
var titleString="Education";
document.getElementById("headerTitle").innerHTML = titleString;
</script>

<table cellpadding="10">

<tr>
<td>
   <a id="mcgill"></a>
   <center><a href="http://www.mcgill.ca/ece/" target="_blank"><img src="McgillLogo_reduced.png" height="71" width="56"></a></center>
</td>
<td>
    <font size="5"><b>McGill University</font>
    <font size="4"><br>Montr&eacute;al, Qu&eacute;bec</b>, 2012 - 2016 (expected)
    <br>Bachelor of Engineering, Computer Engineering
    </font>
</td>
</tr>
<tr>
<td>
    
</td>   
<td>
    I am currently a fourth-year Computer Engineering student at McGill.
    <br><br>
    <?php include 'EnrolledCourses.php';?>
    <br>
    <?php include 'CompletedCourses.php';?>
</td>

</tr>
<tr>
<td>
    <a id="highschool"></a>
    <center><a href="http://whs.westfieldnjk12.org/pages/Westfield_High_School/" target="_blank"><img src="whsLogo_reduced.png" height="74" width="76"></a></center>
</td>
<td>
    <font size="5"><b>Westfield Senior High School</font>
    <font size="4"><br>Westfield, New Jersey</b>, 2008 - 2012
    <br>US High School Diploma
    </font>
</td>
</tr>
<tr>
<td>
    
</td>
<td>
    During high school, I enrolled in various honors courses as well as six Advanced Placement (AP) courses.
    <br>
        <?php include 'APCourses.php';?>
</td>
</tr>

<tr>
<td>
    <a id="online"></a>
    <center><a href="https://www.coursera.org/course/ml" target="_blank"><img src="coursera_reduced.jpeg" height="17" width="86"></a></center>
</td>
<td>
    <font size="4"><b>Sept. 2014</b><br>Received a <a href="coursera.pdf" target="_blank"><b>Certificate of Completion</b></a> for the <a href="https://www.coursera.org/course/ml" target="_blank"><b>Machine Learning</b></a> course,
     taught by Professor Andrew Ng of Stanford University, for receiving an overall grade of at least 85 % on quizzes and MATLAB assignments.</font>
</td>
</tr>

</table>

<?php include 'Footer.php';?>