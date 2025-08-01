// script.js
document.getElementById('searchInput').addEventListener('keyup', function() {
    const filter = this.value.toLowerCase();
    const items = document.querySelectorAll('#itemList li');

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(filter)) {
            item.style.display = ''; // نمایش آیتم
        } else {
            item.style.display = 'none'; // مخفی کردن آیتم
        }
    });
});