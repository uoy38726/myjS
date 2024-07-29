// 取得元素節點(元素的位置)
// 做篩選功能會用到
// 根據id屬性
// let myjs= document.getElementById('js');
// console.log(typeof myjs);  //看類別
// console.log(myjs.textContent); //取得內容
// 根據 querySelector
// console.log(document.querySelector('#js').textContent);


// //根據html
// let myLi= document.getElementsByTagName('li');
// console.log(myLi);
// // 取出Css
// console.log(myLi.item(1).textContent);
// console.log(myLi[1].textContent);


// // 顯示所有的li
// for(let i=0;i< myLi.length;i++){
//     console.log(myLi.item(i).textContent);
//     console.log(myLi[i].textContent);
// }

// console.log('------querySelector------');
// console.log(document.querySelector('h1').textContent);
// console.log('------getElementsByTagName------');
// console.log(document.getElementsByTagName('h1').item(0).textContent);
// 或 console.log(document.getElementsByTagName('h1')[0].textContent);


// 使用類別名稱
// let mySubjects = document.getElementsByClassName('subject');
// console.log(mySubjects);
// for(let i = 0;i < mySubjects.length; i++){
//     console.log(mySubjects.item(i).textContent);
//     console.log(mySubjects[i].textContent);
// }

// 顯示指定的內容=>html
// console.log(mySubjects['html'].textContent);

// 取得id#p1
console.log(document.getElementById('p1').textContent);
console.log(document.querySelector('#p1').textContent);

// 取得li中的p
let myP = document.querySelector('li>p');
 // li>p => li裡面(底下)的P標籤
console.log(myP);
console.log(myP[0].textContent);

// 取得li的元素中的div下的p
let myDivP = document.querySelector('li>div>p');
console.log(myDivP[0].textContent);