let data = [
    {
      "id": 0,
      "name": "肥宅心碎賞櫻3日",
      "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
      "area": "高雄",
      "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
      "group": 87,
      "price": 1400,
      "rate": 10
    },
    {
      "id": 1,
      "name": "貓空纜車雙程票",
      "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台北",
      "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
      "group": 99,
      "price": 240,
      "rate": 2
    },
    {
      "id": 2,
      "name": "台中谷關溫泉會1日",
      "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台中",
      "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
      "group": 20,
      "price": 1765,
      "rate": 7
    }
  ];


const ticketCard = document.querySelector(".ticketCard-area");
const searchResultNum = document.querySelector(".searchResultNum");
const filter = document.querySelector(".regionSearch");

//套票卡片 初始化資料 預設載入  start -------------------------------------
function init(){
    filter.value = "全部地區"; //預設篩選器顯示全部地區
    let str = "";
    let count = 0;
    // 預設套票卡片撈資料邏輯
    data.forEach(function(item,index){
        str += `
            <li class="ticketCard">
            <div class="ticketCard-img">
              <a href="#">
                <img src="${item.imgUrl}" alt="">
              </a>
              <div class="ticketCard-region">${item.area}</div>
              <div class="ticketCard-rank">${item.rate}</div>
            </div>
            <div class="ticketCard-content">
              <div>
                <h3>
                  <a href="#" class="ticketCard-name">${item.name}</a>
                </h3>
                <p class="ticketCard-description">${item.description}</p>
              </div>
              <div class="ticketCard-info">
                <div class="ticketCard-num">
                  <p>
                    <span><i class="fas fa-exclamation-circle"></i></span>
                    剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
                  </p>
                </div>
                <p class="ticketCard-price">
                  TWD <span id="ticketCard-price">$${item.price}</span>
                </p>
              </div>
            </div>
          </li>
        `;
        count++;
    })
    ticketCard.innerHTML = str;
    searchResultNum.innerHTML = count;
}


//縣市篩選器邏輯 start -------------------------------------
filter.addEventListener("change", function(e){
    let str="";
    let count = 0;
    data.forEach(function(item,index){
        if (filter.value == "全部地區"){
            str += `
                <li class="ticketCard">
                <div class="ticketCard-img">
                  <a href="#">
                    <img src="${item.imgUrl}" alt="">
                  </a>
                  <div class="ticketCard-region">${item.area}</div>
                  <div class="ticketCard-rank">${item.rate}</div>
                </div>
                <div class="ticketCard-content">
                  <div>
                    <h3>
                      <a href="#" class="ticketCard-name">${item.name}</a>
                    </h3>
                    <p class="ticketCard-description">${item.description}</p>
                  </div>
                  <div class="ticketCard-info">
                    <div class="ticketCard-num">
                      <p>
                        <span><i class="fas fa-exclamation-circle"></i></span>
                        剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
                      </p>
                    </div>
                    <p class="ticketCard-price">
                      TWD <span id="ticketCard-price">$${item.price}</span>
                    </p>
                  </div>
                </div>
              </li>
            `;
            count+=1;
        } else if (filter.value == item.area) {
            str += `
                <li class="ticketCard">
                <div class="ticketCard-img">
                  <a href="#">
                    <img src="${item.imgUrl}" alt="">
                  </a>
                  <div class="ticketCard-region">${item.area}</div>
                  <div class="ticketCard-rank">${item.rate}</div>
                </div>
                <div class="ticketCard-content">
                  <div>
                    <h3>
                      <a href="#" class="ticketCard-name">${item.name}</a>
                    </h3>
                    <p class="ticketCard-description">${item.description}</p>
                  </div>
                  <div class="ticketCard-info">
                    <div class="ticketCard-num">
                      <p>
                        <span><i class="fas fa-exclamation-circle"></i></span>
                        剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
                      </p>
                    </div>
                    <p class="ticketCard-price">
                      TWD <span id="ticketCard-price">$${item.price}</span>
                    </p>
                  </div>
                </div>
              </li>
            `;    
            count+=1;        
        }
        
    })
    ticketCard.innerHTML = str;
    searchResultNum.innerHTML = count;
})

