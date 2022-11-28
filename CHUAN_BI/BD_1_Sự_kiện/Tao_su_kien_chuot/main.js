// let h1 = document.getElementById('heading-1');
// h1.addEventListener('click', function () {
//     console.log('Clicked');
// });


//////////////  Bai Tap //////////////

// let h2 = document.getElementById('heading-2');
// h2.addEventListener('click', function () {
//     // document.getElementById("newPlayer2").innerHTML = (prompt('Nhap ten cau thu'))
// });


let h2 = document.getElementById('heading-2');
function addString() {
    let ul = document.getElementById('listPlayer');
    var newPlayer = prompt("Nhap ten cau thu");
    var li = document.createElement('li');
    li.innerHTML = newPlayer;
    ul.appendChild(li);
}

