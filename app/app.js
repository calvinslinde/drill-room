const $=id=>document.getElementById(id);
const KEY="drillroom_v3";
let P=load(); let E=null; let strike=false, hl=false, timerId=null;

function load(){ try{ return JSON.parse(localStorage.getItem(KEY))||{}; }catch(e){ return {}; } }
function save(){ try{ localStorage.setItem(KEY,JSON.stringify(P)); }catch(e){} }
function daysLeft(){ return Math.max(Math.ceil((new Date(EXAM_DATE+"T08:00:00")-new Date())/86400000),0); }
function view(v){ ["home","exam","res"].forEach(x=>$(x).classList.toggle("hide",x!==v)); }
function flash(m){ $("flash").textContent=m; setTimeout(()=>{$("flash").textContent="";},9000); }
function post(name,body){
  try{ window.webkit.messageHandlers.saveResult.postMessage({name:name,body:body}); return true; }
  catch(e){
    try{ const local = location.protocol === "file:" || ["localhost","127.0.0.1"].includes(location.hostname);
         if(local){ fetch("/save",{method:"POST",headers:{"Content-Type":"application/json"},
           body:JSON.stringify({name,body})}).catch(()=>{}); } return true; }catch(e2){ return false; }
  }
}

/* ================= HOME ================= */
const SECTIONS=[
 {k:"C/P", n:"Chemical and Physical Foundations of Biological Systems"},
 {k:"CARS",n:"Critical Analysis and Reasoning Skills"},
 {k:"B/B", n:"Biological and Biochemical Foundations of Living Systems"},
 {k:"P/S", n:"Psychological, Social, and Biological Foundations of Behavior"}
];

