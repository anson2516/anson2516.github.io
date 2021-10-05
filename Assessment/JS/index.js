//intro 部份
const intro = document.querySelector('.intro');
const btn = document.querySelector('#btn');
const hfield = document.querySelector('.field')

btn.addEventListener('click',()=>{
    intro.style.display = 'none';
    hfield.style.display = 'flex';
    startGame();
})



//遊戲部份
const startGame = function () {

const inputWidth = prompt('請設定地圖寬度(請輸入1-20內的數字)');
const inputHeight = prompt('請設定地圖高度格數(請輸入1-20內的數字)');
const total = inputWidth * inputHeight ;
const p = prompt('洞穴百分比? (請輸入1-30內的數字)')        
const holeNumber = Math.round(total * p/100) // 設定洞穴數量
const holeArr = [0];
const hatArr = [];
const leftBorderArr = [];
const rightBorderArr = [];
const topBorderArr =[];
const bottomBorderArr = [];
let playerCurrentId = 0;


// //根據玩家輸入設定地圖大小
hfield.style.width = inputWidth * 20 + 'px'; // 因為每格大小已定義為20px X 20px,所以要乘20
hfield.style.height = inputHeight * 20 + 'px';    

//計算左邊界的ID位置並推入 leftBorderArr
const getLeftBorderId = function(){
    let j = 0;
    for(let i = 0;i < inputHeight ; i++){   
        leftBorderArr.push(`${j}`);        
        j += inputWidth/1 ;    
    }
}
getLeftBorderId()

//計算右邊界的ID位置並推入 rightBorderArr
const getRightBorderId = function(){
    let j = inputWidth - 1;
    for(let i = 0;i < inputHeight/1 ; i++){   
        rightBorderArr.push(`${j}`);        
        j += inputWidth/1 ;        
    }
}
getRightBorderId()

//計算上邊界的ID位置並推入 topBorderArr
const getTopBorderId = function(){
    let j = 0;
    for(let i = 0;i < inputWidth/1 ; i++){   
        topBorderArr.push(`${j}`);        
        j ++ ;
    }
}
getTopBorderId()

//計算下邊界的ID位置並推入 bottomBorderArr
const getBottomBorderId = function(){
    let j = total -1;
    for(let i = 0;i < inputWidth/1 ; i++){   
        bottomBorderArr.push(`${j}`);        
        j --  ;
    }
}
getBottomBorderId()



for(let i = 0; i < total; i++ ){
    let newdiv = document.createElement("DIV");                 
    hfield.appendChild(newdiv);    
    newdiv.setAttribute('id',`${i}`)    
    }
//產生洞穴
for(let i = 0; i < holeNumber; i++){
    let j = Math.floor(Math.random()*total);
    if( j == 0 ){
        continue
    }else{
        holeArr.push(`${j}`);
        document.getElementById(`${j}`).classList.add('hole')
    }
}
//產生帽子
for(let i = 0; i < total;i++){
    let j = Math.floor(Math.random()*total);
    if(holeArr.includes(`${j}` || j ==0)){
        continue;
    }else{
        document.getElementById(`${j}`).classList.add('hat')
        hatArr.push(`${j}`)
        break;
    }
}
//產生角色位置
document.getElementById(`${playerCurrentId}`).classList.add('player')


//檢查currentId 是否等於帽子或洞
const checkWinOrLose = function() {
    if(holeArr.includes(`${playerCurrentId}`)){
        alert('撞牆了!')
        hfield.innerHTML= '<h2>遊戲結束!</h2>'
        
    }else if (hatArr.includes(`${playerCurrentId}`)){
        alert('恭喜你勝出了!')
        hfield.innerHTML= '<h2>遊戲結束!</h2>'
    }
}

//檢查是否出界(,上邊 ,下邊,左邊 ,右邊)
const CheckOutOfTopBounds = function() {
    if(topBorderArr.includes(`${playerCurrentId}`)){
        this.alert('出界啦!!');
        hfield.innerHTML= '<h2>遊戲結束!</h2>';            
    } 
}

const CheckOutOfBottomBounds = function() {
    if(bottomBorderArr.includes(`${playerCurrentId}`)){
        this.alert('出界啦!!');
        hfield.innerHTML= '<h2>遊戲結束!</h2>';            
    }
}

const CheckOutOfLeftBounds = function() {
    if(leftBorderArr.includes(`${playerCurrentId}`)){
        this.alert('出界啦!!');
        hfield.innerHTML= '<h2>遊戲結束!</h2>';            
    }
}

const CheckOutOfRightBounds = function() {
    if(rightBorderArr.includes(`${playerCurrentId}`)){
        this.alert('出界啦!!');
        hfield.innerHTML= '<h2>遊戲結束!</h2>';            
    }
}



// 角色移動logic

window.addEventListener('keydown', function(e){  
    let key = e.code;
    console.log(e)
    if(key === 'ArrowUp')  {
        CheckOutOfTopBounds();

        newId =  parseInt(playerCurrentId) - parseInt(inputWidth/1);    
       
        document.getElementById(`${playerCurrentId}`).classList.remove('player');
        
        document.getElementById(`${newId}`).classList.add('player'); 
        
        playerCurrentId = newId;

        checkWinOrLose();
    }  

    if(key === 'ArrowDown')  {
        CheckOutOfBottomBounds();

        let newId =  parseInt(playerCurrentId) + parseInt(inputWidth/1);
        
        document.getElementById(`${playerCurrentId}`).classList.remove('player');
        
        document.getElementById(`${newId}`).classList.add('player');  
        
        playerCurrentId = newId;
        
       checkWinOrLose();
    }

    if(key === 'ArrowLeft')  {
        CheckOutOfLeftBounds();
        let newId =  parseInt(playerCurrentId) - 1;

        document.getElementById(`${playerCurrentId}`).classList.remove('player');
        
        document.getElementById(`${newId}`).classList.add('player');  
        
        playerCurrentId = newId;

        checkWinOrLose();
    } 

    if(key === 'ArrowRight')  {
        CheckOutOfRightBounds();

        let newId =  parseInt(playerCurrentId) + 1;

        document.getElementById(`${playerCurrentId}`).classList.remove('player');
        
        document.getElementById(`${newId}`).classList.add('player');  
        
        playerCurrentId = newId;

        checkWinOrLose();
    }        
  }, false);}




