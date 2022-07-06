/* detail.js */
//http://127.0.0.1:5500/detail.html#nike_1

//2차 배열 패턴 : ["이미지", "타이틀", "내용"]
var $nike = [
    ["nike_01.jpg", "nike_title_ad_1", "nike_text_ad_1"],
    ["nike_02.jpg", "nike_title_ad_2", "nike_text_ad_2"],
    ["nike_03.jpg", "nike_title_ad_3", "nike_text_ad_3"],
    ["nike_04.jpg", "nike_title_ad_4", "nike_text_ad_4"],
];
var $adidas = [
    ["adidas_01.jpg", "adidas_title_ad_1", "adidas_text_ad_1"],
    ["adidas_02.jpg", "adidas_title_ad_2", "adidas_text_ad_2"],
    ["adidas_03.jpg", "adidas_title_ad_3", "adidas_text_ad_3"],
    ["adidas_04.jpg", "adidas_title_ad_4", "adidas_text_ad_4"],
];
var $puma = [
    ["puma_01.jpg", "puma_title_ad_1", "puma_text_ad_1"],
    ["puma_02.jpg", "puma_title_ad_2", "puma_text_ad_2"],
    ["puma_03.jpg", "puma_title_ad_3", "puma_text_ad_3"],
    ["puma_04.jpg", "puma_title_ad_4", "puma_text_ad_4"],
];

//http://127.0.0.1:5500/detail.html#nike_1
var $hash = location.hash; 
console.log($hash); //#nike_1
var $hash_txt = $hash.replace("#", "");
console.log($hash_txt); //nike_1
//nike_1 =(변수명.split("특정문자"))=> ["nike", "1"]
var $divide_arr = $hash_txt.split("_");
console.log($divide_arr);
console.log($divide_arr[0]); //nike (카테고리 정의 nike | adidas | puma)
console.log($divide_arr[1]); //1 (각 카테고리별로 데이터의 인덱스 번호 0| 1 | 2 | 3)
var $brand = $divide_arr[0]; //카테고리 정의 nike | adidas | puma
var $index = $divide_arr[1]; //각 카테고리별로 데이터의 인덱스 번호 0| 1 | 2 | 3

//선택자 구성
var $detailBg = document.querySelector("#cont .wrap .ad_img");
var $detailTitle = document.querySelector("#cont .wrap h3");
var $detailText = document.querySelector("#cont .wrap p");
console.log($detailBg); //<div class="ad_img"></div>
console.log($detailTitle); //<h3>문단 타이틀</h3>
console.log($detailText); //<p>문단내용</p>

if ($brand == "nike"){
    $detailBg.style.backgroundImage = `url(./img/${$nike[$divide_arr[1]][0]})`;
    $detailTitle.textContent = $nike[$index][1];
    $detailText.textContent = $nike[$index][2];
}

if ($brand == "adidas"){
    $detailBg.style.backgroundImage = `url(./img/${$adidas[$divide_arr[1]][0]})`;
    $detailTitle.textContent = $adidas[$index][1];
    $detailText.textContent = $adidas[$index][2];
}

if ($brand == "puma"){
    $detailBg.style.backgroundImage = `url(./img/${$puma[$divide_arr[1]][0]})`;
    $detailTitle.textContent = $puma[$index][1];
    $detailText.textContent = $puma[$index][2];
}

//하단의 목록보기 클릭시
var backBtn = document.querySelector(".history button");
backBtn.addEventListener("click", function(){
    //history.forward(); //방문 기록상 한 단계 앞으로 보낸다
    //history.back(); //방문 기록상 한 단계 뒤로 보낸다
    //history.go(-1);  //방문 기록상 한 단계 앞으로 보낸다
    location.href = `./sub.html#${$brand}`;
});




















