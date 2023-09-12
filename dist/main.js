(()=>{"use strict";const e=document.querySelector("#content");!function(){const t=document.createElement("header"),n=document.createElement("div");n.classList.add("logo"),n.textContent="Restaurant",t.appendChild(n);const d=document.createElement("nav"),c=document.createElement("ul"),a=["Home","Menu","Contact"];for(let e=0;e<a.length;e++){const t=document.createElement("li"),n=document.createElement("a");n.href="#",n.textContent=a[e],t.appendChild(n),c.appendChild(t)}d.appendChild(c),t.appendChild(d),e.appendChild(t)}(),function(){const t=document.createElement("main"),n=document.createElement("div");n.classList.add("left");const d=document.createElement("div");d.classList.add("text"),d.textContent="Are you hungry?";const c=document.createElement("br");d.appendChild(c);const a=document.createElement("span");a.setAttribute("id","big-text"),a.textContent="Don't wait!",d.appendChild(a);const o=document.createElement("br");d.appendChild(o);const i=document.createElement("span");i.setAttribute("id","small-text"),i.textContent="Let start to order food now",d.appendChild(i),n.appendChild(d);const l=document.createElement("div");l.classList.add("btn-container");const m=document.createElement("button");m.setAttribute("id","check-menu"),m.textContent="Check out menu",l.appendChild(m),n.appendChild(l),t.appendChild(n);const s=document.createElement("right");s.classList.add("right");const r=document.createElement("img");r.src="./images/dish.png",r.alt="dish",s.appendChild(r),e.appendChild(t),t.appendChild(s)}(),function(){const t=document.createElement("footer"),n=document.createElement("div");n.classList.add("author"),n.textContent="rainygodz",t.appendChild(n);const d=document.createElement("div");d.classList.add("github-icon");const c=document.createElement("a");c.href="https://github.com/rainygodz",c.target="_blank";const a=document.createElement("img");a.src="./images/github-mark-white.png",c.appendChild(a),d.appendChild(c),t.appendChild(d),e.appendChild(t)}()})();