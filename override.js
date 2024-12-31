// Ghi đè hàm goBaiGiang
(function () {
    console.log("Ghi đè hàm goBaiGiang...");
    window.goBaiGiang = function (id, id_nhom, typeFile) {
        let url = "";
        if (typeFile == 1)
            url = "/BaiGiang/BaiGiangVideo.aspx?id=" + id + "&id_nhom=" + id_nhom;
        else if (typeFile == 2)
            url = "/BaiGiang/BaiGiangScorm.aspx?id=" + id + "&id_nhom=" + id_nhom;
        else if (typeFile == 3)
            url = "/BaiGiang/BaiGiangBT.aspx?id=" + id + "&id_nhom=" + id_nhom;
        else if (typeFile == 4)
            url = "/BaiGiang/BaiGiangVideom3u8.aspx?id=" + id + "&id_nhom=" + id_nhom;

        if (url) {
            // Mở URL trong tab mới
            window.open(url, '_blank');
        }
    };

    console.log("Hàm goBaiGiang đã được ghi đè thành công.");
})();
