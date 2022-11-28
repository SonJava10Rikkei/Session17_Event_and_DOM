// let myInput = document.getElementById('my-input');
// myInput.addEventListener('keypress', function () {
//     let name = myInput.value;
//     document.getElementById('newContent').innerHTML = name;
// });


//////// 2 ///////////

// let div2 = document.getElementById('newContent');
// function checkEnterClick(e) {
//     if (e.keyCode == 13) {
//         let myInput = document.getElementById('my-input').value;
//         var p = document.createElement("p");
//         p.innerHTML = myInput;
//         div2.appendChild(p);
//     }
// }


//////////  3 //////////
//Bai Tap //

let div2 = document.getElementById('listPlayer');
function checkEnterClick(event) {
    if (event.keyCode == 13) {
        let ul = document.getElementById('listPlayer');
        var newPlayer = document.getElementById('my-input').value;
        var li = document.createElement('li');
        li.innerHTML = newPlayer;
        ul.appendChild(li);
    }
}