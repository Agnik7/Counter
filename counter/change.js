var a=0;
let x=function(e){
    a=a-1;
    document.getElementById("number").innerHTML=a;
    if(a<0)
    {
    document.getElementById("number").style.color="red";
    }
    else if(a==0)
    {
        document.getElementById("number").style.color="black";

    }

}
let z=function(e){
    a=a+1;
    document.getElementById("number").innerHTML=a;
    if(a>0)
    {
    document.getElementById("number").style.color="green";
    }
    else if(a==0)
    {
        document.getElementById("number").style.color="black";

    }
}
let y=function(e){
    a=0;
    document.getElementById("number").innerHTML=a;
    document.getElementById("number").style.color="black";
    

}




decrease.addEventListener('click',x);
reset.addEventListener('click',y);
increase.addEventListener('click',z);



