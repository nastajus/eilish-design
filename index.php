<?php

include 'header_section.php';

include 'menu_section.php';

?>

<div class="main border">
    <div class="imgSlider">
        <noscript>
            This site uses JavaScript, please activate.
            <img src="c3.jpg" alt="This site uses JavaScript, please activate.">
        </noscript>
        <!--words here don't matter<br>-->
        <img class="arrow left"  src="arrow-left.png"  onclick="arrowClick(-1);" />
        <img class="arrow right" src="arrow-right.png" onclick="arrowClick(1);" />

        <ul>
            <li><img src="c3.jpg" /></li>
            <li><img src="c3.jpg" /></li>
            <li><img src="c2.jpg" /></li>
            <li><img src="c3.jpg" /></li>
            <li><img src="c3.jpg" /></li>
            <li><img src="c2.jpg" /></li>
        </ul>
    </div>
    <!--src="c1.jpg" style="width:100%; height:100%"-->
</div>

</body>
</html>