// Paste your deployed Google Apps Script Web App URL here:
const SCRIPT_URL='https://script.google.com/macros/s/AKfycbzOhlFV_LwGtPOREKq-hafKjxqcYM-bp_ejISGbQke0QR7XSHOTniDBl05kZSgtFMt1Lw/exec';
const $=s=>document.querySelector(s);
$('.ham')?.addEventListener('click',()=>$('.lk').classList.toggle('o'));
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&(e.target.classList.add('v'),io.unobserve(e.target))),{threshold:.1});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
document.getElementById('yr').textContent=new Date().getFullYear();
// Forms -> Google Sheet (Leads / Class Registrations / Job Applications + CV upload to Drive)
document.querySelectorAll('form[data-sheet]').forEach(f=>f.addEventListener('submit',async e=>{e.preventDefault();const m=f.querySelector('.fm'),b=f.querySelector('button[type=submit]'),fi=f.querySelector('input[type=file]');
 const say=(t,c)=>{m.style.color=c;m.textContent=t};
 if(SCRIPT_URL.startsWith('PASTE')){say('Set SCRIPT_URL in assets/site.js first.','#d93025');return}
 let body;
 if(fi){const file=fi.files[0];if(!file){say('Please choose your CV.','#d93025');return}
  if(!/\.(pdf|docx?)$/i.test(file.name)){say('Only PDF, DOC or DOCX files are allowed.','#d93025');return}
  if(file.size>4*1024*1024){say('File is larger than 4 MB.','#d93025');return}
  const b64=await new Promise(r=>{const fr=new FileReader();fr.onload=()=>r(fr.result.split(',')[1]);fr.readAsDataURL(file)});
  const o={};new FormData(f).forEach((v,k)=>{if(typeof v==='string')o[k]=v});o.sheet=f.dataset.sheet;o.cv_name=file.name;o.cv_type=file.type||'application/pdf';o.cv_data=b64;body=JSON.stringify(o)}
 else{const d=new URLSearchParams(new FormData(f));d.set('sheet',f.dataset.sheet);body=d}
 b.disabled=true;say('Sending...','#5b6b8c');
 try{await fetch(SCRIPT_URL,{method:'POST',mode:'no-cors',body});say('✅ Thank you! Please check your email for confirmation.','#0f9d58');f.reset()}
 catch(x){say('Failed. Please WhatsApp us on +91 7008373783.','#d93025')}
 b.disabled=false}));
// Animated counters
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.unobserve(e.target);const t=e.target,n=+t.dataset.n,s=t.dataset.s||'';let i=0;const k=setInterval(()=>{i+=Math.ceil(n/40);if(i>=n){i=n;clearInterval(k)}t.textContent=i+s},35)}));
document.querySelectorAll('[data-n]').forEach(e=>co.observe(e));
// Scroll-driven banner slides
const hs=$('#hs');if(hs){const sl=[...hs.querySelectorAll('.sl')],dt=[...hs.querySelectorAll('.dots button')],bar=$('.bar i');let cu=-1;
 const rng=()=>hs.offsetHeight-innerHeight;
 const up=()=>{const p=Math.min(.999,Math.max(0,-hs.getBoundingClientRect().top/rng())),i=Math.floor(p*sl.length);bar.style.width=p*100+'%';
  if(i!==cu){cu=i;sl.forEach((s,k)=>s.classList.toggle('on',k===i));dt.forEach((d,k)=>d.classList.toggle('on',k===i))}};
 addEventListener('scroll',up,{passive:true});addEventListener('resize',up);up();
 dt.forEach((d,k)=>d.onclick=()=>scrollTo({top:hs.offsetTop+(k+.5)*rng()/sl.length,behavior:'smooth'}))}
// Banner video sound toggle
const mt=$('.mt'),bv=$('.bgv');if(mt&&bv){bv.play&&bv.play().catch(()=>{});mt.onclick=()=>{bv.muted=!bv.muted;mt.textContent=bv.muted?'🔇':'🔊';bv.play()}}
