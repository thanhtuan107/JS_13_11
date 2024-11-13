/**
 * Tinh tien thuế
 * 
 * ĐẦU VÀO:
 *          - userName:
 *          - thu nhập: vd 120tr ( thuNhap = 120000000)
 *          - so người phụ thuộc: vd 2 người ( soNguoi = 2 )
 * XỬ LÍ
 *    Thu Nhập chịu thuế = thuNhap - 4000000 - ( soNguoi * 1600000)
 *    xét bảng thuế xuất:
 *    0 -> 60 = 5%
 *    60 -> 120 = 10%
 *    120 -> 210 = 15%
 *    210 -> 384 = 20%
 *    384 -> 624 = 25%
 *    624 -> 960 = 30%
 *    >960 = 35%
 *  -> Thu nhập chịu thuế * Thuế suất (%) (k áp dụng thuế lũy tiến)
 * 
 *    vd: Thu nhập chịu thuế = 120tr
 *    xét bảng -> 120tr*10%
 *    
 *  
 * ĐẦU RA
 *      userName
 *      Thu nhập chịu thuế
 */


function tinhThue() {
    let userName = document.getElementById("userName_3").value;
    const thuNhap = document.getElementById("thuNhap").value * 1;
    const soNguoi = document.getElementById("soNguoi").value * 1;

    let taxIncome = thuNhap - 4000000 - (soNguoi * 1600000);
    let totalTax = 0;

    if (taxIncome > 0 && taxIncome <= 60000000) {
        totalTax = taxIncome * 0.05;
    } else if (taxIncome > 60000000 && taxIncome <= 120000000) {
        totalTax = taxIncome * 0.1;
    } else if (taxIncome > 120000000 && taxIncome <= 210000000) {
        totalTax = taxIncome * 0.15;
    } else if (taxIncome > 210000000 && taxIncome <= 384000000) {
        totalTax = taxIncome * 0.2;
    } else if (taxIncome > 384000000 && taxIncome <= 624000000) {
        totalTax = taxIncome * 0.25;
    } else if (taxIncome > 624000000 && taxIncome <= 960000000) {
        totalTax = taxIncome * 0.3;
    } else if (taxIncome > 960000000) {
        totalTax = taxIncome * 0.35;
    }

    let result = `<p>Họ và Tên: ${userName}, Thu nhập chịu thuế: ${taxIncome.toLocaleString()}, Thuế phải nộp: ${totalTax.toLocaleString()}</p>`;
    document.getElementById("out_put_3").innerHTML = result;
}

tinhThue();