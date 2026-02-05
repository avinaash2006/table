function myFunction() {
   let a = document.getElementById("abc");
   let b = document.getElementsByTagName("h1")[0];
   a.remove()
   b.innerHTML = "Clicked";
}
