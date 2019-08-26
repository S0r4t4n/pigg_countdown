function isNumOrZero(num) {
   if( isNaN(num) ) { return 0; }
   return num;
}
function showCountdown() {
   var nowDate = new Date();
   var dnumNow = nowDate.getTime();
 
   var inputYear  = 2019;
   var inputMonth = 12 - 1;
   var inputDate  = 2;
   var inputHour  = 15;
   var inputMin   = 0;
   var inputSec   = 0;
   var targetDate = new Date( isNumOrZero(inputYear), isNumOrZero(inputMonth), isNumOrZero(inputDate), isNumOrZero(inputHour), isNumOrZero(inputMin), isNumOrZero(inputSec) );
   var dnumTarget = targetDate.getTime();
    var diff2Dates = dnumTarget - dnumNow;
   if( dnumTarget < dnumNow ) {
      diff2Dates *= -1;
   }
 
   
   var dDays  = diff2Dates / ( 1000 * 60 * 60 * 24 );
   diff2Dates = diff2Dates % ( 1000 * 60 * 60 * 24 );
   var dHour  = diff2Dates / ( 1000 * 60 * 60 );
   diff2Dates = diff2Dates % ( 1000 * 60 * 60 );
   var dMin   = diff2Dates / ( 1000 * 60 );
   diff2Dates = diff2Dates % ( 1000 * 60 );
   var dSec   = diff2Dates / 1000;
   
   document.getElementById("day").innerHTML = Math.floor(dDays);
   document.getElementById("hour").innerHTML = Math.floor(dHour).toString(10).replace(/^[0-9]$/, "0$&");
   document.getElementById("min").innerHTML = Math.floor(dMin).toString(10).replace(/^[0-9]$/, "0$&");
   document.getElementById("sec").innerHTML = Math.floor(dSec).toString(10).replace(/^[0-9]$/, "0$&");
}
   setInterval(function(){showCountdown()},1000);