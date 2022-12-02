
/**
 * banner slider show
 */

var index = 0;
var arr_banner = [
    {
        img: "hinh/slider_1_image.jpg",
        title: "Giầy đồng giá 250k"
    },
    {
        img: "hinh/slider_2_image.jpg",
        title: "Khuyến mãi mùa hè giảm 50%"
    },
    {
        img: "hinh/slider_3_image.jpg",
        title: "Bộ sưu tập van 2016"
    }
]

var hinh = document.getElementById("slide")
function prew() {
    index <= 0 ? index = arr_banner.length - 1 : index--
    hinh.src = arr_banner[index].img
    hinh.title = arr_banner[index].title
}
function next() {
    index >= arr_banner.length - 1 ? index = 0 : index++
    hinh.src = arr_banner[index].img
    hinh.title = arr_banner[index].title
}
setInterval("next()", 3000)

/**
 * line chạy dưới menu
 */

const line = document.createElement("div")
line.className = "line"
const menu = document.querySelector("#menu")
menu.appendChild(line)
const menu_li = [...document.querySelectorAll("#menu>li>a")]
menu_li.forEach((e) => e.addEventListener("mouseenter", menuHover));
menu.addEventListener("mouseleave", function () { line.style.width = 0 })
function menuHover(e) {
    var a = (screen.width - document.querySelector(".can").offsetWidth) / 2 - 9
    const toaDo = e.target.getBoundingClientRect("")
    line.style.width = `${toaDo.width}px`
    line.style.left = `${toaDo.left}px`
}

/**
 *  sử lí dữ liệu
 */


const arr = [
    {
        img: "./images/conver1.png",
        giam_gia: "-10%",
        ten: "conver1",
        tien_goc: 318000,
        tien_KM: 500000,
    },
    {
        img: "./images/conver2.png",
        giam_gia: "-20%",
        ten: "conver2",
        tien_goc: 3600,
        tien_KM: 600000,
    },
    {
        img: "./images/conver3.png",
        giam_gia: "-10%",
        ten: "conver3",
        tien_goc: 8100,
        tien_KM: 700000,
    },
    {
        img: "./images/conver4.png",
        giam_gia: "-20%",
        ten: "conver4",
        tien_goc: 18000,
        tien_KM: 800000,
    },
    {
        img: "./images/conver5.png",
        giam_gia: "-20%",
        ten: "conver5",
        tien_goc: 6300,
        tien_KM: 350000,
    },
    {
        img: "./images/conver6.png",
        giam_gia: "-15%",
        ten: "conver6",
        tien_goc: 11700,
        tien_KM: 450000,
    },
    {
        img: "./images/conver7.png",
        giam_gia: "-25%",
        ten: "conver7",
        tien_goc: 95000,
        tien_KM: 850000,
    },
    {
        img: "./images/conver8.png",
        giam_gia: "-20%",
        ten: "conver8",
        tien_goc: 31500,
        tien_KM: 350000,
    },
    {
        img: "./images/conver9.png",
        giam_gia: "-35%",
        ten: "conver9",
        tien_goc: 318000,
        tien_KM: 560000,
    },
    {
        img: "./images/conver10.png",
        giam_gia: "-20%",
        ten: "conver10",
        tien_goc: 318000,
        tien_KM: 780000,
    },
    {
        img: "./images/conver11.png",
        giam_gia: "-10%",
        ten: "conver11",
        tien_goc: 318000,
        tien_KM: 960000,
    },
    {
        img: "./images/conver12.png",
        giam_gia: "-10%",
        ten: "conver12",
        tien_goc: 318000,
        tien_KM: 650000,
    },
    {
        img: "./images/conver1.png",
        giam_gia: "-10%",
        ten: "conver13",
        tien_goc: 318000,
        tien_KM: 950000,
    },
    {
        img: "./images/conver2.png",
        giam_gia: "-20%",
        ten: "conver14",
        tien_goc: 3600,
        tien_KM: 620000,
    },
    {
        img: "./images/conver3.png",
        giam_gia: "-10%",
        ten: "conver15",
        tien_goc: 8100,
        tien_KM: 940000,
    },
    {
        img: "./images/conver4.png",
        giam_gia: "-20%",
        ten: "conver16",
        tien_goc: 18000,
        tien_KM: 860000,
    },
    {
        img: "./images/conver5.png",
        giam_gia: "-20%",
        ten: "conver17",
        tien_goc: 6300,
        tien_KM: 780000,
    },
    {
        img: "./images/conver6.png",
        giam_gia: "-15%",
        ten: "conver18",
        tien_goc: 11700,
        tien_KM: 780000,
    },
    {
        img: "./images/conver7.png",
        giam_gia: "-25%",
        ten: "conver19",
        tien_goc: 95000,
        tien_KM: 360000,
    },
    {
        img: "./images/conver8.png",
        giam_gia: "-20%",
        ten: "conver20",
        tien_goc: 31500,
        tien_KM: 960000,
    }
]
const cart_icon = document.querySelector("#cart_icon")
/**
 *  window onload
 */
