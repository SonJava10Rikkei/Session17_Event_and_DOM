/**
 * 1. Tạo sự kiện
 * 
 * 
 * 2. Luồng sự kiện
 * 
 * 
 */

////////////////    1. Tạo sự kiện    ////////////////


// let btn = document.querySelector('#btn');

// function display() {
//     alert('It was clicked!');
// }

// btn.addEventListener('click', display);

//Một cách ngắn hơn để đăng ký trình xử lý sự kiện là đặt tất cả mã vào một hàm ẩn danh, như sau:

let btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
    alert('It was clicked!');
});

                    ////////////////    2. Luồng sự kiện    ////////////////



