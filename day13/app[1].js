
function get(k){return JSON.parse(localStorage.getItem(k)||"[]")}
function set(k,v){localStorage.setItem(k,JSON.stringify(v))}
function addWish(id){let w=get("wishlist");if(!w.includes(id)){w.push(id);set("wishlist",w);alert("Added");}}
function addCart(id){
 let c=get("cart");if(!c.includes(id)){c.push(id);set("cart",c);}
 set("wishlist",get("wishlist").filter(x=>x!==id));
 alert("Added to cart");
}
function removeWish(id){set("wishlist",get("wishlist").filter(x=>x!==id));location.reload();}
function removeCart(id){set("cart",get("cart").filter(x=>x!==id));location.reload();}
function order(){
 let a=prompt("Enter delivery address:");
 if(a){alert("Order placed!\nAddress: "+a);localStorage.removeItem("cart");location.reload();}
}
function render(type){
 const box=document.getElementById("items");
 let list=products;
 if(type==="wishlist") list=products.filter(p=>get("wishlist").includes(p.id));
 if(type==="cart") list=products.filter(p=>get("cart").includes(p.id));
 box.innerHTML="";
 list.forEach(p=>{
  let b=`<div class='col-md-4'><div class='card m-2'>
  <img src='${p.image}' class='card-img-top'><div class='card-body'>
  <h5>${p.name}</h5><p>₹${p.price}</p>`;
  if(type==="home") b+=`<button class='btn btn-warning me-2' onclick='addWish(${p.id})'>Wishlist</button>
  <button class='btn btn-success' onclick='addCart(${p.id})'>Cart</button>`;
  if(type==="wishlist") b+=`<button class='btn btn-success me-2' onclick='addCart(${p.id})'>Move to Cart</button>
  <button class='btn btn-danger' onclick='removeWish(${p.id})'>Remove</button>`;
  if(type==="cart") b+=`<button class='btn btn-danger' onclick='removeCart(${p.id})'>Remove</button>`;
  b+="</div></div></div>";
  box.innerHTML+=b;
 });
 if(type==="cart") box.innerHTML+=`<div class='mt-3'><button class='btn btn-primary' onclick='order()'>Place Order</button></div>`;
}
