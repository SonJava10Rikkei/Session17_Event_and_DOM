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
var img_1 = "https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg";
var img_2 = "https://vtv1.mediacdn.vn/thumb_w/640/2018/11/29/photo-1-154348431990377584420.jpg";
var img_3 = "https://cdn.tcdulichtphcm.vn/upload/3-2022/images/2022-09-15/1663230774-2-1663172227.jpg";
var img_4 = "https://cdn.tcdulichtphcm.vn/upload/4-2022/images/2022-10-07/1665129082-1.jpg";
img.push(img_1);
img.push(img_2);
img.push(img_3);
img.push(img_4);
function getImg() {
    let body = document.querySelector('body')
    const ramdom = Math.floor(Math.random() * img.length)
    body.background = img[ramdom];
    body.style.backgroundsize = "cover";
}
setInterval(getImg, 5000);

// var music = [];
// var music_1 = "";