//新增邏輯 start -------------------------------------

    const ticketName = document.querySelector("#ticketName"); //套票名稱
    const ticketImgUrl = document.querySelector("#ticketImgUrl"); //圖片網址
    const ticketRegion = document.querySelector("#ticketRegion"); //景點地區
    const ticketPrice = document.querySelector("#ticketPrice"); //套票金額
    const ticketNum = document.querySelector("#ticketNum"); //套票組數
    const ticketRate = document.querySelector("#ticketRate"); //套票星級
    const ticketDescription = document.querySelector("#ticketDescription"); //套票描述
    const btn = document.querySelector(".btn"); //新增套票

    //必填提示
    const ticketNameMessage = document.querySelector("#ticketName-message"); //套票名稱必填提示
    const ticketImgUrlMessage = document.querySelector("#ticketImgUrl-message"); //圖片網址必填提示
    const ticketRegionMessage = document.querySelector("#ticketRegion-message"); //景點地區必填提示
    const ticketPriceMessage = document.querySelector("#ticketPrice-message"); //套票金額必填提示
    const ticketNumMessage = document.querySelector("#ticketNum-message"); //套票組數必填提示
    const ticketRateMessage = document.querySelector("#ticketRate-message"); //套票星級必填提示
    const ticketDescriptionMessage = document.querySelector("#ticketDescription-message"); //套票描述必填提示
    //共用的必填提示HTML結構
    const errorTip =`<i class="fas fa-exclamation-circle"></i><span>必填!</span>`;

    //新增套票動作：step1 判斷欄位有無必填，有則跑必填提示   step2 欄位皆已填寫才執行新增套票
    btn.addEventListener("click", function(e){

    //step1 click時：未填寫顯示errorTip，已填寫則隱藏errorTip，並累計errorTip數量
    let errorTipNum = 0;
    if (ticketName.value == ""){ ticketNameMessage.innerHTML = errorTip; errorTipNum +=1; } else { ticketNameMessage.innerHTML = "";} //套票名稱必填提示
    if (ticketImgUrl.value == ""){ ticketImgUrlMessage.innerHTML = errorTip; errorTipNum +=1; } else { ticketImgUrlMessage.innerHTML = "";} //圖片網址必填提示
    if (ticketRegion.value == ""){ ticketRegionMessage.innerHTML = errorTip; errorTipNum +=1; } else { ticketRegionMessage.innerHTML = "";} //景點地區必填提示
    if (ticketPrice.value == ""){ ticketPriceMessage.innerHTML = errorTip; errorTipNum +=1; } else { ticketPriceMessage.innerHTML = "";} //套票金額必填提示
    if (ticketNum.value == ""){ ticketNumMessage.innerHTML = errorTip; errorTipNum +=1; } else { ticketNumMessage.innerHTML = "";} //套票組數必填提示
    if (ticketRate.value == ""){ ticketRateMessage.innerHTML = errorTip; errorTipNum +=1; } else { ticketRateMessage.innerHTML = "";} //套票星級必填提示
    if (ticketDescription.value == ""){ ticketDescriptionMessage.innerHTML = errorTip; errorTipNum +=1; } else { ticketDescriptionMessage.innerHTML = "";} //套票描述必填提示
    
    //step2 click時若所有欄位已填寫，errorTip數量會是0，此時才執行新增obj於陣列data，並同步更新li顯示
    if (errorTipNum == 0 ) {
        let obj ={};
        obj.id = data.length;
        obj.name = ticketName.value;
        obj.imgUrl = ticketImgUrl.value;
        obj.area = ticketRegion.value;
        obj.description = ticketDescription.value;
        obj.group = ticketNum.value;
        obj.price = ticketPrice.value;
        obj.rate = ticketRate.value;
        data.push(obj);//將輸入資料obj加入 data 陣列
        init(); //同步更新li顯示，使用預設篩選器：全部地區
        //隱藏必填提示
        ticketNameMessage.innerHTML = "";
        //清空表單所有欄位
        ticketName.value = "";
        ticketImgUrl.value = "";
        ticketRegion.value = "";
        ticketDescription.value = "";
        ticketNum.value = "";
        ticketPrice.value = "";
        ticketRate.value = "";
    }
})


//套票卡片 執行初始化資料
init();