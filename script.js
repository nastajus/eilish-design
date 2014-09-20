/**
 * Created by IAN on 20/09/2014.
 */

function toggle(id){
    var e = document.getElementById(id);
    if (e.style.display == 'block'){
        e.style.display = 'none';
    }
    else {
        e.style.display = 'block';
    }
}

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