//********* var global ********************************

var i = 0;
var x;
var y;
var z;
//*********  add fonction ********************************


function ajouter() {
    i++;


    //********* Add Div ********************************


    var createDiv = document.createElement("div");
    x = createDiv.id = "div" + i;
    document.getElementById("myList").appendChild(createDiv);



    //********* Add a TEXTAREA ********************************


    var createTextArae = document.createElement("textarea");
    createTextArae.id = "TextA" + i;
    createTextArae.placeholder = "enter your message";
    createTextArae.cols = '30';
    createTextArae.rows = '10';

    document.getElementById(x).appendChild(createTextArae);

    //********* Add a button  delete ********************************

    var createDelete = document.createElement("button");
    var textnode1 = document.createTextNode("delete");
    createDelete.id = "btn-Rev" + i;
    createDelete.className = "btn btn-info"

    createDelete.appendChild(textnode1);
    createDelete.type = "button";
    createDelete.onclick = function() {
        var s = this.id;
        var m = s.split('v')
        var c = 'key' + m[1]
        localStorage.removeItem(c)
        this.parentNode.parentNode.removeChild(this.parentNode);

    };

    document.getElementById(x).appendChild(createDelete);

}

// ******** save fonction ************

var sv;

function save() {

    document.getElementById('echo-LS').disabled = true;
    y = i;

    localStorage.setItem("i", y);

    var j;
    sv = j;
    for (j = 1; j <= y; j++) {
        var u = 'TextA' + j;
        var g = "key" + j; // key
        if (document.getElementById(u) != null) {
            var b = document.getElementById(u).value; // values
            localStorage.setItem(g, b);
        }

    }

    alert("SAVED!");

}


//************************ function view ***************************************


var vls; // valeur local storage

var gh = new Array();

var index = new Array();

function view() {

    document.getElementById('echo-LS').disabled = true;
    j

    var o = localStorage.getItem("i");
    i = o;
    var tv = parseInt(o);

    for (var z = 1; z <= tv; z++) {


        gh[z] = localStorage.getItem("key" + z);
        index[z] = z;

    }

    for (var j = 1; j < gh.length; j++) {
        if (gh[j] != null) {

            //********* Add Div ********************************

            var createDiv = document.createElement("div");
            x = createDiv.id = "div" + index[j];
            document.getElementById("myList").appendChild(createDiv);


            //********* Add a  TEXTAREA ********************************

            var createTextArae = document.createElement("textarea");
            createTextArae.id = "TextA" + index[j];


            //createTextArae.placeholder="enter your message";

            createTextArae.value = gh[j];
            createTextArae.cols = '30';
            createTextArae.rows = '10';

            document.getElementById(x).appendChild(createTextArae);

            //********* Add a button  delete ********************************

            var createDelete = document.createElement("button");
            var textnode1 = document.createTextNode("delete");
            createDelete.id = "bts" + index[j];
            createDelete.className = "btn btn-info"

            createDelete.appendChild(textnode1);
            createDelete.type = "button";
            createDelete.onclick = function() {
                var s = this.id;
                var m = s.split('s')
                var c = 'content' + m[1]
                localStorage.removeItem(c)
                this.parentNode.parentNode.removeChild(this.parentNode);

            };

            document.getElementById(x).appendChild(createDelete);



        }

    }
}

//*****************CLARE******************** */
function claer() {

    localStorage.clear();
    alert("All_Clear");

}