/**
 * Tính tiền cáp
 * 
 * ĐẦU VÀO:
 *      - nhà dân:
 *      - doanh nghiệp: -> số kết nối:
 *      - mã kh:
 *      - số kênh cao cấp:
 * 
 * XỬ LÍ:
 *      - total = 0 
 *      - if customer = nhà dân
 *          -> total = 4.5 + 20.5 + (soKenh * 7.5);
 *      - else customer = daonh nghiệp
 *          -> phí cơ bản = 75
 *          -> if soketnoi > 10 -> PhiCoBan += (soKetNoi - 10) * 5
 *          -> total = total = 15 + phiCoBan + (soKenh * 50)
 * 
 * ĐẦU RA
 *      - mã khách hàng + total
 */         


function soKetNoi() {
    const customerType = document.getElementById("Customer").value;
    const soKetNoiInput = document.getElementById("soKetNoi");
    
    if (customerType === "doanhNghiep") {
        // Hiển thị ô nhập số kết nối khi chọn "Doanh Nghiệp"
        soKetNoiInput.style.display = "block";
    } else {
        // Ẩn ô nhập số kết nối khi chọn "Nhà Dân"
        soKetNoiInput.style.display = "none";
    }
}

function tinhCap() {
    const customerType = document.getElementById("Customer").value;
    const maKH = document.getElementById("maKH").value;
    const soKenh = document.getElementById("soKenh").value * 1;
    const soKetNoi = document.getElementById("soKetNoi").value * 1;
    let total = 0;

    //check 
    if (!maKH) {
        alert("Vui lòng nhập mã khách hàng.");
        return;
    }
    if (soKenh < 0 || (customerType === "doanhNghiep" && soKetNoi < 0)) {
        alert("Số kênh hoặc số kết nối không hợp lệ.");
        return;
    }

    // xử lí nhà dân or doanh nghiệp 
    if (customerType === "nhaDan") {
        total = 4.5 + 20.5 + (soKenh * 7.5);
    } else if (customerType === "doanhNghiep") {
        let phiCoBan = 75;
        if (soKetNoi > 10) {
            phiCoBan += (soKetNoi - 10) * 5;
        }
        total = 15 + phiCoBan + (soKenh * 50);
    } else {
        alert("Vui lòng chọn loại khách hàng.");
        return;
    }

    // Hiển thị kết quả
    document.getElementById("out_put_4").innerHTML = `<p>Mã khách hàng: ${maKH}, Tổng tiền cáp: $${total.toFixed(2)}</p>`;
}