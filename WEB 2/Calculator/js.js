
		var s = 0,
			a = 0,
			b = 0;

		function sum(){
			a = document.forma1.t1.value;
			b = document.forma1.t2.value;
			s = +a + +b;
		}
		function sub(){
			a = document.forma1.t1.value;
			b = document.forma1.t2.value;
			s = a - b;
			
		}
		function mul(){
			a = document.forma1.t1.value;
			b = document.forma1.t2.value;
			s = a * b;
			
		}
		function div(){
			a = document.forma1.t1.value;
			b = document.forma1.t2.value;
			s = a / b;
			
		}

		function clear(){
			alert("Text");
			document.forma1.t1.value = 0;
			document.forma1.t2.value = 0;
			document.forma1.res.value = 0;
			
		}


		function calc(){
			
			document.forma1.res.value = s;
		}