function paintHome(){
  let done=0,qs=0,right=0,solid=0;
  SETS.forEach(s=>{ const r=P[s.id]; if(r&&r.done){ done++; qs+=r.total; right+=r.score; solid+=r.solid; } });
  $("sDone").textContent=done;
  $("sQs").textContent=qs;
  $("sAcc").textContent=qs?Math.round(right/qs*100)+"%":"—";
  $("sSolid").textContent=qs?Math.round(solid/qs*100)+"%":"—";
  $("sDays").textContent=daysLeft();

  const bank=$("tabBank"); bank.innerHTML="";
  SECTIONS.forEach(sec=>{
    const list=SETS.filter(s=>s.sec===sec.k);
    if(!list.length) return;
    const d=document.createElement("div"); d.className="panel";
    const doneN=list.filter(s=>P[s.id]&&P[s.id].done).length;
    d.innerHTML=`<div class="ph"><h2>${sec.n}</h2><span class="meta">${doneN} of ${list.length} complete</span></div><div class="pb"></div>`;
    const b=d.querySelector(".pb");
    list.forEach(s=>{
      const r=P[s.id]; const pct=r&&r.done?Math.round(r.score/r.total*100):null;
      let badge=`<span class="badge b-new">Not started</span>`;
      if(pct!==null) badge=`<span class="badge ${pct>=80?"b-ok":pct>=65?"b-mid":"b-bad"}">${pct}%</span>`;
      const row=document.createElement("button"); row.className="row";
      const nd=s.qs.filter(q=>q.d).length, np=s.qs.length-nd;
      row.innerHTML=`<span><span class="t">${s.topic}</span><span class="s">${np} passage${nd?` + ${nd} discrete`:""} &middot; ${Math.round(s.qs.length*(s.secPerQ||95)/60)} min${r&&r.done?` &middot; solid ${r.solid}/${r.total}`:""}</span></span>
        <span class="qn">${sec.k}</span>${badge}`;
      row.onclick=()=>begin(s);
      b.appendChild(row);
    });
    bank.appendChild(d);
  });
  const missing=SECTIONS.filter(x=>!SETS.some(s=>s.sec===x.k));
  if(missing.length){
    const d=document.createElement("div"); d.className="panel";
    d.innerHTML=`<div class="ph"><h2>Not yet written</h2></div>
      <div class="empty">${missing.map(m=>m.n).join("<br>")}<br><br>Ask in chat and these get written next.</div>`;
    bank.appendChild(d);
  }

  const nt=$("tabNotes");
  nt.innerHTML = NOTES.length
    ? NOTES.map(n=>`<div class="note"><h3>${n.title}</h3><div class="d">${n.date}</div><div class="bdy">${n.body}</div></div>`).join("")
    : `<div class="panel"><div class="empty">No notes yet. After a set, bring the result to chat &mdash; explanations land here.</div></div>`;

  const sh=$("tabSheets"); sh.innerHTML="";
  const p=document.createElement("div"); p.className="panel";
  p.innerHTML=`<div class="ph"><h2>MileDown review sheets</h2><span class="meta">92 pages</span></div><div class="pb"></div>`;
  const pb=p.querySelector(".pb");
  TOPICS.forEach(t=>{
    const sub=SUBJECTS.find(x=>x.key===t.s);
    const row=document.createElement("button"); row.className="row";
    row.innerHTML=`<span><span class="t">${sub.short} ${t.n} — ${t.t}</span><span class="s">Sheet ${t.p}</span></span><span class="qn">${sub.sect}</span><span></span>`;
    row.onclick=()=>openSheet(t.p, `${sub.short} ${t.n} — ${t.t}`);
    pb.appendChild(row);
  });
  sh.appendChild(p);
}
document.querySelectorAll(".tab").forEach(t=>t.onclick=()=>{
  document.querySelectorAll(".tab").forEach(x=>x.classList.remove("on")); t.classList.add("on");
  ["bank","notes","sheets"].forEach(k=>$("tab"+k[0].toUpperCase()+k.slice(1)).classList.toggle("hide",k!==t.dataset.t));
});
$("bNextSet").onclick=()=>{ const s=SETS.find(x=>!(P[x.id]&&P[x.id].done)); if(s) begin(s); else flash("Every set is done. Ask for more in chat."); };
$("bReset").onclick=()=>{ if(confirm("Clear all results?")){ P={}; save(); paintHome(); } };
$("bExport").onclick=()=>{
  let o=`DRILL ROOM — PROGRESS\nDays to exam: ${daysLeft()}\n\n`;
  SETS.forEach(s=>{ const r=P[s.id];
    o+= r&&r.done
      ? `${s.sec} — ${s.topic}: ${r.score}/${r.total} (${Math.round(r.score/r.total*100)}%) solid=${r.solid} lucky=${r.lucky} shaky=${r.shaky}${r.misses&&r.misses.length?` [${r.misses.join(" ")}]`:""}\n`
      : `${s.sec} — ${s.topic}: not started\n`; });
  post("_progress.txt",o); flash("Exported to ~/DrillRoom/results — say “check my results” in chat.");
};

/* ================= SHEET OVERLAY ================= */
function openSheet(p,title){ const img=$("shImg"); img.onerror=()=>{ img.alt="No review-sheet image found. Put your own page images in app/sheets/ as p001.jpg, p002.jpg, ... to use this button."; img.removeAttribute("src"); };
  img.src=`sheets/p${String(p).padStart(3,"0")}.jpg`; $("shT").textContent=title; $("sheet").classList.remove("hide"); }
$("shX").onclick=()=>$("sheet").classList.add("hide");

/* ================= EXAM ================= */
function begin(s){
  E={s:s,i:0,ans:Array(s.qs.length).fill(null),conf:Array(s.qs.length).fill(null),
     flag:Array(s.qs.length).fill(false),struck:s.qs.map(()=>[]),
     miss:Array(s.qs.length).fill(null),seen:Array(s.qs.length).fill(false),left:s.qs.length*(s.secPerQ||95),
     paused:false,pauseCount:0,pauseSecs:0,thisPause:0};
  $("pass").innerHTML=s.passage||"";
  $("tSect").textContent=s.label;
  $("clk").classList.remove("hide");
  $("padTxt").value=""; $("calcIn").value=""; $("calcOut").innerHTML="&nbsp;";
  if(window.lockCalc) window.lockCalc(true);
  $("paused").classList.add("hide"); $("tPause").classList.remove("on");
  view("exam"); drawQ(); tick();
}
function tick(){ clearInterval(timerId);
  timerId=setInterval(()=>{
    if(!E) return;
    if(E.paused){                       // break time is logged, not deducted
      E.pauseSecs++; E.thisPause++;
      const m=Math.floor(E.thisPause/60), s=E.thisPause%60;
      $("pClk").textContent=`${m}:${String(s).padStart(2,"0")}`;
      return;
    }
    E.left--;
    if(E.left<=0){E.left=0;clearInterval(timerId);grade();return;} paintClk(); },1000);
  paintClk(); }

