// K-AI - COMANDO DE VOZ - BOTÃO LIGA 1x / DESLIGA SOZINHO EM 5s
let rec=null, ouvindo=false, textoBase='', timer2s=null, timer5s=null, perguntou=false;
const CORRECOES={'k ai':'K-AI','kai':'K-AI','supa base':'Supabase','github':'GitHub','gith hub':'GitHub'};
function corrigirTexto(t){ let s=' '+t.toLowerCase()+' '; for(const [e,c] of Object.entries(CORRECOES)){ s=s.split(e).join(' '+c+' '); } s=s.replace(/\s+/g,' ').trim(); if(!s) return s; return s.charAt(0).toUpperCase()+s.slice(1); }
function toggleMic(){
  if(ouvindo){ pararVoz(); return; }
  if(!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)){ alert('Use Chrome no celular para a voz funcionar.'); return; }
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition; rec=new SR();
  rec.lang='pt-BR'; rec.continuous=true; rec.interimResults=true; rec.maxAlternatives=1;
  textoBase=document.getElementById('input').value; ouvindo=true; perguntou=false;
  const btn=document.getElementById('btnMic'), st=document.getElementById('statusVoz');
  btn.classList.add('on'); btn.innerText='🔴'; st.className='ouvindo'; st.innerText='● OUVINDO... fale agora - botão ativo';
  rec.onresult=(e)=>{
    let interim='';
    for(let i=e.resultIndex;i<e.results.length;i++){ const r=e.results[i]; if(r.isFinal){ textoBase=(textoBase+' '+r[0].transcript).trim(); } else { interim+=r[0].transcript; } }
    document.getElementById('input').value=corrigirTexto(textoBase+' '+interim);
    perguntou=false;
    const st2=document.getElementById('statusVoz'); st2.className='ouvindo'; st2.innerText='● Digitando em tempo real: "'+document.getElementById('input').value.substring(0,60)+'..."';
    clearTimeout(timer2s); clearTimeout(timer5s);
    timer2s=setTimeout(()=>{
      if(!ouvindo) return; perguntou=true;
      const st3=document.getElementById('statusVoz'); st3.className='pergunta'; st3.innerText='❓ Você já terminou? Posso fazer o que você falou? Continue falando se quiser.';
      timer5s=setTimeout(()=>{ if(ouvindo && perguntou){ pararVoz(); if(document.getElementById('input').value.trim().length>2) enviar(); } }, 3000);
    }, 2000);
  };
  rec.onend=()=>{ if(ouvindo){ try{rec.start();}catch(_){} } };
  rec.onerror=(e)=>{ if(e.error==='not-allowed') alert('Permita o microfone no navegador.'); };
  rec.start();
}
function pararVoz(){ ouvindo=false; clearTimeout(timer2s); clearTimeout(timer5s); const b=document.getElementById('btnMic'); if(b){ b.classList.remove('on'); b.innerText='🎤'; } const s=document.getElementById('statusVoz'); if(s){ s.className=''; s.innerText='🎤 Toque 1x no microfone para falar de novo'; } if(rec) try{rec.stop();}catch(_){} }
