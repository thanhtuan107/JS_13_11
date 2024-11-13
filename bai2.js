/**
 * TINH TIEN DIEN
 * 
 * ĐẦU VÀO:
 *        - userName
 *        - soKw 
 * XỬ LÍ:
 * 
 *    tạo biến tienDien = 0 để tính tổng tiền điện
 * 
 *    soKw <= 50 -> tienDien = soKw*500
 *    soKw <= 100 -> tienDien = 500*50 + (soKw - 50)*650
 *    soKw <= 200 -> tienDien = 500*50 + 650*50 + (soKw - 100)*850
 *    soKw <= 350 -> tienDien = 500*50 + 650*50 + 850*100 + (soKw - 200)*1100
 *    soKw > 350 -> tienDien = 500*50 + 650*50 + 850*100 + 150*1100 + soKw*1300
 * 
 * ĐẦU RA
 *    userName
 *    tienDien
 */


let btn_TinhTienDien = document.getElementById("btn_tienDien");
btn_TinhTienDien.onclick=function(){
const userName = document.getElementById("userName").value;
const soKw = document.getElementById("kwDien").value*1;
    // Khởi tạo biến để lưu giá trị tiền điện
    let tienDien = 0;
    // Tính tiền lũy tiến theo từng bậc
    if (soKw <= 50) {
      tienDien = soKw * 500;
    } else if ( soKw <= 100){
      tienDien = 500*50 + (soKw - 50)*650;
    }else if (soKw <= 200){
      tienDien = 500*50 + 650*50 + (soKw - 100)*850;
    }else if ( soKw <= 350){
      tienDien = 500*50 + 650*50 + 850*100 + (soKw - 200)*1100;
    }else if (soKw > 350){
      tienDien = 500*50 + 650*50 + 850*100 + 150*1100 + soKw*1300;
    }
  
    let result = "Khach hang:" + userName +"-"+ "Số tiền điện phải trả:" +  tienDien.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    document.getElementById("out_putTienDien").innerHTML= result;
}
 