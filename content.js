const script = document.createElement('script');
script.src = chrome.runtime.getURL('override.js');
script.type = 'text/javascript';
script.async = false;
document.documentElement.appendChild(script);

script.onload = function () {
    this.remove();
};
async function clickLoadMoreButton() {
    // Tìm nút "Xem thêm"
    var loadMoreButton = document.getElementById('ContentPlaceHolder1_btBaiGiangLoadMore');

    if (loadMoreButton) {
        loadMoreButton.click();
        console.log("Clicked 'Xem thêm' button");
        setTimeout(clickLoadMoreButton, 1000);
    } else {
        console.log("No more 'Xem thêm' button found.");
    }
}
window.addEventListener('load', async function () {
    if (window.location.href.includes('MonHoc/BaiGiangVaKyThiMonHo')) {
        await clickLoadMoreButton()
        document.querySelectorAll('[onclick]').forEach(function (element) {
            if (element.getAttribute('onclick').includes('goBaiGiang') && element.getAttribute('onclick').includes(',4)')) {
                element.click();
                console.log('Đã click vào phần tử có goBaiGiang với typeFile = 4');
            }
        });
    }


});


window.addEventListener('load', function () {
    const videoElement = document.querySelector('video');
    videoElement.muted = true;
    if (videoElement) {
        setTimeout(function () {
            videoElement.play(); // Dùng phương thức play() của video
            console.log('Video đã bắt đầu phát.');
            videoElement.addEventListener('ended', function () {
                console.log('Video đã kết thúc, đang tải lại trang...');
                window.location.reload();  // Tải lại trang sau khi video kết thúc
            });

        }, 2000); // Đợi 2 giây
    }
});