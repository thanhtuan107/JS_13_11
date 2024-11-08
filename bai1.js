let btnResult = document.getElementById("btn_result");
btnResult.onclick= function(){
    const diemChuan = document.getElementById("diemChuan").value*1;
    const khuVuc = document.getElementById("khuVuc").value*1;
    const doiTuong = document.getElementById("doiTuong").value*1;
    const diemMon1 = document.getElementById("diemMon1").value*1;
    const diemMon2 = document.getElementById("diemMon2").value*1;
    const diemMon3 = document.getElementById("diemMon3").value*1;
   // Điểm ưu tiên theo khu vực
    const diemUuTienKhuVuc = {
        'A': 2,
        'B': 1,
        'C': 0.5,
    };
    const diemKhuVuc = diemUuTienKhuVuc[khuVuc] || 0;

    // Điểm ưu tiên theo đối tượng
    const diemUuTienDoiTuong = {
        '1': 2.5,
        '2': 1.5,
        '3': 1,
    };

    const diemDoiTuong = diemUuTienDoiTuong[doiTuong] || 0;
    // Tính điểm tổng kết
    const tongDiem = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong;
    const xuatDiem = document.getElementById("out_put")
    // Kiểm tra điều kiện đậu
    if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
        xuatDiem.innerHTML = 'Rất tiếc, bạn đã rớt do có môn điểm 0.';
    } else if (tongDiem >= diemChuan) {
        xuatDiem.innerHTML = 'Bạn đã đậu!. Tổng điểm: ' + tongDiem;
    } else {
        xuatDiem.innerHTML = 'Bạn đã trượt. Tổng điểm: ' + tongDiem;
    }
}