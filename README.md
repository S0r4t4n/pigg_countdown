# pigg_countdown
amebapigg countdown

## Demo
<img src="https://user-images.githubusercontent.com/8677536/63710521-4b80bb00-c874-11e9-9ee3-5c95dcb3886d.gif">  

## Sample  
### Please paste in the corresponding place.
* Setting  
<img src="https://user-images.githubusercontent.com/8677536/63711408-52a8c880-c876-11e9-8100-6988b9c2f729.PNG">  

* Free-Space  

```html
<link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Mitr&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Fredoka+One&display=swap" rel="stylesheet">
<div id="canvas">
	<div id="watch">
		<p class="msg">Countdown to the end of Pigg.
			</br>Let's enjoy last summer!!
		</p>
		<ul id="countdown">
			<li id="day"></li>
			<li id="hour"></li>
			<li id="min"></li>
			<li id="sec"></li>
		</ul>
		<ul id="countdown-t">
			<li id="day-t">Day</li>
			<li id="hour-t">Hour</li>
			<li id="min-t">Min</li>
			<li id="sec-t">Sec</li>
		</div>
	</ul>
	<div id="footer"></div>
</div>
```

* CSS

```css
@charset "utf-8";

#canvas {
 background-image      : url("https://thewallpaper.co//wp-content/uploads/2016/10/summer-wallpaper-hd-for-desktop-windows.jpg");
 background-repeat     : no-repeat;
 background-size       : cover;
 height                : 100%;
 left                  : 0;
 position              : absolute;
 top                   : 0;
 width                 : 100%;
 z-index               : 3300 !important;
}
#countdown {
 -moz-border-radius    : 10px;
 -o-border-radius      : 10px;
 -webkit-border-radius : 10px;
 background-color      : rgb(204,204,204,0.5);
 border                : 1px dotted WHITE;
 font-size             : 70px;
 left                  : 10%;
 position              : absolute;
 top                   : 40%;
 width                 : 80%;
}
#countdown-t {
 -moz-border-radius    : 10px;
 -o-border-radius      : 10px;
 -webkit-border-radius : 10px;
 background-color      : rgb(204,204,204,0.5);
 border                : 1px dotted WHITE;
 bottom                : 30%;
 font-family           : 'Mitr', sans-serif;
 font-size             : 24px;
 font-weight           : bold;
 left                  : 10%;
 position              : absolute;
 width                 : 80%;
}
#day {
 -o-border-radius      : 10px;
 color                 : #FF4976;
 font-family           : 'Fredoka One', cursive;
 text-shadow           : 2px 2px 0 #FFF,             -2px 2px 0 #FFF,             2px -2px 0 #FFF,             -2px -2px 0 #FFF;
}
#day-t {
 -o-border-radius      : 10px;
 color                 : #FF4976;
 text-shadow           : 2px 2px 0 #FFF,             -2px 2px 0 #FFF,             2px -2px 0 #FFF,             -2px -2px 0 #FFF;
}
#footer {
 background-image      : url("https://stat.blogskin.ameba.jp/blogskin_images/20190827/00/05/Rs/p/o22400340pigg-soratan1566832203347.png");
 background-repeat     : no-repeat;
 background-size       : cover;
 bottom                : 0;
 height                : 340px;
 position              : absolute;
 right                 : 0;
 width                 : 2000px;
 z-index               : 0;
}
#hour {
 -o-border-radius      : 10px;
 border-left           : 1px dotted WHITE;
 color                 : #FFC01E;
 font-family           : 'Fredoka One', cursive;
 text-shadow           : 2px 2px 0 #FFF,             -2px 2px 0 #FFF,             2px -2px 0 #FFF,             -2px -2px 0 #FFF;
}
#hour-t {
 -o-border-radius      : 10px;
 border-left           : 1px dotted WHITE;
 color                 : #FFC01E;
 text-shadow           : 2px 2px 0 #FFF,             -2px 2px 0 #FFF,             2px -2px 0 #FFF,             -2px -2px 0 #FFF;
}
#min {
 border-left           : 1px dotted WHITE;
 color                 : #FF763F;
 font-family           : 'Fredoka One', cursive;
 text-shadow           : 2px 2px 0 #FFF,             -2px 2px 0 #FFF,             2px -2px 0 #FFF,             -2px -2px 0 #FFF;
}
#min-t {
 border-left           : 1px dotted WHITE;
 color                 : #FF763F;
 text-shadow           : 2px 2px 0 #FFF,             -2px 2px 0 #FFF,             2px -2px 0 #FFF,             -2px -2px 0 #FFF;
}
#sec {
 border-left           : 1px dotted WHITE;
 color                 : #3EC44D;
 font-family           : 'Fredoka One', cursive;
 text-shadow           : 2px 2px 0 #FFF,             -2px 2px 0 #FFF,             2px -2px 0 #FFF,             -2px -2px 0 #FFF;
}
#sec-t {
 border-left           : 1px dotted WHITE;
 color                 : #3EC44D;
 text-shadow           : 2px 2px 0 #FFF,             -2px 2px 0 #FFF,             2px -2px 0 #FFF,             -2px -2px 0 #FFF;
}
#watch {
 height                : 60%;
 left                  : 20%;
 position              : absolute;
 text-align            : center;
 top                   : 10%;
 width                 : 60%;
 z-index               : 1;
}
.msg {
 -moz-border-radius    : 10px;
 -o-border-radius      : 10px;
 -webkit-border-radius : 10px;
 background-color      : rgb(204,204,204,0.5);
 border                : 1px dotted WHITE;
 color                 : WHITE;
 font-family           : 'Fredoka One', cursive;
 font-size             : 40px;
 left                  : 10%;
 letter-spacing        : 3px;
 margin-top            : 50px;
 padding               : 5px;
 position              : absolute;
 width                 : 79%;
}
body,html {
 height                : 100% !important;
 overflow              : hidden !important;
 width                 : 100%;
 z-index               : -1 !important;
}
li {
 float                 : left;
 margin                : 10px;
 text-align            : center;
 width                 : 24.9%;
}
```

* Free-Pulgin  

```html
<input autofocus onfocus="window.__isJSHook !== true &amp;&amp; (function() {
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
        
        document.getElementById(&quot;day&quot;).innerHTML = Math.floor(dDays);
        document.getElementById(&quot;hour&quot;).innerHTML = Math.floor(dHour).toString(10).replace(/^[0-9]$/, &quot;0$&amp;&quot;);
        document.getElementById(&quot;min&quot;).innerHTML = Math.floor(dMin).toString(10).replace(/^[0-9]$/, &quot;0$&amp;&quot;);
        document.getElementById(&quot;sec&quot;).innerHTML = Math.floor(dSec).toString(10).replace(/^[0-9]$/, &quot;0$&amp;&quot;);
     }
        setInterval(function(){showCountdown()},1000);
    })(), window.__isJSHook = true">
```

## annex appendix(inject javascript to ameblo)

```javascript
function generatePlguins(injectSrc) {
    var scripts = String(injectSrc)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\x22/g, '&quot;')
        .replace(/\x27/g, '&#39;');
    return '<input autofocus onfocus="' +
        'window.__isJSHook !== true && ' +
            '(' + scripts + ')(), ' +
        'window.__isJSHook = true">';
}

copy(generatePlguins(function() {
    //put javascript and paste output to free-plugin.
    //example 
    //input : alert("Hello World.")
    //output: 
    //<input autofocus onfocus="window.__isJSHook !== true && (function() {
    //alert(&quot;Hello World.&quot;)
    //})(), window.__isJSHook = true">
    //})
);
```
