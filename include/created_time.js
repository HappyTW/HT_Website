var dateCreate = document.getElementById("dateHasCreated");
var birthdayContent = document.getElementById("birthday");
var img = document.getElementById("birthdayImg");
var today = new Date();
var dd = parseInt(String(today.getDate()).padStart(2, '0'));
var mm = parseInt(String(today.getMonth() + 1).padStart(2, '0'))-2;
var yyyy = parseInt(today.getFullYear()-2018);

window.onload = function(){
    if(mm<0){
        yyyy = yyyy-1;
        mm = 12+mm;
    }
    if(mm==0 && dd-6==0){
        birthdayContent.innerHTML = "讚啦，今天是HelloTaiwan創辦的" + yyyy + "週年，如果你有看到這條彩蛋訊息，請去告訴會長，我會很愛你ㄉ｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡";
        birthdayContent.style.paddingTop = "20px"
        img.style.display = "block";
    }
    else{
        birthdayContent.innerHTML = "";
        birthdayContent.style.paddingTop = "0px"
        img.style.display = "none";
    }
    dateCreate.innerHTML = "對了，我們的公會已創辦了" + yyyy + "年又" + mm + "個月了哦!";
}