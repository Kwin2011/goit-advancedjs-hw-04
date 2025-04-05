/* empty css                      */import{a as p,S as h,i as u}from"./assets/vendor-Db2TdIkw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const g="49620243-9bab7bc345dc9a388b23e7e17",v="https://pixabay.com/api/",b=15;async function y(r,t=1){const i={key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:b,page:t},o=document.querySelector(".loader");o&&o.classList.add("active");try{return(await p.get(v,{params:i})).data}catch(e){return console.error("❌ Fetch error:",e),{hits:[],totalHits:0}}finally{o&&o.classList.remove("active")}}let L=new h(".gallery a");function m(r,t=!1){const i=document.querySelector(".gallery");if(r.length===0){i.innerHTML="<p>No images found. Try another search.</p>";return}const o=r.map(e=>`
        <li class="gallery-item">
            <a href="${e.largeImageURL}">
                <img src="${e.webformatURL}" alt="${e.tags}">
                <div class="info">
                    <div class="stats">
                        <div class="label">Likes</div>
                        <div class="label">Views</div>
                        <div class="label">Comments</div>
                        <div class="label">Downloads</div>
                        <div class="counts">${e.likes}</div>
                        <div class="counts">${e.views}</div>
                        <div class="counts">${e.comments}</div>
                        <div class="counts">${e.downloads}</div>
                    </div>
                </div>
            </a>
        </li>
    `).join("");t?i.insertAdjacentHTML("beforeend",o):i.innerHTML=o,L.refresh()}const w=document.querySelector(".form"),S=document.querySelector("#search"),q=document.querySelector(".gallery"),l=document.querySelector(".load-more"),c=document.querySelector(".loader");let n="",a=1,f=0;w.addEventListener("submit",async r=>{if(r.preventDefault(),n=S.value.trim(),!n){u.warning({title:"Warning",message:"Enter a search term!"});return}a=1,q.innerHTML="",l.style.display="none",c.style.display="block";const t=await y(n,a);if(c.style.display="none",t.hits.length===0){u.error({title:"Error",message:"No images found!"});return}f=t.totalHits,m(t.hits),a*15<f&&(l.style.display="block")});l.addEventListener("click",async()=>{a++,c.style.display="block";const r=await y(n,a);c.style.display="none",m(r.hits,!0),a*15>=f&&(l.style.display="none",u.info({title:"Info",message:"You've reached the end of search results."})),E()});function E(){var t;const r=((t=document.querySelector(".gallery-item"))==null?void 0:t.getBoundingClientRect().height)||200;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
