// 建立一個存放選取結果的變數
let result = '';
// 取得送出按鈕
let myBtn = document.querySelector('#btn');
// 監聽按鈕是否被左鍵一下了
myBtn.addEventListener('click', function () {
    // 取得下拉方塊
    let myCity = document.querySelector('#city');
    // 使用迴圈時，逐一檢查是否被選取 =>selected
    for (let i = 0; i < myCity.length; i++) {
        if (myCity[i].selected) {
            if(myCity[i].value == ''){
                result = '尚未選取';
            }else{
                result = myCity[i].value;
            }
        break;
        }
    }
    console.log('縣市:'+result);
});