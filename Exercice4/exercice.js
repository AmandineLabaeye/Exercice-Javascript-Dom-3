/**
 * Created by sstienface on 16/10/2018.
 */

var Planete = document.createElement('div');

document.body.appendChild(Planete);

Planete.setAttribute('class', 'planet');

Planete.id = 'Planete';

Planete.style.backgroundColor = "blue";


var Moon = document.createElement('div');

document.getElementById('Planete').appendChild(Moon);

Moon.setAttribute('class', 'moon');