function setPaused(on){
  if(!E) return;
  E.paused=on;
  if(on){ E.pauseCount++; E.thisPause=0; $("pClk").textContent="0:00"; }
  $("paused").classList.toggle("hide",!on);
  $("tPause").classList.toggle("on",on);
}
function paintClk(){ const m=Math.floor(E.left/60),s=E.left%60;
  $("clkT").textContent=`${m}:${String(s).padStart(2,"0")}`; $("clk").classList.toggle("low",E.left<300); }
function drawQ(){
  if(E.seen) E.seen[E.i]=true;
  const s=E.s,q=s.qs[E.i];
  // discrete questions stand alone — the passage pane collapses, as on the real exam
  $("ebody").classList.toggle("np", !s.passage || !!q.d);
  $("tCount").textContent=`Question ${E.i+1} of ${s.qs.length}${q.d?"  (discrete)":""}`;
  $("qno").textContent=`Question ${E.i+1}`;
  $("qtx").innerHTML=q.q;
  $("fChk").checked=E.flag[E.i]; $("fLbl").classList.toggle("on",E.flag[E.i]);
  const box=$("opts"); box.innerHTML="";
  q.ch.forEach((c,k)=>{
    const b=document.createElement("button");
    b.className="opt"+(E.ans[E.i]===k?" sel":"")+(E.struck[E.i].includes(k)?" st":"");
    b.innerHTML=`<span class="rd"></span><span class="lt">${"ABCD"[k]}.</span><span class="tx">${c}</span>`;
    b.onclick=()=>{ if(strike){const a=E.struck[E.i],j=a.indexOf(k);j>-1?a.splice(j,1):a.push(k);}
      else{ if(E.struck[E.i].includes(k))return; E.ans[E.i]=k; } drawQ(); };
    b.oncontextmenu=ev=>{ev.preventDefault();const a=E.struck[E.i],j=a.indexOf(k);j>-1?a.splice(j,1):a.push(k);drawQ();};
    box.appendChild(b);
  });
  document.querySelectorAll("#conf button").forEach(b=>{
    b.classList.toggle("on",E.conf[E.i]===b.dataset.c);
    b.onclick=()=>{E.conf[E.i]=b.dataset.c;drawQ();};
  });
  $("bPrev").disabled=E.i===0;
  $("bNext").disabled=!(E.ans[E.i]!==null&&E.conf[E.i]!==null);
  $("bNext").textContent=E.i===s.qs.length-1?"End Section":"Next";
}
$("bPrev").onclick=()=>{ if(E.i>0){E.i--;drawQ();} };
$("bNext").onclick=()=>{ if(E.i===E.s.qs.length-1) grade(); else {E.i++;drawQ();} };
$("fChk").onchange=()=>{ E.flag[E.i]=$("fChk").checked; drawQ(); };
$("tPause").onclick=()=>setPaused(true);
$("pResume").onclick=()=>setPaused(false);
$("tSt").onclick=()=>{ strike=!strike; $("tSt").classList.toggle("on",strike); document.body.classList.toggle("strike",strike); };
$("tEnd").onclick=()=>{ if(confirm("End this section and score it?")) grade(); };
$("tSheet").onclick=()=>{ if(E&&E.s.sheet) openSheet(E.s.sheet, E.s.topic); };
const HLZ=["pass","qtx","opts"];
function unwrap(n){ const p=n.parentNode; while(n.firstChild)p.insertBefore(n.firstChild,n); p.removeChild(n); p.normalize(); }
function inZone(n){ return HLZ.some(id=>$(id).contains(n)); }
// Real-exam behaviour: select text, click Highlight. Selecting inside an existing
// highlight and clicking again lifts it. Sticky mode is an opt-in practice aid only.
function applyHl(){ const sel=window.getSelection(); if(!sel.rangeCount||sel.isCollapsed)return;
  const r=sel.getRangeAt(0); if(!inZone(r.commonAncestorContainer))return;
  let n=r.commonAncestorContainer; while(n&&n!==document.body){ if(n.classList&&n.classList.contains("hl")){ unwrap(n); sel.removeAllRanges(); return; } n=n.parentNode; }
  const sp=document.createElement("span"); sp.className="hl";
  try{r.surroundContents(sp);}catch(e){sp.appendChild(r.extractContents());r.insertNode(sp);} sel.removeAllRanges(); }