window.onload = () => {
    const rows = [...document.querySelectorAll(".row")]
    rows.forEach((e) => {
        for (let i = 0; i < 4; i++) {
            e.innerHTML += `<div class="sanPham"></div>`
        }
    })
    const sanPhams = [...document.querySelectorAll(".sanPham")]
    sanPhams.forEach((e, i) => {
        e.innerHTML += `
            <div class="giamGia">${arr[i].giam_gia}</div>
            <img class="hinh" src="${arr[i].img}">
            <div><a class="ten">${arr[i].ten}</a></div>
            <p class="tien">
                <span class="tien_goc">${arr[i].tien_KM}</span>₫
                <span class="tien_KM">${arr[i].tien_goc}</span>₫
            </p>
            <button type="button" class="nut" value="0" onclick="mua(${i},this)">thêm vào giỏ</button>
        `
    })
    document.querySelector(".table").innerHTML = `
        <div id="thong_bao">
            <img src="./images/hang_trong.webp" />
            <div></div>
            <button type="button" class="vao_ch" onclick="an()">vào cửa hàng</button>
        </div> 
        <button class="thoat" onclick="an()">X</button>
        <div id="cart_cart">
            <h2>giỏ hàng</h2>
            <div id="show_cart">
                <div class="trai">
                    <h3>Shopping cart</h3>
                    <hr>
                </div>
                <div class="phai">
                    <h3>Thanh toán</h3>
                    <hr>
                    <div class="cart_1">
                        <div class="cart_tt">
                            <p>Số lượng: </p>
                            <p><span id="tong_soluong"></span></p>
                        </div>
                        <div class="cart_tt">
                            <p>Tổng tiền: </p>
                            <p><span id="tong_tien"></span>₫</p>
                        </div>
                        <hr>
                        <h3>Giao hàng</h3>
                        <select id="cart_giaohang" onchange="reset()">
                            <option value="50000" selected="selected">Shopee - 50.000₫</option>
                            <option value="30000">GHTK - 30.000₫</option>
                            <option value="70000">Grap - 70.000₫</option>
                        </select>
                        <div class="cart_tt">
                            <h3>Tổng: </h3>
                            <p><span id="cart_tong"></span>₫</p>
                        </div>
                            <button class="dat_hang">MUA HÀNG</button>
                        </div>
                    </div>
            </div>
        </div>
        `
    const show_cart = document.querySelector("#show_cart")
    const tong_tien = document.querySelector("#tong_tien");


    // setInterval(() => {
    //     document.body.style.background = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},0.5)`
    // }, 3000);

    [...document.querySelectorAll(".nut")].forEach(e => {
        e.addEventListener("click", () => {
            document.querySelector(".thong_bao").style.top = "300px"
            var dai = 0
            const run = setInterval(() => {
                var cart_icon = document.querySelector("#cart_icon")
                cart_icon.style.height = `60px`
                cart_icon.style.width = `60px`
                cart_icon.style.fontSize = `54px`
                document.querySelector(".line_thongbao").style.height = `${dai}px`
                dai += 10
                if (dai >= 120) {
                    clearInterval(run)
                    cart_icon.style.height = `20px`
                    cart_icon.style.width = `20px`
                    cart_icon.style.fontSize = `18px`
                    document.querySelector(".thong_bao").style.top = "-150px"
                }
            }, 200);
        })
    })

    var check = true;
    [...document.querySelectorAll(".xem_sp")].forEach(e => {
        e.addEventListener("click", (event) => {
            if (check) {
                event.target.innerHTML = `Thu nhỏ sản phẩm`
                check = !check
            } else (
                event.target.innerHTML = `Xem tất cả sản phẩm`
            )
        })
    })
}
var arr_mua = []
function mua(index, obj) {
    var dem = 0
    var i2 = new Number()
    if (arr_mua.length == 0) {
        dem = 0
    } else {
        arr_mua.forEach((e, i) => {
            if (e.ten == arr[index].ten) {
                dem++
                i2 = i
            }
        })
    }
    if (dem == 0) {
        arr_mua = [...arr_mua, arr[index]]
        var tr = document.createElement("div")
        tr.classList.add("sp_cart")
        tr.innerHTML = `
            <img class="img" src=${arr[index].img} />
            <div class="cart_nd">
                <p class="ten chu">${arr[index].ten}</p>
                <p><span class="dongia">${arr[index].tien_KM}</span>₫</p>
            </div>
            <div class="soluong">
                <input class="cart_btn" type="button" value="-" onclick="tru(this.parentElement)">
                <input class="value" type="number" value="1" onchange="change(this)" />
                <input class="cart_btn" type="button" value="+" onclick="cong(this.parentElement)">
            </div>
            <p class="_tien chu"><span class="thanhtien">${arr[index].tien_KM}</span>₫</p>
            <input type=button value="X" class="xoa" onclick='xoa(${i2},this)'>               
            `
        document.querySelector(".trai").appendChild(tr)
        reset(tr)
    }
    if (obj.value == 0) {
        obj.innerHTML = "Đã thêm"
        obj.value = "1"
        obj.style.background = "red"
        // obj.setAttribute("disabled","disabled")
    } else {
        obj.innerHTML = "Thêm vào giỏ"
        obj.value = "0"
        obj.style.background = "rgb(16, 81, 221)"
    }
    console.log(arr_mua);
}

