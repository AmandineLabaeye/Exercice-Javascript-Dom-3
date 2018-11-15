/**
 * Created by sstienface on 16/10/2018.
 */


var avatarEls = document.getElementsByTagName("img");

//Votre code ci dessous


for (var i = 0; i < avatarEls.length; i++) {

    avatarEls[i].style.height = 200+"px";

    var b = avatarEls[i].alt;

    avatarEls[i].title = b;

}







