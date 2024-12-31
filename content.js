const script = document.createElement('script');
script.src = chrome.runtime.getURL('override.js');
script.type = 'text/javascript';
script.async = false;
document.documentElement.appendChild(script);

script.onload = function () {
    this.remove();
};

window.addEventListener('load', function () {

    if (window.location.href.includes('MonHoc/BaiGiangVaKyThiMonHo')) {
        document.querySelectorAll('[onclick]').forEach(function (element) {
            if (element.getAttribute('onclick').includes('goBaiGiang') && element.getAttribute('onclick').includes(',4)')) {
                element.click();
                console.log('Đã click vào phần tử có goBaiGiang với typeFile = 4');
            }
        });
    }


    const checkPlayButton = setInterval(function () {
        const playButton = document.querySelector('.vjs-big-play-button');

        if (playButton) {
            setTimeout(function () {
                // Mô phỏng click vào nút play
                const clickEvent = new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                });

                // Gửi sự kiện click vào nút play
                playButton.dispatchEvent(clickEvent);
                console.log('Đã gửi sự kiện click vào nút play sau 2 giây.');
            }, 2000); // Đợi 2 giây trước khi mô phỏng click

            clearInterval(checkPlayButton); // Dừng việc kiểm tra sau khi click
        }
    }, 100); // Kiểm tra mỗi 100ms
});


window.addEventListener('load', function () {
    const videoElement = document.querySelector('video');
    videoElement.muted = true;
    if (videoElement) {
        setTimeout(function () {
            videoElement.play(); // Dùng phương thức play() của video
            console.log('Video đã bắt đầu phát.');
        }, 2000); // Đợi 2 giây
    }
});