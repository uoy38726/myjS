// 取得勾選的項目內容
// 1.找到按鈕
let myBtn = document.querySelector('#btn');
// 2.監聽按鈕是否被按了(click=> 左鍵一下的事件)
myBtn.addEventListener('click',function(){
    let arrResult = [];
    let arrResultNot = [];
    let myDrinks = document.getElementsByName('drinks');
    // 逐一檢查是否被勾選 => checked
    for(let i=0; i< myDrinks.length;i++){
        //有被勾選的項目
        if(myDrinks[i].checked){
            arrResult.push(myDrinks[i].value);
        }
        // 沒有被勾選的項目 => 使用NOT反向!
        if(!myDrinks[i].checked){
            arrResultNot.push(myDrinks[i].value);
        }
    }
    console.log('被勾選的項目:'+arrResult);
    console.log('沒被勾選的項目:'+arrResultNot);
    
    // 取得顯示資料的位置
    let getDiy=document.getElementById('showData');
    // 被勾選
    let str1='';
    str1 = '<div><ul>被勾選項目';
    // 被選取的li
    for(let  i=0;i<arrResult.length;i++){
        str1=
    }
    // 沒有被勾選
});