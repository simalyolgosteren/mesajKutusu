const textarea=document.querySelector("textarea");
const tc=document.getElementById("totalCounter");
const rc=document.getElementById("reminingCounter");

textarea.addEventListener("keyup",counter);

function counter(){
    tc.textContent=textarea.value.length;
    rc.textContent=textarea.getAttribute("maxlength") -textarea.value.length;
}

counter();

