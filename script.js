/**
 * Created by IAN on 20/09/2014.
 */
/** Continued by IAN on 04/11/2014. */

function toggle(id){
    var e = document.getElementById(id);
    if (e.style.display == 'block'){
        e.style.display = 'none';
    }
    else {
        e.style.display = 'block';
    }
}

function assignImg(id){
    // see the list of all images, assign one
    //clearly need to use javascript to apply css dynamically here.

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