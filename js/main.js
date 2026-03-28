function openMenu(){
  document.getElementById("menu").style.right="0";
}

function closeMenu(){
  document.getElementById("menu").style.right="-250px";
}

function go(url){
  window.open(url);
}

function copyIP(){
  navigator.clipboard.writeText("ZenoriaMC.arqonara.my.id");
  alert("IP disalin!");
}

function toggleTheme(){
  if(document.body.style.background=="white"){
    document.body.style.background="#020617";
    document.body.style.color="white";
  } else {
    document.body.style.background="white";
    document.body.style.color="black";
  }
}
