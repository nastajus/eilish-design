/**
 * Created by IAN on 20/09/2014.
 */

/**
    immediately assign id to first element, so it's behind the scenes
 */

var imgSlider = document.getElementsByClassName("imgSlider");
var first = imgSlider.childNodes.item(0).childNodes.item(0);
first.setAttribute("id", "active");

function toggle(id){
    var e = document.getElementById(id);
    if (e.style.display == 'block'){
        e.style.display = 'none';
    }
    else {
        e.style.display = 'block';
    }
}

function arrowClick(direction){
    //see the list of all images, assign one
    //clearly need to use javascript to apply css dynamically here.
    //apply a simple tracking id the specific one that's the main one.
    //find a way to count the number of list items in the unordered list
    //trigger code to switch active image by toggling display: none vs. display: block.... hmm.

    var parent = document.getElementById()



    var node = document.getElementById(id)
    document.body.id.appendChild()
}


////http://stackoverflow.com/questions/3437786/get-the-size-of-the-screen-current-web-page-and-browser-window
//function testShowDim(){
//    var w = window,
//        d = document,
//        e = d.documentElement,
//        g = d.getElementsByTagName('body')[0],
//        x = w.innerWidth || e.clientWidth || g.clientWidth,
//        y = w.innerHeight|| e.clientHeight|| g.clientHeight;
//    var t = w || d || e;
//    alert(x + ' × ' + y + ' : ' + t);
//
//}


function test(id){
    var span = document.createElement("span");
    var e = document.getElementById(id);

    //document.body.appendChild(span);
    document.body.replaceChild()
    //document.body.setAttribute("class", )
}

function checkParent(id){
    alert( document.getElementById(id).parentNode.parentNode.parentNode );
}