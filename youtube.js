var icon=document.getElementById("menu");
var check=document.getElementById("hamcheck");
var sidebar=document.getElementById("sidebar");
var opth=document.getElementById("sidehead");
var opt=document.querySelectorAll(".option");
var opt1=document.querySelectorAll(".option1");
var line1=document.getElementById("line1");
var line2=document.getElementById("line2");


icon.onclick=function(){
    if (check.checked==true){
        check.checked=false;
    }else{
        check.checked=true;
    }
    if (check.checked==true){
        line1.style.display="none";
        for (let i=0; i<5; i++ ){
            opt[i].style.fontSize="10px";
            opt[i].style.display="flex";
            opt[i].style.flexDirection="column";
            opt[i].style.gap="10px";
            opt[i].style.alignItems="center";
        }
        line2.style.display="none";
        for (let i=0;i<opt1.length;i++){
            opt1[i].style.display="none";
        }
        
        sidebar.style.width="72px";
        sidebar.style.height="350px";
        sidebar.style.justifyContent="space-between";
        opth.style.display="none";
    }else{
       line1.style.display="block";
       
       sidebar.style.width="216px";
       sidebar.style.padding="7px";
       sidebar.style.height="85vh";
       for (let i=0; i<5; i++){
        opt[i].style.display="flex";
        opt[i].style.fontSize="14px";
        opt[i].style.flexDirection="Row";
        opt[i].style.height="40px";
        opt[i].style.padding="0px 12px";
        opt[i].style.gap="30px";
       }
       
       for (let i=0; i<opt1.length; i++){
        opt1[i].style.display="flex";
        opt1[i].style.fontSize="14px";
        opt1[i].style.flexDirection="Row";
        opt1[i].style.height="40px";
        opt1[i].style.padding="0px 12px";
        opt1[i].style.gap="30px";
       }
       line2.style.display="block";
       opth.style.display="block";
    }

}