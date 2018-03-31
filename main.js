let arr = [];
for (let i = 1; i < 7; i++) {
  arr.push(i,i)
}
let arrValues = [];
let arrKartu = [];
let counter = 0; 

function acakKartu(arr) {
  arr.sort(function() { return 0.5 - Math.random() });
}
function gameDayaIngat(kartu,huruf){
	if(kartu.innerHTML == "" && arrValues.length < 2){
		kartu.style.background = 'white';
		kartu.innerHTML = huruf;
		if(arrValues.length == 0){
			arrValues.push(huruf);
			arrKartu.push(kartu.id);
		} else if(arrValues.length == 1){
			arrValues.push(huruf);
			arrKartu.push(kartu.id);
			if(arrValues[0] == arrValues[1]){
				counter += 2;
				arrValues = [];
        arrKartu = [];
        setTimeout(function() {
          if(counter == arr.length) {
            alert("Selamat Kamu Menang! Mau Main Lagi?");
            document.getElementById('papan_memori').innerHTML = "";
            newGame();
          }
        }, 1000)
			} else {
				function balikKartu(){
          var kartu1 = document.getElementById(arrKartu[0]);
          var kartu2 = document.getElementById(arrKartu[1]);
          kartu1.style.background = 'url(img/bg.png)';
          kartu1.innerHTML = "";
          kartu2.style.background = 'url(img/bg.png)';
          kartu2.innerHTML = "";
          arrValues = [];
          arrKartu = [];
				}
				setTimeout(balikKartu, 1000);
			}
		}
	}
}

function newGame(){
	var str = '';
    acakKartu(arr);
	for(var i = 0; i < arr.length; i++){
		str += '<div id="kartu'+i+'" onclick="gameDayaIngat(this,\''+arr[i]+'\')"></div>';
	}
	document.getElementById('papan_memori').innerHTML = str;
}