$("tHl").onclick=()=>{ applyHl(); };
$("hlStick").onchange=()=>{ hl=$("hlStick").checked; document.body.classList.toggle("hlmode",hl); };
HLZ.forEach(id=>{
  $(id).addEventListener("mouseup",()=>{ if(hl)setTimeout(applyHl,0); });
  $(id).addEventListener("click",e=>{ if(hl&&e.target.classList&&e.target.classList.contains("hl")&&window.getSelection().isCollapsed) unwrap(e.target); },true);
});
$("tUn").onclick=()=>{ HLZ.forEach(id=>$(id).querySelectorAll(".hl").forEach(unwrap)); };
$("clk").onclick=()=>{ $("clkT").classList.toggle("hid"); };

// ---- Periodic table (real exam provides one in C/P and B/B; Alt+T) ----
function buildPT(){ const g=$("ptG"); if(g.childElementCount) return;
  const cell=(e)=>`<div class="pel" style="grid-row:${e[3]};grid-column:${e[4]}"><div class="z">${e[1]}</div><div class="sy">${e[0]}</div><div class="m">${e[2]}</div></div>`;
  g.innerHTML = PT.map(cell).join("") + `<div class="pspacer" style="grid-row:8"></div>`; }
function ptOpen(on){ if(on)buildPT(); $("pt").classList.toggle("hide",!on); }
$("tPt").onclick=()=>ptOpen($("pt").classList.contains("hide"));
$("ptX").onclick=()=>ptOpen(false);
$("pt").addEventListener("click",e=>{ if(e.target.id==="pt") ptOpen(false); });

// ---- Real MCAT keyboard shortcuts ----
document.addEventListener("keydown",e=>{
  if($("exam").classList.contains("hide")) return;
  const t=e.target.tagName; if(t==="INPUT"||t==="TEXTAREA") return;
  const k=e.key.toLowerCase();
  if(e.altKey){
    const map={h:()=>$("tHl").click(), s:()=>$("tSt").click(), t:()=>$("tPt").click(),
               v:()=>$("tNav").click(), f:()=>{$("fChk").checked=!$("fChk").checked;$("fChk").dispatchEvent(new Event("change"));},
               n:()=>{ if(!$("bNext").disabled)$("bNext").click(); }, p:()=>$("bPrev").click(),
               c:()=>{ ptOpen(false); $("nav").classList.add("hide"); }, e:()=>$("tEnd").click()};
    if(map[k]){ e.preventDefault(); map[k](); }
    return;
  }
  if("abcd".includes(k)&&!e.metaKey&&!e.ctrlKey){
    const b=$("opts").children[ "abcd".indexOf(k) ]; if(b){ e.preventDefault(); b.click(); }
  }
});

$("tNav").onclick=()=>{
  let h=`<tr><th>#</th><th>Status</th><th>Flagged</th><th>Confidence</th></tr>`;
  E.s.qs.forEach((_,k)=>{h+=`<tr data-k="${k}"><td><b>${k+1}</b></td><td>${E.ans[k]!==null?"Completed":(E.seen&&E.seen[k]?"<i>Incomplete</i>":"<i>Unseen</i>")}</td><td>${E.flag[k]?"<span style='color:var(--flag);font-weight:700'>&#10022; Flagged</span>":""}</td><td>${E.conf[k]?({sure:"Knew it",two:"50/50",guess:"Guessed"})[E.conf[k]]:"&mdash;"}</td></tr>`;});
  $("nT").innerHTML=h;
  $("nT").querySelectorAll("tr[data-k]").forEach(tr=>tr.onclick=()=>{E.i=+tr.dataset.k;$("nav").classList.add("hide");drawQ();});
  $("nav").classList.remove("hide"); };
