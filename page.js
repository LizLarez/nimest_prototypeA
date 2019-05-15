function add_video() {
    const constraints = {
    video: {
        facingMode: { ideal: "environment" },
        aspectRation: 0.5625
    }
};
const video = document.querySelector('video');
navigator.mediaDevices.getUserMedia(constraints).
    then((stream) => {
        video.srcObject = stream
    });

}

// ########################################
function register_swipes(right_target, left_target) {
    var container = document.querySelector(".dummy_scroll");

    container.addEventListener("touchstart", startTouch, false);
    container.addEventListener("touchmove", moveTouch, false);

    // Swipe Up / Down / Left / Right
    var initialX = null;
    var initialY = null;

    function startTouch(e) {
        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;
    };

    function moveTouch(e) {
        if (initialX === null) {
            return;
        }

        if (initialY === null) {
            return;
        }

        var currentX = e.touches[0].clientX;
        var currentY = e.touches[0].clientY;

        var diffX = initialX - currentX;
        var diffY = initialY - currentY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            // sliding horizontally
            if (diffX > 0) {
                // swiped left
                if (left_target) {
                    window.location.href = left_target;
                }
                console.log("swiped left");
            } else {
                if (right_target) {
                    window.location.href = right_target;
                }
                // swiped right
                console.log("swiped right");
            }
        }

        initialX = null;
        initialY = null;

        e.preventDefault();
    };
}


<!-- Google Analytics -->
window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', 'UA-140297907-1', 'auto');
ga('send', 'pageview');
<!-- End Google Analytics -->
