let name=localStorage.getItem("name");
if(name==null){
    name=prompt("Enter your name");
    localStorage.setItem("name",name);
}
else{
    document.getElementById("name").innerHTML=name;
}