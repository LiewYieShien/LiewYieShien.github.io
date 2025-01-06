// 確保頁面加載後 popup 是隱藏的
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".image-button");
    const popups = document.querySelectorAll(".popup");
    const closeButtons = document.querySelectorAll(".close-popup");

    // 隱藏所有 popup
    popups.forEach(popup => {
        popup.style.display = "none";
    });

    // 點擊按鈕顯示對應的 popup
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            popups[index].style.display = "block";
        });
    });

    // 點擊關閉按鈕隱藏對應的 popup
    closeButtons.forEach((closeButton, index) => {
        closeButton.addEventListener("click", () => {
            popups[index].style.display = "none";
        });
    });

    // 點擊 popup 外部關閉
    popups.forEach(popup => {
        popup.addEventListener("click", (e) => {
            if (e.target === popup) {
                popup.style.display = "none";
            }
        });
    });
});
