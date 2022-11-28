function Dong_ho() {
    var gio = document.getElementById("gio");
    var phut = document.getElementById("phut");
    var giay = document.getElementById("giay");
    var Gio_hien_tai = new Date().getHours();
    var Phut_hien_tai = new Date().getMinutes();
    var Giay_hien_tai = new Date().getSeconds();
    gio.innerHTML = Gio_hien_tai;
    phut.innerHTML = Phut_hien_tai;
    giay.innerHTML = Giay_hien_tai;
}
var Dem_gio = setInterval(Dong_ho, 1000);

var img = [];
var img_1 = "https://img.meta.com.vn/Data/image/2021/09/30/background-la-gi-anh-background-dep-4.jpg";
var img_2 = "https://thuthuatnhanh.com/wp-content/uploads/2021/12/background-vu-tru-4K.jpg";
var img_3 = "https://toigingiuvedep.vn/wp-content/uploads/2021/11/background-vu-tru-sang-tao.jpeg";
var img_4 = "http://listsach.com/wp-content/uploads/2019/02/List-sach-hay-thien-van-hoc-vu-tru-va-cac-chom-sao.jpg";
img.push(img_1);
img.push(img_2);
img.push(img_3);
img.push(img_4);
function getImg() {
    let body = document.querySelector('body')
    const ramdom = Math.floor(Math.random() * img.length)
    body.background = img[ramdom];
    body.style.backgroundsize = "100%";
}
setInterval(getImg, 10000);

setTimeout(function () {
    document.getElementById("tictac").play(); // chay audio tictac
}, 1)

// setInterval(function () {
//     document.getElementById("my_audio").play();
// }, 1000)