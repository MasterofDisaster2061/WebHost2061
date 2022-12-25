var Ans=0;
var i=0;
var ii=0;
var iii=0;
var iiii=0;
var iiiii=0;
function my()
{
x =document.getElementById("haha").value;
y =document.getElementById("haha2").value;
if(x=="" && y!="")
{window.alert('Enter first value, You can\'t leave blank space!');}
else if(y=="" && x!="")
{window.alert('Enter second value, You can\'t leave blank space!');}
else if(x=="" && y=="")
{window.alert('You can\'t leave blank spaces, Enter both values!');} 
else
{
z=Number(x)+Number(y);
a=x-y;
b=x*y;
c=x/y;
f=1;
for(i=1;i<=parseInt(x);i++)
{f=f*i}
ff=1;
for(ii=1;ii<=parseInt(y);ii++)
{ff=ff*ii}
document.getElementById("demo").innerHTML=
"<h2>Calculation:-</h2>"+
x+" + "+y+"= "+z+"<br>"+
x+" - "+y+"= "+a+"<br>"+
x+" * "+y+"= "+b+"<br>"+
x+" / "+y+"= "+c+"<br><br>"+
"The factorial of "+parseInt(x)+" is= "+f.toExponential(4)+"<br>"+
"The factorial of "+parseInt(y)+" is= "+ff.toExponential(4)+"<br><br>"+
"sin("+x+")= "+(Math.sin(x*Math.PI/180)).toFixed(2)+" || "+"sin("+y+")= "+(Math.sin(y*Math.PI/180)).toFixed(2)+"<br>"+
"cos("+x+")= "+(Math.cos(x*Math.PI/180)).toFixed(2)+" || "+"cos("+y+")= "+(Math.cos(y*Math.PI/180)).toFixed(2)+"<br>"+
"tan("+x+")= "+(Math.tan(x*Math.PI/180)).toFixed(2)+" || "+"tan("+y+")= "+(Math.tan(y*Math.PI/180)).toFixed(2)+"<br>"+
"cosec("+x+")= "+(1/(Math.sin(x*Math.PI/180))).toFixed(2)+" || "+"cosec("+y+")= "+(1/(Math.sin(y*Math.PI/180))).toFixed(2)+"<br>"+
"sec("+x+")= "+(1/(Math.cos(x*Math.PI/180))).toFixed(2)+" || "+"sec("+y+")= "+(1/(Math.cos(y*Math.PI/180))).toFixed(2)+"<br>"+
"cot("+x+")= "+(1/(Math.tan(x*Math.PI/180))).toFixed(2)+" || "+"cot("+y+")= "+(1/(Math.tan(y*Math.PI/180))).toFixed(2)+"<br><br>"+
"log("+x+")= "+(Number(Math.log10(x))).toFixed(3)+"<br>"+
"log("+y+")= "+(Number(Math.log10(y))).toFixed(3)+"<br>"+
"ln("+x+")= "+(Number(Math.log(x))).toFixed(3)+"<br>"+
"ln("+y+")= "+(Number(Math.log(y))).toFixed(3)+"<br>"+
"log<sub>"+y+"</sub>("+x+")= "+(Number(Math.log(x)/Math.log(y))).toFixed(3)+"<br>"+
"log<sub>"+x+"</sub>("+y+")= "+(Number(Math.log(y)/Math.log(x))).toFixed(3)+"<br><br>"+
x+"<sup>"+y+"</sup>= "+(Math.pow(x,y)).toExponential(4)+"<br>"+
y+"<sup>"+x+"</sup>= "+(Math.pow(y,x)).toExponential(4)+"<br>"+
x+"<sup>"+x+"</sup>= "+(Math.pow(x,x)).toExponential(4)+"<br>"+
y+"<sup>"+y+"</sup>= "+(Math.pow(y,y)).toExponential(4)+"<br><br>";
document.getElementById("demo").style.fontSize="20px";
document.getElementById("demo").style.display="block";
}
}
function ha()
{
document.getElementById("demo").innerHTML="Enter values for calculation";
}
function deci()
{
document.getElementById('yoo').innerHTML=
"<form><p style='font-size:20px'>Enter number in Decimal= "+"<input type='number' id='dd' placeholder='Type 0-9 digits' style='font-size:16px;'></p>"+
"<button type='reset' onclick='q()' style='margin-left:100px;position:absolute;font-size:20px;'>Clear</button></form>"+"<button onclick='deci2()' style='font-size:20px;'>Convert</button>";
document.getElementById('boom1').style.backgroundColor="yellow";
document.getElementById('boom4').style.backgroundColor="white";
document.getElementById('boom2').style.backgroundColor="white";
document.getElementById('boom3').style.backgroundColor="white";
}
function deci2()
{
aa=document.getElementById('dd').value;
document.getElementById('yoo2').innerHTML=
"The number in binary is= "+Number(aa).toString(2)+"<br>"+
"The number in octal is= "+Number(aa).toString(8)+"<br>"+
"The number in hexadecimal is= "+(Number(aa).toString(16)).toUpperCase();
document.getElementById('yoo2').style.fontSize="20px";
document.getElementById('yoo2').style.marginLeft="10px";
document.getElementById('yoo2').style.display="block";
}
function bin()
{
document.getElementById('yoo').innerHTML=
"<form><p style='font-size:20px'>Enter number in Binary= "+"<input type='number' id='bb' placeholder='Type 0 or 1 digits' style='font-size:16px;'></p>"+"<button type='reset' onclick='q()' style='margin-left:100px;position:absolute;font-size:20px;'>Clear</button></form>"+"<button onclick='bin2()' style='font-size:20px;'>Convert</button>";
document.getElementById('boom2').style.backgroundColor="yellow";
document.getElementById('boom1').style.backgroundColor="white";
document.getElementById('boom4').style.backgroundColor="white";
document.getElementById('boom3').style.backgroundColor="white";
}
function bin2()
{
aa=document.getElementById('bb').value;
aaa=parseInt(aa,2);
document.getElementById('yoo2').innerHTML=
"The number in decimal is= "+Number(aaa).toString(10)+"<br>"+
"The number in octal is= "+Number(aaa).toString(8)+"<br>"+
"The number in hexadecimal is= "+(Number(aaa).toString(16)).toUpperCase();
document.getElementById('yoo2').style.fontSize="20px";
document.getElementById('yoo2').style.marginLeft="10px";
document.getElementById('yoo2').style.display="block";
}
function oct()
{
document.getElementById('yoo').innerHTML=
"<form><p style='font-size:20px'>Enter number in Octal= "+"<input type='number' id='oo' placeholder='Type 0-7 digits' style='font-size:16px;'></p>"+"<button type='reset' onclick='q()' style='margin-left:100px;position:absolute;font-size:20px;'>Clear</button></form>"+"<button onclick='oct2()' style='font-size:20px;'>Convert</button>";
document.getElementById('boom3').style.backgroundColor="yellow";
document.getElementById('boom1').style.backgroundColor="white";
document.getElementById('boom2').style.backgroundColor="white";
document.getElementById('boom4').style.backgroundColor="white";
}
function oct2()
{
aa=document.getElementById('oo').value;
aaa=parseInt(Number(aa),8);
document.getElementById('yoo2').innerHTML=
"The number in decimal is= "+Number(aaa).toString(10)+"<br>"+
"The number in binary is= "+Number(aaa).toString(2)+"<br>"+
"The number in hexadecimal is= "+(Number(aaa).toString(16)).toUpperCase();
document.getElementById('yoo2').style.fontSize="20px";
document.getElementById('yoo2').style.marginLeft="10px";
document.getElementById('yoo2').style.display="block";
}
function hex()
{
document.getElementById('yoo').innerHTML=
"<form><p style='font-size:20px'>Enter number in Hexadecimal= "+"<input type='text' id='hh' placeholder='Type 0-9 and A-F' style='font-size:16px;'></p>"+"<button type='reset' onclick='q()' style='margin-left:100px;position:absolute;font-size:20px;'>Clear</button></form>"+"<button onclick='hex2()' style='font-size:20px;'>Convert</button>";
document.getElementById('boom4').style.backgroundColor="yellow";
document.getElementById('boom1').style.backgroundColor="white";
document.getElementById('boom2').style.backgroundColor="white";
document.getElementById('boom3').style.backgroundColor="white";
}
function hex2()
{
aa=document.getElementById('hh').value;
aaa=parseInt(aa,16);
document.getElementById('yoo2').innerHTML=
"The number in decimal is= "+Number(aaa).toString(10)+"<br>"+
"The number in octal is= "+Number(aaa).toString(8)+"<br>"+
"The number in binary is= "+Number(aaa).toString(2);
document.getElementById('yoo2').style.fontSize="20px";
document.getElementById('yoo2').style.marginLeft="10px";
document.getElementById('yoo2').style.display="block";
}
function q()
{
document.getElementById('yoo2').style.display="none";
}
function converter(my)
{
if(my=='D')
{dddd=document.getElementById('deci3').value;
ddddd=parseFloat(dddd,10);
document.getElementById('bin3').value=Number(ddddd).toString(2);
document.getElementById('oct3').value=Number(ddddd).toString(8);
document.getElementById('hex3').value=(Number(ddddd).toString(16)).toUpperCase();
}
else if(my=='B')
{dddd=document.getElementById('bin3').value;
ddddd=parseInt(dddd,2);
document.getElementById('deci3').value=Number(ddddd).toString(10);
document.getElementById('oct3').value=Number(ddddd).toString(8);
document.getElementById('hex3').value=(Number(ddddd).toString(16)).toUpperCase();
}
else if(my=='O')
{dddd=document.getElementById('oct3').value;
ddddd=parseInt(dddd,8);
document.getElementById('deci3').value=Number(ddddd).toString(10);
document.getElementById('bin3').value=Number(ddddd).toString(2);
document.getElementById('hex3').value=(Number(ddddd).toString(16)).toUpperCase();
}
else
{dddd=document.getElementById('hex3').value;
ddddd=parseInt(dddd,16);
document.getElementById('deci3').value=Number(ddddd).toString(10);
document.getElementById('bin3').value=Number(ddddd).toString(2);
document.getElementById('oct3').value=Number(ddddd).toString(8);
}
}
function clean()
{
document.getElementById('deci3').value="";
document.getElementById('bin3').value="";
document.getElementById('oct3').value="";
document.getElementById('hex3').value="";
}
function clean1()
{
document.getElementById('deci3').value="";
}
function clean2()
{
document.getElementById('bin3').value="";
}
function clean3()
{
document.getElementById('oct3').value="";
}
function clean4()
{
document.getElementById('hex3').value="";
}
function fir()
{
iiiii=0;
}
function op()
{
iiiii=1;
}
function sec()
{
iiiii=2;
}
function dis(val)
{if(iiii==0)
document.getElementById('disp').value+=val;
else if (iiii==1 && iiiii==0)
document.getElementById('fir').value+=val;
else if (iiii==1 && iiiii==1)
document.getElementById('op').value+=val;
else if (iiii==1 && iiiii==2)
document.getElementById('sec').value+=val;
}
function diss(vall)
{
if(iiii==0)
document.getElementById('disp').value+=vall;
else if(iiii==1 && iiiii==0)
document.getElementById('fir').value+='';
else if(iiii==1 && iiiii==2)
document.getElementById('sec').value+='';
else if(iiii==1 && iiiii==1)
document.getElementById('op').value=vall;
}
function calc()
{
if(document.getElementById('disp').value=="" && iiii==0)
document.getElementById('dispans').innerHTML="";
else if(document.getElementById('fir').value=="" && document.getElementById('op').value=="" && document.getElementById('sec').value=="" && iiii==1)
document.getElementById('dispans').innerHTML="";
else if(document.getElementById('fir').value=="" && (document.getElementById('op').value!="" || document.getElementById('op').value=="") && document.getElementById('sec').value!="" && iiii==1)
document.getElementById('dispans').innerHTML="Enter first value";
else if(document.getElementById('fir').value!="" && (document.getElementById('op').value!="" || document.getElementById('op').value=="") && document.getElementById('sec').value=="" && iiii==1)
document.getElementById('dispans').innerHTML="Enter second value";
else if(document.getElementById('fir').value!="" && document.getElementById('op').value=="" && document.getElementById('sec').value!="" && iiii==1)
document.getElementById('dispans').innerHTML="Enter valid operator ( +,-,*,/ )";

else if ((i==0||i==1) && ii==0 && iiii==0)
{
xxx=document.getElementById('disp').value;
yyy=eval(xxx);
document.getElementById('dispans').innerHTML=yyy;
Ans=yyy;
}
else if ((i==0||i==1) && ii==11 && iiii==0)
{
xxx=document.getElementById('disp').value;
yyy=eval(xxx);
yyyyy=document.getElementById('dispans').innerHTML=Number(yyy).toFixed(1);
Ans=yyyyy;
}
else if ((i==0||i==1) && ii==22 && iiii==0)
{
xxx=document.getElementById('disp').value;
yyy=eval(xxx);
yyyyyy=document.getElementById('dispans').innerHTML=Number(yyy).toFixed(2);
Ans=yyyyyy;
}
else if ((i==0||i==1) && ii==33 && iiii==0)
{
xxx=document.getElementById('disp').value;
yyy=eval(xxx);
yyyyyyy=document.getElementById('dispans').innerHTML=Number(yyy).toFixed(3);
Ans=yyyyyyy;
}
else if ((i==0||i==1) && ii==55 && iiii==0)
{
xxx=document.getElementById('disp').value;
yyy=eval(xxx);
yyyyyyyy=document.getElementById('dispans').innerHTML=Number(yyy).toFixed(5);
Ans=yyyyyyyy;
}
else if ((i==0||i==1) && ii==100 && iiii==0)
{
xxx=document.getElementById('disp').value;
yyy=eval(xxx);
yyyyyyyyy=document.getElementById('dispans').innerHTML=Number(yyy).toFixed(10);
Ans=yyyyyyyyy;
}
else if ((i==0||i==1) && ii==1000 && iiii==0)
{
xxx=document.getElementById('disp').value;
yyy=eval(xxx);
yyyyyyyyyy=document.getElementById('dispans').innerHTML=Number(yyy).toFixed(0);
Ans=yyyyyyyyyy;
}

else if ((i==0||i==1) && iii==0 && iiii==1)
{
xxx=document.getElementById('fir').value;
yyy=document.getElementById('op').value;
zzz=document.getElementById('sec').value;
v=parseInt(xxx);
vv=parseInt(zzz);
if(yyy=='+')
{vvv=document.getElementById('dispans').innerHTML=Number(v+vv).toString(10);
Ans=vvv;}
else if(yyy=='-')
{vvv=document.getElementById('dispans').innerHTML=Number(v-vv).toString(10);
Ans=vvv;}
else if(yyy=='*')
{vvv=document.getElementById('dispans').innerHTML=Number(v*vv).toString(10);
Ans=vvv;}
else if(yyy=='/')
{vvvv=parseInt(v/vv);
vvv=document.getElementById('dispans').innerHTML="Quotient:"+parseInt(v/vv).toString(10)+"<br>Remainder:"+Number(v%vv).toString(10);
Ans=vvvv;}
else
document.getElementById('dispans').innerHTML='Enter valid operator ( +,-,*,/ )';
}
else if ((i==0||i==1) && iii==1 && iiii==1)
{
xxx=document.getElementById('fir').value;
yyy=document.getElementById('op').value;
zzz=document.getElementById('sec').value;
v=parseInt(xxx,2);
vv=parseInt(zzz,2);
if(yyy=='+')
{vvv=document.getElementById('dispans').innerHTML=Number(v+vv).toString(2);
Ans=vvv;}
else if(yyy=='-')
{vvv=document.getElementById('dispans').innerHTML=Number(v-vv).toString(2);
Ans=vvv;}
else if(yyy=='*')
{vvv=document.getElementById('dispans').innerHTML=Number(v*vv).toString(2);
Ans=vvv;}
else if(yyy=='/')
{vvvv=parseInt(v/vv).toString(2);
vvv=document.getElementById('dispans').innerHTML="Quotient:"+parseInt(v/vv).toString(2)+"<br>Remainder:"+Number(v%vv).toString(2);
Ans=vvvv;}
else
document.getElementById('dispans').innerHTML='Enter valid operator (+,-,*,/)';
}
else if ((i==0||i==1) && iii==2 && iiii==1)
{
xxx=document.getElementById('fir').value;
yyy=document.getElementById('op').value;
zzz=document.getElementById('sec').value;
v=parseInt(xxx,8);
vv=parseInt(zzz,8);
if(yyy=='+')
{vvv=document.getElementById('dispans').innerHTML=Number(v+vv).toString(8);
Ans=vvv;}
else if(yyy=='-')
{vvv=document.getElementById('dispans').innerHTML=Number(v-vv).toString(8);
Ans=vvv;}
else if(yyy=='*')
{vvv=document.getElementById('dispans').innerHTML=Number(v*vv).toString(8);
Ans=vvv;}
else if(yyy=='/')
{vvvv=parseInt(v/vv).toString(8);
vvv=document.getElementById('dispans').innerHTML="Quotient:"+parseInt(v/vv).toString(8)+"<br>Remainder:"+Number(v%vv).toString(8);
Ans=vvvv;}
else
document.getElementById('dispans').innerHTML='Enter valid operator (+,-,*,/)';
}
else if ((i==0||i==1) && iii==3 && iiii==1)
{
xxx=document.getElementById('fir').value;
yyy=document.getElementById('op').value;
zzz=document.getElementById('sec').value;
v=parseInt(xxx,16);
vv=parseInt(zzz,16);
if(yyy=='+')
{vvv=document.getElementById('dispans').innerHTML=(Number(v+vv).toString(16)).toUpperCase();
Ans=vvv;}
else if(yyy=='-')
{vvv=document.getElementById('dispans').innerHTML=(Number(v-vv).toString(16)).toUpperCase();
Ans=vvv;}
else if(yyy=='*')
{vvv=document.getElementById('dispans').innerHTML=(Number(v*vv).toString(16)).toUpperCase();
Ans=vvv;}
else if(yyy=='/')
{vvvv=(parseInt(v/vv).toString(16)).toUpperCase();
vvv=document.getElementById('dispans').innerHTML="Quotient:"+(parseInt(v/vv).toString(16)).toUpperCase()+"<br>Remainder:"+(Number(v+vv).toString(16)).toUpperCase();
Ans=vvvv;}
else
document.getElementById('dispans').innerHTML='Enter valid operator (+,-,*,/)';
}
}
function del()
{
if(iiii==0)
{
xxxx=document.getElementById('disp').value;
yyyy=xxxx.substr(0,xxxx.length-1);
document.getElementById('disp').value=yyyy;
}
else if(iiii==1 && iiiii==0)
{
xxxxx=document.getElementById('fir').value;
yyyyy=xxxxx.substr(0,xxxxx.length-1);
document.getElementById('fir').value=yyyyy;
}
else if(iiii==1 && iiiii==1)
{
xxxxxx=document.getElementById('op').value;
yyyyyy=xxxxxx.substr(0,xxxxxx.length-1);
document.getElementById('op').value=yyyyyy;
}
else if(iiii==1 && iiiii==2)
{
xxxxxxx=document.getElementById('sec').value;
yyyyyyy=xxxxxxx.substr(0,xxxxxxx.length-1);
document.getElementById('sec').value=yyyyyyy;
}}
function clearok()
{
if(iiii==0)
{
document.getElementById('disp').value="";
document.getElementById('dispans').innerHTML="";
}
else if (iiii==1)
{
document.getElementById('fir').value="";
document.getElementById('op').value="";
document.getElementById('sec').value="";
document.getElementById('dispans').innerHTML="";
iiiii=0;
}
}
function ans()
{
if(iiii==0)
{
document.getElementById('disp').value+='Ans';
}
else if(iiii==1 && iiiii==0)
{
document.getElementById('fir').value+=Ans;
}
else if(iiii==1 && iiiii==1)
{
document.getElementById('op').value+="";
}
else if(iiii==1 && iiiii==2)
{
document.getElementById('sec').value+=Ans;
}
}
function pie()
{
π=Math.PI;
if(iiii==0)
document.getElementById('disp').value+='π';
else if(iiii==1)
document.getElementById('disp').value+='';
}
function sine()
{
π=Math.PI;
if(i==0 && iiii==0)
{sin=Math.sin;
document.getElementById('disp').value+="sin(";
i=0;}
else if(i==1 && iiii==0)
{sin=Math.sin;
document.getElementById('disp').value+="sin(π/180*";
i=1;}
else if((i==1 ||i==0) && iiii==1)
document.getElementById('disp').value+="";
}
function cose()
{
π=Math.PI;
if(i==0 && iiii==0)
{cos=Math.cos;
document.getElementById('disp').value+="cos(";
i=0;}
else if(i==1 && iiii==0)
{cos=Math.cos;
document.getElementById('disp').value+="cos(π/180*";
i=1;}
else if((i==1 ||i==0) && iiii==1)
document.getElementById('disp').value+="";
}
function tane()
{
π=Math.PI;
if(i==0 && iiii==0)
{tan=Math.tan;
document.getElementById('disp').value+="tan(";
i=0;}
else if(i==1 && iiii==0)
{tan=Math.tan;
document.getElementById('disp').value+="tan(π/180*";
i=1;}
else if((i==1 ||i==0) && iiii==1)
document.getElementById('disp').value+="";
}
function log()
{if(iiii==0)
{log=Math.log10;
document.getElementById('disp').value+="log(";}
else if(iiii==1)
document.getElementById('disp').value+="";
}
function ln()
{if(iiii==0)
{ln=Math.log;
document.getElementById('disp').value+="ln(";
}
else if(iiii==1)
document.getElementById('disp').value+="";
}
function pow()
{if(iiii==0)
{power=Math.pow;
document.getElementById('disp').value+="power(";
}
else if(iiii==1)
document.getElementById('disp').value+="";
}
function exp()
{if(iiii==0)
{e=Math.E;
document.getElementById('disp').value+="e";
}
else if(iiii==1)
document.getElementById('disp').value+="";
}
function sqr()
{if(iiii==0)
{sqrt=Math.sqrt;
document.getElementById('disp').value+="sqrt(";
}
else if(iiii==1)
document.getElementById('disp').value+="";
}
function sinei()
{
if(i==0 && iiii==0)
{sin_inverse=Math.asin;
document.getElementById('disp').value+="sin_inverse(";
i=0;}
else if(i==1 && iiii==0)
{π=Math.PI;
sin_inverse=Math.asin;
document.getElementById('disp').value+="180/π*sin_inverse(";
i=1;}
else if((i==0 || i==1) && iiii==1)
document.getElementById('disp').value+="";
}
function cosei()
{
π=Math.PI;
if(i==0 && iiii==0)
{cos_inverse=Math.acos;
document.getElementById('disp').value+="cos_inverse(";
i=0;}
else if(i==1 && iiii==0)
{cos_inverse=Math.acos;
document.getElementById('disp').value+="180/π*cos_inverse(";
i=1;}
else if((i==0 || i==1) && iiii==1)
document.getElementById('disp').value+="";
}
function tanei()
{
if(i==0 && iiii==0)
{tan_inverse=Math.atan;
document.getElementById('disp').value+="tan_inverse(";
i=0;}
else if(i==1 && iiii==0)
{π=Math.PI;
tan_inverse=Math.atan;
document.getElementById('disp').value+="180/π*tan_inverse(";
i=1;}
else if((i==0 || i==1) && iiii==1)
document.getElementById('disp').value+="";
}
function tenpow()
{if(iiii==0)
{power=Math.pow;
document.getElementById('disp').value+='*power(10,';
}
else if(iiii==1)
document.getElementById('disp').value+="";
}
function set()
{
document.getElementById('setting').style.display="block";
}
function closedd()
{
document.getElementById('setting').style.display="none";
}
function rad()
{
document.getElementById('deg').style.backgroundColor="white";
document.getElementById('rad').style.backgroundColor="#00FF00";
document.getElementById('degrad').innerHTML="Rad";
i=0;
}
function deg()
{
document.getElementById('deg').style.backgroundColor="#00FF00";
document.getElementById('rad').style.backgroundColor="white";
document.getElementById('degrad').innerHTML="Deg";
i=1;
}
function def()
{
document.getElementById('def').style.backgroundColor="#00FF00";
document.getElementById('zero').style.backgroundColor="white";
document.getElementById('one').style.backgroundColor="white";
document.getElementById('twoo').style.backgroundColor="white";
document.getElementById('three').style.backgroundColor="white";
document.getElementById('four').style.backgroundColor="white";
document.getElementById('five').style.backgroundColor="white";
ii=0;
}
function zero()
{
document.getElementById('def').style.backgroundColor="white";
document.getElementById('zero').style.backgroundColor="#00FF00";
document.getElementById('one').style.backgroundColor="white";
document.getElementById('twoo').style.backgroundColor="white";
document.getElementById('three').style.backgroundColor="white";
document.getElementById('four').style.backgroundColor="white";
document.getElementById('five').style.backgroundColor="white";
ii=1000;
}
function one()
{
document.getElementById('def').style.backgroundColor="white";
document.getElementById('zero').style.backgroundColor="white";
document.getElementById('one').style.backgroundColor="#00FF00";
document.getElementById('twoo').style.backgroundColor="white";
document.getElementById('three').style.backgroundColor="white";
document.getElementById('four').style.backgroundColor="white";
document.getElementById('five').style.backgroundColor="white";
ii=11;
}
function twoo()
{
document.getElementById('def').style.backgroundColor="white";
document.getElementById('zero').style.backgroundColor="white";
document.getElementById('one').style.backgroundColor="white";
document.getElementById('twoo').style.backgroundColor="#00FF00";
document.getElementById('three').style.backgroundColor="white";
document.getElementById('four').style.backgroundColor="white";
document.getElementById('five').style.backgroundColor="white";
ii=22;
}
function three()
{
document.getElementById('def').style.backgroundColor="white";
document.getElementById('zero').style.backgroundColor="white";
document.getElementById('one').style.backgroundColor="white";
document.getElementById('twoo').style.backgroundColor="white";
document.getElementById('three').style.backgroundColor="#00FF00";
document.getElementById('four').style.backgroundColor="white";
document.getElementById('five').style.backgroundColor="white";
ii=33;
}
function four()
{
document.getElementById('def').style.backgroundColor="white";
document.getElementById('zero').style.backgroundColor="white";
document.getElementById('one').style.backgroundColor="white";
document.getElementById('twoo').style.backgroundColor="white";
document.getElementById('three').style.backgroundColor="white";
document.getElementById('four').style.backgroundColor="#00FF00";
document.getElementById('five').style.backgroundColor="white";
ii=55;
}
function five()
{
document.getElementById('def').style.backgroundColor="white";
document.getElementById('zero').style.backgroundColor="white";
document.getElementById('one').style.backgroundColor="white";
document.getElementById('twoo').style.backgroundColor="white";
document.getElementById('three').style.backgroundColor="white";
document.getElementById('four').style.backgroundColor="white";
document.getElementById('five').style.backgroundColor="#00FF00";
ii=100;
}
function decic()
{
aa=document.getElementById('disp').value;
if(aa=='')
document.getElementById('dispans').innerHTML='undefined';
else
{aaa=eval(aa);
aaaa=document.getElementById('dispans').innerHTML=aaa;
Ans=aaaa;}
}
function binc()
{
aa=document.getElementById('disp').value;
if(aa=='')
document.getElementById('dispans').innerHTML='undefined';
else
{aaa=eval(aa);
aaaa=Number(aaa).toString(2);
document.getElementById('dispans').innerHTML='('+Number(aaa).toString(2)+')'+"<sub style='font-size:9px;'>2</sub>";
Ans=aaaa;}
}
function octc()
{
aa=document.getElementById('disp').value;
if(aa=='')
document.getElementById('dispans').innerHTML='undefined';
else
{aaa=eval(aa);
aaaa=Number(aaa).toString(8);
document.getElementById('dispans').innerHTML='('+Number(aaa).toString(8)+')'+"<sub style='font-size:9px;'>8</sub>";
Ans=aaaa;}
}
function hexc()
{
aa=document.getElementById('disp').value;
if(aa=='')
document.getElementById('dispans').innerHTML='undefined';
else
{aaa=eval(aa);
aaaa=(Number(aaa).toString(16)).toUpperCase();
document.getElementById('dispans').innerHTML='('+(Number(aaa).toString(16)).toUpperCase()+')'+"<sub style='font-size:9px;'>16</sub>";
Ans=aaaa;}
}
function decicc()
{
document.getElementById('decicc').style.backgroundColor="#00ff00";
document.getElementById('bincc').style.backgroundColor="#013220";
document.getElementById('octcc').style.backgroundColor="#013220";
document.getElementById('hexcc').style.backgroundColor="#013220";
iii=0;
document.getElementById('sin').style.cursor="not-allowed";
document.getElementById('cos').style.cursor="not-allowed";
document.getElementById('tan').style.cursor="not-allowed";
document.getElementById('log').style.cursor="not-allowed";
document.getElementById('ln').style.cursor="not-allowed";
document.getElementById('sini').style.cursor="not-allowed";
document.getElementById('cosi').style.cursor="not-allowed";
document.getElementById('tani').style.cursor="not-allowed";
document.getElementById('sqr').style.cursor="not-allowed";
document.getElementById('tenpow').style.cursor="not-allowed";
document.getElementById('pow').style.cursor="not-allowed";
document.getElementById('comma').style.cursor="not-allowed";
document.getElementById('point').style.cursor="not-allowed";
document.getElementById('exp').style.cursor="not-allowed";
document.getElementById('pie').style.cursor="not-allowed";
document.getElementById('com1').style.cursor="not-allowed";
document.getElementById('com2').style.cursor="not-allowed";
document.getElementById('sev').style.cursor="default";
document.getElementById('eig').style.cursor="default";
document.getElementById('nin').style.cursor="default";
document.getElementById('fiv').style.cursor="default";
document.getElementById('fou').style.cursor="default";
document.getElementById('thr').style.cursor="default";
document.getElementById('two').style.cursor="default";
document.getElementById('six').style.cursor="default";
document.getElementById('div4').style.display="none";
document.getElementById('div3').style.display="block";
}
function bincc()
{
document.getElementById('decicc').style.backgroundColor="#013220";
document.getElementById('bincc').style.backgroundColor="#00ff00";
document.getElementById('octcc').style.backgroundColor="#013220";
document.getElementById('hexcc').style.backgroundColor="#013220";
iii=1;
document.getElementById('sin').style.cursor="not-allowed";
document.getElementById('cos').style.cursor="not-allowed";
document.getElementById('tan').style.cursor="not-allowed";
document.getElementById('log').style.cursor="not-allowed";
document.getElementById('ln').style.cursor="not-allowed";
document.getElementById('sini').style.cursor="not-allowed";
document.getElementById('cosi').style.cursor="not-allowed";
document.getElementById('tani').style.cursor="not-allowed";
document.getElementById('sqr').style.cursor="not-allowed";
document.getElementById('tenpow').style.cursor="not-allowed";
document.getElementById('pow').style.cursor="not-allowed";
document.getElementById('comma').style.cursor="not-allowed";
document.getElementById('point').style.cursor="not-allowed";
document.getElementById('exp').style.cursor="not-allowed";
document.getElementById('pie').style.cursor="not-allowed";
document.getElementById('sev').style.cursor="not-allowed";
document.getElementById('eig').style.cursor="not-allowed";
document.getElementById('nin').style.cursor="not-allowed";
document.getElementById('fiv').style.cursor="not-allowed";
document.getElementById('fou').style.cursor="not-allowed";
document.getElementById('thr').style.cursor="not-allowed";
document.getElementById('two').style.cursor="not-allowed";
document.getElementById('six').style.cursor="not-allowed";
document.getElementById('com1').style.cursor="not-allowed";
document.getElementById('com2').style.cursor="not-allowed";
document.getElementById('div4').style.display="none";
document.getElementById('div3').style.display="block";
}
function octcc()
{
document.getElementById('decicc').style.backgroundColor="#013220";
document.getElementById('bincc').style.backgroundColor="#013220";
document.getElementById('octcc').style.backgroundColor="#00ff00";
document.getElementById('hexcc').style.backgroundColor="#013220";
iii=2;
document.getElementById('sin').style.cursor="not-allowed";
document.getElementById('cos').style.cursor="not-allowed";
document.getElementById('tan').style.cursor="not-allowed";
document.getElementById('log').style.cursor="not-allowed";
document.getElementById('ln').style.cursor="not-allowed";
document.getElementById('sini').style.cursor="not-allowed";
document.getElementById('cosi').style.cursor="not-allowed";
document.getElementById('tani').style.cursor="not-allowed";
document.getElementById('sqr').style.cursor="not-allowed";
document.getElementById('tenpow').style.cursor="not-allowed";
document.getElementById('pow').style.cursor="not-allowed";
document.getElementById('comma').style.cursor="not-allowed";
document.getElementById('exp').style.cursor="not-allowed";
document.getElementById('pie').style.cursor="not-allowed";
document.getElementById('eig').style.cursor="not-allowed";
document.getElementById('nin').style.cursor="not-allowed";
document.getElementById('point').style.cursor="not-allowed";
document.getElementById('com1').style.cursor="not-allowed";
document.getElementById('com2').style.cursor="not-allowed";
document.getElementById('fiv').style.cursor="default";
document.getElementById('fou').style.cursor="default";
document.getElementById('thr').style.cursor="default";
document.getElementById('two').style.cursor="default";
document.getElementById('six').style.cursor="default";
document.getElementById('sev').style.cursor="default";
document.getElementById('div4').style.display="none";
document.getElementById('div3').style.display="block";
}
function hexcc()
{
document.getElementById('decicc').style.backgroundColor="#013220";
document.getElementById('bincc').style.backgroundColor="#013220";
document.getElementById('octcc').style.backgroundColor="#013220";
document.getElementById('hexcc').style.backgroundColor="#00ff00";
iii=3;
document.getElementById('sin').style.cursor="not-allowed";
document.getElementById('cos').style.cursor="not-allowed";
document.getElementById('tan').style.cursor="not-allowed";
document.getElementById('log').style.cursor="not-allowed";
document.getElementById('ln').style.cursor="not-allowed";
document.getElementById('sini').style.cursor="not-allowed";
document.getElementById('cosi').style.cursor="not-allowed";
document.getElementById('tani').style.cursor="not-allowed";
document.getElementById('sqr').style.cursor="not-allowed";
document.getElementById('tenpow').style.cursor="not-allowed";
document.getElementById('pow').style.cursor="not-allowed";
document.getElementById('comma').style.cursor="not-allowed";
document.getElementById('point').style.cursor="not-allowed";
document.getElementById('exp').style.cursor="not-allowed";
document.getElementById('com1').style.cursor="not-allowed";
document.getElementById('com2').style.cursor="not-allowed";
document.getElementById('sev').style.cursor="default";
document.getElementById('eig').style.cursor="default";
document.getElementById('nin').style.cursor="default";
document.getElementById('fiv').style.cursor="default";
document.getElementById('fou').style.cursor="default";
document.getElementById('thr').style.cursor="default";
document.getElementById('two').style.cursor="default";
document.getElementById('six').style.cursor="default";
document.getElementById('div4').style.display="block";
document.getElementById('div3').style.display="none";
}
function math()
{
document.getElementById('math').style.backgroundColor="#00ff00";
document.getElementById('basen').style.backgroundColor="white";
document.getElementById('con').innerHTML="MATH";
iiii=0;
document.getElementById('disp').style.display="block";
document.getElementById('base').style.display="none";
document.getElementById('div1').style.display="block";
document.getElementById('div2').style.display="none";
document.getElementById('dispans').style.fontSize="25px";
document.getElementById('sin').style.cursor="default";
document.getElementById('cos').style.cursor="default";
document.getElementById('tan').style.cursor="default";
document.getElementById('log').style.cursor="default";
document.getElementById('ln').style.cursor="default";
document.getElementById('sini').style.cursor="default";
document.getElementById('cosi').style.cursor="default";
document.getElementById('tani').style.cursor="default";
document.getElementById('sqr').style.cursor="default";
document.getElementById('tenpow').style.cursor="default";
document.getElementById('pow').style.cursor="default";
document.getElementById('comma').style.cursor="default";
document.getElementById('point').style.cursor="default";
document.getElementById('exp').style.cursor="default";
document.getElementById('pie').style.cursor="default";
document.getElementById('com1').style.cursor="default";
document.getElementById('com2').style.cursor="default";
document.getElementById('sev').style.cursor="default";
document.getElementById('eig').style.cursor="default";
document.getElementById('nin').style.cursor="default";
document.getElementById('fiv').style.cursor="default";
document.getElementById('fou').style.cursor="default";
document.getElementById('thr').style.cursor="default";
document.getElementById('two').style.cursor="default";
document.getElementById('six').style.cursor="default";
document.getElementById('div3').style.display="block";
document.getElementById('div4').style.display="none";
}
function basen()
{
document.getElementById('math').style.backgroundColor="white";
document.getElementById('basen').style.backgroundColor="#00ff00";
document.getElementById('con').innerHTML="Base-N";
iiii=1;
document.getElementById('disp').style.display="none";
document.getElementById('base').style.display="block";
document.getElementById('div2').style.display="block";
document.getElementById('div1').style.display="none";
document.getElementById('dispans').style.fontSize="20px";
}
function disph(aich)
{
if(iiii==1 && iiiii==0 && iii==3)
document.getElementById('fir').value+=aich;
else if(iiii==1 && iiiii==2 && iii==3)
document.getElementById('sec').value+=aich;
}
function length()
{
document.getElementById('div100').style.display="none";
document.getElementById('div11').style.display="block";
}
function back()
{
document.getElementById('div100').style.display="block";
document.getElementById('div11').style.display="none";
}
function area()
{
document.getElementById('div100').style.display="none";
document.getElementById('div22').style.display="block";
}
function back2()
{
document.getElementById('div100').style.display="block";
document.getElementById('div22').style.display="none";
}
function volume()
{
document.getElementById('div100').style.display="none";
document.getElementById('div33').style.display="block";
}
function back3()
{
document.getElementById('div100').style.display="block";
document.getElementById('div33').style.display="none";
}
function temp()
{
document.getElementById('div100').style.display="none";
document.getElementById('div44').style.display="block";
}
function back4()
{
document.getElementById('div100').style.display="block";
document.getElementById('div44').style.display="none";
}
function mass()
{
document.getElementById('div100').style.display="none";
document.getElementById('div55').style.display="block";
}
function back5()
{
document.getElementById('div100').style.display="block";
document.getElementById('div55').style.display="none";
}
function time()
{
document.getElementById('div100').style.display="none";
document.getElementById('div66').style.display="block";
}
function back6()
{
document.getElementById('div100').style.display="block";
document.getElementById('div66').style.display="none";
}
function convertl(len)
{
if(len=='m')
{l=document.getElementById('m').value;
document.getElementById('cm').value=l*100;
document.getElementById('mm').value=l*1000;
document.getElementById('in').value=l*39.37;
document.getElementById('ft').value=l*39.37/12;
document.getElementById('mim').value=l*1000000;
document.getElementById('nm').value=l*1000000000;
document.getElementById('km').value=l*1/1000;
document.getElementById('mi').value=l*1/1609.34;
}
else if(len=='cm')
{l=document.getElementById('cm').value;
ll=document.getElementById('m').value=l/100;
document.getElementById('mm').value=ll*1000;
document.getElementById('mim').value=ll*1000000;
document.getElementById('nm').value=ll*1000000000;
document.getElementById('km').value=ll*1/1000;
document.getElementById('mi').value=ll*1/1609.34;
document.getElementById('in').value=ll*39.37;
document.getElementById('ft').value=ll*39.37/12;
}
else if(len=='mm')
{l=document.getElementById('mm').value;
ll=document.getElementById('m').value=l/1000;
document.getElementById('cm').value=ll*100;
document.getElementById('mim').value=ll*1000000;
document.getElementById('nm').value=ll*1000000000;
document.getElementById('km').value=ll*1/1000;
document.getElementById('mi').value=ll*1/1609.34;
document.getElementById('in').value=ll*39.37;
document.getElementById('ft').value=ll*39.37/12;
}
else if(len=='mim')
{l=document.getElementById('mim').value;
ll=document.getElementById('m').value=l/1000000;
document.getElementById('mm').value=ll*1000;
document.getElementById('cm').value=ll*100;
document.getElementById('nm').value=ll*1000000000;
document.getElementById('km').value=ll*1/1000;
document.getElementById('mi').value=ll*1/1609.34;
document.getElementById('in').value=ll*39.37;
document.getElementById('ft').value=ll*39.37/12;
}
else if(len=='nm')
{l=document.getElementById('nm').value;
ll=document.getElementById('m').value=l/1000000000;
document.getElementById('mm').value=ll*1000;
document.getElementById('mim').value=ll*1000000;
document.getElementById('cm').value=ll*100;
document.getElementById('km').value=ll*1/1000;
document.getElementById('mi').value=ll*1/1609.34;
document.getElementById('in').value=ll*39.37;
document.getElementById('ft').value=ll*39.37/12;
}
else if(len=='km')
{l=document.getElementById('km').value;
ll=document.getElementById('m').value=l*1000;
document.getElementById('mm').value=ll*1000;
document.getElementById('mim').value=ll*1000000;
document.getElementById('nm').value=ll*1000000000;
document.getElementById('cm').value=ll*100;
document.getElementById('mi').value=ll*1/1609.34;
document.getElementById('in').value=ll*39.37;
document.getElementById('ft').value=ll*39.37/12;
}
else if(len=='mi')
{l=document.getElementById('mi').value;
ll=document.getElementById('m').value=l*1609.34;
document.getElementById('mm').value=ll*1000;
document.getElementById('mim').value=ll*1000000;
document.getElementById('nm').value=ll*1000000000;
document.getElementById('km').value=ll*1/1000;
document.getElementById('cm').value=ll*100;
document.getElementById('in').value=ll*39.37;
document.getElementById('ft').value=ll*39.37/12;
}
else if(len=='in')
{l=document.getElementById('in').value;
ll=document.getElementById('m').value=l/39.37;
document.getElementById('mm').value=ll*1000;
document.getElementById('mim').value=ll*1000000;
document.getElementById('nm').value=ll*1000000000;
document.getElementById('km').value=ll*1/1000;
document.getElementById('cm').value=ll*100;
document.getElementById('mi').value=ll/1609.34;
document.getElementById('ft').value=ll*39.37/12;
}
else if(len=='ft')
{l=document.getElementById('ft').value;
ll=document.getElementById('m').value=l*12/39.37;
document.getElementById('mm').value=ll*1000;
document.getElementById('mim').value=ll*1000000;
document.getElementById('nm').value=ll*1000000000;
document.getElementById('km').value=ll*1/1000;
document.getElementById('cm').value=ll*100;
document.getElementById('in').value=ll*39.37;
document.getElementById('mi').value=ll/1609.34;
}
}
function clearl()
{
document.getElementById('mi').value="";	
document.getElementById('m').value="";	
document.getElementById('mim').value="";	
document.getElementById('cm').value="";	
document.getElementById('nm').value="";	
document.getElementById('mm').value="";	
document.getElementById('km').value="";	
document.getElementById('ft').value="";	
document.getElementById('in').value="";	
}
function converta(are)
{
if(are=='m2')
{a=document.getElementById('m2').value;
document.getElementById('cm2').value=a*100*100;
document.getElementById('mm2').value=a*1000*1000;
document.getElementById('in2').value=a*39.37*39.37;
document.getElementById('ft2').value=a*39.37/12/12*39.37;
document.getElementById('hec').value=a/10000;
document.getElementById('acr').value=a*0.000247105;
document.getElementById('km2').value=a*1/1000/1000;
document.getElementById('mi2').value=a*1/1609.34/1609.34;
}
else if(are=='cm2')
{a=document.getElementById('cm2').value;
aa=document.getElementById('m2').value=a/100/100;
document.getElementById('mm2').value=aa*1000*1000;
document.getElementById('in2').value=aa*39.37*39.37;
document.getElementById('ft2').value=aa*39.37/12/12*39.37;
document.getElementById('hec').value=aa/10000;
document.getElementById('acr').value=aa*0.000247105;
document.getElementById('km2').value=aa*1/1000/1000;
document.getElementById('mi2').value=aa*1/1609.34/1609.34;
}
else if(are=='mm2')
{a=document.getElementById('mm2').value;
aa=document.getElementById('m2').value=a/1000/1000;
document.getElementById('cm2').value=aa*100*100;
document.getElementById('in2').value=aa*39.37*39.37;
document.getElementById('ft2').value=aa*39.37/12/12*39.37;
document.getElementById('hec').value=aa/10000;
document.getElementById('acr').value=aa*0.000247105;
document.getElementById('km2').value=aa*1/1000/1000;
document.getElementById('mi2').value=aa*1/1609.34/1609.34;
}
else if(are=='in2')
{a=document.getElementById('in2').value;
aa=document.getElementById('m2').value=a*0.00064516;
document.getElementById('cm2').value=aa*100*100;
document.getElementById('mm2').value=aa*1000*1000;
document.getElementById('ft2').value=aa*39.37/12/12*39.37;
document.getElementById('hec').value=aa/10000;
document.getElementById('acr').value=aa*0.000247105;
document.getElementById('km2').value=aa*1/1000/1000;
document.getElementById('mi2').value=aa*1/1609.34/1609.34;
}
else if(are=='ft2')
{a=document.getElementById('ft2').value;
aa=document.getElementById('m2').value=a*0.092903;
document.getElementById('cm2').value=aa*100*100;
document.getElementById('mm2').value=aa*1000*1000;
document.getElementById('in2').value=aa*39.37*39.37;
document.getElementById('hec').value=aa/10000;
document.getElementById('acr').value=aa*0.000247105;
document.getElementById('km2').value=aa*1/1000/1000;
document.getElementById('mi2').value=aa*1/1609.34/1609.34;
}
else if(are=='hec')
{a=document.getElementById('hec').value;
aa=document.getElementById('m2').value=a*10000;
document.getElementById('cm2').value=aa*100*100;
document.getElementById('mm2').value=aa*1000*1000;
document.getElementById('in2').value=aa*39.37*39.37;
document.getElementById('ft2').value=aa*10.7639;
document.getElementById('acr').value=aa*0.000247105;
document.getElementById('km2').value=aa*1/1000/1000;
document.getElementById('mi2').value=aa*1/1609.34/1609.34;
}
else if(are=='acr')
{a=document.getElementById('acr').value;
aa=document.getElementById('m2').value=a*4046.86;
document.getElementById('cm2').value=aa*100*100;
document.getElementById('mm2').value=aa*1000*1000;
document.getElementById('in2').value=aa*39.37*39.37;
document.getElementById('ft2').value=aa*10.7639;
document.getElementById('hec').value=aa/10000;
document.getElementById('km2').value=aa*1/1000/1000;
document.getElementById('mi2').value=aa*1/1609.34/1609.34;
}
else if(are=='km2')
{a=document.getElementById('km2').value;
aa=document.getElementById('m2').value=a*1000*1000;
document.getElementById('cm2').value=aa*100*100;
document.getElementById('mm2').value=aa*1000*1000;
document.getElementById('in2').value=aa*39.37*39.37;
document.getElementById('ft2').value=aa*10.7639;
document.getElementById('hec').value=aa/10000;
document.getElementById('acr').value=aa*0.000247105;
document.getElementById('mi2').value=aa*1/1609.34/1609.34;
}
else if(are=='mi2')
{a=document.getElementById('mi2').value;
aa=document.getElementById('m2').value=a*1609.34*1609.34;
document.getElementById('cm2').value=aa*100*100;
document.getElementById('mm2').value=aa*1000*1000;
document.getElementById('in2').value=aa*39.37*39.37;
document.getElementById('ft2').value=aa*10.7639;
document.getElementById('hec').value=aa/10000;
document.getElementById('acr').value=aa*0.000247105;
document.getElementById('km2').value=aa*1/1000/1000;
}
}
function cleara()
{
document.getElementById('mi2').value="";	
document.getElementById('m2').value="";	
document.getElementById('hec').value="";	
document.getElementById('acr').value="";	
document.getElementById('cm2').value="";	
document.getElementById('mm2').value="";	
document.getElementById('km2').value="";	
document.getElementById('ft2').value="";	
document.getElementById('in2').value="";	
}
function convertt(temp)
{
if(temp=='cel')
{
tt=document.getElementById('cel').value;
document.getElementById('fah').value=tt*180/100+32;
document.getElementById('kel').value=Number(tt)+273;
document.getElementById('rea').value=Number(tt)+80;
document.getElementById('rin').value=tt*180/100+492;
}
else if(temp=='fah')
{
tt=document.getElementById('fah').value;
ttt=document.getElementById('cel').value=(tt-32)*100/180;
document.getElementById('kel').value=Number(ttt)+273;
document.getElementById('rea').value=Number(ttt)+80;
document.getElementById('rin').value=ttt*180/100+492;
}
else if(temp=='kel')
{
tt=document.getElementById('kel').value;
ttt=document.getElementById('cel').value=tt-273;
document.getElementById('fah').value=ttt*180/100+32;
document.getElementById('rea').value=Number(ttt)+80;
document.getElementById('rin').value=ttt*180/100+492;
}
else if(temp=='rea')
{
tt=document.getElementById('rea').value;
ttt=document.getElementById('cel').value=tt-80;
document.getElementById('fah').value=ttt*180/100+32;
document.getElementById('kel').value=Number(ttt)+273;
document.getElementById('rin').value=ttt*180/100+492;
}
else if(temp=='rin')
{
tt=document.getElementById('rin').value;
ttt=document.getElementById('cel').value=(tt-492)*100/180;
document.getElementById('fah').value=ttt*180/100+32;
document.getElementById('kel').value=Number(ttt)+273;
document.getElementById('rea').value=Number(ttt)+80;
}
}
function cleart()
{
document.getElementById('cel').value="";	
document.getElementById('fah').value="";	
document.getElementById('kel').value="";	
document.getElementById('rea').value="";	
document.getElementById('rin').value="";
}
function convertv(vol)
{
if(vol=='m3')
{V=document.getElementById('m3').value;
document.getElementById('cm3').value=V*100*100*100;
document.getElementById('mm3').value=V*1000*1000*1000;
document.getElementById('in3').value=V*39.37*39.37*39.37;
document.getElementById('ft3').value=V*39.37/12*39.37/12*39.37/12;
document.getElementById('li').value=V*1000;
document.getElementById('ml').value=V*1000*1000;
document.getElementById('ga').value=V*264.172;
}
else if(vol=='cm3')
{V=document.getElementById('cm3').value;
VV=document.getElementById('m3').value=V/100/100/100;
document.getElementById('mm3').value=VV*1000*1000*1000;
document.getElementById('in3').value=VV*39.37*39.37*39.37;
document.getElementById('ft3').value=VV*39.37/12*39.37/12*39.37/12;
document.getElementById('li').value=VV*1000;
document.getElementById('ml').value=VV*1000*1000;
document.getElementById('ga').value=VV*264.172;
}
else if(vol=='mm3')
{V=document.getElementById('mm3').value;
VV=document.getElementById('m3').value=V/1000/1000/1000;
document.getElementById('cm3').value=VV*100*100*100;
document.getElementById('in3').value=VV*39.37*39.37*39.37;
document.getElementById('ft3').value=VV*39.37/12*39.37/12*39.37/12;
document.getElementById('li').value=VV*1000;
document.getElementById('ml').value=VV*1000*1000;
document.getElementById('ga').value=VV*264.172;
}
else if(vol=='in3')
{V=document.getElementById('in3').value;
VV=document.getElementById('m3').value=V*1.6387162/100000;
document.getElementById('mm3').value=VV*1000*1000*1000;
document.getElementById('cm3').value=VV*100*100*100;
document.getElementById('ft3').value=VV*39.37/12*39.37/12*39.37/12;
document.getElementById('li').value=VV*1000;
document.getElementById('ml').value=VV*1000*1000;
document.getElementById('ga').value=VV*264.172;
}
else if(vol=='ft3')
{V=document.getElementById('ft3').value;
VV=document.getElementById('m3').value=V*0.0283168;
document.getElementById('mm3').value=VV*1000*1000*1000;
document.getElementById('cm3').value=VV*100*100*100;
document.getElementById('in3').value=VV*61023.7;
document.getElementById('li').value=VV*1000;
document.getElementById('ml').value=VV*1000*1000;
document.getElementById('ga').value=VV*264.172;
}
else if(vol=='li')
{V=document.getElementById('li').value;
VV=document.getElementById('m3').value=V/1000;
document.getElementById('mm3').value=VV*1000*1000*1000;
document.getElementById('cm3').value=VV*100*100*100;
document.getElementById('in3').value=VV*61023.7;
document.getElementById('ft3').value=VV*35.3147;
document.getElementById('ml').value=VV*1000*1000;
document.getElementById('ga').value=VV*264.172;
}
else if(vol=='ml')
{V=document.getElementById('ml').value;
VV=document.getElementById('m3').value=V/1000/1000;
document.getElementById('mm3').value=VV*1000*1000*1000;
document.getElementById('cm3').value=VV*100*100*100;
document.getElementById('in3').value=VV*61023.7;
document.getElementById('ft3').value=VV*35.3147;
document.getElementById('li').value=VV*1000;
document.getElementById('ga').value=VV*264.172;
}
else if(vol=='ga')
{V=document.getElementById('ga').value;
VV=document.getElementById('m3').value=V*0.0037854153498579;
document.getElementById('mm3').value=VV*1000*1000*1000;
document.getElementById('cm3').value=VV*100*100*100;
document.getElementById('in3').value=VV*61023.7;
document.getElementById('ft3').value=VV*35.3147;
document.getElementById('ml').value=VV*1000*1000;
document.getElementById('li').value=VV*1000;
}
}
function clearv()
{
document.getElementById('m3').value="";	
document.getElementById('cm3').value="";	
document.getElementById('mm3').value="";	
document.getElementById('li').value="";	
document.getElementById('in3').value="";	
document.getElementById('ft3').value="";	
document.getElementById('li').value="";	
document.getElementById('ml').value="";		
document.getElementById('ga').value="";		
}
function convertm(mass)
{
if(mass=='kg')
{m=document.getElementById('kg').value;
document.getElementById('gm').value=m*1000;
document.getElementById('mg').value=m*1000*1000;
document.getElementById('ou').value=m*35.274;
document.getElementById('po').value=m*2.20462;
document.getElementById('qu').value=m/100;
document.getElementById('to').value=m/1000;
}
else if(mass=='gm')
{m=document.getElementById('gm').value;
mm=document.getElementById('kg').value=m/1000;
document.getElementById('mg').value=mm*1000*1000;
document.getElementById('ou').value=mm*35.274;
document.getElementById('po').value=mm*2.20462;
document.getElementById('qu').value=mm/100;
document.getElementById('to').value=mm/1000;
}
else if(mass=='mg')
{m=document.getElementById('mg').value;
mm=document.getElementById('kg').value=m/1000/1000;
document.getElementById('gm').value=mm*1000;
document.getElementById('ou').value=mm*35.274;
document.getElementById('po').value=mm*2.20462;
document.getElementById('qu').value=mm/100;
document.getElementById('to').value=mm/1000;
}
else if(mass=='ou')
{m=document.getElementById('ou').value;
mm=document.getElementById('kg').value=m*0.0283495;
document.getElementById('gm').value=mm*1000;
document.getElementById('mg').value=mm*1000*1000;
document.getElementById('po').value=mm*2.20462;
document.getElementById('qu').value=mm/100;
document.getElementById('to').value=mm/1000;
}
else if(mass=='po')
{m=document.getElementById('po').value;
mm=document.getElementById('kg').value=m*0.453592;
document.getElementById('gm').value=mm*1000;
document.getElementById('ou').value=mm*35.274;
document.getElementById('mg').value=mm*1000*1000;
document.getElementById('qu').value=mm/100;
document.getElementById('to').value=mm/1000;
}
else if(mass=='qu')
{m=document.getElementById('qu').value;
mm=document.getElementById('kg').value=m*100;
document.getElementById('gm').value=mm*1000;
document.getElementById('ou').value=mm*35.274;
document.getElementById('po').value=mm*2.20462;
document.getElementById('mg').value=mm*1000*1000;
document.getElementById('to').value=mm/1000;
}
else if(mass=='to')
{m=document.getElementById('to').value;
mm=document.getElementById('kg').value=m*1000;
document.getElementById('gm').value=mm*1000;
document.getElementById('ou').value=mm*35.274;
document.getElementById('po').value=mm*2.20462;
document.getElementById('qu').value=mm/100;
document.getElementById('mg').value=mm*1000*1000;
}
}
function clearm()
{
document.getElementById('kg').value="";	
document.getElementById('gm').value="";	
document.getElementById('mg').value="";	
document.getElementById('po').value="";	
document.getElementById('ou').value="";	
document.getElementById('qu').value="";	
document.getElementById('to').value="";	
}
function convertti(time)
{
if(time=='se')
{ti=document.getElementById('se').value;
document.getElementById('min').value=ti/60;
document.getElementById('ho').value=ti/60/60;
document.getElementById('da').value=ti/60/60/24;
document.getElementById('ye').value=ti/60/60/24/365;
document.getElementById('de').value=ti/60/60/24/365/10;
document.getElementById('ce').value=ti/60/60/24/365/100;
second=document.getElementById('se').value;
hour=parseInt(second/3600);	
hour2=parseInt(second%3600);
minute=parseInt(hour2/60)
second2=second%60;
if(hour>9)
document.getElementById('hour').innerHTML=hour;
else
document.getElementById('hour').innerHTML='0'+hour;
if(minute>9)
document.getElementById('minute').innerHTML=minute;
else
document.getElementById('minute').innerHTML='0'+minute;
if(second2>9)
document.getElementById('second').innerHTML=second2;
else
document.getElementById('second').innerHTML='0'+second2;
}
else if(time=='min')
{ti=document.getElementById('min').value;
tii=document.getElementById('se').value=ti*60;
document.getElementById('ho').value=tii/60/60;
document.getElementById('da').value=tii/60/60/24;
document.getElementById('ye').value=tii/60/60/24/365;
document.getElementById('de').value=tii/60/60/24/365/10;
document.getElementById('ce').value=tii/60/60/24/365/100;
second=document.getElementById('se').value;
hour=parseInt(second/3600);	
hour2=parseInt(second%3600);
minute=parseInt(hour2/60)
second2=second%60;
if(hour>9)
document.getElementById('hour').innerHTML=hour;
else
document.getElementById('hour').innerHTML='0'+hour;
if(minute>9)
document.getElementById('minute').innerHTML=minute;
else
document.getElementById('minute').innerHTML='0'+minute;
if(second2>9)
document.getElementById('second').innerHTML=second2;
else
document.getElementById('second').innerHTML='0'+second2;
}
else if(time=='ho')
{ti=document.getElementById('ho').value;
tii=document.getElementById('se').value=ti*60*60;
document.getElementById('min').value=tii/60;
document.getElementById('da').value=tii/60/60/24;
document.getElementById('ye').value=tii/60/60/24/365;
document.getElementById('de').value=tii/60/60/24/365/10;
document.getElementById('ce').value=tii/60/60/24/365/100;
second=document.getElementById('se').value;
hour=parseInt(second/3600);	
hour2=parseInt(second%3600);
minute=parseInt(hour2/60)
second2=second%60;
if(hour>9)
document.getElementById('hour').innerHTML=hour;
else
document.getElementById('hour').innerHTML='0'+hour;
if(minute>9)
document.getElementById('minute').innerHTML=minute;
else
document.getElementById('minute').innerHTML='0'+minute;
if(second2>9)
document.getElementById('second').innerHTML=second2;
else
document.getElementById('second').innerHTML='0'+second2;
}
else if(time=='da')
{ti=document.getElementById('da').value;
tii=document.getElementById('se').value=ti*60*60*24;
document.getElementById('min').value=tii/60;
document.getElementById('ho').value=tii/60/60;
document.getElementById('ye').value=tii/60/60/24/365;
document.getElementById('de').value=tii/60/60/24/365/10;
document.getElementById('ce').value=tii/60/60/24/365/100;
second=document.getElementById('se').value;
hour=parseInt(second/3600);	
hour2=parseInt(second%3600);
minute=parseInt(hour2/60)
second2=second%60;
if(hour>9)
document.getElementById('hour').innerHTML=hour;
else
document.getElementById('hour').innerHTML='0'+hour;
if(minute>9)
document.getElementById('minute').innerHTML=minute;
else
document.getElementById('minute').innerHTML='0'+minute;
if(second2>9)
document.getElementById('second').innerHTML=second2;
else
document.getElementById('second').innerHTML='0'+second2;
}
else if(time=='ye')
{ti=document.getElementById('ye').value;
tii=document.getElementById('se').value=ti*60*60*24*365;
document.getElementById('min').value=tii/60;
document.getElementById('da').value=tii/60/60/24;
document.getElementById('ho').value=tii/60/60;
document.getElementById('de').value=tii/60/60/24/365/10;
document.getElementById('ce').value=tii/60/60/24/365/100;
second=document.getElementById('se').value;
hour=parseInt(second/3600);	
hour2=parseInt(second%3600);
minute=parseInt(hour2/60)
second2=second%60;
if(hour>9)
document.getElementById('hour').innerHTML=hour;
else
document.getElementById('hour').innerHTML='0'+hour;
if(minute>9)
document.getElementById('minute').innerHTML=minute;
else
document.getElementById('minute').innerHTML='0'+minute;
if(second2>9)
document.getElementById('second').innerHTML=second2;
else
document.getElementById('second').innerHTML='0'+second2;
}
else if(time=='de')
{ti=document.getElementById('de').value;
tii=document.getElementById('se').value=ti*60*60*24*365*10;
document.getElementById('min').value=tii/60;
document.getElementById('da').value=tii/60/60/24;
document.getElementById('ye').value=tii/60/60/24/365;
document.getElementById('ho').value=tii/60/60;
document.getElementById('ce').value=tii/60/60/24/365/100;
second=document.getElementById('se').value;
hour=parseInt(second/3600);	
hour2=parseInt(second%3600);
minute=parseInt(hour2/60)
second2=second%60;
if(hour>9)
document.getElementById('hour').innerHTML=hour;
else
document.getElementById('hour').innerHTML='0'+hour;
if(minute>9)
document.getElementById('minute').innerHTML=minute;
else
document.getElementById('minute').innerHTML='0'+minute;
if(second2>9)
document.getElementById('second').innerHTML=second2;
else
document.getElementById('second').innerHTML='0'+second2;
}
else if(time=='ce')
{ti=document.getElementById('ce').value;
tii=document.getElementById('se').value=ti*60*60*24*365*100;
document.getElementById('min').value=tii/60;
document.getElementById('da').value=tii/60/60/24;
document.getElementById('ye').value=tii/60/60/24/365;
document.getElementById('de').value=tii/60/60/24/365/10;
document.getElementById('ho').value=tii/60/60;
second=document.getElementById('se').value;
hour=parseInt(second/3600);	
hour2=parseInt(second%3600);
minute=parseInt(hour2/60)
second2=second%60;
if(hour>9)
document.getElementById('hour').innerHTML=hour;
else
document.getElementById('hour').innerHTML='0'+hour;
if(minute>9)
document.getElementById('minute').innerHTML=minute;
else
document.getElementById('minute').innerHTML='0'+minute;
if(second2>9)
document.getElementById('second').innerHTML=second2;
else
document.getElementById('second').innerHTML='0'+second2;
}
}
function clearti()
{
document.getElementById('se').value="";	
document.getElementById('min').value="";	
document.getElementById('ho').value="";	
document.getElementById('da').value="";	
document.getElementById('ye').value="";	
document.getElementById('de').value="";	
document.getElementById('ce').value="";	
document.getElementById('second').innerHTML="00";	
document.getElementById('minute').innerHTML="00";	
document.getElementById('hour').innerHTML="00";	
}
function datee()
{dateee=new Date().toString();
document.getElementById('demo1000').innerHTML=dateee.substr(0,dateee.length-22);
setTimeout(datee,1000);
}
function datetime()
{
datetimee=document.getElementById('datetime').value;
if(document.getElementById('datetime').value=='')
{
document.getElementById('demo10').innerHTML='Choose Date first!';
}
else
{
datetimee2=document.getElementById('datetime2').value;
document.getElementById('remaining').style.display="block";
datedada=datetimee.toString();
datedada2=datedada.substring(0,datedada.length-6);
datedada3=datedada.substring(5,datedada.length-3);
if(datedada3==1)
datedada33='Jan';
else if(datedada3==2)
datedada33='Feb';
else if(datedada3==3)
datedada33='Mar';
else if(datedada3==4)
datedada33='Apr';
else if(datedada3==5)
datedada33='May';
else if(datedada3==6)
datedada33='Jun';
else if(datedada3==7)
datedada33='Jul';
else if(datedada3==8)
datedada33='Aug';
else if(datedada3==9)
datedada33='Sep';
else if(datedada3==10)
datedada33='Oct';
else if(datedada3==11)
datedada33='Nov';
else if(datedada3==12)
datedada33='Dec';
datedada4=datedada.substring(8,datedada.length);
timedada=datetimee2.toString();
if(timedada=='')
timedada='00:00';
oi=document.getElementById('demo10').innerHTML=datedada33+" "+datedada4+', '+datedada2+' '+timedada+':'+'00';	
countDownDate ='';
countDownDate = new Date(oi).getTime();
var x = setInterval(function() 
{
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo100").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance < 0) 
{  
    clearInterval(x);
    window.alert('Time\'s up!!!');	
}
}, 1000);
}
}
function resettime()
{
document.getElementById('datetime').value="";
document.getElementById('datetime2').value="";
document.getElementById('demo10').innerHTML="None";
document.getElementById('remaining').style.display="none";
}
var j=0;
var jj=0;
var jjj=0;
var jjjj=0;
var jjjjj=0;
var k=0;
var kk=0;
var kkk=0;
var kkkk=0;
var kkkkk=0;
function ticgame()
{
document.getElementById('ticview').style.display="none";
document.getElementById('ticgame').style.display="block";
}
function ticgame4()
{
document.getElementById('ticview').style.display="none";
document.getElementById('ticgame4').style.display="block";
}
function newgame()
{
document.getElementById('t1').value='';
document.getElementById('t2').value='';
document.getElementById('t3').value='';
document.getElementById('t4').value='';
document.getElementById('t5').value='';
document.getElementById('t6').value='';
document.getElementById('t7').value='';
document.getElementById('t8').value='';
document.getElementById('t9').value='';
document.getElementById('gameinfo').innerHTML='Player X turn';
j=0;
document.getElementById('t1').disabled=false;
document.getElementById('t2').disabled=false;
document.getElementById('t3').disabled=false;
document.getElementById('t4').disabled=false;
document.getElementById('t5').disabled=false;
document.getElementById('t6').disabled=false;
document.getElementById('t7').disabled=false;
document.getElementById('t8').disabled=false;
document.getElementById('t9').disabled=false;

document.getElementById('t1').style.color="white";
document.getElementById('t2').style.color="white";
document.getElementById('t3').style.color="white";
document.getElementById('t4').style.color="white";
document.getElementById('t5').style.color="white";
document.getElementById('t6').style.color="white";
document.getElementById('t7').style.color="white";
document.getElementById('t8').style.color="white";
document.getElementById('t9').style.color="white";
}
function newgame4()
{
document.getElementById('t41').value='';
document.getElementById('t42').value='';
document.getElementById('t43').value='';
document.getElementById('t44').value='';
document.getElementById('t45').value='';
document.getElementById('t46').value='';
document.getElementById('t47').value='';
document.getElementById('t48').value='';
document.getElementById('t49').value='';
document.getElementById('t410').value='';
document.getElementById('t411').value='';
document.getElementById('t412').value='';
document.getElementById('t413').value='';
document.getElementById('t414').value='';
document.getElementById('t415').value='';
document.getElementById('t416').value='';
document.getElementById('gameinfo4').innerHTML='Player X turn';
k=0;
document.getElementById('t41').disabled=false;
document.getElementById('t42').disabled=false;
document.getElementById('t43').disabled=false;
document.getElementById('t44').disabled=false;
document.getElementById('t45').disabled=false;
document.getElementById('t46').disabled=false;
document.getElementById('t47').disabled=false;
document.getElementById('t48').disabled=false;
document.getElementById('t49').disabled=false;
document.getElementById('t410').disabled=false;
document.getElementById('t411').disabled=false;
document.getElementById('t412').disabled=false;
document.getElementById('t413').disabled=false;
document.getElementById('t414').disabled=false;
document.getElementById('t415').disabled=false;
document.getElementById('t416').disabled=false;

document.getElementById('t41').style.color="white";
document.getElementById('t42').style.color="white";
document.getElementById('t43').style.color="white";
document.getElementById('t44').style.color="white";
document.getElementById('t45').style.color="white";
document.getElementById('t46').style.color="white";
document.getElementById('t47').style.color="white";
document.getElementById('t48').style.color="white";
document.getElementById('t49').style.color="white";
document.getElementById('t410').style.color="white";
document.getElementById('t411').style.color="white";
document.getElementById('t412').style.color="white";
document.getElementById('t413').style.color="white";
document.getElementById('t414').style.color="white";
document.getElementById('t415').style.color="white";
document.getElementById('t416').style.color="white";
}
function tichome()
{
document.getElementById('ticview').style.display="block";
document.getElementById('ticgame').style.display="none";
}
function tichome4()
{
document.getElementById('ticview').style.display="block";
document.getElementById('ticgame4').style.display="none";
}
function ticstats()
{
document.getElementById('ticstats').style.display="block";
document.getElementById('ticgame').style.display="none";
document.getElementById('ticstats2').innerHTML="Games played= "+jj+" time(s)<br>X won= "+jjj+" time(s)"+"<br>◯ won= "+jjjj+" time(s)"+"<br>Draw= "+jjjjj+" time(s)";
}
function ticstats4()
{
document.getElementById('ticstats4').style.display="block";
document.getElementById('ticgame4').style.display="none";
document.getElementById('ticstats42').innerHTML="Games played= "+kk+" time(s)<br>X won= "+kkk+" time(s)"+"<br>◯ won= "+kkkk+" time(s)"+"<br>Draw= "+kkkkk+" time(s)";
}
function func()
{
t1=document.getElementById('t1').value;
t2=document.getElementById('t2').value;
t3=document.getElementById('t3').value;
t4=document.getElementById('t4').value;
t5=document.getElementById('t5').value;
t6=document.getElementById('t6').value;
t7=document.getElementById('t7').value;
t8=document.getElementById('t8').value;
t9=document.getElementById('t9').value;
if((t1=='X' && t2=='X' && t3=='X')||(t4=='X' && t5=='X' && t6=='X')||(t7=='X' && t8=='X' && t9=='X')||(t1=='X' && t5=='X' && t9=='X')||(t3=='X' && t5=='X' && t7=='X')||(t1=='X' && t4=='X' && t7=='X')||(t2=='X' && t5=='X' && t8=='X')||(t3=='X' && t6=='X' && t9=='X'))
{
if(t1=='X' && t2=='X' && t3=='X')
{
document.getElementById('t1').style.color="red";
document.getElementById('t2').style.color="red";
document.getElementById('t3').style.color="red";
document.getElementById('gameinfo').innerHTML="Player X wins!";
document.getElementById('t1').disabled=true;
document.getElementById('t2').disabled=true;
document.getElementById('t3').disabled=true;
document.getElementById('t4').disabled=true;
document.getElementById('t5').disabled=true;
document.getElementById('t6').disabled=true;
document.getElementById('t7').disabled=true;
document.getElementById('t8').disabled=true;
document.getElementById('t9').disabled=true;
jjj++;
jj++;
}
else if(t4=='X' && t5=='X' && t6=='X')
{
document.getElementById('t4').style.color="red";
document.getElementById('t5').style.color="red";
document.getElementById('t6').style.color="red";
document.getElementById('gameinfo').innerHTML="Player X wins!";
document.getElementById('t1').disabled=true;
document.getElementById('t2').disabled=true;
document.getElementById('t3').disabled=true;
document.getElementById('t4').disabled=true;
document.getElementById('t5').disabled=true;
document.getElementById('t6').disabled=true;
document.getElementById('t7').disabled=true;
document.getElementById('t8').disabled=true;
document.getElementById('t9').disabled=true;
jjj++;
jj++;
}
else if(t7=='X' && t8=='X' && t9=='X')
{
document.getElementById('t7').style.color="red";
document.getElementById('t8').style.color="red";
document.getElementById('t9').style.color="red";
document.getElementById('gameinfo').innerHTML="Player X wins!";
document.getElementById('t1').disabled=true;
document.getElementById('t2').disabled=true;
document.getElementById('t3').disabled=true;
document.getElementById('t4').disabled=true;
document.getElementById('t5').disabled=true;
document.getElementById('t6').disabled=true;
document.getElementById('t7').disabled=true;
document.getElementById('t8').disabled=true;
document.getElementById('t9').disabled=true;
jjj++;
jj++;
}
else if(t1=='X' && t5=='X' && t9=='X')
{
document.getElementById('t1').style.color="red";
document.getElementById('t5').style.color="red";
document.getElementById('t9').style.color="red";
document.getElementById('gameinfo').innerHTML="Player X wins!";
document.getElementById('t1').disabled=true;
document.getElementById('t2').disabled=true;
document.getElementById('t3').disabled=true;
document.getElementById('t4').disabled=true;
document.getElementById('t5').disabled=true;
document.getElementById('t6').disabled=true;
document.getElementById('t7').disabled=true;
document.getElementById('t8').disabled=true;
document.getElementById('t9').disabled=true;
jjj++;
jj++;
}
else if(t3=='X' && t5=='X' && t7=='X')
{
document.getElementById('t3').style.color="red";
document.getElementById('t5').style.color="red";
document.getElementById('t7').style.color="red";
document.getElementById('gameinfo').innerHTML="Player X wins!";
document.getElementById('t1').disabled=true;
document.getElementById('t2').disabled=true;
document.getElementById('t3').disabled=true;
document.getElementById('t4').disabled=true;
document.getElementById('t5').disabled=true;
document.getElementById('t6').disabled=true;
document.getElementById('t7').disabled=true;
document.getElementById('t8').disabled=true;
document.getElementById('t9').disabled=true;
jjj++;
jj++;
}
else if(t1=='X' && t4=='X' && t7=='X')
{
document.getElementById('t1').style.color="red";
document.getElementById('t4').style.color="red";
document.getElementById('t7').style.color="red";
document.getElementById('gameinfo').innerHTML="Player X wins!";
document.getElementById('t1').disabled=true;
document.getElementById('t2').disabled=true;
document.getElementById('t3').disabled=true;
document.getElementById('t4').disabled=true;
document.getElementById('t5').disabled=true;
document.getElementById('t6').disabled=true;
document.getElementById('t7').disabled=true;
document.getElementById('t8').disabled=true;
document.getElementById('t9').disabled=true;
jjj++;
jj++;
}
else if(t2=='X' && t5=='X' && t8=='X')
{
document.getElementById('t2').style.color="red";
document.getElementById('t5').style.color="red";
document.getElementById('t8').style.color="red";
document.getElementById('gameinfo').innerHTML="Player X wins!";
document.getElementById('t1').disabled=true;
document.getElementById('t2').disabled=true;
document.getElementById('t3').disabled=true;
document.getElementById('t4').disabled=true;
document.getElementById('t5').disabled=true;
document.getElementById('t6').disabled=true;
document.getElementById('t7').disabled=true;
document.getElementById('t8').disabled=true;
document.getElementById('t9').disabled=true;
jjj++;
jj++;
}
else if(t3=='X' && t6=='X' && t9=='X')
{
document.getElementById('t3').style.color="red";
document.getElementById('t6').style.color="red";
document.getElementById('t9').style.color="red";
document.getElementById('gameinfo').innerHTML="Player X wins!";
document.getElementById('t1').disabled=true;
document.getElementById('t2').disabled=true;
document.getElementById('t3').disabled=true;
document.getElementById('t4').disabled=true;
document.getElementById('t5').disabled=true;
document.getElementById('t6').disabled=true;
document.getElementById('t7').disabled=true;
document.getElementById('t8').disabled=true;
document.getElementById('t9').disabled=true;
jjj++;
jj++;
}
}
else if((t1=='◯' && t2=='◯' && t3=='◯')||(t4=='◯' && t5=='◯' && t6=='◯')||(t7=='◯' && t8=='◯' && t9=='◯')||(t1=='◯' && t5=='◯' && t9=='◯')||(t3=='◯' && t5=='◯' && t7=='◯')||(t1=='◯' && t4=='◯' && t7=='◯')||(t2=='◯' && t5=='◯' && t8=='◯')||(t3=='◯' && t6=='◯' && t9=='◯'))
{
if(t1=='◯' && t2=='◯' && t3=='◯')
{
document.getElementById('t1').style.color="red";
document.getElementById('t2').style.color="red";
document.getElementById('t3').style.color="red";
document.getElementById('gameinfo').innerHTML="Player ◯ wins!";
document.getElementById('t1').disabled=true;
document.getElementById('t2').disabled=true;
document.getElementById('t3').disabled=true;
document.getElementById('t4').disabled=true;
document.getElementById('t5').disabled=true;
document.getElementById('t6').disabled=true;
document.getElementById('t7').disabled=true;
document.getElementById('t8').disabled=true;
document.getElementById('t9').disabled=true;
jjjj++;
jj++;
}
else if(t4=='◯' && t5=='◯' && t6=='◯')
{
document.getElementById('t4').style.color="red";
document.getElementById('t5').style.color="red";
document.getElementById('t6').style.color="red";
document.getElementById('gameinfo').innerHTML="Player ◯ wins!";
document.getElementById('t1').disabled=true;
document.getElementById('t2').disabled=true;
document.getElementById('t3').disabled=true;
document.getElementById('t4').disabled=true;
document.getElementById('t5').disabled=true;
document.getElementById('t6').disabled=true;
document.getElementById('t7').disabled=true;
document.getElementById('t8').disabled=true;
document.getElementById('t9').disabled=true;
jjjj++;
jj++;
}
else if(t7=='◯' && t8=='◯' && t9=='◯')
{
document.getElementById('t7').style.color="red";
document.getElementById('t8').style.color="red";
document.getElementById('t9').style.color="red";
document.getElementById('gameinfo').innerHTML="Player ◯ wins!";
document.getElementById('t1').disabled=true;
document.getElementById('t2').disabled=true;
document.getElementById('t3').disabled=true;
document.getElementById('t4').disabled=true;
document.getElementById('t5').disabled=true;
document.getElementById('t6').disabled=true;
document.getElementById('t7').disabled=true;
document.getElementById('t8').disabled=true;
document.getElementById('t9').disabled=true;
jjjj++;
jj++;
}
else if(t1=='◯' && t5=='◯' && t9=='◯')
{
document.getElementById('t1').style.color="red";
document.getElementById('t5').style.color="red";
document.getElementById('t9').style.color="red";
document.getElementById('gameinfo').innerHTML="Player ◯ wins!";
document.getElementById('t1').disabled=true;
document.getElementById('t2').disabled=true;
document.getElementById('t3').disabled=true;
document.getElementById('t4').disabled=true;
document.getElementById('t5').disabled=true;
document.getElementById('t6').disabled=true;
document.getElementById('t7').disabled=true;
document.getElementById('t8').disabled=true;
document.getElementById('t9').disabled=true;
jjjj++;
jj++;
}
else if(t3=='◯' && t5=='◯' && t7=='◯')
{
document.getElementById('t3').style.color="red";
document.getElementById('t5').style.color="red";
document.getElementById('t7').style.color="red";
document.getElementById('gameinfo').innerHTML="Player ◯ wins!";
document.getElementById('t1').disabled=true;
document.getElementById('t2').disabled=true;
document.getElementById('t3').disabled=true;
document.getElementById('t4').disabled=true;
document.getElementById('t5').disabled=true;
document.getElementById('t6').disabled=true;
document.getElementById('t7').disabled=true;
document.getElementById('t8').disabled=true;
document.getElementById('t9').disabled=true;
jjjj++;
jj++;
}
else if(t1=='◯' && t4=='◯' && t7=='◯')
{
document.getElementById('t1').style.color="red";
document.getElementById('t4').style.color="red";
document.getElementById('t7').style.color="red";
document.getElementById('gameinfo').innerHTML="Player ◯ wins!";
document.getElementById('t1').disabled=true;
document.getElementById('t2').disabled=true;
document.getElementById('t3').disabled=true;
document.getElementById('t4').disabled=true;
document.getElementById('t5').disabled=true;
document.getElementById('t6').disabled=true;
document.getElementById('t7').disabled=true;
document.getElementById('t8').disabled=true;
document.getElementById('t9').disabled=true;
jjjj++;
jj++;
}
else if(t2=='◯' && t5=='◯' && t8=='◯')
{
document.getElementById('t2').style.color="red";
document.getElementById('t5').style.color="red";
document.getElementById('t8').style.color="red";
document.getElementById('gameinfo').innerHTML="Player ◯ wins!";
document.getElementById('t1').disabled=true;
document.getElementById('t2').disabled=true;
document.getElementById('t3').disabled=true;
document.getElementById('t4').disabled=true;
document.getElementById('t5').disabled=true;
document.getElementById('t6').disabled=true;
document.getElementById('t7').disabled=true;
document.getElementById('t8').disabled=true;
document.getElementById('t9').disabled=true;
jjjj++;
jj++;
}
else if(t3=='◯' && t6=='◯' && t9=='◯')
{
document.getElementById('t3').style.color="red";
document.getElementById('t6').style.color="red";
document.getElementById('t9').style.color="red";
document.getElementById('gameinfo').innerHTML="Player ◯ wins!";
document.getElementById('t1').disabled=true;
document.getElementById('t2').disabled=true;
document.getElementById('t3').disabled=true;
document.getElementById('t4').disabled=true;
document.getElementById('t5').disabled=true;
document.getElementById('t6').disabled=true;
document.getElementById('t7').disabled=true;
document.getElementById('t8').disabled=true;
document.getElementById('t9').disabled=true;
jjjj++;
jj++;
}
}
else if((t1=='◯' || t1=='X') && (t2=='◯' || t2=='X') && (t3=='◯' || t3=='X') && (t4=='◯' || t4=='X') && (t5=='◯' || t5=='X') && (t6=='◯' || t6=='X') && (t7=='◯' || t7=='X') && (t8=='◯' || t8=='X') && (t9=='◯' || t9=='X'))
{
document.getElementById('gameinfo').innerHTML="Game ended in Draw!";
document.getElementById('t1').disabled=true;
document.getElementById('t2').disabled=true;
document.getElementById('t3').disabled=true;
document.getElementById('t4').disabled=true;
document.getElementById('t5').disabled=true;
document.getElementById('t6').disabled=true;
document.getElementById('t7').disabled=true;
document.getElementById('t8').disabled=true;
document.getElementById('t9').disabled=true;
jjjjj++;
jj++;
}
}
function func4()
{
t41=document.getElementById('t41').value;
t42=document.getElementById('t42').value;
t43=document.getElementById('t43').value;
t44=document.getElementById('t44').value;
t45=document.getElementById('t45').value;
t46=document.getElementById('t46').value;
t47=document.getElementById('t47').value;
t48=document.getElementById('t48').value;
t49=document.getElementById('t49').value;
t410=document.getElementById('t410').value;
t411=document.getElementById('t411').value;
t412=document.getElementById('t412').value;
t413=document.getElementById('t413').value;
t414=document.getElementById('t414').value;
t415=document.getElementById('t415').value;
t416=document.getElementById('t416').value;
if((t41=='X' && t42=='X' && t43=='X' && t44=='X')||(t45=='X' && t46=='X' && t47=='X' && t48=='X')||(t49=='X' && t410=='X' && t411=='X' && t412=='X')||(t413=='X' && t414=='X' && t415=='X' && t416=='X')||(t41=='X' && t46=='X' && t411=='X' && t416=='X')||(t44=='X' && t47=='X' && t410=='X' && t413=='X')||(t41=='X' && t45=='X' && t49=='X' && t413=='X')||(t42=='X' && t46=='X' && t410=='X' && t414=='X')||(t43=='X' && t47=='X' && t411=='X' && t415=='X')||(t44=='X' && t48=='X' && t412=='X' && t416=='X'))
{
if(t41=='X' && t42=='X' && t43=='X' && t44=='X')
{
document.getElementById('gameinfo4').innerHTML="Player X wins!";
document.getElementById('t41').disabled=true;
document.getElementById('t42').disabled=true;
document.getElementById('t43').disabled=true;
document.getElementById('t44').disabled=true;
document.getElementById('t45').disabled=true;
document.getElementById('t46').disabled=true;
document.getElementById('t47').disabled=true;
document.getElementById('t48').disabled=true;
document.getElementById('t49').disabled=true;
document.getElementById('t410').disabled=true;
document.getElementById('t411').disabled=true;
document.getElementById('t412').disabled=true;
document.getElementById('t413').disabled=true;
document.getElementById('t414').disabled=true;
document.getElementById('t415').disabled=true;
document.getElementById('t416').disabled=true;
kkk++;
kk++;
document.getElementById('t41').style.color="red";
document.getElementById('t42').style.color="red";
document.getElementById('t43').style.color="red";
document.getElementById('t44').style.color="red";
}
else if(t45=='X' && t46=='X' && t47=='X' && t48=='X')
{
document.getElementById('gameinfo4').innerHTML="Player X wins!";
document.getElementById('t41').disabled=true;
document.getElementById('t42').disabled=true;
document.getElementById('t43').disabled=true;
document.getElementById('t44').disabled=true;
document.getElementById('t45').disabled=true;
document.getElementById('t46').disabled=true;
document.getElementById('t47').disabled=true;
document.getElementById('t48').disabled=true;
document.getElementById('t49').disabled=true;
document.getElementById('t410').disabled=true;
document.getElementById('t411').disabled=true;
document.getElementById('t412').disabled=true;
document.getElementById('t413').disabled=true;
document.getElementById('t414').disabled=true;
document.getElementById('t415').disabled=true;
document.getElementById('t416').disabled=true;
kkk++;
kk++;
document.getElementById('t45').style.color="red";
document.getElementById('t46').style.color="red";
document.getElementById('t47').style.color="red";
document.getElementById('t48').style.color="red";
}
else if(t49=='X' && t410=='X' && t411=='X' && t412=='X')
{
document.getElementById('gameinfo4').innerHTML="Player X wins!";
document.getElementById('t41').disabled=true;
document.getElementById('t42').disabled=true;
document.getElementById('t43').disabled=true;
document.getElementById('t44').disabled=true;
document.getElementById('t45').disabled=true;
document.getElementById('t46').disabled=true;
document.getElementById('t47').disabled=true;
document.getElementById('t48').disabled=true;
document.getElementById('t49').disabled=true;
document.getElementById('t410').disabled=true;
document.getElementById('t411').disabled=true;
document.getElementById('t412').disabled=true;
document.getElementById('t413').disabled=true;
document.getElementById('t414').disabled=true;
document.getElementById('t415').disabled=true;
document.getElementById('t416').disabled=true;
kkk++;
kk++;
document.getElementById('t49').style.color="red";
document.getElementById('t410').style.color="red";
document.getElementById('t411').style.color="red";
document.getElementById('t412').style.color="red";
}
else if(t413=='X' && t414=='X' && t415=='X' && t416=='X')
{
document.getElementById('gameinfo4').innerHTML="Player X wins!";
document.getElementById('t41').disabled=true;
document.getElementById('t42').disabled=true;
document.getElementById('t43').disabled=true;
document.getElementById('t44').disabled=true;
document.getElementById('t45').disabled=true;
document.getElementById('t46').disabled=true;
document.getElementById('t47').disabled=true;
document.getElementById('t48').disabled=true;
document.getElementById('t49').disabled=true;
document.getElementById('t410').disabled=true;
document.getElementById('t411').disabled=true;
document.getElementById('t412').disabled=true;
document.getElementById('t413').disabled=true;
document.getElementById('t414').disabled=true;
document.getElementById('t415').disabled=true;
document.getElementById('t416').disabled=true;
kkk++;
kk++;
document.getElementById('t413').style.color="red";
document.getElementById('t414').style.color="red";
document.getElementById('t415').style.color="red";
document.getElementById('t416').style.color="red";
}
else if(t41=='X' && t46=='X' && t411=='X' && t416=='X')
{
document.getElementById('gameinfo4').innerHTML="Player X wins!";
document.getElementById('t41').disabled=true;
document.getElementById('t42').disabled=true;
document.getElementById('t43').disabled=true;
document.getElementById('t44').disabled=true;
document.getElementById('t45').disabled=true;
document.getElementById('t46').disabled=true;
document.getElementById('t47').disabled=true;
document.getElementById('t48').disabled=true;
document.getElementById('t49').disabled=true;
document.getElementById('t410').disabled=true;
document.getElementById('t411').disabled=true;
document.getElementById('t412').disabled=true;
document.getElementById('t413').disabled=true;
document.getElementById('t414').disabled=true;
document.getElementById('t415').disabled=true;
document.getElementById('t416').disabled=true;
kkk++;
kk++;
document.getElementById('t41').style.color="red";
document.getElementById('t46').style.color="red";
document.getElementById('t411').style.color="red";
document.getElementById('t416').style.color="red";
}
else if(t44=='X' && t47=='X' && t410=='X' && t413=='X')
{
document.getElementById('gameinfo4').innerHTML="Player X wins!";
document.getElementById('t41').disabled=true;
document.getElementById('t42').disabled=true;
document.getElementById('t43').disabled=true;
document.getElementById('t44').disabled=true;
document.getElementById('t45').disabled=true;
document.getElementById('t46').disabled=true;
document.getElementById('t47').disabled=true;
document.getElementById('t48').disabled=true;
document.getElementById('t49').disabled=true;
document.getElementById('t410').disabled=true;
document.getElementById('t411').disabled=true;
document.getElementById('t412').disabled=true;
document.getElementById('t413').disabled=true;
document.getElementById('t414').disabled=true;
document.getElementById('t415').disabled=true;
document.getElementById('t416').disabled=true;
kkk++;
kk++;
document.getElementById('t44').style.color="red";
document.getElementById('t47').style.color="red";
document.getElementById('t410').style.color="red";
document.getElementById('t413').style.color="red";
}
else if(t41=='X' && t45=='X' && t49=='X' && t413=='X')
{
document.getElementById('gameinfo4').innerHTML="Player X wins!";
document.getElementById('t41').disabled=true;
document.getElementById('t42').disabled=true;
document.getElementById('t43').disabled=true;
document.getElementById('t44').disabled=true;
document.getElementById('t45').disabled=true;
document.getElementById('t46').disabled=true;
document.getElementById('t47').disabled=true;
document.getElementById('t48').disabled=true;
document.getElementById('t49').disabled=true;
document.getElementById('t410').disabled=true;
document.getElementById('t411').disabled=true;
document.getElementById('t412').disabled=true;
document.getElementById('t413').disabled=true;
document.getElementById('t414').disabled=true;
document.getElementById('t415').disabled=true;
document.getElementById('t416').disabled=true;
kkk++;
kk++;
document.getElementById('t41').style.color="red";
document.getElementById('t45').style.color="red";
document.getElementById('t49').style.color="red";
document.getElementById('t413').style.color="red";
}
else if(t42=='X' && t46=='X' && t410=='X' && t414=='X')
{
document.getElementById('gameinfo4').innerHTML="Player X wins!";
document.getElementById('t41').disabled=true;
document.getElementById('t42').disabled=true;
document.getElementById('t43').disabled=true;
document.getElementById('t44').disabled=true;
document.getElementById('t45').disabled=true;
document.getElementById('t46').disabled=true;
document.getElementById('t47').disabled=true;
document.getElementById('t48').disabled=true;
document.getElementById('t49').disabled=true;
document.getElementById('t410').disabled=true;
document.getElementById('t411').disabled=true;
document.getElementById('t412').disabled=true;
document.getElementById('t413').disabled=true;
document.getElementById('t414').disabled=true;
document.getElementById('t415').disabled=true;
document.getElementById('t416').disabled=true;
kkk++;
kk++;
document.getElementById('t42').style.color="red";
document.getElementById('t46').style.color="red";
document.getElementById('t410').style.color="red";
document.getElementById('t414').style.color="red";
}
else if(t43=='X' && t47=='X' && t411=='X' && t415=='X')
{
document.getElementById('gameinfo4').innerHTML="Player X wins!";
document.getElementById('t41').disabled=true;
document.getElementById('t42').disabled=true;
document.getElementById('t43').disabled=true;
document.getElementById('t44').disabled=true;
document.getElementById('t45').disabled=true;
document.getElementById('t46').disabled=true;
document.getElementById('t47').disabled=true;
document.getElementById('t48').disabled=true;
document.getElementById('t49').disabled=true;
document.getElementById('t410').disabled=true;
document.getElementById('t411').disabled=true;
document.getElementById('t412').disabled=true;
document.getElementById('t413').disabled=true;
document.getElementById('t414').disabled=true;
document.getElementById('t415').disabled=true;
document.getElementById('t416').disabled=true;
kkk++;
kk++;
document.getElementById('t43').style.color="red";
document.getElementById('t47').style.color="red";
document.getElementById('t411').style.color="red";
document.getElementById('t415').style.color="red";
}
else if(t44=='X' && t48=='X' && t412=='X' && t416=='X')
{
document.getElementById('gameinfo4').innerHTML="Player X wins!";
document.getElementById('t41').disabled=true;
document.getElementById('t42').disabled=true;
document.getElementById('t43').disabled=true;
document.getElementById('t44').disabled=true;
document.getElementById('t45').disabled=true;
document.getElementById('t46').disabled=true;
document.getElementById('t47').disabled=true;
document.getElementById('t48').disabled=true;
document.getElementById('t49').disabled=true;
document.getElementById('t410').disabled=true;
document.getElementById('t411').disabled=true;
document.getElementById('t412').disabled=true;
document.getElementById('t413').disabled=true;
document.getElementById('t414').disabled=true;
document.getElementById('t415').disabled=true;
document.getElementById('t416').disabled=true;
kkk++;
kk++;
document.getElementById('t44').style.color="red";
document.getElementById('t48').style.color="red";
document.getElementById('t412').style.color="red";
document.getElementById('t416').style.color="red";
}
}
else if((t41=='◯' && t42=='◯' && t43=='◯' && t44=='◯')||(t45=='◯' && t46=='◯' && t47=='◯' && t48=='◯')||(t49=='◯' && t410=='◯' && t411=='◯' && t412=='◯')||(t413=='◯' && t414=='◯' && t415=='◯' && t416=='◯')||(t41=='◯' && t46=='◯' && t411=='◯' && t416=='◯')||(t44=='◯' && t47=='◯' && t410=='◯' && t413=='◯')||(t41=='◯' && t45=='◯' && t49=='◯' && t413=='◯')||(t42=='◯' && t46=='◯' && t410=='◯' && t414=='◯')||(t43=='◯' && t47=='◯' && t411=='◯' && t415=='◯')||(t44=='◯' && t48=='◯' && t412=='◯' && t416=='◯'))
{
if(t41=='◯' && t42=='◯' && t43=='◯' && t44=='◯')
{
document.getElementById('gameinfo4').innerHTML="Player ◯ wins!";
document.getElementById('t41').disabled=true;
document.getElementById('t42').disabled=true;
document.getElementById('t43').disabled=true;
document.getElementById('t44').disabled=true;
document.getElementById('t45').disabled=true;
document.getElementById('t46').disabled=true;
document.getElementById('t47').disabled=true;
document.getElementById('t48').disabled=true;
document.getElementById('t49').disabled=true;
document.getElementById('t410').disabled=true;
document.getElementById('t411').disabled=true;
document.getElementById('t412').disabled=true;
document.getElementById('t413').disabled=true;
document.getElementById('t414').disabled=true;
document.getElementById('t415').disabled=true;
document.getElementById('t416').disabled=true;
kkkk++;
kk++;
document.getElementById('t41').style.color="red";
document.getElementById('t42').style.color="red";
document.getElementById('t43').style.color="red";
document.getElementById('t44').style.color="red";
}
else if(t45=='◯' && t46=='◯' && t47=='◯' && t48=='◯')
{
document.getElementById('gameinfo4').innerHTML="Player ◯ wins!";
document.getElementById('t41').disabled=true;
document.getElementById('t42').disabled=true;
document.getElementById('t43').disabled=true;
document.getElementById('t44').disabled=true;
document.getElementById('t45').disabled=true;
document.getElementById('t46').disabled=true;
document.getElementById('t47').disabled=true;
document.getElementById('t48').disabled=true;
document.getElementById('t49').disabled=true;
document.getElementById('t410').disabled=true;
document.getElementById('t411').disabled=true;
document.getElementById('t412').disabled=true;
document.getElementById('t413').disabled=true;
document.getElementById('t414').disabled=true;
document.getElementById('t415').disabled=true;
document.getElementById('t416').disabled=true;
kkkk++;
kk++;
document.getElementById('t45').style.color="red";
document.getElementById('t46').style.color="red";
document.getElementById('t47').style.color="red";
document.getElementById('t48').style.color="red";
}
else if(t49=='◯' && t410=='◯' && t411=='◯' && t412=='◯')
{
document.getElementById('gameinfo4').innerHTML="Player ◯ wins!";
document.getElementById('t41').disabled=true;
document.getElementById('t42').disabled=true;
document.getElementById('t43').disabled=true;
document.getElementById('t44').disabled=true;
document.getElementById('t45').disabled=true;
document.getElementById('t46').disabled=true;
document.getElementById('t47').disabled=true;
document.getElementById('t48').disabled=true;
document.getElementById('t49').disabled=true;
document.getElementById('t410').disabled=true;
document.getElementById('t411').disabled=true;
document.getElementById('t412').disabled=true;
document.getElementById('t413').disabled=true;
document.getElementById('t414').disabled=true;
document.getElementById('t415').disabled=true;
document.getElementById('t416').disabled=true;
kkkk++;
kk++;
document.getElementById('t49').style.color="red";
document.getElementById('t410').style.color="red";
document.getElementById('t411').style.color="red";
document.getElementById('t412').style.color="red";
}
else if(t413=='◯' && t414=='◯' && t415=='◯' && t416=='◯')
{
document.getElementById('gameinfo4').innerHTML="Player ◯ wins!";
document.getElementById('t41').disabled=true;
document.getElementById('t42').disabled=true;
document.getElementById('t43').disabled=true;
document.getElementById('t44').disabled=true;
document.getElementById('t45').disabled=true;
document.getElementById('t46').disabled=true;
document.getElementById('t47').disabled=true;
document.getElementById('t48').disabled=true;
document.getElementById('t49').disabled=true;
document.getElementById('t410').disabled=true;
document.getElementById('t411').disabled=true;
document.getElementById('t412').disabled=true;
document.getElementById('t413').disabled=true;
document.getElementById('t414').disabled=true;
document.getElementById('t415').disabled=true;
document.getElementById('t416').disabled=true;
kkkk++;
kk++;
document.getElementById('t413').style.color="red";
document.getElementById('t414').style.color="red";
document.getElementById('t415').style.color="red";
document.getElementById('t416').style.color="red";
}
else if(t41=='◯' && t46=='◯' && t411=='◯' && t416=='◯')
{
document.getElementById('gameinfo4').innerHTML="Player ◯ wins!";
document.getElementById('t41').disabled=true;
document.getElementById('t42').disabled=true;
document.getElementById('t43').disabled=true;
document.getElementById('t44').disabled=true;
document.getElementById('t45').disabled=true;
document.getElementById('t46').disabled=true;
document.getElementById('t47').disabled=true;
document.getElementById('t48').disabled=true;
document.getElementById('t49').disabled=true;
document.getElementById('t410').disabled=true;
document.getElementById('t411').disabled=true;
document.getElementById('t412').disabled=true;
document.getElementById('t413').disabled=true;
document.getElementById('t414').disabled=true;
document.getElementById('t415').disabled=true;
document.getElementById('t416').disabled=true;
kkkk++;
kk++;
document.getElementById('t41').style.color="red";
document.getElementById('t46').style.color="red";
document.getElementById('t411').style.color="red";
document.getElementById('t416').style.color="red";
}
else if(t44=='◯' && t47=='◯' && t410=='◯' && t413=='◯')
{
document.getElementById('gameinfo4').innerHTML="Player ◯ wins!";
document.getElementById('t41').disabled=true;
document.getElementById('t42').disabled=true;
document.getElementById('t43').disabled=true;
document.getElementById('t44').disabled=true;
document.getElementById('t45').disabled=true;
document.getElementById('t46').disabled=true;
document.getElementById('t47').disabled=true;
document.getElementById('t48').disabled=true;
document.getElementById('t49').disabled=true;
document.getElementById('t410').disabled=true;
document.getElementById('t411').disabled=true;
document.getElementById('t412').disabled=true;
document.getElementById('t413').disabled=true;
document.getElementById('t414').disabled=true;
document.getElementById('t415').disabled=true;
document.getElementById('t416').disabled=true;
kkkk++;
kk++;
document.getElementById('t44').style.color="red";
document.getElementById('t47').style.color="red";
document.getElementById('t410').style.color="red";
document.getElementById('t413').style.color="red";
}
else if(t41=='◯' && t45=='◯' && t49=='◯' && t413=='◯')
{
document.getElementById('gameinfo4').innerHTML="Player ◯ wins!";
document.getElementById('t41').disabled=true;
document.getElementById('t42').disabled=true;
document.getElementById('t43').disabled=true;
document.getElementById('t44').disabled=true;
document.getElementById('t45').disabled=true;
document.getElementById('t46').disabled=true;
document.getElementById('t47').disabled=true;
document.getElementById('t48').disabled=true;
document.getElementById('t49').disabled=true;
document.getElementById('t410').disabled=true;
document.getElementById('t411').disabled=true;
document.getElementById('t412').disabled=true;
document.getElementById('t413').disabled=true;
document.getElementById('t414').disabled=true;
document.getElementById('t415').disabled=true;
document.getElementById('t416').disabled=true;
kkkk++;
kk++;
document.getElementById('t41').style.color="red";
document.getElementById('t45').style.color="red";
document.getElementById('t49').style.color="red";
document.getElementById('t413').style.color="red";
}
else if(t42=='◯' && t46=='◯' && t410=='◯' && t414=='◯')
{
document.getElementById('gameinfo4').innerHTML="Player ◯ wins!";
document.getElementById('t41').disabled=true;
document.getElementById('t42').disabled=true;
document.getElementById('t43').disabled=true;
document.getElementById('t44').disabled=true;
document.getElementById('t45').disabled=true;
document.getElementById('t46').disabled=true;
document.getElementById('t47').disabled=true;
document.getElementById('t48').disabled=true;
document.getElementById('t49').disabled=true;
document.getElementById('t410').disabled=true;
document.getElementById('t411').disabled=true;
document.getElementById('t412').disabled=true;
document.getElementById('t413').disabled=true;
document.getElementById('t414').disabled=true;
document.getElementById('t415').disabled=true;
document.getElementById('t416').disabled=true;
kkkk++;
kk++;
document.getElementById('t42').style.color="red";
document.getElementById('t46').style.color="red";
document.getElementById('t410').style.color="red";
document.getElementById('t414').style.color="red";
}
else if(t43=='◯' && t47=='◯' && t411=='◯' && t415=='◯')
{
document.getElementById('gameinfo4').innerHTML="Player ◯ wins!";
document.getElementById('t41').disabled=true;
document.getElementById('t42').disabled=true;
document.getElementById('t43').disabled=true;
document.getElementById('t44').disabled=true;
document.getElementById('t45').disabled=true;
document.getElementById('t46').disabled=true;
document.getElementById('t47').disabled=true;
document.getElementById('t48').disabled=true;
document.getElementById('t49').disabled=true;
document.getElementById('t410').disabled=true;
document.getElementById('t411').disabled=true;
document.getElementById('t412').disabled=true;
document.getElementById('t413').disabled=true;
document.getElementById('t414').disabled=true;
document.getElementById('t415').disabled=true;
document.getElementById('t416').disabled=true;
kkkk++;
kk++;
document.getElementById('t43').style.color="red";
document.getElementById('t47').style.color="red";
document.getElementById('t411').style.color="red";
document.getElementById('t415').style.color="red";
}
else if(t44=='◯' && t48=='◯' && t412=='◯' && t416=='◯')
{
document.getElementById('gameinfo4').innerHTML="Player ◯ wins!";
document.getElementById('t41').disabled=true;
document.getElementById('t42').disabled=true;
document.getElementById('t43').disabled=true;
document.getElementById('t44').disabled=true;
document.getElementById('t45').disabled=true;
document.getElementById('t46').disabled=true;
document.getElementById('t47').disabled=true;
document.getElementById('t48').disabled=true;
document.getElementById('t49').disabled=true;
document.getElementById('t410').disabled=true;
document.getElementById('t411').disabled=true;
document.getElementById('t412').disabled=true;
document.getElementById('t413').disabled=true;
document.getElementById('t414').disabled=true;
document.getElementById('t415').disabled=true;
document.getElementById('t416').disabled=true;
kkkk++;
kk++;
document.getElementById('t44').style.color="red";
document.getElementById('t48').style.color="red";
document.getElementById('t412').style.color="red";
document.getElementById('t416').style.color="red";
}
}
else if((t41=='◯' || t41=='X') && (t42=='◯' || t42=='X') && (t43=='◯' || t43=='X') && (t44=='◯' || t44=='X') && (t45=='◯' || t45=='X') && (t46=='◯' || t46=='X') && (t47=='◯' || t47=='X') && (t48=='◯' || t48=='X') && (t49=='◯' || t49=='X') && (t410=='◯' || t410=='X') && (t411=='◯' || t411=='X') && (t412=='◯' || t412=='X') && (t413=='◯' || t413=='X') && (t414=='◯' || t414=='X') && (t415=='◯' || t415=='X') && (t416=='◯' || t416=='X'))
{
document.getElementById('gameinfo4').innerHTML="Game ended in Draw!";
document.getElementById('t41').disabled=true;
document.getElementById('t42').disabled=true;
document.getElementById('t43').disabled=true;
document.getElementById('t44').disabled=true;
document.getElementById('t45').disabled=true;
document.getElementById('t46').disabled=true;
document.getElementById('t47').disabled=true;
document.getElementById('t48').disabled=true;
document.getElementById('t49').disabled=true;
document.getElementById('t410').disabled=true;
document.getElementById('t411').disabled=true;
document.getElementById('t412').disabled=true;
document.getElementById('t413').disabled=true;
document.getElementById('t414').disabled=true;
document.getElementById('t415').disabled=true;
document.getElementById('t416').disabled=true;
kkkkk++;
kk++;
}
}
function tic1()
{
if (j==0)
{document.getElementById('t1').value='X';
document.getElementById('t1').disabled=true;
document.getElementById('gameinfo').innerHTML='Player ◯ turn';
j=1;}
else if(j==1)
{document.getElementById('t1').value='◯';
document.getElementById('gameinfo').innerHTML='Player X turn';
document.getElementById('t1').disabled=true;
j=0;}
}
function tic2()
{
if (j==0)
{document.getElementById('t2').value='X';
document.getElementById('t2').disabled=true;
document.getElementById('gameinfo').innerHTML='Player ◯ turn';
j=1;}
else if(j==1)
{document.getElementById('t2').value='◯';
document.getElementById('t2').disabled=true;
document.getElementById('gameinfo').innerHTML='Player X turn';
j=0;}
}
function tic3()
{
if (j==0)
{document.getElementById('t3').value='X';
document.getElementById('t3').disabled=true;
document.getElementById('gameinfo').innerHTML='Player ◯ turn';
j=1;}
else if(j==1)
{document.getElementById('t3').value='◯';
document.getElementById('t3').disabled=true;
document.getElementById('gameinfo').innerHTML='Player X turn';
j=0;}
}
function tic4()
{
if (j==0)
{document.getElementById('t4').value='X';
document.getElementById('t4').disabled=true;
document.getElementById('gameinfo').innerHTML='Player ◯ turn';
j=1;}
else if(j==1)
{document.getElementById('t4').value='◯';
document.getElementById('t4').disabled=true;
document.getElementById('gameinfo').innerHTML='Player X turn';
j=0;}
}
function tic5()
{
if (j==0)
{document.getElementById('t5').value='X';
document.getElementById('t5').disabled=true;
document.getElementById('gameinfo').innerHTML='Player ◯ turn';
j=1;}
else if(j==1)
{document.getElementById('t5').value='◯';
document.getElementById('t5').disabled=true;
document.getElementById('gameinfo').innerHTML='Player X turn';
j=0;}
}
function tic6()
{
if (j==0)
{document.getElementById('t6').value='X';
document.getElementById('t6').disabled=true;
document.getElementById('gameinfo').innerHTML='Player ◯ turn';
j=1;}
else if(j==1)
{document.getElementById('t6').value='◯';
document.getElementById('t6').disabled=true;
document.getElementById('gameinfo').innerHTML='Player X turn';
j=0;}
}
function tic7()
{
if (j==0)
{document.getElementById('t7').value='X';
document.getElementById('t7').disabled=true;
document.getElementById('gameinfo').innerHTML='Player ◯ turn';
j=1;}
else if(j==1)
{document.getElementById('t7').value='◯';
document.getElementById('t7').disabled=true;
document.getElementById('gameinfo').innerHTML='Player X turn';
j=0;}
}
function tic8()
{
if (j==0)
{document.getElementById('t8').value='X';
document.getElementById('t8').disabled=true;
document.getElementById('gameinfo').innerHTML='Player ◯ turn';
j=1;}
else if(j==1)
{document.getElementById('t8').value='◯';
document.getElementById('t8').disabled=true;
document.getElementById('gameinfo').innerHTML='Player X turn';
j=0;}
}
function tic9()
{
if (j==0)
{document.getElementById('t9').value='X';
document.getElementById('t9').disabled=true;
document.getElementById('gameinfo').innerHTML='Player ◯ turn';
j=1;}
else if(j==1)
{document.getElementById('t9').value='◯';
document.getElementById('t9').disabled=true;
document.getElementById('gameinfo').innerHTML='Player X turn';
j=0;}
}
function tic41()
{
if (k==0)
{document.getElementById('t41').value='X';
document.getElementById('t41').disabled=true;
document.getElementById('gameinfo4').innerHTML='Player ◯ turn';
k=1;}
else if(k==1)
{document.getElementById('t41').value='◯';
document.getElementById('gameinfo4').innerHTML='Player X turn';
document.getElementById('t41').disabled=true;
k=0;}
}
function tic42()
{
if (k==0)
{document.getElementById('t42').value='X';
document.getElementById('t42').disabled=true;
document.getElementById('gameinfo4').innerHTML='Player ◯ turn';
k=1;}
else if(k==1)
{document.getElementById('t42').value='◯';
document.getElementById('gameinfo4').innerHTML='Player X turn';
document.getElementById('t42').disabled=true;
k=0;}
}
function tic43()
{
if (k==0)
{document.getElementById('t43').value='X';
document.getElementById('t43').disabled=true;
document.getElementById('gameinfo4').innerHTML='Player ◯ turn';
k=1;}
else if(k==1)
{document.getElementById('t43').value='◯';
document.getElementById('gameinfo4').innerHTML='Player X turn';
document.getElementById('t43').disabled=true;
k=0;}
}
function tic44()
{
if (k==0)
{document.getElementById('t44').value='X';
document.getElementById('t44').disabled=true;
document.getElementById('gameinfo4').innerHTML='Player ◯ turn';
k=1;}
else if(k==1)
{document.getElementById('t44').value='◯';
document.getElementById('gameinfo4').innerHTML='Player X turn';
document.getElementById('t44').disabled=true;
k=0;}
}
function tic45()
{
if (k==0)
{document.getElementById('t45').value='X';
document.getElementById('t45').disabled=true;
document.getElementById('gameinfo4').innerHTML='Player ◯ turn';
k=1;}
else if(k==1)
{document.getElementById('t45').value='◯';
document.getElementById('gameinfo4').innerHTML='Player X turn';
document.getElementById('t45').disabled=true;
k=0;}
}
function tic46()
{
if (k==0)
{document.getElementById('t46').value='X';
document.getElementById('t46').disabled=true;
document.getElementById('gameinfo4').innerHTML='Player ◯ turn';
k=1;}
else if(k==1)
{document.getElementById('t46').value='◯';
document.getElementById('gameinfo4').innerHTML='Player X turn';
document.getElementById('t46').disabled=true;
k=0;}
}
function tic47()
{
if (k==0)
{document.getElementById('t47').value='X';
document.getElementById('t47').disabled=true;
document.getElementById('gameinfo4').innerHTML='Player ◯ turn';
k=1;}
else if(k==1)
{document.getElementById('t47').value='◯';
document.getElementById('gameinfo4').innerHTML='Player X turn';
document.getElementById('t47').disabled=true;
k=0;}
}
function tic48()
{
if (k==0)
{document.getElementById('t48').value='X';
document.getElementById('t48').disabled=true;
document.getElementById('gameinfo4').innerHTML='Player ◯ turn';
k=1;}
else if(k==1)
{document.getElementById('t48').value='◯';
document.getElementById('gameinfo4').innerHTML='Player X turn';
document.getElementById('t48').disabled=true;
k=0;}
}
function tic49()
{
if (k==0)
{document.getElementById('t49').value='X';
document.getElementById('t49').disabled=true;
document.getElementById('gameinfo4').innerHTML='Player ◯ turn';
k=1;}
else if(k==1)
{document.getElementById('t49').value='◯';
document.getElementById('gameinfo4').innerHTML='Player X turn';
document.getElementById('t49').disabled=true;
k=0;}
}
function tic410()
{
if (k==0)
{document.getElementById('t410').value='X';
document.getElementById('t410').disabled=true;
document.getElementById('gameinfo4').innerHTML='Player ◯ turn';
k=1;}
else if(k==1)
{document.getElementById('t410').value='◯';
document.getElementById('gameinfo4').innerHTML='Player X turn';
document.getElementById('t410').disabled=true;
k=0;}
}
function tic411()
{
if (k==0)
{document.getElementById('t411').value='X';
document.getElementById('t411').disabled=true;
document.getElementById('gameinfo4').innerHTML='Player ◯ turn';
k=1;}
else if(k==1)
{document.getElementById('t411').value='◯';
document.getElementById('gameinfo4').innerHTML='Player X turn';
document.getElementById('t411').disabled=true;
k=0;}
}
function tic412()
{
if (k==0)
{document.getElementById('t412').value='X';
document.getElementById('t412').disabled=true;
document.getElementById('gameinfo4').innerHTML='Player ◯ turn';
k=1;}
else if(k==1)
{document.getElementById('t412').value='◯';
document.getElementById('gameinfo4').innerHTML='Player X turn';
document.getElementById('t412').disabled=true;
k=0;}
}
function tic413()
{
if (k==0)
{document.getElementById('t413').value='X';
document.getElementById('t413').disabled=true;
document.getElementById('gameinfo4').innerHTML='Player ◯ turn';
k=1;}
else if(k==1)
{document.getElementById('t413').value='◯';
document.getElementById('gameinfo4').innerHTML='Player X turn';
document.getElementById('t413').disabled=true;
k=0;}
}
function tic414()
{
if (k==0)
{document.getElementById('t414').value='X';
document.getElementById('t414').disabled=true;
document.getElementById('gameinfo4').innerHTML='Player ◯ turn';
k=1;}
else if(k==1)
{document.getElementById('t414').value='◯';
document.getElementById('gameinfo4').innerHTML='Player X turn';
document.getElementById('t414').disabled=true;
k=0;}
}
function tic415()
{
if (k==0)
{document.getElementById('t415').value='X';
document.getElementById('t415').disabled=true;
document.getElementById('gameinfo4').innerHTML='Player ◯ turn';
k=1;}
else if(k==1)
{document.getElementById('t415').value='◯';
document.getElementById('gameinfo4').innerHTML='Player X turn';
document.getElementById('t415').disabled=true;
k=0;}
}
function tic416()
{
if (k==0)
{document.getElementById('t416').value='X';
document.getElementById('t416').disabled=true;
document.getElementById('gameinfo4').innerHTML='Player ◯ turn';
k=1;}
else if(k==1)
{document.getElementById('t416').value='◯';
document.getElementById('gameinfo4').innerHTML='Player X turn';
document.getElementById('t416').disabled=true;
k=0;}
}
function backtic()
{
document.getElementById('ticstats').style.display="none";
document.getElementById('ticgame').style.display="block";
}
function backtic4()
{
document.getElementById('ticstats4').style.display="none";
document.getElementById('ticgame4').style.display="block";
}
function dateage()
{todayage2=new Date().toString();
todayage3=todayage2.substr(0,todayage2.length-30);
document.getElementById('demo99').innerHTML=todayage3;

dateagee=document.getElementById('dateage').value.toString();
datedaday=dateagee.substring(0,dateagee.length-6);
datedadam=dateagee.substring(5,dateagee.length-3);
if(datedadam==1)
datedadamm='Jan';
else if(datedadam==2)
datedadamm='Feb';
else if(datedadam==3)
datedadamm='Mar';
else if(datedadam==4)
datedadamm='Apr';
else if(datedadam==5)
datedadamm='May';
else if(datedadam==6)
datedadamm='Jun';
else if(datedadam==7)
datedadamm='Jul';
else if(datedadam==8)
datedadamm='Aug';
else if(datedadam==9)
datedadamm='Sep';
else if(datedadam==10)
datedadamm='Oct';
else if(datedadam==11)
datedadamm='Nov';
else if(datedadam==12)
datedadamm='Dec';
datedadad=dateagee.substring(8,dateagee.length);
dispbirth=document.getElementById('choosenage').innerHTML=datedadamm+' '+datedadad+', '+datedaday;
birth=new Date(dispbirth).getTime();
todayage=new Date().getTime();
agegap=todayage-birth;
ageyear=parseInt(agegap/1000/3600/24/365);
ageday=((agegap/1000/3600/24/365)-parseInt(agegap/1000/3600/24/365))*365;
agekati=ageyear+' years '+parseInt(ageday)+' days old';
birthkati=365-parseInt(ageday);
document.getElementById('agedada3').style.display="block";
document.getElementById('agedada4').style.display="block";
document.getElementById('todayagee').style.display="block";
document.getElementById('agedada').innerHTML=agekati;
document.getElementById('agedada2').innerHTML=birthkati+' days remaining';
}
function cleanage()
{
document.getElementById('agedada3').style.display="none";
document.getElementById('agedada4').style.display="none";
document.getElementById('todayagee').style.display="none";
document.getElementById('choosenage').innerHTML="Choose DOB to calculate age";
document.getElementById('dateage').value="";
}
function formdateage()
{formtodayage2=new Date().toString();
formtodayage3=formtodayage2.substr(0,formtodayage2.length-30);
formdateagee=document.getElementById('formdob').value.toString();
formdatedaday=formdateagee.substring(0,formdateagee.length-6);
formdatedadam=formdateagee.substring(5,formdateagee.length-3);
if(formdatedadam==1)
formdatedadamm='Jan';
else if(formdatedadam==2)
formdatedadamm='Feb';
else if(formdatedadam==3)
formdatedadamm='Mar';
else if(formdatedadam==4)
formdatedadamm='Apr';
else if(formdatedadam==5)
formdatedadamm='May';
else if(formdatedadam==6)
formdatedadamm='Jun';
else if(formdatedadam==7)
formdatedadamm='Jul';
else if(formdatedadam==8)
formdatedadamm='Aug';
else if(formdatedadam==9)
formdatedadamm='Sep';
else if(formdatedadam==10)
formdatedadamm='Oct';
else if(formdatedadam==11)
formdatedadamm='Nov';
else if(formdatedadam==12)
formdatedadamm='Dec';
formdatedadad=formdateagee.substring(8,formdateagee.length);
formdispbirth=formdatedadamm+' '+formdatedadad+', '+formdatedaday;
formbirth=new Date(formdispbirth).getTime();
formtodayage=new Date().getTime();
formagegap=formtodayage-formbirth;
formageyear=parseInt(formagegap/1000/3600/24/365);
document.getElementById('formage').value=formageyear+' years';
}
function formfill()
{
document.getElementById('form1').style.display="none";
document.getElementById('form2').style.display="block";
}
function formfillback()
{
document.getElementById('form1').style.display="block";
document.getElementById('form2').style.display="none";
}
function formreview()
{
document.getElementById('form1').style.display="none";
document.getElementById('form100').style.display="block";
}
function formreviewback()
{
document.getElementById('form1').style.display="block";
document.getElementById('form100').style.display="none";
}
function formreviewclear()
{
document.getElementById('formdata').innerHTML='You havent filled out the form yet!';
}
var formgender100='male';
function formgenderr()
{
formgender100='male';
}
function formgenderr2()
{
formgender100='female';
}
function formgenderr3()
{
formgender100='none';
}
var formmari100='unmarried';
function formmari()
{
formmari100='married';
}
function formmari2()
{
formmari100='unmarried';
}
var formnation2='User didnt select any nationality';
function formnationchange() 
{
select=document.getElementById('formnation');
option=select.options[select.selectedIndex];
formnation2=option.value;
}
var formhobby2='User didnt select any hobbies';
function formhobbychange() 
{
select2=document.getElementById('formhobby');
option2=select2.options[select2.selectedIndex];
formhobby2=option2.value;
}
var formedu11='User didnt select grade';
function formeduchange() 
{
select3=document.getElementById('formedu');
option3=select3.options[select3.selectedIndex];
formedu11=option3.value;
}
var formedu22='User didnt select grade';
function formedu2change() 
{
select4=document.getElementById('formedu2');
option4=select4.options[select4.selectedIndex];
formedu22=option4.value;
}
var formedu33='User didnt select grade';
function formedu3change() 
{
select5=document.getElementById('formedu3');
option5=select5.options[select5.selectedIndex];
formedu33=option5.value;
}
function formsubmit()
{
formname2=document.getElementById('formname').value;
formdob2=document.getElementById('formdob').value;
formaddress2=document.getElementById('formaddress').value;
formpass2=document.getElementById('formpass').value;
formemail2=document.getElementById('formemail').value;
formphone2=document.getElementById('formphone').value;
formtext2=document.getElementById('formtext').value;
if(formtext2=='')
formtext3='None';
else
formtext3=document.getElementById('formtext').value;
formability2=document.getElementById('formability').value;
formoccu2=document.getElementById('formoccu').value;
formlang100='';
if(document.getElementById('formlang').checked==true && document.getElementById('formlang2').checked==true && document.getElementById('formlang3').checked==true)
{
formlang100='Nepali,English,Others';
}
else if(document.getElementById('formlang').checked==true && document.getElementById('formlang2').checked==false && document.getElementById('formlang3').checked==true)
{
formlang100='Nepali,Others';
}
else if(document.getElementById('formlang').checked==true && document.getElementById('formlang2').checked==true && document.getElementById('formlang3').checked==false)
{
formlang100='Nepali,English';
}
else if(document.getElementById('formlang').checked==true && document.getElementById('formlang2').checked==false && document.getElementById('formlang3').checked==false)
{
formlang100='Nepali';
}
else if(document.getElementById('formlang').checked==false && document.getElementById('formlang2').checked==true && document.getElementById('formlang3').checked==true)
{
formlang100='English,Others';
}
else if(document.getElementById('formlang').checked==false && document.getElementById('formlang2').checked==false && document.getElementById('formlang3').checked==true)
{
formlang100='Others';
}
else if(document.getElementById('formlang').checked==false && document.getElementById('formlang2').checked==true && document.getElementById('formlang3').checked==false)
{
formlang100='English';
}
else if(document.getElementById('formlang').checked==false && document.getElementById('formlang2').checked==false && document.getElementById('formlang3').checked==false)
{
formlang100='User didnt select any languages';
}

if(document.getElementById('formname').value!='' && document.getElementById('formaddress').value!='' && document.getElementById('formage').value!='' && document.getElementById('formpass').value!='' && document.getElementById('formimage').value!='' && document.getElementById('formphone').value!='' && document.getElementById('formoccu').value!='' && document.getElementById('formdob').value!='' && document.getElementById('formemail').value!='' && document.getElementById('formability').value!='')
{
alert("Form submitted successfully! Goto 'Saved Form' to review your form.");
document.getElementById('form1').style.display="block";
document.getElementById('form2').style.display="none";

document.getElementById('formdata').innerHTML=
"<b>Name: </b>"+formname2+"<br>"+
"<b>Address: </b>"+formaddress2+"<br>"+
"<b>DOB: </b>"+formdob2+"<br>"+
"<b>Age: </b>"+formageyear+' years'+"<br>"+
"<b>Phone no.: </b>"+formphone2+"<br>"+
"<b>Gender: </b>"+formgender100+"<br>"+
"<b>Nationality: </b>"+formnation2+"<br>"+
"<b>Languages: </b>"+formlang100+"<br>"+
"<b>Hobby: </b>"+formhobby2+"<br>"+
"<b>Occupation: </b>"+formoccu2+"<br>"+
"<b>Maritial status: </b>"+formmari100+"<br>"+
"<b>Email ID: </b>"+formemail2+"<br>"+
"<b>Password: </b>"+formpass2+"<br>"+
"<b>Comments: </b>"+formtext3+"<br>"+
"<b>SEE grade: </b>"+formedu11+"<br>"+
"<b>+2 grade: </b>"+formedu22+"<br>"+
"<b>Bachelor grade: </b>"+formedu33+"<br>"+
"<b>Ability and Achievements: </b>"+formability2+"<br>";
document.getElementById('formdata').style.lineHeight='30px';
}
}
function formreviewdown()
{
filenamedate=(new Date()).toString();
formreview1000="REGISTRATION FORM "+"\t\t\t\t\t\t\t\t"+"date modified: "+filenamedate.substr(0,filenamedate.length-22)+"\n\n"+
"Name: "+formname2+"\n"+
"Address: "+formaddress2+"\n"+
"DOB: "+formdob2+"\n"+
"Age: "+formageyear+" years"+"\n"+
"Phone no.: "+formphone2+"\n"+
"Gender: "+formgender100+"\n"+
"Nationality: "+formnation2+"\n"+
"Languages: "+formlang100+"\n"+
"Hobby: "+formhobby2+"\n"+
"Occupation: "+formoccu2+"\n"+
"Maritial status: "+formmari100+"\n"+
"Email ID: "+formemail2+"\n"+
"Password: "+formpass2+"\n"+
"Comments: "+formtext3+"\n"+
"SEE grade: "+formedu11+"\n"+
"+2 grade: "+formedu22+"\n"+
"Bachelor grade: "+formedu33+"\n"+
"Ability and Achievements: "+formability2;
console.log(formreview1000);
const textToBLOB=new Blob([formreview1000],{type:"text/plain"});
var filename='Registration Form- '+filenamedate.substr(0,filenamedate.length-22);
const sFileName=filename; 
let newLink=document.createElement("a");
newLink.download='Registration Form- '+filenamedate.substr(0,filenamedate.length-22);
if(window.webkitURL!=null) 
{
newLink.href=window.webkitURL.createObjectURL(textToBLOB);
} 
else 
{
newLink.href=window.URL.createObjectURL(textToBLOB);
newLink.style.display="none";
document.body.appendChild(newLink);
}
newLink.click();			
}


 
   
    