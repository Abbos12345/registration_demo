const nextBtn = document.getElementById("next");
const previousBtn  = document.getElementById("previous");

const stage1 = document.querySelector('.stage-1');
const stage2 = document.querySelector('.stage-2');
// stage1.style.display = "none"; 

nextBtn.addEventListener("click", ()=>{
    stage1.style.display = "none"; 
    stage2.style.display = 'block';
});

previousBtn.addEventListener("click", ()=>{
    stage1.style.display = "block"; 
    stage2.style.display = 'none';
});