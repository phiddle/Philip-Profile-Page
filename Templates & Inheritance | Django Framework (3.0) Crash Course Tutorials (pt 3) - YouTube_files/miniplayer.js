(function(g){var window=this;var Z3=function(a,b){var c="ytp-miniplayer-button-bottom-right",d={D:"svg",U:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},S:[{D:"g",U:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},S:[{D:"g",U:{transform:"translate(-1.000000, -3.000000)"},S:[{D:"polygon",U:{points:"0 0 24 0 24 24 0 24"}},{D:"path",U:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Open video page";a.T().Z("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d={D:"svg",U:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},S:[{D:"g",U:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},S:[{D:"g",U:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},S:[{D:"path",U:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.X.call(this,{D:"button",ka:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],U:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},S:[d]});this.G=a;this.ya("click",this.onClick,this);this.Aa("title",g.EN(a,e,"i"));g.Bi(this,g.bO(b.Kb(),this.element))},$3=function(a){g.X.call(this,{D:"div",
K:"ytp-miniplayer-ui"});this.Yh=!1;this.player=a;this.N(a,"minimized",this.Rg);this.N(a,"onStateChange",this.vQ)},a4=function(a){g.hN.call(this,a);
this.i=new $3(this.player);this.i.hide();g.XM(this.player,this.i.element,4);a.ye()&&(this.load(),g.O(a.getRootNode(),"ytp-player-minimized",!0))};
g.u(Z3,g.X);Z3.prototype.onClick=function(){this.G.xa("onExpandMiniplayer")};g.u($3,g.X);g.k=$3.prototype;
g.k.show=function(){this.ae=new g.Xm(this.Fr,null,this);this.ae.start();if(!this.Yh){this.tooltip=new g.bR(this.player,this);g.I(this,this.tooltip);g.XM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Rb=new g.XN(this.player);g.I(this,this.Rb);this.wj=new g.X({D:"div",K:"ytp-miniplayer-scrim"});g.I(this,this.wj);this.wj.fa(this.element);this.N(this.wj.element,"click",this.TF);var a=new g.X({D:"button",ka:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},S:[g.gL()]});
g.I(this,a);a.fa(this.wj.element);this.N(a.element,"click",this.pj);a=new Z3(this.player,this);g.I(this,a);a.fa(this.wj.element);g.U(this.player.T().experiments,"web_inline_player_enabled")&&(a=new g.EQ(this.player,this),g.I(this,a),a.fa(this.wj.element),a=new g.sP(this.player,this),g.I(this,a),a.fa(this.wj.element));this.Rm=new g.X({D:"div",K:"ytp-miniplayer-controls"});g.I(this,this.Rm);this.Rm.fa(this.wj.element);this.N(this.Rm.element,"click",this.TF);var b=new g.X({D:"div",K:"ytp-miniplayer-button-container"});
g.I(this,b);b.fa(this.Rm.element);a=new g.X({D:"div",K:"ytp-miniplayer-play-button-container"});g.I(this,a);a.fa(this.Rm.element);var c=new g.X({D:"div",K:"ytp-miniplayer-button-container"});g.I(this,c);c.fa(this.Rm.element);this.nG=new g.xP(this.player,this,!1);g.I(this,this.nG);this.nG.fa(b.element);b=new g.uP(this.player,this);g.I(this,b);b.fa(a.element);this.nextButton=new g.xP(this.player,this,!0);g.I(this,this.nextButton);this.nextButton.fa(c.element);this.Bi=new g.OQ(this.player,this);g.I(this,
this.Bi);this.Bi.fa(this.wj.element);this.Zc=new g.CP(this.player,this);g.I(this,this.Zc);g.XM(this.player,this.Zc.element,4);this.zu=new g.X({D:"div",K:"ytp-miniplayer-buttons"});g.I(this,this.zu);g.XM(this.player,this.zu.element,4);a=new g.X({D:"button",ka:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},S:[g.gL()]});g.I(this,a);a.fa(this.zu.element);this.N(a.element,"click",this.pj);a=new g.X({D:"button",ka:["ytp-miniplayer-replay-button","ytp-button"],U:{"aria-label":"Close"},
S:[g.lL()]});g.I(this,a);a.fa(this.zu.element);this.N(a.element,"click",this.IO);this.N(this.player,"presentingplayerstatechange",this.Xb);this.N(this.player,"appresize",this.Za);this.N(this.player,"fullscreentoggled",this.Za);this.Za();this.Yh=!0}0!==this.player.getPlayerState()&&g.X.prototype.show.call(this);this.Zc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.ae&&(this.ae.dispose(),this.ae=void 0);g.X.prototype.hide.call(this);this.player.ye()||(this.Yh&&this.Zc.hide(),this.player.loadModule("annotations_module"))};
g.k.da=function(){this.ae&&(this.ae.dispose(),this.ae=void 0);g.X.prototype.da.call(this)};
g.k.pj=function(){this.player.stopVideo();this.player.xa("onCloseMiniplayer")};
g.k.IO=function(){this.player.playVideo()};
g.k.TF=function(a){if(a.target===this.wj.element||a.target===this.Rm.element)g.U(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.jK(this.player.Wa())?this.player.pauseVideo():this.player.playVideo():this.player.xa("onExpandMiniplayer")};
g.k.Rg=function(){g.O(this.player.getRootNode(),"ytp-player-minimized",this.player.ye())};
g.k.ne=function(){this.Zc.Db();this.Bi.Db()};
g.k.Fr=function(){this.ne();this.ae&&this.ae.start()};
g.k.Xb=function(a){g.W(a.state,32)&&this.tooltip.hide()};
g.k.Za=function(){g.NP(this.Zc,0,this.player.Ka().getPlayerSize().width,!1);g.EP(this.Zc)};
g.k.vQ=function(a){this.player.ye()&&(0===a?this.hide():this.show())};
g.k.Kb=function(){return this.tooltip};
g.k.ue=function(){return!1};
g.k.Me=function(){return!1};
g.k.ai=function(){return!1};
g.k.aA=function(){};
g.k.Vm=function(){};
g.k.Dq=function(){};
g.k.en=function(){return null};
g.k.Zi=function(){return new g.Yf(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.gp=function(a,b,c,d,e){var f=0,h=d=0,l=g.xg(a);if(b){c=g.en(b,"ytp-prev-button")||g.en(b,"ytp-next-button");var m=g.en(b,"ytp-play-button"),n=g.en(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.vg(b,this.element),h=b.x,f=b.y-12):n&&(h=g.en(b,"ytp-miniplayer-button-top-left"),f=g.vg(b,this.element),b=g.xg(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.Ka().getPlayerSize().width;e=f+(e||0);l=g.ee(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.xk=function(){};
g.k.Wj=function(){return!1};g.u(a4,g.hN);a4.prototype.create=function(){};
a4.prototype.xi=function(){return!1};
a4.prototype.load=function(){this.player.hideControls();this.i.show()};
a4.prototype.unload=function(){this.player.showControls();this.i.hide()};g.nN.miniplayer=a4;})(_yt_player);
