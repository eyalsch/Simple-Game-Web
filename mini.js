H=Sc=V=C=i=D=0,B="";

SG();

function DB () {
	O.innerHTML = '[' + ("--------" + B).slice(-8) + ']' + '\n    ' + V;
}

function SG() {
	Sc=0;
	B="";
	H = localStorage.getItem("S");
    S.innerHTML = 'Score:'+Sc+' High Score:'+H;
	DB();
	bindKey();
	D = 1500;
	C = 0;
	i = setInterval(loop, D);
}

function loop() {
    if (B.length == 8) {
		clearInterval(i);	
		onkeydown = function() {};
		if (Sc > H) {
			O.innerHTML = "NEW HIGH SCORE!";
			localStorage.setItem("S", Sc);
		} else {
			O.innerHTML = "Game Over";
		}
    }
    else {                
	  B +=(Math.random()*10|0+"");
      DB();
      if (++C % 20 == 0) {
        D = D - 100;
		i = setInterval(loop, D);
      }
    }
}

function Blow() {
	if (B.length > 0 && (B[0] - '0') == V) {
		B = B.substring(1, B.length);
		DB();
		Sc +=8 - B.length;
		S.innerHTML = 'Score:'+Sc+' High Score:'+H;
	}	
}

function bindKey() {
	onkeydown = function(event) {
		switch (event.keyCode) {
			case 38:
				V = (V==9) ? 0 : V+1;
				break;
			case 40:
				V = (V==0) ? 9 : V-1;
				break;
			case 32:
				Blow();
				break;
			case 8:
				SG();
				break;
		}
		DB();
	};
}