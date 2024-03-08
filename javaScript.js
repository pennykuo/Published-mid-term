// 創建一個10x10的遊戲區域
var gameArea = [];
for (var i = 0; i < 100; i++) {
    gameArea[i] = [];
    for (var j = 0; j < 100; j++) {
        gameArea[i][j] = 0;
    }
}

// 將角色放在遊戲區域的中心
gameArea[50][50] = 1;

// 獲取角色元素
var character = document.getElementById('character');

// 獲取圓點元素
var dot = document.getElementById('dot');
// 為整個頁面添加點擊事件監聽器
document.addEventListener('click', function(event) {
    // 獲取點擊的位置
    var x = Math.floor(event.clientX / 10);
    var y = Math.floor(event.clientY / 10);

    // 清除角色的當前位置
    for (var i = 0; i < 100; i++) {
        for (var j = 0; j < 100; j++) {
            if (gameArea[i][j] === 1) {
                gameArea[i][j] = 0;
            }
        }
    }

    // 將角色移動到點擊的位置
    gameArea[y][x] = 1;

    // 先水平移動
    character.style.left = x * 10 + 'px';

    // 等待一段時間後再垂直移動
    setTimeout(function() {
        character.style.top = y * 10 + 'px';
    }, 500); // 這裡的500是等待的時間，單位是毫秒，你可以根據需要調整

    // 如果點擊的位置與圓點的位置相同，則等待角色移動完成後打開google.com
    if (x === dot.offsetLeft / 10 && y === dot.offsetTop / 10) {
        setTimeout(function() {
            window.location.href = 'https://www.google.com';
        }, 1000); // 這裡的1000是等待的時間，單位是毫秒，你可以根據需要調整
    }
});
// 為圓點添加點擊事件監聽器
dot.addEventListener('click', function(event) {
    // 獲取圓點的位置
    var x = Math.floor(event.clientX / 10);
    var y = Math.floor(event.clientY / 10);

    // 清除角色的當前位置
    for (var i = 0; i < 100; i++) {
        for (var j = 0; j < 100; j++) {
            if (gameArea[i][j] === 1) {
                gameArea[i][j] = 0;
            }
        }
    }

    // 將角色移動到圓點的位置
    gameArea[y][x] = 1;

    // 先垂直移動
    character.style.top = y * 10 + 'px';

    // 等待一段時間後再水平移動
    setTimeout(function() {
        character.style.left = x * 10 + 'px';
    }, 500); // 這裡的500是等待的時間，單位是毫秒，你可以根據需要調整

    // 等待角色移動完成後打開google.com
    setTimeout(function() {
        window.location.href = 'https://www.google.com';
    }, 1000); // 這裡的1000是等待的時間，單位是毫秒，你可以根據需要調整
});