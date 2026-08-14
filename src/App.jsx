import React, { useEffect, useRef, useState } from 'react';

import logo from './assets/images/logo-sofia-en-voz-alta.png';
import isotipo from './assets/images/isotipo-sofia-en-voz-alta.png';
import sofiaFoto from './assets/images/sofia-foto.png';
import trabajo1 from './assets/images/1.png';
import trabajo2 from './assets/images/2.png';
import personaSofia from './assets/images/3.png';
import personaVictor from './assets/images/4.png';

const SITE_STYLES = `
:root{
  --bg:#fffefc;
  --bg2:#fcfaf8;
  --white:#ffffff;
  --plum:#4b113f;
  --plum2:#2d0927;
  --rasp:#ed0064;
  --rasp2:#ff438b;
  --pink:#f7c8d8;
  --pink2:#fff1f6;
  --ink:#272126;
  --muted:#71676d;
  --line:rgba(75,17,63,.12);
  --line2:rgba(75,17,63,.07);
  --shadow:0 26px 80px rgba(75,17,63,.09);
  --shadow2:0 34px 100px rgba(75,17,63,.14);
  --max:1280px;
  --mEsp:#3e2923;
  --mTer:#c96f4f;
  --mBut:#f1d98e;
  --mIvo:#fff8ec;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  color:var(--ink);
  font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
  background:
    radial-gradient(circle at 92% 3%,rgba(237,0,100,.035),transparent 25rem),
    radial-gradient(circle at 4% 42%,rgba(75,17,63,.02),transparent 30rem),
    var(--bg);
  line-height:1.5;
  overflow-x:hidden;
}
img{display:block;max-width:100%}
a{color:inherit;text-decoration:none}
button,input,textarea{font:inherit}
button{color:inherit}
.container{width:min(var(--max),calc(100% - 44px));margin-inline:auto}
.section{position:relative;padding:118px 0}
.eyebrow{
  display:inline-flex;align-items:center;gap:.55rem;padding:.48rem .8rem;
  border-radius:999px;background:rgba(237,0,100,.07);border:1px solid rgba(237,0,100,.08);
  color:var(--plum);font-size:.74rem;font-weight:900;letter-spacing:.09em;text-transform:uppercase
}
.eyebrow::before{content:"";width:7px;height:7px;border-radius:50%;background:var(--rasp)}
.display{margin:15px 0 19px;color:var(--plum);font-size:clamp(2.8rem,5.5vw,6rem);line-height:.93;letter-spacing:-.058em}
.lead{max-width:760px;color:#554d52;font-size:clamp(1.04rem,1.5vw,1.2rem)}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;padding:14px 21px;border-radius:999px;border:0;font-weight:900;cursor:pointer;transition:.22s ease}
.btn-primary{background:var(--plum);color:#fff;box-shadow:0 14px 34px rgba(75,17,63,.18)}
.btn-primary:hover{background:var(--plum2);transform:translateY(-2px)}
.btn-light{border:1px solid var(--line);background:rgba(255,255,255,.78);color:var(--plum)}
.reveal{opacity:0;transform:translateY(22px);transition:.7s cubic-bezier(.2,.7,.2,1)}
.reveal.show{opacity:1;transform:none}

/* HEADER */
.sva-header{position:sticky;top:0;z-index:100;background:rgba(255,254,252,.9);backdrop-filter:blur(18px);border-bottom:1px solid var(--line2)}
.sva-nav{height:76px;display:flex;align-items:center;justify-content:space-between;gap:24px}
.sva-brand img{width:218px}
.sva-navlinks{display:flex;align-items:center;gap:25px;font-size:.9rem;font-weight:790}
.sva-menu{display:none;background:transparent;border:0;color:var(--plum);font-size:1.5rem;cursor:pointer}
.sva-mobile{display:none;position:fixed;z-index:99;top:76px;left:0;right:0;padding:18px 22px 24px;background:rgba(255,254,252,.99);border-bottom:1px solid var(--line);box-shadow:var(--shadow)}
.sva-mobile.open{display:block}
.sva-mobile a{display:block;padding:10px 0;color:var(--plum);font-weight:820}

/* HERO */
.sva-hero{min-height:calc(100vh - 76px);display:grid;align-items:center;padding:52px 0 72px;position:relative;overflow:hidden}
.sva-hero-grid{display:grid;grid-template-columns:1.04fr .96fr;gap:72px;align-items:center}
.sva-hero h1{margin:16px 0 23px;max-width:810px;color:var(--plum);font-size:clamp(3.2rem,6vw,6.55rem);line-height:.91;letter-spacing:-.064em}
.sva-hero-copy{max-width:680px;color:#50484d;font-size:clamp(1.05rem,1.5vw,1.22rem)}
.sva-hero-copy strong{color:var(--plum)}
.sva-hero-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:28px}
.sva-hero-note{margin-top:12px;color:var(--muted);font-size:.88rem;font-weight:670}
.sva-hero-art{min-height:655px;position:relative}
.sva-hero-blob{position:absolute;right:-45px;top:74px;width:255px;height:255px;border-radius:50%;background:var(--plum);z-index:1}
.sva-hero-ring{position:absolute;left:12px;bottom:64px;width:175px;height:175px;border-radius:50%;border:2px solid rgba(237,0,100,.48);z-index:6}
.sva-hero-isotipo{position:absolute;right:-15px;bottom:8px;width:250px;opacity:.075;z-index:2;transform:rotate(-7deg)}
.sva-hero-photo{position:absolute;inset:26px 22px 0 78px;z-index:4;overflow:hidden;border-radius:45% 50% 28px 28px/31% 35% 28px 28px;background:#fff;border:1px solid var(--line2);box-shadow:var(--shadow2)}
.sva-hero-photo img{width:100%;height:100%;object-fit:cover;object-position:center 12%}
.sva-hero-curve{position:absolute;left:-42px;right:-54px;top:51%;height:170px;z-index:6}
.sva-hero-curve svg{width:100%;height:100%;overflow:visible}
.sva-hero-curve path{fill:none;stroke:var(--rasp);stroke-width:2.4;stroke-linecap:round}
.sva-hero-curve circle{fill:var(--rasp)}
.sva-thought{position:absolute;z-index:8;background:rgba(255,255,255,.95);backdrop-filter:blur(10px);border:1px solid var(--line);border-radius:999px;padding:10px 14px;color:var(--plum);font-size:.79rem;font-weight:830;box-shadow:0 13px 34px rgba(75,17,63,.08)}
.sva-t1{left:-8px;top:18%;transform:rotate(-4deg)}
.sva-t2{right:-16px;top:34%;transform:rotate(3deg)}
.sva-t3{right:-2px;bottom:7%;max-width:290px;transform:rotate(-2deg)}

/* MIGA */
.sva-miga{padding-top:145px}
.sva-miga-head{display:grid;grid-template-columns:1fr .7fr;gap:52px;align-items:end}
.sva-miga-show{margin-top:52px;border:1px solid var(--line2);border-radius:42px;overflow:hidden;background:white;box-shadow:0 18px 62px rgba(75,17,63,.05)}
.sva-miga-top{padding:25px 28px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--line2)}
.sva-miga-brand{display:flex;align-items:baseline;gap:12px}
.sva-miga-brand strong{color:var(--plum);font-size:2rem;letter-spacing:-.04em}
.sva-miga-brand span{color:var(--muted);font-size:.84rem}
.sva-miga-note{color:var(--muted);font-size:.78rem;max-width:390px;text-align:right}
.sva-compare{display:grid;grid-template-columns:1fr 90px 1fr;min-height:590px}
.sva-demo-side{position:relative;overflow:hidden;padding:28px;background:linear-gradient(160deg,#fff,#fcfaf8)}
.sva-demo-side.after{background:linear-gradient(150deg,#fffdf9,#fff)}
.sva-demo-label{position:absolute;left:24px;top:22px;padding:7px 11px;border-radius:999px;background:var(--plum);color:white;font-size:.68rem;font-weight:900;letter-spacing:.09em;text-transform:uppercase;z-index:10}
.sva-demo-side.after .sva-demo-label{background:var(--mEsp)}
.sva-demo-caption{position:absolute;right:24px;top:24px;max-width:260px;text-align:right;color:var(--plum);font-size:.84rem;font-weight:820;z-index:10}
.sva-demo-canvas{position:absolute;inset:78px 22px 22px}
.sva-old-logo,.sva-old-post,.sva-old-story,.sva-old-bag,.sva-old-menu,.sva-new-logo,.sva-new-post,.sva-new-story,.sva-new-bag,.sva-new-menu{position:absolute;box-shadow:0 16px 38px rgba(60,26,49,.1)}
.sva-old-logo{left:4%;top:4%;width:180px;height:112px;border-radius:20px;background:white;border:1px solid var(--line);display:grid;place-items:center;transform:rotate(-4deg)}
.sva-old-logo b{font-family:"Brush Script MT","Segoe Script",cursive;font-size:2.15rem;color:#6e482c;font-weight:600}
.sva-old-logo small{display:block;text-align:center;text-transform:uppercase;letter-spacing:.12em;color:#927a67;font-size:.44rem}
.sva-old-post{right:3%;top:3%;width:180px;height:180px;border-radius:24px;background:linear-gradient(145deg,#ffc829,#ff6b29);padding:16px;transform:rotate(4deg)}
.sva-old-post small{background:#fff;color:#9d4a19;padding:4px 6px;border-radius:5px;font-size:.52rem;font-weight:900}
.sva-old-post b{display:block;margin-top:40px;color:#9d1119;font-size:1.65rem;line-height:.9}
.sva-old-story{left:2%;bottom:4%;width:118px;height:220px;border-radius:23px;background:linear-gradient(180deg,#f2a4c1,#cf85aa);padding:14px;transform:rotate(3deg);color:#653553}
.sva-old-story i{display:grid;place-items:center;width:48px;height:48px;border-radius:50%;background:#fff0c7;font-style:normal;margin-bottom:52px}
.sva-old-story b{font-family:"Comic Sans MS","Segoe Print",cursive;font-size:1rem;line-height:1.05}
.sva-old-bag{right:4%;bottom:4%;width:130px;height:195px;border-radius:13px;background:#bc8756;transform:rotate(-4deg)}
.sva-old-bag span{position:absolute;width:100%;text-align:center;top:57px;font-size:1.7rem}
.sva-old-bag b{position:absolute;width:100%;text-align:center;top:104px;color:white;font-size:.82rem}
.sva-old-menu{left:24%;bottom:3%;width:205px;height:125px;border-radius:18px;background:#202020;color:white;padding:17px;transform:rotate(-2deg)}
.sva-old-menu em{font-family:Georgia,serif;color:#efd6b8;font-style:normal}
.sva-old-menu h4{font-family:Georgia,serif;margin:12px 0 5px}
.sva-old-menu p{margin:0;color:#ccc;font-size:.54rem;line-height:1.6}
.sva-demo-mid{position:relative;display:grid;place-items:center;background:linear-gradient(180deg,transparent,rgba(237,0,100,.025),transparent)}
.sva-demo-mid::before{content:"";position:absolute;top:55px;bottom:55px;width:2px;background:linear-gradient(transparent,rgba(237,0,100,.32),transparent)}
.sva-order{width:76px;height:76px;border-radius:50%;background:var(--plum);color:white;display:grid;place-items:center;text-align:center;box-shadow:0 15px 36px rgba(75,17,63,.2);z-index:3}
.sva-order b{font-size:.55rem;text-transform:uppercase;letter-spacing:.07em;line-height:1.05}
.sva-order span{display:block;font-size:1.3rem}
.sva-new-logo{left:4%;top:4%;width:195px;height:122px;border-radius:20px;background:var(--mIvo);border:1px solid rgba(62,41,35,.09);padding:18px}
.sva-mmark{display:flex;align-items:center;gap:9px}
.sva-msym{width:38px;height:38px;border-radius:50%;background:var(--mEsp);position:relative}
.sva-msym::after{content:"";position:absolute;width:22px;height:8px;border-radius:999px;background:var(--mBut);left:8px;top:15px;transform:rotate(-12deg)}
.sva-mword{font-family:Georgia,serif;color:var(--mEsp);font-size:1.9rem;line-height:.8;letter-spacing:-.05em}
.sva-mword span{color:var(--mTer)}
.sva-new-logo small{display:block;margin-top:13px;color:#79665e;font-size:.5rem;text-transform:uppercase;letter-spacing:.11em}
.sva-new-post{right:3%;top:3%;width:180px;height:180px;border-radius:24px;background:var(--mIvo);border:1px solid rgba(62,41,35,.08);padding:16px;overflow:hidden}
.sva-new-post::before{content:"";position:absolute;width:120px;height:120px;border-radius:50%;background:var(--mTer);right:-48px;top:-52px}
.sva-new-post small{font-family:Georgia,serif;color:var(--mEsp)}
.sva-new-post b{display:block;margin-top:40px;color:var(--mEsp);font-size:1.55rem;line-height:.9;letter-spacing:-.04em}
.sva-new-post em{position:absolute;right:12px;bottom:10px;font-size:2rem;font-style:normal}
.sva-new-story{left:2%;bottom:4%;width:118px;height:220px;border-radius:23px;background:var(--mEsp);color:white;padding:14px}
.sva-new-story .bar{width:30px;height:4px;border-radius:99px;background:var(--mTer)}
.sva-new-story i{font-style:normal;display:block;margin-top:18px;font-size:1.6rem}
.sva-new-story b{display:block;margin-top:50px;font-family:Georgia,serif;font-size:1rem;line-height:1.04}
.sva-new-bag{right:4%;bottom:4%;width:132px;height:197px;border-radius:13px;background:var(--mIvo);border:1px solid rgba(62,41,35,.09)}
.sva-new-bag .sva-msym{position:absolute;left:50%;top:46px;transform:translateX(-50%)}
.sva-new-bag b{position:absolute;top:104px;width:100%;text-align:center;font-family:Georgia,serif;color:var(--mEsp)}
.sva-new-bag b span{color:var(--mTer)}
.sva-new-menu{left:24%;bottom:3%;width:205px;height:125px;border-radius:18px;background:#fff;border:1px solid rgba(62,41,35,.09);padding:16px}
.sva-new-menu b{font-family:Georgia,serif;color:var(--mEsp)}
.sva-new-menu h4{font-family:Georgia,serif;color:var(--mEsp);margin:14px 0 5px}
.sva-new-menu p{margin:0;color:#75635b;font-size:.54rem;line-height:1.6}
.sva-miga-remate{padding:34px 34px 38px;border-top:1px solid var(--line2);display:grid;grid-template-columns:1fr 330px;gap:42px;align-items:end}
.sva-miga-remate h3{margin:0;color:var(--plum);font-size:clamp(2.25rem,4.4vw,4.8rem);line-height:.95;letter-spacing:-.05em}
.sva-miga-remate h3 span{color:var(--rasp)}
.sva-miga-remate p{margin:0;color:var(--muted);font-size:.9rem}

/* SERVICES */
.sva-routes{padding-top:135px;scroll-margin-top:80px}
.sva-routes-head{display:grid;grid-template-columns:1fr .65fr;gap:48px;align-items:end}
.sva-route-stack{margin-top:54px;border-top:1px solid var(--line)}
.sva-route{display:grid;grid-template-columns:82px 1fr 1fr auto;gap:26px;align-items:center;padding:32px 8px;border-bottom:1px solid var(--line);position:relative;overflow:hidden;transition:.22s}
.sva-route::before{content:"";position:absolute;inset:0;right:100%;background:linear-gradient(90deg,rgba(237,0,100,.055),transparent 68%);transition:.3s;z-index:-1}
.sva-route:hover{padding-left:17px}
.sva-route:hover::before{right:0}
.sva-rno{font-size:3.5rem;font-weight:950;letter-spacing:-.08em;color:rgba(75,17,63,.1)}
.sva-route h3{margin:0;color:var(--plum);font-size:clamp(1.6rem,2.7vw,2.7rem);line-height:1;letter-spacing:-.035em}
.sva-route p{margin:0;color:#5a5156;max-width:450px}
.sva-rgo{font-weight:900;color:var(--plum);white-space:nowrap}

/* DIFFERENCE */
.sva-difference{padding-top:140px;overflow:hidden}
.sva-diff-head{max-width:920px}
.sva-diff-grid{margin-top:54px;display:grid;grid-template-columns:1fr 110px 1fr;align-items:stretch}
.sva-diff-side{position:relative;min-height:540px;border:1px solid var(--line2);border-radius:34px;padding:34px;overflow:hidden}
.sva-diff-side.left{background:linear-gradient(160deg,#fff,#fbf8f6)}
.sva-diff-side.right{background:linear-gradient(150deg,#fff7fa,#fff)}
.sva-diff-kicker{font-size:.7rem;font-weight:900;text-transform:uppercase;letter-spacing:.09em;color:var(--rasp)}
.sva-diff-side h3{margin:10px 0 16px;color:var(--plum);font-size:clamp(2rem,3.5vw,3.5rem);line-height:.98;letter-spacing:-.04em}
.sva-logo-only{margin:38px auto 0;width:190px;height:190px;border-radius:32px;background:white;border:1px solid var(--line);box-shadow:var(--shadow);display:grid;place-items:center;position:relative}
.sva-logo-only b{font-size:1.9rem;color:var(--plum)}
.sva-logo-only::after{content:"Aquí está tu logo.";position:absolute;bottom:-37px;color:var(--muted);font-size:.79rem;font-weight:700}
.sva-questions{margin-top:65px;display:flex;flex-wrap:wrap;gap:9px}
.sva-q{padding:9px 11px;border-radius:999px;border:1px solid var(--line);background:white;color:#62585e;font-size:.72rem;font-weight:760}
.sva-diff-mid{display:grid;place-items:center;position:relative}
.sva-diff-mid::before{content:"";position:absolute;top:50px;bottom:50px;width:2px;background:linear-gradient(transparent,rgba(237,0,100,.32),transparent)}
.sva-diff-mid span{z-index:2;width:82px;height:82px;border-radius:50%;background:var(--plum);color:white;display:grid;place-items:center;text-align:center;font-size:.6rem;font-weight:900;text-transform:uppercase;letter-spacing:.06em;box-shadow:0 15px 34px rgba(75,17,63,.2)}
.sva-value-steps{margin-top:31px;display:grid;gap:14px}
.sva-vstep{display:grid;grid-template-columns:40px 1fr;gap:13px;align-items:start;padding:13px 0;border-bottom:1px solid var(--line2)}
.sva-vnum{width:32px;height:32px;border-radius:50%;background:var(--pink2);display:grid;place-items:center;color:var(--rasp);font-size:.7rem;font-weight:900}
.sva-vstep b{display:block;color:var(--plum);font-size:.95rem}
.sva-vstep p{margin:3px 0 0;color:var(--muted);font-size:.79rem}
.sva-diff-remate{margin-top:50px;display:grid;grid-template-columns:1fr 300px;gap:40px;align-items:end;border-top:1px solid var(--line);padding-top:28px}
.sva-diff-remate h3{margin:0;color:var(--plum);font-size:clamp(2.5rem,5vw,5.1rem);line-height:.94;letter-spacing:-.052em}
.sva-diff-remate h3 span{color:var(--rasp)}
.sva-diff-remate p{margin:0;color:var(--muted);font-size:.9rem}

/* USE CASES */
.sva-receive{padding-top:135px}
.sva-receive-head{display:grid;grid-template-columns:1fr .7fr;gap:48px;align-items:end}
.sva-receive-grid{margin-top:55px;display:grid;grid-template-columns:repeat(5,1fr);gap:14px}
.sva-receive-card{min-height:290px;padding:22px;border-radius:26px;border:1px solid var(--line2);background:white;position:relative;overflow:hidden;transition:.23s;box-shadow:0 14px 42px rgba(75,17,63,.035)}
.sva-receive-card:hover{transform:translateY(-5px);box-shadow:var(--shadow)}
.sva-receive-card:nth-child(2),.sva-receive-card:nth-child(4){margin-top:26px}
.sva-icon-demo{width:62px;height:62px;border-radius:20px;background:var(--pink2);display:grid;place-items:center;color:var(--plum);font-size:1.5rem;font-weight:900}
.sva-receive-card h3{margin:42px 0 9px;color:var(--plum);font-size:1.24rem}
.sva-receive-card p{margin:0;color:#5e555a;font-size:.84rem}
.sva-receive-card small{position:absolute;left:22px;bottom:18px;color:var(--rasp);font-size:.66rem;font-weight:900;text-transform:uppercase;letter-spacing:.08em}
.sva-receive-note{margin-top:33px;color:var(--muted);font-size:.82rem;text-align:center}

/* WORK */
.sva-work{padding-top:145px;scroll-margin-top:80px}
.sva-work-head{display:flex;justify-content:space-between;align-items:end;gap:40px}
.sva-case-list{display:grid;gap:96px;margin-top:60px}
.sva-case{display:grid;grid-template-columns:1.08fr .92fr;gap:56px;align-items:center}
.sva-case:nth-child(even){grid-template-columns:.92fr 1.08fr}
.sva-case:nth-child(even) .sva-case-visual{order:2}
.sva-case-visual{border-radius:34px;overflow:hidden;border:1px solid var(--line2);box-shadow:var(--shadow);background:white}
.sva-case-visual img{width:100%;aspect-ratio:4/3;object-fit:cover}
.sva-case-copy .ck{color:var(--rasp);font-size:.7rem;font-weight:900;text-transform:uppercase;letter-spacing:.09em}
.sva-case-copy h3{margin:10px 0 17px;color:var(--plum);font-size:clamp(2.25rem,3.8vw,4.1rem);line-height:.96;letter-spacing:-.045em}
.sva-case-flow{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin:24px 0 28px}
.sva-case-point{border-top:1px solid var(--line);padding-top:13px}
.sva-case-point b{display:block;color:var(--rasp);font-size:.65rem;text-transform:uppercase;letter-spacing:.08em;margin-bottom:5px}
.sva-case-point span{color:#534a50;font-size:.82rem}

/* PROCESS */
.sva-process{padding-top:140px;scroll-margin-top:80px}
.sva-process-grid{display:grid;grid-template-columns:.78fr 1.22fr;gap:70px;align-items:start}
.sva-process-left .lead{margin-bottom:28px}
.sva-risk-note{padding:20px 22px;border-radius:22px;background:var(--pink2);border:1px solid rgba(237,0,100,.08);color:var(--plum);font-weight:760;font-size:.9rem}
.sva-steps{border-top:1px solid var(--line)}
.sva-step{display:grid;grid-template-columns:70px 1fr;gap:22px;padding:28px 0;border-bottom:1px solid var(--line)}
.sva-step-no{font-size:2.9rem;line-height:.9;font-weight:950;letter-spacing:-.07em;color:rgba(75,17,63,.1)}
.sva-step h3{margin:0 0 7px;color:var(--plum);font-size:1.5rem}
.sva-step p{margin:0;color:#5d5459}

/* PEOPLE + SYMBOL STORY */
.sva-people{
  padding-top:145px;
  overflow:hidden;
  scroll-margin-top:80px;
  background:
    radial-gradient(circle at 95% 12%,rgba(237,0,100,.035),transparent 24rem),
    radial-gradient(circle at 4% 84%,rgba(75,17,63,.025),transparent 27rem),
    var(--bg);
}
.sva-people-top{display:grid;grid-template-columns:1.15fr .85fr;gap:60px;align-items:end}
.sva-people-stage{position:relative;margin-top:68px;min-height:790px}
.sva-people-line{position:absolute;left:14%;right:14%;top:15%;bottom:10%;z-index:1;pointer-events:none}
.sva-people-line svg{width:100%;height:100%;overflow:visible}
.sva-people-line path{fill:none;stroke:rgba(237,0,100,.40);stroke-width:2.15;stroke-linecap:round}
.sva-people-line circle{fill:var(--rasp)}
.sva-core{
  position:absolute;left:50%;top:47%;transform:translate(-50%,-50%);
  width:158px;height:158px;border-radius:50%;background:var(--plum);color:#fff;
  display:grid;place-items:center;text-align:center;font-size:.65rem;line-height:1.25;
  font-weight:900;text-transform:uppercase;letter-spacing:.09em;
  box-shadow:0 22px 58px rgba(75,17,63,.20);z-index:6
}
.sva-core::after{content:"";position:absolute;width:205px;height:205px;border-radius:50%;border:1px solid rgba(237,0,100,.16)}
.sva-person{position:absolute;display:grid;align-items:center;gap:28px}
.sva-person.s{left:0;top:0;width:58%;grid-template-columns:1.05fr .95fr}
.sva-person.v{right:0;bottom:0;width:49%;grid-template-columns:.92fr 1.08fr}
.sva-p-photo{position:relative;overflow:hidden;border-radius:34px;border:1px solid var(--line);background:#fff;box-shadow:var(--shadow)}
.sva-person.s .sva-p-photo{height:535px}
.sva-person.v .sva-p-photo{height:420px;order:2}
.sva-p-photo img{width:100%;height:100%;object-fit:cover;filter:none!important;mix-blend-mode:normal!important}
.sva-person.s .sva-p-photo img{object-position:center 22%}
.sva-person.v .sva-p-photo img{object-position:center 30%}
.sva-person-copy{position:relative;z-index:4}
.sva-p-name{color:var(--plum);font-size:clamp(2.65rem,4.65vw,4.95rem);font-weight:900;line-height:.9;letter-spacing:-.055em}
.sva-p-tag{margin-top:10px;color:var(--plum);font-size:clamp(1.3rem,2vw,1.95rem);font-weight:850;line-height:1.06;letter-spacing:-.03em}
.sva-p-role{margin-top:13px;color:var(--rasp);font-size:.72rem;font-weight:900;text-transform:uppercase;letter-spacing:.08em}
.sva-p-desc{margin-top:16px;color:#595056;font-size:.93rem;line-height:1.58;max-width:400px}
.sva-people-close{margin-top:80px;padding-top:34px;border-top:1px solid var(--line);display:grid;grid-template-columns:1fr 340px;gap:42px;align-items:end}
.sva-people-close h3{margin:0;color:var(--plum);font-size:clamp(2.6rem,4.95vw,5.15rem);line-height:.94;letter-spacing:-.052em}
.sva-people-close h3 span{color:var(--rasp)}
.sva-people-close p{margin:0;color:var(--muted);font-size:.94rem;line-height:1.55}

/* narrative bridge */
.sva-symbol-bridge{position:relative;padding:30px 0 72px;overflow:hidden}
.sva-symbol-bridge-inner{position:relative;min-height:300px;display:grid;place-items:center;text-align:center}
.sva-symbol-bridge-line{position:absolute;left:50%;top:0;width:2px;height:86px;transform:translateX(-50%);background:linear-gradient(var(--rasp),rgba(237,0,100,.06))}
.sva-symbol-bridge-dot{position:absolute;top:78px;left:50%;transform:translateX(-50%);width:10px;height:10px;border-radius:50%;background:var(--rasp)}
.sva-symbol-bridge-isotipo{position:absolute;width:320px;opacity:.035;left:50%;top:48%;transform:translate(-50%,-50%);pointer-events:none}
.sva-symbol-bridge-copy{position:relative;z-index:3;max-width:900px;margin-top:60px}
.sva-symbol-bridge-copy .small{color:var(--rasp);font-size:.73rem;font-weight:900;text-transform:uppercase;letter-spacing:.09em}
.sva-symbol-bridge-copy h2{margin:12px 0;color:var(--plum);font-size:clamp(2.6rem,4.7vw,4.9rem);line-height:.95;letter-spacing:-.052em}
.sva-symbol-bridge-copy p{margin:0 auto;color:var(--muted);max-width:610px;font-size:1rem;line-height:1.56}

/* interactive symbol */
.sva-symbol{padding-top:40px;background:radial-gradient(circle at 90% 7%,rgba(237,0,100,.035),transparent 24rem),var(--bg)}
.sva-symbol-top{display:grid;grid-template-columns:1.1fr .9fr;gap:60px;align-items:end}
.sva-symbol-story{margin-top:64px;position:relative;min-height:760px}
.sva-story-shell{position:sticky;top:90px;min-height:650px;border:1px solid rgba(75,17,63,.08);border-radius:38px;background:linear-gradient(145deg,#fff,#fffafc);box-shadow:0 18px 60px rgba(75,17,63,.055);overflow:hidden}
.sva-story-shell::before{content:"";position:absolute;width:330px;height:330px;border-radius:50%;background:rgba(237,0,100,.055);right:-160px;top:-150px}
.sva-story-shell::after{content:"";position:absolute;width:250px;height:250px;border-radius:50%;border:1px solid rgba(75,17,63,.07);left:-125px;bottom:-125px}
.sva-symbol-progress{position:absolute;left:34px;right:34px;top:26px;display:grid;grid-template-columns:repeat(3,1fr);gap:12px;z-index:8}
.sva-symbol-progress i{display:block;height:4px;border-radius:999px;background:rgba(75,17,63,.08);overflow:hidden}
.sva-symbol-progress i span{display:block;width:0;height:100%;background:var(--rasp);transition:width .35s ease}
.sva-symbol-stage{position:absolute;inset:76px 40px 34px;display:grid;grid-template-columns:.95fr 1.05fr;gap:50px;align-items:center;z-index:2}
.sva-symbol-copy{position:relative;z-index:4}
.sva-symbol-kicker{color:var(--rasp);font-size:.72rem;font-weight:900;text-transform:uppercase;letter-spacing:.09em}
.sva-symbol-title{margin:10px 0 14px;color:var(--plum);font-size:clamp(2.6rem,4.55vw,4.95rem);line-height:.94;letter-spacing:-.052em}
.sva-symbol-text{color:#5a5156;max-width:470px;font-size:1.02rem;line-height:1.58}
.sva-symbol-number{position:absolute;right:2%;top:-50px;font-size:10rem;line-height:1;font-weight:950;letter-spacing:-.08em;color:rgba(75,17,63,.035);z-index:-1}
.sva-symbol-side{min-height:520px;display:grid;place-items:center;position:relative}
.sva-symbol-canvas{position:relative;width:min(540px,90%);aspect-ratio:1/1}
.sva-symbol-logo-full{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;opacity:.045}
.sva-symbol-module{position:absolute;bottom:17%;background:var(--rasp);box-shadow:0 20px 55px rgba(237,0,100,.16);opacity:0;transform:translateY(30px) scale(.92);transition:opacity .45s ease,transform .55s cubic-bezier(.2,.7,.2,1)}
.sva-symbol-module.show{opacity:1}
.sva-symbol-module.m1{left:13%;width:18%;height:29%;border-radius:42% 48% 46% 38% / 25% 30% 64% 62%;transform:translateY(30px) scale(.92) rotate(-8deg)}
.sva-symbol-module.m1.show{transform:translateY(0) scale(1) rotate(-8deg)}
.sva-symbol-module.m2{left:36%;width:24%;height:52%;border-radius:48% 44% 49% 36% / 17% 23% 70% 69%;transform:translateY(30px) scale(.92) rotate(-5deg)}
.sva-symbol-module.m2.show{transform:translateY(0) scale(1) rotate(-5deg)}
.sva-symbol-module.m3{right:9%;width:30%;height:73%;border-radius:52% 43% 49% 33% / 15% 24% 72% 69%;transform:translateY(30px) scale(.92) rotate(-2deg)}
.sva-symbol-module.m3.show{transform:translateY(0) scale(1) rotate(-2deg)}
.sva-symbol-node-line{position:absolute;left:7%;right:7%;bottom:10%;height:2px;background:linear-gradient(90deg,transparent,rgba(237,0,100,.34),transparent)}
.sva-symbol-node{position:absolute;bottom:calc(10% - 4px);width:9px;height:9px;border-radius:50%;background:var(--rasp);opacity:.35}
.sva-symbol-node.n1{left:21%}.sva-symbol-node.n2{left:48%}.sva-symbol-node.n3{right:22%}
.sva-symbol-controls{display:flex;gap:10px;margin-top:22px;flex-wrap:wrap}
.sva-symbol-controls button{border:1px solid var(--line);background:#fff;color:var(--plum);padding:10px 13px;border-radius:999px;font-weight:850;cursor:pointer;transition:.18s ease}
.sva-symbol-controls button:hover{border-color:rgba(237,0,100,.3)}
.sva-symbol-controls button.active{background:var(--plum);color:#fff;border-color:var(--plum)}
.sva-symbol-hint{position:absolute;right:26px;bottom:24px;padding:8px 11px;border-radius:999px;background:rgba(255,255,255,.88);border:1px solid var(--line);color:var(--muted);font-size:.7rem;font-weight:780;backdrop-filter:blur(10px)}
.sva-symbol-close{margin-top:72px;padding-top:36px;border-top:1px solid var(--line)}
.sva-symbol-close-main{display:grid;grid-template-columns:1fr 340px;gap:42px;align-items:end}
.sva-symbol-close h2{margin:0;color:var(--plum);font-size:clamp(2.6rem,5vw,5.2rem);line-height:.94;letter-spacing:-.052em}
.sva-symbol-close h2 span{color:var(--rasp)}
.sva-symbol-close p{margin:0;color:var(--muted);font-size:.94rem;line-height:1.55}
.sva-contact-bridge{margin-top:62px;padding:42px 44px;border-radius:32px;background:var(--plum);color:#fff;display:flex;align-items:center;justify-content:space-between;gap:36px;position:relative;overflow:hidden}
.sva-contact-bridge::before{content:"";position:absolute;width:230px;height:230px;border-radius:50%;background:rgba(237,0,100,.28);right:-95px;top:-130px}
.sva-contact-bridge::after{content:"";position:absolute;width:150px;height:150px;border-radius:50%;border:1px solid rgba(255,255,255,.12);left:-70px;bottom:-80px}
.sva-contact-bridge-copy{position:relative;z-index:2}
.sva-contact-bridge small{display:block;color:#ffc0d8;font-size:.72rem;font-weight:900;text-transform:uppercase;letter-spacing:.09em;margin-bottom:8px}
.sva-contact-bridge h3{margin:0;max-width:760px;font-size:clamp(2rem,3.7vw,3.9rem);line-height:.96;letter-spacing:-.045em}
.sva-contact-bridge .cta{position:relative;z-index:2;display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;padding:14px 20px;border-radius:999px;background:#fff;color:var(--plum);font-weight:900;box-shadow:0 14px 34px rgba(0,0,0,.12)}

/* CONTACT FORM */
.sva-contact{padding-top:140px;scroll-margin-top:80px}
.sva-contact-shell{display:grid;grid-template-columns:.82fr 1.18fr;gap:60px;align-items:start;padding:54px;border-radius:42px;border:1px solid var(--line2);background:linear-gradient(145deg,#fff,#fbf7f9);position:relative;overflow:visible}
.sva-contact-shell::before{content:"";position:absolute;width:300px;height:300px;border-radius:50%;background:rgba(237,0,100,.065);left:-145px;bottom:-145px}
.sva-contact-left{position:sticky;top:110px;z-index:2}
.sva-contact-left h2{margin:14px 0 18px;color:var(--plum);font-size:clamp(3rem,5.3vw,5.7rem);line-height:.93;letter-spacing:-.055em}
.sva-contact-left p{color:#5a5156;font-size:1.03rem;max-width:500px}
.sva-contact-left .micro{display:flex;gap:10px;align-items:center;margin-top:22px;color:var(--muted);font-size:.84rem;font-weight:730}
.sva-contact-left .micro::before{content:"";width:36px;height:2px;background:var(--rasp)}
.sva-form{position:relative;z-index:4;background:white;border:1px solid var(--line);border-radius:28px;padding:27px;box-shadow:var(--shadow);display:grid;gap:23px}
.sva-field{display:grid;gap:9px}
.sva-label{display:flex;gap:8px;align-items:baseline;color:var(--plum);font-weight:900;font-size:.94rem}
.sva-num{color:var(--rasp);font-size:.72rem;font-weight:950}
.sva-helper{color:var(--muted);font-size:.74rem}
.sva-form input[type=text],.sva-form input[type=email],.sva-form input[type=tel],.sva-form input[type=url],.sva-form textarea{
  width:100%;padding:13px 14px;border:1px solid rgba(75,17,63,.14);border-radius:14px;background:#fff;color:var(--ink);outline:none
}
.sva-form textarea{min-height:78px;resize:vertical}
.sva-form input:focus,.sva-form textarea:focus{border-color:var(--rasp);box-shadow:0 0 0 4px rgba(237,0,100,.06)}
.multi-select{position:relative}
.multi-select-trigger{
  width:100%;min-height:55px;border:1px solid rgba(75,17,63,.14);border-radius:14px;background:#fff;
  padding:13px 14px;display:flex;align-items:center;justify-content:space-between;gap:18px;
  color:var(--plum);font-weight:800;text-align:left;cursor:pointer;transition:.18s
}
.multi-select-trigger:hover,.multi-select-trigger-open{border-color:rgba(237,0,100,.38);box-shadow:0 0 0 4px rgba(237,0,100,.05)}
.multi-select-placeholder{color:#81777d;font-weight:500}
.multi-select-arrow{transition:.2s}
.multi-select-arrow-open{transform:rotate(180deg)}
.multi-select-menu{
  position:absolute;z-index:50;top:calc(100% + 8px);left:0;right:0;max-height:340px;overflow-y:auto;
  background:#fff;border:1px solid var(--line);border-radius:18px;padding:8px;box-shadow:0 22px 60px rgba(75,17,63,.14)
}
.multi-select-option{display:flex;align-items:flex-start;gap:12px;padding:11px 12px;border-radius:12px;cursor:pointer}
.multi-select-option:hover{background:#fff7fa}
.multi-select-option-selected{background:var(--pink2)}
.multi-select-option input{position:absolute;opacity:0;pointer-events:none}
.multi-select-check{width:20px;height:20px;flex:0 0 20px;border:1.5px solid rgba(75,17,63,.28);border-radius:6px;display:grid;place-items:center;color:white;font-size:.75rem;font-weight:950}
.multi-select-option-selected .multi-select-check{background:var(--rasp);border-color:var(--rasp)}
.multi-select-option-copy strong{display:block;color:var(--plum);font-size:.84rem;line-height:1.25}
.multi-select-option-copy span{display:block;margin-top:3px;color:var(--muted);font-size:.7rem;line-height:1.3}
.multi-select-selected{display:flex;flex-wrap:wrap;gap:7px;margin-top:7px}
.multi-select-chip{display:inline-flex;align-items:center;gap:7px;padding:6px 9px;border-radius:999px;background:var(--pink2);color:var(--plum);font-size:.68rem;font-weight:800}
.multi-select-chip button{border:0;background:none;color:var(--rasp);font-size:1rem;line-height:1;cursor:pointer;padding:0}
.sva-contact-pills{display:flex;gap:9px;flex-wrap:wrap}
.sva-contact-pill{position:relative}
.sva-contact-pill input{position:absolute;opacity:0}
.sva-contact-pill label{display:flex;align-items:center;gap:7px;padding:9px 13px;border:1px solid var(--line);border-radius:999px;cursor:pointer;font-weight:820;color:#51484e}
.sva-contact-pill input:checked+label{background:var(--plum);border-color:var(--plum);color:white}
.sva-submit{margin-top:2px;display:flex;align-items:center;justify-content:space-between;gap:16px}
.sva-submit p{margin:0;color:var(--muted);font-size:.71rem;max-width:270px}
.form-note{padding:12px 14px;border-radius:14px;font-size:.8rem;font-weight:750}
.form-note.success{background:#effaf4;color:#17613b;border:1px solid #cfeedd}
.form-note.error{background:#fff2f2;color:#8c2d2d;border:1px solid #f1caca}

/* DIRECT */
.sva-direct{padding:100px 0 120px}
.sva-direct-head{display:grid;grid-template-columns:1fr .7fr;gap:48px;align-items:end;margin-bottom:35px}
.sva-direct-grid{border-top:1px solid var(--line)}
.sva-direct-row{display:grid;grid-template-columns:64px 1fr auto;gap:22px;align-items:center;padding:22px 0;border-bottom:1px solid var(--line);transition:.2s}
.sva-direct-row:hover{padding-left:9px;background:linear-gradient(90deg,rgba(237,0,100,.035),transparent)}
.sva-social-icon{width:52px;height:52px;border-radius:50%;display:grid;place-items:center;background:var(--pink2);color:var(--plum);font-weight:950}
.sva-direct-row h3{margin:0;color:var(--plum);font-size:1.25rem}
.sva-direct-row p{margin:3px 0 0;color:var(--muted);font-size:.85rem}
.sva-go{color:var(--plum);font-weight:900}

/* FINAL + FOOTER */
.sva-final{padding:110px 0 90px;text-align:center;position:relative;overflow:hidden}
.sva-final img{width:min(500px,67vw);margin:0 auto -24px;opacity:.035}
.sva-final h2{margin:0;position:relative;z-index:2;color:var(--plum);font-size:clamp(3rem,6vw,6.2rem);line-height:.93;letter-spacing:-.058em}
.sva-final h2 span{color:var(--rasp)}
.sva-footer-wrap{padding:34px 0 40px;border-top:1px solid var(--line)}
.sva-footer{display:grid;grid-template-columns:1fr 2fr;gap:45px}
.sva-footer img{width:205px}
.sva-footer p{color:var(--muted);font-size:.8rem;max-width:330px}
.sva-fcols{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
.sva-fcols b{display:block;color:var(--plum);font-size:.81rem;margin-bottom:9px}
.sva-fcols a{display:block;color:#655b61;font-size:.8rem;margin:7px 0}
.sva-mobile-cta{display:none;position:fixed;left:14px;right:14px;bottom:14px;z-index:120}
.sva-mobile-cta .btn{width:100%}

@media(max-width:1040px){
  .sva-navlinks{display:none}
  .sva-menu{display:block}
  .sva-hero-grid,.sva-miga-head,.sva-routes-head,.sva-receive-head,.sva-process-grid,.sva-people-top,.sva-symbol-top,.sva-contact-shell,.sva-direct-head{grid-template-columns:1fr}
  .sva-hero-art{min-height:560px}
  .sva-compare,.sva-diff-grid{grid-template-columns:1fr;gap:16px}
  .sva-demo-mid,.sva-diff-mid{height:95px}
  .sva-demo-mid::before,.sva-diff-mid::before{display:none}
  .sva-order,.sva-diff-mid span{transform:rotate(90deg)}
  .sva-route{grid-template-columns:70px 1fr auto}
  .sva-route p{grid-column:2/3}
  .sva-receive-grid{grid-template-columns:repeat(2,1fr)}
  .sva-receive-card:nth-child(2),.sva-receive-card:nth-child(4){margin-top:0}
  .sva-case,.sva-case:nth-child(even){grid-template-columns:1fr}
  .sva-case:nth-child(even) .sva-case-visual{order:0}
  .sva-people-stage{min-height:auto;display:grid;gap:55px}
  .sva-person{position:relative!important;width:100%!important;left:auto!important;right:auto!important;top:auto!important;bottom:auto!important}
  .sva-person.s,.sva-person.v{grid-template-columns:1fr 1fr}
  .sva-people-line,.sva-core{display:none}
  .sva-story-shell{position:relative;top:auto;min-height:760px}
  .sva-symbol-story{min-height:auto}
  .sva-symbol-stage{grid-template-columns:1fr;gap:10px}
  .sva-symbol-side{min-height:390px}
  .sva-contact-left{position:relative;top:auto}
  .sva-footer{grid-template-columns:1fr}
  .sva-mobile-cta{display:block}
  body{padding-bottom:76px}
}
@media(max-width:700px){
  .container{width:min(var(--max),calc(100% - 26px))}
  .section{padding:88px 0}
  .sva-brand img{width:184px}
  .sva-hero{min-height:auto;padding-top:38px}
  .sva-hero h1{font-size:clamp(3rem,14vw,4.75rem)}
  .sva-hero-art{min-height:455px}
  .sva-hero-photo{inset:10px 4px 0 32px}
  .sva-hero-blob{width:145px;height:145px;right:-32px;top:55px}
  .sva-hero-isotipo{width:170px;right:-25px}
  .sva-hero-ring{width:115px;height:115px;left:0;bottom:38px}
  .sva-thought{font-size:.68rem;padding:8px 10px}
  .sva-t1{left:-2px;top:12%}
  .sva-t2{right:-3px;top:30%}
  .sva-t3{right:0;bottom:2%;max-width:235px}
  .sva-miga-top{align-items:flex-start;flex-direction:column}
  .sva-miga-note{text-align:left}
  .sva-demo-side{min-height:540px}
  .sva-demo-canvas{inset:76px 10px 20px}
  .sva-miga-remate,.sva-diff-remate,.sva-people-close,.sva-symbol-close-main{grid-template-columns:1fr}
  .sva-route{grid-template-columns:55px 1fr;padding:25px 0}
  .sva-route p,.sva-rgo{grid-column:2}
  .sva-rno{font-size:2.6rem}
  .sva-diff-side{min-height:510px;padding:24px}
  .sva-receive-grid{grid-template-columns:1fr}
  .sva-receive-card{min-height:240px}
  .sva-work-head{align-items:flex-start;flex-direction:column}
  .sva-case-flow{grid-template-columns:1fr}
  .sva-person.s,.sva-person.v{grid-template-columns:1fr}
  .sva-person.s .sva-p-photo,.sva-person.v .sva-p-photo{height:470px}
  .sva-person.v .sva-p-photo{order:0}
  .sva-symbol-bridge{padding-bottom:44px}
  .sva-symbol-bridge-inner{min-height:250px}
  .sva-symbol-bridge-copy h2{font-size:clamp(2.5rem,11.5vw,4rem)}
  .sva-story-shell{min-height:770px;border-radius:28px}
  .sva-symbol-progress{left:20px;right:20px}
  .sva-symbol-stage{inset:72px 18px 24px}
  .sva-symbol-title{font-size:clamp(2.5rem,12vw,4rem)}
  .sva-symbol-number{font-size:7rem;top:-24px}
  .sva-symbol-side{min-height:350px}
  .sva-contact-bridge{padding:30px 24px;align-items:flex-start;flex-direction:column}
  .sva-contact-bridge .cta{width:100%}
  .sva-contact-shell{padding:30px 18px;border-radius:28px}
  .sva-submit{align-items:flex-start;flex-direction:column}
  .sva-fcols{grid-template-columns:1fr 1fr}
}
`;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="sva-header">
        <div className="container sva-nav">
          <a className="sva-brand" href="#inicio" onClick={closeMenu}>
            <img src={logo} alt="Sofía en Voz Alta" />
          </a>

          <nav className="sva-navlinks">
            <a href="#servicios">Servicios</a>
            <a href="#trabajos">Trabajos</a>
            <a href="#como">Cómo trabajamos</a>
            <a href="#contacto">Contacto</a>
            <a className="btn btn-primary" href="#contacto">
              Muéstrame tu marca
            </a>
          </nav>

          <button
            type="button"
            className="sva-menu"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? '×' : '☰'}
          </button>
        </div>
      </header>

      <div className={`sva-mobile ${menuOpen ? 'open' : ''}`}>
        <a href="#servicios" onClick={closeMenu}>Servicios</a>
        <a href="#trabajos" onClick={closeMenu}>Trabajos</a>
        <a href="#como" onClick={closeMenu}>Cómo trabajamos</a>
        <a href="#contacto" onClick={closeMenu}>Contacto</a>
      </div>
    </>
  );
}

