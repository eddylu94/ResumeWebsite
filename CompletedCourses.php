<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>
    $(document).ready(function () {
        $("#clickCourses").click(function () {
            if (completedCourses.style.display == 'none') {
                clickCourses.innerHTML = '<font size="4"><b>Completed Courses &#9660;:</b></font>';
                $("#completedCourses").slideDown("slow");
            }
            else {
                clickCourses.innerHTML = '<font size="4"><b>Completed Courses &#9658;</b></font>';
                $("#completedCourses").slideUp("slow");
            }
        });
    });
</script>

<div id="clickCourses" style="cursor: pointer;"><font size="4"><b>Completed Courses &#9658;</b></font></div>
<div id="completedCourses" style="display: none;">
    <br>
<table>
<tr><td><b>ECSE 211</b></td><td>Design Principles and Methods</td></tr>
<tr><td><b>ECSE 291</b></td><td>Electrical Measurements Lab</td></tr>
<tr><td><b>ECSE 306</b></td><td>Fundumetals of Signals and Systems</td></tr>
<tr><td><b>ECSE 322</b></td><td>Computer Engineering</td></tr>
<tr><td><b>ECSE 330</b></td><td>Introduction to Electronics</td></tr>
<tr><td><b>ECSE 200</b></td><td>Electric Circuits 1</td></tr>
<tr><td><b>ECSE 210</b></td><td>Electric Circuits 2</td></tr>
<tr><td><b>ECSE 221</b></td><td>Introduction to Computer Engineering</td></tr>
<tr><td><b>ECSE 321</b></td><td>Introduction to Software Engineering</td></tr>
<tr><td><b>ECSE 334</b></td><td>Introduction to Microelectronics</td></tr>
<tr><td><b>ECSE 323</b></td><td>Digital Systems Design</td></tr>
<tr><td><b>ECSE 305</b></td><td>Probability and Random Signals</td></tr>
<tr><td><b>ECSE 427</b></td><td>Operating Systems</td></tr>
<tr><td><b>COMP 202</b></td><td>Foundations of Programming</td></tr>
<tr><td><b>COMP 250</b></td><td>Introduction to Computer Science</td></tr>
<tr><td><b>MATH 133</b></td><td>Linear Algebra and Geometry</td></tr>
<tr><td><b>MATH 140</b></td><td>Calculus 1</td></tr>
<tr><td><b>MATH 141</b></td><td>Calculus 2</td></tr>
<tr><td><b>MATH 262</b></td><td>Intermediate Calculus</td></tr>
<tr><td><b>MATH 263</b></td><td>Ordinary Differential Equations for Engineers</td></tr>
<tr><td><b>MATH 264</b></td><td>Advanced Calculus for Engineers</td></tr>
<tr><td><b>MATH 270</b></td><td>Applied Linear Algebra</td></tr>
<tr><td><b>MATH 363</b></td><td>Discrete Mathematics</td></tr>
<tr><td><b>FACC 100</b></td><td>Introduction to the Engineering Profession</td></tr>
<tr><td><b>FACC 300</b></td><td>Engineering Economy</td></tr>
<tr><td><b>PHYS 142</b></td><td>Electromagnetics and Optics</td></tr>
<tr><td><b>CIVE 281</b></td><td>Analytical Mechanics</td></tr>
<tr><td><b>CCOM 206</b></td><td>Communication in Engineering</td></tr>
<tr><td><b>CHEM 110</b></td><td>General Chemistry 1</td></tr>
<tr><td><b>CHEM 120</b></td><td>General Chemistry 2</td></tr>
<tr><td><b>GEOG 205</b></td><td>Global Change</td></tr>
<tr><td><b>ECON 208</b></td><td>Microeconomics Analysis and Applications</td></tr>
<tr><td><b>ECON 209</b></td><td>Macroeconomics Analysis and Applications</td></tr>
</table>
</div>