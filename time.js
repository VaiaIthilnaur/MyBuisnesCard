function odliczanie()
			{
				var dzisiaj = new Date();
				
			
				var dzien = dzisiaj.getDate();
				if (dzien<10) dzien="0"+dzien;
				var miesiac = dzisiaj.getMonth()+1;
				var rok = dzisiaj.getYear()+1900;
				
				var godz = dzisiaj.getHours();
				if (godz<10) godz="0"+godz;
				var min = dzisiaj.getMinutes();
				if (min<10) min="0"+min;
				var sec = dzisiaj.getSeconds();
				if (sec<10) sec="0"+sec;
				
				document.getElementById("time").innerHTML = godz+":"+min+":"+sec;
				
				setTimeout("odliczanie()",1000);
			}