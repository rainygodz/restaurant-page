(()=>{"use strict";!function(){const e=document.querySelector("#content"),t=document.createElement("header"),n=document.createElement("div");n.classList.add("logo"),n.textContent="Restaurant",t.appendChild(n);const d=document.createElement("nav"),c=document.createElement("ul"),a=["Home","Menu","Contact"];for(let e=0;e<a.length;e++){const t=document.createElement("li"),n=document.createElement("a");n.href="#",n.textContent=a[e],t.appendChild(n),c.appendChild(t)}d.appendChild(c),t.appendChild(d),e.appendChild(t)}()})();