$("nX").onclick=$("nC").onclick=()=>$("nav").classList.add("hide");
(function(){ const sp=$("sp"),bd=$("ebody"),pa=$("pass"); let d=false;
  sp.addEventListener("mousedown",e=>{d=true;e.preventDefault();document.body.style.userSelect="none";});
  window.addEventListener("mousemove",e=>{ if(!d)return; const r=bd.getBoundingClientRect();
    pa.style.flex=`0 0 ${Math.max(22,Math.min(78,(e.clientX-r.left)/r.width*100))}%`; });
  window.addEventListener("mouseup",()=>{d=false;document.body.style.userSelect="";});
})();

/* ================= GRADE ================= */
const CATS=[["A","Never knew it"],["B","Misread the question"],["C","Narrowed to two"],["D","Ran out of time"],["E","Lost the passage"]];
function grade(){
  clearInterval(timerId);
  $("paused").classList.add("hide"); $("tPause").classList.remove("on");
  const s=E.s,n=s.qs.length;
  let right=0,lucky=0,shaky=0;
  s.qs.forEach((q,k)=>{const ok=E.ans[k]===q.a;if(ok)right++;
    if(ok&&E.conf[k]==="guess")lucky++; if(ok&&E.conf[k]==="two")shaky++;});
  const solid=right-lucky-shaky,pct=Math.round(right/n*100);
  $("clk").classList.add("hide"); $("tCount").textContent="";
  $("tSect").textContent=s.topic+" — review";
  view("res");
  $("zT").textContent=`${right} of ${n} correct — ${pct}%`;
  $("zL").textContent=(lucky+shaky)>0
    ? `Of those ${right} correct, ${solid} were solid. ${lucky+shaky} came from a guess or a coin flip — gaps the raw score hides.`
    : `Every correct answer was marked confident. That is a clean read.`;
  $("zS").innerHTML=`<div class="st"><div class="v">${pct}%</div><div class="l">Raw score</div></div>
    <div class="st"><div class="v">${solid}</div><div class="l">Solid</div></div>
    <div class="st${lucky?" al":""}"><div class="v">${lucky}</div><div class="l">Lucky — guessed, right</div></div>
    <div class="st"><div class="v">${shaky}</div><div class="l">Shaky — 50/50, right</div></div>`;
  const B={sure:[0,0],two:[0,0],guess:[0,0]};
  s.qs.forEach((q,k)=>{const c=E.conf[k];if(!c)return;B[c][1]++;if(E.ans[k]===q.a)B[c][0]++;});
  const L={sure:"Knew it",two:"Narrowed to two",guess:"Guessed"},C={sure:"#1E7A3C",two:"#D9A22B",guess:"#B3261E"};
  $("zB").innerHTML=Object.keys(B).map(c=>{const[r,t]=B[c];if(!t)return"";
    return `<div class="br"><span>${L[c]}</span><div class="trk"><div class="fl" style="width:${Math.round(r/t*100)}%;background:${C[c]}"></div></div><span class="n">${r}/${t}</span></div>`;}).join("");
  let v; const st=B.sure[1],sr=B.sure[0];
  if(st&&sr/st<0.8) v=`<strong>Your confident answers are only ${Math.round(sr/st*100)}% correct.</strong> The most important number here — the model itself is wrong somewhere, not just missing facts. Confidently wrong needs mechanism work, not more cards.`;
  else if(right&&(lucky+shaky)>right*0.35) v=`<strong>Over a third of your correct answers came from guessing or coin flips.</strong> The raw score overstates you. The fix is distractor discrimination, not new content.`;
  else if(pct>=80) v=`<strong>Clean.</strong> High accuracy with honest confidence.`;
  else v=`<strong>Mixed.</strong> Tag each miss, save, then bring it to chat — the category split decides what comes next.`;
  $("zV").innerHTML=v;
  // passage stays available at the top of review
  const zp=$("zPass");
  if(s.passage){
    zp.className=""; 
    zp.innerHTML=`<div class="zph"><span>Passage &mdash; ${s.topic}</span><span class="tw">hide</span></div><div class="zpb">${s.passage}</div>`;
    zp.querySelector(".zph").onclick=()=>{
      zp.classList.toggle("closed");
      zp.querySelector(".tw").textContent = zp.classList.contains("closed") ? "show" : "hide";
    };
  } else { zp.innerHTML=""; zp.className=""; }

  const list=$("zList"); list.innerHTML="";
  s.qs.forEach((q,k)=>{
    const ok=E.ans[k]===q.a, lk=ok&&E.conf[k]!=="sure", mine=E.ans[k];
    const pill=ok?(lk?`<span class="pl p-lk">CORRECT &mdash; ${E.conf[k]==="guess"?"GUESSED":"50/50"}</span>`:`<span class="pl p-ok">CORRECT</span>`):`<span class="pl p-bad">INCORRECT</span>`;
    const d=document.createElement("div"); d.className="rq";
    const choices = q.ch.map((c,ci)=>{
      const isC = ci===q.a, isM = ci===mine;
      let cls="rch"+(isC&&isM?" both":isC?" correct":isM?" yours":"");
      let tag = isC&&isM ? "CORRECT &mdash; YOURS" : isC ? "CORRECT" : isM ? "YOUR ANSWER" : "";
      return `<button class="${cls}" data-q="${k}" data-c="${ci}">
        <span class="l">${"ABCD"[ci]}.</span><span>${c}</span>
        <span class="tag">${tag}</span></button>
      <div class="rwhy ${isC?"good":"bad"} hide" id="w${k}_${ci}"></div>`;
    }).join("");
    d.innerHTML=`<div class="rqh"><span class="id">Question ${k+1}${q.d?" (discrete)":""}</span>${pill}</div>
      <div class="rqb">
        <div class="q2">${q.q}</div>
        <div class="rchoices">${choices}</div>
        <div class="exfull"><div class="h">Full explanation</div>${q.e}</div>
        ${(!ok||lk)?`<div class="tgr"><div class="l">Why did this go wrong?</div><div class="tgs" data-k="${k}"></div></div>`:""}
      </div>`;
    list.appendChild(d);
  });

  // per-choice reasoning, revealed on click
  list.querySelectorAll(".rch").forEach(btn=>{
    btn.onclick=()=>{
      const k=+btn.dataset.q, ci=+btn.dataset.c, q=s.qs[k];
      const box=document.getElementById(`w${k}_${ci}`);
      if(!box) return;
      if(!box.dataset.filled){
        let txt = (typeof WHYS!=="undefined" && WHYS[s.id] && WHYS[s.id][k] && WHYS[s.id][k][ci])
                  ? WHYS[s.id][k][ci]
                  : ((q.why && q.why[ci]) ? q.why[ci] : null);
        if(!txt){
          txt = ci===q.a
            ? "<strong>This is the correct answer.</strong> See the full explanation below for the reasoning."
            : "<strong>Incorrect.</strong> A per-choice note has not been written for this one yet &mdash; the full explanation below names the trap. Ask in chat and I'll add it.";
        }
        box.innerHTML=txt; box.dataset.filled="1";
      }
      box.classList.toggle("hide");
    };
  });

  E._sum={right,n,pct,solid,lucky,shaky};
  if(window.lockCalc) window.lockCalc(false);
  persist();   // never lose a set to a missed button
}
function persist(){
  if(!E||!E._sum) return;
  const s=E.s,x=E._sum;
  P[s.id]={done:true,score:x.right,total:x.n,solid:x.solid,lucky:x.lucky,shaky:x.shaky,
           misses:E.miss.map((m,k)=>m?`Q${k+1}:${m}`:null).filter(Boolean),
           detail:s.qs.map((q,k)=>({n:k+1,ok:E.ans[k]===q.a,
                  picked:E.ans[k]===null?"-":"ABCD"[E.ans[k]], correct:"ABCD"[q.a],
                  conf:E.conf[k]||"-", why:E.miss[k]||null, flag:!!E.flag[k]})),
           timeLeft:E.left,pauseCount:E.pauseCount,pauseSecs:E.pauseSecs,ts:Date.now()};
  save();
  let o=`SET: ${s.sec} — ${s.topic}\nSCORE: ${x.right}/${x.n} (${x.pct}%)\n`;
  o+=`solid=${x.solid} lucky=${x.lucky} shaky=${x.shaky}\ntime remaining: ${Math.floor(E.left/60)}m ${E.left%60}s\n`;
  o+=`breaks: ${E.pauseCount} totalling ${Math.floor(E.pauseSecs/60)}m ${E.pauseSecs%60}s\n\n`;
  s.qs.forEach((q,k)=>{
    o+=`Q${k+1}: ${E.ans[k]===q.a?"correct":"MISSED"} | conf=${E.conf[k]||"-"}`;
    if(E.miss[k]) o+=` | why=${E.miss[k]}`;
    if(E.flag[k]) o+=` | flagged`;
    o+=`\n   asked: ${q.q.replace(/<[^>]+>/g,"").slice(0,150)}\n`;
  });
  post(`${s.id}.txt`,o);
}
$("zSave").onclick=()=>{
  persist();
  E=null; $("tSect").textContent="Passage bank"; view("home"); paintHome();
  flash("Saved to ~/DrillRoom/results. Say “check my results” in chat.");
};


