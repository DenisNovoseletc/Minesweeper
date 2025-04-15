(function(){"use strict";var e={4821:function(e,t,i){var n=i(5130),s=i(2261),l=i(6768);const a={id:"app"};function r(e,t,i,n,s,r){const o=(0,l.g2)("router-view");return(0,l.uX)(),(0,l.CE)("div",a,[(0,l.bF)(o)])}var o={name:"App"},u=i(1241);const c=(0,u.A)(o,[["render",r]]);var d=c,h=i(1387),f=i(4232);const m={class:"remaining-mines"},p={class:"navigation__block"},v={class:"game"},g={class:"timer"},y={class:"timer-value"},k=["onClick","onContextmenu"],b={key:0},C={key:0},w={key:1},L={key:2};function M(e,t,i,s,a,r){const o=(0,l.g2)("router-link");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("div",null,[(0,l.Lk)("div",m,[t[2]||(t[2]=(0,l.Lk)("span",{class:"remaining-mines-icon"},"⚠️",-1)),(0,l.eW)(" Осталось мин: "+(0,f.v_)(a.remainingMines),1)])]),(0,l.Lk)("div",p,[(0,l.Lk)("button",{class:"navigation__button",onClick:t[0]||(t[0]=(...e)=>r.restartGame&&r.restartGame(...e))},"🔄"),(0,l.bF)(o,{class:"table__button",to:"/leaderboard"},{default:(0,l.k6)((()=>t[3]||(t[3]=[(0,l.eW)("Таблица лидеров")]))),_:1}),(0,l.Lk)("button",{class:"navigation__button",onClick:t[1]||(t[1]=(...e)=>r.goToSettings&&r.goToSettings(...e))},"🛠️")]),(0,l.Lk)("div",v,[(0,l.Lk)("div",g,[t[4]||(t[4]=(0,l.Lk)("span",{class:"timer-icon"},[(0,l.Lk)("div",{class:"clock"},[(0,l.Lk)("div",{class:"hand"})])],-1)),t[5]||(t[5]=(0,l.eW)()),(0,l.Lk)("span",y,(0,f.v_)(a.timer),1)]),(0,l.Lk)("div",null,[(0,l.Lk)("div",{class:"grid",style:(0,f.Tr)(r.gridStyle)},[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(a.cells,(e=>((0,l.uX)(),(0,l.CE)("div",{key:e.id,class:(0,f.C4)(["cell",{opened:e.isOpened,mine:e.isMine}]),onClick:t=>r.handleCellClick(e),onContextmenu:(0,n.D$)((t=>r.handleRightClick(e)),["prevent"])},[e.isOpened?((0,l.uX)(),(0,l.CE)("span",b,[e.isMine?((0,l.uX)(),(0,l.CE)("span",C,"💣")):((0,l.uX)(),(0,l.CE)("span",{key:1,class:(0,f.C4)(r.getNumberClass(e.value))},(0,f.v_)(e.value),3))])):(0,l.Q3)("",!0),e.isOpened||"flag"!==e.flagged?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.CE)("span",w,"🚩")),e.isOpened||"question"!==e.flagged?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.CE)("span",L,"❓"))],42,k)))),128))],4)])])],64)}i(4114),i(8111),i(1148),i(2489),i(7588);const E=(0,s.nY)("leaderboard",{state:()=>({players:[]}),actions:{loadPlayers(){const e=localStorage.getItem("leaderboard");e&&(this.players=JSON.parse(e))},addPlayer(e){this.players.push(e),this.players.sort(((e,t)=>e.time-t.time)),this.players=this.players.slice(0,10),localStorage.setItem("leaderboard",JSON.stringify(this.players))}}});var O={data(){return{timer:0,remainingMines:10,cells:[],timerInterval:null,rows:8,cols:8,difficulty:"easy",windowWidth:window.innerWidth}},computed:{gridStyle(){const e=this.windowWidth;let t;return t=e<340?17:e<400?19:e<480?22:e<600?28:e<768?34:40,{gridTemplateColumns:`repeat(${this.cols}, ${t}px)`,gridTemplateRows:`repeat(${this.rows}, ${t}px)`}}},created(){this.difficulty=this.$route.query.difficulty||"easy",this.rows=parseInt(this.$route.query.rows)||8,this.cols=parseInt(this.$route.query.cols)||8,this.initializeGame()},methods:{updateWindowWidth(){this.windowWidth=window.innerWidth},revealAllCells(){this.cells.forEach((e=>{e.isOpened=!0}))},setDifficulty(e){switch(e){case"easy":this.rows=8,this.cols=8,this.remainingMines=10;break;case"medium":this.rows=16,this.cols=16,this.remainingMines=40;break;case"hard":this.rows=32,this.cols=16,this.remainingMines=100;break;default:this.rows=8,this.cols=8,this.remainingMines=10}},startTimer(){this.timerInterval||(this.timerInterval=setInterval((()=>{this.timer++}),1e3))},initializeGame(){this.timer=0,this.cells=[],this.setDifficulty(this.difficulty),this.startTimer();for(let e=0;e<this.rows*this.cols;e++)this.cells.push({id:e,isOpened:!1,isMine:!1,value:0,flagged:null});this.placeMines(),this.updateCellValues()},placeMines(){let e=0;const t=this.cells.filter((e=>!e.isMine)).length;if(t<this.remainingMines)console.error("Недостаточно места для размещения мин!");else while(e<this.remainingMines){const t=Math.floor(Math.random()*this.cells.length);this.cells[t].isMine||(this.cells[t].isMine=!0,e++)}},handleCellClick(e){if(e.isOpened||e.flagged)return;if(e.isOpened=!0,e.isMine)return alert("Игра окончена! Вы попали на мину!"),this.revealMines(),this.revealAllCells(),void clearInterval(this.timerInterval);const t=this.countAdjacentMines(e.id);e.value=t,0===t&&this.openAdjacentCells(e.id),this.checkForWin()},handleRightClick(e){e.isOpened||(null===e.flagged?(e.flagged="flag",this.remainingMines--):"flag"===e.flagged?(e.flagged="question",this.remainingMines++):e.flagged=null,this.checkForWin())},getAdjacentCells(e){const t=Math.floor(e/this.cols),i=e%this.cols,n=[];for(let s=t-1;s<=t+1;s++)for(let t=i-1;t<=i+1;t++)if(s>=0&&s<this.rows&&t>=0&&t<this.cols){const i=s*this.cols+t;i!==e&&n.push(this.cells[i])}return n},countAdjacentMines(e){const t=this.getAdjacentCells(e);let i=0;return t.forEach((e=>{e.isMine&&i++})),i},openAdjacentCells(e){const t=this.getAdjacentCells(e);t.forEach((e=>{if(!e.isOpened&&!e.flagged&&(e.isOpened=!0,!e.isMine)){const t=this.countAdjacentMines(e.id);e.value=t,0===t&&this.openAdjacentCells(e.id)}}))},revealMines(){this.cells.forEach((e=>{e.isMine&&(e.isOpened=!0)}))},checkForWin(){const e=this.cells.every((e=>e.isOpened||"flag"===e.flagged));if(e&&0===this.remainingMines){const e=prompt("Поздравляем! Вы выиграли! 🎉 Введите ваше имя:");if(e){const t=this.timer,i=this.difficulty,n=E();n&&"function"===typeof n.addPlayer?(n.addPlayer({name:e,time:t,level:i}),alert(`Спасибо за игру, ${e}! Ваше время: ${t} секунд на уровне ${i}.`)):console.error("Ошибка: метод addPlayer не найден в хранилище.")}else alert("Вы не ввели имя. Игра не сохранена.");clearInterval(this.timerInterval)}},restartGame(){this.timer=0,this.startTimer(),this.initializeGame()},goToSettings(){this.$router.push("/settings")},getNumberClass(e){switch(e){case 1:return"number-1";case 2:return"number-2";case 3:return"number-3";case 4:return"number-4";case 5:return"number-5";case 6:return"number-6";case 7:return"number-7";case 8:return"number-8";default:return""}},updateCellValues(){this.cells.forEach((e=>{e.isMine||(e.value=this.countAdjacentMines(e.id))}))},changeDifficulty(e){this.difficulty=e,this.restartGame()}},mounted(){this.updateWindowWidth(),window.addEventListener("resize",this.updateWindowWidth),this.initializeGame()},beforeUnmount(){clearInterval(this.timerInterval),window.removeEventListener("resize",this.updateWindowWidth)}};const W=(0,u.A)(O,[["render",M],["__scopeId","data-v-07f48d9d"]]);var _=W;const I={class:"settings"},X={class:"easy"},A={class:"medium"},j={class:"hard"};function P(e,t,i,s,a,r){return(0,l.uX)(),(0,l.CE)("div",I,[t[7]||(t[7]=(0,l.Lk)("h1",null,"Настройки игры🛠️",-1)),(0,l.Lk)("div",null,[(0,l.Lk)("label",X,[(0,l.bo)((0,l.Lk)("input",{type:"radio",value:"easy","onUpdate:modelValue":t[0]||(t[0]=e=>a.selectedDifficulty=e)},null,512),[[n.XL,a.selectedDifficulty]]),t[4]||(t[4]=(0,l.eW)(" Простой 8x8, 10 мин "))]),(0,l.Lk)("label",A,[(0,l.bo)((0,l.Lk)("input",{type:"radio",value:"medium","onUpdate:modelValue":t[1]||(t[1]=e=>a.selectedDifficulty=e)},null,512),[[n.XL,a.selectedDifficulty]]),t[5]||(t[5]=(0,l.eW)(" Средний 16x16, 40 мин "))]),(0,l.Lk)("label",j,[(0,l.bo)((0,l.Lk)("input",{type:"radio",value:"hard","onUpdate:modelValue":t[2]||(t[2]=e=>a.selectedDifficulty=e)},null,512),[[n.XL,a.selectedDifficulty]]),t[6]||(t[6]=(0,l.eW)(" Сложный 32x16, 100 мин "))])]),(0,l.Lk)("button",{class:"btnStart",onClick:t[3]||(t[3]=(...e)=>r.startGame&&r.startGame(...e))},"Начать игру")])}var T={data(){return{selectedDifficulty:"easy"}},methods:{startGame(){this.$router.push({path:"/game",query:{difficulty:this.selectedDifficulty}})}}};const $=(0,u.A)(T,[["render",P],["__scopeId","data-v-691ecaf6"]]);var x=$;const D={class:"container"},F={class:"easy"},G={class:"medium"},S={class:"hard"};function q(e,t,i,n,s,a){return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("div",D,[t[4]||(t[4]=(0,l.Lk)("h2",null,"Таблица рекордов🏆",-1)),(0,l.Lk)("div",F,[t[1]||(t[1]=(0,l.Lk)("h3",null,"Легкий уровень",-1)),(0,l.Lk)("ul",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(n.easyPlayers,((e,t)=>((0,l.uX)(),(0,l.CE)("li",{key:t},(0,f.v_)(e.name)+" - "+(0,f.v_)(e.time)+" сек. ",1)))),128))])]),(0,l.Lk)("div",G,[t[2]||(t[2]=(0,l.Lk)("h3",null,"Средний уровень",-1)),(0,l.Lk)("ul",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(n.mediumPlayers,((e,t)=>((0,l.uX)(),(0,l.CE)("li",{key:t},(0,f.v_)(e.name)+" - "+(0,f.v_)(e.time)+" сек. ",1)))),128))])]),(0,l.Lk)("div",S,[t[3]||(t[3]=(0,l.Lk)("h3",null,"Сложный уровень",-1)),(0,l.Lk)("ul",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(n.hardPlayers,((e,t)=>((0,l.uX)(),(0,l.CE)("li",{key:t},(0,f.v_)(e.name)+" - "+(0,f.v_)(e.time)+" сек. ",1)))),128))])])]),(0,l.Lk)("button",{class:"main-button",onClick:t[0]||(t[0]=(...e)=>a.goToMain&&a.goToMain(...e))},"На главную")],64)}var z={name:"LeaderboardComponent",setup(){const e=E(),t=(0,l.EW)((()=>e.players)),i=(0,l.EW)((()=>t.value.filter((e=>"easy"===e.level)))),n=(0,l.EW)((()=>t.value.filter((e=>"medium"===e.level)))),s=(0,l.EW)((()=>t.value.filter((e=>"hard"===e.level))));return(0,l.sV)((()=>{e.loadPlayers()})),{easyPlayers:i,mediumPlayers:n,hardPlayers:s}},methods:{goToMain(){this.$router.push("/")}}};const K=(0,u.A)(z,[["render",q],["__scopeId","data-v-13511bc6"]]);var V=K;const N=[{path:"/",name:"Home",component:_},{path:"/game",name:"Game",component:_},{path:"/settings",name:"Settings",component:x},{path:"/leaderboard",name:"Leaderboard",component:V}],U=(0,h.aE)({history:(0,h.Bt)(),routes:N});var Q=U;const R=(0,n.Ef)(d),J=(0,s.Ey)();R.use(J).use(Q).mount("#app")}},t={};function i(n){var s=t[n];if(void 0!==s)return s.exports;var l=t[n]={exports:{}};return e[n].call(l.exports,l,l.exports,i),l.exports}i.m=e,function(){var e=[];i.O=function(t,n,s,l){if(!n){var a=1/0;for(c=0;c<e.length;c++){n=e[c][0],s=e[c][1],l=e[c][2];for(var r=!0,o=0;o<n.length;o++)(!1&l||a>=l)&&Object.keys(i.O).every((function(e){return i.O[e](n[o])}))?n.splice(o--,1):(r=!1,l<a&&(a=l));if(r){e.splice(c--,1);var u=s();void 0!==u&&(t=u)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[n,s,l]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,l,a=n[0],r=n[1],o=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(s in r)i.o(r,s)&&(i.m[s]=r[s]);if(o)var c=o(i)}for(t&&t(n);u<a.length;u++)l=a[u],i.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return i.O(c)},n=self["webpackChunkminesweeper"]=self["webpackChunkminesweeper"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[504],(function(){return i(4821)}));n=i.O(n)})();
//# sourceMappingURL=app.1966a05e.js.map