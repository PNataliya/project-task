const e=document.querySelectorAll('input[type="range"]'),t=document.querySelector('input[type="number"]');function n(e){let t=e.target;"range"!==e.target.type&&(t=document.getElementById("range"));const n=t.min,r=t.max,u=t.value;t.style.backgroundSize=100*(u-n)/(r-n)+"% 100%"}e.forEach((e=>{e.addEventListener("input",n)})),t.addEventListener("input",n);
//# sourceMappingURL=index.c30432be.js.map
