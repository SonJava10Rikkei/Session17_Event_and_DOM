var h = null; // Giờ
var m = null; // Phút
var s = null; // Giây

var timeout = null; // Timeout

function start() {
}
function stop() {
    clearTimeout(timeout);
}
function start() {
    /*BƯỚC 1: LẤY GIÁ TRỊ BAN ĐẦU*/
    if (h === null) {
        h = parseInt(document.getElementById('h_val').value);
        m = parseInt(document.getElementById('m_val').value);
        s = parseInt(document.getElementById('s_val').value);
    }

    /*BƯỚC 1: CHUYỂN ĐỔI DỮ LIỆU*/
    // Nếu số giây = -1 tức là đã chạy ngược hết số giây, lúc này:
    //  - giảm số phút xuống 1 đơn vị
    //  - thiết lập số giây lại 59
    if (s === -1) {
        m -= 1;
        s = 59;
    }
    if (m === -1) {
        h -= 1;
        m = 59;
    }
    if (h == -1) {
        clearTimeout(timeout);
        alert('Hết giờ');
        return false;
    }
    document.getElementById('h').innerText = h.toString();
    document.getElementById('m').innerText = m.toString();
    document.getElementById('s').innerText = s.toString();
    timeout = setTimeout(function () {
        s--;
        start();
    }, 1000);
}