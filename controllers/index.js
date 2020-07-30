//Tạo đối tượng service tương tác backend
var svService = new SinhVienService();

var renderSinhVien = function () {
  var promise = svService.layDanhSachSinhVien();
  promise
    .then(function (res) {
      //Tạo tr table...
      //Tạo nội dung các thẻ tr
      var contentTable = "";
      for (var index = 0; index < res.data.length; index++) {
        //Mỗi lần duyệt lấy ra 1 đối tượng sinh viên
        var sinhVien = res.data[index];
        //Từ đối tượng sinh viên tạo ra thẻ tr
        contentTable += `
            <tr>
                <td>${sinhVien.MaSV}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        `;
      }
      console.log(res.data);
    })
    .catch(function (error) {
      console.log(error.response.data);
    });
};
renderSinhVien();