// [...document.querySelectorAll(".xoa")].forEach(e => {
//     e.addEventListener("click", (event) => {
//         console.log(event.target);
//     });
// });



function xoa(index, obj) {
    var node = obj.parentElement.parentElement
    node.removeChild(obj.parentElement)
    arr_mua.splice(index, 1)

    reset()
    hien()
}


function hien() {

    document.querySelector(".table").style.top = "120px"
    if (document.querySelector("#cart_icon").innerHTML == 0) {
        document.querySelector("#cart_cart").style.display = "none"
        document.querySelector("#thong_bao").style.display = "block"
        document.querySelector("#thong_bao").style.transform = "scale(1)"
        console.log("hello");
    } else {
        document.querySelector("#cart_cart").style.display = "block"
        document.querySelector("#thong_bao").style.display = "none"
        document.querySelector("#thong_bao").style.transform = "scale(0)"

    }
}
function an() {
    document.querySelector(".table").style.top = "1000px"
}

function xem(obj) {
    obj.querySelector(".xem").classList.toggle("xem_1")
}

function tru(obj) {
    var con = obj.querySelector(".value").value * 1
    con == 1 ? obj.querySelector(".value").setAttribute("value", "1") : obj.querySelector(".value").setAttribute("value", `${con - 1}`)
    var a = obj.parentElement.querySelector(".dongia").innerHTML * 1
    obj.parentElement.querySelector(".thanhtien").innerHTML = a * obj.querySelector(".value").value * 1
    reset()
}

function change(obj) {
    var sp = obj.parentElement.parentElement
    var a = sp.querySelector(".dongia").innerHTML * 1
    sp.querySelector(".thanhtien").innerHTML = a * obj.value * 1
    reset()
}

function cong(obj) {
    var con = obj.querySelector(".value").value * 1
    obj.querySelector(".value").setAttribute("value", `${con + 1}`)
    var a = obj.parentElement.querySelector(".dongia").innerHTML * 1
    obj.parentElement.querySelector(".thanhtien").innerHTML = a * obj.querySelector(".value").value * 1
    reset()
}

function reset() {
    var thanhtiens = [...document.querySelectorAll(".thanhtien")]
    tong_tien.innerHTML = null
    var tong = 0
    thanhtiens.forEach((e) => {
        tong += Number(e.innerHTML)
    })
    tong_tien.innerHTML = tong
    var soluong = [...document.querySelectorAll(".value")]
    var dem = 0
    soluong.forEach((e) => {
        dem += e.value * 1
    })
    cart_icon.innerHTML = `${dem}`
    document.querySelector("#tong_soluong").innerHTML = `${dem}`

    var e = document.querySelector("#cart_giaohang")
    var giaTri = e.options[e.selectedIndex].value * 1;
    document.querySelector("#cart_tong").innerHTML = `${tong - giaTri}`
}