/* ================= NOTEBOARD ================= */
(function(){
  const pad=$("pad"), txt=$("padTxt"), inp=$("calcIn"), out=$("calcOut");
  $("tPad").onclick=()=>{ pad.classList.toggle("hide"); $("tPad").classList.toggle("on",!pad.classList.contains("hide")); if(!pad.classList.contains("hide")) txt.focus(); };
  $("padX").onclick=()=>{ pad.classList.add("hide"); $("tPad").classList.remove("on"); };

  window.lockCalc=function(on){
    inp.disabled=on; inp.placeholder = on ? "Locked — no calculator on the real MCAT" : "e.g. 110/20";
    document.querySelectorAll(".keys button").forEach(b=>b.disabled=on);
    document.querySelector(".calcnote").innerHTML = on
      ? "Locked during timed sets &mdash; <b>the real MCAT gives you none</b>. Unlocks in review."
      : "Calculator &mdash; <b>not available on the real MCAT</b>";
    if(on) out.innerHTML="&nbsp;";
  };
  function calc(){
    const raw=inp.value.trim();
    if(inp.disabled) return;
    if(!raw){ out.textContent="\u00a0"; return; }
    // only arithmetic characters may reach the evaluator
    if(!/^[0-9+\-*/().eE^%\s]+$/.test(raw)){ out.textContent="?"; return; }
    try{
      const expr=raw.replace(/\^/g,"**");
      const v=Function('"use strict";return ('+expr+')')();
      if(typeof v!=="number"||!isFinite(v)){ out.textContent="?"; return; }
      out.textContent = Math.abs(v)<1e-4&&v!==0 ? v.toExponential(4)
                      : (Math.round(v*1e6)/1e6).toString();
    }catch(e){ out.textContent="?"; }
  }
  inp.addEventListener("input",calc);
  inp.addEventListener("keydown",e=>{ if(e.key==="Enter"){ e.preventDefault(); calc(); }});
  document.querySelectorAll(".keys button").forEach(b=>{
    b.onclick=()=>{
      const k=b.dataset.k;
      if(k==="C"){ inp.value=""; }
      else if(k==="back"){ inp.value=inp.value.slice(0,-1); }
      else if(k==="pow"){ inp.value+="^"; }
      else if(k==="eq"){ calc(); inp.focus(); return; }
      else inp.value+=b.textContent;
      calc(); inp.focus();
    };
  });

  // drag by the header
  let dx=0,dy=0,drag=false;
  $("padDrag").addEventListener("mousedown",e=>{
    drag=true; const r=pad.getBoundingClientRect(); dx=e.clientX-r.left; dy=e.clientY-r.top;
    pad.style.right="auto"; pad.style.bottom="auto"; e.preventDefault();
  });
  window.addEventListener("mousemove",e=>{ if(!drag)return;
    pad.style.left=Math.max(0,Math.min(window.innerWidth-260,e.clientX-dx))+"px";
    pad.style.top =Math.max(0,Math.min(window.innerHeight-120,e.clientY-dy))+"px"; });
  window.addEventListener("mouseup",()=>drag=false);
})();

paintHome(); view("home");