function MultiSelectDropdown({
  label,
  options,
  selectedValues,
  onToggle,
  placeholder,
}) {
  const [open, setOpen] = useState(false);

  const selectedText =
    selectedValues.length === 0
      ? placeholder
      : selectedValues.length === 1
        ? selectedValues[0]
        : `${selectedValues.length} opciones seleccionadas`;

  return (
    <div className="multi-select">
      <button
        type="button"
        className={`multi-select-trigger ${open ? 'multi-select-trigger-open' : ''}`}
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <span className={selectedValues.length === 0 ? 'multi-select-placeholder' : ''}>
          {selectedText}
        </span>
        <span className={`multi-select-arrow ${open ? 'multi-select-arrow-open' : ''}`}>
          ▾
        </span>
      </button>

      {open && (
        <div className="multi-select-menu">
          {options.map((option, index) => {
            const id = `${label}-${index}`;
            const checked = selectedValues.includes(option.value);

            return (
              <label
                key={option.value}
                className={`multi-select-option ${checked ? 'multi-select-option-selected' : ''}`}
                htmlFor={id}
              >
                <input
                  id={id}
                  type="checkbox"
                  checked={checked}
                  onChange={() => onToggle(option.value)}
                />
                <span className="multi-select-check">{checked ? '✓' : ''}</span>
                <span className="multi-select-option-copy">
                  <strong>{option.title}</strong>
                  <span>{option.description}</span>
                </span>
              </label>
            );
          })}
        </div>
      )}

      {selectedValues.length > 0 && (
        <div className="multi-select-selected">
          {selectedValues.map((value) => (
            <span className="multi-select-chip" key={value}>
              {value}
              <button type="button" onClick={() => onToggle(value)} aria-label={`Quitar ${value}`}>
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function ContactForm() {
  const HELP_OPTIONS = [
    {
      value: 'Crear mi logo desde cero',
      title: 'Crear mi logo desde cero',
      description: 'Estoy empezando y necesito una base clara.',
    },
    {
      value: 'Mejorar o rediseñar mi logo actual',
      title: 'Mejorar o rediseñar mi logo actual',
      description: 'Ya tengo algo, pero siento que puede funcionar mejor.',
    },
    {
      value: 'Organizar toda la identidad de mi marca',
      title: 'Organizar toda la identidad de mi marca',
      description: 'Quiero que logo, colores y piezas empiecen a sentirse conectados.',
    },
    {
      value: 'No estoy seguro todavía',
      title: 'No estoy seguro todavía',
      description: 'Está bien. Lo revisamos contigo.',
    },
  ];

  const PROBLEM_OPTIONS = [
    {
      value: 'Estoy empezando',
      title: 'Estoy empezando',
      description: 'Todavía no tengo una marca clara.',
    },
    {
      value: 'Mi logo ya no me representa',
      title: 'Mi logo ya no me representa',
      description: 'Existe, pero no se siente como mi negocio hoy.',
    },
    {
      value: 'Cada pieza parece de un negocio distinto',
      title: 'Cada pieza parece de un negocio distinto',
      description: 'Tengo logo, colores y publicaciones, pero nada se conecta.',
    },
    {
      value: 'Mi negocio creció y la imagen se quedó atrás',
      title: 'Mi negocio creció y la imagen se quedó atrás',
      description: 'Siento que visualmente sigo en la etapa del comienzo.',
    },
    {
      value: 'Mi negocio se ve menos profesional de lo que es',
      title: 'Mi negocio se ve menos profesional de lo que es',
      description: 'Lo que mostramos no está a la altura del trabajo que hacemos.',
    },
    {
      value: 'Es otra cosa',
      title: 'Es otra cosa',
      description: 'Cuéntanos brevemente qué pasa.',
    },
  ];

  const [formData, setFormData] = useState({
    nombre: '',
    negocio: '',
    ayudas: [],
    problemas: [],
    otroProblema: '',
    enlaceMarca: '',
    canal: 'correo',
    whatsapp: '',
    correo: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSubmitted(false);
    setErrorMessage('');

    if (name === 'canal') {
      setFormData((current) => ({
        ...current,
        canal: value,
        whatsapp: value === 'whatsapp' ? current.whatsapp : '',
        correo: value === 'correo' ? current.correo : '',
      }));
      return;
    }

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleCheckbox = (group, value) => {
    setSubmitted(false);
    setErrorMessage('');

    setFormData((current) => {
      const selected = current[group];
      const exists = selected.includes(value);
      const nextValues = exists
        ? selected.filter((item) => item !== value)
        : [...selected, value];

      return {
        ...current,
        [group]: nextValues,
        otroProblema:
          group === 'problemas' && value === 'Es otra cosa' && exists
            ? ''
            : current.otroProblema,
      };
    });
  };

  const validateForm = () => {
    if (!formData.nombre.trim()) return 'Cuéntanos cómo te llamas.';
    if (!formData.negocio.trim()) return 'Cuéntanos cómo se llama tu negocio y qué hace.';
    if (formData.ayudas.length === 0) return 'Selecciona al menos una opción sobre cómo podemos ayudarte.';
    if (formData.problemas.length === 0) return 'Selecciona al menos una opción sobre lo que está pasando con tu marca.';
    if (formData.problemas.includes('Es otra cosa') && !formData.otroProblema.trim()) {
      return 'Cuéntanos brevemente qué está pasando.';
    }
    if (formData.canal === 'whatsapp' && !formData.whatsapp.trim()) {
      return 'Escribe tu número de WhatsApp.';
    }
    if (formData.canal === 'correo' && !formData.correo.trim()) {
      return 'Escribe tu correo electrónico.';
    }
    return '';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationMessage = validateForm();
    if (validationMessage) {
      setErrorMessage(validationMessage);
      return;
    }

    setSubmitting(true);
    setSubmitted(false);
    setErrorMessage('');

    const request = {
      nombre: formData.nombre.trim(),
      negocio: formData.negocio.trim(),
      ayudas: formData.ayudas,
      problemas: formData.problemas,
      otroProblema: formData.problemas.includes('Es otra cosa')
        ? formData.otroProblema.trim()
        : null,
      enlaceMarca: formData.enlaceMarca.trim() || null,
      canal: formData.canal,
      whatsapp: formData.canal === 'whatsapp' ? formData.whatsapp.trim() : null,
      correo: formData.canal === 'correo' ? formData.correo.trim() : null,
    };

    try {
      const API_URL =
        import.meta.env.VITE_API_URL ||
        'https://sofiaenvozalta.onrender.com';

      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      let result = null;
      try {
        result = await response.json();
      } catch {
        result = null;
      }

      if (!response.ok) {
        let message = result?.message || 'No fue posible enviar tu solicitud.';

        if (result?.errors) {
          const validationMessages = Object.values(result.errors).flat().join(' ');
          if (validationMessages) message = validationMessages;
        }

        throw new Error(message);
      }

      setSubmitted(true);
      setFormData({
        nombre: '',
        negocio: '',
        ayudas: [],
        problemas: [],
        otroProblema: '',
        enlaceMarca: '',
        canal: 'correo',
        whatsapp: '',
        correo: '',
      });
    } catch (error) {
      setErrorMessage(
        error.message ||
        'No fue posible enviar tu solicitud. Inténtalo nuevamente.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="sva-form" onSubmit={handleSubmit}>
      <div className="sva-field">
        <label className="sva-label" htmlFor="nombre">
          <span className="sva-num">01</span>
          ¿Cómo te llamas?
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Ej: Laura Martínez"
          required
        />
      </div>

      <div className="sva-field">
        <label className="sva-label" htmlFor="negocio">
          <span className="sva-num">02</span>
          ¿Cómo se llama tu negocio y qué hace?
        </label>
        <textarea
          id="negocio"
          name="negocio"
          value={formData.negocio}
          onChange={handleChange}
          placeholder="Ej: Miga. Somos una panadería y café en Neiva."
          required
        />
      </div>

      <div className="sva-field">
        <div className="sva-label">
          <span className="sva-num">03</span>
          ¿En qué te gustaría que te ayudemos?
        </div>
        <div className="sva-helper">Puedes seleccionar más de una opción.</div>

        <MultiSelectDropdown
          label="help"
          options={HELP_OPTIONS}
          selectedValues={formData.ayudas}
          onToggle={(value) => handleCheckbox('ayudas', value)}
          placeholder="Selecciona una o varias opciones"
        />
      </div>

      <div className="sva-field">
        <div className="sva-label">
          <span className="sva-num">04</span>
          ¿Qué está pasando con tu marca hoy?
        </div>
        <div className="sva-helper">Puedes seleccionar más de una situación.</div>

        <MultiSelectDropdown
          label="problem"
          options={PROBLEM_OPTIONS}
          selectedValues={formData.problemas}
          onToggle={(value) => handleCheckbox('problemas', value)}
          placeholder="Selecciona una o varias situaciones"
        />

        {formData.problemas.includes('Es otra cosa') && (
          <textarea
            name="otroProblema"
            value={formData.otroProblema}
            onChange={handleChange}
            placeholder="Cuéntanos brevemente qué está pasando."
            required
          />
        )}
      </div>

      <div className="sva-field">
        <label className="sva-label" htmlFor="enlaceMarca">
          ¿Quieres mostrarnos tu marca antes de hablar?
          <span style={{ fontSize: '.7rem', color: 'var(--muted)' }}>Opcional</span>
        </label>
        <input
          id="enlaceMarca"
          name="enlaceMarca"
          type="url"
          value={formData.enlaceMarca}
          onChange={handleChange}
          placeholder="Instagram, página web o enlace"
        />
      </div>

      <div className="sva-field">
        <div className="sva-label">¿Dónde prefieres que te contactemos?</div>

        <div className="sva-contact-pills">
          <div className="sva-contact-pill">
            <input
              id="contact-whatsapp"
              type="radio"
              name="canal"
              value="whatsapp"
              checked={formData.canal === 'whatsapp'}
              onChange={handleChange}
            />
            <label htmlFor="contact-whatsapp">WhatsApp</label>
          </div>

          <div className="sva-contact-pill">
            <input
              id="contact-correo"
              type="radio"
              name="canal"
              value="correo"
              checked={formData.canal === 'correo'}
              onChange={handleChange}
            />
            <label htmlFor="contact-correo">Correo</label>
          </div>
        </div>

        {formData.canal === 'whatsapp' && (
          <input
            name="whatsapp"
            type="tel"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="Ej: +57 300 123 4567"
            required
          />
        )}

        {formData.canal === 'correo' && (
          <input
            name="correo"
            type="email"
            value={formData.correo}
            onChange={handleChange}
            placeholder="Ej: hola@minegocio.com"
            required
          />
        )}
      </div>

      <div className="sva-submit">
        <button className="btn btn-primary" type="submit" disabled={submitting}>
          {submitting ? 'Enviando...' : 'Quiero que revisen mi marca →'}
        </button>

        <p>
          Revisaremos lo que nos envíes y te contactaremos por el medio que elegiste.
        </p>
      </div>

      {submitted && (
        <div className="form-note success">
          ¡Listo! Recibimos tu solicitud. Te responderemos lo antes posible.
        </div>
      )}

      {errorMessage && (
        <div className="form-note error">
          {errorMessage}
        </div>
      )}
    </form>
  );
}

function MigaSection() {
  return (
    <section className="section sva-miga">
      <div className="container">
        <div className="sva-miga-head reveal">
          <div>
            <span className="eyebrow">Cuando cada cosa va por su lado</span>
            <h2 className="display">
              Cada pieza puede verse bonita.
              <br />
              Y aun así parecer de un negocio diferente.
            </h2>
          </div>
          <p className="lead">
            Mira el mismo negocio antes y después de dejar de resolver cada pieza por separado.
          </p>
        </div>

        <div className="sva-miga-show reveal">
          <div className="sva-miga-top">
            <div className="sva-miga-brand">
              <strong>MIGA</strong>
              <span>Panadería &amp; Café</span>
            </div>
            <div className="sva-miga-note">
              Mismo negocio. Mismas necesidades. Lo único que cambia es cómo se presenta.
            </div>
          </div>

          <div className="sva-compare">
            <div className="sva-demo-side">
              <span className="sva-demo-label">Antes</span>
              <div className="sva-demo-caption">
                Cada pieza podía verse bien sola. Juntas no parecían la misma marca.
              </div>

              <div className="sva-demo-canvas">
                <div className="sva-old-logo">
                  <div>
                    <b>Miga</b>
                    <small>Panadería artesanal</small>
                  </div>
                </div>
                <div className="sva-old-post">
                  <small>MIGA PAN</small>
                  <b>2x1<br />EN CROISSANTS</b>
                </div>
                <div className="sva-old-story">
                  <i>🤎</i>
                  <b>HOY HAY<br />PAN DE<br />CHOCOLATE</b>
                </div>
                <div className="sva-old-bag">
                  <span>☕</span>
                  <b>MIGA CAFÉ</b>
                </div>
                <div className="sva-old-menu">
                  <em>Miga Café</em>
                  <h4>MENÚ</h4>
                  <p>
                    Croissant ........ $<br />
                    Latte ................. $<br />
                    Pan chocolate ... $
                  </p>
                </div>
              </div>
            </div>

            <div className="sva-demo-mid">
              <div className="sva-order">
                <div>
                  <b>Ponemos<br />orden</b>
                  <span>→</span>
                </div>
              </div>
            </div>

            <div className="sva-demo-side after">
              <span className="sva-demo-label">Después</span>
              <div className="sva-demo-caption">Distintas piezas. La misma marca.</div>

              <div className="sva-demo-canvas">
                <div className="sva-new-logo">
                  <div className="sva-mmark">
                    <div className="sva-msym" />
                    <div className="sva-mword">miga<span>.</span></div>
                  </div>
                  <small>Panadería &amp; Café · hecho todos los días</small>
                </div>
                <div className="sva-new-post">
                  <small>miga.</small>
                  <b>2x1 en<br />croissants.</b>
                  <em>🥐</em>
                </div>
                <div className="sva-new-story">
                  <div className="bar" />
                  <i>🍫</i>
                  <b>Hoy hay<br />pan de<br />chocolate.</b>
                </div>
                <div className="sva-new-bag">
                  <div className="sva-msym" />
                  <b>miga<span>.</span></b>
                </div>
                <div className="sva-new-menu">
                  <b>miga.</b>
                  <h4>Menú del día</h4>
                  <p>
                    Croissant ........ $<br />
                    Latte ................. $<br />
                    Pan chocolate ... $
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="sva-miga-remate">
            <h3>
              No se trata de hacer todo igual.
              <br />
              <span>Se trata de que todo se sienta tuyo.</span>
            </h3>
            <p>
              Una story puede verse distinta a un empaque. Lo importante es que ambos sigan pareciendo del mismo negocio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="servicios" className="section sva-routes">
      <div className="container">
        <div className="sva-routes-head reveal">
          <div>
            <span className="eyebrow">¿Qué necesitas?</span>
            <h2 className="display">No tienes que saber cómo se llama el servicio.</h2>
          </div>
          <p className="lead">
            Elige la frase que más se parece a lo que dirías tú. Nosotros hacemos el diagnóstico después.
          </p>
        </div>

        <div className="sva-route-stack reveal">
          <a className="sva-route" href="#contacto">
            <div className="sva-rno">01</div>
            <h3>Necesito un logo.</h3>
            <p>Estoy empezando y no sé todavía cómo debería verse mi negocio.</p>
            <div className="sva-rgo">Diseño de logo →</div>
          </a>

          <a className="sva-route" href="#contacto">
            <div className="sva-rno">02</div>
            <h3>Ya tengo uno, pero quiero algo mejor.</h3>
            <p>Mi logo no me representa, se quedó atrás o simplemente siento que ya no funciona.</p>
            <div className="sva-rgo">Rediseño de logo →</div>
          </a>

          <a className="sva-route" href="#contacto">
            <div className="sva-rno">03</div>
            <h3>Tengo logo, pero todo lo demás es un enredo.</h3>
            <p>Colores, publicaciones y piezas cambian cada vez y no sé qué debería usar.</p>
            <div className="sva-rgo">Identidad de marca →</div>
          </a>
        </div>
      </div>
    </section>
  );
}

function DifferenceSection() {
  return (
    <section className="section sva-difference">
      <div className="container">
        <div className="sva-diff-head reveal">
          <span className="eyebrow">No es solo hacer el dibujo</span>
          <h2 className="display">
            Un logo puede verse bonito y todavía dejarte con las mismas preguntas.
          </h2>
          <p className="lead">
            El cambio no es tener “más diseño”. Es saber qué hacer después sin volver a empezar de cero.
          </p>
        </div>

        <div className="sva-diff-grid reveal">
          <div className="sva-diff-side left">
            <div className="sva-diff-kicker">Resolver solo el logo</div>
            <h3>“Aquí está tu logo.”</h3>
            <div className="sva-logo-only"><b>LOGO</b></div>
            <div className="sva-questions">
              <span className="sva-q">¿qué color uso?</span>
              <span className="sva-q">¿qué letra?</span>
              <span className="sva-q">¿cuál versión mando?</span>
              <span className="sva-q">¿funciona pequeño?</span>
              <span className="sva-q">¿cómo lo publico?</span>
            </div>
          </div>

          <div className="sva-diff-mid">
            <span>La diferencia</span>
          </div>

          <div className="sva-diff-side right">
            <div className="sva-diff-kicker">Resolverlo pensando en tu negocio</div>
            <h3>Decisiones que después sí puedes usar.</h3>

            <div className="sva-value-steps">
              {[
                ['01', 'Primero entendemos qué haces.', 'Para no inventarnos algo que solo “se vea bonito”.'],
                ['02', 'Diseñamos con una razón.', 'Las decisiones responden a tu negocio y a dónde necesitas usar la marca.'],
                ['03', 'Preparamos cómo va a usarse.', 'No te quedas con una sola versión que funciona únicamente en una pantalla.'],
                ['04', 'Te dejamos claro qué hacer después.', 'Colores, letras y criterios que reducen futuras adivinanzas.'],
              ].map(([num, title, body]) => (
                <div className="sva-vstep" key={num}>
                  <div className="sva-vnum">{num}</div>
                  <div>
                    <b>{title}</b>
                    <p>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sva-diff-remate reveal">
          <h3>
            No es tener más archivos.
            <br />
            <span>Es tener menos cosas que adivinar.</span>
          </h3>
          <p>
            Logo, colores, letras y usos importan porque después te ayudan a tomar decisiones con más claridad.
          </p>
        </div>
      </div>
    </section>
  );
}

function ReceiveSection() {
  const cards = [
    ['↗', '“Mándame tu logo.”', 'Sabes cuál archivo enviar y qué versión usar, sin buscar entre cinco logos distintos.', 'Logo preparado'],
    ['●', '“Hay que hacer un post.”', 'Ya tienes una dirección para colores y letras. No necesitas inventar una nueva estética esa semana.', 'Colores + letras claras'],
    ['＋', '“Necesitamos una pieza nueva.”', 'La pieza puede ser diferente sin dejar de sentirse parte del mismo negocio.', 'Criterios para aplicar'],
    ['◎', '“Otra persona va a diseñar esto.”', 'Tiene una referencia para entender qué sí pertenece a la marca y qué no.', 'Guía para trabajar'],
    ['✓', '“¿Todo esto sí parece mío?”', 'Logo, publicación, empaque o presentación pueden verse distintos y seguir sintiéndose parte del mismo negocio.', 'Una marca reconocible'],
  ];

  return (
    <section className="section sva-receive">
      <div className="container">
        <div className="sva-receive-head reveal">
          <div>
            <span className="eyebrow">Para usarla de verdad</span>
            <h2 className="display">Para que mañana no vuelvas a empezar de cero.</h2>
          </div>
          <p className="lead">
            Lo importante no es memorizar reglas de diseño. Es que las situaciones normales de tu negocio dejen de convertirse en una nueva duda cada vez.
          </p>
        </div>

        <div className="sva-receive-grid reveal">
          {cards.map(([icon, title, body, small]) => (
            <div className="sva-receive-card" key={title}>
              <div className="sva-icon-demo">{icon}</div>
              <h3>{title}</h3>
              <p>{body}</p>
              <small>{small}</small>
            </div>
          ))}
        </div>

        <div className="sva-receive-note">
          Lo que se entrega exactamente depende del servicio y del alcance acordado para tu caso.
        </div>
      </div>
    </section>
  );
}

function WorkSection() {
  return (
    <section id="trabajos" className="section sva-work">
      <div className="container">
        <div className="sva-work-head reveal">
          <div>
            <span className="eyebrow">Trabajo real</span>
            <h2 className="display">Ahora sí: mira lo que cambia.</h2>
          </div>
          <p className="lead">
            La transformación debe poder verse. Nosotros solo te contamos la decisión clave detrás de cada una.
          </p>
        </div>

        <div className="sva-case-list">
          <article className="sva-case reveal">
            <div className="sva-case-visual">
              <img src={trabajo1} alt="Antes y después de identidad visual para Remotos" />
            </div>

            <div className="sva-case-copy">
              <div className="ck">Rediseño · REMOTOS</div>
              <h3>El negocio había avanzado. La imagen necesitaba alcanzarlo.</h3>

              <div className="sva-case-flow">
                <div className="sva-case-point">
                  <b>Antes</b>
                  <span>Muchos elementos compitiendo por atención.</span>
                </div>
                <div className="sva-case-point">
                  <b>Decisión</b>
                  <span>Simplificar sin perder una señal reconocible del negocio.</span>
                </div>
              </div>
            </div>
          </article>

          <article className="sva-case reveal">
            <div className="sva-case-visual">
              <img src={trabajo2} alt="Antes y después de identidad visual para Café Élite" />
            </div>

            <div className="sva-case-copy">
              <div className="ck">Identidad aplicada · Café Élite</div>
              <h3>Cuando el producto se siente mejor de lo que la marca está mostrando.</h3>

              <div className="sva-case-flow">
                <div className="sva-case-point">
                  <b>Antes</b>
                  <span>La presentación intentaba comunicar demasiadas cosas al mismo tiempo.</span>
                </div>
                <div className="sva-case-point">
                  <b>Decisión</b>
                  <span>Ordenar la información y construir una dirección visual más clara.</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="como" className="section sva-process">
      <div className="container sva-process-grid">
        <div className="sva-process-left reveal">
          <span className="eyebrow">Cómo trabajamos</span>
          <h2 className="display">No tienes que llegar sabiendo cómo debería verse.</h2>
          <p className="lead">
            El proceso existe para reducir el riesgo de terminar con algo bonito que no tenga nada que ver contigo.
          </p>
          <div className="sva-risk-note">
            No tienes que saber de colores, tipografías ni explicar “la idea perfecta”. Para eso hacemos preguntas antes de diseñar.
          </div>
        </div>

        <div className="sva-steps reveal">
          {[
            ['01', 'Primero entendemos antes de diseñar.', 'Qué haces, qué necesitas y dónde vas a utilizar la marca. Así no empezamos escogiendo colores porque sí.'],
            ['02', 'Tú no desapareces del proceso.', 'Te mostramos la dirección, escuchamos lo que piensas y ajustamos lo que corresponda dentro del alcance acordado.'],
            ['03', 'No te entregamos y desaparecemos.', 'Te dejamos claro qué tienes, para qué sirve y cómo usarlo cuando vuelva a aparecer una nueva pieza.'],
          ].map(([num, title, body]) => (
            <div className="sva-step" key={num}>
              <div className="sva-step-no">{num}</div>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section id="personas" className="section sva-people">
      <div className="container">
        <div className="sva-people-top reveal">
          <div>
            <span className="eyebrow">Las personas detrás</span>
            <h2 className="display">Esto no lo hace una agencia sin rostro.</h2>
          </div>

          <p className="lead">
            Sofía en Voz Alta está construido por dos personas que combinan criterio de marca,
            estructura y ejecución para trabajar cada proyecto con cuidado.
          </p>
        </div>

        <div className="sva-people-stage">
          <div className="sva-people-line" aria-hidden="true">
            <svg viewBox="0 0 1000 700" preserveAspectRatio="none">
              <path d="M90 170 C260 110,350 280,500 350 C650 420,750 510,910 470" />
              <circle cx="90" cy="170" r="5" />
              <circle cx="500" cy="350" r="6" />
              <circle cx="910" cy="470" r="5" />
            </svg>
          </div>

          

          <article className="sva-person s reveal">
            <div className="sva-p-photo">
              <img src={personaSofia} alt="Sofía, estratega de marca de Sofía en Voz Alta" />
            </div>

            <div className="sva-person-copy">
              <div className="sva-p-name">Sofía</div>
              <div className="sva-p-tag">La que desenreda la marca.</div>
              <div className="sva-p-role">Estrategia · Identidad · Dirección de branding</div>
              <div className="sva-p-desc">
                Sofía lidera la estrategia y el trabajo de branding. Escucha el negocio,
                encuentra lo que no está conectando y convierte esas decisiones en una identidad
                que tenga sentido y pueda usarse de verdad.
              </div>
            </div>
          </article>

          <article className="sva-person v reveal">
            <div className="sva-person-copy">
              <div className="sva-p-name">Víctor</div>
              <div className="sva-p-tag">El que hace que las ideas también funcionen.</div>
              <div className="sva-p-role">Tecnología · Procesos · Implementación</div>
              <div className="sva-p-desc">
                Víctor es ingeniero de software Full Stack y aporta estructura, tecnología y
                mirada operativa al proyecto, ayudando a que SVA funcione con procesos claros y
                soluciones que no se queden solamente en lo visual.
              </div>
            </div>

            <div className="sva-p-photo">
              <img src={personaVictor} alt="Víctor, ingeniero de software Full Stack" />
            </div>
          </article>
        </div>

        <div className="sva-people-close reveal">
          <h3>
            Una piensa cómo debería sentirse la marca.
            <br />
            <span>El otro pregunta si también funciona en la vida real.</span>
          </h3>

          <p>Creatividad con criterio. Estructura para llevarla a la realidad.</p>
        </div>
      </div>
    </section>
  );
}

function SymbolBridge() {
  return (
    <section className="sva-symbol-bridge">
      <div className="container sva-symbol-bridge-inner reveal">
        <div className="sva-symbol-bridge-line" />
        <div className="sva-symbol-bridge-dot" />
        <img className="sva-symbol-bridge-isotipo" src={isotipo} alt="" aria-hidden="true" />

        <div className="sva-symbol-bridge-copy">
          <div className="small">Y sí, nuestra marca también pasó por esas preguntas.</div>
          <h2>No hablamos de criterio solo cuando diseñamos para otros.</h2>
          <p>
            Nuestra propia identidad también necesitaba una razón para verse como se ve.
            Y esta es una de las ideas que vive detrás del símbolo.
          </p>
        </div>
      </div>
    </section>
  );
}

function SymbolSection() {
  const steps = [
    {
      number: '01',
      kicker: 'Empieza',
      title: 'Algo existe, pero todavía no se ve con claridad.',
      text: 'Toda voz empieza como una intención. Una idea, una inquietud, una necesidad de decir algo.',
    },
    {
      number: '02',
      kicker: 'Toma forma',
      title: 'La idea encuentra dirección.',
      text: 'Cuando hay criterio, lo que estaba suelto empieza a relacionarse. Ya no todo depende de improvisar la siguiente decisión.',
    },
    {
      number: '03',
      kicker: 'Se hace visible',
      title: 'Lo que antes era intuición empieza a reconocerse.',
      text: 'La voz gana presencia. Se entiende mejor, se sostiene y puede aparecer en distintos lugares sin dejar de sentirse propia.',
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const wheelLockRef = useRef(false);
  const touchYRef = useRef(null);
  const step = steps[currentStep];

  const moveToStep = (nextStep) => {
    setCurrentStep(Math.max(0, Math.min(2, nextStep)));
  };

  const handleWheel = (event) => {
    if (typeof window !== 'undefined' && window.innerWidth < 980) return;
    if (wheelLockRef.current || Math.abs(event.deltaY) < 12) return;

    const canMove =
      (event.deltaY > 0 && currentStep < 2) ||
      (event.deltaY < 0 && currentStep > 0);

    if (!canMove) return;

    event.preventDefault();
    moveToStep(currentStep + (event.deltaY > 0 ? 1 : -1));
    wheelLockRef.current = true;

    window.setTimeout(() => {
      wheelLockRef.current = false;
    }, 500);
  };

  const handleTouchStart = (event) => {
    touchYRef.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (event) => {
    if (touchYRef.current === null) return;

    const deltaY = touchYRef.current - event.changedTouches[0].clientY;

    if (Math.abs(deltaY) > 45) {
      moveToStep(currentStep + (deltaY > 0 ? 1 : -1));
    }

    touchYRef.current = null;
  };

  return (
    <section id="sentido-simbolo" className="section sva-symbol">
      <div className="container">
        <div className="sva-symbol-top reveal">
          <div>
            <span className="eyebrow">El sentido del símbolo</span>
            <h2 className="display">Una voz no aparece de golpe.</h2>
          </div>

          <p className="lead">
            El isotipo de Sofía en Voz Alta nace de una idea sencilla:{' '}
            <strong style={{ color: 'var(--plum)' }}>
              una voz empieza, toma forma y se hace visible.
            </strong>
          </p>
        </div>

        <div className="sva-symbol-story">
          <div
            className="sva-story-shell"
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="sva-symbol-progress" aria-hidden="true">
              {[0, 1, 2].map((index) => (
                <i key={index}>
                  <span style={{ width: index <= currentStep ? '100%' : '0%' }} />
                </i>
              ))}
            </div>

            <div className="sva-symbol-stage">
              <div className="sva-symbol-copy">
                <div className="sva-symbol-number">{step.number}</div>
                <div className="sva-symbol-kicker">{step.kicker}</div>
                <h3 className="sva-symbol-title">{step.title}</h3>
                <p className="sva-symbol-text">{step.text}</p>

                <div className="sva-symbol-controls" aria-label="Etapas del símbolo">
                  {steps.map((item, index) => (
                    <button
                      key={item.kicker}
                      type="button"
                      className={index === currentStep ? 'active' : ''}
                      onClick={() => moveToStep(index)}
                    >
                      {item.kicker}
                    </button>
                  ))}
                </div>
              </div>

              <div className="sva-symbol-side">
                <div className="sva-symbol-canvas" aria-label="Evolución visual del isotipo de Sofía en Voz Alta">
                  <img className="sva-symbol-logo-full" src={isotipo} alt="" />

                  <div className={`sva-symbol-module m1 ${currentStep >= 0 ? 'show' : ''}`} />
                  <div className={`sva-symbol-module m2 ${currentStep >= 1 ? 'show' : ''}`} />
                  <div className={`sva-symbol-module m3 ${currentStep >= 2 ? 'show' : ''}`} />

                  <div className="sva-symbol-node-line" />
                  <span className="sva-symbol-node n1" />
                  <span className="sva-symbol-node n2" />
                  <span className="sva-symbol-node n3" />
                </div>
              </div>
            </div>

            <div className="sva-symbol-hint">Desliza o usa los botones para ver la evolución</div>
          </div>
        </div>

        <div className="sva-symbol-close reveal">
          <div className="sva-symbol-close-main">
            <h2>
              Eso también hacemos con una marca.
              <br />
              <span>Tomamos algo que existe y lo ayudamos a verse con más claridad.</span>
            </h2>

            <p>
              No se trata de complicarla. Se trata de darle dirección para que deje de sentirse
              improvisada y pueda empezar a reconocerse como propia.
            </p>
          </div>

          <div className="sva-contact-bridge">
            <div className="sva-contact-bridge-copy">
              <small>Ahora hablemos de la tuya</small>
              <h3>
                Ya te contamos un poco de nuestra marca. Ahora cuéntanos qué está pasando con la tuya.
              </h3>
            </div>

            <a className="cta" href="#contacto">Cuéntanos qué necesitas →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function DirectContactSection() {
  return (
    <section className="sva-direct">
      <div className="container">
        <div className="sva-direct-head reveal">
          <div>
            <span className="eyebrow">Contacto directo</span>
            <h2 className="display">¿Prefieres escribirnos directamente?</h2>
          </div>
          <p className="lead">
            También puedes contactarnos directamente por nuestros canales.
          </p>
        </div>

        <div className="sva-direct-grid reveal">
          <a
            className="sva-direct-row"
            href="https://wa.me/573214321697?text=Hola%20Sof%C3%ADa%2C%20vi%20su%20p%C3%A1gina%20web%20y%20quiero%20informaci%C3%B3n%20sobre%20mi%20marca."
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="sva-social-icon">W</div>
            <div><h3>WhatsApp</h3><p>Hablemos por mensaje.</p></div>
            <div className="sva-go">WhatsApp →</div>
          </a>

          <a
            className="sva-direct-row"
            href="https://www.instagram.com/sofiaenvozalta?igsh=MWhkYWlkdDkzZWY2Zg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="sva-social-icon">I</div>
            <div><h3>Instagram</h3><p>Síguenos o escríbenos.</p></div>
            <div className="sva-go">Instagram →</div>
          </a>

          <a
            className="sva-direct-row"
            href="https://www.facebook.com/share/19C55gK5qb/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="sva-social-icon">F</div>
            <div><h3>Facebook</h3><p>Encuéntranos aquí.</p></div>
            <div className="sva-go">Facebook →</div>
          </a>

          <a
            className="sva-direct-row"
            href="mailto:sofiaenvozalta@gmail.com?subject=Quiero%20informaci%C3%B3n%20sobre%20mi%20marca"
          >
            <div className="sva-social-icon">@</div>
            <div><h3>Correo</h3><p>Para conversaciones más formales.</p></div>
            <div className="sva-go">Escribir →</div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((element) => observer.observe(element));

    return () => {
      revealElements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style>{SITE_STYLES}</style>

      <Header />

      <main>
        <section id="inicio" className="sva-hero">
          <div className="container sva-hero-grid">
            <div className="reveal">
              <span className="eyebrow">Identidad de marca para negocios reales</span>

              <h1>
                Quieres que tu negocio se vea bien.
                <br />
                Pero no sabes por dónde empezar.
              </h1>

              <div className="sva-hero-copy">
                <p>
                  Logo, colores, letras, publicaciones…{' '}
                  <strong>no tienes que inventarlo todo cada vez.</strong>
                </p>
                <p>
                  Te ayudamos a ponerlo en orden para que tu negocio tenga una imagen clara, cuidada y que se sienta realmente tuya.
                </p>
              </div>

              <div className="sva-hero-actions">
                <a className="btn btn-primary" href="#contacto">
                  Muéstrame tu marca →
                </a>
                <a className="btn btn-light" href="#servicios">
                  Ver qué podemos hacer por ti
                </a>
              </div>

              <div className="sva-hero-note">
                No tienes que saber cómo se llama el servicio para empezar.
              </div>
            </div>

            <div className="sva-hero-art reveal">
              <div className="sva-hero-blob" />
              <div className="sva-hero-ring" />
              <img className="sva-hero-isotipo" src={isotipo} alt="" />

              <div className="sva-hero-photo">
                <img src={sofiaFoto} alt="Sofía" />
              </div>

              <div className="sva-hero-curve">
                <svg viewBox="0 0 700 180" preserveAspectRatio="none">
                  <path d="M5 110 C120 12,230 162,350 84 C455 15,535 135,695 58" />
                  <circle cx="5" cy="110" r="5" />
                  <circle cx="350" cy="84" r="5" />
                  <circle cx="695" cy="58" r="5" />
                </svg>
              </div>

              <div className="sva-thought sva-t1">¿qué logo hago?</div>
              <div className="sva-thought sva-t2">¿estos colores sí van juntos?</div>
              <div className="sva-thought sva-t3">
                ¿cómo hago que todo parezca del mismo negocio?
              </div>
            </div>
          </div>
        </section>

        <MigaSection />
        <ServicesSection />
        <DifferenceSection />
        <ReceiveSection />
        <WorkSection />
        <ProcessSection />
        <TeamSection />
        <SymbolBridge />
        <SymbolSection />

        <section id="contacto" className="section sva-contact">
          <div className="container">
            <div className="sva-contact-shell reveal">
              <div className="sva-contact-left">
                <span className="eyebrow">Hablemos</span>
                <h2>Ahora sí: cuéntanos qué necesitas.</h2>
                <p>
                  Son cuatro preguntas rápidas para entender qué necesitas antes de hablar.{' '}
                  <strong>No tienes que saber de branding ni explicarlo de forma técnica.</strong>
                </p>
                <div className="micro">
                  Nosotros hacemos el resto de las preguntas en el diagnóstico.
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>

        <DirectContactSection />

        <section className="sva-final">
          <div className="container reveal">
            <img src={isotipo} alt="" />
            <h2>
              Una marca no necesita aparentar.
              <br />
              <span>Necesita tener sentido.</span>
            </h2>
          </div>
        </section>
      </main>

      <footer className="sva-footer-wrap">
        <div className="container sva-footer">
          <div>
            <img src={logo} alt="Sofía en Voz Alta" />
            <p>
              Identidad de marca para negocios reales. Claridad con personalidad para que no tengas que inventarlo todo cada vez.
            </p>
          </div>

          <div className="sva-fcols">
            <div>
              <b>Servicios</b>
              <a href="#servicios">Diseño de logo</a>
              <a href="#servicios">Rediseño de logo</a>
              <a href="#servicios">Identidad de marca</a>
            </div>

            <div>
              <b>Explorar</b>
              <a href="#trabajos">Trabajos</a>
              <a href="#como">Cómo trabajamos</a>
              <a href="#personas">Quiénes somos</a>
            </div>

            <div>
              <b>Contacto</b>
              <a href="#contacto">Prediagnóstico</a>
              <a
                href="https://www.instagram.com/sofiaenvozalta?igsh=MWhkYWlkdDkzZWY2Zg=="
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/share/19C55gK5qb/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a href="mailto:sofiaenvozalta@gmail.com">Correo</a>
            </div>
          </div>
        </div>
      </footer>

      <div className="sva-mobile-cta">
        <a className="btn btn-primary" href="#contacto">
          Hablemos de tu marca
        </a>
      </div>
    </>
  );
}