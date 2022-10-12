"use strict";(self.webpackChunkgloomhavensecretary=self.webpackChunkgloomhavensecretary||[]).push([[179],{1188:(bt,it,D)=>{D.d(it,{v:()=>J});var t=D(641),V=D(2713),B=D(3735),$=D(1599),H=D(1412),rt=D(83),w=D(1502),S=D(9239),U=D(7342),E=D(8386),R=D(62),F=D(1723);class ct{constructor(f){this.game=f}addModifier(f,y,P=-1){(P<0||P>f.cards.length)&&(P=Math.floor(Math.random()*(f.cards.length-f.current))+f.current+1),f.cards.splice(P,0,y)}drawModifier(f){f.current=f.current+1,f.current==f.cards.length&&this.shuffleModifiers(f)}shuffleModifiers(f){f.cards=f.cards.filter((y,P)=>P>f.current||y.type!=R.kl.bless&&y.type!=R.kl.curse),f.current=-1,f.cards=f.cards.map(y=>({value:y,sort:Math.random()})).sort((y,P)=>y.sort-P.sort).map(({value:y})=>y)}removeDrawnDiscards(f){const y=f.cards.length;f.cards=f.cards.filter((P,I)=>I>f.current||P.type!=R.kl.bless&&P.type!=R.kl.curse),f.current=f.current-(y-f.cards.length)}next(){this.checkShuffle(this.game.monsterAttackModifierDeck),this.game.figures.forEach(f=>{f instanceof t.z&&this.checkShuffle(f.attackModifierDeck)})}draw(){this.shuffleModifiers(this.game.monsterAttackModifierDeck),this.game.figures.forEach(f=>{f instanceof t.z&&this.shuffleModifiers(f.attackModifierDeck)})}checkShuffle(f){f.cards.some((y,P)=>P<=f.current&&y.shuffle)&&this.shuffleModifiers(f)}buildCharacterAttackModifierDeck(f){const y=new R.ut;let P=0;return f.perks.forEach(I=>{I.cards&&I.cards.forEach((et,yt)=>{if(I.type==F.Ib.add||I.type==F.Ib.replace){let Ot=Object.assign(new R.YY(et.attackModifier.type),et.attackModifier);Ot.id="perk"+P,(!this.findByAttackModifier(R.UO,Ot)||I.type==F.Ib.add||yt>0)&&(Ot.character=!0),this.findByAttackModifier(y.attackModifiers,Ot)||(P++,y.attackModifiers.push(Ot))}})}),f.progress&&f.progress.perks&&f.progress.perks.forEach((I,et)=>{for(let yt=0;yt<I;yt++){const Ot=f.perks[et];Ot.cards=Ot.cards||[],Ot.cards.forEach((Zt,Oi)=>{(!this.findByAttackModifier(R.UO,Zt.attackModifier)||Ot.type==F.Ib.add||Ot.type==F.Ib.replace&&Oi>0)&&(Zt.attackModifier.character=!0)}),Ot.type==F.Ib.add?this.addCards(y,Ot.cards):Ot.type==F.Ib.remove?this.removeCards(y,Ot.cards):Ot.type==F.Ib.replace&&(this.removeCards(y,[Ot.cards[0]]),this.addCards(y,Ot.cards.slice(1,Ot.cards.length)))}}),y}findByAttackModifier(f,y){return f.find(P=>{let I=Object.assign(new R.YY(y.type),y);I.id="",I.revealed=!1;let et=Object.assign(new R.YY(P.type),P);return et.id="",et.revealed=!1,JSON.stringify(I)==JSON.stringify(et)})}addCards(f,y){y.forEach(P=>{for(let I=0;I<P.count;I++){const et=this.findByAttackModifier(f.attackModifiers,P.attackModifier);if(et){let yt=Object.assign(new R.YY(et.type),et);f.cards.push(yt)}else console.warn("Did not found AM to add: ",P.attackModifier,f)}})}removeCards(f,y){y.forEach(P=>{for(let I=0;I<P.count;I++){const et=this.findByAttackModifier(f.cards,P.attackModifier);if(et){const yt=f.cards.indexOf(et);f.cards.splice(yt,1)}else console.warn("Did not found AM to replace: ",P.attackModifier,f)}})}}var z=D(6998),X=D(8557),W=D(2944),lt=D(2679),st=D(554);class Ct{constructor(f){this.xpMap=[0,45,95,150,210,275,345,420,500],this.game=f}characterIcon(f){return f.iconUrl?f.iconUrl:"./assets/images/character/icons/"+f.edition+"-"+f.name+".svg"}characterThumbnail(f){return f.thumbnailUrl?f.thumbnailUrl:"./assets/images/character/thumbnail/"+f.edition+"-"+f.name+".png"}addCharacter(f,y){if(!this.game.figures.some(P=>P instanceof t.z&&P.name==f.name&&P.edition==f.edition)){let P=new t.z(f,y);for(P.availableSummons.filter(I=>I.special).forEach(I=>this.createSpecialSummon(P,I)),P.number=1;J.game.figures.some(I=>I instanceof t.z&&I.number==P.number);)P.number++;this.game.figures.push(P),this.game.state==rt.D2.next&&J.attackModifierManager.shuffleModifiers(P.attackModifierDeck),J.sortFigures()}this.game.levelCalculation&&J.levelManager.calculateScenarioLevel()}removeCharacter(f){if(this.game.figures.splice(this.game.figures.indexOf(f),1),f.marker){const y=f.edition+"-"+f.name;this.game.figures.forEach(P=>{P instanceof t.z?(P.markers.splice(P.markers.indexOf(y),1),P.summons&&P.summons.forEach(I=>{I.markers.splice(I.markers.indexOf(y),1)})):P instanceof E.C?P.markers.splice(P.markers.indexOf(y),1):P instanceof w.Q&&P.entities.forEach(I=>{I.markers.splice(I.markers.indexOf(y),1)})})}this.game.levelCalculation&&J.levelManager.calculateScenarioLevel()}addSummon(f,y){f.summons=f.summons.filter(P=>P.name!=y.name||P.number!=y.number||P.color!=y.color),f.summons.push(y)}removeSummon(f,y){f.summons.splice(f.summons.indexOf(y),1)}addObjective(f){let y=0;for(;this.game.figures.some(I=>I instanceof E.C&&I.id==y);)y++;let P=new E.C(y);f&&(P.name=f.name,P.maxHealth=f.health,P.health=(0,W.j9)(""+f.health),P.escort=f.escort,f.initiative&&(P.initiative=f.initiative)),this.game.figures.push(P),J.sortFigures()}removeObjective(f){this.game.sections.some(y=>y.objectives&&y.objectives.length>0)&&(this.game.sections=[]),this.game.figures.splice(this.game.figures.indexOf(f),1)}next(){this.game.figures.forEach(f=>{f instanceof t.z?(f.initiative=0,f.initiativeVisible=!1,f.off=!1,f.summons=f.summons.filter(y=>!y.dead&&y.health>0),st.r.settings.expireConditions&&(f.entityConditions=f.entityConditions.filter(y=>!y.expired),f.summons.forEach(y=>{y.entityConditions=y.entityConditions.filter(P=>!P.expired)})),st.r.settings.applyConditions&&(f.entityConditions.filter(y=>-1!=y.types.indexOf(X.CP.turn)).forEach(y=>y.state=X.tT.normal),f.summons.forEach(y=>{y.entityConditions.filter(P=>-1!=P.types.indexOf(X.CP.turn)).forEach(P=>P.state=X.tT.normal)}))):f instanceof E.C&&(f.off=!1,st.r.settings.expireConditions&&(f.entityConditions=f.entityConditions.filter(y=>!y.expired)),st.r.settings.applyConditions&&f.entityConditions.filter(y=>-1!=y.types.indexOf(X.CP.turn)).forEach(y=>y.state=X.tT.normal))})}addXP(f,y){f.progress.experience+=y,this.xpMap.forEach((P,I)=>{f.progress.experience>=P&&(I<this.xpMap.length-1&&f.progress.experience<this.xpMap[I+1]||I==this.xpMap.length-1)&&this.setLevel(f,I+1)})}setLevel(f,y){const P=f.stats.find(I=>I.level==y);P?f.stat=P:(f.errors=f.errors||[],!f.errors.find(I=>I.type==H.r.unknown)&&!f.errors.find(I=>I.type==H.r.stat)&&(console.error("No character stat found for level: "+y),f.errors.push(new H.o(H.r.stat,"character",f.name,f.edition,"",""+y))),f.stat=new z.a(y,0)),f.level=y,f.health==f.maxHealth&&(f.health=f.stat.health),f.maxHealth=f.stat.health,f.health>f.maxHealth&&(f.health=f.maxHealth),f.availableSummons.filter(I=>I.special).forEach(I=>this.createSpecialSummon(f,I)),(f.progress.experience<J.characterManager.xpMap[y-1]||f.progress.experience>=J.characterManager.xpMap[y])&&(f.progress.experience=J.characterManager.xpMap[y-1]),this.game.levelCalculation&&J.levelManager.calculateScenarioLevel()}createSpecialSummon(f,y){if(f.summons=f.summons.filter(P=>P.name!=y.name||0!=P.number||P.color!=lt.mp.custom),!y.level||y.level<=f.level){let P=new lt.eU(y.name,f.level,0,lt.mp.custom);P.maxHealth="number"==typeof y.health?y.health:(0,W.j9)(y.health,f.level),P.attack="number"==typeof y.attack?y.attack:(0,W.j9)(y.attack,f.level),P.movement="number"==typeof y.movement?y.movement:(0,W.j9)(y.movement,f.level),P.range="number"==typeof y.range?y.range:(0,W.j9)(y.range,f.level),P.health=P.maxHealth,P.state=lt.HY.true,P.init=!1,this.addSummon(f,P)}}applyDonations(f){for(let y=0;y<f.donations;y++)J.attackModifierManager.addModifier(f.attackModifierDeck,new R.YY(R.kl.bless)),J.attackModifierManager.addModifier(f.attackModifierDeck,new R.YY(R.kl.bless));f.donations=0}draw(){this.game.figures.forEach(f=>{f instanceof t.z&&(f.initiativeVisible=!0,this.applyDonations(f)),(f instanceof t.z||f instanceof E.C)&&!f.exhausted&&f.health>0&&(f.off=!1)})}}var ie=D(982),gt=D(7918),at=D(3951);class Lt{constructor(f){this.game=f}monsterThumbnail(f){return f.thumbnailUrl?f.thumbnailUrl:(f.thumbnail||(f.thumbnail=f.edition+"-"+f.name),"./assets/images/monster/thumbnail/"+f.thumbnail+".png")}getStat(f,y){return f.stats.find(I=>I.level==f.level&&I.type==y)||(f.errors=f.errors||[],!f.errors.find(I=>I.type==H.r.unknown)&&!f.errors.find(I=>I.type==H.r.stat)&&(console.error("Could not find '"+y+"' stats for monster: "+f.name+" level: "+f.level),f.errors.push(new H.o(H.r.stat,"monster",f.name,f.edition,y,""+f.level))),new S.c(y,f.level,0,0,0,0))}addMonster(f){this.game.scenario||J.scenarioManager.setScenario(new gt.$(new at.t("","",[],[],[],[],[],[],[],""),!0));let y=this.game.figures.find(P=>P instanceof $.A&&P.name==f.name&&P.edition==f.edition);if(!y){if(y=new w.Q(f),y.level=J.game.level,y.off=!0,!this.applySameDeck(y)){if(!y.abilities||0==y.abilities.length){const P=J.abilities(y);y.abilities=P.filter(I=>isNaN(+I.level)||+I.level<=(y&&y.level||0)).map(I=>P.indexOf(I))}this.shuffleAbilities(y)}this.game.figures.push(y),J.game.state==rt.D2.next&&J.sortFigures()}return y}removeMonster(f){f.entities=[],this.game.figures.splice(this.game.figures.indexOf(f),1),f.drawExtra||this.game.figures.forEach(y=>{y instanceof w.Q&&y.drawExtra&&(y.name!=f.name||y.edition!=f.edition)&&J.deckData(y).name==J.deckData(f).name&&J.deckData(y).edition==J.deckData(f).edition&&(this.getSameDeckMonster(y)||(y.drawExtra=!1))})}addMonsterEntity(f,y,P,I=!1){if(!f.stats.some(yt=>yt.type==P))return f.errors=f.errors||[],void(!f.errors.find(yt=>yt.type==H.r.unknown)&&!f.errors.find(yt=>yt.type==H.r.monsterType)&&(console.error("Missing type '"+P+"' for "+f.name),f.errors.push(new H.o(H.r.monsterType,"monster",f.name,f.edition,P))));let et=new ie.g(y,P,f);I&&(et.summon=lt.HY.new),f.entities.push(et),this.game.state==rt.D2.next&&-1==f.ability&&(this.applySameDeck(f)?-1==f.ability&&(f.ability=0):f.ability=0),this.game.state==rt.D2.next&&1==f.entities.filter(yt=>!yt.dead&&yt.health>0).length&&J.sortFigures(),f.off&&(f.off=!1,this.game.state==rt.D2.next&&(f.active=!J.game.figures.some(yt=>yt.active))),this.game.state==rt.D2.next&&(et.active=et.active||J.game.figures.some(yt=>yt.active&&yt.getInitiative()>f.getInitiative()),et.off=!1)}removeMonsterEntity(f,y){f.entities.splice(f.entities.indexOf(y),1),(0==f.entities.length||f.entities.every(P=>P.dead||P.health<=0))&&(f.off||J.game.state!=rt.D2.next?f.off=!0:(J.roundManager.toggleFigure(f),f.active=!1))}toggleActive(f,y){this.game.state==rt.D2.next&&(f.active?(y.active=!y.active,f.entities.every(P=>P.dead||P.health<=0||!P.active)&&J.roundManager.toggleFigure(f)):y.active?(y.active=!1,f.entities.every(P=>P.dead||P.health<=0||!P.active)&&(f.off=!0)):(f.off=!1,y.active=!0),y.active?(y.off=!1,!f.active&&this.game.figures.every(P=>!P.active)&&(f.active=!0)):y.off=!0)}getSameDeckMonster(f){return this.game.figures.find(y=>y instanceof w.Q&&(y.name!=f.name||y.edition!=f.edition)&&J.deckData(y).name==J.deckData(f).name&&J.deckData(y).edition==J.deckData(f).edition&&!y.drawExtra)}applySameDeck(f){const y=this.getSameDeckMonster(f);return!!y&&(f.abilities=JSON.parse(JSON.stringify(y.abilities)),f.ability=y.ability,f.drawExtra&&this.drawExtra(f),!0)}drawExtra(f){if(f.drawExtra){f.ability=-1;const y=this.getSameDeckMonster(f);if(!y)return console.error("Draw extra for '"+f.name+"' ("+f.deck+" not possible, not same deck monster found!"),void(f.drawExtra=!1);f.ability=y.ability+1+this.game.figures.filter(P=>P instanceof w.Q&&(P.name!=f.name||P.edition!=f.edition)&&J.deckData(P).name==J.deckData(f).name&&J.deckData(P).edition==J.deckData(f).edition&&P.drawExtra&&P.ability>y.ability).length,f.ability>=f.abilities.length&&this.shuffleAbilities(f)}else this.applySameDeck(f)}next(){this.game.figures.forEach(f=>{if(f instanceof w.Q){const y=this.getAbility(f);y&&(y.shuffle||f.ability>=f.abilities.length)&&this.shuffleAbilities(f),st.r.settings.expireConditions&&f.entities.forEach(P=>{P.entityConditions=P.entityConditions.filter(I=>!I.expired)}),st.r.settings.applyConditions&&f.entities.forEach(P=>{P.entityConditions.filter(I=>-1!=I.types.indexOf(X.CP.turn)).forEach(I=>I.state=X.tT.normal)}),f.entities=f.entities.filter(P=>!P.dead&&P.health>0),f.off=0==f.entities.length}})}draw(){this.game.figures.filter(f=>f instanceof w.Q&&!f.drawExtra).forEach(f=>{f instanceof w.Q&&f.entities.length>0&&f.entities.some(y=>!y.dead&&y.health>0)&&(f.ability=f.ability+1+this.game.figures.filter(y=>y instanceof w.Q&&(y.name!=f.name||y.edition!=f.edition)&&J.deckData(y).name==J.deckData(f).name&&J.deckData(y).edition==J.deckData(f).edition&&y.drawExtra&&y.ability>-1).length,f.ability>=f.abilities.length&&this.shuffleAbilities(f))}),this.game.figures.filter(f=>f instanceof w.Q&&f.drawExtra).forEach(f=>{f instanceof w.Q&&(this.drawExtra(f),f.ability>=f.abilities.length&&this.shuffleAbilities(f))})}shuffleAbilities(f){if(f.ability=J.game.state==rt.D2.draw||0==f.entities.length?-1:0,f.drawExtra){const y=this.getSameDeckMonster(f);return y?void this.shuffleAbilities(y):(console.error("Shuffle for '"+f.name+"' ("+f.deck+" not possible, not same deck monster found!"),f.drawExtra=!1,void this.shuffleAbilities(f))}f.abilities=f.abilities.map(y=>({value:y,sort:Math.random()})).sort((y,P)=>y.sort-P.sort).map(({value:y})=>y),this.game.figures.filter(y=>y instanceof w.Q&&this.getSameDeckMonster(y)&&this.getSameDeckMonster(y)==f).map(y=>y).forEach(y=>{y.abilities=JSON.parse(JSON.stringify(f.abilities)),J.game.state==rt.D2.draw?y.ability=-1:(y.ability=f.ability,y.drawExtra&&this.drawExtra(y))})}drawAbility(f){if(f.drawExtra){const y=this.getSameDeckMonster(f);return y?void this.drawAbility(y):(console.error("Draw for '"+f.name+"' ("+f.deck+" not possible, not same deck monster found!"),f.drawExtra=!1,void this.drawAbility(f))}f.ability+=1,this.game.figures.forEach(y=>{y instanceof w.Q&&this.getSameDeckMonster(y)&&(y.ability=f.ability,y.drawExtra&&this.drawExtra(y))})}getAbility(f){if(f.ability<0||f.ability>=f.abilities.length)return;const y=J.abilities(f);return y?y[f.abilities[f.ability]]:void 0}}class oe{constructor(f){this.undos=[],this.redos=[],this.undoInfos=[],this.game=f,this.lastSaveTimestamp=(new Date).getTime()}init(){const f=localStorage.getItem("ghs-game");if(null!=f){const P=Object.assign(new rt.i4,JSON.parse(f));this.game.fromModel(P),J.uiChange.emit()}else localStorage.setItem("ghs-game",JSON.stringify(this.game.toModel()));if(st.r.settings.serverUrl&&st.r.settings.serverPort&&st.r.settings.serverPassword&&st.r.settings.serverAutoconnect&&this.connect(),st.r.settings.browserNavigation){const P=+(localStorage.getItem("ghs-popstate")&&"number"==typeof localStorage.getItem("ghs-popstate")&&localStorage.getItem("ghs-popstate")||"0");localStorage.setItem("ghs-popstate",""+P),history.replaceState(P,"")}window.addEventListener("popstate",P=>{if(st.r.settings.browserNavigation){const I=+(localStorage.getItem("ghs-popstate")||"0");localStorage.setItem("ghs-popstate",P.state),I<P.state?this.redo():I>P.state&&this.undo()}}),this.loadLocalStorage();const y=this.undos.length+this.redos.length-this.undoInfos.length;for(let P=0;P<y;P++)this.undoInfos.unshift([])}loadLocalStorage(){this.undos=[];const f=localStorage.getItem("ghs-undo");if(null!=f){this.undos=JSON.parse(f);let I=1,et=localStorage.getItem("ghs-undo-"+I);for(;et;){const yt=JSON.parse(et);this.undos.push(...yt),I++,et=localStorage.getItem("ghs-undo-"+I)}}this.redos=[];const y=localStorage.getItem("ghs-redo");if(null!=y){this.redos=JSON.parse(y);let I=1,et=localStorage.getItem("ghs-redo-"+I);for(;et;){const yt=JSON.parse(et);this.redos.push(...yt),I++,et=localStorage.getItem("ghs-redo-"+I)}}this.undoInfos=[];const P=localStorage.getItem("ghs-undo-infos");if(null!=P){this.undoInfos=JSON.parse(P);let I=1,et=localStorage.getItem("ghs-undo-infos-"+I);for(;et;){const yt=JSON.parse(et);this.undoInfos.push(...yt),I++,et=localStorage.getItem("ghs-undo-infos-"+I)}}}saveLocalStorage(){this.clearLocalStorage();let f=250;if(this.undos.length<f)localStorage.setItem("ghs-undo",JSON.stringify(this.undos));else{let y=1;for(localStorage.setItem("ghs-undo",JSON.stringify(this.undos.slice(0,f)));this.undos.length>y*f;)localStorage.setItem("ghs-undo-"+y,JSON.stringify(this.undos.slice(y*f,y*f+f))),y++}if(this.redos.length<f)localStorage.setItem("ghs-redo",JSON.stringify(this.redos));else{let y=1;for(localStorage.setItem("ghs-redo",JSON.stringify(this.redos.slice(0,f)));this.redos.length>y*f;)localStorage.setItem("ghs-redo-"+y,JSON.stringify(this.redos.slice(y*f,y*f+f))),y++}if(f=1e3,this.undoInfos.length<f)localStorage.setItem("ghs-undo-infos",JSON.stringify(this.undoInfos));else{let y=1;for(localStorage.setItem("ghs-undo-infos",JSON.stringify(this.undoInfos.slice(0,f)));this.undoInfos.length>y*f;)localStorage.setItem("ghs-undo-infos-"+y,JSON.stringify(this.undoInfos.slice(y*f,y*f+f))),y++}}clearLocalStorage(){let f=1;for(localStorage.removeItem("ghs-undo");localStorage.getItem("ghs-undo-"+f);)localStorage.removeItem("ghs-undo-"+f);for(f=1,localStorage.removeItem("ghs-redo");localStorage.getItem("ghs-redo-"+f);)localStorage.removeItem("ghs-redo-"+f);for(f=1,localStorage.removeItem("ghs-undo-infos");localStorage.getItem("ghs-undo-infos-"+f);)localStorage.removeItem("ghs-undo-infos-"+f)}buildWsUrl(f,y,P){let I=y.split("/");const et=I[0];let yt="";return I.length>1&&(yt="/"+I.splice(1,I.length+1).join("/")),yt=f+et+":"+P+yt,yt}connect(){st.r.settings.serverUrl&&st.r.settings.serverPort&&st.r.settings.serverPassword&&(this.disconnect(),this.ws=new WebSocket(this.buildWsUrl(st.r.settings.serverWss?"wss://":"ws://",st.r.settings.serverUrl,st.r.settings.serverPort)),this.ws.onmessage=this.onMessage,this.ws.onopen=this.onOpen)}disconnect(){this.permissions=void 0,this.ws&&this.ws.readyState!=WebSocket.CLOSED&&this.ws.close()}onMessage(f){try{const y=JSON.parse(f.data);switch(y.type){case"game":window.document.body.classList.add("working");let P=y.payload;const I=y.undoinfo;I&&(I.length>0&&"serverSync"==I[0]?J.stateManager.before("serverSync",...I.slice(1)):J.stateManager.before("serverSync",...I)),J.game.fromModel(P,!0),J.stateManager.saveLocal(),J.uiChange.emit(),setTimeout(()=>{window.document.body.classList.remove("working")},1);break;case"settings":if(st.r.settings.serverSettings){let et=y.payload;et.serverUrl||(et.serverUrl=st.r.settings.serverUrl),et.serverPort||(et.serverPort=st.r.settings.serverPort),et.serverPassword||(et.serverPassword=st.r.settings.serverPassword),et.serverSettings||(et.serverSettings=st.r.settings.serverSettings),st.r.settings=et,localStorage.setItem("ghs-settings",JSON.stringify(st.r.settings))}break;case"permissions":J.stateManager.permissions=y.payload||void 0;break;case"error":console.warn("[GHS] Error: "+y.message),"Permission(s) missing"==y.message&&J.stateManager.undo(),y.message.startsWith("Invalid password")&&(console.warn("Disconnect..."),f.target?.close())}}catch(y){console.error("[GHS] "+f.data,y)}}onOpen(f){const y=f.target;y&&y.readyState==WebSocket.OPEN&&st.r.settings.serverPassword&&(y.send(JSON.stringify({password:st.r.settings.serverPassword,type:"request-game"})),st.r.settings.serverSettings&&y.send(JSON.stringify({password:st.r.settings.serverPassword,type:"request-settings"})))}requestSettings(){this.ws&&this.ws.readyState==WebSocket.OPEN&&st.r.settings.serverPassword&&st.r.settings.serverSettings&&this.ws.send(JSON.stringify({password:st.r.settings.serverPassword,type:"request-settings"}))}wsState(){return st.r.settings.serverUrl&&st.r.settings.serverPort&&st.r.settings.serverPassword?this.ws&&this.ws.readyState||-1:-99}reset(){this.game=new rt.lA,localStorage.removeItem("ghs-game"),this.clearLocalStorage()}saveLocal(){localStorage.setItem("ghs-game",JSON.stringify(this.game.toModel())),this.lastSaveTimestamp=(new Date).getTime()}saveSettings(){this.ws&&this.ws.readyState==WebSocket.OPEN&&st.r.settings.serverPassword&&st.r.settings.serverSettings&&this.ws.send(JSON.stringify({password:st.r.settings.serverPassword,type:"settings",payload:st.r.settings}))}before(...f){window.document.body.classList.add("working"),this.addToUndo(f||[])}after(f=1){if(this.saveLocal(),this.ws&&this.ws.readyState==WebSocket.OPEN&&st.r.settings.serverPassword){let y={password:st.r.settings.serverPassword,type:"game",payload:this.game.toModel(),undoinfo:this.undoInfos[this.undos.length-1]};this.ws.send(JSON.stringify(y))}J.uiChange.emit(),f?setTimeout(()=>{window.document.body.classList.remove("working")},f):window.document.body.classList.remove("working")}addToUndo(f){if(this.game.toModel()!=this.undos[this.undos.length-1]&&(this.undos.push(this.game.toModel()),this.undos.length>st.r.settings.maxUndo&&this.undos.splice(0,this.undos.length-st.r.settings.maxUndo),this.undoInfos.splice(this.undoInfos.length-this.redos.length,this.redos.length),this.undoInfos.push(f),this.undoInfos.length>this.undos.length&&this.undoInfos.splice(0,this.undoInfos.length-this.undos.length),this.redos=[],this.saveLocalStorage(),st.r.settings.browserNavigation)){const y="number"==typeof history.state?history.state+1:1;history.pushState(y,""),localStorage.setItem("ghs-popstate",""+y)}}hasUndo(){return this.undos.length>0}undo(){if(this.undos.length>0){window.document.body.classList.add("working"),this.redos.push(this.game.toModel());const f=this.undos.splice(this.undos.length-1,1)[0];this.game.fromModel(f),this.saveLocalStorage(),this.after()}}hasRedo(){return this.redos.length>0}redo(){if(this.redos.length>0){window.document.body.classList.add("working"),this.undos.push(this.game.toModel());const f=this.redos.splice(this.redos.length-1,1)[0];this.game.fromModel(f),this.saveLocalStorage(),this.after()}}savePermissions(f,y){this.ws&&this.ws.readyState==WebSocket.OPEN&&st.r.settings.serverPassword&&this.ws.send(JSON.stringify({password:st.r.settings.serverPassword,type:"permissions",payload:{permissions:y,password:f}}))}hasCharacterPermission(f){return null==this.permissions||this.permissions.characters||this.permissions.character.some(y=>y.name==f.name&&y.edition==f.edition)}hasMonsterPermission(f){return null==this.permissions||this.permissions.monsters||this.permissions.monster.some(y=>y.name==f.name&&y.edition==f.edition)}}class kt{constructor(f){this.game=f}changeHealth(f,y){this.changeHealthHighlightConditions(f,y),f.health+=y,f.health>f.maxHealth?f.health=(0,W.j9)(""+f.maxHealth):f.health<0&&(f.health=0)}changeHealthHighlightConditions(f,y){if(st.r.settings.applyConditions){f.entityConditions.filter(et=>et.name==X.fT.poison||et.name==X.fT.poison_x).forEach(et=>{et.highlight=y<0&&!et.expired});const P=f.entityConditions.find(et=>!et.expired&&et.name==X.fT.ward),I=f.entityConditions.find(et=>!et.expired&&et.name==X.fT.brittle);y<0&&P&&!I?(P.value-=y,P.highlight=!0):P&&(P.highlight=!1),y<0&&I&&!P?(I.value-=y,I.highlight=!0):I&&(I.highlight=!1),I&&P&&(I.highlight=!1,P.highlight=!1)}}hasCondition(f,y){return f.entityConditions.some(P=>P.name==y.name&&!P.expired)}activeConditions(f){return f.entityConditions.filter(y=>!y.expired)}isImmune(f,y,P){const I=f.stats.find(yt=>yt.level==y.level&&yt.type==y.type);let et=null!=I&&null!=I.immunities&&-1!=I.immunities.indexOf(P);if(!et){if(P==X.fT.wound_x)return this.isImmune(f,y,X.fT.wound);if(P==X.fT.poison_x)return this.isImmune(f,y,X.fT.poison);if(P==X.fT.rupture)return this.isImmune(f,y,X.fT.wound);if(P==X.fT.infect)return this.isImmune(f,y,X.fT.poison);if(P==X.fT.chill)return this.isImmune(f,y,X.fT.immobilize)||this.isImmune(f,y,X.fT.muddle)}return et}toggleCondition(f,y,P,I){if(this.hasCondition(f,y))f.entityConditions=f.entityConditions.filter(et=>et.name!=y.name);else{let et=f.entityConditions.find(yt=>yt.name==y.name);et?(et.expired=!1,et.state=X.tT.normal):(et=new X.hT(y.name,y.value),f.entityConditions.push(et)),P||-1==et.types.indexOf(X.CP.expire)?P&&-1!=et.types.indexOf(X.CP.turn)&&(et.state=X.tT.turn):et.state=X.tT.expire,I&&-1!=et.types.indexOf(X.CP.turn)&&(et.state=X.tT.expire)}}applyCondition(f,y){const P=f.entityConditions.find(I=>I.name==y&&!I.expired&&-1!=I.types.indexOf(X.CP.apply));P&&((P.name==X.fT.poison||P.name==X.fT.poison_x)&&(f.health-=P.value,f.health<0&&(f.health=0),0==f.health&&(f instanceof ie.g||f instanceof lt.eU)&&!f.dead&&(f.dead=!0),P.highlight=!1),P.name==X.fT.ward&&(f.health+=Math.floor((P.value-1)/2),f.health>(0,W.j9)(""+f.maxHealth)&&(f.health=(0,W.j9)(""+f.maxHealth)),f.health>0&&(f instanceof ie.g||f instanceof lt.eU)&&f.dead&&(f.dead=!1),P.value=1,P.expired=!0,P.highlight=!1),P.name==X.fT.brittle&&(f.health-=Math.floor((P.value-1)/2),f.health<0&&(f.health=0),0==f.health&&(f instanceof ie.g||f instanceof lt.eU)&&!f.dead&&(f.dead=!0),P.value=1,P.expired=!0,P.highlight=!1))}declineApplyCondition(f,y){const P=f.entityConditions.find(I=>I.name==y&&!I.expired&&-1!=I.types.indexOf(X.CP.apply));P&&(P.highlight=!1,P.name==X.fT.ward&&(P.value=1,P.expired=!0),P.name==X.fT.brittle&&(P.value=1,P.expired=!0))}restoreConditions(f){f.entityConditions.forEach(y=>{y.name==X.fT.chill&&(y.expired?y.expired=!1:y.value++),-1!=y.types.indexOf(X.CP.expire)&&(y.expired?y.expired=!1:y.state==X.tT.expire&&(y.state=X.tT.normal))})}expireConditions(f){f.entityConditions.forEach(y=>{y.name==X.fT.chill&&(1==y.value?y.expired=!0:y.value--)}),f.entityConditions.forEach(y=>{-1!=y.types.indexOf(X.CP.expire)&&(y.state==X.tT.normal?y.state=X.tT.expire:y.state==X.tT.expire&&(y.expired=!0))})}applyConditionsTurn(f){const y=f.entityConditions.find(P=>!P.expired&&P.state==X.tT.normal&&P.name==X.fT.regenerate);if(y){const P=f.entityConditions.every(I=>I.expired||-1==I.types.indexOf(X.CP.preventHeal))&&f.health<f.maxHealth;f.entityConditions.filter(I=>!I.expired&&-1!=I.types.indexOf(X.CP.clearHeal)).forEach(I=>I.expired=!0),P&&(y.state=X.tT.expire,f.health+=y.value,f.health>(0,W.j9)(""+f.maxHealth)&&(f.health=(0,W.j9)(""+f.maxHealth))),y.highlight=!0,setTimeout(()=>{y.highlight=!1},1e3)}f.entityConditions.filter(P=>!P.expired&&P.state==X.tT.normal&&-1!=P.types.indexOf(X.CP.turn)).forEach(P=>{P.state=X.tT.turn,(P.name==X.fT.wound||P.name==X.fT.wound_x)&&(f.health=f.health-P.value,f.health<0&&(f.health=0),0==f.health&&(f instanceof t.z||f instanceof E.C)&&!f.exhausted&&(f.exhausted=!0),0==f.health&&(f instanceof ie.g||f instanceof lt.eU)&&!f.dead&&(f.dead=!0),P.highlight=!0,setTimeout(()=>{P.highlight=!1},1e3))})}unapplyConditionsTurn(f){f.entityConditions.filter(P=>P.state==X.tT.turn&&-1!=P.types.indexOf(X.CP.turn)).forEach(P=>{P.expired?P.expired=!1:(P.state=X.tT.normal,(P.name==X.fT.wound||P.name==X.fT.wound_x)&&(f.health=f.health+P.value,f.health>(0,W.j9)(""+f.maxHealth)&&(f.health=(0,W.j9)(""+f.maxHealth)),f.health>0&&(f instanceof ie.g||f instanceof lt.eU)&&f.dead&&(f.dead=!1)))});const y=f.entityConditions.find(P=>P.name==X.fT.regenerate);if(y){const P=f.entityConditions.every(I=>-1==I.types.indexOf(X.CP.preventHeal))&&y.state==X.tT.expire;f.entityConditions.filter(I=>I.expired&&-1!=I.types.indexOf(X.CP.clearHeal)).forEach(I=>I.expired=!1),P&&(y.state=X.tT.normal,f.health-=y.value,f.health<0&&(f.health=0))}}applyConditionsAfter(f){const y=f.entityConditions.find(P=>!P.expired&&P.name==X.fT.bane);y&&(f.health=f.health-10,f.health<0&&(f.health=0),0==f.health&&(f instanceof ie.g||f instanceof lt.eU)&&!f.dead&&(f.dead=!0),y.expired=!0,y.highlight=!0,setTimeout(()=>{y.highlight=!1},1e3))}unapplyConditionsAfter(f){const y=f.entityConditions.find(P=>P.expired&&P.name==X.fT.bane);y&&(f.health=f.health+10,f.health>(0,W.j9)(""+f.maxHealth)&&(f.health=(0,W.j9)(""+f.maxHealth)),f.health>0&&(f instanceof ie.g||f instanceof lt.eU)&&f.dead&&(f.dead=!1),y.highlight=!1,y.expired=!1)}highlightedConditions(f){return f.entityConditions.filter(y=>y.highlight)}hasMarker(f,y){return f.markers&&-1!=f.markers.indexOf(y)}toggleMarker(f,y){this.hasMarker(f,y)?f.markers.splice(f.markers.indexOf(y),1):f.markers.push(y)}undoInfos(f,y,P){let I=[];return f instanceof t.z&&y instanceof t.z?I.push(P+".char","data.character."+f.name):f instanceof lt.eU&&y instanceof t.z?I.push(P+".summon","data.character."+y.name,"data.summon."+f.name):f instanceof E.C?I.push(P+".objective",f.title||f.name):y instanceof w.Q&&f instanceof ie.g&&I.push(P+".monster","data.monster."+y.name,"monster."+f.type,""+f.number),I}}var _t=D(1571);class xt{constructor(f){this.game=f}ge5PlayerOffset(){if(!this.game.ge5Player)return 0;const f=this.game.figures.filter(y=>y instanceof t.z&&!y.absent).length;return f<=4?0:f-3}adjustedLevel(){const f=this.game.level-this.ge5PlayerOffset()+this.game.bonusAdjustment;return f<0?0:f>7?7:f}trap(){return 2+this.game.level}experience(){return 4+2*this.adjustedLevel()}loot(){let f=2+Math.floor(this.adjustedLevel()/2);return this.adjustedLevel()>=7&&(f=6),f}terrain(){return 1+Math.ceil(this.game.level/3)}scenarioLevel(){const f=this.game.figures.filter(P=>P instanceof t.z&&!P.absent).length;if(0==f)return 0;const y=this.game.figures.filter(P=>P instanceof t.z&&!P.absent).map(P=>P.level).reduce((P,I)=>P+I);return Math.ceil((y/f+(this.game.solo?1:0))/2)+this.ge5PlayerOffset()}calculateScenarioLevel(){this.game.levelAdjustment>6?this.game.levelAdjustment=6:this.game.levelAdjustment<-6&&(this.game.levelAdjustment=-6);let f=this.scenarioLevel()+this.game.levelAdjustment;f>7?f=7:f<0&&(f=0),this.setLevel(f)}setLevel(f){this.game.level!=f&&(this.game.level=f,this.game.figures.forEach(y=>{y instanceof w.Q&&(y.level=f,y.entities.forEach(P=>{P.level=f}))}))}}class K{constructor(f){this.game=f}setScenario(f){if(this.game.scenario=f?new gt.$(f,f.custom):void 0,f&&!f.custom){const y=J.editionData.find(P=>P.edition==f.edition);if(!y)return void console.error("Could not find edition data!");J.roundManager.resetScenario(),this.applyScenarioData(y,f)}else f||J.roundManager.resetScenario()}finishScenario(f=!0){this.game.figures.forEach(y=>{y instanceof t.z&&(J.characterManager.addXP(y,(f?J.levelManager.experience():0)+y.experience),y.progress.gold+=y.loot*J.levelManager.loot())}),f&&this.game.party&&this.game.scenario&&(this.game.party.scenarios.push(new at._(this.game.scenario.index,this.game.scenario.edition,this.game.scenario.group,this.game.scenario.custom,this.game.scenario.custom?this.game.scenario.name:"")),this.game.party.manualScenarios=this.game.party.manualScenarios.filter(y=>this.game.scenario&&(this.game.scenario.index!=y.index||this.game.scenario.edition!=y.edition||this.game.scenario.group!=y.group))),this.game.scenario=void 0,this.game.sections=[],J.roundManager.resetScenario()}addSection(f){const y=J.editionData.find(P=>P.edition==f.edition);y?this.game.sections.some(P=>P.edition==f.edition&&P.index==f.index&&P.group==f.group)||(this.game.sections.push(f),this.applyScenarioData(y,f)):console.error("Could not find edition data!")}applyScenarioData(f,y){y.monsters&&y.monsters.forEach(P=>{const I=J.monstersData(!0).find(et=>et.name==P&&(et.edition==f.edition||f.extentions&&-1!=f.extentions.indexOf(et.edition)));if(I){let et=J.monsterManager.addMonster(I);y.allies&&-1!=y.allies.indexOf(et.name)&&(et.isAlly=!0)}else console.error("Monster not found: '"+P+"'")}),y.objectives&&y.objectives.forEach(P=>{J.characterManager.addObjective(P)})}scenarioData(f){const y=J.editionData.find(P=>P.edition==f);return y?this.game.party.campaignMode&&y.scenarios.some(P=>P.initial)?y.scenarios.filter(P=>{if(P.initial||this.game.party.scenarios.find(yt=>P.index==yt.index&&P.edition==yt.edition&&P.group==yt.group)||this.game.party.manualScenarios.find(yt=>P.index==yt.index&&P.edition==yt.edition&&P.group==yt.group))return!0;let I=!1,et=!P.requires||0==P.requires.length;return this.game.party.scenarios.forEach(yt=>{const Ot=y.scenarios.find(Zt=>Zt.index==yt.index&&Zt.edition==yt.edition&&Zt.group==yt.group);Ot&&Ot.group==P.group&&Ot.unlocks&&-1!=Ot.unlocks.indexOf(P.index)&&(I=!0)}),et||(et=P.requires.some(yt=>yt.every(Ot=>this.game.party.scenarios.find(Zt=>Zt.index==Ot&&Zt.group==P.group&&Zt.edition==P.edition)))),I&&et}):y.scenarios:[]}isBlocked(f){let y=!1;const P=J.editionData.find(I=>I.edition==f.edition);return P&&this.game.party.scenarios.forEach(I=>{const et=P.scenarios.find(yt=>yt.index==I.index&&yt.edition==I.edition&&yt.group==I.group);et&&et.blocks&&-1!=et.blocks.indexOf(f.index)&&(y=!0)}),y}scenarioUndoArgs(f){return(f=f||J.game.scenario)?[f.index,"data.scenario."+f.name,f.custom?"scenario.custom":"data.edition."+f.edition]:["","",""]}scenarioDataForModel(f){if(f.isCustom)return new at.t(f.custom,"",[],[],[],[],[],[],[],"");const y=J.scenarioData(!0).find(P=>P.index==f.index&&P.edition==f.edition&&P.group==f.group);if(y)return new at.t(y.name,y.index,y.unlocks,y.blocks,y.requires,y.links,y.monsters,y.allies,y.objectives,y.edition,y.group,y.spoiler);console.warn("Invalid scenario data:",f)}sectionDataForModel(f){const y=J.sectionData(!0).find(P=>P.index==f.index&&P.edition==f.edition&&P.group==f.group);if(y)return new at.t(y.name,y.index,y.unlocks,y.blocks,y.requires,y.links,y.monsters,y.allies,y.objectives,y.edition,y.group,y.spoiler);console.warn("Invalid section data:",f)}toModel(f,y=!1,P=""){return new at._(f.index,f.edition,f.group,y,P)}}var Y=D(4922);class ot{constructor(f){this.working=!1,this.game=f}nextAvailable(){return this.game.figures.length>0&&(this.game.state==rt.D2.next||this.game.figures.every(f=>f instanceof w.Q||f instanceof E.C&&(f.getInitiative()>0||f.exhausted||!st.r.settings.initiativeRequired)||f instanceof t.z&&(f.getInitiative()>0||f.exhausted||f.absent||!st.r.settings.initiativeRequired)))}nextGameState(){this.working=!0,this.game.totalSeconds+=this.game.playSeconds,this.game.playSeconds=0,this.game.state==rt.D2.next?(this.game.state=rt.D2.draw,J.characterManager.next(),J.monsterManager.next(),J.attackModifierManager.next(),st.r.settings.moveElements&&this.game.elementBoard.forEach(f=>{f.state==Y.fq.strong?f.state=Y.fq.waning:f.state==Y.fq.waning&&(f.state=Y.fq.inert)}),J.sortFigures(),this.game.figures.forEach(f=>f.active=!1)):this.nextAvailable()&&(0==this.game.round&&J.attackModifierManager.draw(),this.game.state=rt.D2.next,this.game.round++,J.characterManager.draw(),J.monsterManager.draw(),st.r.settings.moveElements&&this.game.elementBoard.forEach(f=>{f.state==Y.fq.new&&(f.state=Y.fq.strong)}),J.sortFigures(),this.game.figures.length>0&&this.toggleFigure(this.game.figures[0])),J.uiChange.emit(),setTimeout(()=>this.working=!1,1)}toggleFigure(f){const y=this.game.figures,P=y.indexOf(f);if(-1!=P){f.active||f.off?f.active&&!f.off?this.afterTurn(f):y.some((I,et)=>et<P&&I.active)?this.beforeTurn(f):f.active=!0:this.turn(f),this.permanentDead(f)&&this.afterTurn(f);for(let I=0;I<y.length;I++){const et=y[I];f.active&&(I!=P&&(et.active=!1),I<P?this.afterTurn(et):(!(et instanceof w.Q)||et instanceof w.Q&&et.entities.length>0)&&this.beforeTurn(et)),f.off&&!this.permanentDead(et)&&(I<P&&!et.off&&!y.some(yt=>yt.active)?this.turn(et):I>P&&(!(et instanceof w.Q)||et instanceof w.Q&&et.entities.length>0)&&(!et.off&&I>P&&!y.some((yt,Ot)=>yt.active&&Ot<I)?this.turn(et):et.active=!1))}}else console.error("Invalid figure")}beforeTurn(f){f.off?(f.off=!1,f instanceof w.Q&&f.entities.forEach(y=>{y.active=f.active&&!y.off}),st.r.settings.expireConditions&&(f instanceof t.z?(J.entityManager.restoreConditions(f),f.summons.forEach(y=>{J.entityManager.restoreConditions(y)})):f instanceof E.C?J.entityManager.restoreConditions(f):f instanceof w.Q&&f.entities.forEach(y=>{J.entityManager.restoreConditions(y)}))):f instanceof w.Q&&f.entities.forEach(y=>{y.active=f.active,y.off=!1}),st.r.settings.applyConditions&&(f.active||(f instanceof t.z?(J.entityManager.unapplyConditionsTurn(f),f.summons.forEach(y=>{J.entityManager.unapplyConditionsTurn(y)})):f instanceof E.C?J.entityManager.unapplyConditionsTurn(f):f instanceof w.Q&&f.entities.forEach(y=>{J.entityManager.unapplyConditionsTurn(y)}))),st.r.settings.applyConditions&&(f instanceof t.z?(J.entityManager.unapplyConditionsAfter(f),f.summons.forEach(y=>{J.entityManager.unapplyConditionsAfter(y)})):f instanceof E.C?J.entityManager.unapplyConditionsAfter(f):f instanceof w.Q&&f.entities.forEach(y=>{J.entityManager.unapplyConditionsAfter(y)}),f.off&&!this.permanentDead(f)&&(f.off=!1))}turn(f){f.active=!0,f instanceof w.Q&&f.entities.every(y=>!y.off)&&f.entities.forEach(y=>{y.active=!0}),this.game.elementBoard.forEach(y=>{y.state==Y.fq.new&&(y.state=Y.fq.strong)}),st.r.settings.applyConditions&&(f instanceof t.z?(J.entityManager.applyConditionsTurn(f),f.summons.forEach(y=>{J.entityManager.applyConditionsTurn(y)}),f.exhausted&&this.toggleFigure(f)):f instanceof E.C?(J.entityManager.applyConditionsTurn(f),f.exhausted&&this.toggleFigure(f)):f instanceof w.Q&&(f.entities.forEach(y=>{J.entityManager.applyConditionsTurn(y)}),f.entities.every(y=>y.dead)&&this.toggleFigure(f)))}afterTurn(f){if(!f.off)if(f.off=!0,f.active=!1,f instanceof w.Q&&f.entities.forEach(y=>{y.active=!1,y.off=!0}),st.r.settings.expireConditions&&(f instanceof t.z?(J.entityManager.expireConditions(f),f.summons.forEach(y=>{J.entityManager.expireConditions(y)})):f instanceof E.C?J.entityManager.expireConditions(f):f instanceof w.Q&&f.entities.forEach(y=>{J.entityManager.expireConditions(y)})),st.r.settings.applyConditions&&(f instanceof t.z?(J.entityManager.applyConditionsTurn(f),f.summons.forEach(y=>{J.entityManager.applyConditionsTurn(y)})):f instanceof E.C?J.entityManager.applyConditionsTurn(f):f instanceof w.Q&&f.entities.forEach(y=>{J.entityManager.applyConditionsTurn(y)}),f instanceof t.z?(J.entityManager.applyConditionsAfter(f),f.summons.forEach(y=>{J.entityManager.applyConditionsAfter(y)})):f instanceof E.C?J.entityManager.applyConditionsAfter(f):f instanceof w.Q&&f.entities.forEach(y=>{J.entityManager.applyConditionsAfter(y)})),f instanceof t.z)for(let y of f.summons)y.state==lt.HY.new&&(y.state=lt.HY.true);else f instanceof w.Q&&f.entities.forEach(y=>{y.summon==lt.HY.new&&(y.summon=lt.HY.true)})}permanentDead(f){return(f instanceof t.z||f instanceof E.C)&&(f.exhausted||f.health<=0)||f instanceof w.Q&&f.entities.every(y=>y.dead||y.health<=0)}resetScenario(){this.game.playSeconds=0,this.game.sections=[],this.game.round=0,this.game.state=rt.D2.draw,this.game.elementBoard.forEach(f=>f.state=Y.fq.inert),this.game.monsterAttackModifierDeck=new R.ut,this.game.figures=this.game.figures.filter(f=>f instanceof t.z),this.game.figures.forEach(f=>{f instanceof t.z&&(f.health=f.maxHealth,f.loot=0,f.experience=0,f.entityConditions=[],f.summons=[],f.initiative=0,f.active=!1,f.off=!1,f.exhausted=!1,f.absent=!1,f.availableSummons.filter(y=>y.special).forEach(y=>J.characterManager.createSpecialSummon(f,y)),f.attackModifierDeck=J.attackModifierManager.buildCharacterAttackModifierDeck(f),J.characterManager.applyDonations(f))}),J.uiChange.emit()}}const J=new class tt{constructor(){this.game=new rt.lA,this.editionData=[],this.uiChange=new _t.vpe,this.stateManager=new oe(this.game),this.entityManager=new kt(this.game),this.characterManager=new Ct(this.game),this.monsterManager=new Lt(this.game),this.attackModifierManager=new ct(this.game),this.levelManager=new xt(this.game),this.scenarioManager=new K(this.game),this.roundManager=new ot(this.game),this.uiChange.subscribe({next:()=>{this.game.levelCalculation&&this.levelManager.calculateScenarioLevel()}})}editions(){return this.editionData.map(f=>f.edition)}currentEditions(){return this.game.edition?[this.game.edition,...this.editionExtensions(this.game.edition)]:this.editions()}editionExtensions(f){const y=this.editionData.find(P=>P.edition==f);return y&&y.extentions||[]}charactersData(f=!1){return this.editionData.filter(y=>f||!this.game.edition||y.edition==this.game.edition||y.extentions&&-1!=y.extentions.indexOf(this.game.edition)).map(y=>y.characters).flat().filter((y,P,I)=>y.replace||!y.replace&&!I.find(et=>et.replace&&et.name==y.name&&et.edition==y.edition))}monstersData(f=!1){return this.editionData.filter(y=>f||!this.game.edition||y.edition==this.game.edition||y.extentions&&-1!=y.extentions.indexOf(this.game.edition)).map(y=>y.monsters).flat().filter((y,P,I)=>y.replace||!y.replace&&!I.find(et=>et.replace&&et.name==y.name&&et.edition==y.edition))}decksData(f=!1){return this.editionData.filter(y=>f||!this.game.edition||y.edition==this.game.edition||y.extentions&&-1!=y.extentions.indexOf(this.game.edition)).map(y=>y.decks).flat()}scenarioData(f=!1){return this.editionData.filter(y=>f||!this.game.edition||y.edition==this.game.edition||y.extentions&&-1!=y.extentions.indexOf(this.game.edition)).map(y=>y.scenarios).flat()}sectionData(f=!1){return this.editionData.filter(y=>f||!this.game.edition||y.edition==this.game.edition||y.extentions&&-1!=y.extentions.indexOf(this.game.edition)).map(y=>y.sections).flat()}itemData(f=!1){return this.editionData.filter(y=>f||!this.game.edition||y.edition==this.game.edition||y.extentions&&-1!=y.extentions.indexOf(this.game.edition)).map(y=>y.items).flat()}item(f,y){return this.itemData(!0).find(P=>P&&P.id==f&&P.edition==y)}hazardousTerrain(){return!!this.game.edition&&this.editionData.some(f=>f.edition==this.game.edition&&f.hazardousTerrain)}conditions(f=!1){if(f||!this.game.edition)return X.G3;const y=this.editionData.find(P=>P.edition==this.game.edition);return y&&y.conditions?y.conditions.map(P=>P.split(":").length>1?new X.gP(P.split(":")[0],+P.split(":")[1]):new X.gP(P)):[]}conditionsForTypes(...f){return this.conditions(!1).filter(y=>f.every(P=>-1!=y.types.indexOf(P)))}allConditionsForTypes(...f){return this.conditions(!0).filter(y=>f.every(P=>-1!=y.types.indexOf(P)))}markers(){return this.game.figures.filter(f=>f instanceof t.z&&f.marker).map(f=>f.edition+"-"+f.name)}sortFigures(){this.game.figures.sort((f,y)=>this.game.state==rt.D2.draw?this.sortFiguresByTypeAndName(f,y):st.r.settings.initiativeRequired?f.getInitiative()==y.getInitiative()?this.sortFiguresByTypeAndName(f,y):f.getInitiative()-y.getInitiative():0)}sortFiguresByTypeAndName(f,y){let P=f.name.toLowerCase();f instanceof t.z?P=f.title.toLowerCase()||st.r.getLabel("data.character."+f.name).toLowerCase():f instanceof w.Q?P=st.r.getLabel("data.monster."+f.name).toLowerCase():f instanceof E.C&&(P=f.title?f.title:st.r.getLabel(f.name?"data.objective."+f.name:f.escort?"escort":"objective").toLowerCase());let I=y.name.toLowerCase();return y instanceof t.z?I=y.title.toLowerCase()||st.r.getLabel("data.character."+y.name).toLowerCase():y instanceof w.Q?I=st.r.getLabel("data.monster."+y.name).toLowerCase():y instanceof E.C&&(I=y.title?y.title:st.r.getLabel(y.name?"data.objective."+y.name:y.escort?"escort":"objective").toLowerCase()),f instanceof t.z&&y instanceof w.Q?-1:f instanceof w.Q&&y instanceof t.z?1:f instanceof t.z&&y instanceof E.C?-1:f instanceof E.C&&y instanceof t.z?1:f instanceof w.Q&&y instanceof E.C?-1:f instanceof E.C&&y instanceof w.Q?1:f instanceof w.Q&&y instanceof w.Q?0:P<I?-1:1}deckData(f){let y=this.decksData(!0).find(P=>(P.name==f.deck||P.name==f.name)&&P.edition==f.edition);return y||(y=this.decksData(!0).find(P=>(P.name==f.deck||P.name==f.name)&&-1!=this.editionExtensions(f.edition).indexOf(P.edition))),y||(f.errors=f.errors||[],!f.errors.find(P=>P.type==H.r.unknown)&&!f.errors.find(P=>P.type==H.r.deck)&&(console.error("Unknwon deck: "+f.name+(f.deck?"["+f.deck+"]":"")+" for "+f.edition),f.errors.push(new H.o(H.r.deck,f instanceof t.z?"character":"monster",f.name,f.edition,f.deck))),new B.x("",[],""))}abilities(f){return this.deckData(f).abilities||[]}getCharacterData(f,y){let P=this.charactersData(!0).find(I=>I.name==f&&I.edition==y);return P||(P=this.charactersData(!0).find(I=>I.name==f),P||(P=new V.x,P.name=f,P.edition=y,P.errors=P.errors||[],P.errors.find(I=>I.type==H.r.unknown)||(console.error("unknown character '"+f+"' for edition '"+y+"'"),P.errors.push(new H.o(H.r.unknown,"character",f,y)))),P)}isCharacter(f){return f instanceof t.z}isObjective(f){return f instanceof E.C}isMonster(f){return f instanceof w.Q}isMonsterEntity(f){return f instanceof ie.g}isSummon(f){return f instanceof lt.eU}toCharacter(f){return f}toObjective(f){return f}toMonster(f){return f}toMonsterEntity(f){return f}toSummon(f){return f}getEdition(f){return this.game.figures.some(y=>typeof f==typeof y&&f.name==y.name&&f.edition!=y.edition||this.game.edition&&f.edition!=this.game.edition)?f.edition:""}getMonsterData(f,y){let P=this.monstersData(!0).find(I=>I.name==f&&I.edition==y);return P||(P=this.monstersData(!0).find(I=>I.name==f),P||(P=new $.A(f,0,new S.c(U.M.normal,0,0,0,0,0),[],""),P.errors=P.errors||[],P.name=f,P.edition=y,P.errors.find(I=>I.type==H.r.unknown)||(console.error("unknown monster '"+f+"' for edition '"+y+"'"),P.errors.push(new H.o(H.r.unknown,"monster",f,y)))),P)}}},554:(bt,it,D)=>{D.d(it,{r:()=>H});var t=D(5861),V=D(3692),B=D(1188);const H=new class ${constructor(){this.defaultLocale="en",this.defaultEditionDataUrls=["./assets/data/gh.json","./assets/data/jotl.json","./assets/data/fc.json","./assets/data/fh.json","./assets/data/cs.json"],this.settings=new V.Z,this.label={},this.locales=["en","de","fr"],this.loadSettings()}reset(){localStorage.removeItem("ghs-settings"),this.loadSettings()}loadSettings(){var w=this;return(0,t.Z)(function*(){const S=localStorage.getItem("ghs-settings");if(null!=S)w.settings=Object.assign(new V.Z,JSON.parse(S));else try{yield fetch("./ghs-settings-default.json").then(U=>{if(!U.ok)throw Error();return U.json()}).then(U=>{w.settings=Object.assign(new V.Z,U)})}catch{w.settings=new V.Z}w.setLocale(w.settings.locale),w.sortSpoilers()})()}init(){var w=this;return(0,t.Z)(function*(){for(let S of w.defaultEditionDataUrls)-1==H.settings.editionDataUrls.indexOf(S)&&-1==H.settings.excludeEditionDataUrls.indexOf(S)&&H.settings.editionDataUrls.push(S);for(let S of H.settings.editionDataUrls)yield H.loadEditionData(S)})()}storeSettings(){localStorage.setItem("ghs-settings",JSON.stringify(this.settings)),this.settings.serverSettings&&B.v.stateManager.saveSettings(),B.v.uiChange.emit()}setCalculate(w){this.settings.calculate=w,this.storeSettings()}setCalculateStats(w){this.settings.calculateStats=w,this.storeSettings()}setAbilityNumbers(w){this.settings.abilityNumbers=w,this.storeSettings()}setEliteFirst(w){this.settings.eliteFirst=w,this.storeSettings()}setExpireConditions(w){this.settings.expireConditions=w,this.storeSettings()}setApplyConditions(w){this.settings.applyConditions=w,this.storeSettings()}setActiveApplyConditions(w){this.settings.activeApplyConditions=w,this.storeSettings()}setMoveElements(w){this.settings.moveElements=w,this.storeSettings()}setHideStats(w){this.settings.hideStats=w,this.storeSettings()}setRandomStandees(w){this.settings.randomStandees=w,this.storeSettings()}setActiveStandees(w){this.settings.activeStandees=w,this.storeSettings()}setAllyAttackModifierDeck(w){this.settings.allyAttackModifierDeck=w,this.storeSettings()}setInitiativeRequired(w){this.settings.initiativeRequired=w,this.storeSettings()}setDisableStandees(w){this.settings.disableStandees=w,this.storeSettings()}setDragValues(w){this.settings.dragValues=w,this.storeSettings()}setHideAbsent(w){this.settings.hideAbsent=w,this.storeSettings()}setFullscreen(w){this.settings.fullscreen=w,this.storeSettings()}setFhStyle(w){this.settings.fhStyle=w,this.storeSettings()}setDisableColumns(w){this.settings.disableColumns=w,this.storeSettings()}setAutoscroll(w){this.settings.autoscroll=w,this.storeSettings()}setHints(w){this.settings.hints=w,this.storeSettings()}setBrowserNavigation(w){this.settings.browserNavigation=w,this.storeSettings()}setZoom(w){this.settings.zoom=w,this.storeSettings()}setBarsize(w){this.settings.barsize=w,this.storeSettings()}setFontsize(w){this.settings.fontsize=w,this.storeSettings()}setServerAutoconnect(w){this.settings.serverAutoconnect=w,this.storeSettings()}setServerSettings(w){this.settings.serverSettings=w,w?B.v.stateManager.requestSettings():this.storeSettings()}setServerWss(w){this.settings.serverWss=w,this.storeSettings()}setServer(w,S,U){this.settings.serverUrl=w,this.settings.serverPort=S,this.settings.serverPassword=U,this.storeSettings()}setMaxUndo(w){this.settings.maxUndo=w,this.storeSettings()}setDebugRightClick(w){this.settings.debugRightClick=w,this.storeSettings()}addSpoiler(w){-1==this.settings.spoilers.indexOf(w)&&(this.settings.spoilers.push(w),this.sortSpoilers(),this.storeSettings())}addSpoilers(w){for(let S of w)-1==this.settings.spoilers.indexOf(S.name)&&this.settings.spoilers.push(S.name);this.storeSettings()}removeSpoiler(w){-1!=this.settings.spoilers.indexOf(w)&&(this.settings.spoilers.splice(this.settings.spoilers.indexOf(w),1),this.storeSettings())}removeAllSpoilers(){this.settings.spoilers=[],this.storeSettings()}sortSpoilers(){this.settings.spoilers.sort((w,S)=>w.toLowerCase()>S.toLowerCase()?1:w.toLowerCase()<S.toLowerCase()?-1:0)}cleanEditionData(){B.v.editionData=[]}loadEditionData(w){var S=this;return(0,t.Z)(function*(){try{return yield fetch(w).then(E=>{if(E.ok)return E.json();console.warn("Invalid data url: "+w+" ["+E.statusText+"]")}).then(E=>-1!=B.v.editions().indexOf(E.edition)?(console.warn("Edition already exists: "+E.edition),!1):(E.url=w,B.v.editionData.push(E),S.loadDataLabel(E),!0))}catch(U){return console.warn("Invalid data url: "+w+" ["+U+"]"),!1}})()}loadDataLabel(w){this.label.data||(this.label.data={}),this.settings.locale!=this.defaultLocale&&w.label&&w.label[this.defaultLocale]&&(this.label.data=this.merge(this.label.data,w.label[this.defaultLocale]),w.labelSpoiler&&w.labelSpoiler[this.defaultLocale]&&(this.label.data=this.merge(this.label.data,w.labelSpoiler[this.defaultLocale]))),w.label&&w.label[this.settings.locale]&&(this.label.data=this.merge(this.label.data,w.label[this.settings.locale])),w.labelSpoiler&&w.labelSpoiler[this.settings.locale]&&(this.label.data=this.merge(this.label.data,w.labelSpoiler[this.settings.locale])),this.label.data.edition||(this.label.data.edition={}),this.label.data.character||(this.label.data.character={}),this.label.data.monster||(this.label.data.monster={}),this.label.data.deck||(this.label.data.deck={}),this.label.data.ability||(this.label.data.ability={}),this.label.data.scenario||(this.label.data.scenario={}),this.label.data.section||(this.label.data.section={}),this.label.data.objective||(this.label.data.objective={}),this.label.data.summon||(this.label.data.summon={})}isObject(w){return w&&"object"==typeof w&&!Array.isArray(w)}merge(w,...S){if(!S.length)return w;const U=w;if(this.isObject(U)){const E=S.length;for(let R=0;R<E;R+=1){const F=S[R];if(this.isObject(F))for(const ct in F)F.hasOwnProperty(ct)&&(this.isObject(F[ct])?((!U[ct]||!this.isObject(U[ct]))&&(U[ct]={}),this.merge(U[ct],F[ct])):U[ct]=Array.isArray(U[ct])&&Array.isArray(F[ct])?Array.from(new Set(U[ct].concat(F[ct]))):F[ct])}}return U}getEditionByUrl(w){if(B.v.editionData.some(S=>S.url==w))return B.v.editionData.find(S=>S.url==w)?.edition;console.error("No edition data found for url '"+w+"'")}addEditionDataUrl(w){var S=this;return(0,t.Z)(function*(){return!(-1!=S.settings.editionDataUrls.indexOf(w)||!(yield S.loadEditionData(w))||(S.settings.editionDataUrls.push(w),-1!=S.settings.excludeEditionDataUrls.indexOf(w)&&S.settings.excludeEditionDataUrls.splice(S.settings.excludeEditionDataUrls.indexOf(w),1),S.storeSettings(),0))})()}removeEditionDataUrl(w){var S=this;return(0,t.Z)(function*(){-1!=S.settings.editionDataUrls.indexOf(w)&&(B.v.editionData=B.v.editionData.filter(U=>U.url!=w),S.settings.editionDataUrls.splice(S.settings.editionDataUrls.indexOf(w),1),-1!=S.defaultEditionDataUrls.indexOf(w)&&S.settings.excludeEditionDataUrls.push(w),S.storeSettings())})()}restoreDefaultEditionDataUrls(){var w=this;return(0,t.Z)(function*(){for(let S of w.defaultEditionDataUrls)-1==w.settings.editionDataUrls.indexOf(S)&&(w.settings.editionDataUrls.push(S),yield w.loadEditionData(S));w.storeSettings()})()}setLocale(w){var S=this;return(0,t.Z)(function*(){w!=S.defaultLocale&&(yield fetch("./assets/locales/"+S.defaultLocale+".json").then(U=>U.json()).then(U=>{S.label=S.merge(S.label,U)}).catch(U=>{console.error("Invalid locale: "+w,U)})),yield fetch("./assets/locales/"+w+".json").then(U=>(S.settings.locale=w,U.json())).then(U=>{S.label=S.merge(S.label,U),S.storeSettings()}).catch(U=>{console.error("Invalid locale: "+w,U)}),S.label.data={};for(let U of B.v.editionData)S.loadDataLabel(U)})()}getLabel(w,S=[],U=!0,E=this.label,R="",F=!1){if(w+="",!E)return F?this.emptyLabel(w,S,R):R&&w?this.getLabel(w):w||"";if(E[w])return"object"==typeof E[w]?E[w]["."]?this.insertLabelArguments(E[w]["."],S,U):F?this.emptyLabel(w,S,R):R&&w?this.getLabel(w):w||"":this.insertLabelArguments(E[w],S,U);{let ct=w.split(".");if(E[ct[0]])return w=ct.slice(1,ct.length).join("."),this.getLabel(w,S,U,E[ct[0]],R+ct[0]+".",F)}return F?this.emptyLabel(w,S,R):R&&w?this.getLabel(w):w||""}emptyLabel(w,S,U){return(U?U+(U.endsWith(".")?"":"."):"")+w+(S&&S.length>0?" ["+S+"]":"")}insertLabelArguments(w,S,U){if(S)for(let E in S)for(;-1!=w.indexOf(`{${E}}`);)w=w.replace(`{${E}}`,U?this.getLabel(S[E]):S[E]);return w}}},62:(bt,it,D)=>{D.d(it,{UO:()=>rt,US:()=>$,YY:()=>B,fy:()=>U,kl:()=>t,tI:()=>V,u$:()=>w,ut:()=>S});var t=(()=>{return(E=t||(t={})).plus0="plus0",E.plus1="plus1",E.plus2="plus2",E.plus3="plus3",E.plus4="plus4",E.minus1="minus1",E.minus2="minus2",E.null="null",E.double="double",E.bless="bless",E.curse="curse",E.invalid="invalid",t;var E})(),V=(()=>{return(E=V||(V={})).plus="plus",E.minus="minus",E.multiply="multiply",V;var E})();class B{constructor(R,F,ct=[],z=!1){switch(this.value=0,this.valueType=V.plus,this.shuffle=!1,this.revealed=!1,this.character=!1,this.type=R,this.id=F||R,this.effects=ct,this.rolling=z,R){case t.plus0:this.value=0;break;case t.plus1:this.value=1;break;case t.plus2:this.value=2;break;case t.plus3:this.value=3;break;case t.plus4:this.value=4;break;case t.minus1:this.valueType=V.minus,this.value=1;break;case t.minus2:this.valueType=V.minus,this.value=2;break;case t.null:this.valueType=V.multiply,this.value=0,this.shuffle=!0;break;case t.double:this.valueType=V.multiply,this.value=2,this.shuffle=!0;break;case t.bless:this.valueType=V.multiply,this.value=2;break;case t.curse:this.valueType=V.multiply,this.value=0}}}var $=(()=>{return(E=$||($={})).condition="condition",E.custom="custom",E.element="element",E.elementHalf="elementHalf",E.heal="heal",E.pierce="pierce",E.pull="pull",E.push="push",E.range="range",E.refreshItem="refreshItem",E.retaliate="retaliate",E.shield="shield",E.specialTarget="specialTarget",E.summon="summon",E.swing="swing",E.target="target",$;var E})();const rt=[new B(t.plus0),new B(t.plus1),new B(t.minus1),new B(t.plus2),new B(t.minus2),new B(t.double),new B(t.null),new B(t.bless),new B(t.curse)],w=[t.plus0,t.plus0,t.plus0,t.plus0,t.plus0,t.plus0,t.plus1,t.plus1,t.plus1,t.plus1,t.plus1,t.minus1,t.minus1,t.minus1,t.minus1,t.minus1,t.plus2,t.minus2,t.double,t.null];class S{constructor(){this.attackModifiers=JSON.parse(JSON.stringify(rt)),this.current=-1,this.cards=w.map(R=>this.cardById(R)||new B(t.invalid))}cardById(R){let F=this.attackModifiers.find(ct=>ct.id==R);if(F)return JSON.parse(JSON.stringify(F))}toModel(){return new U(this.current,this.cards.map(R=>R&&R.id||""))}fromModel(R){R.current!=this.current&&(this.current=+R.current),this.cards=R.cards.map(F=>this.cardById(F)||new B(t.invalid))}}class U{constructor(R,F){this.current=R,this.cards=F}}},641:(bt,it,D)=>{D.d(it,{z:()=>U});var t=D(6998),V=D(2713),B=D(2679),$=D(1188),H=D(1412),rt=D(8557),w=D(5205),S=D(62);class U extends V.x{constructor(F,ct){super(F),this.title="",this.initiative=0,this.experience=0,this.loot=0,this.exhausted=!1,this.summons=[],this.donations=0,this.initiativeVisible=!1,this.attackModifierDeckVisible=!1,this.fullview=!1,this.number=0,this.absent=!1,this.off=!1,this.active=!1,this.entityConditions=[],this.markers=[],this.errors=F.errors||[],ct<1?ct=1:ct>9&&(ct=9);const z=this.stats.find(X=>X.level==ct);z?(this.stat=z,this.level=ct,this.maxHealth=this.stat.health):(!this.errors.find(X=>X.type==H.r.unknown)&&!this.errors.find(X=>X.type==H.r.stat)&&(console.error("No character stat found for level: "+ct),this.errors.push(new H.o(H.r.stat,"character",F.name,F.edition,"",""+ct))),this.stat=new t.a(ct,0),this.level=0,this.maxHealth=0),this.health=this.maxHealth,this.progress=new w.f,"jotl"!=this.edition&&0==this.progress.gold&&(this.progress.gold=15*(this.level+1)),this.attackModifierDeck=$.v.attackModifierManager.buildCharacterAttackModifierDeck(this)}getInitiative(){return this.absent?200:this.exhausted||this.health<=0?100:this.initiative}toModel(){return new E(this.name,this.edition,this.marker,this.title,this.initiative,this.experience,this.loot,this.exhausted,this.level,this.off,this.active,this.health,this.maxHealth,this.entityConditions.map(F=>F.toModel()),this.markers,this.summons.map(F=>F.toModel()),this.progress,this.initiativeVisible,this.attackModifierDeckVisible,this.fullview,this.number,this.attackModifierDeck.toModel(),this.donations,this.absent)}fromModel(F){if(this.edition=F.edition,!this.edition){const z=$.v.charactersData(!0).find(X=>X.name==F.name);this.edition=z?z.edition:""}if(this.marker=F.marker||this.marker,this.title=F.title,(!this.initiativeVisible||F.initiative<=0||this.initiative!=F.initiative)&&(this.initiativeVisible=F.initiativeVisible),F.number)this.number=F.number;else for(this.number=1;$.v.game.figures.some(z=>z instanceof U&&(z.name!=this.name||z.edition!=this.edition)&&z.number==this.number);)this.number++;this.initiative=F.initiative,this.experience=F.experience,this.loot=F.loot,this.exhausted=F.exhausted,this.level=F.level,this.off=F.off,this.active=F.active,this.health=F.health,this.maxHealth=F.maxHealth,this.entityConditions=[],F.entityConditions&&(this.entityConditions=F.entityConditions.map(z=>{let X=new rt.hT(z.name,z.value);return X.fromModel(z),X})),this.markers=F.markers,this.summons=this.summons.filter(z=>{let X=!1;return F.summons.forEach(W=>{W.number!=z.number||W.color!=z.color||(X=!0)}),X}),F.summons.forEach(z=>{let X=this.summons.find(W=>W.name==W.name&&W.number==z.number&&W.color==z.color);X||(X=new B.eU(z.name,z.level,z.number,z.color),this.summons.push(X)),X.fromModel(z)}),this.progress=new w.f,F.progress&&(this.progress=Object.assign(new w.f,F.progress)),this.progress.loot&&!this.progress.gold&&(this.progress.gold=this.progress.loot,this.progress.loot=0);let ct=$.v.attackModifierManager.buildCharacterAttackModifierDeck(this);F.attackModifierDeck&&ct.fromModel(F.attackModifierDeck),this.mergeAttackModifierDeck(ct),F.attackModifierDeckVisible&&(this.attackModifierDeckVisible=!0),this.fullview=F.fullview,this.donations=F.donations||0,this.absent=F.absent}mergeAttackModifierDeck(F){let ct=!1;return this.attackModifierDeck||(this.attackModifierDeck=new S.ut,ct=!0),this.attackModifierDeck.current!=F.current&&(this.attackModifierDeck.current=F.current,ct=!0),(this.attackModifierDeck.attackModifiers.length!=F.attackModifiers.length||!this.attackModifierDeck.attackModifiers.map(z=>z.id).every((z,X)=>F.attackModifiers[X].id==z))&&(this.attackModifierDeck.attackModifiers=F.attackModifiers,ct=!0),(this.attackModifierDeck.cards.length!=F.cards.length||!this.attackModifierDeck.cards.map(z=>z.id).every((z,X)=>F.cards[X].id==z))&&(this.attackModifierDeck.cards=F.cards,ct=!0),ct}}class E{constructor(F,ct,z,X,W,lt,st,Ct,ie,gt,at,Lt,oe,kt,_t,xt,K,Y,ot,tt,J,ft,f,y){this.name=F,this.edition=ct,this.marker=z,this.title=X,this.initiative=W,this.experience=lt,this.loot=st,this.exhausted=Ct,this.level=ie,this.off=gt,this.active=at,this.health=Lt,this.maxHealth=oe,this.entityConditions=JSON.parse(JSON.stringify(kt)),this.markers=_t,this.summons=xt,this.progress=JSON.parse(JSON.stringify(K)),this.initiativeVisible=Y,this.attackModifierDeckVisible=ot,this.fullview=tt,this.number=J,this.attackModifierDeck=ft,this.donations=f,this.absent=y}}},5205:(bt,it,D)=>{D.d(it,{f:()=>t});class t{constructor(){this.experience=0,this.gold=0,this.loot=0,this.items=[],this.personalQuest=0,this.battleGoals=0,this.notes="",this.retired=!1,this.retirements=0,this.perks=[],this.donations=0}}},6998:(bt,it,D)=>{D.d(it,{a:()=>t});class t{constructor(B,$){this.level=B,this.health=$}}},8557:(bt,it,D)=>{D.d(it,{CP:()=>V,G3:()=>w,fT:()=>t,gP:()=>$,hT:()=>H,tT:()=>B});var t=(()=>{return(S=t||(t={})).stun="stun",S.immobilize="immobilize",S.disarm="disarm",S.wound="wound",S.muddle="muddle",S.poison="poison",S.invisible="invisible",S.strengthen="strengthen",S.curse="curse",S.bless="bless",S.regenerate="regenerate",S.chill="chill",S.infect="infect",S.ward="ward",S.bane="bane",S.brittle="brittle",S.impair="impair",S.rupture="rupture",S.poison_x="poison_x",S.wound_x="wound_x",t;var S})(),V=(()=>{return(S=V||(V={})).action="action",S.standard="standard",S.entity="entity",S.character="character",S.monster="monster",S.upgrade="upgrade",S.stack="stack",S.turn="turn",S.expire="expire",S.value="value",S.clearHeal="clearHeal",S.preventHeal="preventHeal",S.apply="apply",S.positive="positive",S.negative="negative",V;var S})(),B=(()=>{return(S=B||(B={})).normal="normal",S.expire="expire",S.turn="turn",B;var S})();class ${constructor(U,E=1){this.types=[],this.value=1,this.name=U,this.value=E,this.types.push(V.action),-1!=[t.stun,t.immobilize,t.disarm,t.wound,t.muddle,t.poison,t.invisible,t.strengthen,t.regenerate,t.infect,t.bane,t.brittle,t.ward,t.rupture,t.poison_x,t.wound_x].indexOf(this.name)&&this.types.push(V.entity),-1!=[t.stun,t.immobilize,t.disarm,t.wound,t.muddle,t.poison,t.invisible,t.strengthen,t.regenerate,t.infect,t.bane,t.brittle,t.impair,t.rupture,t.ward].indexOf(this.name)&&this.types.push(V.standard),(-1!=this.types.indexOf(V.entity)||-1!=[t.chill,t.impair,t.ward].indexOf(this.name))&&this.types.push(V.character),-1!=this.types.indexOf(V.entity)&&this.types.push(V.monster),-1!=[t.poison_x,t.wound_x].indexOf(this.name)&&(this.types.push(V.upgrade),this.types.push(V.value)),-1!=[t.chill].indexOf(this.name)&&this.types.push(V.stack),-1!=[t.wound,t.wound_x,t.regenerate].indexOf(this.name)&&this.types.push(V.turn),-1!=[t.wound,t.wound_x,t.poison,t.poison_x,t.bane,t.brittle,t.infect,t.rupture].indexOf(this.name)&&this.types.push(V.clearHeal),-1!=[t.poison,t.poison_x,t.ward,t.brittle].indexOf(this.name)&&this.types.push(V.apply),-1!=[t.poison,t.poison_x,t.infect].indexOf(this.name)&&this.types.push(V.preventHeal),-1!=[t.stun,t.immobilize,t.disarm,t.muddle,t.invisible,t.strengthen,t.impair].indexOf(this.name)&&this.types.push(V.expire),-1!=[t.regenerate,t.ward,t.invisible,t.strengthen,t.bless].indexOf(this.name)&&this.types.push(V.positive),-1==this.types.indexOf(V.positive)&&this.types.push(V.negative)}}class H extends ${constructor(U,E=1){super(U,E),this.expired=!1,this.highlight=!1,this.state=B.normal}toModel(){return new rt(this.name,this.value,this.state,this.expired,this.highlight)}fromModel(U){this.name=U.name,this.value=U.value,this.state=U.state,this.expired=U.expired,this.highlight=U.highlight}}class rt{constructor(U,E,R,F,ct){this.highlight=!1,this.name=U,this.value=E,this.state=R,this.expired=F,this.highlight=ct}}const w=Object.values(t).map(S=>new $(S))},4922:(bt,it,D)=>{D.d(it,{W_:()=>t,fq:()=>V,gf:()=>$});var t=(()=>{return(H=t||(t={})).all="all",H.fire="fire",H.ice="ice",H.air="air",H.earth="earth",H.light="light",H.dark="dark",t;var H})(),V=(()=>{return(H=V||(V={})).strong="strong",H.waning="waning",H.inert="inert",H.new="new",V;var H})();class B{constructor(rt){this.state=V.inert,this.type=rt}}const $=[new B(t.fire),new B(t.ice),new B(t.air),new B(t.earth),new B(t.light),new B(t.dark)]},2944:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GB:()=>EntityExpressionRegex,HY:()=>EntityValueRegex,j9:()=>EntityValueFunction});var _businesslogic_GameManager__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1188),_Character__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(641);const EntityExpressionRegex=/^([xCL0-9\+\/\-\*\(\)]+)$/,EntityValueRegex=/\[([xCL0-9\+\/\-\*\(\)]+)(\{(.*)\})?\]/;function EntityValueFunction(value,L){if(!value)return 0;let expression=value,func;const match=value.match(EntityValueRegex);match&&match[0].length==value.length&&(expression=match[1],func=match[3]);let C=_businesslogic_GameManager__WEBPACK_IMPORTED_MODULE_0__.v.game.figures.filter(bt=>bt instanceof _Character__WEBPACK_IMPORTED_MODULE_1__.z).length;C<1&&(C=1),null==L&&(L=_businesslogic_GameManager__WEBPACK_IMPORTED_MODULE_0__.v.game.level),expression=expression.replace(/[x]/g,"*"),expression=expression.replace(/[C]/g,""+C),expression=expression.replace(/[L]/g,""+L);let result=eval(expression);if(func&&func.startsWith("%")&&(func=func.replace("%","")),func)switch(func){case"math.ceil":result=Math.ceil(result);break;case"math.floor":result=Math.floor(result);break;default:console.error("Unknown expression: "+func+"("+match+")")}return Math.round(result)}},1412:(bt,it,D)=>{D.d(it,{o:()=>V,r:()=>t});var t=(()=>{return(B=t||(t={})).deck="deck",B.stat="stat",B.monsterType="monsterType",B.unknown="unknown",t;var B})();class V{constructor($,...H){this.type=$,this.args=H}}},83:(bt,it,D)=>{D.d(it,{D2:()=>R,i4:()=>F,lA:()=>E});var t=D(1188),V=D(554),B=D(62),$=D(641),H=D(4922),rt=D(1502),w=D(8386),S=D(2721),U=D(7918);class E{constructor(){this.edition=void 0,this.figures=[],this.state=R.draw,this.scenario=void 0,this.sections=[],this.level=1,this.levelCalculation=!0,this.levelAdjustment=0,this.bonusAdjustment=0,this.ge5Player=!0,this.round=0,this.playSeconds=0,this.totalSeconds=0,this.monsterAttackModifierDeck=new B.ut,this.allyAttackModifierDeck=new B.ut,this.solo=!1,this.elementBoard=JSON.parse(JSON.stringify(H.gf)),this.party=new S.f,this.parties=[this.party]}toModel(){return new F(this.edition,this.figures.map(z=>z.name),this.figures.filter(z=>z instanceof $.z).map(z=>z.toModel()),this.figures.filter(z=>z instanceof rt.Q).map(z=>z.toModel()),this.figures.filter(z=>z instanceof w.C).map(z=>z.toModel()),this.state,this.scenario&&t.v.scenarioManager.toModel(this.scenario,this.scenario.custom,this.scenario.custom?this.scenario.name:"")||void 0,this.sections.map(z=>t.v.scenarioManager.toModel(z)),this.level,this.levelCalculation,this.levelAdjustment,this.bonusAdjustment,this.ge5Player,this.round,this.playSeconds,this.totalSeconds,this.monsterAttackModifierDeck.toModel(),this.allyAttackModifierDeck.toModel(),this.elementBoard,this.solo,this.party,this.parties)}fromModel(z,X=!1){if(this.edition=z.edition,this.figures=this.figures.filter(W=>-1!=z.characters.map(lt=>lt.name).indexOf(W.name)||-1!=z.monsters.map(lt=>lt.name).indexOf(W.name)||-1!=z.objectives.map(lt=>lt.name).indexOf(W.name)),z.characters.forEach(W=>{let lt=this.figures.find(st=>st instanceof $.z&&st.name==W.name&&st.edition==W.edition);lt||(lt=new $.z(t.v.getCharacterData(W.name,W.edition),W.level),this.figures.push(lt)),lt.fromModel(W)}),z.monsters.forEach(W=>{let lt=this.figures.find(st=>st instanceof rt.Q&&st.name==W.name&&st.edition==W.edition);lt||(lt=new rt.Q(t.v.getMonsterData(W.name,W.edition)),this.figures.push(lt)),lt.fromModel(W)}),z.objectives.forEach(W=>{let lt=this.figures.find(st=>st instanceof w.C&&st.id==W.id);if(!lt){if(!W.id)for(W.id=0;this.figures.some(st=>st instanceof w.C&&st.id==W.id);)W.id++;lt=new w.C(W.id),this.figures.push(lt)}lt.fromModel(W)}),this.figures=this.figures.filter(W=>!(W instanceof w.C)||z.objectives.some(lt=>lt.id==W.id)),this.figures.sort((W,lt)=>z.figures.indexOf(W.name)-z.figures.indexOf(lt.name)),this.state=z.state,z.scenario){const W=t.v.scenarioManager.scenarioDataForModel(z.scenario);this.scenario=W?new U.$(W,z.scenario.isCustom):void 0}else this.scenario=void 0;this.sections=[],z.sections.forEach(W=>{const lt=t.v.scenarioManager.sectionDataForModel(W);lt&&this.sections.push(lt)}),this.level=z.level,null!=V.r.settings.levelCalculation&&(z.levelCalculation=V.r.settings.levelCalculation,V.r.settings.levelCalculation=void 0,V.r.storeSettings()),null!=V.r.settings.levelAdjustment&&(z.levelAdjustment=V.r.settings.levelAdjustment,V.r.settings.levelAdjustment=void 0,V.r.storeSettings()),null!=V.r.settings.bonusAdjustment&&(z.bonusAdjustment=V.r.settings.bonusAdjustment,V.r.settings.bonusAdjustment=void 0,V.r.storeSettings()),null!=V.r.settings.ge5Player&&(z.ge5Player=V.r.settings.ge5Player,V.r.settings.ge5Player=void 0,V.r.storeSettings()),this.levelCalculation=z.levelCalculation,this.levelAdjustment=z.levelAdjustment,this.bonusAdjustment=z.bonusAdjustment,this.ge5Player=z.ge5Player,this.round=z.round,z.playSeconds>this.playSeconds&&(this.playSeconds=z.playSeconds),z.totalSeconds>this.totalSeconds&&(this.totalSeconds=z.totalSeconds),this.monsterAttackModifierDeck=this.monsterAttackModifierDeck||new B.ut,z.monsterAttackModifierDeck&&z.monsterAttackModifierDeck.cards&&z.monsterAttackModifierDeck.cards.length>0&&this.monsterAttackModifierDeck.fromModel(z.monsterAttackModifierDeck),z.attackModifier&&z.attackModifiers&&this.monsterAttackModifierDeck.fromModel(new B.fy(z.attackModifier,z.attackModifiers)),this.allyAttackModifierDeck=this.allyAttackModifierDeck||new B.ut,z.allyAttackModifierDeck&&z.allyAttackModifierDeck.cards&&z.allyAttackModifierDeck.cards.length>0&&this.allyAttackModifierDeck.fromModel(z.allyAttackModifierDeck),this.elementBoard=this.elementBoard||H.gf,z.elementBoard&&z.elementBoard.forEach((W,lt)=>this.elementBoard[lt].state=W.state),z.newElements.forEach(W=>{const lt=this.elementBoard.find(st=>st.type==W);lt&&(lt.state=H.fq.new)}),z.strongElements.forEach(W=>{const lt=this.elementBoard.find(st=>st.type==W);lt&&(lt.state=H.fq.strong)}),z.elements.forEach(W=>{const lt=this.elementBoard.find(st=>st.type==W);lt&&(lt.state=H.fq.waning)}),this.solo=z.solo,this.party=z.party?Object.assign(new S.f,z.party):new S.f,this.parties=[this.party],z.parties&&z.parties.forEach(W=>{W.id!=this.party.id&&this.parties.push(Object.assign(new S.f,W))})}}var R=(()=>{return(ct=R||(R={})).draw="draw",ct.next="next",R;var ct})();class F{constructor(z,X=[],W=[],lt=[],st=[],Ct=R.next,ie,gt=[],at=0,Lt=!0,oe=0,kt=0,_t=!0,xt=0,K=0,Y=0,ot=new B.fy(-1,B.u$),tt=new B.fy(-1,B.u$),J=[],ft=!1,f=new S.f,y=[]){this.sections=[],this.newElements=[],this.strongElements=[],this.elements=[],this.edition=z,this.figures=X,this.characters=W,this.monsters=lt,this.objectives=st,this.state=Ct,this.scenario=ie,this.sections=gt,this.level=at,this.levelCalculation=Lt,this.levelAdjustment=oe,this.bonusAdjustment=kt,this.ge5Player=_t,this.round=xt,this.playSeconds=K,this.totalSeconds=Y,this.monsterAttackModifierDeck=ot,this.allyAttackModifierDeck=tt,this.elementBoard=JSON.parse(JSON.stringify(J)),this.solo=ft,this.party=JSON.parse(JSON.stringify(f)),this.parties=JSON.parse(JSON.stringify(y))}}},1502:(bt,it,D)=>{D.d(it,{Q:()=>H});var t=D(982),V=D(1599),B=D(1188),$=D(2679);class H extends V.A{constructor(S){if(super(S.name,S.count,S.baseStat,S.stats,S.edition,S.deck,S.boss,S.flying,S.thumbnail,S.thumbnailUrl,S.spoiler),this.summonColor=$.mp.blue,this.level=1,this.off=!1,this.active=!1,this.drawExtra=!1,this.ability=-1,this.abilities=[],this.entities=[],this.isAlly=!1,this.errors=S.errors,S.baseStat)for(let U of S.stats){if(!U.health&&0!=U.health&&(U.health=S.baseStat.health||0),!U.movement&&0!=U.movement&&(U.movement=S.baseStat.movement||0),!U.attack&&0!=U.attack&&(U.attack=S.baseStat.attack||0),!U.range&&0!=U.range&&(U.range=S.baseStat.range||0),U.actions||(U.actions=Object.assign([],S.baseStat.actions)),U.immunities||(U.immunities=Object.assign([],S.baseStat.immunities)),!U.special&&(U.special=[],S.baseStat.special))for(let E of S.baseStat.special)U.special.push(Object.assign([],E));U.note||(U.note=S.baseStat.note),U.type||(U.type=S.baseStat.type)}}getInitiative(){const S=B.v.monsterManager.getAbility(this);return this.entities.length>0&&this.entities.some(U=>!U.dead&&U.health>0)&&S&&S.initiative||100}toModel(){return new rt(this.name,this.edition,this.level,this.off,this.active,this.drawExtra,this.ability,this.abilities,this.entities.map(S=>S.toModel()),this.isAlly)}fromModel(S){if(this.edition=S.edition,!this.edition){const U=B.v.monstersData(!0).find(E=>E.name==S.name);this.edition=U?U.edition:""}this.level=S.level,this.off=S.off,this.active=S.active,this.drawExtra=S.drawExtra,this.abilities=S.abilities&&S.abilities.length>0&&S.abilities||B.v.abilities(this)&&B.v.abilities(this).map((U,E)=>E)||[],this.ability=S.ability,this.entities=this.entities.filter(U=>-1!=S.entities.map(E=>E.number).indexOf(U.number)),S.entities.forEach(U=>{let E=this.entities.find(R=>R.number==U.number);E||(E=new t.g(U.number,U.type,this),this.entities.push(E)),E.fromModel(U)}),this.isAlly=S.isAlly}}class rt{constructor(S,U,E,R,F,ct,z,X,W,lt){this.name=S,this.edition=U,this.level=E,this.off=R,this.active=F,this.drawExtra=ct,this.ability=z,this.abilities=X,this.entities=W,this.isAlly=lt}}},982:(bt,it,D)=>{D.d(it,{g:()=>rt});var t=D(8557),V=D(2944),B=D(1412),$=D(9239),H=D(2679);class rt{constructor(U,E,R){this.dead=!1,this.summon=H.HY.false,this.active=!1,this.off=!1,this.entityConditions=[],this.markers=[],this.number=U,this.type=E;const F=R.stats.find(ct=>ct.level==R.level&&ct.type==E);F?this.stat=F:(this.stat=new $.c(E,R.level,0,0,0,0),R.errors=R.errors||[],!R.errors.find(ct=>ct.type==B.r.unknown)&&!R.errors.find(ct=>ct.type==B.r.stat)&&(console.error("Could not find '"+E+"' stats for monster: "+R.name+" level: "+R.level),R.errors.push(new B.o(B.r.stat,"monster",R.name,R.edition,E,""+R.level)))),this.maxHealth="number"==typeof this.stat.health?this.stat.health:(0,V.j9)(this.stat.health,R.level),this.health=this.maxHealth,this.level=R.level}toModel(){return new w(this.number,this.type,this.dead,this.summon,this.active,this.off,this.health,this.maxHealth,this.entityConditions.map(U=>U.toModel()),this.markers)}fromModel(U){this.dead=U.dead,this.summon=U.summon,this.active=U.active,this.off=U.off,this.health=U.health,this.maxHealth=U.maxHealth,this.entityConditions=[],U.entityConditions&&(this.entityConditions=U.entityConditions.map(E=>{let R=new t.hT(E.name,E.value);return R.fromModel(E),R})),this.markers=U.markers}}class w{constructor(U,E,R,F,ct,z,X,W,lt,st){this.number=U,this.type=E,this.dead=R,this.summon=F,this.active=ct,this.off=z,this.health=X,this.maxHealth=W,this.entityConditions=JSON.parse(JSON.stringify(lt)),this.markers=JSON.parse(JSON.stringify(st))}}},9239:(bt,it,D)=>{D.d(it,{c:()=>t});class t{constructor(B,$,H,rt,w,S,U=[],E=[],R=[],F=""){this.type=B,this.level=$,this.health=H,this.movement=rt,this.attack=w,this.range=S,this.actions=U||[],this.immunities=E||[],this.special=R||[],this.note=F}}},7342:(bt,it,D)=>{D.d(it,{M:()=>t});var t=(()=>{return(V=t||(t={})).normal="normal",V.elite="elite",V.boss="boss",t;var V})()},8386:(bt,it,D)=>{D.d(it,{C:()=>V});var t=D(8557);class V{constructor(H){this.title="",this.exhausted=!1,this.escort=!1,this.name="",this.level=0,this.off=!1,this.active=!1,this.edition="",this.health=7,this.maxHealth=7,this.entityConditions=[],this.markers=[],this.initiative=99,this.id=H}getInitiative(){return this.exhausted||this.health<=0?100:this.initiative}toModel(){return new B(this.id,this.title,this.name,this.escort,this.level,this.exhausted,this.off,this.active,this.health,this.maxHealth,this.entityConditions.map(H=>H.toModel()),this.markers,this.initiative)}fromModel(H){this.id=H.id,this.title=H.title,this.name=H.name,this.escort=H.escort,this.level=H.level,this.exhausted=H.exhausted,this.off=H.off,this.active=H.active,this.health=H.health,this.maxHealth=H.maxHealth,this.entityConditions=[],H.entityConditions&&(this.entityConditions=H.entityConditions.map(rt=>{let w=new t.hT(rt.name,rt.value);return w.fromModel(rt),w})),this.markers=H.markers,this.initiative=H.initiative}}class B{constructor(H,rt,w,S,U,E,R,F,ct,z,X,W,lt){this.entityConditions=[],this.markers=[],this.id=H,this.title=rt,this.name=w,this.escort=S,this.level=U,this.exhausted=E,this.off=R,this.active=F,this.health=ct,this.maxHealth=z,this.entityConditions=JSON.parse(JSON.stringify(X)),this.markers=JSON.parse(JSON.stringify(W)),this.initiative=lt}}},2721:(bt,it,D)=>{D.d(it,{f:()=>t});class t{constructor(){this.id=0,this.name="",this.location="",this.notes="",this.achievements="",this.reputation=0,this.prosperity=0,this.scenarios=[],this.manualScenarios=[],this.campaignMode=!1,this.globalAchievements="",this.donations=0,this.characters=[]}}},1723:(bt,it,D)=>{D.d(it,{Ib:()=>$}),D(62);var $=(()=>{return(H=$||($={})).add="add",H.remove="remove",H.replace="replace",H.custom="custom",$;var H})()},7918:(bt,it,D)=>{D.d(it,{$:()=>V});var t=D(3951);class V extends t.t{constructor($,H=!1){super($.name,$.index,$.unlocks,$.blocks,$.requires,$.links,$.monsters,$.allies,$.objectives,$.edition,$.group,$.spoiler),this.custom=H}}},3692:(bt,it,D)=>{D.d(it,{Z:()=>t});class t{constructor(){this.calculate=!0,this.calculateStats=!0,this.abilityNumbers=!0,this.eliteFirst=!0,this.expireConditions=!0,this.applyConditions=!0,this.activeApplyConditions=!0,this.moveElements=!0,this.hideStats=!0,this.randomStandees=!1,this.activeStandees=!0,this.allyAttackModifierDeck=!0,this.initiativeRequired=!0,this.levelCalculation=void 0,this.levelAdjustment=void 0,this.bonusAdjustment=void 0,this.ge5Player=void 0,this.disableStandees=!1,this.fullscreen=!1,this.fhStyle=!1,this.autoscroll=!0,this.disableColumns=!1,this.dragValues=!0,this.hideAbsent=!1,this.hints=!0,this.zoom=100,this.barsize=1,this.fontsize=1,this.locale="en",this.editionDataUrls=[],this.excludeEditionDataUrls=[],this.spoilers=[],this.browserNavigation=!1,this.serverAutoconnect=!0,this.serverSettings=!1,this.serverWss=!1,this.maxUndo=50,this.debugRightClick=!1}}},2679:(bt,it,D)=>{D.d(it,{HY:()=>V,eU:()=>$,mp:()=>B});var t=D(8557),V=(()=>{return(rt=V||(V={})).new="new",rt.true="true",rt.false="false",V;var rt})(),B=(()=>{return(rt=B||(B={})).blue="blue",rt.green="green",rt.yellow="yellow",rt.orange="orange",rt.white="white",rt.purple="purple",rt.pink="pink",rt.red="red",rt.custom="custom",B;var rt})();class ${constructor(w,S,U,E,R=2,F=0,ct=0,z=0){this.dead=!1,this.state=V.new,this.init=!0,this.entityConditions=[],this.markers=[],this.name=w,this.level=S,this.number=U,this.color=E,this.health=R,this.maxHealth=R,this.attack=F,this.movement=ct,this.range=z}toModel(){return new H(this.name,this.number,this.color,this.attack,this.movement,this.range,this.dead,this.state,this.level,this.health,this.maxHealth,this.entityConditions.map(w=>w.toModel()),this.markers)}fromModel(w){this.name=w.name||"",this.number=w.number,this.color=w.color,this.attack=w.attack,this.movement=w.movement,this.range=w.range,this.dead=w.dead,this.state=w.state,this.level=w.level,this.health=w.health,this.maxHealth=w.maxHealth,this.entityConditions=[],w.entityConditions&&(this.entityConditions=w.entityConditions.map(S=>{let U=new t.hT(S.name,S.value);return U.fromModel(S),U})),this.markers=w.markers,this.init=!1}}class H{constructor(w,S,U,E,R,F,ct,z,X,W,lt,st,Ct){this.name=w,this.number=S,this.color=U,this.attack=E,this.movement=R,this.range=F,this.dead=ct,this.state=z,this.level=X,this.health=W,this.maxHealth=lt,this.entityConditions=st,this.markers=Ct}}},2713:(bt,it,D)=>{D.d(it,{x:()=>V});class V{constructor($){this.name="",this.stats=[],this.availableSummons=[],this.color="#000000",this.marker=!1,this.deck="",this.perks=[],this.edition="",this.spoiler=!1,this.replace=!1,$&&(this.errors=$.errors||[],this.name=$.name,this.stats=$.stats||[],this.characterClass=$.characterClass||void 0,this.availableSummons=$.availableSummons||[],this.edition=$.edition||"",this.iconUrl=$.iconUrl||void 0,this.thumbnailUrl=$.thumbnailUrl||void 0,this.color=$.color||"#00000",this.marker=$.marker||!1,this.spoiler=$.spoiler||!1,this.deck=$.name,$.deck&&(this.deck=$.deck),this.perks=$.perks||[])}}},3735:(bt,it,D)=>{D.d(it,{x:()=>t});class t{constructor(B,$,H){this.name=B,this.abilities=$,this.edition=H}}},1599:(bt,it,D)=>{D.d(it,{A:()=>t});class t{constructor(B,$,H,rt,w,S,U=!1,E=!1,R,F,ct=!1){this.errors=[],this.hidden=!1,this.replace=!1,this.errors=[],this.name=B,this.count=$,this.baseStat=H,this.stats=rt,this.edition=w,this.deck=B,S&&(this.deck=S),this.boss=U,this.flying=E,this.thumbnail=R,this.thumbnailUrl=F,this.spoiler=!0}}},3951:(bt,it,D)=>{D.d(it,{_:()=>V,t:()=>t});class t{constructor($,H,rt,w,S,U,E,R,F,ct,z,X=!1){this.initial=!1,this.name=$,this.index=H,this.unlocks=rt,this.blocks=w,this.requires=S,this.links=U,this.monsters=E,this.allies=R,this.edition=ct,this.objectives=F,this.group=z,this.spoiler=X}}class V{constructor($,H,rt,w=!1,S=""){this.index=$,this.edition=H,this.group=rt,this.isCustom=w,this.custom=S}}},759:(bt,it,D)=>{var t=D(1571);
/**
       * @license Angular v14.2.5
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let V=null;function B(){return V}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const w=new t.OlP("DocumentToken");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let S=(()=>{class n{historyGo(e){throw new Error("Not implemented")}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:function(){return function U(){return(0,t.LFG)(R)}()},providedIn:"platform"}),n})();const E=new t.OlP("Location Initialized");let R=(()=>{class n extends S{constructor(e){super(),this._doc=e,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return B().getBaseHref(this._doc)}onPopState(e){const i=B().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){const i=B().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(e){this.location.pathname=e}pushState(e,i,a){F()?this._history.pushState(e,i,a):this.location.hash=a}replaceState(e,i,a){F()?this._history.replaceState(e,i,a):this.location.hash=a}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(w))},n.\u0275prov=t.Yz7({token:n,factory:function(){return function ct(){return new R((0,t.LFG)(w))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */()},providedIn:"platform"}),n})();function F(){return!!window.history.pushState}function z(n,o){if(0==n.length)return o;if(0==o.length)return n;let e=0;return n.endsWith("/")&&e++,o.startsWith("/")&&e++,2==e?n+o.substring(1):1==e?n+o:n+"/"+o}function X(n){const o=n.match(/#|\?|$/),e=o&&o.index||n.length;return n.slice(0,e-("/"===n[e-1]?1:0))+n.slice(e)}function W(n){return n&&"?"!==n[0]?"?"+n:n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let lt=(()=>{class n{historyGo(e){throw new Error("Not implemented")}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:function(){return(0,t.f3M)(Ct)},providedIn:"root"}),n})();const st=new t.OlP("appBaseHref");let Ct=(()=>{class n extends lt{constructor(e,i){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??(0,t.f3M)(w).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return z(this._baseHref,e)}path(e=!1){const i=this._platformLocation.pathname+W(this._platformLocation.search),a=this._platformLocation.hash;return a&&e?`${i}${a}`:i}pushState(e,i,a,g){const h=this.prepareExternalUrl(a+W(g));this._platformLocation.pushState(e,i,h)}replaceState(e,i,a,g){const h=this.prepareExternalUrl(a+W(g));this._platformLocation.replaceState(e,i,h)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(S),t.LFG(st,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),ie=(()=>{class n extends lt{constructor(e,i){super(),this._platformLocation=e,this._baseHref="",this._removeListenerFns=[],null!=i&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let i=this._platformLocation.hash;return null==i&&(i="#"),i.length>0?i.substring(1):i}prepareExternalUrl(e){const i=z(this._baseHref,e);return i.length>0?"#"+i:i}pushState(e,i,a,g){let h=this.prepareExternalUrl(a+W(g));0==h.length&&(h=this._platformLocation.pathname),this._platformLocation.pushState(e,i,h)}replaceState(e,i,a,g){let h=this.prepareExternalUrl(a+W(g));0==h.length&&(h=this._platformLocation.pathname),this._platformLocation.replaceState(e,i,h)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(S),t.LFG(st,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})(),gt=(()=>{class n{constructor(e){this._subject=new t.vpe,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;const i=this._locationStrategy.getBaseHref();this._baseHref=X(oe(i)),this._locationStrategy.onPopState(a=>{this._subject.emit({url:this.path(!0),pop:!0,state:a.state,type:a.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+W(i))}normalize(e){return n.stripTrailingSlash(function Lt(n,o){return n&&o.startsWith(n)?o.substring(n.length):o}(this._baseHref,oe(e)))}prepareExternalUrl(e){return e&&"/"!==e[0]&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",a=null){this._locationStrategy.pushState(a,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+W(i)),a)}replaceState(e,i="",a=null){this._locationStrategy.replaceState(a,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+W(i)),a)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)})),()=>{const i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),0===this._urlChangeListeners.length&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(a=>a(e,i))}subscribe(e,i,a){return this._subject.subscribe({next:e,error:i,complete:a})}}return n.normalizeQueryParams=W,n.joinWithSlash=z,n.stripTrailingSlash=X,n.\u0275fac=function(e){return new(e||n)(t.LFG(lt))},n.\u0275prov=t.Yz7({token:n,factory:function(){return function at(){return new gt((0,t.LFG)(lt))}()},providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function oe(n){return n.replace(/\/index.html$/,"")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Nt=(()=>{class n{constructor(e,i,a,g){this._iterableDiffers=e,this._keyValueDiffers=i,this._ngEl=a,this._renderer=g,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(e){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof e?e.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(e){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof e?e.split(/\s+/):e,this._rawClass&&((0,t.sIi)(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const e=this._iterableDiffer.diff(this._rawClass);e&&this._applyIterableChanges(e)}else if(this._keyValueDiffer){const e=this._keyValueDiffer.diff(this._rawClass);e&&this._applyKeyValueChanges(e)}}_applyKeyValueChanges(e){e.forEachAddedItem(i=>this._toggleClass(i.key,i.currentValue)),e.forEachChangedItem(i=>this._toggleClass(i.key,i.currentValue)),e.forEachRemovedItem(i=>{i.previousValue&&this._toggleClass(i.key,!1)})}_applyIterableChanges(e){e.forEachAddedItem(i=>{if("string"!=typeof i.item)throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${(0,t.AaK)(i.item)}`);this._toggleClass(i.item,!0)}),e.forEachRemovedItem(i=>this._toggleClass(i.item,!1))}_applyClasses(e){e&&(Array.isArray(e)||e instanceof Set?e.forEach(i=>this._toggleClass(i,!0)):Object.keys(e).forEach(i=>this._toggleClass(i,!!e[i])))}_removeClasses(e){e&&(Array.isArray(e)||e instanceof Set?e.forEach(i=>this._toggleClass(i,!1)):Object.keys(e).forEach(i=>this._toggleClass(i,!1)))}_toggleClass(e,i){(e=e.trim())&&e.split(/\s+/g).forEach(a=>{i?this._renderer.addClass(this._ngEl.nativeElement,a):this._renderer.removeClass(this._ngEl.nativeElement,a)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.ZZ4),t.Y36(t.aQg),t.Y36(t.SBq),t.Y36(t.Qsj))},n.\u0275dir=t.lG2({type:n,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"},standalone:!0}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class he{constructor(o,e,i,a){this.$implicit=o,this.ngForOf=e,this.index=i,this.count=a}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let $t=(()=>{class n{constructor(e,i,a){this._viewContainer=e,this._template=i,this._differs=a,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){const e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){const i=this._viewContainer;e.forEachOperation((a,g,h)=>{if(null==a.previousIndex)i.createEmbeddedView(this._template,new he(a.item,this._ngForOf,-1,-1),null===h?void 0:h);else if(null==h)i.remove(null===g?void 0:g);else if(null!==g){const v=i.get(g);i.move(v,h),lh(v,a)}});for(let a=0,g=i.length;a<g;a++){const v=i.get(a).context;v.index=a,v.count=g,v.ngForOf=this._ngForOf}e.forEachIdentityChange(a=>{lh(i.get(a.currentIndex),a)})}static ngTemplateContextGuard(e,i){return!0}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.s_b),t.Y36(t.Rgc),t.Y36(t.ZZ4))},n.\u0275dir=t.lG2({type:n,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0}),n})();function lh(n,o){n.context.$implicit=o.item}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Bt=(()=>{class n{constructor(e,i){this._viewContainer=e,this._context=new hs,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=i}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){fs("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){fs("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(e,i){return!0}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.s_b),t.Y36(t.Rgc))},n.\u0275dir=t.lG2({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0}),n})();class hs{constructor(){this.$implicit=null,this.ngIf=null}}function fs(n,o){if(o&&!o.createEmbeddedView)throw new Error(`${n} must be a TemplateRef, but received '${(0,t.AaK)(o)}'.`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class xi{constructor(o,e){this._viewContainerRef=o,this._templateRef=e,this._created=!1}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(o){o&&!this._created?this.create():!o&&this._created&&this.destroy()}}let be=(()=>{class n{constructor(){this._defaultUsed=!1,this._caseCount=0,this._lastCaseCheckIndex=0,this._lastCasesMatched=!1}set ngSwitch(e){this._ngSwitch=e,0===this._caseCount&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(e){this._defaultViews||(this._defaultViews=[]),this._defaultViews.push(e)}_matchCase(e){const i=e==this._ngSwitch;return this._lastCasesMatched=this._lastCasesMatched||i,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),i}_updateDefaultCases(e){if(this._defaultViews&&e!==this._defaultUsed){this._defaultUsed=e;for(let i=0;i<this._defaultViews.length;i++)this._defaultViews[i].enforceState(e)}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=t.lG2({type:n,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"},standalone:!0}),n})(),er=(()=>{class n{constructor(e,i,a){this.ngSwitch=a,a._addCase(),this._view=new xi(e,i)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.s_b),t.Y36(t.Rgc),t.Y36(be,9))},n.\u0275dir=t.lG2({type:n,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"},standalone:!0}),n})(),Je=(()=>{class n{constructor(e,i,a){a._addDefault(new xi(e,i))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.s_b),t.Y36(t.Rgc),t.Y36(be,9))},n.\u0275dir=t.lG2({type:n,selectors:[["","ngSwitchDefault",""]],standalone:!0}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Ga=(()=>{class n{transform(e,i,a){if(null==e)return null;if(!this.supports(e))
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
throw function ci(n,o){return new t.vHH(2100,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */();return e.slice(i,a)}supports(e){return"string"==typeof e||Array.isArray(e)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=t.Yjl({name:"slice",type:n,pure:!1,standalone:!0}),n})(),gv=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const uh="browser";function ps(n){return n===uh}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Ql=(()=>{class n{}return n.\u0275prov=(0,t.Yz7)({token:n,providedIn:"root",factory:()=>new dv((0,t.LFG)(w),window)}),n})();class dv{constructor(o,e){this.document=o,this.window=e,this.offset=()=>[0,0]}setOffset(o){this.offset=Array.isArray(o)?()=>o:o}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(o){this.supportsScrolling()&&this.window.scrollTo(o[0],o[1])}scrollToAnchor(o){if(!this.supportsScrolling())return;const e=function Ne(n,o){const e=n.getElementById(o)||n.getElementsByName(o)[0];if(e)return e;if("function"==typeof n.createTreeWalker&&n.body&&(n.body.createShadowRoot||n.body.attachShadow)){const i=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT);let a=i.currentNode;for(;a;){const g=a.shadowRoot;if(g){const h=g.getElementById(o)||g.querySelector(`[name="${o}"]`);if(h)return h}a=i.nextNode()}}return null}(this.document,o);e&&(this.scrollToElement(e),e.focus())}setHistoryScrollRestoration(o){if(this.supportScrollRestoration()){const e=this.window.history;e&&e.scrollRestoration&&(e.scrollRestoration=o)}}scrollToElement(o){const e=o.getBoundingClientRect(),i=e.left+this.window.pageXOffset,a=e.top+this.window.pageYOffset,g=this.offset();this.window.scrollTo(i-g[0],a-g[1])}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const o=hv(this.window.history)||hv(Object.getPrototypeOf(this.window.history));return!(!o||!o.writable&&!o.set)}catch{return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch{return!1}}}function hv(n){return Object.getOwnPropertyDescriptor(n,"scrollRestoration")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ka extends
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license Angular v14.2.5
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Xl extends class rt{}{constructor(){super(...arguments),this.supportsDOMEvents=!0}}{static makeCurrent(){!function H(n){V||(V=n)}(new Ka)}onAndCancel(o,e,i){return o.addEventListener(e,i,!1),()=>{o.removeEventListener(e,i,!1)}}dispatchEvent(o,e){o.dispatchEvent(e)}remove(o){o.parentNode&&o.parentNode.removeChild(o)}createElement(o,e){return(e=e||this.getDefaultDocument()).createElement(o)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(o){return o.nodeType===Node.ELEMENT_NODE}isShadowRoot(o){return o instanceof DocumentFragment}getGlobalEventTarget(o,e){return"window"===e?window:"document"===e?o:"body"===e?o.body:null}getBaseHref(o){const e=function bh(){return ir=ir||document.querySelector("base"),ir?ir.getAttribute("href"):null}();return null==e?null:function tg(n){Ms=Ms||document.createElement("a"),Ms.setAttribute("href",n);const o=Ms.pathname;return"/"===o.charAt(0)?o:`/${o}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e)}resetBaseElement(){ir=null}getUserAgent(){return window.navigator.userAgent}getCookie(o){
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return function ds(n,o){o=encodeURIComponent(o);for(const e of n.split(";")){const i=e.indexOf("="),[a,g]=-1==i?[e,""]:[e.slice(0,i),e.slice(i+1)];if(a.trim()===o)return decodeURIComponent(g)}return null}(document.cookie,o)}}let Ms,ir=null;const Oh=new t.OlP("TRANSITION_ID"),fn=[{provide:t.ip1,useFactory:function Dv(n,o,e){return()=>{e.get(t.CZH).donePromise.then(()=>{const i=B(),a=o.querySelectorAll(`style[ng-transition="${n}"]`);for(let g=0;g<a.length;g++)i.remove(a[g])})}},deps:[Oh,w,t.zs3],multi:!0}];let xe=(()=>{class n{build(){return new XMLHttpRequest}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Wa=new t.OlP("EventManagerPlugins");let Xa=(()=>{class n{constructor(e,i){this._zone=i,this._eventNameToPlugin=new Map,e.forEach(a=>a.manager=this),this._plugins=e.slice().reverse()}addEventListener(e,i,a){return this._findPluginFor(i).addEventListener(e,i,a)}addGlobalEventListener(e,i,a){return this._findPluginFor(i).addGlobalEventListener(e,i,a)}getZone(){return this._zone}_findPluginFor(e){const i=this._eventNameToPlugin.get(e);if(i)return i;const a=this._plugins;for(let g=0;g<a.length;g++){const h=a[g];if(h.supports(e))return this._eventNameToPlugin.set(e,h),h}throw new Error(`No event manager plugin found for event ${e}`)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Wa),t.LFG(t.R0b))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();class Ph{constructor(o){this._doc=o}addGlobalEventListener(o,e,i){const a=B().getGlobalEventTarget(this._doc,o);if(!a)throw new Error(`Unsupported event target ${a} for event ${e}`);return this.addEventListener(a,e,i)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let xh=(()=>{class n{constructor(){this._stylesSet=new Set}addStyles(e){const i=new Set;e.forEach(a=>{this._stylesSet.has(a)||(this._stylesSet.add(a),i.add(a))}),this.onStylesAdded(i)}onStylesAdded(e){}getAllStyles(){return Array.from(this._stylesSet)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})(),ys=(()=>{class n extends xh{constructor(e){super(),this._doc=e,this._hostNodes=new Map,this._hostNodes.set(e.head,[])}_addStylesToHost(e,i,a){e.forEach(g=>{const h=this._doc.createElement("style");h.textContent=g,a.push(i.appendChild(h))})}addHost(e){const i=[];this._addStylesToHost(this._stylesSet,e,i),this._hostNodes.set(e,i)}removeHost(e){const i=this._hostNodes.get(e);i&&i.forEach(wh),this._hostNodes.delete(e)}onStylesAdded(e){this._hostNodes.forEach((i,a)=>{this._addStylesToHost(e,a,i)})}ngOnDestroy(){this._hostNodes.forEach(e=>e.forEach(wh))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(w))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();function wh(n){B().remove(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const or={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},rr=/%COMP%/g;function ec(n,o,e){for(let i=0;i<o.length;i++){let a=o[i];Array.isArray(a)?ec(n,a,e):(a=a.replace(rr,n),e.push(a))}return e}function kh(n){return o=>{if("__ngUnwrap__"===o)return n;!1===n(o)&&(o.preventDefault(),o.returnValue=!1)}}let Ps=(()=>{class n{constructor(e,i,a){this.eventManager=e,this.sharedStylesHost=i,this.appId=a,this.rendererByCompId=new Map,this.defaultRenderer=new eg(e)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;switch(i.encapsulation){case t.ifc.Emulated:{let a=this.rendererByCompId.get(i.id);return a||(a=new ic(this.eventManager,this.sharedStylesHost,i,this.appId),this.rendererByCompId.set(i.id,a)),a.applyToHost(e),a}case 1:case t.ifc.ShadowDom:return new Ah(this.eventManager,this.sharedStylesHost,e,i);default:if(!this.rendererByCompId.has(i.id)){const a=ec(i.id,i.styles,[]);this.sharedStylesHost.addStyles(a),this.rendererByCompId.set(i.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Xa),t.LFG(ys),t.LFG(t.AFp))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();class eg{constructor(o){this.eventManager=o,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(o,e){return e?document.createElementNS(or[e]||e,o):document.createElement(o)}createComment(o){return document.createComment(o)}createText(o){return document.createTextNode(o)}appendChild(o,e){(Ev(o)?o.content:o).appendChild(e)}insertBefore(o,e,i){o&&(Ev(o)?o.content:o).insertBefore(e,i)}removeChild(o,e){o&&o.removeChild(e)}selectRootElement(o,e){let i="string"==typeof o?document.querySelector(o):o;if(!i)throw new Error(`The selector "${o}" did not match any elements`);return e||(i.textContent=""),i}parentNode(o){return o.parentNode}nextSibling(o){return o.nextSibling}setAttribute(o,e,i,a){if(a){e=a+":"+e;const g=or[a];g?o.setAttributeNS(g,e,i):o.setAttribute(e,i)}else o.setAttribute(e,i)}removeAttribute(o,e,i){if(i){const a=or[i];a?o.removeAttributeNS(a,e):o.removeAttribute(`${i}:${e}`)}else o.removeAttribute(e)}addClass(o,e){o.classList.add(e)}removeClass(o,e){o.classList.remove(e)}setStyle(o,e,i,a){a&(t.JOm.DashCase|t.JOm.Important)?o.style.setProperty(e,i,a&t.JOm.Important?"important":""):o.style[e]=i}removeStyle(o,e,i){i&t.JOm.DashCase?o.style.removeProperty(e):o.style[e]=""}setProperty(o,e,i){o[e]=i}setValue(o,e){o.nodeValue=e}listen(o,e,i){return"string"==typeof o?this.eventManager.addGlobalEventListener(o,e,kh(i)):this.eventManager.addEventListener(o,e,kh(i))}}function Ev(n){return"TEMPLATE"===n.tagName&&void 0!==n.content}class ic extends eg{constructor(o,e,i,a){super(o),this.component=i;const g=ec(a+"-"+i.id,i.styles,[]);e.addStyles(g),this.contentAttr=function zi(n){return"_ngcontent-%COMP%".replace(rr,n)}(a+"-"+i.id),this.hostAttr=function Os(n){return"_nghost-%COMP%".replace(rr,n)}(a+"-"+i.id)}applyToHost(o){super.setAttribute(o,this.hostAttr,"")}createElement(o,e){const i=super.createElement(o,e);return super.setAttribute(i,this.contentAttr,""),i}}class Ah extends eg{constructor(o,e,i,a){super(o),this.sharedStylesHost=e,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const g=ec(a.id,a.styles,[]);for(let h=0;h<g.length;h++){const v=document.createElement("style");v.textContent=g[h],this.shadowRoot.appendChild(v)}}nodeOrShadowRoot(o){return o===this.hostEl?this.shadowRoot:o}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(o,e){return super.appendChild(this.nodeOrShadowRoot(o),e)}insertBefore(o,e,i){return super.insertBefore(this.nodeOrShadowRoot(o),e,i)}removeChild(o,e){return super.removeChild(this.nodeOrShadowRoot(o),e)}parentNode(o){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(o)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Th=(()=>{class n extends Ph{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,a){return e.addEventListener(i,a,!1),()=>this.removeEventListener(e,i,a)}removeEventListener(e,i,a){return e.removeEventListener(i,a)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(w))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const xs=["alt","control","meta","shift"],Eh={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Sh={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey};let sr=(()=>{class n extends Ph{constructor(e){super(e)}supports(e){return null!=n.parseEventName(e)}addEventListener(e,i,a){const g=n.parseEventName(i),h=n.eventCallback(g.fullKey,a,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>B().onAndCancel(e,g.domEventName,h))}static parseEventName(e){const i=e.toLowerCase().split("."),a=i.shift();if(0===i.length||"keydown"!==a&&"keyup"!==a)return null;const g=n._normalizeKey(i.pop());let h="",v=i.indexOf("code");if(v>-1&&(i.splice(v,1),h="code."),xs.forEach(T=>{const q=i.indexOf(T);q>-1&&(i.splice(q,1),h+=T+".")}),h+=g,0!=i.length||0===g.length)return null;const O={};return O.domEventName=a,O.fullKey=h,O}static matchEventFullKeyCode(e,i){let a=Eh[e.key]||e.key,g="";return i.indexOf("code.")>-1&&(a=e.code,g="code."),!(null==a||!a)&&(a=a.toLowerCase()," "===a?a="space":"."===a&&(a="dot"),xs.forEach(h=>{h!==a&&(0,Sh[h])(e)&&(g+=h+".")}),g+=a,g===i)}static eventCallback(e,i,a){return g=>{n.matchEventFullKeyCode(g,e)&&a.runGuarded(()=>i(g))}}static _normalizeKey(e){return"esc"===e?"escape":e}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(w))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Iv=(0,t.eFA)(t._c5,"browser",[{provide:t.Lbi,useValue:uh},{provide:t.g9A,useValue:function Lh(){Ka.makeCurrent()},multi:!0},{provide:w,useFactory:function Sv(){return(0,t.RDi)(document),document},deps:[]}]),ar=new t.OlP(""),oc=[{provide:t.rWj,useClass:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Bi{addToWindow(o){t.dqk.getAngularTestability=(i,a=!0)=>{const g=o.findTestabilityInTree(i,a);if(null==g)throw new Error("Could not find testability for element.");return g},t.dqk.getAllAngularTestabilities=()=>o.getAllTestabilities(),t.dqk.getAllAngularRootElements=()=>o.getAllRootElements(),t.dqk.frameworkStabilizers||(t.dqk.frameworkStabilizers=[]),t.dqk.frameworkStabilizers.push(i=>{const a=t.dqk.getAllAngularTestabilities();let g=a.length,h=!1;const v=function(O){h=h||O,g--,0==g&&i(h)};a.forEach(function(O){O.whenStable(v)})})}findTestabilityInTree(o,e,i){return null==e?null:o.getTestability(e)??(i?B().isShadowRoot(e)?this.findTestabilityInTree(o,e.host,!0):this.findTestabilityInTree(o,e.parentElement,!0):null)}},deps:[]},{provide:t.lri,useClass:t.dDg,deps:[t.R0b,t.eoX,t.rWj]},{provide:t.dDg,useClass:t.dDg,deps:[t.R0b,t.eoX,t.rWj]}],rc=[{provide:t.zSh,useValue:"root"},{provide:t.qLn,useFactory:function Nh(){return new t.qLn},deps:[]},{provide:Wa,useClass:Th,multi:!0,deps:[w,t.R0b,t.Lbi]},{provide:Wa,useClass:sr,multi:!0,deps:[w]},{provide:Ps,useClass:Ps,deps:[Xa,ys,t.AFp]},{provide:t.FYo,useExisting:Ps},{provide:xh,useExisting:ys},{provide:ys,useClass:ys,deps:[w]},{provide:Xa,useClass:Xa,deps:[Wa,t.R0b]},{provide:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Lb{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */,useClass:xe,deps:[]},[]];let sc=(()=>{class n{constructor(e){}static withServerTransition(e){return{ngModule:n,providers:[{provide:t.AFp,useValue:e.appId},{provide:Oh,useExisting:t.AFp},fn]}}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(ar,12))},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[...rc,...oc],imports:[gv,t.hGG]}),n})(),og=(()=>{class n{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(w))},n.\u0275prov=t.Yz7({token:n,factory:function(e){let i=null;return i=e?new e:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Fh(){return new og((0,t.LFG)(w))}(),i},providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */typeof window<"u"&&window;let Uv=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:function(e){let i=null;return i=e?new(e||n):t.LFG(Vv),i},providedIn:"root"}),n})(),Vv=(()=>{class n extends Uv{constructor(e){super(),this._doc=e}sanitize(e,i){if(null==i)return null;switch(e){case t.q3G.NONE:return i;case t.q3G.HTML:return(0,t.qzn)(i,"HTML")?(0,t.z3N)(i):(0,t.EiD)(this._doc,String(i)).toString();case t.q3G.STYLE:return(0,t.qzn)(i,"Style")?(0,t.z3N)(i):i;case t.q3G.SCRIPT:if((0,t.qzn)(i,"Script"))return(0,t.z3N)(i);throw new Error("unsafe value used in a script context");case t.q3G.URL:return(0,t.qzn)(i,"URL")?(0,t.z3N)(i):(0,t.mCW)(String(i));case t.q3G.RESOURCE_URL:if((0,t.qzn)(i,"ResourceURL"))return(0,t.z3N)(i);throw new Error("unsafe value used in a resource URL context (see https://g.co/ng/security#xss)");default:throw new Error(`Unexpected SecurityContext ${e} (see https://g.co/ng/security#xss)`)}}bypassSecurityTrustHtml(e){return(0,t.JVY)(e)}bypassSecurityTrustStyle(e){return(0,t.L6k)(e)}bypassSecurityTrustScript(e){return(0,t.eBb)(e)}bypassSecurityTrustUrl(e){return(0,t.LAX)(e)}bypassSecurityTrustResourceUrl(e){return(0,t.pB0)(e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(w))},n.\u0275prov=t.Yz7({token:n,factory:function(e){let i=null;return i=e?new e:function Jb(n){return new Vv(n.get(w))}(t.LFG(t.zs3)),i},providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Bn(n){return null!=n&&"false"!=`${n}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function jv(n,o=0){return function Bb(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)?Number(n):o}function Oe(n){return Array.isArray(n)?n:[n]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function we(n){return null==n?"":"string"==typeof n?n:`${n}px`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Te(n){return n instanceof t.SBq?n.nativeElement:n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var Gt=D(7579),Ye=D(3269),de=D(2076);function At(...n){const o=(0,Ye.yG)(n);return(0,de.D)(n,o)}var $e=D(9751),Nn=D(8421),Ke=D(5577),Hv=D(1144),Fn=D(576),Kt=D(4004);const{isArray:zb}=Array;function pn(n){return(0,Kt.U)(o=>function Hh(n,o){return zb(o)?n(...o):n(o)}(n,o))}const lg=["addListener","removeListener"],gr=["addEventListener","removeEventListener"],Qb=["on","off"];function wo(n,o,e,i){if((0,Fn.m)(e)&&(i=e,e=void 0),i)return wo(n,o,e).pipe(pn(i));const[a,g]=function Bv(n){return(0,Fn.m)(n.addEventListener)&&(0,Fn.m)(n.removeEventListener)}(n)?gr.map(h=>v=>n[h](o,v,e)):function qv(n){return(0,Fn.m)(n.addListener)&&(0,Fn.m)(n.removeListener)}(n)?lg.map(qh(n,o)):function Jv(n){return(0,Fn.m)(n.on)&&(0,Fn.m)(n.off)}(n)?Qb.map(qh(n,o)):[];if(!a&&(0,Hv.z)(n))return(0,Ke.z)(h=>wo(h,o,e))((0,Nn.Xf)(n));if(!a)throw new TypeError("Invalid event target");return new $e.y(h=>{const v=(...O)=>h.next(1<O.length?O:O[0]);return a(v),()=>g(v)})}function qh(n,o){return e=>i=>n[e](o,i)}var zn=D(727);class zv extends zn.w0{constructor(o,e){super()}schedule(o,e=0){return this}}const ur={setInterval(n,o,...e){const{delegate:i}=ur;return i?.setInterval?i.setInterval(n,o,...e):setInterval(n,o,...e)},clearInterval(n){const{delegate:o}=ur;return(o?.clearInterval||clearInterval)(n)},delegate:void 0};var cc=D(8737);class Jh extends zv{constructor(o,e){super(o,e),this.scheduler=o,this.work=e,this.pending=!1}schedule(o,e=0){var i;if(this.closed)return this;this.state=o;const a=this.id,g=this.scheduler;return null!=a&&(this.id=this.recycleAsyncId(g,a,e)),this.pending=!0,this.delay=e,this.id=null!==(i=this.id)&&void 0!==i?i:this.requestAsyncId(g,this.id,e),this}requestAsyncId(o,e,i=0){return ur.setInterval(o.flush.bind(o,this),i)}recycleAsyncId(o,e,i=0){if(null!=i&&this.delay===i&&!1===this.pending)return e;null!=e&&ur.clearInterval(e)}execute(o,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(o,e);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(o,e){let a,i=!1;try{this.work(o)}catch(g){i=!0,a=g||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),a}unsubscribe(){if(!this.closed){const{id:o,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,cc.P)(i,this),null!=o&&(this.id=this.recycleAsyncId(e,o,null)),this.delay=null,super.unsubscribe()}}}const ki={schedule(n){let o=requestAnimationFrame,e=cancelAnimationFrame;const{delegate:i}=ki;i&&(o=i.requestAnimationFrame,e=i.cancelAnimationFrame);const a=o(g=>{e=void 0,n(g)});return new zn.w0(()=>e?.(a))},requestAnimationFrame(...n){const{delegate:o}=ki;return(o?.requestAnimationFrame||requestAnimationFrame)(...n)},cancelAnimationFrame(...n){const{delegate:o}=ki;return(o?.cancelAnimationFrame||cancelAnimationFrame)(...n)},delegate:void 0},Es={now:()=>(Es.delegate||Date).now(),delegate:void 0};class Ss{constructor(o,e=Ss.now){this.schedulerActionCtor=o,this.now=e}schedule(o,e=0,i){return new this.schedulerActionCtor(this,o).schedule(i,e)}}Ss.now=Es.now;class ug extends Ss{constructor(o,e=Ss.now){super(o,e),this.actions=[],this._active=!1}flush(o){const{actions:e}=this;if(this._active)return void e.push(o);let i;this._active=!0;do{if(i=o.execute(o.state,o.delay))break}while(o=e.shift());if(this._active=!1,i){for(;o=e.shift();)o.unsubscribe();throw i}}}const dg=new class Qv extends ug{flush(o){this._active=!0;const e=this._scheduled;this._scheduled=void 0;const{actions:i}=this;let a;o=o||i.shift();do{if(a=o.execute(o.state,o.delay))break}while((o=i[0])&&o.id===e&&i.shift());if(this._active=!1,a){for(;(o=i[0])&&o.id===e&&i.shift();)o.unsubscribe();throw a}}}(class gg extends Jh{constructor(o,e){super(o,e),this.scheduler=o,this.work=e}requestAsyncId(o,e,i=0){return null!==i&&i>0?super.requestAsyncId(o,e,i):(o.actions.push(this),o._scheduled||(o._scheduled=ki.requestAnimationFrame(()=>o.flush(void 0))))}recycleAsyncId(o,e,i=0){var a;if(null!=i?i>0:this.delay>0)return super.recycleAsyncId(o,e,i);const{actions:g}=o;null!=e&&(null===(a=g[g.length-1])||void 0===a?void 0:a.id)!==e&&(ki.cancelAnimationFrame(e),o._scheduled=void 0)}});let hg,dr=1;const Pe={};function fg(n){return n in Pe&&(delete Pe[n],!0)}const Bh={setImmediate(n){const o=dr++;return Pe[o]=!0,hg||(hg=Promise.resolve()),hg.then(()=>fg(o)&&n()),o},clearImmediate(n){fg(n)}},{setImmediate:Is,clearImmediate:Gv}=Bh,gc={setImmediate(...n){const{delegate:o}=gc;return(o?.setImmediate||Is)(...n)},clearImmediate(n){const{delegate:o}=gc;return(o?.clearImmediate||Gv)(n)},delegate:void 0},Ai=(new class pg extends ug{flush(o){this._active=!0;const e=this._scheduled;this._scheduled=void 0;const{actions:i}=this;let a;o=o||i.shift();do{if(a=o.execute(o.state,o.delay))break}while((o=i[0])&&o.id===e&&i.shift());if(this._active=!1,a){for(;(o=i[0])&&o.id===e&&i.shift();)o.unsubscribe();throw a}}}(class Yv extends Jh{constructor(o,e){super(o,e),this.scheduler=o,this.work=e}requestAsyncId(o,e,i=0){return null!==i&&i>0?super.requestAsyncId(o,e,i):(o.actions.push(this),o._scheduled||(o._scheduled=gc.setImmediate(o.flush.bind(o,void 0))))}recycleAsyncId(o,e,i=0){var a;if(null!=i?i>0:this.delay>0)return super.recycleAsyncId(o,e,i);const{actions:g}=o;null!=e&&(null===(a=g[g.length-1])||void 0===a?void 0:a.id)!==e&&(gc.clearImmediate(e),o._scheduled=void 0)}}),new ug(Jh)),Kv=Ai;var Ee=D(4482),me=D(5403),Qh=D(3532);function mg(n=0,o,e=Kv){let i=-1;return null!=o&&((0,Qh.K)(o)?e=o:i=o),new $e.y(a=>{let g=function Wv(n){return n instanceof Date&&!isNaN(n)}(n)?+n-e.now():n;g<0&&(g=0);let h=0;return e.schedule(function(){a.closed||(a.next(h++),0<=i?this.schedule(void 0,i):a.complete())},g)})}function Do(n,o=Ai){return function uc(n){return(0,Ee.e)((o,e)=>{let i=!1,a=null,g=null,h=!1;const v=()=>{if(g?.unsubscribe(),g=null,i){i=!1;const T=a;a=null,e.next(T)}h&&e.complete()},O=()=>{g=null,h&&e.complete()};o.subscribe((0,me.x)(e,T=>{i=!0,a=T,g||(0,Nn.Xf)(n(T)).subscribe(g=(0,me.x)(e,v,O))},()=>{h=!0,(!i||!g||g.closed)&&e.complete()}))})}(()=>mg(n,o))}function Fe(n,o){return(0,Ee.e)((e,i)=>{let a=0;e.subscribe((0,me.x)(i,g=>n.call(o,g,a++)&&i.next(g)))})}var _g=D(5032);function ko(n){return(0,Ee.e)((o,e)=>{(0,Nn.Xf)(n).subscribe((0,me.x)(e,()=>e.complete(),_g.Z)),!e.closed&&o.subscribe(e)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let dc;try{dc=typeof Intl<"u"&&Intl.v8BreakIterator}catch{dc=!1}let Qi,Fs,fr,Zs,gi=(()=>{class n{constructor(e){this._platformId=e,this.isBrowser=this._platformId?ps(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!dc)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(t.Lbi))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ns(n){return function Yh(){if(null==Qi&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Qi=!0}))}finally{Qi=Qi||!1}return Qi}()?n:!!n.capture}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function vg(){if(null==fr){if("object"!=typeof document||!document||"function"!=typeof Element||!Element)return fr=!1,fr;if("scrollBehavior"in document.documentElement.style)fr=!0;else{const n=Element.prototype.scrollTo;fr=!!n&&!/\{\s*\[native code\]\s*\}/.test(n.toString())}}return fr}function hc(){if("object"!=typeof document||!document)return 0;if(null==Fs){const n=document.createElement("div"),o=n.style;n.dir="rtl",o.width="1px",o.overflow="auto",o.visibility="hidden",o.pointerEvents="none",o.position="absolute";const e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",n.appendChild(e),document.body.appendChild(n),Fs=0,0===n.scrollLeft&&(n.scrollLeft=1,Fs=0===n.scrollLeft?1:2),n.remove()}return Fs}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function fc(n){if(function Xv(){if(null==Zs){const n=typeof document<"u"?document.head:null;Zs=!(!n||!n.createShadowRoot&&!n.attachShadow)}return Zs}()){const o=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&o instanceof ShadowRoot)return o}return null}function pr(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){const o=n.shadowRoot.activeElement;if(o===n)break;n=o}return n}function wn(n){return n.composedPath?n.composedPath()[0]:n.target}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ao(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const tC=new t.OlP("cdk-dir-doc",{providedIn:"root",factory:function eC(){return(0,t.f3M)(w)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}),Yb=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;let Gi=(()=>{class n{constructor(e){if(this.value="ltr",this.change=new t.vpe,e){const a=e.documentElement?e.documentElement.dir:null;this.value=function pc(n){const o=n?.toLowerCase()||"";return"auto"===o&&typeof navigator<"u"&&navigator?.language?Yb.test(navigator.language)?"rtl":"ltr":"rtl"===o?"rtl":"ltr"}((e.body?e.body.dir:null)||a||"ltr")}}ngOnDestroy(){this.change.complete()}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(tC,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),mc=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({}),n})(),Qn=(()=>{class n{constructor(e,i,a){this._ngZone=e,this._platform=i,this._scrolled=new Gt.x,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=a}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){const i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=20){return this._platform.isBrowser?new $e.y(i=>{this._globalSubscription||this._addGlobalListener();const a=e>0?this._scrolled.pipe(Do(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{a.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):At()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){const a=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(Fe(g=>!g||a.indexOf(g)>-1))}getAncestorScrollContainers(e){const i=[];return this.scrollContainers.forEach((a,g)=>{this._scrollableContainsElement(g,e)&&i.push(g)}),i}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,i){let a=Te(i),g=e.getElementRef().nativeElement;do{if(a==g)return!0}while(a=a.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>wo(this._getWindow().document,"scroll").subscribe(()=>this._scrolled.next()))}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(t.R0b),t.LFG(gi),t.LFG(w,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),_r=(()=>{class n{constructor(e,i,a,g){this.elementRef=e,this.scrollDispatcher=i,this.ngZone=a,this.dir=g,this._destroyed=new Gt.x,this._elementScrolled=new $e.y(h=>this.ngZone.runOutsideAngular(()=>wo(this.elementRef.nativeElement,"scroll").pipe(ko(this._destroyed)).subscribe(h)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){const i=this.elementRef.nativeElement,a=this.dir&&"rtl"==this.dir.value;null==e.left&&(e.left=a?e.end:e.start),null==e.right&&(e.right=a?e.start:e.end),null!=e.bottom&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),a&&0!=hc()?(null!=e.left&&(e.right=i.scrollWidth-i.clientWidth-e.left),2==hc()?e.left=e.right:1==hc()&&(e.left=e.right?-e.right:e.right)):null!=e.right&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){const i=this.elementRef.nativeElement;vg()?i.scrollTo(e):(null!=e.top&&(i.scrollTop=e.top),null!=e.left&&(i.scrollLeft=e.left))}measureScrollOffset(e){const i="left",a="right",g=this.elementRef.nativeElement;if("top"==e)return g.scrollTop;if("bottom"==e)return g.scrollHeight-g.clientHeight-g.scrollTop;const h=this.dir&&"rtl"==this.dir.value;return"start"==e?e=h?a:i:"end"==e&&(e=h?i:a),h&&2==hc()?e==i?g.scrollWidth-g.clientWidth-g.scrollLeft:g.scrollLeft:h&&1==hc()?e==i?g.scrollLeft+g.scrollWidth-g.clientWidth:-g.scrollLeft:e==i?g.scrollLeft:g.scrollWidth-g.clientWidth-g.scrollLeft}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(Qn),t.Y36(t.R0b),t.Y36(Gi,8))},n.\u0275dir=t.lG2({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]}),n})(),Cg=(()=>{class n{constructor(e,i,a){this._platform=e,this._change=new Gt.x,this._changeListener=g=>{this._change.next(g)},this._document=a,i.runOutsideAngular(()=>{if(e.isBrowser){const g=this._getWindow();g.addEventListener("resize",this._changeListener),g.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){const e=this.getViewportScrollPosition(),{width:i,height:a}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+a,right:e.left+i,height:a,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const e=this._document,i=this._getWindow(),a=e.documentElement,g=a.getBoundingClientRect();return{top:-g.top||e.body.scrollTop||i.scrollY||a.scrollTop||0,left:-g.left||e.body.scrollLeft||i.scrollX||a.scrollLeft||0}}change(e=20){return e>0?this._change.pipe(Do(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(gi),t.LFG(t.R0b),t.LFG(w,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),vr=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({}),n})(),ui=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[mc,vr,mc,vr]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class an extends Gt.x{constructor(o){super(),this._value=o}get value(){return this.getValue()}_subscribe(o){const e=super._subscribe(o);return!e.closed&&o.next(this._value),e}getValue(){const{hasError:o,thrownError:e,_value:i}=this;if(o)throw e;return this._throwIfClosed(),i}next(o){super.next(this._value=o)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var Se=D(515);function Re(n){return n<=0?()=>Se.E:(0,Ee.e)((o,e)=>{let i=0;o.subscribe((0,me.x)(e,a=>{++i<=n&&(e.next(a),n<=i&&e.complete())}))})}function wg(n){return Fe((o,e)=>n<=e)}var Yi=D(4671);function Vs(n,o){return n===o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let ff=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),pf=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[ff]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const{isArray:NC}=Array,{getPrototypeOf:mf,prototype:FC,keys:_f}=Object;function vf(n){if(1===n.length){const o=n[0];if(NC(o))return{args:o,keys:null};if(function ZC(n){return n&&"object"==typeof n&&mf(n)===FC}(o)){const e=_f(o);return{args:e.map(i=>o[i]),keys:e}}}return{args:n,keys:null}}function Cf(n,o){return n.reduce((e,i,a)=>(e[i]=o[a],e),{})}var RC=D(9672);function Dg(...n){const o=(0,Ye.yG)(n),e=(0,Ye.jO)(n),{args:i,keys:a}=vf(n);if(0===i.length)return(0,de.D)([],o);const g=new $e.y(function yr(n,o,e=Yi.y){return i=>{di(o,()=>{const{length:a}=n,g=new Array(a);let h=a,v=a;for(let O=0;O<a;O++)di(o,()=>{const T=(0,de.D)(n[O],o);let q=!1;T.subscribe((0,me.x)(i,G=>{g[O]=G,q||(q=!0,v--),v||i.next(e(g.slice()))},()=>{--h||i.complete()}))},i)},i)}}(i,o,a?h=>Cf(a,h):Yi.y));return e?g.pipe(pn(e)):g}function di(n,o,e){n?(0,RC.f)(e,n,o):o()}var js=D(8189);function Hs(...n){return function UC(){return(0,js.J)(1)}()((0,de.D)(n,(0,Ye.yG)(n)))}function To(...n){const o=(0,Ye.yG)(n);return(0,Ee.e)((e,i)=>{(o?Hs(n,e,o):Hs(n,e)).subscribe(i)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Gn=new Set;let $i,kg=(()=>{class n{constructor(e){this._platform=e,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Mf}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&function VC(n){if(!Gn.has(n))try{$i||($i=document.createElement("style"),$i.setAttribute("type","text/css"),document.head.appendChild($i)),$i.sheet&&($i.sheet.insertRule(`@media ${n} {body{ }}`,0),Gn.add(n))}catch(o){console.error(o)}}(e),this._matchMedia(e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(gi))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function Mf(n){return{matches:"all"===n||""===n,media:n,addListener:()=>{},removeListener:()=>{}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let jC=(()=>{class n{constructor(e,i){this._mediaMatcher=e,this._zone=i,this._queries=new Map,this._destroySubject=new Gt.x}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return br(Oe(e)).some(a=>this._registerQuery(a).mql.matches)}observe(e){let g=Dg(br(Oe(e)).map(h=>this._registerQuery(h).observable));return g=Hs(g.pipe(Re(1)),g.pipe(wg(1),function eP(n,o=Ai){return(0,Ee.e)((e,i)=>{let a=null,g=null,h=null;const v=()=>{if(a){a.unsubscribe(),a=null;const T=g;g=null,i.next(T)}};function O(){const T=h+n,q=o.now();if(q<T)return a=this.schedule(void 0,T-q),void i.add(a);v()}e.subscribe((0,me.x)(i,T=>{g=T,h=o.now(),a||(a=o.schedule(O,n),i.add(a))},()=>{v(),i.complete()},void 0,()=>{g=a=null}))})}(0))),g.pipe((0,Kt.U)(h=>{const v={matches:!1,breakpoints:{}};return h.forEach(({matches:O,query:T})=>{v.matches=v.matches||O,v.breakpoints[T]=O}),v}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);const i=this._mediaMatcher.matchMedia(e),g={observable:new $e.y(h=>{const v=O=>this._zone.run(()=>h.next(O));return i.addListener(v),()=>{i.removeListener(v)}}).pipe(To(i),(0,Kt.U)(({matches:h})=>({query:e,matches:h})),ko(this._destroySubject)),mql:i};return this._queries.set(e,g),g}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(kg),t.LFG(t.R0b))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function br(n){return n.map(o=>o.split(",")).reduce((o,e)=>o.concat(e)).map(o=>o.trim())}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Df=(()=>{class n{constructor(e){this._platform=e}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return function Tg(n){return!!(n.offsetWidth||n.offsetHeight||"function"==typeof n.getClientRects&&n.getClientRects().length)}(e)&&"visible"===getComputedStyle(e).visibility}isTabbable(e){if(!this._platform.isBrowser)return!1;const i=function kf(n){try{return n.frameElement}catch{return null}}(function JC(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e));if(i&&(-1===Ki(i)||!this.isVisible(i)))return!1;let a=e.nodeName.toLowerCase(),g=Ki(e);return e.hasAttribute("contenteditable")?-1!==g:!("iframe"===a||"object"===a||this._platform.WEBKIT&&this._platform.IOS&&!function Ef(n){let o=n.nodeName.toLowerCase(),e="input"===o&&n.type;return"text"===e||"password"===e||"select"===o||"textarea"===o}(e))&&("audio"===a?!!e.hasAttribute("controls")&&-1!==g:"video"===a?-1!==g&&(null!==g||this._platform.FIREFOX||e.hasAttribute("controls")):e.tabIndex>=0)}isFocusable(e,i){return function Sf(n){return!function Eg(n){return function qC(n){return"input"==n.nodeName.toLowerCase()}(n)&&"hidden"==n.type}(n)&&(function Af(n){let o=n.nodeName.toLowerCase();return"input"===o||"select"===o||"button"===o||"textarea"===o}(n)||function HC(n){return function Tf(n){return"a"==n.nodeName.toLowerCase()}(n)&&n.hasAttribute("href")}(n)||n.hasAttribute("contenteditable")||Sg(n))}(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(gi))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function Sg(n){if(!n.hasAttribute("tabindex")||void 0===n.tabIndex)return!1;let o=n.getAttribute("tabindex");return!(!o||isNaN(parseInt(o,10)))}function Ki(n){if(!Sg(n))return null;const o=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(o)?-1:o}class lP{constructor(o,e,i,a,g=!1){this._element=o,this._checker=e,this._ngZone=i,this._document=a,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,g||this.attachAnchors()}get enabled(){return this._enabled}set enabled(o){this._enabled=o,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(o,this._startAnchor),this._toggleAnchorTabIndex(o,this._endAnchor))}destroy(){const o=this._startAnchor,e=this._endAnchor;o&&(o.removeEventListener("focus",this.startAnchorListener),o.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return!!this._hasAttached||(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(o){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(o)))})}focusFirstTabbableElementWhenReady(o){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(o)))})}focusLastTabbableElementWhenReady(o){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(o)))})}_getRegionBoundary(o){const e=this._element.querySelectorAll(`[cdk-focus-region-${o}], [cdkFocusRegion${o}], [cdk-focus-${o}]`);return"start"==o?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(o){const e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){const i=this._getFirstTabbableElement(e);return i?.focus(o),!!i}return e.focus(o),!0}return this.focusFirstTabbableElement(o)}focusFirstTabbableElement(o){const e=this._getRegionBoundary("start");return e&&e.focus(o),!!e}focusLastTabbableElement(o){const e=this._getRegionBoundary("end");return e&&e.focus(o),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(o){if(this._checker.isFocusable(o)&&this._checker.isTabbable(o))return o;const e=o.children;for(let i=0;i<e.length;i++){const a=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(a)return a}return null}_getLastTabbableElement(o){if(this._checker.isFocusable(o)&&this._checker.isTabbable(o))return o;const e=o.children;for(let i=e.length-1;i>=0;i--){const a=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(a)return a}return null}_createAnchor(){const o=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,o),o.classList.add("cdk-visually-hidden"),o.classList.add("cdk-focus-trap-anchor"),o.setAttribute("aria-hidden","true"),o}_toggleAnchorTabIndex(o,e){o?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(o){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(o,this._startAnchor),this._toggleAnchorTabIndex(o,this._endAnchor))}_executeOnStable(o){this._ngZone.isStable?o():this._ngZone.onStable.pipe(Re(1)).subscribe(o)}}let yc=(()=>{class n{constructor(e,i,a){this._checker=e,this._ngZone=i,this._document=a}create(e,i=!1){return new lP(e,this._checker,this._ngZone,this._document,i)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Df),t.LFG(t.R0b),t.LFG(w))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function qs(n){return 0===n.buttons||0===n.offsetX&&0===n.offsetY}function Js(n){const o=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!(!o||-1!==o.identifier||null!=o.radiusX&&1!==o.radiusX||null!=o.radiusY&&1!==o.radiusY)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Lf=new t.OlP("cdk-input-modality-detector-options"),Ig={ignoreKeys:[18,17,224,91,16]},Wi=Ns({passive:!0,capture:!0});let Bs=(()=>{class n{constructor(e,i,a,g){this._platform=e,this._mostRecentTarget=null,this._modality=new an(null),this._lastTouchMs=0,this._onKeydown=h=>{this._options?.ignoreKeys?.some(v=>v===h.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=wn(h))},this._onMousedown=h=>{Date.now()-this._lastTouchMs<650||(this._modality.next(qs(h)?"keyboard":"mouse"),this._mostRecentTarget=wn(h))},this._onTouchstart=h=>{Js(h)?this._modality.next("keyboard"):(this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=wn(h))},this._options={...Ig,...g},this.modalityDetected=this._modality.pipe(wg(1)),this.modalityChanged=this.modalityDetected.pipe(function cn(n,o=Yi.y){return n=n??Vs,(0,Ee.e)((e,i)=>{let a,g=!0;e.subscribe((0,me.x)(i,h=>{const v=o(h);(g||!n(a,v))&&(g=!1,a=v,i.next(h))}))})}()),e.isBrowser&&i.runOutsideAngular(()=>{a.addEventListener("keydown",this._onKeydown,Wi),a.addEventListener("mousedown",this._onMousedown,Wi),a.addEventListener("touchstart",this._onTouchstart,Wi)})}get mostRecentModality(){return this._modality.value}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,Wi),document.removeEventListener("mousedown",this._onMousedown,Wi),document.removeEventListener("touchstart",this._onTouchstart,Wi))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(gi),t.LFG(t.R0b),t.LFG(w),t.LFG(Lf,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ng=new t.OlP("cdk-focus-monitor-default-options"),zs=Ns({passive:!0,capture:!0});let fP=(()=>{class n{constructor(e,i,a,g,h){this._ngZone=e,this._platform=i,this._inputModalityDetector=a,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new Gt.x,this._rootNodeFocusAndBlurListener=v=>{for(let T=wn(v);T;T=T.parentElement)"focus"===v.type?this._onFocus(v,T):this._onBlur(v,T)},this._document=g,this._detectionMode=h?.detectionMode||0}monitor(e,i=!1){const a=Te(e);if(!this._platform.isBrowser||1!==a.nodeType)return At(null);const g=fc(a)||this._getDocument(),h=this._elementInfo.get(a);if(h)return i&&(h.checkChildren=!0),h.subject;const v={checkChildren:i,subject:new Gt.x,rootNode:g};return this._elementInfo.set(a,v),this._registerGlobalListeners(v),v.subject}stopMonitoring(e){const i=Te(e),a=this._elementInfo.get(i);a&&(a.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(a))}focusVia(e,i,a){const g=Te(e);g===this._getDocument().activeElement?this._getClosestElementsInfo(g).forEach(([v,O])=>this._originChanged(v,i,O)):(this._setOrigin(i),"function"==typeof g.focus&&g.focus(a))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return 1===this._detectionMode||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused","touch"===i),e.classList.toggle("cdk-keyboard-focused","keyboard"===i),e.classList.toggle("cdk-mouse-focused","mouse"===i),e.classList.toggle("cdk-program-focused","program"===i)}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{this._origin=e,this._originFromTouchInteraction="touch"===e&&i,0===this._detectionMode&&(clearTimeout(this._originTimeoutId),this._originTimeoutId=setTimeout(()=>this._origin=null,this._originFromTouchInteraction?650:1))})}_onFocus(e,i){const a=this._elementInfo.get(i),g=wn(e);!a||!a.checkChildren&&i!==g||this._originChanged(i,this._getFocusOrigin(g),a)}_onBlur(e,i){const a=this._elementInfo.get(i);!a||a.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(a,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;const i=e.rootNode,a=this._rootNodeFocusListenerCount.get(i)||0;a||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,zs),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,zs)}),this._rootNodeFocusListenerCount.set(i,a+1),1==++this._monitoredElementCount&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ko(this._stopInputModalityDetector)).subscribe(g=>{this._setOrigin(g,!0)}))}_removeGlobalListeners(e){const i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){const a=this._rootNodeFocusListenerCount.get(i);a>1?this._rootNodeFocusListenerCount.set(i,a-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,zs),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,zs),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,a){this._setClasses(e,i),this._emitOrigin(a,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){const i=[];return this._elementInfo.forEach((a,g)=>{(g===e||a.checkChildren&&g.contains(e))&&i.push([g,a])}),i}_isLastInteractionFromInputLabel(e){const{_mostRecentTarget:i,mostRecentModality:a}=this._inputModalityDetector;if("mouse"!==a||!i||i===e||"INPUT"!==e.nodeName&&"TEXTAREA"!==e.nodeName||e.disabled)return!1;const g=e.labels;if(g)for(let h=0;h<g.length;h++)if(g[h].contains(i))return!0;return!1}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(t.R0b),t.LFG(gi),t.LFG(Bs),t.LFG(w,8),t.LFG(Ng,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ff="cdk-high-contrast-black-on-white",Fg="cdk-high-contrast-white-on-black",Zg="cdk-high-contrast-active";let KC=(()=>{class n{constructor(e,i){this._platform=e,this._document=i,this._breakpointSubscription=(0,t.f3M)(jC).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);const i=this._document.defaultView||window,a=i&&i.getComputedStyle?i.getComputedStyle(e):null,g=(a&&a.backgroundColor||"").replace(/ /g,"");switch(e.remove(),g){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return 2;case"rgb(255,255,255)":case"rgb(255,250,239)":return 1}return 0}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){const e=this._document.body.classList;e.remove(Zg,Ff,Fg),this._hasCheckedHighContrastMode=!0;const i=this.getHighContrastMode();1===i?e.add(Zg,Ff):2===i&&e.add(Zg,Fg)}}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(gi),t.LFG(w))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),Yn=(()=>{class n{constructor(e){e._applyBodyHighContrastModeCssClasses()}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(KC))},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[pf]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var Pr=D(6451);function We(n,o,e){const i=(0,Fn.m)(n)||o||e?{next:n,error:o,complete:e}:n;return i?(0,Ee.e)((a,g)=>{var h;null===(h=i.subscribe)||void 0===h||h.call(i);let v=!0;a.subscribe((0,me.x)(g,O=>{var T;null===(T=i.next)||void 0===T||T.call(i,O),g.next(O)},()=>{var O;v=!1,null===(O=i.complete)||void 0===O||O.call(i),g.complete()},O=>{var T;v=!1,null===(T=i.error)||void 0===T||T.call(i,O),g.error(O)},()=>{var O,T;v&&(null===(O=i.unsubscribe)||void 0===O||O.call(i)),null===(T=i.finalize)||void 0===T||T.call(i)}))}):Yi.y}function mn(n,o){return(0,Ee.e)((e,i)=>{let a=null,g=0,h=!1;const v=()=>h&&!a&&i.complete();e.subscribe((0,me.x)(i,O=>{a?.unsubscribe();let T=0;const q=g++;(0,Nn.Xf)(n(O,q)).subscribe(a=(0,me.x)(i,G=>i.next(o?o(O,G,q,T++):G),()=>{a=null,v()}))},()=>{h=!0,v()}))})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Rg(n,o,e){for(let i in o)if(o.hasOwnProperty(i)){const a=o[i];a?n.setProperty(i,a,e?.has(i)?"important":""):n.removeProperty(i)}return n}function xr(n,o){const e=o?"":"none";Rg(n.style,{"touch-action":o?"":"none","-webkit-user-drag":o?"":"none","-webkit-tap-highlight-color":o?"":"transparent","user-select":e,"-ms-user-select":e,"-webkit-user-select":e,"-moz-user-select":e})}function Ug(n,o,e){Rg(n.style,{position:o?"":"fixed",top:o?"":"0",opacity:o?"":"0",left:o?"":"-999em"},e)}function bc(n,o){return o&&"none"!=o?n+" "+o:n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Zf(n){const o=n.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(n)*o}function zt(n,o){return n.getPropertyValue(o).split(",").map(i=>i.trim())}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Oc(n){const o=n.getBoundingClientRect();return{top:o.top,right:o.right,bottom:o.bottom,left:o.left,width:o.width,height:o.height,x:o.x,y:o.y}}function Pc(n,o,e){const{top:i,bottom:a,left:g,right:h}=n;return e>=i&&e<=a&&o>=g&&o<=h}function wr(n,o,e){n.top+=o,n.bottom=n.top+n.height,n.left+=e,n.right=n.left+n.width}function Rf(n,o,e,i){const{top:a,right:g,bottom:h,left:v,width:O,height:T}=n,q=O*o,G=T*o;return i>a-G&&i<h+G&&e>v-q&&e<g+q}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Uf{constructor(o){this._document=o,this.positions=new Map}clear(){this.positions.clear()}cache(o){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),o.forEach(e=>{this.positions.set(e,{scrollPosition:{top:e.scrollTop,left:e.scrollLeft},clientRect:Oc(e)})})}handleScroll(o){const e=wn(o),i=this.positions.get(e);if(!i)return null;const a=i.scrollPosition;let g,h;if(e===this._document){const T=this.getViewportScrollPosition();g=T.top,h=T.left}else g=e.scrollTop,h=e.scrollLeft;const v=a.top-g,O=a.left-h;return this.positions.forEach((T,q)=>{T.clientRect&&e!==q&&e.contains(q)&&wr(T.clientRect,v,O)}),a.top=g,a.left=h,{top:v,left:O}}getViewportScrollPosition(){return{top:window.scrollY,left:window.scrollX}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Vg(n){const o=n.cloneNode(!0),e=o.querySelectorAll("[id]"),i=n.nodeName.toLowerCase();o.removeAttribute("id");for(let a=0;a<e.length;a++)e[a].removeAttribute("id");return"canvas"===i?qf(n,o):("input"===i||"select"===i||"textarea"===i)&&Hf(n,o),Vf("canvas",n,o,qf),Vf("input, textarea, select",n,o,Hf),o}function Vf(n,o,e,i){const a=o.querySelectorAll(n);if(a.length){const g=e.querySelectorAll(n);for(let h=0;h<a.length;h++)i(a[h],g[h])}}let jf=0;function Hf(n,o){"file"!==o.type&&(o.value=n.value),"radio"===o.type&&o.name&&(o.name=`mat-clone-${o.name}-${jf++}`)}function qf(n,o){const e=o.getContext("2d");if(e)try{e.drawImage(n,0,0)}catch{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const tM=Ns({passive:!0}),Qs=Ns({passive:!1}),Ti=new Set(["position"]);class eM{constructor(o,e,i,a,g,h){this._config=e,this._document=i,this._ngZone=a,this._viewportRuler=g,this._dragDropRegistry=h,this._passiveTransform={x:0,y:0},this._activeTransform={x:0,y:0},this._hasStartedDragging=!1,this._moveEvents=new Gt.x,this._pointerMoveSubscription=zn.w0.EMPTY,this._pointerUpSubscription=zn.w0.EMPTY,this._scrollSubscription=zn.w0.EMPTY,this._resizeSubscription=zn.w0.EMPTY,this._boundaryElement=null,this._nativeInteractionsEnabled=!0,this._handles=[],this._disabledHandles=new Set,this._direction="ltr",this.dragStartDelay=0,this._disabled=!1,this.beforeStarted=new Gt.x,this.started=new Gt.x,this.released=new Gt.x,this.ended=new Gt.x,this.entered=new Gt.x,this.exited=new Gt.x,this.dropped=new Gt.x,this.moved=this._moveEvents,this._pointerDown=v=>{if(this.beforeStarted.next(),this._handles.length){const O=this._getTargetHandle(v);O&&!this._disabledHandles.has(O)&&!this.disabled&&this._initializeDragSequence(O,v)}else this.disabled||this._initializeDragSequence(this._rootElement,v)},this._pointerMove=v=>{const O=this._getPointerPositionOnPage(v);if(!this._hasStartedDragging){if(Math.abs(O.x-this._pickupPositionOnPage.x)+Math.abs(O.y-this._pickupPositionOnPage.y)>=this._config.dragStartThreshold){const wt=Date.now()>=this._dragStartTime+this._getDragStartDelay(v),Jt=this._dropContainer;if(!wt)return void this._endDragSequence(v);(!Jt||!Jt.isDragging()&&!Jt.isReceiving())&&(v.preventDefault(),this._hasStartedDragging=!0,this._ngZone.run(()=>this._startDragSequence(v)))}return}v.preventDefault();const T=this._getConstrainedPointerPosition(O);if(this._hasMoved=!0,this._lastKnownPointerPosition=O,this._updatePointerDirectionDelta(T),this._dropContainer)this._updateActiveDropContainer(T,O);else{const q=this.constrainPosition?this._initialClientRect:this._pickupPositionOnPage,G=this._activeTransform;G.x=T.x-q.x+this._passiveTransform.x,G.y=T.y-q.y+this._passiveTransform.y,this._applyRootElementTransform(G.x,G.y)}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:T,event:v,distance:this._getDragDistance(T),delta:this._pointerDirectionDelta})})},this._pointerUp=v=>{this._endDragSequence(v)},this._nativeDragStart=v=>{if(this._handles.length){const O=this._getTargetHandle(v);O&&!this._disabledHandles.has(O)&&!this.disabled&&v.preventDefault()}else this.disabled||v.preventDefault()},this.withRootElement(o).withParent(e.parentDragRef||null),this._parentPositions=new Uf(i),h.registerDragItem(this)}get disabled(){return this._disabled||!(!this._dropContainer||!this._dropContainer.disabled)}set disabled(o){const e=Bn(o);e!==this._disabled&&(this._disabled=e,this._toggleNativeDragInteractions(),this._handles.forEach(i=>xr(i,e)))}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(o){this._handles=o.map(i=>Te(i)),this._handles.forEach(i=>xr(i,this.disabled)),this._toggleNativeDragInteractions();const e=new Set;return this._disabledHandles.forEach(i=>{this._handles.indexOf(i)>-1&&e.add(i)}),this._disabledHandles=e,this}withPreviewTemplate(o){return this._previewTemplate=o,this}withPlaceholderTemplate(o){return this._placeholderTemplate=o,this}withRootElement(o){const e=Te(o);return e!==this._rootElement&&(this._rootElement&&this._removeRootElementListeners(this._rootElement),this._ngZone.runOutsideAngular(()=>{e.addEventListener("mousedown",this._pointerDown,Qs),e.addEventListener("touchstart",this._pointerDown,tM),e.addEventListener("dragstart",this._nativeDragStart,Qs)}),this._initialTransform=void 0,this._rootElement=e),typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(o){return this._boundaryElement=o?Te(o):null,this._resizeSubscription.unsubscribe(),o&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(o){return this._parentDragRef=o,this}dispose(){this._removeRootElementListeners(this._rootElement),this.isDragging()&&this._rootElement?.remove(),this._anchor?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeSubscriptions(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._anchor=this._parentDragRef=null}isDragging(){return this._hasStartedDragging&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}disableHandle(o){!this._disabledHandles.has(o)&&this._handles.indexOf(o)>-1&&(this._disabledHandles.add(o),xr(o,!0))}enableHandle(o){this._disabledHandles.has(o)&&(this._disabledHandles.delete(o),xr(o,this.disabled))}withDirection(o){return this._direction=o,this}_withDropContainer(o){this._dropContainer=o}getFreeDragPosition(){const o=this.isDragging()?this._activeTransform:this._passiveTransform;return{x:o.x,y:o.y}}setFreeDragPosition(o){return this._activeTransform={x:0,y:0},this._passiveTransform.x=o.x,this._passiveTransform.y=o.y,this._dropContainer||this._applyRootElementTransform(o.x,o.y),this}withPreviewContainer(o){return this._previewContainer=o,this}_sortFromLastPointerPosition(){const o=this._lastKnownPointerPosition;o&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(o),o)}_removeSubscriptions(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe()}_destroyPreview(){this._preview?.remove(),this._previewRef?.destroy(),this._preview=this._previewRef=null}_destroyPlaceholder(){this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._placeholderRef=null}_endDragSequence(o){if(this._dragDropRegistry.isDragging(this)&&(this._removeSubscriptions(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),this._hasStartedDragging))if(this.released.next({source:this,event:o}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(o),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)});else{this._passiveTransform.x=this._activeTransform.x;const e=this._getPointerPositionOnPage(o);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(e),dropPoint:e,event:o})}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)}}_startDragSequence(o){Gs(o)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();const e=this._dropContainer;if(e){const i=this._rootElement,a=i.parentNode,g=this._placeholder=this._createPlaceholderElement(),h=this._anchor=this._anchor||this._document.createComment(""),v=this._getShadowRoot();a.insertBefore(h,i),this._initialTransform=i.style.transform||"",this._preview=this._createPreviewElement(),Ug(i,!1,Ti),this._document.body.appendChild(a.replaceChild(g,i)),this._getPreviewInsertionPoint(a,v).appendChild(this._preview),this.started.next({source:this,event:o}),e.start(),this._initialContainer=e,this._initialIndex=e.getItemIndex(this)}else this.started.next({source:this,event:o}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(e?e.getScrollableParents():[])}_initializeDragSequence(o,e){this._parentDragRef&&e.stopPropagation();const i=this.isDragging(),a=Gs(e),g=!a&&0!==e.button,h=this._rootElement,v=wn(e),O=!a&&this._lastTouchEventTime&&this._lastTouchEventTime+800>Date.now(),T=a?Js(e):qs(e);if(v&&v.draggable&&"mousedown"===e.type&&e.preventDefault(),i||g||O||T)return;if(this._handles.length){const vt=h.style;this._rootElementTapHighlight=vt.webkitTapHighlightColor||"",vt.webkitTapHighlightColor="transparent"}this._hasStartedDragging=this._hasMoved=!1,this._removeSubscriptions(),this._initialClientRect=this._rootElement.getBoundingClientRect(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(vt=>this._updateOnScroll(vt)),this._boundaryElement&&(this._boundaryRect=Oc(this._boundaryElement));const q=this._previewTemplate;this._pickupPositionInElement=q&&q.template&&!q.matchSize?{x:0,y:0}:this._getPointerPositionInElement(this._initialClientRect,o,e);const G=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(e);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:G.x,y:G.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,e)}_cleanupDragArtifacts(o){Ug(this._rootElement,!0,Ti),this._anchor.parentNode.replaceChild(this._rootElement,this._anchor),this._destroyPreview(),this._destroyPlaceholder(),this._initialClientRect=this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{const e=this._dropContainer,i=e.getItemIndex(this),a=this._getPointerPositionOnPage(o),g=this._getDragDistance(a),h=e._isOverContainer(a.x,a.y);this.ended.next({source:this,distance:g,dropPoint:a,event:o}),this.dropped.next({item:this,currentIndex:i,previousIndex:this._initialIndex,container:e,previousContainer:this._initialContainer,isPointerOverContainer:h,distance:g,dropPoint:a,event:o}),e.drop(this,i,this._initialIndex,this._initialContainer,h,g,a),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:o,y:e},{x:i,y:a}){let g=this._initialContainer._getSiblingContainerFromPosition(this,o,e);!g&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(o,e)&&(g=this._initialContainer),g&&g!==this._dropContainer&&this._ngZone.run(()=>{this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._dropContainer=g,this._dropContainer.enter(this,o,e,g===this._initialContainer&&g.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:g,currentIndex:g.getItemIndex(this)})}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(i,a),this._dropContainer._sortItem(this,o,e,this._pointerDirectionDelta),this.constrainPosition?this._applyPreviewTransform(o,e):this._applyPreviewTransform(o-this._pickupPositionInElement.x,e-this._pickupPositionInElement.y))}_createPreviewElement(){const o=this._previewTemplate,e=this.previewClass,i=o?o.template:null;let a;if(i&&o){const g=o.matchSize?this._initialClientRect:null,h=o.viewContainer.createEmbeddedView(i,o.context);h.detectChanges(),a=nM(h,this._document),this._previewRef=h,o.matchSize?iM(a,g):a.style.transform=Dr(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else a=Vg(this._rootElement),iM(a,this._initialClientRect),this._initialTransform&&(a.style.transform=this._initialTransform);return Rg(a.style,{"pointer-events":"none",margin:"0",position:"fixed",top:"0",left:"0","z-index":`${this._config.zIndex||1e3}`},Ti),xr(a,!1),a.classList.add("cdk-drag-preview"),a.setAttribute("dir",this._direction),e&&(Array.isArray(e)?e.forEach(g=>a.classList.add(g)):a.classList.add(e)),a}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();const o=this._placeholder.getBoundingClientRect();this._preview.classList.add("cdk-drag-animating"),this._applyPreviewTransform(o.left,o.top);const e=function XC(n){const o=getComputedStyle(n),e=zt(o,"transition-property"),i=e.find(v=>"transform"===v||"all"===v);if(!i)return 0;const a=e.indexOf(i),g=zt(o,"transition-duration"),h=zt(o,"transition-delay");return Zf(g[a])+Zf(h[a])}(this._preview);return 0===e?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(i=>{const a=h=>{(!h||wn(h)===this._preview&&"transform"===h.propertyName)&&(this._preview?.removeEventListener("transitionend",a),i(),clearTimeout(g))},g=setTimeout(a,1.5*e);this._preview.addEventListener("transitionend",a)}))}_createPlaceholderElement(){const o=this._placeholderTemplate,e=o?o.template:null;let i;return e?(this._placeholderRef=o.viewContainer.createEmbeddedView(e,o.context),this._placeholderRef.detectChanges(),i=nM(this._placeholderRef,this._document)):i=Vg(this._rootElement),i.style.pointerEvents="none",i.classList.add("cdk-drag-placeholder"),i}_getPointerPositionInElement(o,e,i){const a=e===this._rootElement?null:e,g=a?a.getBoundingClientRect():o,h=Gs(i)?i.targetTouches[0]:i,v=this._getViewportScrollPosition();return{x:g.left-o.left+(h.pageX-g.left-v.left),y:g.top-o.top+(h.pageY-g.top-v.top)}}_getPointerPositionOnPage(o){const e=this._getViewportScrollPosition(),i=Gs(o)?o.touches[0]||o.changedTouches[0]||{pageX:0,pageY:0}:o,a=i.pageX-e.left,g=i.pageY-e.top;if(this._ownerSVGElement){const h=this._ownerSVGElement.getScreenCTM();if(h){const v=this._ownerSVGElement.createSVGPoint();return v.x=a,v.y=g,v.matrixTransform(h.inverse())}}return{x:a,y:g}}_getConstrainedPointerPosition(o){const e=this._dropContainer?this._dropContainer.lockAxis:null;let{x:i,y:a}=this.constrainPosition?this.constrainPosition(o,this,this._initialClientRect,this._pickupPositionInElement):o;if("x"===this.lockAxis||"x"===e?a=this._pickupPositionOnPage.y:("y"===this.lockAxis||"y"===e)&&(i=this._pickupPositionOnPage.x),this._boundaryRect){const{x:g,y:h}=this._pickupPositionInElement,v=this._boundaryRect,{width:O,height:T}=this._getPreviewRect(),q=v.top+h,G=v.bottom-(T-h);i=xc(i,v.left+g,v.right-(O-g)),a=xc(a,q,G)}return{x:i,y:a}}_updatePointerDirectionDelta(o){const{x:e,y:i}=o,a=this._pointerDirectionDelta,g=this._pointerPositionAtLastDirectionChange,h=Math.abs(e-g.x),v=Math.abs(i-g.y);return h>this._config.pointerDirectionChangeThreshold&&(a.x=e>g.x?1:-1,g.x=e),v>this._config.pointerDirectionChangeThreshold&&(a.y=i>g.y?1:-1,g.y=i),a}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;const o=this._handles.length>0||!this.isDragging();o!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=o,xr(this._rootElement,o))}_removeRootElementListeners(o){o.removeEventListener("mousedown",this._pointerDown,Qs),o.removeEventListener("touchstart",this._pointerDown,tM),o.removeEventListener("dragstart",this._nativeDragStart,Qs)}_applyRootElementTransform(o,e){const i=Dr(o,e),a=this._rootElement.style;null==this._initialTransform&&(this._initialTransform=a.transform&&"none"!=a.transform?a.transform:""),a.transform=bc(i,this._initialTransform)}_applyPreviewTransform(o,e){const i=this._previewTemplate?.template?void 0:this._initialTransform,a=Dr(o,e);this._preview.style.transform=bc(a,i)}_getDragDistance(o){const e=this._pickupPositionOnPage;return e?{x:o.x-e.x,y:o.y-e.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear()}_containInsideBoundaryOnResize(){let{x:o,y:e}=this._passiveTransform;if(0===o&&0===e||this.isDragging()||!this._boundaryElement)return;const i=this._rootElement.getBoundingClientRect(),a=this._boundaryElement.getBoundingClientRect();if(0===a.width&&0===a.height||0===i.width&&0===i.height)return;const g=a.left-i.left,h=i.right-a.right,v=a.top-i.top,O=i.bottom-a.bottom;a.width>i.width?(g>0&&(o+=g),h>0&&(o-=h)):o=0,a.height>i.height?(v>0&&(e+=v),O>0&&(e-=O)):e=0,(o!==this._passiveTransform.x||e!==this._passiveTransform.y)&&this.setFreeDragPosition({y:e,x:o})}_getDragStartDelay(o){const e=this.dragStartDelay;return"number"==typeof e?e:Gs(o)?e.touch:e?e.mouse:0}_updateOnScroll(o){const e=this._parentPositions.handleScroll(o);if(e){const i=wn(o);this._boundaryRect&&i!==this._boundaryElement&&i.contains(this._boundaryElement)&&wr(this._boundaryRect,e.top,e.left),this._pickupPositionOnPage.x+=e.left,this._pickupPositionOnPage.y+=e.top,this._dropContainer||(this._activeTransform.x-=e.left,this._activeTransform.y-=e.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y))}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return void 0===this._cachedShadowRoot&&(this._cachedShadowRoot=fc(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(o,e){const i=this._previewContainer||"global";if("parent"===i)return o;if("global"===i){const a=this._document;return e||a.fullscreenElement||a.webkitFullscreenElement||a.mozFullScreenElement||a.msFullscreenElement||a.body}return Te(i)}_getPreviewRect(){return(!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=this._preview?this._preview.getBoundingClientRect():this._initialClientRect),this._previewRect}_getTargetHandle(o){return this._handles.find(e=>o.target&&(o.target===e||e.contains(o.target)))}}function Dr(n,o){return`translate3d(${Math.round(n)}px, ${Math.round(o)}px, 0)`}function xc(n,o,e){return Math.max(o,Math.min(e,n))}function Gs(n){return"t"===n.type[0]}function nM(n,o){const e=n.rootNodes;if(1===e.length&&e[0].nodeType===o.ELEMENT_NODE)return e[0];const i=o.createElement("div");return e.forEach(a=>i.appendChild(a)),i}function iM(n,o){n.style.width=`${o.width}px`,n.style.height=`${o.height}px`,n.style.transform=Dr(o.left,o.top)
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}function _n(n,o,e){const i=wc(o,n.length-1),a=wc(e,n.length-1);if(i===a)return;const g=n[i],h=a<i?-1:1;for(let v=i;v!==a;v+=h)n[v]=n[v+h];n[a]=g}function wc(n,o){return Math.max(0,Math.min(o,n))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class rM{constructor(o,e){this._element=o,this._dragDropRegistry=e,this._itemPositions=[],this.orientation="vertical",this._previousSwap={drag:null,delta:0,overlaps:!1}}start(o){this.withItems(o)}sort(o,e,i,a){const g=this._itemPositions,h=this._getItemIndexFromPointerPosition(o,e,i,a);if(-1===h&&g.length>0)return null;const v="horizontal"===this.orientation,O=g.findIndex(ee=>ee.drag===o),T=g[h],G=T.clientRect,vt=O>h?1:-1,wt=this._getItemOffsetPx(g[O].clientRect,G,vt),Jt=this._getSiblingOffsetPx(O,g,vt),ae=g.slice();return _n(g,O,h),g.forEach((ee,bi)=>{if(ae[bi]===ee)return;const yn=ee.drag===o,Mo=yn?wt:Jt,Nl=yn?o.getPlaceholderElement():ee.drag.getRootElement();ee.offset+=Mo,v?(Nl.style.transform=bc(`translate3d(${Math.round(ee.offset)}px, 0, 0)`,ee.initialTransform),wr(ee.clientRect,0,Mo)):(Nl.style.transform=bc(`translate3d(0, ${Math.round(ee.offset)}px, 0)`,ee.initialTransform),wr(ee.clientRect,Mo,0))}),this._previousSwap.overlaps=Pc(G,e,i),this._previousSwap.drag=T.drag,this._previousSwap.delta=v?a.x:a.y,{previousIndex:O,currentIndex:h}}enter(o,e,i,a){const g=null==a||a<0?this._getItemIndexFromPointerPosition(o,e,i):a,h=this._activeDraggables,v=h.indexOf(o),O=o.getPlaceholderElement();let T=h[g];if(T===o&&(T=h[g+1]),!T&&(null==g||-1===g||g<h.length-1)&&this._shouldEnterAsFirstChild(e,i)&&(T=h[0]),v>-1&&h.splice(v,1),T&&!this._dragDropRegistry.isDragging(T)){const q=T.getRootElement();q.parentElement.insertBefore(O,q),h.splice(g,0,o)}else Te(this._element).appendChild(O),h.push(o);O.style.transform="",this._cacheItemPositions()}withItems(o){this._activeDraggables=o.slice(),this._cacheItemPositions()}withSortPredicate(o){this._sortPredicate=o}reset(){this._activeDraggables.forEach(o=>{const e=o.getRootElement();if(e){const i=this._itemPositions.find(a=>a.drag===o)?.initialTransform;e.style.transform=i||""}}),this._itemPositions=[],this._activeDraggables=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=!1}getActiveItemsSnapshot(){return this._activeDraggables}getItemIndex(o){return("horizontal"===this.orientation&&"rtl"===this.direction?this._itemPositions.slice().reverse():this._itemPositions).findIndex(i=>i.drag===o)}updateOnScroll(o,e){this._itemPositions.forEach(({clientRect:i})=>{wr(i,o,e)}),this._itemPositions.forEach(({drag:i})=>{this._dragDropRegistry.isDragging(i)&&i._sortFromLastPointerPosition()})}_cacheItemPositions(){const o="horizontal"===this.orientation;this._itemPositions=this._activeDraggables.map(e=>{const i=e.getVisibleElement();return{drag:e,offset:0,initialTransform:i.style.transform||"",clientRect:Oc(i)}}).sort((e,i)=>o?e.clientRect.left-i.clientRect.left:e.clientRect.top-i.clientRect.top)}_getItemOffsetPx(o,e,i){const a="horizontal"===this.orientation;let g=a?e.left-o.left:e.top-o.top;return-1===i&&(g+=a?e.width-o.width:e.height-o.height),g}_getSiblingOffsetPx(o,e,i){const a="horizontal"===this.orientation,g=e[o].clientRect,h=e[o+-1*i];let v=g[a?"width":"height"]*i;if(h){const O=a?"left":"top",T=a?"right":"bottom";-1===i?v-=h.clientRect[O]-g[T]:v+=g[O]-h.clientRect[T]}return v}_shouldEnterAsFirstChild(o,e){if(!this._activeDraggables.length)return!1;const i=this._itemPositions,a="horizontal"===this.orientation;if(i[0].drag!==this._activeDraggables[0]){const h=i[i.length-1].clientRect;return a?o>=h.right:e>=h.bottom}{const h=i[0].clientRect;return a?o<=h.left:e<=h.top}}_getItemIndexFromPointerPosition(o,e,i,a){const g="horizontal"===this.orientation,h=this._itemPositions.findIndex(({drag:v,clientRect:O})=>{if(v===o)return!1;if(a){const T=g?a.x:a.y;if(v===this._previousSwap.drag&&this._previousSwap.overlaps&&T===this._previousSwap.delta)return!1}return g?e>=Math.floor(O.left)&&e<Math.floor(O.right):i>=Math.floor(O.top)&&i<Math.floor(O.bottom)});return-1!==h&&this._sortPredicate(h,o)?h:-1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class zf{constructor(o,e,i,a,g){this._dragDropRegistry=e,this._ngZone=a,this._viewportRuler=g,this.disabled=!1,this.sortingDisabled=!1,this.autoScrollDisabled=!1,this.autoScrollStep=2,this.enterPredicate=()=>!0,this.sortPredicate=()=>!0,this.beforeStarted=new Gt.x,this.entered=new Gt.x,this.exited=new Gt.x,this.dropped=new Gt.x,this.sorted=new Gt.x,this._isDragging=!1,this._draggables=[],this._siblings=[],this._activeSiblings=new Set,this._viewportScrollSubscription=zn.w0.EMPTY,this._verticalScrollDirection=0,this._horizontalScrollDirection=0,this._stopScrollTimers=new Gt.x,this._cachedShadowRoot=null,this._startScrollInterval=()=>{this._stopScrolling(),
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function WC(n=0,o=Ai){return n<0&&(n=0),mg(n,n,o)}(0,dg).pipe(ko(this._stopScrollTimers)).subscribe(()=>{const h=this._scrollNode,v=this.autoScrollStep;1===this._verticalScrollDirection?h.scrollBy(0,-v):2===this._verticalScrollDirection&&h.scrollBy(0,v),1===this._horizontalScrollDirection?h.scrollBy(-v,0):2===this._horizontalScrollDirection&&h.scrollBy(v,0)})},this.element=Te(o),this._document=i,this.withScrollableParents([this.element]),e.registerDropContainer(this),this._parentPositions=new Uf(i),this._sortStrategy=new rM(this.element,e),this._sortStrategy.withSortPredicate((h,v)=>this.sortPredicate(h,v,this))}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings()}enter(o,e,i,a){this._draggingStarted(),null==a&&this.sortingDisabled&&(a=this._draggables.indexOf(o)),this._sortStrategy.enter(o,e,i,a),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:o,container:this,currentIndex:this.getItemIndex(o)})}exit(o){this._reset(),this.exited.next({item:o,container:this})}drop(o,e,i,a,g,h,v,O={}){this._reset(),this.dropped.next({item:o,currentIndex:e,previousIndex:i,container:this,previousContainer:a,isPointerOverContainer:g,distance:h,dropPoint:v,event:O})}withItems(o){const e=this._draggables;return this._draggables=o,o.forEach(i=>i._withDropContainer(this)),this.isDragging()&&(e.filter(a=>a.isDragging()).every(a=>-1===o.indexOf(a))?this._reset():this._sortStrategy.withItems(this._draggables)),this}withDirection(o){return this._sortStrategy.direction=o,this}connectedTo(o){return this._siblings=o.slice(),this}withOrientation(o){return this._sortStrategy.orientation=o,this}withScrollableParents(o){const e=Te(this.element);return this._scrollableElements=-1===o.indexOf(e)?[e,...o]:o.slice(),this}getScrollableParents(){return this._scrollableElements}getItemIndex(o){return this._isDragging?this._sortStrategy.getItemIndex(o):this._draggables.indexOf(o)}isReceiving(){return this._activeSiblings.size>0}_sortItem(o,e,i,a){if(this.sortingDisabled||!this._clientRect||!Rf(this._clientRect,.05,e,i))return;const g=this._sortStrategy.sort(o,e,i,a);g&&this.sorted.next({previousIndex:g.previousIndex,currentIndex:g.currentIndex,container:this,item:o})}_startScrollingIfNecessary(o,e){if(this.autoScrollDisabled)return;let i,a=0,g=0;if(this._parentPositions.positions.forEach((h,v)=>{v===this._document||!h.clientRect||i||Rf(h.clientRect,.05,o,e)&&([a,g]=function Gf(n,o,e,i){const a=Ys(o,i),g=Qf(o,e);let h=0,v=0;if(a){const O=n.scrollTop;1===a?O>0&&(h=1):n.scrollHeight-O>n.clientHeight&&(h=2)}if(g){const O=n.scrollLeft;1===g?O>0&&(v=1):n.scrollWidth-O>n.clientWidth&&(v=2)}return[h,v]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(v,h.clientRect,o,e),(a||g)&&(i=v))}),!a&&!g){const{width:h,height:v}=this._viewportRuler.getViewportSize(),O={width:h,height:v,top:0,right:h,bottom:v,left:0};a=Ys(O,e),g=Qf(O,o),i=window}i&&(a!==this._verticalScrollDirection||g!==this._horizontalScrollDirection||i!==this._scrollNode)&&(this._verticalScrollDirection=a,this._horizontalScrollDirection=g,this._scrollNode=i,(a||g)&&i?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling())}_stopScrolling(){this._stopScrollTimers.next()}_draggingStarted(){const o=Te(this.element).style;this.beforeStarted.next(),this._isDragging=!0,this._initialScrollSnap=o.msScrollSnapType||o.scrollSnapType||"",o.scrollSnapType=o.msScrollSnapType="none",this._sortStrategy.start(this._draggables),this._cacheParentPositions(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents()}_cacheParentPositions(){const o=Te(this.element);this._parentPositions.cache(this._scrollableElements),this._clientRect=this._parentPositions.positions.get(o).clientRect}_reset(){this._isDragging=!1;const o=Te(this.element).style;o.scrollSnapType=o.msScrollSnapType=this._initialScrollSnap,this._siblings.forEach(e=>e._stopReceiving(this)),this._sortStrategy.reset(),this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear()}_isOverContainer(o,e){return null!=this._clientRect&&Pc(this._clientRect,o,e)}_getSiblingContainerFromPosition(o,e,i){return this._siblings.find(a=>a._canReceive(o,e,i))}_canReceive(o,e,i){if(!this._clientRect||!Pc(this._clientRect,e,i)||!this.enterPredicate(o,this))return!1;const a=this._getShadowRoot().elementFromPoint(e,i);if(!a)return!1;const g=Te(this.element);return a===g||g.contains(a)}_startReceiving(o,e){const i=this._activeSiblings;!i.has(o)&&e.every(a=>this.enterPredicate(a,this)||this._draggables.indexOf(a)>-1)&&(i.add(o),this._cacheParentPositions(),this._listenToScrollEvents())}_stopReceiving(o){this._activeSiblings.delete(o),this._viewportScrollSubscription.unsubscribe()}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(o=>{if(this.isDragging()){const e=this._parentPositions.handleScroll(o);e&&this._sortStrategy.updateOnScroll(e.top,e.left)}else this.isReceiving()&&this._cacheParentPositions()})}_getShadowRoot(){if(!this._cachedShadowRoot){const o=fc(Te(this.element));this._cachedShadowRoot=o||this._document}return this._cachedShadowRoot}_notifyReceivingSiblings(){const o=this._sortStrategy.getActiveItemsSnapshot().filter(e=>e.isDragging());this._siblings.forEach(e=>e._startReceiving(this,o))}}function Ys(n,o){const{top:e,bottom:i,height:a}=n,g=.05*a;return o>=e-g&&o<=e+g?1:o>=i-g&&o<=i+g?2:0}function Qf(n,o){const{left:e,right:i,width:a}=n,g=.05*a;return o>=e-g&&o<=e+g?1:o>=i-g&&o<=i+g?2:0}const Dc=Ns({passive:!1,capture:!0});let sM=(()=>{class n{constructor(e,i){this._ngZone=e,this._dropInstances=new Set,this._dragInstances=new Set,this._activeDragInstances=[],this._globalListeners=new Map,this._draggingPredicate=a=>a.isDragging(),this.pointerMove=new Gt.x,this.pointerUp=new Gt.x,this.scroll=new Gt.x,this._preventDefaultWhileDragging=a=>{this._activeDragInstances.length>0&&a.preventDefault()},this._persistentTouchmoveListener=a=>{this._activeDragInstances.length>0&&(this._activeDragInstances.some(this._draggingPredicate)&&a.preventDefault(),this.pointerMove.next(a))},this._document=i}registerDropContainer(e){this._dropInstances.has(e)||this._dropInstances.add(e)}registerDragItem(e){this._dragInstances.add(e),1===this._dragInstances.size&&this._ngZone.runOutsideAngular(()=>{this._document.addEventListener("touchmove",this._persistentTouchmoveListener,Dc)})}removeDropContainer(e){this._dropInstances.delete(e)}removeDragItem(e){this._dragInstances.delete(e),this.stopDragging(e),0===this._dragInstances.size&&this._document.removeEventListener("touchmove",this._persistentTouchmoveListener,Dc)}startDragging(e,i){if(!(this._activeDragInstances.indexOf(e)>-1)&&(this._activeDragInstances.push(e),1===this._activeDragInstances.length)){const a=i.type.startsWith("touch");this._globalListeners.set(a?"touchend":"mouseup",{handler:g=>this.pointerUp.next(g),options:!0}).set("scroll",{handler:g=>this.scroll.next(g),options:!0}).set("selectstart",{handler:this._preventDefaultWhileDragging,options:Dc}),a||this._globalListeners.set("mousemove",{handler:g=>this.pointerMove.next(g),options:Dc}),this._ngZone.runOutsideAngular(()=>{this._globalListeners.forEach((g,h)=>{this._document.addEventListener(h,g.handler,g.options)})})}}stopDragging(e){const i=this._activeDragInstances.indexOf(e);i>-1&&(this._activeDragInstances.splice(i,1),0===this._activeDragInstances.length&&this._clearGlobalListeners())}isDragging(e){return this._activeDragInstances.indexOf(e)>-1}scrolled(e){const i=[this.scroll];return e&&e!==this._document&&i.push(new $e.y(a=>this._ngZone.runOutsideAngular(()=>{const h=v=>{this._activeDragInstances.length&&a.next(v)};return e.addEventListener("scroll",h,!0),()=>{e.removeEventListener("scroll",h,!0)}}))),(0,Pr.T)(...i)}ngOnDestroy(){this._dragInstances.forEach(e=>this.removeDragItem(e)),this._dropInstances.forEach(e=>this.removeDropContainer(e)),this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_clearGlobalListeners(){this._globalListeners.forEach((e,i)=>{this._document.removeEventListener(i,e.handler,e.options)}),this._globalListeners.clear()}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(t.R0b),t.LFG(w))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const aM={dragStartThreshold:5,pointerDirectionChangeThreshold:5};let jg=(()=>{class n{constructor(e,i,a,g){this._document=e,this._ngZone=i,this._viewportRuler=a,this._dragDropRegistry=g}createDrag(e,i=aM){return new eM(e,i,this._document,this._ngZone,this._viewportRuler,this._dragDropRegistry)}createDropList(e){return new zf(e,this._dragDropRegistry,this._document,this._ngZone,this._viewportRuler)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(w),t.LFG(t.R0b),t.LFG(Cg),t.LFG(sM))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Hg=new t.OlP("CDK_DRAG_PARENT"),kc=new t.OlP("CdkDropListGroup");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let cM=(()=>{class n{constructor(){this._items=new Set,this._disabled=!1}get disabled(){return this._disabled}set disabled(e){this._disabled=Bn(e)}ngOnDestroy(){this._items.clear()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=t.lG2({type:n,selectors:[["","cdkDropListGroup",""]],inputs:{disabled:["cdkDropListGroupDisabled","disabled"]},exportAs:["cdkDropListGroup"],features:[t._Bn([{provide:kc,useExisting:n}])]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const qg=new t.OlP("CDK_DRAG_CONFIG");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Jg=0;const gM=new t.OlP("CdkDropList");let kr=(()=>{class n{constructor(e,i,a,g,h,v,O){this.element=e,this._changeDetectorRef=a,this._scrollDispatcher=g,this._dir=h,this._group=v,this._destroyed=new Gt.x,this.connectedTo=[],this.id="cdk-drop-list-"+Jg++,this.enterPredicate=()=>!0,this.sortPredicate=()=>!0,this.dropped=new t.vpe,this.entered=new t.vpe,this.exited=new t.vpe,this.sorted=new t.vpe,this._unsortedItems=new Set,this._dropListRef=i.createDropList(e),this._dropListRef.data=this,O&&this._assignDefaults(O),this._dropListRef.enterPredicate=(T,q)=>this.enterPredicate(T.data,q.data),this._dropListRef.sortPredicate=(T,q,G)=>this.sortPredicate(T,q.data,G.data),this._setupInputSyncSubscription(this._dropListRef),this._handleEvents(this._dropListRef),n._dropLists.push(this),v&&v._items.add(this)}get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(e){this._dropListRef.disabled=this._disabled=Bn(e)}addItem(e){this._unsortedItems.add(e),this._dropListRef.isDragging()&&this._syncItemsWithRef()}removeItem(e){this._unsortedItems.delete(e),this._dropListRef.isDragging()&&this._syncItemsWithRef()}getSortedItems(){return Array.from(this._unsortedItems).sort((e,i)=>e._dragRef.getVisibleElement().compareDocumentPosition(i._dragRef.getVisibleElement())&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}ngOnDestroy(){const e=n._dropLists.indexOf(this);e>-1&&n._dropLists.splice(e,1),this._group&&this._group._items.delete(this),this._unsortedItems.clear(),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete()}_setupInputSyncSubscription(e){this._dir&&this._dir.change.pipe(To(this._dir.value),ko(this._destroyed)).subscribe(i=>e.withDirection(i)),e.beforeStarted.subscribe(()=>{const i=Oe(this.connectedTo).map(a=>"string"==typeof a?n._dropLists.find(h=>h.id===a):a);if(this._group&&this._group._items.forEach(a=>{-1===i.indexOf(a)&&i.push(a)}),!this._scrollableParentsResolved){const a=this._scrollDispatcher.getAncestorScrollContainers(this.element).map(g=>g.getElementRef().nativeElement);this._dropListRef.withScrollableParents(a),this._scrollableParentsResolved=!0}e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.sortingDisabled=Bn(this.sortingDisabled),e.autoScrollDisabled=Bn(this.autoScrollDisabled),e.autoScrollStep=jv(this.autoScrollStep,2),e.connectedTo(i.filter(a=>a&&a!==this).map(a=>a._dropListRef)).withOrientation(this.orientation)})}_handleEvents(e){e.beforeStarted.subscribe(()=>{this._syncItemsWithRef(),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(i=>{this.entered.emit({container:this,item:i.item.data,currentIndex:i.currentIndex})}),e.exited.subscribe(i=>{this.exited.emit({container:this,item:i.item.data}),this._changeDetectorRef.markForCheck()}),e.sorted.subscribe(i=>{this.sorted.emit({previousIndex:i.previousIndex,currentIndex:i.currentIndex,container:this,item:i.item.data})}),e.dropped.subscribe(i=>{this.dropped.emit({previousIndex:i.previousIndex,currentIndex:i.currentIndex,previousContainer:i.previousContainer.data,container:i.container.data,item:i.item.data,isPointerOverContainer:i.isPointerOverContainer,distance:i.distance,dropPoint:i.dropPoint,event:i.event}),this._changeDetectorRef.markForCheck()})}_assignDefaults(e){const{lockAxis:i,draggingDisabled:a,sortingDisabled:g,listAutoScrollDisabled:h,listOrientation:v}=e;this.disabled=a??!1,this.sortingDisabled=g??!1,this.autoScrollDisabled=h??!1,this.orientation=v||"vertical",i&&(this.lockAxis=i)}_syncItemsWithRef(){this._dropListRef.withItems(this.getSortedItems().map(e=>e._dragRef))}}return n._dropLists=[],n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(jg),t.Y36(t.sBO),t.Y36(Qn),t.Y36(Gi,8),t.Y36(kc,12),t.Y36(qg,8))},n.\u0275dir=t.lG2({type:n,selectors:[["","cdkDropList",""],["cdk-drop-list"]],hostAttrs:[1,"cdk-drop-list"],hostVars:7,hostBindings:function(e,i){2&e&&(t.uIk("id",i.id),t.ekj("cdk-drop-list-disabled",i.disabled)("cdk-drop-list-dragging",i._dropListRef.isDragging())("cdk-drop-list-receiving",i._dropListRef.isReceiving()))},inputs:{connectedTo:["cdkDropListConnectedTo","connectedTo"],data:["cdkDropListData","data"],orientation:["cdkDropListOrientation","orientation"],id:"id",lockAxis:["cdkDropListLockAxis","lockAxis"],disabled:["cdkDropListDisabled","disabled"],sortingDisabled:["cdkDropListSortingDisabled","sortingDisabled"],enterPredicate:["cdkDropListEnterPredicate","enterPredicate"],sortPredicate:["cdkDropListSortPredicate","sortPredicate"],autoScrollDisabled:["cdkDropListAutoScrollDisabled","autoScrollDisabled"],autoScrollStep:["cdkDropListAutoScrollStep","autoScrollStep"]},outputs:{dropped:"cdkDropListDropped",entered:"cdkDropListEntered",exited:"cdkDropListExited",sorted:"cdkDropListSorted"},exportAs:["cdkDropList"],features:[t._Bn([{provide:kc,useValue:void 0},{provide:gM,useExisting:n}])]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Bg=new t.OlP("CdkDragHandle");let Yf=(()=>{class n{constructor(e,i){this.element=e,this._stateChanges=new Gt.x,this._disabled=!1,this._parentDrag=i}get disabled(){return this._disabled}set disabled(e){this._disabled=Bn(e),this._stateChanges.next(this)}ngOnDestroy(){this._stateChanges.complete()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(Hg,12))},n.\u0275dir=t.lG2({type:n,selectors:[["","cdkDragHandle",""]],hostAttrs:[1,"cdk-drag-handle"],inputs:{disabled:["cdkDragHandleDisabled","disabled"]},features:[t._Bn([{provide:Bg,useExisting:n}])]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ar=new t.OlP("CdkDragPlaceholder"),$f=new t.OlP("CdkDragPreview");let $s=(()=>{class n{constructor(e,i,a,g,h,v,O,T,q,G,vt){this.element=e,this.dropContainer=i,this._ngZone=g,this._viewContainerRef=h,this._dir=O,this._changeDetectorRef=q,this._selfHandle=G,this._parentDrag=vt,this._destroyed=new Gt.x,this.started=new t.vpe,this.released=new t.vpe,this.ended=new t.vpe,this.entered=new t.vpe,this.exited=new t.vpe,this.dropped=new t.vpe,this.moved=new $e.y(wt=>{const Jt=this._dragRef.moved.pipe((0,Kt.U)(ae=>({source:this,pointerPosition:ae.pointerPosition,event:ae.event,delta:ae.delta,distance:ae.distance}))).subscribe(wt);return()=>{Jt.unsubscribe()}}),this._dragRef=T.createDrag(e,{dragStartThreshold:v&&null!=v.dragStartThreshold?v.dragStartThreshold:5,pointerDirectionChangeThreshold:v&&null!=v.pointerDirectionChangeThreshold?v.pointerDirectionChangeThreshold:5,zIndex:v?.zIndex}),this._dragRef.data=this,n._dragInstances.push(this),v&&this._assignDefaults(v),i&&(this._dragRef._withDropContainer(i._dropListRef),i.addItem(this)),this._syncInputs(this._dragRef),this._handleEvents(this._dragRef)}get disabled(){return this._disabled||this.dropContainer&&this.dropContainer.disabled}set disabled(e){this._disabled=Bn(e),this._dragRef.disabled=this._disabled}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset()}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}setFreeDragPosition(e){this._dragRef.setFreeDragPosition(e)}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.pipe(Re(1),ko(this._destroyed)).subscribe(()=>{this._updateRootElement(),this._setupHandlesListener(),this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)})})}ngOnChanges(e){const i=e.rootElementSelector,a=e.freeDragPosition;i&&!i.firstChange&&this._updateRootElement(),a&&!a.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)}ngOnDestroy(){this.dropContainer&&this.dropContainer.removeItem(this);const e=n._dragInstances.indexOf(this);e>-1&&n._dragInstances.splice(e,1),this._ngZone.runOutsideAngular(()=>{this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose()})}_updateRootElement(){const e=this.element.nativeElement;let i=e;this.rootElementSelector&&(i=void 0!==e.closest?e.closest(this.rootElementSelector):e.parentElement?.closest(this.rootElementSelector)),this._dragRef.withRootElement(i||e)}_getBoundaryElement(){const e=this.boundaryElement;return e?"string"==typeof e?this.element.nativeElement.closest(e):Te(e):null}_syncInputs(e){e.beforeStarted.subscribe(()=>{if(!e.isDragging()){const i=this._dir,a=this.dragStartDelay,g=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,h=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,matchSize:this._previewTemplate.matchSize,viewContainer:this._viewContainerRef}:null;e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.dragStartDelay="object"==typeof a&&a?a:jv(a),e.constrainPosition=this.constrainPosition,e.previewClass=this.previewClass,e.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(g).withPreviewTemplate(h).withPreviewContainer(this.previewContainer||"global"),i&&e.withDirection(i.value)}}),e.beforeStarted.pipe(Re(1)).subscribe(()=>{if(this._parentDrag)return void e.withParent(this._parentDrag._dragRef);let i=this.element.nativeElement.parentElement;for(;i;){if(i.classList.contains("cdk-drag")){e.withParent(n._dragInstances.find(a=>a.element.nativeElement===i)?._dragRef||null);break}i=i.parentElement}})}_handleEvents(e){e.started.subscribe(i=>{this.started.emit({source:this,event:i.event}),this._changeDetectorRef.markForCheck()}),e.released.subscribe(i=>{this.released.emit({source:this,event:i.event})}),e.ended.subscribe(i=>{this.ended.emit({source:this,distance:i.distance,dropPoint:i.dropPoint,event:i.event}),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(i=>{this.entered.emit({container:i.container.data,item:this,currentIndex:i.currentIndex})}),e.exited.subscribe(i=>{this.exited.emit({container:i.container.data,item:this})}),e.dropped.subscribe(i=>{this.dropped.emit({previousIndex:i.previousIndex,currentIndex:i.currentIndex,previousContainer:i.previousContainer.data,container:i.container.data,isPointerOverContainer:i.isPointerOverContainer,item:this,distance:i.distance,dropPoint:i.dropPoint,event:i.event})})}_assignDefaults(e){const{lockAxis:i,dragStartDelay:a,constrainPosition:g,previewClass:h,boundaryElement:v,draggingDisabled:O,rootElementSelector:T,previewContainer:q}=e;this.disabled=O??!1,this.dragStartDelay=a||0,i&&(this.lockAxis=i),g&&(this.constrainPosition=g),h&&(this.previewClass=h),v&&(this.boundaryElement=v),T&&(this.rootElementSelector=T),q&&(this.previewContainer=q)}_setupHandlesListener(){this._handles.changes.pipe(To(this._handles),We(e=>{const i=e.filter(a=>a._parentDrag===this).map(a=>a.element);this._selfHandle&&this.rootElementSelector&&i.push(this.element),this._dragRef.withHandles(i)}),mn(e=>(0,Pr.T)(...e.map(i=>i._stateChanges.pipe(To(i))))),ko(this._destroyed)).subscribe(e=>{const i=this._dragRef,a=e.element.nativeElement;e.disabled?i.disableHandle(a):i.enableHandle(a)})}}return n._dragInstances=[],n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(gM,12),t.Y36(w),t.Y36(t.R0b),t.Y36(t.s_b),t.Y36(qg,8),t.Y36(Gi,8),t.Y36(jg),t.Y36(t.sBO),t.Y36(Bg,10),t.Y36(Hg,12))},n.\u0275dir=t.lG2({type:n,selectors:[["","cdkDrag",""]],contentQueries:function(e,i,a){if(1&e&&(t.Suo(a,$f,5),t.Suo(a,Ar,5),t.Suo(a,Bg,5)),2&e){let g;t.iGM(g=t.CRH())&&(i._previewTemplate=g.first),t.iGM(g=t.CRH())&&(i._placeholderTemplate=g.first),t.iGM(g=t.CRH())&&(i._handles=g)}},hostAttrs:[1,"cdk-drag"],hostVars:4,hostBindings:function(e,i){2&e&&t.ekj("cdk-drag-disabled",i.disabled)("cdk-drag-dragging",i._dragRef.isDragging())},inputs:{data:["cdkDragData","data"],lockAxis:["cdkDragLockAxis","lockAxis"],rootElementSelector:["cdkDragRootElement","rootElementSelector"],boundaryElement:["cdkDragBoundary","boundaryElement"],dragStartDelay:["cdkDragStartDelay","dragStartDelay"],freeDragPosition:["cdkDragFreeDragPosition","freeDragPosition"],disabled:["cdkDragDisabled","disabled"],constrainPosition:["cdkDragConstrainPosition","constrainPosition"],previewClass:["cdkDragPreviewClass","previewClass"],previewContainer:["cdkDragPreviewContainer","previewContainer"]},outputs:{started:"cdkDragStarted",released:"cdkDragReleased",ended:"cdkDragEnded",entered:"cdkDragEntered",exited:"cdkDragExited",dropped:"cdkDragDropped",moved:"cdkDragMoved"},exportAs:["cdkDrag"],features:[t._Bn([{provide:Hg,useExisting:n}]),t.TTD]}),n})(),dM=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[jg],imports:[vr]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ac{attach(o){return this._attachedHost=o,o.attach(this)}detach(){let o=this._attachedHost;null!=o&&(this._attachedHost=null,o.detach())}get isAttached(){return null!=this._attachedHost}setAttachedHost(o){this._attachedHost=o}}class tp extends Ac{constructor(o,e,i,a){super(),this.component=o,this.viewContainerRef=e,this.injector=i,this.componentFactoryResolver=a}}class Ks extends Ac{constructor(o,e,i,a){super(),this.templateRef=o,this.viewContainerRef=e,this.context=i,this.injector=a}get origin(){return this.templateRef.elementRef}attach(o,e=this.context){return this.context=e,super.attach(o)}detach(){return this.context=void 0,super.detach()}}class Tc extends Ac{constructor(o){super(),this.element=o instanceof t.SBq?o.nativeElement:o}}class Ws{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(o){return o instanceof tp?(this._attachedPortal=o,this.attachComponentPortal(o)):o instanceof Ks?(this._attachedPortal=o,this.attachTemplatePortal(o)):this.attachDomPortal&&o instanceof Tc?(this._attachedPortal=o,this.attachDomPortal(o)):void 0}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(o){this._disposeFn=o}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Qg extends Ws{constructor(o,e,i,a,g){super(),this.outletElement=o,this._componentFactoryResolver=e,this._appRef=i,this._defaultInjector=a,this.attachDomPortal=h=>{const v=h.element,O=this._document.createComment("dom-portal");v.parentNode.insertBefore(O,v),this.outletElement.appendChild(v),this._attachedPortal=h,super.setDisposeFn(()=>{O.parentNode&&O.parentNode.replaceChild(v,O)})},this._document=g}attachComponentPortal(o){const i=(o.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(o.component);let a;return o.viewContainerRef?(a=o.viewContainerRef.createComponent(i,o.viewContainerRef.length,o.injector||o.viewContainerRef.injector),this.setDisposeFn(()=>a.destroy())):(a=i.create(o.injector||this._defaultInjector||t.zs3.NULL),this._appRef.attachView(a.hostView),this.setDisposeFn(()=>{this._appRef.viewCount>0&&this._appRef.detachView(a.hostView),a.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(a)),this._attachedPortal=o,a}attachTemplatePortal(o){let e=o.viewContainerRef,i=e.createEmbeddedView(o.templateRef,o.context,{injector:o.injector});return i.rootNodes.forEach(a=>this.outletElement.appendChild(a)),i.detectChanges(),this.setDisposeFn(()=>{let a=e.indexOf(i);-1!==a&&e.remove(a)}),this._attachedPortal=o,i}dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(o){return o.hostView.rootNodes[0]}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let np=(()=>{class n extends Ws{constructor(e,i,a){super(),this._componentFactoryResolver=e,this._viewContainerRef=i,this._isInitialized=!1,this.attached=new t.vpe,this.attachDomPortal=g=>{const h=g.element,v=this._document.createComment("dom-portal");g.setAttachedHost(this),h.parentNode.insertBefore(v,h),this._getRootNode().appendChild(h),this._attachedPortal=g,super.setDisposeFn(()=>{v.parentNode&&v.parentNode.replaceChild(h,v)})},this._document=a}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedPortal=null,this._attachedRef=null}attachComponentPortal(e){e.setAttachedHost(this);const i=null!=e.viewContainerRef?e.viewContainerRef:this._viewContainerRef,g=(e.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(e.component),h=i.createComponent(g,i.length,e.injector||i.injector);return i!==this._viewContainerRef&&this._getRootNode().appendChild(h.hostView.rootNodes[0]),super.setDisposeFn(()=>h.destroy()),this._attachedPortal=e,this._attachedRef=h,this.attached.emit(h),h}attachTemplatePortal(e){e.setAttachedHost(this);const i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}_getRootNode(){const e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t._Vd),t.Y36(t.s_b),t.Y36(w))},n.\u0275dir=t.lG2({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:["cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[t.qOj]}),n})(),Ec=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const ip=vg();class CP{constructor(o,e){this._viewportRuler=o,this._previousHTMLStyles={top:"",left:""},this._isEnabled=!1,this._document=e}attach(){}enable(){if(this._canBeEnabled()){const o=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=o.style.left||"",this._previousHTMLStyles.top=o.style.top||"",o.style.left=we(-this._previousScrollPosition.left),o.style.top=we(-this._previousScrollPosition.top),o.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){const o=this._document.documentElement,i=o.style,a=this._document.body.style,g=i.scrollBehavior||"",h=a.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,o.classList.remove("cdk-global-scrollblock"),ip&&(i.scrollBehavior=a.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),ip&&(i.scrollBehavior=g,a.scrollBehavior=h)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;const e=this._document.body,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class op{constructor(o,e,i,a){this._scrollDispatcher=o,this._ngZone=e,this._viewportRuler=i,this._config=a,this._scrollSubscription=null,this._detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}}attach(o){this._overlayRef=o}enable(){if(this._scrollSubscription)return;const o=this._scrollDispatcher.scrolled(0);this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=o.subscribe(()=>{const e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=o.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class rp{enable(){}disable(){}attach(){}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Xs(n,o){return o.some(e=>n.bottom<e.top||n.top>e.bottom||n.right<e.left||n.left>e.right)}function pM(n,o){return o.some(e=>n.top<e.top||n.bottom>e.bottom||n.left<e.left||n.right>e.right)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class MP{constructor(o,e,i,a){this._scrollDispatcher=o,this._viewportRuler=e,this._ngZone=i,this._config=a,this._scrollSubscription=null}attach(o){this._overlayRef=o}enable(){this._scrollSubscription||(this._scrollSubscription=this._scrollDispatcher.scrolled(this._config?this._config.scrollThrottle:0).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){const e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:a}=this._viewportRuler.getViewportSize();Xs(e,[{width:i,height:a,bottom:a,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}}))}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let yP=(()=>{class n{constructor(e,i,a,g){this._scrollDispatcher=e,this._viewportRuler=i,this._ngZone=a,this.noop=()=>new rp,this.close=h=>new op(this._scrollDispatcher,this._ngZone,this._viewportRuler,h),this.block=()=>new CP(this._viewportRuler,this._document),this.reposition=h=>new MP(this._scrollDispatcher,this._viewportRuler,this._ngZone,h),this._document=g}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Qn),t.LFG(Cg),t.LFG(t.R0b),t.LFG(w))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class mM{constructor(o){if(this.scrollStrategy=new rp,this.panelClass="",this.hasBackdrop=!1,this.backdropClass="cdk-overlay-dark-backdrop",this.disposeOnNavigation=!1,o){const e=Object.keys(o);for(const i of e)void 0!==o[i]&&(this[i]=o[i])}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Dn{constructor(o,e,i,a,g){this.offsetX=i,this.offsetY=a,this.panelClass=g,this.originX=o.originX,this.originY=o.originY,this.overlayX=e.overlayX,this.overlayY=e.overlayY}}class bP{constructor(o,e){this.connectionPair=o,this.scrollableViewProperties=e}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let _M=(()=>{class n{constructor(e){this._attachedOverlays=[],this._document=e}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){const i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),0===this._attachedOverlays.length&&this.detach()}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(w))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),to=(()=>{class n extends _M{constructor(e,i){super(e),this._ngZone=i,this._keydownListener=a=>{const g=this._attachedOverlays;for(let h=g.length-1;h>-1;h--)if(g[h]._keydownEvents.observers.length>0){const v=g[h]._keydownEvents;this._ngZone?this._ngZone.run(()=>v.next(a)):v.next(a);break}}}add(e){super.add(e),this._isAttached||(this._ngZone?this._ngZone.runOutsideAngular(()=>this._document.body.addEventListener("keydown",this._keydownListener)):this._document.body.addEventListener("keydown",this._keydownListener),this._isAttached=!0)}detach(){this._isAttached&&(this._document.body.removeEventListener("keydown",this._keydownListener),this._isAttached=!1)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(w),t.LFG(t.R0b,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),Gg=(()=>{class n extends _M{constructor(e,i,a){super(e),this._platform=i,this._ngZone=a,this._cursorStyleIsSet=!1,this._pointerDownListener=g=>{this._pointerDownEventTarget=wn(g)},this._clickListener=g=>{const h=wn(g),v="click"===g.type&&this._pointerDownEventTarget?this._pointerDownEventTarget:h;this._pointerDownEventTarget=null;const O=this._attachedOverlays.slice();for(let T=O.length-1;T>-1;T--){const q=O[T];if(q._outsidePointerEvents.observers.length<1||!q.hasAttached())continue;if(q.overlayElement.contains(h)||q.overlayElement.contains(v))break;const G=q._outsidePointerEvents;this._ngZone?this._ngZone.run(()=>G.next(g)):G.next(g)}}}add(e){if(super.add(e),!this._isAttached){const i=this._document.body;this._ngZone?this._ngZone.runOutsideAngular(()=>this._addEventListeners(i)):this._addEventListeners(i),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){if(this._isAttached){const e=this._document.body;e.removeEventListener("pointerdown",this._pointerDownListener,!0),e.removeEventListener("click",this._clickListener,!0),e.removeEventListener("auxclick",this._clickListener,!0),e.removeEventListener("contextmenu",this._clickListener,!0),this._platform.IOS&&this._cursorStyleIsSet&&(e.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1}}_addEventListeners(e){e.addEventListener("pointerdown",this._pointerDownListener,!0),e.addEventListener("click",this._clickListener,!0),e.addEventListener("auxclick",this._clickListener,!0),e.addEventListener("contextmenu",this._clickListener,!0)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(w),t.LFG(gi),t.LFG(t.R0b,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),Yg=(()=>{class n{constructor(e,i){this._platform=i,this._document=e}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){const e="cdk-overlay-container";if(this._platform.isBrowser||Ao()){const a=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let g=0;g<a.length;g++)a[g].remove()}const i=this._document.createElement("div");i.classList.add(e),Ao()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(w),t.LFG(gi))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Sc{constructor(o,e,i,a,g,h,v,O,T,q=!1){this._portalOutlet=o,this._host=e,this._pane=i,this._config=a,this._ngZone=g,this._keyboardDispatcher=h,this._document=v,this._location=O,this._outsideClickDispatcher=T,this._animationsDisabled=q,this._backdropElement=null,this._backdropClick=new Gt.x,this._attachments=new Gt.x,this._detachments=new Gt.x,this._locationChanges=zn.w0.EMPTY,this._backdropClickHandler=G=>this._backdropClick.next(G),this._backdropTransitionendHandler=G=>{this._disposeBackdrop(G.target)},this._keydownEvents=new Gt.x,this._outsidePointerEvents=new Gt.x,a.scrollStrategy&&(this._scrollStrategy=a.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=a.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropElement}get hostElement(){return this._host}attach(o){!this._host.parentElement&&this._previousHostParent&&this._previousHostParent.appendChild(this._host);const e=this._portalOutlet.attach(o);return this._positionStrategy&&this._positionStrategy.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._ngZone.onStable.pipe(Re(1)).subscribe(()=>{this.hasAttached()&&this.updatePosition()}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),"function"==typeof e?.onDestroy&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();const o=this._portalOutlet.detach();return this._detachments.next(),this._keyboardDispatcher.remove(this),this._detachContentWhenStable(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),o}dispose(){const o=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._disposeBackdrop(this._backdropElement),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._previousHostParent=this._pane=this._host=null,o&&this._detachments.next(),this._detachments.complete()}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(o){o!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=o,this.hasAttached()&&(o.attach(this),this.updatePosition()))}updateSize(o){this._config={...this._config,...o},this._updateElementSize()}setDirection(o){this._config={...this._config,direction:o},this._updateElementDirection()}addPanelClass(o){this._pane&&this._toggleClasses(this._pane,o,!0)}removePanelClass(o){this._pane&&this._toggleClasses(this._pane,o,!1)}getDirection(){const o=this._config.direction;return o?"string"==typeof o?o:o.value:"ltr"}updateScrollStrategy(o){o!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=o,this.hasAttached()&&(o.attach(this),o.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;const o=this._pane.style;o.width=we(this._config.width),o.height=we(this._config.height),o.minWidth=we(this._config.minWidth),o.minHeight=we(this._config.minHeight),o.maxWidth=we(this._config.maxWidth),o.maxHeight=we(this._config.maxHeight)}_togglePointerEvents(o){this._pane.style.pointerEvents=o?"":"none"}_attachBackdrop(){const o="cdk-overlay-backdrop-showing";this._backdropElement=this._document.createElement("div"),this._backdropElement.classList.add("cdk-overlay-backdrop"),this._animationsDisabled&&this._backdropElement.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropElement,this._config.backdropClass,!0),this._host.parentElement.insertBefore(this._backdropElement,this._host),this._backdropElement.addEventListener("click",this._backdropClickHandler),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{this._backdropElement&&this._backdropElement.classList.add(o)})}):this._backdropElement.classList.add(o)}_updateStackingOrder(){this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){const o=this._backdropElement;if(o){if(this._animationsDisabled)return void this._disposeBackdrop(o);o.classList.remove("cdk-overlay-backdrop-showing"),this._ngZone.runOutsideAngular(()=>{o.addEventListener("transitionend",this._backdropTransitionendHandler)}),o.style.pointerEvents="none",this._backdropTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(()=>{this._disposeBackdrop(o)},500))}}_toggleClasses(o,e,i){const a=Oe(e||[]).filter(g=>!!g);a.length&&(i?o.classList.add(...a):o.classList.remove(...a))}_detachContentWhenStable(){this._ngZone.runOutsideAngular(()=>{const o=this._ngZone.onStable.pipe(ko((0,Pr.T)(this._attachments,this._detachments))).subscribe(()=>{(!this._pane||!this._host||0===this._pane.children.length)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),o.unsubscribe())})})}_disposeScrollStrategy(){const o=this._scrollStrategy;o&&(o.disable(),o.detach&&o.detach())}_disposeBackdrop(o){o&&(o.removeEventListener("click",this._backdropClickHandler),o.removeEventListener("transitionend",this._backdropTransitionendHandler),o.remove(),this._backdropElement===o&&(this._backdropElement=null)),this._backdropTimeout&&(clearTimeout(this._backdropTimeout),this._backdropTimeout=void 0)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ic="cdk-overlay-connected-position-bounding-box",sp=/([A-Za-z%]+)$/;class $g{constructor(o,e,i,a,g){this._viewportRuler=e,this._document=i,this._platform=a,this._overlayContainer=g,this._lastBoundingBoxSize={width:0,height:0},this._isPushed=!1,this._canPush=!0,this._growAfterOpen=!1,this._hasFlexibleDimensions=!0,this._positionLocked=!1,this._viewportMargin=0,this._scrollables=[],this._preferredPositions=[],this._positionChanges=new Gt.x,this._resizeSubscription=zn.w0.EMPTY,this._offsetX=0,this._offsetY=0,this._appliedPanelClasses=[],this.positionChanges=this._positionChanges,this.setOrigin(o)}get positions(){return this._preferredPositions}attach(o){this._validatePositions(),o.hostElement.classList.add(Ic),this._overlayRef=o,this._boundingBox=o.hostElement,this._pane=o.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition)return void this.reapplyLastPosition();this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();const o=this._originRect,e=this._overlayRect,i=this._viewportRect,a=this._containerRect,g=[];let h;for(let v of this._preferredPositions){let O=this._getOriginPoint(o,a,v),T=this._getOverlayPoint(O,e,v),q=this._getOverlayFit(T,e,i,v);if(q.isCompletelyWithinViewport)return this._isPushed=!1,void this._applyPosition(v,O);this._canFitWithFlexibleDimensions(q,T,i)?g.push({position:v,origin:O,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(O,v)}):(!h||h.overlayFit.visibleArea<q.visibleArea)&&(h={overlayFit:q,overlayPoint:T,originPoint:O,position:v,overlayRect:e})}if(g.length){let v=null,O=-1;for(const T of g){const q=T.boundingBoxRect.width*T.boundingBoxRect.height*(T.position.weight||1);q>O&&(O=q,v=T)}return this._isPushed=!1,void this._applyPosition(v.position,v.origin)}if(this._canPush)return this._isPushed=!0,void this._applyPosition(h.position,h.originPoint);this._applyPosition(h.position,h.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&So(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Ic),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;const o=this._lastPosition;if(o){this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();const e=this._getOriginPoint(this._originRect,this._containerRect,o);this._applyPosition(o,e)}else this.apply()}withScrollableContainers(o){return this._scrollables=o,this}withPositions(o){return this._preferredPositions=o,-1===o.indexOf(this._lastPosition)&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(o){return this._viewportMargin=o,this}withFlexibleDimensions(o=!0){return this._hasFlexibleDimensions=o,this}withGrowAfterOpen(o=!0){return this._growAfterOpen=o,this}withPush(o=!0){return this._canPush=o,this}withLockedPosition(o=!0){return this._positionLocked=o,this}setOrigin(o){return this._origin=o,this}withDefaultOffsetX(o){return this._offsetX=o,this}withDefaultOffsetY(o){return this._offsetY=o,this}withTransformOriginOn(o){return this._transformOriginSelector=o,this}_getOriginPoint(o,e,i){let a,g;if("center"==i.originX)a=o.left+o.width/2;else{const h=this._isRtl()?o.right:o.left,v=this._isRtl()?o.left:o.right;a="start"==i.originX?h:v}return e.left<0&&(a-=e.left),g="center"==i.originY?o.top+o.height/2:"top"==i.originY?o.top:o.bottom,e.top<0&&(g-=e.top),{x:a,y:g}}_getOverlayPoint(o,e,i){let a,g;return a="center"==i.overlayX?-e.width/2:"start"===i.overlayX?this._isRtl()?-e.width:0:this._isRtl()?0:-e.width,g="center"==i.overlayY?-e.height/2:"top"==i.overlayY?0:-e.height,{x:o.x+a,y:o.y+g}}_getOverlayFit(o,e,i,a){const g=Kg(e);let{x:h,y:v}=o,O=this._getOffset(a,"x"),T=this._getOffset(a,"y");O&&(h+=O),T&&(v+=T);let vt=0-v,wt=v+g.height-i.height,Jt=this._subtractOverflows(g.width,0-h,h+g.width-i.width),ae=this._subtractOverflows(g.height,vt,wt),ee=Jt*ae;return{visibleArea:ee,isCompletelyWithinViewport:g.width*g.height===ee,fitsInViewportVertically:ae===g.height,fitsInViewportHorizontally:Jt==g.width}}_canFitWithFlexibleDimensions(o,e,i){if(this._hasFlexibleDimensions){const a=i.bottom-e.y,g=i.right-e.x,h=Ei(this._overlayRef.getConfig().minHeight),v=Ei(this._overlayRef.getConfig().minWidth),T=o.fitsInViewportHorizontally||null!=v&&v<=g;return(o.fitsInViewportVertically||null!=h&&h<=a)&&T}return!1}_pushOverlayOnScreen(o,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:o.x+this._previousPushAmount.x,y:o.y+this._previousPushAmount.y};const a=Kg(e),g=this._viewportRect,h=Math.max(o.x+a.width-g.width,0),v=Math.max(o.y+a.height-g.height,0),O=Math.max(g.top-i.top-o.y,0),T=Math.max(g.left-i.left-o.x,0);let q=0,G=0;return q=a.width<=g.width?T||-h:o.x<this._viewportMargin?g.left-i.left-o.x:0,G=a.height<=g.height?O||-v:o.y<this._viewportMargin?g.top-i.top-o.y:0,this._previousPushAmount={x:q,y:G},{x:o.x+q,y:o.y+G}}_applyPosition(o,e){if(this._setTransformOrigin(o),this._setOverlayElementStyles(e,o),this._setBoundingBoxStyles(e,o),o.panelClass&&this._addPanelClasses(o.panelClass),this._lastPosition=o,this._positionChanges.observers.length){const i=this._getScrollVisibility(),a=new bP(o,i);this._positionChanges.next(a)}this._isInitialRender=!1}_setTransformOrigin(o){if(!this._transformOriginSelector)return;const e=this._boundingBox.querySelectorAll(this._transformOriginSelector);let i,a=o.overlayY;i="center"===o.overlayX?"center":this._isRtl()?"start"===o.overlayX?"right":"left":"start"===o.overlayX?"left":"right";for(let g=0;g<e.length;g++)e[g].style.transformOrigin=`${i} ${a}`}_calculateBoundingBoxRect(o,e){const i=this._viewportRect,a=this._isRtl();let g,h,v,q,G,vt;if("top"===e.overlayY)h=o.y,g=i.height-h+this._viewportMargin;else if("bottom"===e.overlayY)v=i.height-o.y+2*this._viewportMargin,g=i.height-v+this._viewportMargin;else{const wt=Math.min(i.bottom-o.y+i.top,o.y),Jt=this._lastBoundingBoxSize.height;g=2*wt,h=o.y-wt,g>Jt&&!this._isInitialRender&&!this._growAfterOpen&&(h=o.y-Jt/2)}if("end"===e.overlayX&&!a||"start"===e.overlayX&&a)vt=i.width-o.x+this._viewportMargin,q=o.x-this._viewportMargin;else if("start"===e.overlayX&&!a||"end"===e.overlayX&&a)G=o.x,q=i.right-o.x;else{const wt=Math.min(i.right-o.x+i.left,o.x),Jt=this._lastBoundingBoxSize.width;q=2*wt,G=o.x-wt,q>Jt&&!this._isInitialRender&&!this._growAfterOpen&&(G=o.x-Jt/2)}return{top:h,left:G,bottom:v,right:vt,width:q,height:g}}_setBoundingBoxStyles(o,e){const i=this._calculateBoundingBoxRect(o,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));const a={};if(this._hasExactPosition())a.top=a.left="0",a.bottom=a.right=a.maxHeight=a.maxWidth="",a.width=a.height="100%";else{const g=this._overlayRef.getConfig().maxHeight,h=this._overlayRef.getConfig().maxWidth;a.height=we(i.height),a.top=we(i.top),a.bottom=we(i.bottom),a.width=we(i.width),a.left=we(i.left),a.right=we(i.right),a.alignItems="center"===e.overlayX?"center":"end"===e.overlayX?"flex-end":"flex-start",a.justifyContent="center"===e.overlayY?"center":"bottom"===e.overlayY?"flex-end":"flex-start",g&&(a.maxHeight=we(g)),h&&(a.maxWidth=we(h))}this._lastBoundingBoxSize=i,So(this._boundingBox.style,a)}_resetBoundingBoxStyles(){So(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){So(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(o,e){const i={},a=this._hasExactPosition(),g=this._hasFlexibleDimensions,h=this._overlayRef.getConfig();if(a){const q=this._viewportRuler.getViewportScrollPosition();So(i,this._getExactOverlayY(e,o,q)),So(i,this._getExactOverlayX(e,o,q))}else i.position="static";let v="",O=this._getOffset(e,"x"),T=this._getOffset(e,"y");O&&(v+=`translateX(${O}px) `),T&&(v+=`translateY(${T}px)`),i.transform=v.trim(),h.maxHeight&&(a?i.maxHeight=we(h.maxHeight):g&&(i.maxHeight="")),h.maxWidth&&(a?i.maxWidth=we(h.maxWidth):g&&(i.maxWidth="")),So(this._pane.style,i)}_getExactOverlayY(o,e,i){let a={top:"",bottom:""},g=this._getOverlayPoint(e,this._overlayRect,o);return this._isPushed&&(g=this._pushOverlayOnScreen(g,this._overlayRect,i)),"bottom"===o.overlayY?a.bottom=this._document.documentElement.clientHeight-(g.y+this._overlayRect.height)+"px":a.top=we(g.y),a}_getExactOverlayX(o,e,i){let h,a={left:"",right:""},g=this._getOverlayPoint(e,this._overlayRect,o);return this._isPushed&&(g=this._pushOverlayOnScreen(g,this._overlayRect,i)),h=this._isRtl()?"end"===o.overlayX?"left":"right":"end"===o.overlayX?"right":"left","right"===h?a.right=this._document.documentElement.clientWidth-(g.x+this._overlayRect.width)+"px":a.left=we(g.x),a}_getScrollVisibility(){const o=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(a=>a.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:pM(o,i),isOriginOutsideView:Xs(o,i),isOverlayClipped:pM(e,i),isOverlayOutsideView:Xs(e,i)}}_subtractOverflows(o,...e){return e.reduce((i,a)=>i-Math.max(a,0),o)}_getNarrowedViewportRect(){const o=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._viewportMargin,left:i.left+this._viewportMargin,right:i.left+o-this._viewportMargin,bottom:i.top+e-this._viewportMargin,width:o-2*this._viewportMargin,height:e-2*this._viewportMargin}}_isRtl(){return"rtl"===this._overlayRef.getDirection()}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(o,e){return"x"===e?o.offsetX??this._offsetX:o.offsetY??this._offsetY}_validatePositions(){}_addPanelClasses(o){this._pane&&Oe(o).forEach(e=>{""!==e&&-1===this._appliedPanelClasses.indexOf(e)&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(o=>{this._pane.classList.remove(o)}),this._appliedPanelClasses=[])}_getOriginRect(){const o=this._origin;if(o instanceof t.SBq)return o.nativeElement.getBoundingClientRect();if(o instanceof Element)return o.getBoundingClientRect();const e=o.width||0,i=o.height||0;return{top:o.y,bottom:o.y+i,left:o.x,right:o.x+e,height:i,width:e}}}function So(n,o){for(let e in o)o.hasOwnProperty(e)&&(n[e]=o[e]);return n}function Ei(n){if("number"!=typeof n&&null!=n){const[o,e]=n.split(sp);return e&&"px"!==e?null:parseFloat(o)}return n||null}function Kg(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}const Wg="cdk-global-overlay-wrapper";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class vM{constructor(){this._cssPosition="static",this._topOffset="",this._bottomOffset="",this._alignItems="",this._xPosition="",this._xOffset="",this._width="",this._height="",this._isDisposed=!1}attach(o){const e=o.getConfig();this._overlayRef=o,this._width&&!e.width&&o.updateSize({width:this._width}),this._height&&!e.height&&o.updateSize({height:this._height}),o.hostElement.classList.add(Wg),this._isDisposed=!1}top(o=""){return this._bottomOffset="",this._topOffset=o,this._alignItems="flex-start",this}left(o=""){return this._xOffset=o,this._xPosition="left",this}bottom(o=""){return this._topOffset="",this._bottomOffset=o,this._alignItems="flex-end",this}right(o=""){return this._xOffset=o,this._xPosition="right",this}start(o=""){return this._xOffset=o,this._xPosition="start",this}end(o=""){return this._xOffset=o,this._xPosition="end",this}width(o=""){return this._overlayRef?this._overlayRef.updateSize({width:o}):this._width=o,this}height(o=""){return this._overlayRef?this._overlayRef.updateSize({height:o}):this._height=o,this}centerHorizontally(o=""){return this.left(o),this._xPosition="center",this}centerVertically(o=""){return this.top(o),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;const o=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:a,height:g,maxWidth:h,maxHeight:v}=i,O=!("100%"!==a&&"100vw"!==a||h&&"100%"!==h&&"100vw"!==h),T=!("100%"!==g&&"100vh"!==g||v&&"100%"!==v&&"100vh"!==v),q=this._xPosition,G=this._xOffset,vt="rtl"===this._overlayRef.getConfig().direction;let wt="",Jt="",ae="";O?ae="flex-start":"center"===q?(ae="center",vt?Jt=G:wt=G):vt?"left"===q||"end"===q?(ae="flex-end",wt=G):("right"===q||"start"===q)&&(ae="flex-start",Jt=G):"left"===q||"start"===q?(ae="flex-start",wt=G):("right"===q||"end"===q)&&(ae="flex-end",Jt=G),o.position=this._cssPosition,o.marginLeft=O?"0":wt,o.marginTop=T?"0":this._topOffset,o.marginBottom=this._bottomOffset,o.marginRight=O?"0":Jt,e.justifyContent=ae,e.alignItems=T?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;const o=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(Wg),i.justifyContent=i.alignItems=o.marginTop=o.marginBottom=o.marginLeft=o.marginRight=o.position="",this._overlayRef=null,this._isDisposed=!0}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let CM=(()=>{class n{constructor(e,i,a,g){this._viewportRuler=e,this._document=i,this._platform=a,this._overlayContainer=g}global(){return new vM}flexibleConnectedTo(e){return new $g(e,this._viewportRuler,this._document,this._platform,this._overlayContainer)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Cg),t.LFG(w),t.LFG(gi),t.LFG(Yg))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),Lc=0,Ue=(()=>{class n{constructor(e,i,a,g,h,v,O,T,q,G,vt,wt){this.scrollStrategies=e,this._overlayContainer=i,this._componentFactoryResolver=a,this._positionBuilder=g,this._keyboardDispatcher=h,this._injector=v,this._ngZone=O,this._document=T,this._directionality=q,this._location=G,this._outsideClickDispatcher=vt,this._animationsModuleType=wt}create(e){const i=this._createHostElement(),a=this._createPaneElement(i),g=this._createPortalOutlet(a),h=new mM(e);return h.direction=h.direction||this._directionality.value,new Sc(g,i,a,h,this._ngZone,this._keyboardDispatcher,this._document,this._location,this._outsideClickDispatcher,"NoopAnimations"===this._animationsModuleType)}position(){return this._positionBuilder}_createPaneElement(e){const i=this._document.createElement("div");return i.id="cdk-overlay-"+Lc++,i.classList.add("cdk-overlay-pane"),e.appendChild(i),i}_createHostElement(){const e=this._document.createElement("div");return this._overlayContainer.getContainerElement().appendChild(e),e}_createPortalOutlet(e){return this._appRef||(this._appRef=this._injector.get(t.z2F)),new Qg(e,this._componentFactoryResolver,this._appRef,this._injector,this._document)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(yP),t.LFG(Yg),t.LFG(t._Vd),t.LFG(CM),t.LFG(to),t.LFG(t.zs3),t.LFG(t.R0b),t.LFG(w),t.LFG(Gi),t.LFG(gt),t.LFG(Gg),t.LFG(t.QbO,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const gp={provide:new t.OlP("cdk-connected-overlay-scroll-strategy"),deps:[Ue],useFactory:function lp(n){return()=>n.scrollStrategies.reposition()}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let tu=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[Ue,gp],imports:[mc,Ec,ui,ui]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Er(n){return new $e.y(o=>{(0,Nn.Xf)(n()).subscribe(o)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function eu(n,o){}class nu{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let MM=(()=>{class n extends Ws{constructor(e,i,a,g,h,v,O,T){super(),this._elementRef=e,this._focusTrapFactory=i,this._config=g,this._interactivityChecker=h,this._ngZone=v,this._overlayRef=O,this._focusMonitor=T,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this.attachDomPortal=q=>{this._portalOutlet.hasAttached();const G=this._portalOutlet.attachDomPortal(q);return this._contentAttached(),G},this._ariaLabelledBy=this._config.ariaLabelledBy||null,this._document=a}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();const i=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),i}attachTemplatePortal(e){this._portalOutlet.hasAttached();const i=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),i}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{const a=()=>{e.removeEventListener("blur",a),e.removeEventListener("mousedown",a),e.removeAttribute("tabindex")};e.addEventListener("blur",a),e.addEventListener("mousedown",a)})),e.focus(i)}_focusByCssSelector(e,i){let a=this._elementRef.nativeElement.querySelector(e);a&&this._forceFocus(a,i)}_trapFocus(){const e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||e.focus();break;case!0:case"first-tabbable":this._focusTrap.focusInitialElementWhenReady().then(i=>{i||this._focusDialogContainer()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus)}}_restoreFocus(){const e=this._config.restoreFocus;let i=null;if("string"==typeof e?i=this._document.querySelector(e):"boolean"==typeof e?i=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(i=e),this._config.restoreFocus&&i&&"function"==typeof i.focus){const a=pr(),g=this._elementRef.nativeElement;(!a||a===this._document.body||a===g||g.contains(a))&&(this._focusMonitor?(this._focusMonitor.focusVia(i,this._closeInteractionType),this._closeInteractionType=null):i.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const e=this._elementRef.nativeElement,i=pr();return e===i||e.contains(i)}_initializeFocusTrap(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=pr())}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(yc),t.Y36(w,8),t.Y36(nu),t.Y36(Df),t.Y36(t.R0b),t.Y36(Sc),t.Y36(fP))},n.\u0275cmp=t.Xpm({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(e,i){if(1&e&&t.Gf(np,7),2&e){let a;t.iGM(a=t.CRH())&&(i._portalOutlet=a.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,i){2&e&&t.uIk("id",i._config.id||null)("role",i._config.role)("aria-modal",i._config.ariaModal)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledBy)("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null)},features:[t.qOj],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,i){1&e&&t.YNc(0,eu,0,0,"ng-template",0)},dependencies:[np],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class en{constructor(o,e){this.overlayRef=o,this.config=e,this.closed=new Gt.x,this.disableClose=e.disableClose,this.backdropClick=o.backdropClick(),this.keydownEvents=o.keydownEvents(),this.outsidePointerEvents=o.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(i=>{27===i.keyCode&&!this.disableClose&&!
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function LC(n,...o){return o.length?o.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}(i)&&(i.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})})}close(o,e){if(this.containerInstance){const i=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this.overlayRef.dispose(),i.next(o),i.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(o="",e=""){return this.overlayRef.updateSize({width:o,height:e}),this}addPanelClass(o){return this.overlayRef.addPanelClass(o),this}removePanelClass(o){return this.overlayRef.removePanelClass(o),this}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const dp=new t.OlP("DialogScrollStrategy"),nn=new t.OlP("DialogData"),iu=new t.OlP("DefaultDialogConfig"),kn={provide:dp,deps:[Ue],useFactory:function yM(n){return()=>n.scrollStrategies.block()}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let hp=0,Ve=(()=>{class n{constructor(e,i,a,g,h,v){this._overlay=e,this._injector=i,this._defaultOptions=a,this._parentDialog=g,this._overlayContainer=h,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new Gt.x,this._afterOpenedAtThisLevel=new Gt.x,this._ariaHiddenElements=new Map,this.afterAllClosed=Er(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(To(void 0))),this._scrollStrategy=v}get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}open(e,i){(i={...this._defaultOptions||new nu,...i}).id=i.id||"cdk-dialog-"+hp++,i.id&&this.getDialogById(i.id);const g=this._getOverlayConfig(i),h=this._overlay.create(g),v=new en(h,i),O=this._attachContainer(h,v,i);return v.containerInstance=O,this._attachDialogContent(e,v,O,i),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(v),v.closed.subscribe(()=>this._removeOpenDialog(v,!0)),this.afterOpened.next(v),v}closeAll(){fp(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){fp(this._openDialogsAtThisLevel,e=>{!1===e.config.closeOnDestroy&&this._removeOpenDialog(e,!1)}),fp(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){const i=new mM({positionStrategy:e.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation});return e.backdropClass&&(i.backdropClass=e.backdropClass),i}_attachContainer(e,i,a){const g=a.injector||a.viewContainerRef?.injector,h=[{provide:nu,useValue:a},{provide:en,useValue:i},{provide:Sc,useValue:e}];let v;a.container?"function"==typeof a.container?v=a.container:(v=a.container.type,h.push(...a.container.providers(a))):v=MM;const O=new tp(v,a.viewContainerRef,t.zs3.create({parent:g||this._injector,providers:h}),a.componentFactoryResolver);return e.attach(O).instance}_attachDialogContent(e,i,a,g){if(e instanceof t.Rgc){const h=this._createInjector(g,i,a,void 0);let v={$implicit:g.data,dialogRef:i};g.templateContext&&(v={...v,..."function"==typeof g.templateContext?g.templateContext():g.templateContext}),a.attachTemplatePortal(new Ks(e,null,v,h))}else{const h=this._createInjector(g,i,a,this._injector),v=a.attachComponentPortal(new tp(e,g.viewContainerRef,h,g.componentFactoryResolver));i.componentInstance=v.instance}}_createInjector(e,i,a,g){const h=e.injector||e.viewContainerRef?.injector,v=[{provide:nn,useValue:e.data},{provide:en,useValue:i}];return e.providers&&("function"==typeof e.providers?v.push(...e.providers(i,e,a)):v.push(...e.providers)),e.direction&&(!h||!h.get(Gi,null,t.XFs.Optional))&&v.push({provide:Gi,useValue:{value:e.direction,change:At()}}),t.zs3.create({parent:h||g,providers:v})}_removeOpenDialog(e,i){const a=this.openDialogs.indexOf(e);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((g,h)=>{g?h.setAttribute("aria-hidden",g):h.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),i&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){const e=this._overlayContainer.getContainerElement();if(e.parentElement){const i=e.parentElement.children;for(let a=i.length-1;a>-1;a--){const g=i[a];g!==e&&"SCRIPT"!==g.nodeName&&"STYLE"!==g.nodeName&&!g.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(g,g.getAttribute("aria-hidden")),g.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){const e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Ue),t.LFG(t.zs3),t.LFG(iu,8),t.LFG(n,12),t.LFG(Yg),t.LFG(dp))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();function fp(n,o){let e=n.length;for(;e--;)o(n[e])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let bM=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[Ve,kn],imports:[tu,Ec,Yn,Ec]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function eo(n,o){const e=(0,Fn.m)(n)?n:()=>n,i=a=>a.error(e());return new $e.y(o?a=>o.schedule(i,0,a):i)}const Si=new $e.y(_g.Z);function ou(){return(0,Ee.e)((n,o)=>{let e=null;n._refCount++;const i=(0,me.x)(o,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount)return void(e=null);const a=n._connection,g=e;e=null,a&&(!g||a===g)&&a.unsubscribe(),o.unsubscribe()});n.subscribe(i),i.closed||(e=n.connect())})}class ru extends $e.y{constructor(o,e){super(),this.source=o,this.subjectFactory=e,this._subject=null,this._refCount=0,this._connection=null,(0,Ee.A)(o)&&(this.lift=o.lift)}_subscribe(o){return this.getSubject().subscribe(o)}getSubject(){const o=this._subject;return(!o||o.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;const{_connection:o}=this;this._subject=this._connection=null,o?.unsubscribe()}connect(){let o=this._connection;if(!o){o=this._connection=new zn.w0;const e=this.getSubject();o.add(this.source.subscribe((0,me.x)(e,void 0,()=>{this._teardown(),e.complete()},i=>{this._teardown(),e.error(i)},()=>this._teardown()))),o.closed&&(this._connection=null,o=zn.w0.EMPTY)}return o}refCount(){return ou()(this)}}const OM={connector:()=>new Gt.x};function su(n,o=OM){const{connector:e}=o;return(0,Ee.e)((i,a)=>{const g=e();(0,Nn.Xf)(n(function pp(n){return new $e.y(o=>n.subscribe(o))}(g))).subscribe(a),a.add(i.subscribe(g))})}function au(n){return(0,Kt.U)(()=>n)}function _p(n,o){return o?e=>Hs(o.pipe(Re(1),function mp(){return(0,Ee.e)((n,o)=>{n.subscribe((0,me.x)(o,_g.Z))})}()),e.pipe(_p(n))):(0,Ke.z)((e,i)=>n(e,i).pipe(Re(1),au(e)))}
/**
       * @license Angular v14.2.5
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Io="Service workers are disabled or not supported by this browser";class Nc{constructor(o){if(this.serviceWorker=o,o){const i=wo(o,"controllerchange").pipe((0,Kt.U)(()=>o.controller)),g=Hs(Er(()=>At(o.controller)),i);this.worker=g.pipe(Fe(q=>!!q)),this.registration=this.worker.pipe(mn(()=>o.getRegistration()));const T=wo(o,"message").pipe((0,Kt.U)(q=>q.data)).pipe(Fe(q=>q&&q.type)).pipe(function xM(n){return n?o=>su(n)(o):o=>function PM(n,o){const e=(0,Fn.m)(n)?n:()=>n;return(0,Fn.m)(o)?su(o,{connector:e}):i=>new ru(i,e)}(new Gt.x)(o)}());T.connect(),this.events=T}else this.worker=this.events=this.registration=function wM(n){return Er(()=>eo(new Error(n)))}(Io)}postMessage(o,e){return this.worker.pipe(Re(1),We(i=>{i.postMessage({action:o,...e})})).toPromise().then(()=>{})}postMessageWithOperation(o,e,i){const a=this.waitForOperationCompleted(i),g=this.postMessage(o,e);return Promise.all([g,a]).then(([,h])=>h)}generateNonce(){return Math.round(1e7*Math.random())}eventsOfType(o){let e;return e="string"==typeof o?i=>i.type===o:i=>o.includes(i.type),this.events.pipe(Fe(e))}nextEventOfType(o){return this.eventsOfType(o).pipe(Re(1))}waitForOperationCompleted(o){return this.eventsOfType("OPERATION_COMPLETED").pipe(Fe(e=>e.nonce===o),Re(1),(0,Kt.U)(e=>{if(void 0!==e.result)return e.result;throw new Error(e.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let wP=(()=>{class n{constructor(e){if(this.sw=e,this.subscriptionChanges=new Gt.x,!e.isEnabled)return this.messages=Si,this.notificationClicks=Si,void(this.subscription=Si);this.messages=this.sw.eventsOfType("PUSH").pipe((0,Kt.U)(a=>a.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe((0,Kt.U)(a=>a.data)),this.pushManager=this.sw.registration.pipe((0,Kt.U)(a=>a.pushManager));const i=this.pushManager.pipe(mn(a=>a.getSubscription()));this.subscription=(0,Pr.T)(i,this.subscriptionChanges)}get isEnabled(){return this.sw.isEnabled}requestSubscription(e){if(!this.sw.isEnabled)return Promise.reject(new Error(Io));const i={userVisibleOnly:!0};let a=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),g=new Uint8Array(new ArrayBuffer(a.length));for(let h=0;h<a.length;h++)g[h]=a.charCodeAt(h);return i.applicationServerKey=g,this.pushManager.pipe(mn(h=>h.subscribe(i)),Re(1)).toPromise().then(h=>(this.subscriptionChanges.next(h),h))}unsubscribe(){return this.sw.isEnabled?this.subscription.pipe(Re(1),mn(i=>{if(null===i)throw new Error("Not subscribed to push notifications.");return i.unsubscribe().then(a=>{if(!a)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})})).toPromise():Promise.reject(new Error(Io))}decodeBase64(e){return atob(e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Nc))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})(),cu=(()=>{class n{constructor(e){if(this.sw=e,!e.isEnabled)return this.versionUpdates=Si,this.available=Si,this.activated=Si,void(this.unrecoverable=Si);this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.available=this.versionUpdates.pipe(Fe(i=>"VERSION_READY"===i.type),(0,Kt.U)(i=>({type:"UPDATE_AVAILABLE",current:i.currentVersion,available:i.latestVersion}))),this.activated=this.sw.eventsOfType("UPDATE_ACTIVATED"),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}get isEnabled(){return this.sw.isEnabled}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Io));const e=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Io));const e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Nc))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class lu{}const vp=new t.OlP("NGSW_REGISTER_SCRIPT");function DM(n,o,e,i){return()=>{if(!ps(i)||!("serviceWorker"in navigator)||!1===e.enabled)return;let a;if(navigator.serviceWorker.addEventListener("controllerchange",()=>{null!==navigator.serviceWorker.controller&&navigator.serviceWorker.controller.postMessage({action:"INITIALIZE"})}),"function"==typeof e.registrationStrategy)a=e.registrationStrategy();else{const[h,...v]=(e.registrationStrategy||"registerWhenStable:30000").split(":");switch(h){case"registerImmediately":a=At(null);break;case"registerWithDelay":a=Fc(+v[0]||0);break;case"registerWhenStable":a=v[0]?(0,Pr.T)(Cp(n),Fc(+v[0])):Cp(n);break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${e.registrationStrategy}`)}}n.get(t.R0b).runOutsideAngular(()=>a.pipe(Re(1)).subscribe(()=>navigator.serviceWorker.register(o,{scope:e.scope}).catch(h=>console.error("Service worker registration failed with:",h))))}}function Fc(n){return At(null).pipe(function hi(n,o=Ai){const e=mg(n,o);return _p(()=>e)}(n))}function Cp(n){return n.get(t.z2F).isStable.pipe(Fe(e=>e))}function kM(n,o){return new Nc(ps(o)&&!1!==n.enabled?navigator.serviceWorker:void 0)}let Zc=(()=>{class n{static register(e,i={}){return{ngModule:n,providers:[{provide:vp,useValue:e},{provide:lu,useValue:i},{provide:Nc,useFactory:kM,deps:[lu,t.Lbi]},{provide:t.ip1,useFactory:DM,deps:[t.zs3,vp,lu,t.Lbi],multi:!0}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[wP,cu]}),n})(),ta=(()=>{class n{constructor(e,i){this._renderer=e,this._elementRef=i,this.onChange=a=>{},this.onTouched=()=>{}}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.Qsj),t.Y36(t.SBq))},n.\u0275dir=t.lG2({type:n}),n})(),Sr=(()=>{class n extends ta{}return n.\u0275fac=function(){let o;return function(i){return(o||(o=t.n5z(n)))(i||n)}}(),n.\u0275dir=t.lG2({type:n,features:[t.qOj]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Zn=new t.OlP("NgValueAccessor"),DP={provide:Zn,useExisting:(0,t.Gpc)(()=>Rc),multi:!0};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Rc=(()=>{class n extends Sr{writeValue(e){this.setProperty("checked",e)}}return n.\u0275fac=function(){let o;return function(i){return(o||(o=t.n5z(n)))(i||n)}}(),n.\u0275dir=t.lG2({type:n,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(e,i){1&e&&t.NdJ("change",function(g){return i.onChange(g.target.checked)})("blur",function(){return i.onTouched()})},features:[t._Bn([DP]),t.qOj]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Mp={provide:Zn,useExisting:(0,t.Gpc)(()=>Lo),multi:!0},bp=new t.OlP("CompositionEventMode");let Lo=(()=>{class n extends ta{constructor(e,i,a){super(e,i),this._compositionMode=a,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function yp(){const n=B()?B().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",e??"")}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.Qsj),t.Y36(t.SBq),t.Y36(bp,8))},n.\u0275dir=t.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,i){1&e&&t.NdJ("input",function(g){return i._handleInput(g.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(g){return i._compositionEnd(g.target.value)})},features:[t._Bn([Mp]),t.qOj]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Kn(n){return null==n||("string"==typeof n||Array.isArray(n))&&0===n.length}const je=new t.OlP("NgValidators"),no=new t.OlP("NgAsyncValidators");function Uc(n){return null}function kp(n){return null!=n}function du(n){return(0,t.QGY)(n)?(0,de.D)(n):n}function Vc(n){let o={};return n.forEach(e=>{o=null!=e?{...o,...e}:o}),0===Object.keys(o).length?null:o}function Ap(n,o){return o.map(e=>e(n))}function Tp(n){return n.map(o=>function hu(n){return!n.validate}(o)?o:e=>o.validate(e))}function fu(n){return null!=n?function Ep(n){if(!n)return null;const o=n.filter(kp);return 0==o.length?null:function(e){return Vc(Ap(e,o))}}(Tp(n)):null}function pu(n){return null!=n?function Sp(n){if(!n)return null;const o=n.filter(kp);return 0==o.length?null:function(e){return function gu(...n){const o=(0,Ye.jO)(n),{args:e,keys:i}=vf(n),a=new $e.y(g=>{const{length:h}=e;if(!h)return void g.complete();const v=new Array(h);let O=h,T=h;for(let q=0;q<h;q++){let G=!1;(0,Nn.Xf)(e[q]).subscribe((0,me.x)(g,vt=>{G||(G=!0,T--),v[q]=vt},()=>O--,void 0,()=>{(!O||!G)&&(T||g.next(i?Cf(i,v):v),g.complete())}))}});return o?a.pipe(pn(o)):a}
/**
       * @license Angular v14.2.5
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(Ap(e,o).map(du)).pipe((0,Kt.U)(Vc))}}(Tp(n)):null}function Ip(n,o){return null===n?[o]:Array.isArray(n)?[...n,o]:[n,o]}function Lp(n){return n?Array.isArray(n)?n:[n]:[]}function oo(n,o){return Array.isArray(n)?n.includes(o):n===o}function Np(n,o){const e=Lp(o);return Lp(n).forEach(a=>{oo(e,a)||e.push(a)}),e}function Fp(n,o){return Lp(o).filter(e=>!oo(n,e))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class jc{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(o){this._rawValidators=o||[],this._composedValidatorFn=fu(this._rawValidators)}_setAsyncValidators(o){this._rawAsyncValidators=o||[],this._composedAsyncValidatorFn=pu(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(o){this._onDestroyCallbacks.push(o)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(o=>o()),this._onDestroyCallbacks=[]}reset(o){this.control&&this.control.reset(o)}hasError(o,e){return!!this.control&&this.control.hasError(o,e)}getError(o,e){return this.control?this.control.getError(o,e):null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class vn extends jc{get formDirective(){return null}get path(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class on extends jc{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Fr=(()=>{class n extends class Lr{constructor(o){this._cd=o}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(on,2))},n.\u0275dir=t.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,i){2&e&&t.ekj("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},features:[t.qOj]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ur="VALID",qc="INVALID",Vr="PENDING",jr="DISABLED";function vu(n){return Array.isArray(n)?fu(n):n||null}function Jc(n){return Array.isArray(n)?pu(n):n||null}function Bc(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}function qr(n,o){(function bu(n,o){const e=function na(n){return n._rawValidators}(n);null!==o.validator?n.setValidators(Ip(e,o.validator)):"function"==typeof e&&n.setValidators([e]);const i=function io(n){return n._rawAsyncValidators}(n);null!==o.asyncValidator?n.setAsyncValidators(Ip(i,o.asyncValidator)):"function"==typeof i&&n.setAsyncValidators([i]);const a=()=>n.updateValueAndValidity();Jr(o._rawValidators,a),Jr(o._rawAsyncValidators,a)})(n,o),o.valueAccessor.writeValue(n.value),n.disabled&&o.valueAccessor.setDisabledState?.(!0),function qp(n,o){o.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&Ou(n,o)})}(n,o),function NM(n,o){const e=(i,a)=>{o.valueAccessor.writeValue(i),a&&o.viewToModelUpdate(i)};n.registerOnChange(e),o._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,o),function Jp(n,o){o.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&Ou(n,o),"submit"!==n.updateOn&&n.markAsTouched()})}(n,o),function Hp(n,o){if(o.valueAccessor.setDisabledState){const e=i=>{o.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(e),o._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,o)}function Jr(n,o){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(o)})}function Ou(n,o){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),o.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Du(n,o){const e=n.indexOf(o);e>-1&&n.splice(e,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Yp(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const JM={provide:on,useExisting:(0,t.Gpc)(()=>$c)},ku=(()=>Promise.resolve())();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let $c=(()=>{class n extends on{constructor(e,i,a,g,h){super(),this._changeDetectorRef=h,this.control=new class extends class zc{constructor(o,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=o,this._rawAsyncValidators=e,this._composedValidatorFn=vu(this._rawValidators),this._composedAsyncValidatorFn=Jc(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(o){this._rawValidators=this._composedValidatorFn=o}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(o){this._rawAsyncValidators=this._composedAsyncValidatorFn=o}get parent(){return this._parent}get valid(){return this.status===Ur}get invalid(){return this.status===qc}get pending(){return this.status==Vr}get disabled(){return this.status===jr}get enabled(){return this.status!==jr}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(o){this._rawValidators=o,this._composedValidatorFn=vu(o)}setAsyncValidators(o){this._rawAsyncValidators=o,this._composedAsyncValidatorFn=Jc(o)}addValidators(o){this.setValidators(Np(o,this._rawValidators))}addAsyncValidators(o){this.setAsyncValidators(Np(o,this._rawAsyncValidators))}removeValidators(o){this.setValidators(Fp(o,this._rawValidators))}removeAsyncValidators(o){this.setAsyncValidators(Fp(o,this._rawAsyncValidators))}hasValidator(o){return oo(this._rawValidators,o)}hasAsyncValidator(o){return oo(this._rawAsyncValidators,o)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(o={}){this.touched=!0,this._parent&&!o.onlySelf&&this._parent.markAsTouched(o)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(o=>o.markAllAsTouched())}markAsUntouched(o={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!o.onlySelf&&this._parent._updateTouched(o)}markAsDirty(o={}){this.pristine=!1,this._parent&&!o.onlySelf&&this._parent.markAsDirty(o)}markAsPristine(o={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!o.onlySelf&&this._parent._updatePristine(o)}markAsPending(o={}){this.status=Vr,!1!==o.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!o.onlySelf&&this._parent.markAsPending(o)}disable(o={}){const e=this._parentMarkedDirty(o.onlySelf);this.status=jr,this.errors=null,this._forEachChild(i=>{i.disable({...o,onlySelf:!0})}),this._updateValue(),!1!==o.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...o,skipPristineCheck:e}),this._onDisabledChange.forEach(i=>i(!0))}enable(o={}){const e=this._parentMarkedDirty(o.onlySelf);this.status=Ur,this._forEachChild(i=>{i.enable({...o,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent}),this._updateAncestors({...o,skipPristineCheck:e}),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(o){this._parent&&!o.onlySelf&&(this._parent.updateValueAndValidity(o),o.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(o){this._parent=o}getRawValue(){return this.value}updateValueAndValidity(o={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ur||this.status===Vr)&&this._runAsyncValidator(o.emitEvent)),!1!==o.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!o.onlySelf&&this._parent.updateValueAndValidity(o)}_updateTreeValidity(o={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(o)),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?jr:Ur}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(o){if(this.asyncValidator){this.status=Vr,this._hasOwnPendingAsyncValidator=!0;const e=du(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:o})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(o,e={}){this.errors=o,this._updateControlsErrors(!1!==e.emitEvent)}get(o){let e=o;return null==e||(Array.isArray(e)||(e=e.split(".")),0===e.length)?null:e.reduce((i,a)=>i&&i._find(a),this)}getError(o,e){const i=e?this.get(e):this;return i&&i.errors?i.errors[o]:null}hasError(o,e){return!!this.getError(o,e)}get root(){let o=this;for(;o._parent;)o=o._parent;return o}_updateControlsErrors(o){this.status=this._calculateStatus(),o&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(o)}_initObservables(){this.valueChanges=new t.vpe,this.statusChanges=new t.vpe}_calculateStatus(){return this._allControlsDisabled()?jr:this.errors?qc:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Vr)?Vr:this._anyControlsHaveStatus(qc)?qc:Ur}_anyControlsHaveStatus(o){return this._anyControls(e=>e.status===o)}_anyControlsDirty(){return this._anyControls(o=>o.dirty)}_anyControlsTouched(){return this._anyControls(o=>o.touched)}_updatePristine(o={}){this.pristine=!this._anyControlsDirty(),this._parent&&!o.onlySelf&&this._parent._updatePristine(o)}_updateTouched(o={}){this.touched=this._anyControlsTouched(),this._parent&&!o.onlySelf&&this._parent._updateTouched(o)}_registerOnCollectionChange(o){this._onCollectionChange=o}_setUpdateStrategy(o){Bc(o)&&null!=o.updateOn&&(this._updateOn=o.updateOn)}_parentMarkedDirty(o){return!o&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(o){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */{constructor(o=null,e,i){super(function _u(n){return(Bc(n)?n.validators:n)||null}(e),function la(n,o){return(Bc(o)?o.asyncValidators:n)||null}(i,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(o),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Bc(e)&&(e.nonNullable||e.initialValueIsDefault)&&(this.defaultValue=Yp(o)?o.value:o)}setValue(o,e={}){this.value=this._pendingValue=o,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(i=>i(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(o,e={}){this.setValue(o,e)}reset(o=this.defaultValue,e={}){this._applyFormState(o),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(o){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(o){this._onChange.push(o)}_unregisterOnChange(o){Du(this._onChange,o)}registerOnDisabledChange(o){this._onDisabledChange.push(o)}_unregisterOnDisabledChange(o){Du(this._onDisabledChange,o)}_forEachChild(o){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(o){Yp(o)?(this.value=this._pendingValue=o.value,o.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=o}},this._registered=!1,this.update=new t.vpe,this._parent=e,this._setValidators(i),this._setAsyncValidators(a),this.valueAccessor=function Yc(n,o){if(!o)return null;let e,i,a;return Array.isArray(o),o.forEach(g=>{g.constructor===Lo?e=g:function Qp(n){return Object.getPrototypeOf(n.constructor)===Sr}(g)?i=g:a=g}),a||i||e||null}(0,g)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){const i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),function Gc(n,o){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(o,e.currentValue)}(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){qr(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(e){ku.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){const i=e.isDisabled.currentValue,a=0!==i&&(0,t.D6c)(i);ku.then(()=>{a&&!this.control.disabled?this.control.disable():!a&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Hr(n,o){return[...o.path,n]}(e,this._parent):[e]}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(vn,9),t.Y36(je,10),t.Y36(no,10),t.Y36(Zn,10),t.Y36(t.sBO,8))},n.\u0275dir=t.lG2({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[t._Bn([JM]),t.qOj,t.TTD]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const TP={provide:Zn,useExisting:(0,t.Gpc)(()=>zr),multi:!0};let zr=(()=>{class n extends Sr{writeValue(e){this.setProperty("value",e??"")}registerOnChange(e){this.onChange=i=>{e(""==i?null:parseFloat(i))}}}return n.\u0275fac=function(){let o;return function(i){return(o||(o=t.n5z(n)))(i||n)}}(),n.\u0275dir=t.lG2({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(e,i){1&e&&t.NdJ("input",function(g){return i.onChange(g.target.value)})("blur",function(){return i.onTouched()})},features:[t._Bn([TP]),t.qOj]}),n})(),Xp=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const im={provide:Zn,useExisting:(0,t.Gpc)(()=>va),multi:!0};function _a(n,o){return null==n?`${o}`:(o&&"object"==typeof o&&(o="Object"),`${n}: ${o}`.slice(0,50))}let va=(()=>{class n extends Sr{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){this.value=e;const a=_a(this._getOptionId(e),e);this.setProperty("value",a)}registerOnChange(e){this.onChange=i=>{this.value=this._getOptionValue(i),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(const i of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(i),e))return i;return null}_getOptionValue(e){const i=function GM(n){return n.split(":")[0]}(e);return this._optionMap.has(i)?this._optionMap.get(i):e}}return n.\u0275fac=function(){let o;return function(i){return(o||(o=t.n5z(n)))(i||n)}}(),n.\u0275dir=t.lG2({type:n,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(e,i){1&e&&t.NdJ("change",function(g){return i.onChange(g.target.value)})("blur",function(){return i.onTouched()})},inputs:{compareWith:"compareWith"},features:[t._Bn([im]),t.qOj]}),n})(),Qr=(()=>{class n{constructor(e,i,a){this._element=e,this._renderer=i,this._select=a,this._select&&(this.id=this._select._registerOption())}set ngValue(e){null!=this._select&&(this._select._optionMap.set(this.id,e),this._setElementValue(_a(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._setElementValue(e),this._select&&this._select.writeValue(this._select.value)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(va,9))},n.\u0275dir=t.lG2({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Nu={provide:Zn,useExisting:(0,t.Gpc)(()=>Kc),multi:!0};function Ca(n,o){return null==n?`${o}`:("string"==typeof o&&(o=`'${o}'`),o&&"object"==typeof o&&(o="Object"),`${n}: ${o}`.slice(0,50))}let Kc=(()=>{class n extends Sr{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){let i;if(this.value=e,Array.isArray(e)){const a=e.map(g=>this._getOptionId(g));i=(g,h)=>{g._setSelected(a.indexOf(h.toString())>-1)}}else i=(a,g)=>{a._setSelected(!1)};this._optionMap.forEach(i)}registerOnChange(e){this.onChange=i=>{const a=[],g=i.selectedOptions;if(void 0!==g){const h=g;for(let v=0;v<h.length;v++){const T=this._getOptionValue(h[v].value);a.push(T)}}else{const h=i.options;for(let v=0;v<h.length;v++){const O=h[v];if(O.selected){const T=this._getOptionValue(O.value);a.push(T)}}}this.value=a,e(a)}}_registerOption(e){const i=(this._idCounter++).toString();return this._optionMap.set(i,e),i}_getOptionId(e){for(const i of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(i)._value,e))return i;return null}_getOptionValue(e){const i=function Fu(n){return n.split(":")[0]}(e);return this._optionMap.has(i)?this._optionMap.get(i)._value:e}}return n.\u0275fac=function(){let o;return function(i){return(o||(o=t.n5z(n)))(i||n)}}(),n.\u0275dir=t.lG2({type:n,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(e,i){1&e&&t.NdJ("change",function(g){return i.onChange(g.target)})("blur",function(){return i.onTouched()})},inputs:{compareWith:"compareWith"},features:[t._Bn([Nu]),t.qOj]}),n})(),Gr=(()=>{class n{constructor(e,i,a){this._element=e,this._renderer=i,this._select=a,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){null!=this._select&&(this._value=e,this._setElementValue(Ca(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(Ca(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,"selected",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(Kc,9))},n.\u0275dir=t.lG2({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ru(n){return"number"==typeof n?n:parseFloat(n)}let so=(()=>{class n{constructor(){this._validator=Uc}ngOnChanges(e){if(this.inputName in e){const i=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):Uc,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return null!=e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=t.lG2({type:n,features:[t.TTD]}),n})();const rm={provide:je,useExisting:(0,t.Gpc)(()=>Wc),multi:!0};let Wc=(()=>{class n extends so{constructor(){super(...arguments),this.inputName="max",this.normalizeInput=e=>Ru(e),this.createValidator=e=>function Pp(n){return o=>{if(Kn(o.value)||Kn(n))return null;const e=parseFloat(o.value);return!isNaN(e)&&e>n?{max:{max:n,actual:o.value}}:null}}(e)}}return n.\u0275fac=function(){let o;return function(i){return(o||(o=t.n5z(n)))(i||n)}}(),n.\u0275dir=t.lG2({type:n,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(e,i){2&e&&t.uIk("max",i._enabled?i.max:null)},inputs:{max:"max"},features:[t._Bn([rm]),t.qOj]}),n})();const YM={provide:je,useExisting:(0,t.Gpc)(()=>Xc),multi:!0};let Xc=(()=>{class n extends so{constructor(){super(...arguments),this.inputName="min",this.normalizeInput=e=>Ru(e),this.createValidator=e=>function Op(n){return o=>{if(Kn(o.value)||Kn(n))return null;const e=parseFloat(o.value);return!isNaN(e)&&e<n?{min:{min:n,actual:o.value}}:null}}(e)}}return n.\u0275fac=function(){let o;return function(i){return(o||(o=t.n5z(n)))(i||n)}}(),n.\u0275dir=t.lG2({type:n,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(e,i){2&e&&t.uIk("min",i._enabled?i.min:null)},inputs:{min:"min"},features:[t._Bn([YM]),t.qOj]}),n})(),um=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[Xp]}),n})(),dm=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[um]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var m=D(1188),j=D(554);const Fi=(0,D(3888).d)(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});var LP=D(9635);function Yr(n){return(0,Ee.e)((o,e)=>{let i=!1;o.subscribe((0,me.x)(e,a=>{i=!0,e.next(a)},()=>{i||e.next(n),e.complete()}))})}function uy(n=fm){return(0,Ee.e)((o,e)=>{let i=!1;o.subscribe((0,me.x)(e,a=>{i=!0,e.next(a)},()=>i?e.complete():e.error(n())))})}function fm(){return new Fi}function Zi(n,o){const e=arguments.length>=2;return i=>i.pipe(n?Fe((a,g)=>n(a,g,i)):Yi.y,Re(1),e?Yr(o):uy(()=>new Fi))}function $r(n,o){return(0,Fn.m)(o)?(0,Ke.z)(n,o,1):(0,Ke.z)(n,1)}function Tt(n){return(0,Ee.e)((o,e)=>{let g,i=null,a=!1;i=o.subscribe((0,me.x)(e,void 0,void 0,h=>{g=(0,Nn.Xf)(n(h,Tt(n)(o))),i?(i.unsubscribe(),i=null,g.subscribe(e)):a=!0})),a&&(i.unsubscribe(),i=null,g.subscribe(e))})}function dy(n,o,e,i,a){return(g,h)=>{let v=e,O=o,T=0;g.subscribe((0,me.x)(h,q=>{const G=T++;O=v?n(O,q,G):(v=!0,q),i&&h.next(O)},a&&(()=>{v&&h.next(O),h.complete()})))}}function pm(n,o){return(0,Ee.e)(dy(n,o,arguments.length>=2,!0))}function Vu(n){return n<=0?()=>Se.E:(0,Ee.e)((o,e)=>{let i=[];o.subscribe((0,me.x)(e,a=>{i.push(a),n<i.length&&i.shift()},()=>{for(const a of i)e.next(a);e.complete()},void 0,()=>{i=null}))})}function No(n,o){const e=arguments.length>=2;return i=>i.pipe(n?Fe((a,g)=>n(a,g,i)):Yi.y,Vu(1),e?Yr(o):uy(()=>new Fi))}function Kr(n){return(0,Ee.e)((o,e)=>{try{o.subscribe(e)}finally{e.add(n)}})}
/**
       * @license Angular v14.2.5
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Wt="primary",pe=Symbol("RouteTitle");class NP{constructor(o){this.params=o||{}}has(o){return Object.prototype.hasOwnProperty.call(this.params,o)}get(o){if(this.has(o)){const e=this.params[o];return Array.isArray(e)?e[0]:e}return null}getAll(o){if(this.has(o)){const e=this.params[o];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}}function Fo(n){return new NP(n)}function mm(n,o,e){const i=e.path.split("/");if(i.length>n.length||"full"===e.pathMatch&&(o.hasChildren()||i.length<n.length))return null;const a={};for(let g=0;g<i.length;g++){const h=i[g],v=n[g];if(h.startsWith(":"))a[h.substring(1)]=v;else if(h!==v.path)return null}return{consumed:n.slice(0,i.length),posParams:a}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ti(n,o){const e=n?Object.keys(n):void 0,i=o?Object.keys(o):void 0;if(!e||!i||e.length!=i.length)return!1;let a;for(let g=0;g<e.length;g++)if(a=e[g],!ju(n[a],o[a]))return!1;return!0}function ju(n,o){if(Array.isArray(n)&&Array.isArray(o)){if(n.length!==o.length)return!1;const e=[...n].sort(),i=[...o].sort();return e.every((a,g)=>i[g]===a)}return n===o}function Hu(n){return Array.prototype.concat.apply([],n)}function qu(n){return n.length>0?n[n.length-1]:null}function rn(n,o){for(const e in n)n.hasOwnProperty(e)&&o(n[e],e)}function ao(n){return(0,t.CqO)(n)?n:(0,t.QGY)(n)?(0,de.D)(Promise.resolve(n)):At(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const my={exact:function Ju(n,o,e){if(!lo(n.segments,o.segments)||!co(n.segments,o.segments,e)||n.numberOfChildren!==o.numberOfChildren)return!1;for(const i in o.children)if(!n.children[i]||!Ju(n.children[i],o.children[i],e))return!1;return!0},subset:Mm},_m={exact:function vm(n,o){return ti(n,o)},subset:function Cm(n,o){return Object.keys(o).length<=Object.keys(n).length&&Object.keys(o).every(e=>ju(n[e],o[e]))},ignored:()=>!0};function Ma(n,o,e){return my[e.paths](n.root,o.root,e.matrixParams)&&_m[e.queryParams](n.queryParams,o.queryParams)&&!("exact"===e.fragment&&n.fragment!==o.fragment)}function Mm(n,o,e){return Wr(n,o,o.segments,e)}function Wr(n,o,e,i){if(n.segments.length>e.length){const a=n.segments.slice(0,e.length);return!(!lo(a,e)||o.hasChildren()||!co(a,e,i))}if(n.segments.length===e.length){if(!lo(n.segments,e)||!co(n.segments,e,i))return!1;for(const a in o.children)if(!n.children[a]||!Mm(n.children[a],o.children[a],i))return!1;return!0}{const a=e.slice(0,n.segments.length),g=e.slice(n.segments.length);return!!(lo(n.segments,a)&&co(n.segments,a,i)&&n.children[Wt])&&Wr(n.children[Wt],o,g,i)}}function co(n,o,e){return o.every((i,a)=>_m[e](n[a].parameters,i.parameters))}class Ro{constructor(o,e,i){this.root=o,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Fo(this.queryParams)),this._queryParamMap}toString(){return _y.serialize(this)}}class te{constructor(o,e){this.segments=o,this.children=e,this.parent=null,rn(e,(i,a)=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return el(this)}}class ya{constructor(o,e){this.path=o,this.parameters=e}get parameterMap(){return this._parameterMap||(this._parameterMap=Fo(this.parameters)),this._parameterMap}toString(){return xm(this)}}function lo(n,o){return n.length===o.length&&n.every((e,i)=>e.path===o[i].path)}let Om=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:function(){return new tl},providedIn:"root"}),n})();class tl{parse(o){const e=new Oy(o);return new Ro(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(o){const e=`/${nl(o.root,!0)}`,i=function ba(n){const o=Object.keys(n).map(e=>{const i=n[e];return Array.isArray(i)?i.map(a=>`${Bu(e)}=${Bu(a)}`).join("&"):`${Bu(e)}=${Bu(i)}`}).filter(e=>!!e);return o.length?`?${o.join("&")}`:""}(o.queryParams);return`${e}${i}${"string"==typeof o.fragment?`#${function ZP(n){return encodeURI(n)}(o.fragment)}`:""}`}}const _y=new tl;function el(n){return n.segments.map(o=>xm(o)).join("/")}function nl(n,o){if(!n.hasChildren())return el(n);if(o){const e=n.children[Wt]?nl(n.children[Wt],!1):"",i=[];return rn(n.children,(a,g)=>{g!==Wt&&i.push(`${g}:${nl(a,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}{const e=function bm(n,o){let e=[];return rn(n.children,(i,a)=>{a===Wt&&(e=e.concat(o(i,a)))}),rn(n.children,(i,a)=>{a!==Wt&&(e=e.concat(o(i,a)))}),e}(n,(i,a)=>a===Wt?[nl(n.children[Wt],!1)]:[`${a}:${nl(i,!1)}`]);return 1===Object.keys(n.children).length&&null!=n.children[Wt]?`${el(n)}/${e[0]}`:`${el(n)}/(${e.join("//")})`}}function vy(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Bu(n){return vy(n).replace(/%3B/gi,";")}function il(n){return vy(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Uo(n){return decodeURIComponent(n)}function Pm(n){return Uo(n.replace(/\+/g,"%20"))}function xm(n){return`${il(n.path)}${function wm(n){return Object.keys(n).map(o=>`;${il(o)}=${il(n[o])}`).join("")}(n.parameters)}`}const Cy=/^[^\/()?;=#]+/;function ol(n){const o=n.match(Cy);return o?o[0]:""}const My=/^[^=?&#]+/,by=/^[^&#]+/;class Oy{constructor(o){this.url=o,this.remaining=o}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new te([],{}):new te([],this.parseChildren())}parseQueryParams(){const o={};if(this.consumeOptional("?"))do{this.parseQueryParam(o)}while(this.consumeOptional("&"));return o}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const o=[];for(this.peekStartsWith("(")||o.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),o.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(o.length>0||Object.keys(e).length>0)&&(i[Wt]=new te(o,e)),i}parseSegment(){const o=ol(this.remaining);if(""===o&&this.peekStartsWith(";"))throw new t.vHH(4009,!1);return this.capture(o),new ya(Uo(o),this.parseMatrixParams())}parseMatrixParams(){const o={};for(;this.consumeOptional(";");)this.parseParam(o);return o}parseParam(o){const e=ol(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){const a=ol(this.remaining);a&&(i=a,this.capture(i))}o[Uo(e)]=Uo(i)}parseQueryParam(o){const e=function yy(n){const o=n.match(My);return o?o[0]:""}(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){const h=function Dm(n){const o=n.match(by);return o?o[0]:""}(this.remaining);h&&(i=h,this.capture(i))}const a=Pm(e),g=Pm(i);if(o.hasOwnProperty(a)){let h=o[a];Array.isArray(h)||(h=[h],o[a]=h),h.push(g)}else o[a]=g}parseParens(o){const e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const i=ol(this.remaining),a=this.remaining[i.length];if("/"!==a&&")"!==a&&";"!==a)throw new t.vHH(4010,!1);let g;i.indexOf(":")>-1?(g=i.slice(0,i.indexOf(":")),this.capture(g),this.capture(":")):o&&(g=Wt);const h=this.parseChildren();e[g]=1===Object.keys(h).length?h[Wt]:new te([],h),this.consumeOptional("//")}return e}peekStartsWith(o){return this.remaining.startsWith(o)}consumeOptional(o){return!!this.peekStartsWith(o)&&(this.remaining=this.remaining.substring(o.length),!0)}capture(o){if(!this.consumeOptional(o))throw new t.vHH(4011,!1)}}function zu(n){return n.segments.length>0?new te([],{[Wt]:n}):n}function go(n){const o={};for(const i of Object.keys(n.children)){const g=go(n.children[i]);(g.segments.length>0||g.hasChildren())&&(o[i]=g)}return function Py(n){if(1===n.numberOfChildren&&n.children[Wt]){const o=n.children[Wt];return new te(n.segments.concat(o.segments),o.children)}return n}(new te(n.segments,o))}function uo(n){return n instanceof Ro}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Dy(n,o,e,i,a){if(0===e.length)return jo(o.root,o.root,o.root,i,a);const g=function Tm(n){if("string"==typeof n[0]&&1===n.length&&"/"===n[0])return new Am(!0,0,n);let o=0,e=!1;const i=n.reduce((a,g,h)=>{if("object"==typeof g&&null!=g){if(g.outlets){const v={};return rn(g.outlets,(O,T)=>{v[T]="string"==typeof O?O.split("/"):O}),[...a,{outlets:v}]}if(g.segmentPath)return[...a,g.segmentPath]}return"string"!=typeof g?[...a,g]:0===h?(g.split("/").forEach((v,O)=>{0==O&&"."===v||(0==O&&""===v?e=!0:".."===v?o++:""!=v&&a.push(v))}),a):[...a,g]},[]);return new Am(e,o,i)}(e);return g.toRoot()?jo(o.root,o.root,new te([],{}),i,a):function h(O){const T=function ky(n,o,e,i){if(n.isAbsolute)return new Xr(o.root,!0,0);if(-1===i)return new Xr(e,e===o.root,0);return function $u(n,o,e){let i=n,a=o,g=e;for(;g>a;){if(g-=a,i=i.parent,!i)throw new t.vHH(4005,!1);a=i.segments.length}return new Xr(i,!1,a-g)}(e,i+(Vo(n.commands[0])?0:1),n.numberOfDoubleDots)}(g,o,n.snapshot?._urlSegment,O),q=T.processChildren?Pa(T.segmentGroup,T.index,g.commands):Ku(T.segmentGroup,T.index,g.commands);return jo(o.root,T.segmentGroup,q,i,a)}(n.snapshot?._lastPathIndex)}function Vo(n){return"object"==typeof n&&null!=n&&!n.outlets&&!n.segmentPath}function Oa(n){return"object"==typeof n&&null!=n&&n.outlets}function jo(n,o,e,i,a){let h,g={};i&&rn(i,(O,T)=>{g[T]=Array.isArray(O)?O.map(q=>`${q}`):`${O}`}),h=n===o?e:Gu(n,o,e);const v=zu(go(h));return new Ro(v,g,a)}function Gu(n,o,e){const i={};return rn(n.children,(a,g)=>{i[g]=a===o?e:Gu(a,o,e)}),new te(n.segments,i)}class Am{constructor(o,e,i){if(this.isAbsolute=o,this.numberOfDoubleDots=e,this.commands=i,o&&i.length>0&&Vo(i[0]))throw new t.vHH(4003,!1);const a=i.find(Oa);if(a&&a!==qu(i))throw new t.vHH(4004,!1)}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class Xr{constructor(o,e,i){this.segmentGroup=o,this.processChildren=e,this.index=i}}function Ku(n,o,e){if(n||(n=new te([],{})),0===n.segments.length&&n.hasChildren())return Pa(n,o,e);const i=function Ty(n,o,e){let i=0,a=o;const g={match:!1,pathIndex:0,commandIndex:0};for(;a<n.segments.length;){if(i>=e.length)return g;const h=n.segments[a],v=e[i];if(Oa(v))break;const O=`${v}`,T=i<e.length-1?e[i+1]:null;if(a>0&&void 0===O)break;if(O&&T&&"object"==typeof T&&void 0===T.outlets){if(!Sm(O,T,h))return g;i+=2}else{if(!Sm(O,{},h))return g;i++}a++}return{match:!0,pathIndex:a,commandIndex:i}}(n,o,e),a=e.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){const g=new te(n.segments.slice(0,i.pathIndex),{});return g.children[Wt]=new te(n.segments.slice(i.pathIndex),n.children),Pa(g,0,a)}return i.match&&0===a.length?new te(n.segments,{}):i.match&&!n.hasChildren()?Wu(n,o,e):i.match?Pa(n,0,a):Wu(n,o,e)}function Pa(n,o,e){if(0===e.length)return new te(n.segments,{});{const i=function Ay(n){return Oa(n[0])?n[0].outlets:{[Wt]:n}}(e),a={};return rn(i,(g,h)=>{"string"==typeof g&&(g=[g]),null!==g&&(a[h]=Ku(n.children[h],o,g))}),rn(n.children,(g,h)=>{void 0===i[h]&&(a[h]=g)}),new te(n.segments,a)}}function Wu(n,o,e){const i=n.segments.slice(0,o);let a=0;for(;a<e.length;){const g=e[a];if(Oa(g)){const O=Ey(g.outlets);return new te(i,O)}if(0===a&&Vo(e[0])){i.push(new ya(n.segments[o].path,Em(e[0]))),a++;continue}const h=Oa(g)?g.outlets[Wt]:`${g}`,v=a<e.length-1?e[a+1]:null;h&&v&&Vo(v)?(i.push(new ya(h,Em(v))),a+=2):(i.push(new ya(h,{})),a++)}return new te(i,{})}function Ey(n){const o={};return rn(n,(e,i)=>{"string"==typeof e&&(e=[e]),null!==e&&(o[i]=Wu(new te([],{}),0,e))}),o}function Em(n){const o={};return rn(n,(e,i)=>o[i]=`${e}`),o}function Sm(n,o,e){return n==e.path&&ti(o,e.parameters)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class fi{constructor(o,e){this.id=o,this.url=e}}class rl extends fi{constructor(o,e,i="imperative",a=null){super(o,e),this.type=0,this.navigationTrigger=i,this.restoredState=a}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class Ho extends fi{constructor(o,e,i){super(o,e),this.urlAfterRedirects=i,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class sl extends fi{constructor(o,e,i,a){super(o,e),this.reason=i,this.code=a,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class Xu extends fi{constructor(o,e,i,a){super(o,e),this.error=i,this.target=a,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class Sy extends fi{constructor(o,e,i,a){super(o,e),this.urlAfterRedirects=i,this.state=a,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Iy extends fi{constructor(o,e,i,a){super(o,e),this.urlAfterRedirects=i,this.state=a,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Ly extends fi{constructor(o,e,i,a,g){super(o,e),this.urlAfterRedirects=i,this.state=a,this.shouldActivate=g,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class td extends fi{constructor(o,e,i,a){super(o,e),this.urlAfterRedirects=i,this.state=a,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class ed extends fi{constructor(o,e,i,a){super(o,e),this.urlAfterRedirects=i,this.state=a,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Im{constructor(o){this.route=o,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class nd{constructor(o){this.route=o,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class Ny{constructor(o){this.snapshot=o,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Fy{constructor(o){this.snapshot=o,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class id{constructor(o){this.snapshot=o,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Zy{constructor(o){this.snapshot=o,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class od{constructor(o,e,i){this.routerEvent=o,this.position=e,this.anchor=i,this.type=15}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class rd{constructor(o){this._root=o}get root(){return this._root.value}parent(o){const e=this.pathFromRoot(o);return e.length>1?e[e.length-2]:null}children(o){const e=sd(o,this._root);return e?e.children.map(i=>i.value):[]}firstChild(o){const e=sd(o,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(o){const e=Lm(o,this._root);return e.length<2?[]:e[e.length-2].children.map(a=>a.value).filter(a=>a!==o)}pathFromRoot(o){return Lm(o,this._root).map(e=>e.value)}}function sd(n,o){if(n===o.value)return o;for(const e of o.children){const i=sd(n,e);if(i)return i}return null}function Lm(n,o){if(n===o.value)return[o];for(const e of o.children){const i=Lm(n,e);if(i.length)return i.unshift(o),i}return[]}class pi{constructor(o,e){this.value=o,this.children=e}toString(){return`TreeNode(${this.value})`}}function ho(n){const o={};return n&&n.children.forEach(e=>o[e.value.outlet]=e),o
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class Nm extends rd{constructor(o,e){super(o),this.snapshot=e,ll(this,o)}toString(){return this.snapshot.toString()}}function al(n,o){const e=function Ry(n,o){const h=new xa([],{},{},"",{},Wt,o,null,n.root,-1,{});return new ad("",new pi(h,[]))}(n,o),i=new an([new ya("",{})]),a=new an({}),g=new an({}),h=new an({}),v=new an(""),O=new fo(i,a,h,v,g,Wt,o,e.root);return O.snapshot=e.root,new Nm(new pi(O,[]),e)}class fo{constructor(o,e,i,a,g,h,v,O){this.url=o,this.params=e,this.queryParams=i,this.fragment=a,this.data=g,this.outlet=h,this.component=v,this.title=this.data?.pipe((0,Kt.U)(T=>T[pe]))??At(void 0),this._futureSnapshot=O}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe((0,Kt.U)(o=>Fo(o)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe((0,Kt.U)(o=>Fo(o)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function cl(n,o="emptyOnly"){const e=n.pathFromRoot;let i=0;if("always"!==o)for(i=e.length-1;i>=1;){const a=e[i],g=e[i-1];if(a.routeConfig&&""===a.routeConfig.path)i--;else{if(g.component)break;i--}}return function Fm(n){return n.reduce((o,e)=>({params:{...o.params,...e.params},data:{...o.data,...e.data},resolve:{...e.data,...o.resolve,...e.routeConfig?.data,...e._resolvedData}}),{params:{},data:{},resolve:{}})}(e.slice(i))}class xa{constructor(o,e,i,a,g,h,v,O,T,q,G,vt){this.url=o,this.params=e,this.queryParams=i,this.fragment=a,this.data=g,this.outlet=h,this.component=v,this.title=this.data?.[pe],this.routeConfig=O,this._urlSegment=T,this._lastPathIndex=q,this._correctedLastPathIndex=vt??q,this._resolve=G}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=Fo(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Fo(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(i=>i.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class ad extends rd{constructor(o,e){super(e),this.url=o,ll(this,e)}toString(){return Zm(this._root)}}function ll(n,o){o.value._routerState=n,o.children.forEach(e=>ll(n,e))}function Zm(n){const o=n.children.length>0?` { ${n.children.map(Zm).join(", ")} } `:"";return`${n.value}${o}`}function cd(n){if(n.snapshot){const o=n.snapshot,e=n._futureSnapshot;n.snapshot=e,ti(o.queryParams,e.queryParams)||n.queryParams.next(e.queryParams),o.fragment!==e.fragment&&n.fragment.next(e.fragment),ti(o.params,e.params)||n.params.next(e.params),function fy(n,o){if(n.length!==o.length)return!1;for(let e=0;e<n.length;++e)if(!ti(n[e],o[e]))return!1;return!0}(o.url,e.url)||n.url.next(e.url),ti(o.data,e.data)||n.data.next(e.data)}else n.snapshot=n._futureSnapshot,n.data.next(n._futureSnapshot.data)}function ld(n,o){const e=ti(n.params,o.params)&&function ym(n,o){return lo(n,o)&&n.every((e,i)=>ti(e.parameters,o[i].parameters))}(n.url,o.url);return e&&!(!n.parent!=!o.parent)&&(!n.parent||ld(n.parent,o.parent))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function es(n,o,e){if(e&&n.shouldReuseRoute(o.value,e.value.snapshot)){const i=e.value;i._futureSnapshot=o.value;const a=function RP(n,o,e){return o.children.map(i=>{for(const a of e.children)if(n.shouldReuseRoute(i.value,a.value.snapshot))return es(n,i,a);return es(n,i)})}(n,o,e);return new pi(i,a)}{if(n.shouldAttach(o.value)){const g=n.retrieve(o.value);if(null!==g){const h=g.route;return h.value._futureSnapshot=o.value,h.children=o.children.map(v=>es(n,v)),h}}const i=function Rm(n){return new fo(new an(n.url),new an(n.params),new an(n.queryParams),new an(n.fragment),new an(n.data),n.outlet,n.component,n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(o.value),a=o.children.map(g=>es(n,g));return new pi(i,a)}}const gd="ngNavigationCancelingError";function Um(n,o){const{redirectTo:e,navigationBehaviorOptions:i}=uo(o)?{redirectTo:o,navigationBehaviorOptions:void 0}:o,a=Vy(!1,0,o);return a.url=e,a.navigationBehaviorOptions=i,a}function Vy(n,o,e){const i=new Error("NavigationCancelingError: "+(n||""));return i[gd]=!0,i.cancellationCode=o,e&&(i.url=e),i}function jy(n){return Vm(n)&&uo(n.url)}function Vm(n){return n&&n[gd]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Hy{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.injector=null,this.children=new ns,this.attachRef=null}}let ns=(()=>{class n{constructor(){this.contexts=new Map}onChildOutletCreated(e,i){const a=this.getOrCreateContext(e);a.outlet=i,this.contexts.set(e,a)}onChildOutletDestroyed(e){const i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){const e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new Hy,this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const wa=!1;let gl=(()=>{class n{constructor(e,i,a,g,h){this.parentContexts=e,this.location=i,this.changeDetector=g,this.environmentInjector=h,this.activated=null,this._activatedRoute=null,this.activateEvents=new t.vpe,this.deactivateEvents=new t.vpe,this.attachEvents=new t.vpe,this.detachEvents=new t.vpe,this.name=a||Wt,e.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.getContext(this.name)?.outlet===this&&this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const e=this.parentContexts.getContext(this.name);e&&e.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new t.vHH(4012,wa);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new t.vHH(4012,wa);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new t.vHH(4012,wa);this.location.detach();const e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){const e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new t.vHH(4013,wa);this._activatedRoute=e;const a=this.location,h=e._futureSnapshot.component,v=this.parentContexts.getOrCreateContext(this.name).children,O=new jm(e,v,a.injector);if(i&&function Hm(n){return!!n.resolveComponentFactory}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(i)){const T=i.resolveComponentFactory(h);this.activated=a.createComponent(T,a.length,O)}else this.activated=a.createComponent(h,{index:a.length,injector:O,environmentInjector:i??this.environmentInjector});this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(ns),t.Y36(t.s_b),t.$8M("name"),t.Y36(t.sBO),t.Y36(t.lqb))},n.\u0275dir=t.lG2({type:n,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0}),n})();class jm{constructor(o,e,i){this.route=o,this.childContexts=e,this.parent=i}get(o,e){return o===fo?this.route:o===ns?this.childContexts:this.parent.get(o,e)}}let ul=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],standalone:!0,features:[t.jDz],decls:1,vars:0,template:function(e,i){1&e&&t._UZ(0,"router-outlet")},dependencies:[gl],encapsulation:2}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ud(n,o){return n.providers&&!n._injector&&(n._injector=(0,t.MMx)(n.providers,o,`Route: ${n.path}`)),n._injector??o}function fl(n){const o=n.children&&n.children.map(fl),e=o?{...n,children:o}:{...n};return!e.component&&!e.loadComponent&&(o||e.loadChildren)&&e.outlet&&e.outlet!==Wt&&(e.component=ul),e}function An(n){return n.outlet||Wt}function zm(n,o){const e=n.filter(i=>An(i)===o);return e.push(...n.filter(i=>An(i)!==o)),e}function pl(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let o=n.parent;o;o=o.parent){const e=o.routeConfig;if(e?._loadedInjector)return e._loadedInjector;if(e?._injector)return e._injector}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Gm{constructor(o,e,i,a){this.routeReuseStrategy=o,this.futureState=e,this.currState=i,this.forwardEvent=a}activate(o){const e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,o),cd(this.futureState.root),this.activateChildRoutes(e,i,o)}deactivateChildRoutes(o,e,i){const a=ho(e);o.children.forEach(g=>{const h=g.value.outlet;this.deactivateRoutes(g,a[h],i),delete a[h]}),rn(a,(g,h)=>{this.deactivateRouteAndItsChildren(g,i)})}deactivateRoutes(o,e,i){const a=o.value,g=e?e.value:null;if(a===g)if(a.component){const h=i.getContext(a.outlet);h&&this.deactivateChildRoutes(o,e,h.children)}else this.deactivateChildRoutes(o,e,i);else g&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(o,e){o.value.component&&this.routeReuseStrategy.shouldDetach(o.value.snapshot)?this.detachAndStoreRouteSubtree(o,e):this.deactivateRouteAndOutlet(o,e)}detachAndStoreRouteSubtree(o,e){const i=e.getContext(o.value.outlet),a=i&&o.value.component?i.children:e,g=ho(o);for(const h of Object.keys(g))this.deactivateRouteAndItsChildren(g[h],a);if(i&&i.outlet){const h=i.outlet.detach(),v=i.children.onOutletDeactivated();this.routeReuseStrategy.store(o.value.snapshot,{componentRef:h,route:o,contexts:v})}}deactivateRouteAndOutlet(o,e){const i=e.getContext(o.value.outlet),a=i&&o.value.component?i.children:e,g=ho(o);for(const h of Object.keys(g))this.deactivateRouteAndItsChildren(g[h],a);i&&i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated(),i.attachRef=null,i.resolver=null,i.route=null)}activateChildRoutes(o,e,i){const a=ho(e);o.children.forEach(g=>{this.activateRoutes(g,a[g.value.outlet],i),this.forwardEvent(new Zy(g.value.snapshot))}),o.children.length&&this.forwardEvent(new Fy(o.value.snapshot))}activateRoutes(o,e,i){const a=o.value,g=e?e.value:null;if(cd(a),a===g)if(a.component){const h=i.getOrCreateContext(a.outlet);this.activateChildRoutes(o,e,h.children)}else this.activateChildRoutes(o,e,i);else if(a.component){const h=i.getOrCreateContext(a.outlet);if(this.routeReuseStrategy.shouldAttach(a.snapshot)){const v=this.routeReuseStrategy.retrieve(a.snapshot);this.routeReuseStrategy.store(a.snapshot,null),h.children.onOutletReAttached(v.contexts),h.attachRef=v.componentRef,h.route=v.route.value,h.outlet&&h.outlet.attach(v.componentRef,v.route.value),cd(v.route.value),this.activateChildRoutes(o,null,h.children)}else{const v=pl(a.snapshot),O=v?.get(t._Vd)??null;h.attachRef=null,h.route=a,h.resolver=O,h.injector=v,h.outlet&&h.outlet.activateWith(a,h.injector),this.activateChildRoutes(o,null,h.children)}}else this.activateChildRoutes(o,null,i)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class dd{constructor(o){this.path=o,this.route=this.path[this.path.length-1]}}class ml{constructor(o,e){this.component=o,this.route=e}}function Jy(n,o,e){const i=n._root;return qo(i,o?o._root:null,e,[i.value])}function is(n,o){const e=Symbol(),i=o.get(n,e);return i===e?"function"!=typeof n||(0,t.Z0I)(n)?o.get(n):n:i}function qo(n,o,e,i,a={canDeactivateChecks:[],canActivateChecks:[]}){const g=ho(o);return n.children.forEach(h=>{(function mi(n,o,e,i,a={canDeactivateChecks:[],canActivateChecks:[]}){const g=n.value,h=o?o.value:null,v=e?e.getContext(n.value.outlet):null;if(h&&g.routeConfig===h.routeConfig){const O=function By(n,o,e){if("function"==typeof e)return e(n,o);switch(e){case"pathParamsChange":return!lo(n.url,o.url);case"pathParamsOrQueryParamsChange":return!lo(n.url,o.url)||!ti(n.queryParams,o.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!ld(n,o)||!ti(n.queryParams,o.queryParams);default:return!ld(n,o)}}(h,g,g.routeConfig.runGuardsAndResolvers);O?a.canActivateChecks.push(new dd(i)):(g.data=h.data,g._resolvedData=h._resolvedData),qo(n,o,g.component?v?v.children:null:e,i,a),O&&v&&v.outlet&&v.outlet.isActivated&&a.canDeactivateChecks.push(new ml(v.outlet.component,h))}else h&&Jo(o,v,a),a.canActivateChecks.push(new dd(i)),qo(n,null,g.component?v?v.children:null:e,i,a)})(h,g[h.value.outlet],e,i.concat([h.value]),a),delete g[h.value.outlet]}),rn(g,(h,v)=>Jo(h,e.getContext(v),a)),a}function Jo(n,o,e){const i=ho(n),a=n.value;rn(i,(g,h)=>{Jo(g,a.component?o?o.children.getContext(h):null:o,e)}),e.canDeactivateChecks.push(new ml(a.component&&o&&o.outlet&&o.outlet.isActivated?o.outlet.component:null,a))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ri(n){return"function"==typeof n}function Cl(n){return n instanceof Fi||"EmptyError"===n?.name}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const os=Symbol("INITIAL_VALUE");function Bo(){return mn(n=>Dg(n.map(o=>o.pipe(Re(1),To(os)))).pipe((0,Kt.U)(o=>{for(const e of o)if(!0!==e){if(e===os)return os;if(!1===e||e instanceof Ro)return e}return!0}),Fe(o=>o!==os),Re(1)))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Km(n){return(0,LP.z)(We(o=>{if(uo(o))throw Um(0,o)}),(0,Kt.U)(o=>!0===o))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const _d={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function vd(n,o,e,i,a){const g=ka(n,o,e);return g.matched?function Xy(n,o,e,i){const a=o.canMatch;return a&&0!==a.length?At(a.map(h=>{const v=is(h,n);return ao(function Yy(n){return n&&Ri(n.canMatch)}(v)?v.canMatch(o,e):n.runInContext(()=>v(o,e)))})).pipe(Bo(),Km()):At(!0)}(i=ud(o,i),o,e).pipe((0,Kt.U)(h=>!0===h?g:{..._d})):At(g)}function ka(n,o,e){if(""===o.path)return"full"===o.pathMatch&&(n.hasChildren()||e.length>0)?{..._d}:{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};const a=(o.matcher||mm)(e,n,o);if(!a)return{..._d};const g={};rn(a.posParams,(v,O)=>{g[O]=v.path});const h=a.consumed.length>0?{...g,...a.consumed[a.consumed.length-1].parameters}:g;return{matched:!0,consumedSegments:a.consumed,remainingSegments:e.slice(a.consumed.length),parameters:h,positionalParamSegments:a.posParams??{}}}function Aa(n,o,e,i,a="corrected"){if(e.length>0&&function t_(n,o,e){return e.some(i=>Ta(n,o,i)&&An(i)!==Wt)}(n,e,i)){const h=new te(o,function Xm(n,o,e,i){const a={};a[Wt]=i,i._sourceSegment=n,i._segmentIndexShift=o.length;for(const g of e)if(""===g.path&&An(g)!==Wt){const h=new te([],{});h._sourceSegment=n,h._segmentIndexShift=o.length,a[An(g)]=h}return a}(n,o,i,new te(e,n.children)));return h._sourceSegment=n,h._segmentIndexShift=o.length,{segmentGroup:h,slicedSegments:[]}}if(0===e.length&&function t1(n,o,e){return e.some(i=>Ta(n,o,i))}(n,e,i)){const h=new te(n.segments,function Wm(n,o,e,i,a,g){const h={};for(const v of i)if(Ta(n,e,v)&&!a[An(v)]){const O=new te([],{});O._sourceSegment=n,O._segmentIndexShift="legacy"===g?n.segments.length:o.length,h[An(v)]=O}return{...a,...h}}(n,o,e,i,n.children,a));return h._sourceSegment=n,h._segmentIndexShift=o.length,{segmentGroup:h,slicedSegments:e}}const g=new te(n.segments,n.children);return g._sourceSegment=n,g._segmentIndexShift=o.length,{segmentGroup:g,slicedSegments:e}}function Ta(n,o,e){return(!(n.hasChildren()||o.length>0)||"full"!==e.pathMatch)&&""===e.path}function Cd(n,o,e,i){return!!(An(n)===i||i!==Wt&&Ta(o,e,n))&&("**"===n.path||ka(o,n,e).matched)}function e_(n,o,e){return 0===o.length&&!n.children[e]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ea=!1;class Ml{constructor(o){this.segmentGroup=o||null}}class ln{constructor(o){this.urlTree=o}}function _i(n){return eo(new Ml(n))}function n_(n){return eo(new ln(n))}class i_{constructor(o,e,i,a,g){this.injector=o,this.configLoader=e,this.urlSerializer=i,this.urlTree=a,this.config=g,this.allowRedirects=!0}apply(){const o=Aa(this.urlTree.root,[],[],this.config).segmentGroup,e=new te(o.segments,o.children);return this.expandSegmentGroup(this.injector,this.config,e,Wt).pipe((0,Kt.U)(g=>this.createUrlTree(go(g),this.urlTree.queryParams,this.urlTree.fragment))).pipe(Tt(g=>{if(g instanceof ln)return this.allowRedirects=!1,this.match(g.urlTree);throw g instanceof Ml?this.noMatchError(g):g}))}match(o){return this.expandSegmentGroup(this.injector,this.config,o.root,Wt).pipe((0,Kt.U)(a=>this.createUrlTree(go(a),o.queryParams,o.fragment))).pipe(Tt(a=>{throw a instanceof Ml?this.noMatchError(a):a}))}noMatchError(o){return new t.vHH(4002,Ea)}createUrlTree(o,e,i){const a=zu(o);return new Ro(a,e,i)}expandSegmentGroup(o,e,i,a){return 0===i.segments.length&&i.hasChildren()?this.expandChildren(o,e,i).pipe((0,Kt.U)(g=>new te([],g))):this.expandSegment(o,i,e,i.segments,a,!0)}expandChildren(o,e,i){const a=[];for(const g of Object.keys(i.children))"primary"===g?a.unshift(g):a.push(g);return(0,de.D)(a).pipe($r(g=>{const h=i.children[g],v=zm(e,g);return this.expandSegmentGroup(o,v,h,g).pipe((0,Kt.U)(O=>({segment:O,outlet:g})))}),pm((g,h)=>(g[h.outlet]=h.segment,g),{}),No())}expandSegment(o,e,i,a,g,h){return(0,de.D)(i).pipe($r(v=>this.expandSegmentAgainstRoute(o,e,i,v,a,g,h).pipe(Tt(T=>{if(T instanceof Ml)return At(null);throw T}))),Zi(v=>!!v),Tt((v,O)=>{if(Cl(v))return e_(e,a,g)?At(new te([],{})):_i(e);throw v}))}expandSegmentAgainstRoute(o,e,i,a,g,h,v){return Cd(a,e,g,h)?void 0===a.redirectTo?this.matchSegmentAgainstRoute(o,e,a,g,h):v&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(o,e,i,a,g,h):_i(e):_i(e)}expandSegmentAgainstRouteUsingRedirect(o,e,i,a,g,h){return"**"===a.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(o,i,a,h):this.expandRegularSegmentAgainstRouteUsingRedirect(o,e,i,a,g,h)}expandWildCardWithParamsAgainstRouteUsingRedirect(o,e,i,a){const g=this.applyRedirectCommands([],i.redirectTo,{});return i.redirectTo.startsWith("/")?n_(g):this.lineralizeSegments(i,g).pipe((0,Ke.z)(h=>{const v=new te(h,{});return this.expandSegment(o,v,e,h,a,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(o,e,i,a,g,h){const{matched:v,consumedSegments:O,remainingSegments:T,positionalParamSegments:q}=ka(e,a,g);if(!v)return _i(e);const G=this.applyRedirectCommands(O,a.redirectTo,q);return a.redirectTo.startsWith("/")?n_(G):this.lineralizeSegments(a,G).pipe((0,Ke.z)(vt=>this.expandSegment(o,e,i,vt.concat(T),h,!1)))}matchSegmentAgainstRoute(o,e,i,a,g){return"**"===i.path?(o=ud(i,o),i.loadChildren?(i._loadedRoutes?At({routes:i._loadedRoutes,injector:i._loadedInjector}):this.configLoader.loadChildren(o,i)).pipe((0,Kt.U)(v=>(i._loadedRoutes=v.routes,i._loadedInjector=v.injector,new te(a,{})))):At(new te(a,{}))):vd(e,i,a,o).pipe(mn(({matched:h,consumedSegments:v,remainingSegments:O})=>h?this.getChildConfig(o=i._injector??o,i,a).pipe((0,Ke.z)(q=>{const G=q.injector??o,vt=q.routes,{segmentGroup:wt,slicedSegments:Jt}=Aa(e,v,O,vt),ae=new te(wt.segments,wt.children);if(0===Jt.length&&ae.hasChildren())return this.expandChildren(G,vt,ae).pipe((0,Kt.U)(Mo=>new te(v,Mo)));if(0===vt.length&&0===Jt.length)return At(new te(v,{}));const ee=An(i)===g;return this.expandSegment(G,ae,vt,Jt,ee?Wt:g,!0).pipe((0,Kt.U)(yn=>new te(v.concat(yn.segments),yn.children)))})):_i(e)))}getChildConfig(o,e,i){return e.children?At({routes:e.children,injector:o}):e.loadChildren?void 0!==e._loadedRoutes?At({routes:e._loadedRoutes,injector:e._loadedInjector}):function Wy(n,o,e,i){const a=o.canLoad;return void 0===a||0===a.length?At(!0):At(a.map(h=>{const v=is(h,n);return ao(function Qy(n){return n&&Ri(n.canLoad)}(v)?v.canLoad(o,e):n.runInContext(()=>v(o,e)))})).pipe(Bo(),Km())}(o,e,i).pipe((0,Ke.z)(a=>a?this.configLoader.loadChildren(o,e).pipe(We(g=>{e._loadedRoutes=g.routes,e._loadedInjector=g.injector})):function qP(n){return eo(Vy(Ea,3))}())):At({routes:[],injector:o})}lineralizeSegments(o,e){let i=[],a=e.root;for(;;){if(i=i.concat(a.segments),0===a.numberOfChildren)return At(i);if(a.numberOfChildren>1||!a.children[Wt])return eo(new t.vHH(4e3,Ea));a=a.children[Wt]}}applyRedirectCommands(o,e,i){return this.applyRedirectCreateUrlTree(e,this.urlSerializer.parse(e),o,i)}applyRedirectCreateUrlTree(o,e,i,a){const g=this.createSegmentGroup(o,e.root,i,a);return new Ro(g,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(o,e){const i={};return rn(o,(a,g)=>{if("string"==typeof a&&a.startsWith(":")){const v=a.substring(1);i[g]=e[v]}else i[g]=a}),i}createSegmentGroup(o,e,i,a){const g=this.createSegments(o,e.segments,i,a);let h={};return rn(e.children,(v,O)=>{h[O]=this.createSegmentGroup(o,v,i,a)}),new te(g,h)}createSegments(o,e,i,a){return e.map(g=>g.path.startsWith(":")?this.findPosParam(o,g,a):this.findOrReturn(g,i))}findPosParam(o,e,i){const a=i[e.path.substring(1)];if(!a)throw new t.vHH(4001,Ea);return a}findOrReturn(o,e){let i=0;for(const a of e){if(a.path===o.path)return e.splice(i),a;i++}return o}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class n1{}class r_{constructor(o,e,i,a,g,h,v,O){this.injector=o,this.rootComponentType=e,this.config=i,this.urlTree=a,this.url=g,this.paramsInheritanceStrategy=h,this.relativeLinkResolution=v,this.urlSerializer=O}recognize(){const o=Aa(this.urlTree.root,[],[],this.config.filter(e=>void 0===e.redirectTo),this.relativeLinkResolution).segmentGroup;return this.processSegmentGroup(this.injector,this.config,o,Wt).pipe((0,Kt.U)(e=>{if(null===e)return null;const i=new xa([],Object.freeze({}),Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,{},Wt,this.rootComponentType,null,this.urlTree.root,-1,{}),a=new pi(i,e),g=new ad(this.url,a);return this.inheritParamsAndData(g._root),g}))}inheritParamsAndData(o){const e=o.value,i=cl(e,this.paramsInheritanceStrategy);e.params=Object.freeze(i.params),e.data=Object.freeze(i.data),o.children.forEach(a=>this.inheritParamsAndData(a))}processSegmentGroup(o,e,i,a){return 0===i.segments.length&&i.hasChildren()?this.processChildren(o,e,i):this.processSegment(o,e,i,i.segments,a)}processChildren(o,e,i){return(0,de.D)(Object.keys(i.children)).pipe($r(a=>{const g=i.children[a],h=zm(e,a);return this.processSegmentGroup(o,h,g,a)}),pm((a,g)=>a&&g?(a.push(...g),a):null),function hy(n,o=!1){return(0,Ee.e)((e,i)=>{let a=0;e.subscribe((0,me.x)(i,g=>{const h=n(g,a++);(h||o)&&i.next(g),!h&&i.complete()}))})}(a=>null!==a),Yr(null),No(),(0,Kt.U)(a=>{if(null===a)return null;const g=yl(a);return function r1(n){n.sort((o,e)=>o.value.outlet===Wt?-1:e.value.outlet===Wt?1:o.value.outlet.localeCompare(e.value.outlet))}(g),g}))}processSegment(o,e,i,a,g){return(0,de.D)(e).pipe($r(h=>this.processSegmentAgainstRoute(h._injector??o,h,i,a,g)),Zi(h=>!!h),Tt(h=>{if(Cl(h))return e_(i,a,g)?At([]):At(null);throw h}))}processSegmentAgainstRoute(o,e,i,a,g){if(e.redirectTo||!Cd(e,i,a,g))return At(null);let h;if("**"===e.path){const v=a.length>0?qu(a).parameters:{},O=Sa(i)+a.length;h=At({snapshot:new xa(a,v,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,c1(e),An(e),e.component??e._loadedComponent??null,e,yd(i),O,bd(e),O),consumedSegments:[],remainingSegments:[]})}else h=vd(i,e,a,o).pipe((0,Kt.U)(({matched:v,consumedSegments:O,remainingSegments:T,parameters:q})=>{if(!v)return null;const G=Sa(i)+O.length;return{snapshot:new xa(O,q,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,c1(e),An(e),e.component??e._loadedComponent??null,e,yd(i),G,bd(e),G),consumedSegments:O,remainingSegments:T}}));return h.pipe(mn(v=>{if(null===v)return At(null);const{snapshot:O,consumedSegments:T,remainingSegments:q}=v;o=e._injector??o;const G=e._loadedInjector??o,vt=function s1(n){return n.children?n.children:n.loadChildren?n._loadedRoutes:[]}(e),{segmentGroup:wt,slicedSegments:Jt}=Aa(i,T,q,vt.filter(ee=>void 0===ee.redirectTo),this.relativeLinkResolution);if(0===Jt.length&&wt.hasChildren())return this.processChildren(G,vt,wt).pipe((0,Kt.U)(ee=>null===ee?null:[new pi(O,ee)]));if(0===vt.length&&0===Jt.length)return At([new pi(O,[])]);const ae=An(e)===g;return this.processSegment(G,vt,wt,Jt,ae?Wt:g).pipe((0,Kt.U)(ee=>null===ee?null:[new pi(O,ee)]))}))}}function a1(n){const o=n.value.routeConfig;return o&&""===o.path&&void 0===o.redirectTo}function yl(n){const o=[],e=new Set;for(const i of n){if(!a1(i)){o.push(i);continue}const a=o.find(g=>i.value.routeConfig===g.value.routeConfig);void 0!==a?(a.children.push(...i.children),e.add(a)):o.push(i)}for(const i of e){const a=yl(i.children);o.push(new pi(i.value,a))}return o.filter(i=>!e.has(i))}function yd(n){let o=n;for(;o._sourceSegment;)o=o._sourceSegment;return o}function Sa(n){let o=n,e=o._segmentIndexShift??0;for(;o._sourceSegment;)o=o._sourceSegment,e+=o._segmentIndexShift??0;return e-1}function c1(n){return n.data||{}}function bd(n){return n.resolve||{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function u1(n){return"string"==typeof n.title||null===n.title}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Pd(n){return mn(o=>{const e=n(o);return e?(0,de.D)(e).pipe((0,Kt.U)(()=>o)):At(o)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let d1=(()=>{class n{buildTitle(e){let i,a=e.root;for(;void 0!==a;)i=this.getResolvedTitleForRoute(a)??i,a=a.children.find(g=>g.outlet===Wt);return i}getResolvedTitleForRoute(e){return e.data[pe]}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:function(){return(0,t.f3M)(l_)},providedIn:"root"}),n})(),l_=(()=>{class n extends d1{constructor(e){super(),this.title=e}updateTitle(e){const i=this.buildTitle(e);void 0!==i&&this.title.setTitle(i)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(og))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class h1{}class u_ extends class g_{shouldDetach(o){return!1}store(o,e){}shouldAttach(o){return!1}retrieve(o){return null}shouldReuseRoute(o,e){return o.routeConfig===e.routeConfig}}{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ia=new t.OlP("",{providedIn:"root",factory:()=>({})}),wd=new t.OlP("ROUTES");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Dd=(()=>{class n{constructor(e,i){this.injector=e,this.compiler=i,this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap}loadComponent(e){if(this.componentLoaders.get(e))return this.componentLoaders.get(e);if(e._loadedComponent)return At(e._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(e);const i=ao(e.loadComponent()).pipe(We(g=>{this.onLoadEndListener&&this.onLoadEndListener(e),e._loadedComponent=g}),Kr(()=>{this.componentLoaders.delete(e)})),a=new ru(i,()=>new Gt.x).pipe(ou());return this.componentLoaders.set(e,a),a}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return At({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);const g=this.loadModuleFactoryOrRoutes(i.loadChildren).pipe((0,Kt.U)(v=>{this.onLoadEndListener&&this.onLoadEndListener(i);let O,T,q=!1;Array.isArray(v)?T=v:(O=v.create(e).injector,T=Hu(O.get(wd,[],t.XFs.Self|t.XFs.Optional)));return{routes:T.map(fl),injector:O}}),Kr(()=>{this.childrenLoaders.delete(i)})),h=new ru(g,()=>new Gt.x).pipe(ou());return this.childrenLoaders.set(i,h),h}loadModuleFactoryOrRoutes(e){return ao(e()).pipe((0,Ke.z)(i=>i instanceof t.YKP||Array.isArray(i)?At(i):(0,de.D)(this.compiler.compileModuleAsync(i))))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(t.zs3),t.LFG(t.Sil))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class d_{}class p1{shouldProcessUrl(o){return!0}extract(o){return o}merge(o,e){return o}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function h_(n){throw n}function f_(n,o,e){return o.parse("/")}const p_={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},m1={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function v1(){const n=(0,t.f3M)(Om),o=(0,t.f3M)(ns),e=(0,t.f3M)(gt),i=(0,t.f3M)(t.zs3),a=(0,t.f3M)(t.Sil),g=(0,t.f3M)(wd,{optional:!0})??[],h=(0,t.f3M)(Ia,{optional:!0})??{},v=(0,t.f3M)(l_),O=(0,t.f3M)(d1,{optional:!0}),T=(0,t.f3M)(d_,{optional:!0}),q=(0,t.f3M)(h1,{optional:!0}),G=new Xe(null,n,o,e,i,a,Hu(g));return T&&(G.urlHandlingStrategy=T),q&&(G.routeReuseStrategy=q),G.titleStrategy=O??v,function _1(n,o){n.errorHandler&&(o.errorHandler=n.errorHandler),n.malformedUriErrorHandler&&(o.malformedUriErrorHandler=n.malformedUriErrorHandler),n.onSameUrlNavigation&&(o.onSameUrlNavigation=n.onSameUrlNavigation),n.paramsInheritanceStrategy&&(o.paramsInheritanceStrategy=n.paramsInheritanceStrategy),n.relativeLinkResolution&&(o.relativeLinkResolution=n.relativeLinkResolution),n.urlUpdateStrategy&&(o.urlUpdateStrategy=n.urlUpdateStrategy),n.canceledNavigationResolution&&(o.canceledNavigationResolution=n.canceledNavigationResolution)}(h,G),G}let Xe=(()=>{class n{constructor(e,i,a,g,h,v,O){this.rootComponentType=e,this.urlSerializer=i,this.rootContexts=a,this.location=g,this.config=O,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.navigationId=0,this.currentPageId=0,this.isNgZoneEnabled=!1,this.events=new Gt.x,this.errorHandler=h_,this.malformedUriErrorHandler=f_,this.navigated=!1,this.lastSuccessfulId=-1,this.afterPreactivation=()=>At(void 0),this.urlHandlingStrategy=new p1,this.routeReuseStrategy=new u_,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.canceledNavigationResolution="replace",this.configLoader=h.get(Dd),this.configLoader.onLoadEndListener=vt=>this.triggerEvent(new nd(vt)),this.configLoader.onLoadStartListener=vt=>this.triggerEvent(new Im(vt)),this.ngModule=h.get(t.h0i),this.console=h.get(t.c2e);const G=h.get(t.R0b);this.isNgZoneEnabled=G instanceof t.R0b&&t.R0b.isInAngularZone(),this.resetConfig(O),this.currentUrlTree=function py(){return new Ro(new te([],{}),{},null)}(),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.routerState=al(this.currentUrlTree,this.rootComponentType),this.transitions=new an({id:0,targetPageId:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}get browserPageId(){return this.location.getState()?.\u0275routerPageId}setupNavigations(e){const i=this.events;return e.pipe(Fe(a=>0!==a.id),(0,Kt.U)(a=>({...a,extractedUrl:this.urlHandlingStrategy.extract(a.rawUrl)})),mn(a=>{let g=!1,h=!1;return At(a).pipe(We(v=>{this.currentNavigation={id:v.id,initialUrl:v.rawUrl,extractedUrl:v.extractedUrl,trigger:v.source,extras:v.extras,previousNavigation:this.lastSuccessfulNavigation?{...this.lastSuccessfulNavigation,previousNavigation:null}:null}}),mn(v=>{const O=this.browserUrlTree.toString(),T=!this.navigated||v.extractedUrl.toString()!==O||O!==this.currentUrlTree.toString();if(("reload"===this.onSameUrlNavigation||T)&&this.urlHandlingStrategy.shouldProcessUrl(v.rawUrl))return C1(v.source)&&(this.browserUrlTree=v.extractedUrl),At(v).pipe(mn(G=>{const vt=this.transitions.getValue();return i.next(new rl(G.id,this.serializeUrl(G.extractedUrl),G.source,G.restoredState)),vt!==this.transitions.getValue()?Se.E:Promise.resolve(G)}),function o_(n,o,e,i){return mn(a=>function JP(n,o,e,i,a){return new i_(n,o,e,i,a).apply()}(n,o,e,a.extractedUrl,i).pipe((0,Kt.U)(g=>({...a,urlAfterRedirects:g}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.ngModule.injector,this.configLoader,this.urlSerializer,this.config),We(G=>{this.currentNavigation={...this.currentNavigation,finalUrl:G.urlAfterRedirects},a.urlAfterRedirects=G.urlAfterRedirects}),function l1(n,o,e,i,a,g){return(0,Ke.z)(h=>function o1(n,o,e,i,a,g,h="emptyOnly",v="legacy"){return new r_(n,o,e,i,a,h,v,g).recognize().pipe(mn(O=>null===O?function Md(n){return new $e.y(o=>o.error(n))}(new n1):At(O)))}(n,o,e,h.urlAfterRedirects,i.serialize(h.urlAfterRedirects),i,a,g).pipe((0,Kt.U)(v=>({...h,targetSnapshot:v}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.ngModule.injector,this.rootComponentType,this.config,this.urlSerializer,this.paramsInheritanceStrategy,this.relativeLinkResolution),We(G=>{if(a.targetSnapshot=G.targetSnapshot,"eager"===this.urlUpdateStrategy){if(!G.extras.skipLocationChange){const wt=this.urlHandlingStrategy.merge(G.urlAfterRedirects,G.rawUrl);this.setBrowserUrl(wt,G)}this.browserUrlTree=G.urlAfterRedirects}const vt=new Sy(G.id,this.serializeUrl(G.extractedUrl),this.serializeUrl(G.urlAfterRedirects),G.targetSnapshot);i.next(vt)}));if(T&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:vt,extractedUrl:wt,source:Jt,restoredState:ae,extras:ee}=v,bi=new rl(vt,this.serializeUrl(wt),Jt,ae);i.next(bi);const yn=al(wt,this.rootComponentType).snapshot;return At(a={...v,targetSnapshot:yn,urlAfterRedirects:wt,extras:{...ee,skipLocationChange:!1,replaceUrl:!1}})}return this.rawUrlTree=v.rawUrl,v.resolve(null),Se.E}),We(v=>{const O=new Iy(v.id,this.serializeUrl(v.extractedUrl),this.serializeUrl(v.urlAfterRedirects),v.targetSnapshot);this.triggerEvent(O)}),(0,Kt.U)(v=>a={...v,guards:Jy(v.targetSnapshot,v.currentSnapshot,this.rootContexts)}),function $y(n,o){return(0,Ke.z)(e=>{const{targetSnapshot:i,currentSnapshot:a,guards:{canActivateChecks:g,canDeactivateChecks:h}}=e;return 0===h.length&&0===g.length?At({...e,guardsResult:!0}):function Ky(n,o,e,i){return(0,de.D)(n).pipe((0,Ke.z)(a=>function md(n,o,e,i,a){const g=o&&o.routeConfig?o.routeConfig.canDeactivate:null;return g&&0!==g.length?At(g.map(v=>{const O=pl(o)??a,T=is(v,O);return ao(function vl(n){return n&&Ri(n.canDeactivate)}(T)?T.canDeactivate(n,o,e,i):O.runInContext(()=>T(n,o,e,i))).pipe(Zi())})).pipe(Bo()):At(!0)}(a.component,a.route,e,o,i)),Zi(a=>!0!==a,!0))}(h,i,a,n).pipe((0,Ke.z)(v=>v&&function zy(n){return"boolean"==typeof n}(v)?function HP(n,o,e,i){return(0,de.D)(o).pipe($r(a=>Hs(function fd(n,o){return null!==n&&o&&o(new Ny(n)),At(!0)}(a.route.parent,i),function hd(n,o){return null!==n&&o&&o(new id(n)),At(!0)}(a.route,i),function pd(n,o,e){const i=o[o.length-1],g=o.slice(0,o.length-1).reverse().map(h=>function Da(n){const o=n.routeConfig?n.routeConfig.canActivateChild:null;return o&&0!==o.length?{node:n,guards:o}:null}(h)).filter(h=>null!==h).map(h=>Er(()=>At(h.guards.map(O=>{const T=pl(h.node)??e,q=is(O,T);return ao(function _l(n){return n&&Ri(n.canActivateChild)}(q)?q.canActivateChild(i,n):T.runInContext(()=>q(i,n))).pipe(Zi())})).pipe(Bo())));return At(g).pipe(Bo())}(n,a.path,e),function $m(n,o,e){const i=o.routeConfig?o.routeConfig.canActivate:null;if(!i||0===i.length)return At(!0);const a=i.map(g=>Er(()=>{const h=pl(o)??e,v=is(g,h);return ao(function Gy(n){return n&&Ri(n.canActivate)}(v)?v.canActivate(o,n):h.runInContext(()=>v(o,n))).pipe(Zi())}));return At(a).pipe(Bo())}(n,a.route,e))),Zi(a=>!0!==a,!0))}(i,g,n,o):At(v)),(0,Kt.U)(v=>({...e,guardsResult:v})))})}(this.ngModule.injector,v=>this.triggerEvent(v)),We(v=>{if(a.guardsResult=v.guardsResult,uo(v.guardsResult))throw Um(0,v.guardsResult);const O=new Ly(v.id,this.serializeUrl(v.extractedUrl),this.serializeUrl(v.urlAfterRedirects),v.targetSnapshot,!!v.guardsResult);this.triggerEvent(O)}),Fe(v=>!!v.guardsResult||(this.restoreHistory(v),this.cancelNavigationTransition(v,"",3),!1)),Pd(v=>{if(v.guards.canActivateChecks.length)return At(v).pipe(We(O=>{const T=new td(O.id,this.serializeUrl(O.extractedUrl),this.serializeUrl(O.urlAfterRedirects),O.targetSnapshot);this.triggerEvent(T)}),mn(O=>{let T=!1;return At(O).pipe(function a_(n,o){return(0,Ke.z)(e=>{const{targetSnapshot:i,guards:{canActivateChecks:a}}=e;if(!a.length)return At(e);let g=0;return(0,de.D)(a).pipe($r(h=>function rs(n,o,e,i){const a=n.routeConfig,g=n._resolve;return void 0!==a?.title&&!u1(a)&&(g[pe]=a.title),function g1(n,o,e,i){const a=function c_(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}(n);if(0===a.length)return At({});const g={};return(0,de.D)(a).pipe((0,Ke.z)(h=>function Od(n,o,e,i){const a=pl(o)??i,g=is(n,a);return ao(g.resolve?g.resolve(o,e):a.runInContext(()=>g(o,e)))}(n[h],o,e,i).pipe(Zi(),We(v=>{g[h]=v}))),Vu(1),au(g),Tt(h=>Cl(h)?Se.E:eo(h)))}(g,n,o,i).pipe((0,Kt.U)(h=>(n._resolvedData=h,n.data=cl(n,e).resolve,a&&u1(a)&&(n.data[pe]=a.title),null)))}(h.route,i,n,o)),We(()=>g++),Vu(1),(0,Ke.z)(h=>g===a.length?At(e):Se.E))})}(this.paramsInheritanceStrategy,this.ngModule.injector),We({next:()=>T=!0,complete:()=>{T||(this.restoreHistory(O),this.cancelNavigationTransition(O,"",2))}}))}),We(O=>{const T=new ed(O.id,this.serializeUrl(O.extractedUrl),this.serializeUrl(O.urlAfterRedirects),O.targetSnapshot);this.triggerEvent(T)}))}),Pd(v=>{const O=T=>{const q=[];T.routeConfig?.loadComponent&&!T.routeConfig._loadedComponent&&q.push(this.configLoader.loadComponent(T.routeConfig).pipe(We(G=>{T.component=G}),(0,Kt.U)(()=>{})));for(const G of T.children)q.push(...O(G));return q};return Dg(O(v.targetSnapshot.root)).pipe(Yr(),Re(1))}),Pd(()=>this.afterPreactivation()),(0,Kt.U)(v=>{const O=function Uy(n,o,e){const i=es(n,o._root,e?e._root:void 0);return new Nm(i,o)}(this.routeReuseStrategy,v.targetSnapshot,v.currentRouterState);return a={...v,targetRouterState:O}}),We(v=>{this.currentUrlTree=v.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(v.urlAfterRedirects,v.rawUrl),this.routerState=v.targetRouterState,"deferred"===this.urlUpdateStrategy&&(v.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,v),this.browserUrlTree=v.urlAfterRedirects)}),((n,o,e)=>(0,Kt.U)(i=>(new Gm(o,i.targetRouterState,i.currentRouterState,e).activate(n),i)))(this.rootContexts,this.routeReuseStrategy,v=>this.triggerEvent(v)),We({next(){g=!0},complete(){g=!0}}),Kr(()=>{g||h||this.cancelNavigationTransition(a,"",1),this.currentNavigation?.id===a.id&&(this.currentNavigation=null)}),Tt(v=>{if(h=!0,Vm(v)){jy(v)||(this.navigated=!0,this.restoreHistory(a,!0));const O=new sl(a.id,this.serializeUrl(a.extractedUrl),v.message,v.cancellationCode);if(i.next(O),jy(v)){const T=this.urlHandlingStrategy.merge(v.url,this.rawUrlTree),q={skipLocationChange:a.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||C1(a.source)};this.scheduleNavigation(T,"imperative",null,q,{resolve:a.resolve,reject:a.reject,promise:a.promise})}else a.resolve(!1)}else{this.restoreHistory(a,!0);const O=new Xu(a.id,this.serializeUrl(a.extractedUrl),v,a.targetSnapshot??void 0);i.next(O);try{a.resolve(this.errorHandler(v))}catch(T){a.reject(T)}}return Se.E}))}))}resetRootComponentType(e){this.rootComponentType=e,this.routerState.root.component=this.rootComponentType}setTransition(e){this.transitions.next({...this.transitions.value,...e})}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(e=>{const i="popstate"===e.type?"popstate":"hashchange";"popstate"===i&&setTimeout(()=>{const a={replaceUrl:!0},g=e.state?.navigationId?e.state:null;if(g){const v={...g};delete v.navigationId,delete v.\u0275routerPageId,0!==Object.keys(v).length&&(a.state=v)}const h=this.parseUrl(e.url);this.scheduleNavigation(h,i,g,a)},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(e){this.events.next(e)}resetConfig(e){this.config=e.map(fl),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(e,i={}){const{relativeTo:a,queryParams:g,fragment:h,queryParamsHandling:v,preserveFragment:O}=i,T=a||this.routerState.root,q=O?this.currentUrlTree.fragment:h;let G=null;switch(v){case"merge":G={...this.currentUrlTree.queryParams,...g};break;case"preserve":G=this.currentUrlTree.queryParams;break;default:G=g||null}return null!==G&&(G=this.removeEmptyProps(G)),Dy(T,this.currentUrlTree,e,G,q??null)}navigateByUrl(e,i={skipLocationChange:!1}){const a=uo(e)?e:this.parseUrl(e),g=this.urlHandlingStrategy.merge(a,this.rawUrlTree);return this.scheduleNavigation(g,"imperative",null,i)}navigate(e,i={skipLocationChange:!1}){return function zP(n){for(let o=0;o<n.length;o++){if(null==n[o])throw new t.vHH(4008,false)}}(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){let i;try{i=this.urlSerializer.parse(e)}catch(a){i=this.malformedUriErrorHandler(a,this.urlSerializer,e)}return i}isActive(e,i){let a;if(a=!0===i?{...p_}:!1===i?{...m1}:i,uo(e))return Ma(this.currentUrlTree,e,a);const g=this.parseUrl(e);return Ma(this.currentUrlTree,g,a)}removeEmptyProps(e){return Object.keys(e).reduce((i,a)=>{const g=e[a];return null!=g&&(i[a]=g),i},{})}processNavigations(){this.navigations.subscribe(e=>{this.navigated=!0,this.lastSuccessfulId=e.id,this.currentPageId=e.targetPageId,this.events.next(new Ho(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,this.titleStrategy?.updateTitle(this.routerState.snapshot),e.resolve(!0)},e=>{this.console.warn(`Unhandled Navigation Error: ${e}`)})}scheduleNavigation(e,i,a,g,h){if(this.disposed)return Promise.resolve(!1);let v,O,T;h?(v=h.resolve,O=h.reject,T=h.promise):T=new Promise((vt,wt)=>{v=vt,O=wt});const q=++this.navigationId;let G;return"computed"===this.canceledNavigationResolution?(0===this.currentPageId&&(a=this.location.getState()),G=a&&a.\u0275routerPageId?a.\u0275routerPageId:g.replaceUrl||g.skipLocationChange?this.browserPageId??0:(this.browserPageId??0)+1):G=0,this.setTransition({id:q,targetPageId:G,source:i,restoredState:a,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:e,extras:g,resolve:v,reject:O,promise:T,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),T.catch(vt=>Promise.reject(vt))}setBrowserUrl(e,i){const a=this.urlSerializer.serialize(e),g={...i.extras.state,...this.generateNgRouterState(i.id,i.targetPageId)};this.location.isCurrentPathEqualTo(a)||i.extras.replaceUrl?this.location.replaceState(a,"",g):this.location.go(a,"",g)}restoreHistory(e,i=!1){if("computed"===this.canceledNavigationResolution){const a=this.currentPageId-e.targetPageId;"popstate"!==e.source&&"eager"!==this.urlUpdateStrategy&&this.currentUrlTree!==this.currentNavigation?.finalUrl||0===a?this.currentUrlTree===this.currentNavigation?.finalUrl&&0===a&&(this.resetState(e),this.browserUrlTree=e.currentUrlTree,this.resetUrlToCurrentUrlTree()):this.location.historyGo(a)}else"replace"===this.canceledNavigationResolution&&(i&&this.resetState(e),this.resetUrlToCurrentUrlTree())}resetState(e){this.routerState=e.currentRouterState,this.currentUrlTree=e.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}cancelNavigationTransition(e,i,a){const g=new sl(e.id,this.serializeUrl(e.extractedUrl),i,a);this.triggerEvent(g),e.resolve(!1)}generateNgRouterState(e,i){return"computed"===this.canceledNavigationResolution?{navigationId:e,\u0275routerPageId:i}:{navigationId:e}}}return n.\u0275fac=function(e){t.$Z()},n.\u0275prov=t.Yz7({token:n,factory:function(){return v1()},providedIn:"root"}),n})();function C1(n){return"imperative"!==n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class M1{}let YP=(()=>{class n{constructor(e,i,a,g,h){this.router=e,this.injector=a,this.preloadingStrategy=g,this.loader=h}setUpPreloading(){this.subscription=this.router.events.pipe(Fe(e=>e instanceof Ho),$r(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(e,i){const a=[];for(const g of i){g.providers&&!g._injector&&(g._injector=(0,t.MMx)(g.providers,e,`Route: ${g.path}`));const h=g._injector??e,v=g._loadedInjector??h;g.loadChildren&&!g._loadedRoutes&&void 0===g.canLoad||g.loadComponent&&!g._loadedComponent?a.push(this.preloadConfig(h,g)):(g.children||g._loadedRoutes)&&a.push(this.processRoutes(v,g.children??g._loadedRoutes))}return(0,de.D)(a).pipe((0,js.J)())}preloadConfig(e,i){return this.preloadingStrategy.preload(i,()=>{let a;a=i.loadChildren&&void 0===i.canLoad?this.loader.loadChildren(e,i):At(null);const g=a.pipe((0,Ke.z)(h=>null===h?At(void 0):(i._loadedRoutes=h.routes,i._loadedInjector=h.injector,this.processRoutes(h.injector??e,h.routes))));if(i.loadComponent&&!i._loadedComponent){const h=this.loader.loadComponent(i);return(0,de.D)([g,h]).pipe((0,js.J)())}return g})}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Xe),t.LFG(t.Sil),t.LFG(t.lqb),t.LFG(M1),t.LFG(Dd))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ol=new t.OlP("");let Na=(()=>{class n{constructor(e,i,a={}){this.router=e,this.viewportScroller=i,this.options=a,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},a.scrollPositionRestoration=a.scrollPositionRestoration||"disabled",a.anchorScrolling=a.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(e=>{e instanceof rl?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof Ho&&(this.lastId=e.id,this.scheduleScrollEvent(e,this.router.parseUrl(e.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(e=>{e instanceof od&&(e.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(e.position):e.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(e.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(e,i){this.router.triggerEvent(new od(e,"popstate"===this.lastSource?this.store[this.restoredId]:null,i))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return n.\u0275fac=function(e){t.$Z()},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function mo(n,o){return{\u0275kind:n,\u0275providers:o}}function Pl(n){return[{provide:wd,multi:!0,useValue:n}]}function Ad(){const n=(0,t.f3M)(t.zs3);return o=>{const e=n.get(t.z2F);if(o!==e.components[0])return;const i=n.get(Xe),a=n.get(O1);1===n.get(Td)&&i.initialNavigation(),n.get(v_,null,t.XFs.Optional)?.setUpPreloading(),n.get(Ol,null,t.XFs.Optional)?.init(),i.resetRootComponentType(e.componentTypes[0]),a.next(),a.complete()}}const O1=new t.OlP("",{factory:()=>new Gt.x}),Td=new t.OlP("",{providedIn:"root",factory:()=>1});const v_=new t.OlP("");function KP(n){return mo(0,[{provide:v_,useExisting:YP},{provide:M1,useExisting:n}])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license Angular v14.2.5
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function E(r){for(let s in r)if(r[s]===E)return s;throw Error("Could not find renamed property on target object.")}function R(r,s){for(const c in s)s.hasOwnProperty(c)&&!r.hasOwnProperty(c)&&(r[c]=s[c])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function F(r){if("string"==typeof r)return r;if(Array.isArray(r))return"["+r.map(F).join(", ")+"]";if(null==r)return""+r;if(r.overriddenName)return`${r.overriddenName}`;if(r.name)return`${r.name}`;const s=r.toString();if(null==s)return""+s;const c=s.indexOf("\n");return-1===c?s:s.substring(0,c)}function ct(r,s){return null==r||""===r?null===s?"":s:null==s||""===s?r:r+" "+s}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const z=E({__forward_ref__:E});function X(r){return r.__forward_ref__=X,r.toString=function(){return F(this())},r}function W(r){return lt(r)?r():r}function lt(r){return"function"==typeof r&&r.hasOwnProperty(z)&&r.__forward_ref__===X}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ct extends Error{constructor(s,c){super(function ie(r,s){return`NG0${Math.abs(r)}${s?": "+s.trim():""}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(s,c)),this.code=s}}function gt(r){return"string"==typeof r?r:null==r?"":String(r)}function _t(r,s){throw new Ct(-201,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ot(r,s){null==r&&function Zt(r,s,c,l){throw new Error(`ASSERTION ERROR: ${r}`+(null==l?"":` [Expected=> ${c} ${l} ${s} <=Actual]`))}(s,r,null,"!=")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function gn(r){return{token:r.token,providedIn:r.providedIn||null,factory:r.factory,value:void 0}}function Fl(r){return{providers:r.providers||[],imports:r.imports||[]}}function Ua(r){return Zl(r,un)||Zl(r,rh)}function ev(r){return null!==Ua(r)}function Zl(r,s){return r.hasOwnProperty(s)?r[s]:null}function ov(r){return r&&(r.hasOwnProperty(as)||r.hasOwnProperty(rv))?r[as]:null}const un=E({\u0275prov:E}),as=E({\u0275inj:E}),rh=E({ngInjectableDef:E}),rv=E({ngInjectorDef:E});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var qt=(()=>((qt=qt||{})[qt.Default=0]="Default",qt[qt.Host=1]="Host",qt[qt.Self=2]="Self",qt[qt.SkipSelf=4]="SkipSelf",qt[qt.Optional=8]="Optional",qt))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Rl;function Sn(r){const s=Rl;return Rl=r,s}function Le(r,s,c){const l=Ua(r);return l&&"root"==l.providedIn?void 0===l.value?l.value=l.factory():l.value:c&qt.Optional?null:void 0!==s?s:void _t(F(r))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function jt(r){return{toString:r}.toString()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var Vn=(()=>((Vn=Vn||{})[Vn.OnPush=0]="OnPush",Vn[Vn.Default=1]="Default",Vn))(),In=(()=>{return(r=In||(In={}))[r.Emulated=0]="Emulated",r[r.None=2]="None",r[r.ShadowDom=3]="ShadowDom",In;var r})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const ce=(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)(),$o={},St=[],Va=E({\u0275cmp:E}),Ko=E({\u0275dir:E}),Vl=E({\u0275pipe:E}),ls=E({\u0275mod:E}),Pi=E({\u0275fac:E}),Wo=E({__NG_ELEMENT_ID__:E});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let jl=0;function Xo(r){return jt(()=>{const c=!0===r.standalone,l={},u={type:r.type,providersResolver:null,decls:r.decls,vars:r.vars,factory:null,template:r.template||null,consts:r.consts||null,ngContentSelectors:r.ngContentSelectors,hostBindings:r.hostBindings||null,hostVars:r.hostVars||0,hostAttrs:r.hostAttrs||null,contentQueries:r.contentQueries||null,declaredInputs:l,inputs:null,outputs:null,exportAs:r.exportAs||null,onPush:r.changeDetection===Vn.OnPush,directiveDefs:null,pipeDefs:null,standalone:c,dependencies:c&&r.dependencies||null,getStandaloneInjector:null,selectors:r.selectors||St,viewQuery:r.viewQuery||null,features:r.features||null,data:r.data||{},encapsulation:r.encapsulation||In.Emulated,id:"c"+jl++,styles:r.styles||St,_:null,setInput:null,schemas:r.schemas||null,tView:null},d=r.dependencies,p=r.features;return u.inputs=ah(r.inputs,l),u.outputs=ah(r.outputs),p&&p.forEach(_=>_(u)),u.directiveDefs=d?()=>("function"==typeof d?d():d).map(sh).filter(Hl):null,u.pipeDefs=d?()=>("function"==typeof d?d():d).map(ze).filter(Hl):null,u})}function ja(r,s,c){const l=r.\u0275cmp;l.directiveDefs=()=>("function"==typeof s?s():s).map(sh),l.pipeDefs=()=>("function"==typeof c?c():c).map(ze)}function sh(r){return ge(r)||sn(r)}function Hl(r){return null!==r}function ql(r){return jt(()=>({type:r.type,bootstrap:r.bootstrap||St,declarations:r.declarations||St,imports:r.imports||St,exports:r.exports||St,transitiveCompileScopes:null,schemas:r.schemas||null,id:r.id||null}))}function ah(r,s){if(null==r)return $o;const c={};for(const l in r)if(r.hasOwnProperty(l)){let u=r[l],d=u;Array.isArray(u)&&(d=u[1],u=u[0]),c[u]=l,s&&(s[u]=d)}return c}const ch=Xo;function Jl(r){return{type:r.type,name:r.name,factory:null,pure:!1!==r.pure,standalone:!0===r.standalone,onDestroy:r.type.prototype.ngOnDestroy||null}}function ge(r){return r[Va]||null}function sn(r){return r[Ko]||null}function ze(r){return r[Vl]||null}function si(r){const s=ge(r)||sn(r)||ze(r);return null!==s&&s.standalone}function Pn(r,s){const c=r[ls]||null;if(!c&&!0===s)throw new Error(`Type ${F(r)} does not have '\u0275mod' property.`);return c}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Je(r){return Array.isArray(r)&&"object"==typeof r[1]}function ai(r){return Array.isArray(r)&&!0===r[1]}function Ja(r){return 0!=(8&r.flags)}function Ba(r){return 2==(2&r.flags)}function za(r){return 1==(1&r.flags)}function Hn(r){return null!==r.template}function hb(r){return 0!=(256&r[2])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function wi(r,s){return r.hasOwnProperty(Pi)?r[Pi]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class zl{constructor(s,c,l){this.previousValue=s,this.currentValue=c,this.firstChange=l}isFirstChange(){return this.firstChange}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ga(){return lv}function lv(r){return r.type.prototype.ngOnChanges&&(r.setInput=uh),gv}function gv(){const r=hh(this),s=r?.current;if(s){const c=r.previous;if(c===$o)r.previous=s;else for(let l in s)c[l]=s[l];r.current=null,this.ngOnChanges(s)}}function uh(r,s,c,l){const u=hh(r)||function uv(r,s){return r[dh]=s}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(r,{previous:$o,current:null}),d=u.current||(u.current={}),p=u.previous,_=this.declaredInputs[c],M=p[_];d[_]=new zl(M&&M.currentValue,s,p===$o),r[l]=s}Ga.ngInherit=!0;const dh="__ngSimpleChanges__";function hh(r){return r[dh]||null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ne(r){for(;Array.isArray(r);)r=r[0];return r}function Gl(r,s){return Ne(s[r])}function ue(r,s){return Ne(s[r.index])}function ms(r,s){return r.data[s]}function _s(r,s){return r[s]}function xn(r,s){const c=s[r];return Je(c)?c:c[0]}function Ya(r){return 64==(64&r[2])}function xo(r,s){return null==s?null:r[s]}function pv(r){r[18]=0}function Yl(r,s){r[5]+=s;let c=r,l=r[3];for(;null!==l&&(1===s&&1===c[5]||-1===s&&0===c[5]);)l[5]+=s,c=l,l=l[3]
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const Qt={lFrame:ir(null),bindingsEnabled:!0};function mh(){return Qt.bindingsEnabled}function dt(){return Qt.lFrame.lView}function ne(){return Qt.lFrame.tView}function Cv(r){return Qt.lFrame.contextLView=r,r[8]}function _h(r){return Qt.lFrame.contextLView=null,r}function Ge(){let r=Mv();for(;null!==r&&64===r.type;)r=r.parent;return r}function Mv(){return Qt.lFrame.currentTNode}function li(r,s){const c=Qt.lFrame;c.currentTNode=r,c.isParent=s}function Kl(){return Qt.lFrame.isParent}function vs(){Qt.lFrame.isParent=!1}function bn(){const r=Qt.lFrame;let s=r.bindingRootIndex;return-1===s&&(s=r.bindingRootIndex=r.tView.bindingStartIndex),s}function qi(){return Qt.lFrame.bindingIndex}function Cs(){return Qt.lFrame.bindingIndex++}function Ji(r){const s=Qt.lFrame,c=s.bindingIndex;return s.bindingIndex=s.bindingIndex+r,c}function Vb(r,s){const c=Qt.lFrame;c.bindingIndex=c.bindingRootIndex=r,Wl(s)}function Wl(r){Qt.lFrame.currentDirectiveIndex=r}function xv(){return Qt.lFrame.currentQueryIndex}function yh(r){Qt.lFrame.currentQueryIndex=r}function jb(r){const s=r[1];return 2===s.type?s.declTNode:1===s.type?r[6]:null}function wv(r,s,c){if(c&qt.SkipSelf){let u=s,d=r;for(;!(u=u.parent,null!==u||c&qt.Host||(u=jb(d),null===u||(d=d[15],10&u.type))););if(null===u)return!1;s=u,r=d}const l=Qt.lFrame=Ka();return l.currentTNode=s,l.lView=r,!0}function Xl(r){const s=Ka(),c=r[1];Qt.lFrame=s,s.currentTNode=c.firstChild,s.lView=r,s.tView=c,s.contextLView=r,s.bindingIndex=c.bindingStartIndex,s.inI18n=!1}function Ka(){const r=Qt.lFrame,s=null===r?null:r.child;return null===s?ir(r):s}function ir(r){const s={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:r,child:null,inI18n:!1};return null!==r&&(r.child=s),s}function bh(){const r=Qt.lFrame;return Qt.lFrame=r.parent,r.currentTNode=null,r.lView=null,r}const Ms=bh;function tg(){const r=bh();r.isParent=!0,r.tView=null,r.selectedIndex=-1,r.contextLView=null,r.elementDepthCount=0,r.currentDirectiveIndex=-1,r.currentNamespace=null,r.bindingRootIndex=-1,r.bindingIndex=-1,r.currentQueryIndex=0}function fn(){return Qt.lFrame.selectedIndex}function Bi(r){Qt.lFrame.selectedIndex=r}function xe(){const r=Qt.lFrame;return ms(r.tView,r.selectedIndex)}function or(r,s){for(let c=s.directiveStart,l=s.directiveEnd;c<l;c++){const d=r.data[c].type.prototype,{ngAfterContentInit:p,ngAfterContentChecked:_,ngAfterViewInit:M,ngAfterViewChecked:b,ngOnDestroy:x}=d;p&&(r.contentHooks||(r.contentHooks=[])).push(-c,p),_&&((r.contentHooks||(r.contentHooks=[])).push(c,_),(r.contentCheckHooks||(r.contentCheckHooks=[])).push(c,_)),M&&(r.viewHooks||(r.viewHooks=[])).push(-c,M),b&&((r.viewHooks||(r.viewHooks=[])).push(c,b),(r.viewCheckHooks||(r.viewCheckHooks=[])).push(c,b)),null!=x&&(r.destroyHooks||(r.destroyHooks=[])).push(c,x)}}function rr(r,s,c){Dh(r,s,3,c)}function bs(r,s,c,l){(3&r[2])===c&&Dh(r,s,c,l)}function tc(r,s){let c=r[2];(3&c)===s&&(c&=2047,c+=1,r[2]=c)}function Dh(r,s,c,l){const d=l??-1,p=s.length-1;let _=0;for(let M=void 0!==l?65535&r[18]:0;M<p;M++)if("number"==typeof s[M+1]){if(_=s[M],null!=l&&_>=l)break}else s[M]<0&&(r[18]+=65536),(_<d||-1==d)&&(kv(r,c,s,M),r[18]=(4294901760&r[18])+M+2),M++}function kv(r,s,c,l){const u=c[l]<0,d=c[l+1],_=r[u?-c[l]:c[l]];if(u){if(r[2]>>11<r[18]>>16&&(3&r[2])===s){r[2]+=2048;try{d.call(_)}finally{}}}else try{d.call(_)}finally{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Os{constructor(s,c,l){this.factory=s,this.resolving=!1,this.canSeeViewProviders=c,this.injectImpl=l}}function ic(r,s,c){let l=0;for(;l<c.length;){const u=c[l];if("number"==typeof u){if(0!==u)break;l++;const d=c[l++],p=c[l++],_=c[l++];r.setAttribute(s,p,_,d)}else{const d=u,p=c[++l];Th(d)?r.setProperty(s,d,p):r.setAttribute(s,d,p),l++}}return l}function Ah(r){return 3===r||4===r||6===r}function Th(r){return 64===r.charCodeAt(0)}function xs(r,s){if(null!==s&&0!==s.length)if(null===r||0===r.length)r=s.slice();else{let c=-1;for(let l=0;l<s.length;l++){const u=s[l];"number"==typeof u?c=u:0===c||Eh(r,c,u,null,-1===c||2===c?s[++l]:null)}}return r}function Eh(r,s,c,l,u){let d=0,p=r.length;if(-1===s)p=-1;else for(;d<r.length;){const _=r[d++];if("number"==typeof _){if(_===s){p=-1;break}if(_>s){p=d-1;break}}}for(;d<r.length;){const _=r[d];if("number"==typeof _)break;if(_===c){if(null===l)return void(null!==u&&(r[d+1]=u));if(l===r[d+1])return void(r[d+2]=u)}d++,null!==l&&d++,null!==u&&d++}-1!==p&&(r.splice(p,0,s),d=p+1),r.splice(d++,0,c),null!==l&&r.splice(d++,0,l),null!==u&&r.splice(d++,0,u)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Sh(r){return-1!==r}function sr(r){return 32767&r}function ws(r,s){let c=function ng(r){return r>>16}(r),l=s;for(;c>0;)l=l[15],c--;return l}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ih=!0;function Ds(r){const s=Ih;return Ih=r,s}let Sv=0;const Jn={};function ar(r,s){const c=rc(r,s);if(-1!==c)return c;const l=s[1];l.firstCreatePass&&(r.injectorIndex=s.length,oc(l.data,r),oc(s,null),oc(l.blueprint,null));const u=sc(r,s),d=r.injectorIndex;if(Sh(u)){const p=sr(u),_=ws(u,s),M=_[1].data;for(let b=0;b<8;b++)s[d+b]=_[p+b]|M[p+b]}return s[d+8]=u,d}function oc(r,s){r.push(0,0,0,0,0,0,0,0,s)}function rc(r,s){return-1===r.injectorIndex||r.parent&&r.parent.injectorIndex===r.injectorIndex||null===s[r.injectorIndex+8]?-1:r.injectorIndex}function sc(r,s){if(r.parent&&-1!==r.parent.injectorIndex)return r.parent.injectorIndex;let c=0,l=null,u=s;for(;null!==u;){if(l=Zv(u),null===l)return-1;if(c++,u=u[15],-1!==l.injectorIndex)return l.injectorIndex|c<<16}return-1}function ig(r,s,c){!function Iv(r,s,c){let l;"string"==typeof c?l=c.charCodeAt(0)||0:c.hasOwnProperty(Wo)&&(l=c[Wo]),null==l&&(l=c[Wo]=Sv++);const u=255&l;s.data[r+(u>>5)]|=1<<u}(r,s,c)}function Nv(r,s,c){if(c&qt.Optional||void 0!==r)return r;_t()}function Fh(r,s,c,l){if(c&qt.Optional&&void 0===l&&(l=null),0==(c&(qt.Self|qt.Host))){const u=r[9],d=Sn(void 0);try{return u?u.get(s,l,c&qt.Optional):Le(s,l,c&qt.Optional)}finally{Sn(d)}}return Nv(l,0,c)}function og(r,s,c,l=qt.Default,u){if(null!==r){if(1024&s[2]){const p=function Hb(r,s,c,l,u){let d=r,p=s;for(;null!==d&&null!==p&&1024&p[2]&&!(256&p[2]);){const _=Zh(d,p,c,l|qt.Self,Jn);if(_!==Jn)return _;let M=d.parent;if(!M){const b=p[21];if(b){const x=b.get(c,Jn,l);if(x!==Jn)return x}M=Zv(p),p=p[15]}d=M}return u}(r,s,c,l,Jn);if(p!==Jn)return p}const d=Zh(r,s,c,l,Jn);if(d!==Jn)return d}return Fh(s,c,l,u)}function Zh(r,s,c,l,u){const d=function Rh(r){if("string"==typeof r)return r.charCodeAt(0)||0;const s=r.hasOwnProperty(Wo)?r[Wo]:void 0;return"number"==typeof s?s>=0?255&s:sg:s}(c);if("function"==typeof d){if(!wv(s,r,l))return l&qt.Host?Nv(u,0,l):Fh(s,c,l,u);try{const p=d(l);if(null!=p||l&qt.Optional)return p;_t()}finally{Ms()}}else if("number"==typeof d){let p=null,_=rc(r,s),M=-1,b=l&qt.Host?s[16][6]:null;for((-1===_||l&qt.SkipSelf)&&(M=-1===_?sc(r,s):s[_+8],-1!==M&&Uh(l,!1)?(p=s[1],_=sr(M),s=ws(M,s)):_=-1);-1!==_;){const x=s[1];if(Di(d,_,x.data)){const k=Fv(_,s,c,p,l,b);if(k!==Jn)return k}M=s[_+8],-1!==M&&Uh(l,s[1].data[_+8]===b)&&Di(d,_,s)?(p=x,_=sr(M),s=ws(M,s)):_=-1}}return u}function Fv(r,s,c,l,u,d){const p=s[1],_=p.data[r+8],x=rg(_,p,c,null==l?Ba(_)&&Ih:l!=p&&0!=(3&_.type),u&qt.Host&&d===_);return null!==x?ac(s,p,x,_):Jn}function rg(r,s,c,l,u){const d=r.providerIndexes,p=s.data,_=1048575&d,M=r.directiveStart,x=d>>20,N=u?_+x:r.directiveEnd;for(let Q=l?_:_+x;Q<N;Q++){const nt=p[Q];if(Q<M&&c===nt||Q>=M&&nt.type===c)return Q}if(u){const Q=p[M];if(Q&&Hn(Q)&&Q.type===c)return M}return null}function ac(r,s,c,l){let u=r[c];const d=s.data;if(function ec(r){return r instanceof Os}(u)){const p=u;p.resolving&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Lt(r,s){const c=s?`. Dependency path: ${s.join(" > ")} > ${r}`:"";throw new Ct(-200,`Circular dependency in DI detected for ${r}${c}`)}(function at(r){return"function"==typeof r?r.name||r.toString():"object"==typeof r&&null!=r&&"function"==typeof r.type?r.type.name||r.type.toString():gt(r)}(d[c]));const _=Ds(p.canSeeViewProviders);p.resolving=!0;const M=p.injectImpl?Sn(p.injectImpl):null;wv(r,l,qt.Default);try{u=r[c]=p.factory(void 0,d,r,l),s.firstCreatePass&&c>=l.directiveStart&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function wh(r,s,c){const{ngOnChanges:l,ngOnInit:u,ngDoCheck:d}=s.type.prototype;if(l){const p=lv(s);(c.preOrderHooks||(c.preOrderHooks=[])).push(r,p),(c.preOrderCheckHooks||(c.preOrderCheckHooks=[])).push(r,p)}u&&(c.preOrderHooks||(c.preOrderHooks=[])).push(0-r,u),d&&((c.preOrderHooks||(c.preOrderHooks=[])).push(r,d),(c.preOrderCheckHooks||(c.preOrderCheckHooks=[])).push(r,d))}(c,d[c],s)}finally{null!==M&&Sn(M),Ds(_),p.resolving=!1,Ms()}}return u}function Di(r,s,c){return!!(c[s+(r>>5)]&1<<r)}function Uh(r,s){return!(r&qt.Self||r&qt.Host&&s)}class cr{constructor(s,c){this._tNode=s,this._lView=c}get(s,c,l){return og(this._tNode,this._lView,s,l,c)}}function sg(){return new cr(Ge(),dt())}function ag(r){return jt(()=>{const s=r.prototype.constructor,c=s[Pi]||Vh(s),l=Object.prototype;let u=Object.getPrototypeOf(r.prototype).constructor;for(;u&&u!==l;){const d=u[Pi]||Vh(u);if(d&&d!==c)return d;u=Object.getPrototypeOf(u)}return d=>new d})}function Vh(r){return lt(r)?()=>{const s=Vh(W(r));return s&&s()}:wi(r)}function Zv(r){const s=r[1],c=s.type;return 2===c?s.declTNode:1===c?r[6]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function cg(r){return function Lv(r,s){if("class"===s)return r.classes;if("style"===s)return r.styles;const c=r.attrs;if(c){const l=c.length;let u=0;for(;u<l;){const d=c[u];if(Ah(d))break;if(0===d)u+=2;else if("number"==typeof d)for(u++;u<l&&"string"==typeof c[u];)u++;else{if(d===s)return c[u+1];u+=2}}}return null}(Ge(),r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const As="__parameters__";function lr(r,s,c){return jt(()=>{const l=function jh(r){return function(...c){if(r){const l=r(...c);for(const u in l)this[u]=l[u]}}}(s);function u(...d){if(this instanceof u)return l.apply(this,d),this;const p=new u(...d);return _.annotation=p,_;function _(M,b,x){const k=M.hasOwnProperty(As)?M[As]:Object.defineProperty(M,As,{value:[]})[As];for(;k.length<=x;)k.push(null);return(k[x]=k[x]||[]).push(p),M}}return c&&(u.prototype=Object.create(c.prototype)),u.prototype.ngMetadataName=r,u.annotationCls=u,u})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class fe{constructor(s,c){this._desc=s,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof c?this.__NG_ELEMENT_ID__=c:void 0!==c&&(this.\u0275prov=gn({token:this,providedIn:c.providedIn||"root",factory:c.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ye(r,s){void 0===s&&(s=r);for(let c=0;c<r.length;c++){let l=r[c];Array.isArray(l)?(s===r&&(s=r.slice(0,c)),Ye(l,s)):s!==r&&s.push(l)}return s}function de(r,s){r.forEach(c=>Array.isArray(c)?de(c,s):s(c))}function At(r,s,c){s>=r.length?r.push(c):r.splice(s,0,c)}function $e(r,s){return s>=r.length-1?r.pop():r.splice(s,1)[0]}function pn(r,s,c){let l=gr(r,s);return l>=0?r[1|l]=c:(l=~l,function Fn(r,s,c,l){let u=r.length;if(u==s)r.push(c,l);else if(1===u)r.push(l,r[0]),r[0]=c;else{for(u--,r.push(r[u-1],r[u]);u>s;)r[u]=r[u-2],u--;r[s]=c,r[s+1]=l}}(r,l,s,c)),l}function lg(r,s){const c=gr(r,s);if(c>=0)return r[1|c]}function gr(r,s){return function wo(r,s,c){let l=0,u=r.length>>c;for(;u!==l;){const d=l+(u-l>>1),p=r[d<<c];if(s===p)return d<<c;p>s?u=d:l=d+1}return~(u<<c)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(r,s,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const ki={},gg="__NG_DI_FLAG__",Es="ngTempTokenPath",ug=/\n/gm,dg="__source";let lc;function dr(r){const s=lc;return lc=r,s}function hg(r,s=qt.Default){if(void 0===lc)throw new Ct(-203,!1);return null===lc?Le(r,void 0,s):lc.get(r,s&qt.Optional?null:void 0,s)}function Pe(r,s=qt.Default){return(function cs(){return Rl}()||hg)(W(r),s)}function Bh(r,s=qt.Default){return"number"!=typeof s&&(s=0|(s.optional&&8)|(s.host&&1)|(s.self&&2)|(s.skipSelf&&4)),Pe(r,s)}function zh(r){const s=[];for(let c=0;c<r.length;c++){const l=W(r[c]);if(Array.isArray(l)){if(0===l.length)throw new Ct(900,!1);let u,d=qt.Default;for(let p=0;p<l.length;p++){const _=l[p],M=Gv(_);"number"==typeof M?-1===M?u=_.token:d|=M:u=_}s.push(Pe(u,d))}else s.push(Pe(l))}return s}function Is(r,s){return r[gg]=s,r.prototype[gg]=s,r}function Gv(r){return r[gg]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ls=Is(lr("Optional"),8),Ai=Is(lr("SkipSelf"),4);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Zs,pr,pc;function Xv(r){Zs=r}function Ao(r){return function wn(){if(void 0===pr&&(pr=null,ce.trustedTypes))try{pr=ce.trustedTypes.createPolicy("angular",{createHTML:r=>r,createScript:r=>r,createScriptURL:r=>r})}catch{}return pr}()?.createHTML(r)||r}function nC(r){return function Gi(){if(void 0===pc&&(pc=null,ce.trustedTypes))try{pc=ce.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:r=>r,createScript:r=>r,createScriptURL:r=>r})}catch{}return pc}()?.createHTML(r)||r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class mr{constructor(s){this.changingThisBreaksApplicationSecurity=s}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}class $b extends mr{getTypeName(){return"HTML"}}class Kb extends mr{getTypeName(){return"Style"}}class Wb extends mr{getTypeName(){return"Script"}}class Xb extends mr{getTypeName(){return"URL"}}class oC extends mr{getTypeName(){return"ResourceURL"}}function Qn(r){return r instanceof mr?r.changingThisBreaksApplicationSecurity:r}function _r(r,s){const c=function rC(r){return r instanceof mr&&r.getTypeName()||null}(r);if(null!=c&&c!==s){if("ResourceURL"===c&&"URL"===s)return!0;throw new Error(`Required a safe ${s}, got a ${c} (see https://g.co/ng/security#xss)`)}return c===s}function Cg(r){return new $b(r)}function tO(r){return new Kb(r)}function eO(r){return new Wb(r)}function nO(r){return new Xb(r)}function iO(r){return new oC(r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class oO{constructor(s){this.inertDocumentHelper=s}getInertBodyElement(s){s="<body><remove></remove>"+s;try{const c=(new window.DOMParser).parseFromString(Ao(s),"text/html").body;return null===c?this.inertDocumentHelper.getInertBodyElement(s):(c.removeChild(c.firstChild),c)}catch{return null}}}class rO{constructor(s){if(this.defaultDoc=s,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"),null==this.inertDocument.body){const c=this.inertDocument.createElement("html");this.inertDocument.appendChild(c);const l=this.inertDocument.createElement("body");c.appendChild(l)}}getInertBodyElement(s){const c=this.inertDocument.createElement("template");if("content"in c)return c.innerHTML=Ao(s),c;const l=this.inertDocument.createElement("body");return l.innerHTML=Ao(s),this.defaultDoc.documentMode&&this.stripCustomNsAttrs(l),l}stripCustomNsAttrs(s){const c=s.attributes;for(let u=c.length-1;0<u;u--){const p=c.item(u).name;("xmlns:ns1"===p||0===p.indexOf("ns1:"))&&s.removeAttribute(p)}let l=s.firstChild;for(;l;)l.nodeType===Node.ELEMENT_NODE&&this.stripCustomNsAttrs(l),l=l.nextSibling}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const aO=/^(?:(?:https?|mailto|data|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi;function vr(r){return(r=String(r)).match(aO)?r:"unsafe:"+r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ui(r){const s={};for(const c of r.split(","))s[c]=!0;return s}function an(...r){const s={};for(const c of r)for(const l in c)c.hasOwnProperty(l)&&(s[l]=!0);return s}const aC=ui("area,br,col,hr,img,wbr"),cC=ui("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),lC=ui("rp,rt"),Mg=an(aC,an(cC,ui("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),an(lC,ui("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),an(lC,cC)),yg=ui("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),$h=an(yg,ui("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),ui("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")),lO=ui("script,style,template");class gO{constructor(){this.sanitizedSomething=!1,this.buf=[]}sanitizeChildren(s){let c=s.firstChild,l=!0;for(;c;)if(c.nodeType===Node.ELEMENT_NODE?l=this.startElement(c):c.nodeType===Node.TEXT_NODE?this.chars(c.nodeValue):this.sanitizedSomething=!0,l&&c.firstChild)c=c.firstChild;else for(;c;){c.nodeType===Node.ELEMENT_NODE&&this.endElement(c);let u=this.checkClobberedElement(c,c.nextSibling);if(u){c=u;break}c=this.checkClobberedElement(c,c.parentNode)}return this.buf.join("")}startElement(s){const c=s.nodeName.toLowerCase();if(!Mg.hasOwnProperty(c))return this.sanitizedSomething=!0,!lO.hasOwnProperty(c);this.buf.push("<"),this.buf.push(c);const l=s.attributes;for(let u=0;u<l.length;u++){const d=l.item(u),p=d.name,_=p.toLowerCase();if(!$h.hasOwnProperty(_)){this.sanitizedSomething=!0;continue}let M=d.value;yg[_]&&(M=vr(M)),this.buf.push(" ",p,'="',gC(M),'"')}return this.buf.push(">"),!0}endElement(s){const c=s.nodeName.toLowerCase();Mg.hasOwnProperty(c)&&!aC.hasOwnProperty(c)&&(this.buf.push("</"),this.buf.push(c),this.buf.push(">"))}chars(s){this.buf.push(gC(s))}checkClobberedElement(s,c){if(c&&(s.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY)===Node.DOCUMENT_POSITION_CONTAINED_BY)throw new Error(`Failed to sanitize html because the element is clobbered: ${s.outerHTML}`);return c}}const uO=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,dO=/([^\#-~ |!])/g;function gC(r){return r.replace(/&/g,"&amp;").replace(uO,function(s){return"&#"+(1024*(s.charCodeAt(0)-55296)+(s.charCodeAt(1)-56320)+65536)+";"}).replace(dO,function(s){return"&#"+s.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}let bg;function uC(r,s){let c=null;try{bg=bg||function sC(r){const s=new rO(r);return function sO(){try{return!!(new window.DOMParser).parseFromString(Ao(""),"text/html")}catch{return!1}}()?new oO(s):s}(r);let l=s?String(s):"";c=bg.getInertBodyElement(l);let u=5,d=l;do{if(0===u)throw new Error("Failed to sanitize html because the input is unstable");u--,l=d,d=c.innerHTML,c=bg.getInertBodyElement(l)}while(l!==d);return Ao((new gO).sanitizeChildren(Kh(c)||c))}finally{if(c){const l=Kh(c)||c;for(;l.firstChild;)l.removeChild(l.firstChild)}}}function Kh(r){return"content"in r&&function hO(r){return r.nodeType===Node.ELEMENT_NODE&&"TEMPLATE"===r.nodeName}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(r)?r.content:null}var Ze=(()=>((Ze=Ze||{})[Ze.NONE=0]="NONE",Ze[Ze.HTML=1]="HTML",Ze[Ze.STYLE=2]="STYLE",Ze[Ze.SCRIPT=3]="SCRIPT",Ze[Ze.URL=4]="URL",Ze[Ze.RESOURCE_URL=5]="RESOURCE_URL",Ze))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function dC(r){const s=_c();return s?nC(s.sanitize(Ze.HTML,r)||""):_r(r,"HTML")?nC(Qn(r)):uC(function fc(){return void 0!==Zs?Zs:typeof document<"u"?document:void 0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(),gt(r))}function Wh(r){const s=_c();return s?s.sanitize(Ze.URL,r)||"":_r(r,"URL")?Qn(r):vr(gt(r))}function _c(){const r=dt();return r&&r[12]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Xh=new fe("ENVIRONMENT_INITIALIZER"),fC=new fe("INJECTOR",-1),pC=new fe("INJECTOR_DEF_TYPES");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class mC{get(s,c=ki){if(c===ki){const l=new Error(`NullInjectorError: No provider for ${F(s)}!`);throw l.name="NullInjectorError",l}return c}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function MO(...r){return{\u0275providers:_C(0,r)}}function _C(r,...s){const c=[],l=new Set;let u;return de(s,d=>{const p=d;tf(p,c,[],l)&&(u||(u=[]),u.push(p))}),void 0!==u&&vC(u,c),c}function vC(r,s){for(let c=0;c<r.length;c++){const{providers:u}=r[c];de(u,d=>{s.push(d)})}}function tf(r,s,c,l){if(!(r=W(r)))return!1;let u=null,d=ov(r);const p=!d&&ge(r);if(d||p){if(p&&!p.standalone)return!1;u=r}else{const M=r.ngModule;if(d=ov(M),!d)return!1;u=M}const _=l.has(u);if(p){if(_)return!1;if(l.add(u),p.dependencies){const M="function"==typeof p.dependencies?p.dependencies():p.dependencies;for(const b of M)tf(b,s,c,l)}}else{if(!d)return!1;{if(null!=d.imports&&!_){let b;l.add(u);try{de(d.imports,x=>{tf(x,s,c,l)&&(b||(b=[]),b.push(x))})}finally{}void 0!==b&&vC(b,s)}if(!_){const b=wi(u)||(()=>new u);s.push({provide:u,useFactory:b,deps:St},{provide:pC,useValue:u,multi:!0},{provide:Xh,useValue:()=>Pe(u),multi:!0})}const M=d.providers;null==M||_||de(M,x=>{s.push(x)})}}return u!==r&&void 0!==r.providers}const yO=E({provide:String,useValue:E});function ef(r){return null!==r&&"object"==typeof r&&yO in r}function Cr(r){return"function"==typeof r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const nf=new fe("Set Injector scope."),Og={},OO={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let rf;function Pg(){return void 0===rf&&(rf=new mC),rf}class Mr{}class yC extends Mr{constructor(s,c,l,u){super(),this.parent=c,this.source=l,this.scopes=u,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,xg(s,p=>this.processProvider(p)),this.records.set(fC,Rs(void 0,this)),u.has("environment")&&this.records.set(Mr,Rs(void 0,this));const d=this.records.get(nf);null!=d&&"string"==typeof d.value&&this.scopes.add(d.value),this.injectorDefTypes=new Set(this.get(pC.multi,St,qt.Self))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(const s of this._ngOnDestroyHooks)s.ngOnDestroy();for(const s of this._onDestroyHooks)s()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),this._onDestroyHooks.length=0}}onDestroy(s){this._onDestroyHooks.push(s)}runInContext(s){this.assertNotDestroyed();const c=dr(this),l=Sn(void 0);try{return s()}finally{dr(c),Sn(l)}}get(s,c=ki,l=qt.Default){this.assertNotDestroyed();const u=dr(this),d=Sn(void 0);try{if(!(l&qt.SkipSelf)){let _=this.records.get(s);if(void 0===_){const M=function kO(r){return"function"==typeof r||"object"==typeof r&&r instanceof fe}(s)&&Ua(s);_=M&&this.injectableDefInScope(M)?Rs(sf(s),Og):null,this.records.set(s,_)}if(null!=_)return this.hydrate(s,_)}return(l&qt.Self?Pg():this.parent).get(s,c=l&qt.Optional&&c===ki?null:c)}catch(p){if("NullInjectorError"===p.name){if((p[Es]=p[Es]||[]).unshift(F(s)),u)throw p;return function gc(r,s,c,l){const u=r[Es];throw s[dg]&&u.unshift(s[dg]),r.message=function Yv(r,s,c,l=null){r=r&&"\n"===r.charAt(0)&&"\u0275"==r.charAt(1)?r.slice(2):r;let u=F(s);if(Array.isArray(s))u=s.map(F).join(" -> ");else if("object"==typeof s){let d=[];for(let p in s)if(s.hasOwnProperty(p)){let _=s[p];d.push(p+":"+("string"==typeof _?JSON.stringify(_):F(_)))}u=`{${d.join(", ")}}`}return`${c}${l?"("+l+")":""}[${u}]: ${r.replace(ug,"\n  ")}`}("\n"+r.message,u,c,l),r.ngTokenPath=u,r[Es]=null,r}(p,s,"R3InjectorError",this.source)}throw p}finally{Sn(d),dr(u)}}resolveInjectorInitializers(){const s=dr(this),c=Sn(void 0);try{const l=this.get(Xh.multi,St,qt.Self);for(const u of l)u()}finally{dr(s),Sn(c)}}toString(){const s=[],c=this.records;for(const l of c.keys())s.push(F(l));return`R3Injector[${s.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Ct(205,!1)}processProvider(s){let c=Cr(s=W(s))?s:W(s&&s.provide);const l=function xO(r){return ef(r)?Rs(void 0,r.useValue):Rs(bC(r),Og)}(s);if(Cr(s)||!0!==s.multi)this.records.get(c);else{let u=this.records.get(c);u||(u=Rs(void 0,Og,!0),u.factory=()=>zh(u.multi),this.records.set(c,u)),c=s,u.multi.push(s)}this.records.set(c,l)}hydrate(s,c){return c.value===Og&&(c.value=OO,c.value=c.factory()),"object"==typeof c.value&&c.value&&function DO(r){return null!==r&&"object"==typeof r&&"function"==typeof r.ngOnDestroy}(c.value)&&this._ngOnDestroyHooks.add(c.value),c.value}injectableDefInScope(s){if(!s.providedIn)return!1;const c=W(s.providedIn);return"string"==typeof c?"any"===c||this.scopes.has(c):this.injectorDefTypes.has(c)}}function sf(r){const s=Ua(r),c=null!==s?s.factory:wi(r);if(null!==c)return c;if(r instanceof fe)throw new Ct(204,!1);if(r instanceof Function)return function PO(r){const s=r.length;if(s>0)throw function Nn(r,s){const c=[];for(let l=0;l<r;l++)c.push(s);return c}(s,"?"),new Ct(204,!1);const c=function nv(r){const s=r&&(r[un]||r[rh]);if(s){const c=function iv(r){if(r.hasOwnProperty("name"))return r.name;const s=(""+r).match(/^function\s*([^\s(]+)/);return null===s?"":s[1]}(r);return console.warn(`DEPRECATED: DI is instantiating a token "${c}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${c}" class.`),s}return null}(r);return null!==c?()=>c.factory(r):()=>new r}(r);throw new Ct(204,!1)}function bC(r,s,c){let l;if(Cr(r)){const u=W(r);return wi(u)||sf(u)}if(ef(r))l=()=>W(r.useValue);else if(function MC(r){return!(!r||!r.useFactory)}(r))l=()=>r.useFactory(...zh(r.deps||[]));else if(function CC(r){return!(!r||!r.useExisting)}(r))l=()=>Pe(W(r.useExisting));else{const u=W(r&&(r.useClass||r.provide));if(!function wO(r){return!!r.deps}(r))return wi(u)||sf(u);l=()=>new u(...zh(r.deps))}return l}function Rs(r,s,c=!1){return{factory:r,value:s,multi:c?[]:void 0}}function AO(r){return!!r.\u0275providers}function xg(r,s){for(const c of r)Array.isArray(c)?xg(c,s):AO(c)?xg(c.\u0275providers,s):s(c)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class OC{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class SO{resolveComponentFactory(s){throw function EO(r){const s=Error(`No component factory found for ${F(r)}. Did you add it to @NgModule.entryComponents?`);return s.ngComponent=r,s}(s)}}let vc=(()=>{class r{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return r.NULL=new SO,r})();function IO(){return Us(Ge(),dt())}function Us(r,s){return new Cc(ue(r,s))}let Cc=(()=>{class r{constructor(c){this.nativeElement=c}}return r.__NG_ELEMENT_ID__=IO,r})();function LO(r){return r instanceof Cc?r.nativeElement:r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class xC{}let NO=(()=>{class r{}return r.__NG_ELEMENT_ID__=()=>function FO(){const r=dt(),c=xn(Ge().index,r);return(Je(c)?c:r)[11]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(),r})(),ZO=(()=>{class r{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return r.\u0275prov=gn({token:r,providedIn:"root",factory:()=>null}),r})();class wC{constructor(s){this.full=s,this.major=s.split(".")[0],this.minor=s.split(".")[1],this.patch=s.split(".").slice(2).join(".")}}const RO=new wC("14.2.5"),af={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function df(r){return r.ngOriginalError}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Mc{constructor(){this._console=console}handleError(s){const c=this._findOriginalError(s);this._console.error("ERROR",s),c&&this._console.error("ORIGINAL ERROR",c)}_findOriginalError(s){let c=s&&df(s);for(;c&&df(c);)c=df(c);return c||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const hf=new Map;let $O=0;const Yi="__ngContext__";function cn(r,s){Je(s)?(r[Yi]=s[20],function WO(r){hf.set(r[20],r)}(s)):r[Yi]=s}function di(r){return r instanceof Function?r():r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var Gn=(()=>((Gn=Gn||{})[Gn.Important=1]="Important",Gn[Gn.DashCase=2]="DashCase",Gn))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function kg(r,s){return undefined(r,s)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function br(r){const s=r[3];return ai(s)?s[3]:s}function bf(r){return Ag(r[13])}function Of(r){return Ag(r[4])}function Ag(r){for(;null!==r&&!ai(r);)r=r[4];return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Or(r,s,c,l,u){if(null!=l){let d,p=!1;ai(l)?d=l:Je(l)&&(p=!0,l=l[0]);const _=Ne(l);0===r&&null!==c?null==u?Ef(s,c,_):Ki(s,c,_,u||null,!0):1===r&&null!==c?Ki(s,c,_,u||null,!0):2===r?function Lg(r,s,c){const l=yc(r,s);l&&function JC(r,s,c,l){r.removeChild(s,c,l)}(r,l,s,c)}(s,_,p):3===r&&s.destroyNode(_),null!=d&&function dP(r,s,c,l,u){const d=c[7];d!==Ne(c)&&Or(s,r,l,d,u);for(let _=10;_<c.length;_++){const M=c[_];Bs(M[1],M,r,s,l,d)}}(s,r,d,c,u)}}function wf(r,s,c){return r.createElement(s,c)}function kf(r,s){const c=r[9],l=c.indexOf(s),u=s[3];512&s[2]&&(s[2]&=-513,Yl(u,-1)),c.splice(l,1)}function Tg(r,s){if(r.length<=10)return;const c=10+s,l=r[c];if(l){const u=l[17];null!==u&&u!==r&&kf(u,l),s>0&&(r[c-1][4]=l[4]);const d=$e(r,10+s);!function oP(r,s){Bs(r,s,s[11],2,null,null),s[0]=null,s[6]=null}(l[1],l);const p=d[19];null!==p&&p.detachView(d[1]),l[3]=null,l[4]=null,l[2]&=-65}return l}function Af(r,s){if(!(128&s[2])){const c=s[11];c.destroyNode&&Bs(r,s,c,3,null,null),function aP(r){let s=r[13];if(!s)return Eg(r[1],r);for(;s;){let c=null;if(Je(s))c=s[13];else{const l=s[10];l&&(c=l)}if(!c){for(;s&&!s[4]&&s!==r;)Je(s)&&Eg(s[1],s),s=s[3];null===s&&(s=r),Je(s)&&Eg(s[1],s),c=s&&s[4]}s=c}}(s)}}function Eg(r,s){if(!(128&s[2])){s[2]&=-65,s[2]|=128,function qC(r,s){let c;if(null!=r&&null!=(c=r.destroyHooks))for(let l=0;l<c.length;l+=2){const u=s[c[l]];if(!(u instanceof Os)){const d=c[l+1];if(Array.isArray(d))for(let p=0;p<d.length;p+=2){const _=u[d[p]],M=d[p+1];try{M.call(_)}finally{}}else try{d.call(u)}finally{}}}}(r,s),function HC(r,s){const c=r.cleanup,l=s[7];let u=-1;if(null!==c)for(let d=0;d<c.length-1;d+=2)if("string"==typeof c[d]){const p=c[d+1],_="function"==typeof p?p(s):Ne(s[p]),M=l[u=c[d+2]],b=c[d+3];"boolean"==typeof b?_.removeEventListener(c[d],M,b):b>=0?l[u=b]():l[u=-b].unsubscribe(),d+=2}else{const p=l[u=c[d+1]];c[d].call(p)}if(null!==l){for(let d=u+1;d<l.length;d++)(0,l[d])();s[7]=null}}(r,s),1===s[1].type&&s[11].destroy();const c=s[17];if(null!==c&&ai(s[3])){c!==s[3]&&kf(c,s);const l=s[19];null!==l&&l.detachView(r)}!function IC(r){hf.delete(r[20])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(s)}}function Tf(r,s,c){return function Sg(r,s,c){let l=s;for(;null!==l&&40&l.type;)l=(s=l).parent;if(null===l)return c[0];if(2&l.flags){const u=r.data[l.directiveStart].encapsulation;if(u===In.None||u===In.Emulated)return null}return ue(l,c)}(r,s.parent,c)}function Ki(r,s,c,l,u){r.insertBefore(s,c,l,u)}function Ef(r,s,c){r.appendChild(s,c)}function Sf(r,s,c,l,u){null!==l?Ki(r,s,c,l,u):Ef(r,s,c)}function yc(r,s){return r.parentNode(s)}let QC=function zC(r,s,c){return 40&r.type?ue(r,c):null};function qs(r,s,c,l){const u=Tf(r,l,s),d=s[11],_=function BC(r,s,c){return QC(r,s,c)}(l.parent||s[6],l,s);if(null!=u)if(Array.isArray(c))for(let M=0;M<c.length;M++)Sf(d,u,c[M],_,!1);else Sf(d,u,c,_,!1)}function Js(r,s){if(null!==s){const c=s.type;if(3&c)return ue(s,r);if(4&c)return Ig(-1,r[s.index]);if(8&c){const l=s.child;if(null!==l)return Js(r,l);{const u=r[s.index];return ai(u)?Ig(-1,u):Ne(u)}}if(32&c)return kg(s,r)()||Ne(r[s.index]);{const l=Lf(r,s);return null!==l?Array.isArray(l)?l[0]:Js(br(r[16]),l):Js(r,s.next)}}return null}function Lf(r,s){return null!==s?r[16][6].projection[s.projection]:null}function Ig(r,s){const c=10+r+1;if(c<s.length){const l=s[c],u=l[1].firstChild;if(null!==u)return Js(l,u)}return s[7]}function Wi(r,s,c,l,u,d,p){for(;null!=c;){const _=l[c.index],M=c.type;if(p&&0===s&&(_&&cn(Ne(_),l),c.flags|=4),64!=(64&c.flags))if(8&M)Wi(r,s,c.child,l,u,d,!1),Or(s,r,u,_,d);else if(32&M){const b=kg(c,l);let x;for(;x=b();)Or(s,r,u,x,d);Or(s,r,u,_,d)}else 16&M?Nf(r,s,l,c,u,d):Or(s,r,u,_,d);c=p?c.projectionNext:c.next}}function Bs(r,s,c,l,u,d){Wi(c,l,r.firstChild,s,u,d,!1)}function Nf(r,s,c,l,u,d){const p=c[16],M=p[6].projection[l.projection];if(Array.isArray(M))for(let b=0;b<M.length;b++)Or(s,r,u,M[b],d);else Wi(r,s,M,p[3],u,d,!0)}function YC(r,s,c){r.setAttribute(s,"style",c)}function Ng(r,s,c){""===c?r.removeAttribute(s,"class"):r.setAttribute(s,"class",c)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function zs(r,s,c){let l=r.length;for(;;){const u=r.indexOf(s,c);if(-1===u)return u;if(0===u||r.charCodeAt(u-1)<=32){const d=s.length;if(u+d===l||r.charCodeAt(u+d)<=32)return u}c=u+1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const $C="ng-template";function Ff(r,s,c){let l=0;for(;l<r.length;){let u=r[l++];if(c&&"class"===u){if(u=r[l],-1!==zs(u.toLowerCase(),s,0))return!0}else if(1===u){for(;l<r.length&&"string"==typeof(u=r[l++]);)if(u.toLowerCase()===s)return!0;return!1}}return!1}function Fg(r){return 4===r.type&&r.value!==$C}function Zg(r,s,c){return s===(4!==r.type||c?r.value:$C)}function KC(r,s,c){let l=4;const u=r.attrs||[],d=function mn(r){for(let s=0;s<r.length;s++)if(Ah(r[s]))return s;return r.length}(u);let p=!1;for(let _=0;_<s.length;_++){const M=s[_];if("number"!=typeof M){if(!p)if(4&l){if(l=2|1&l,""!==M&&!Zg(r,M,c)||""===M&&1===s.length){if(Yn(l))return!1;p=!0}}else{const b=8&l?M:s[++_];if(8&l&&null!==r.attrs){if(!Ff(r.attrs,b,c)){if(Yn(l))return!1;p=!0}continue}const k=WC(8&l?"class":M,u,Fg(r),c);if(-1===k){if(Yn(l))return!1;p=!0;continue}if(""!==b){let N;N=k>d?"":u[k+1].toLowerCase();const Q=8&l?N:null;if(Q&&-1!==zs(Q,b,0)||2&l&&b!==N){if(Yn(l))return!1;p=!0}}}}else{if(!p&&!Yn(l)&&!Yn(M))return!1;if(p&&Yn(M))continue;p=!1,l=M|1&l}}return Yn(l)||p}function Yn(r){return 0==(1&r)}function WC(r,s,c,l){if(null===s)return-1;let u=0;if(l||!c){let d=!1;for(;u<s.length;){const p=s[u];if(p===r)return u;if(3===p||6===p)d=!0;else{if(1===p||2===p){let _=s[++u];for(;"string"==typeof _;)_=s[++u];continue}if(4===p)break;if(0===p){u+=4;continue}}u+=d?1:2}return-1}return function Rg(r,s){let c=r.indexOf(4);if(c>-1)for(c++;c<r.length;){const l=r[c];if("number"==typeof l)return-1;if(l===s)return c;c++}return-1}(s,r)}function Pr(r,s,c=!1){for(let l=0;l<s.length;l++)if(KC(r,s[l],c))return!0;return!1}function Ug(r,s){return r?":not("+s.trim()+")":s}function bc(r){let s=r[0],c=1,l=2,u="",d=!1;for(;c<r.length;){let p=r[c];if("string"==typeof p)if(2&l){const _=r[++c];u+="["+p+(_.length>0?'="'+_+'"':"")+"]"}else 8&l?u+="."+p:4&l&&(u+=" "+p);else""!==u&&!Yn(p)&&(s+=Ug(d,u),u=""),l=p,d=d||!Yn(l);c++}return""!==u&&(s+=Ug(d,u)),s}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const zt={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Oc(r){Pc(ne(),dt(),fn()+r,!1)}function Pc(r,s,c,l){if(!l)if(3==(3&s[2])){const d=r.preOrderCheckHooks;null!==d&&rr(s,d,c)}else{const d=r.preOrderHooks;null!==d&&bs(s,d,0,c)}Bi(c)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Qs(r,s=null,c=null,l){const u=Jf(r,s,c,l);return u.resolveInjectorInitializers(),u}function Jf(r,s=null,c=null,l,u=new Set){const d=[c||St,MO(r)];return l=l||("object"==typeof r?void 0:F(r)),new yC(d,s||Pg(),l||null,u)
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}let Ti=(()=>{class r{static create(c,l){if(Array.isArray(c))return Qs({name:""},l,c,"");{const u=c.name??"";return Qs({name:u},c.parent,c.providers,u)}}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return r.THROW_IF_NOT_FOUND=ki,r.NULL=new mC,r.\u0275prov=gn({token:r,providedIn:"any",factory:()=>Pe(fC)}),r.__NG_ELEMENT_ID__=-1,r})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ar(r,s=qt.Default){const c=dt();return null===c?Pe(r,s):og(Ge(),c,W(r),s)}function uM(){throw new Error("invalid")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function zg(r,s){return r<<17|s<<2}function $n(r){return r>>17&32767}function Kf(r){return 2|r}function Xi(r){return(131068&r)>>2}function Wf(r,s){return-131069&r|s<<2}function Xf(r){return 1|r}function Wg(r,s){const c=r.contentQueries;if(null!==c)for(let l=0;l<c.length;l+=2){const u=c[l],d=c[l+1];if(-1!==d){const p=r.data[d];yh(u),p.contentQueries(2,s[d],d)}}}function Lc(r,s,c,l,u,d,p,_,M,b,x){const k=s.blueprint.slice();return k[0]=u,k[2]=76|l,(null!==x||r&&1024&r[2])&&(k[2]|=1024),pv(k),k[3]=k[15]=r,k[8]=c,k[10]=p||r&&r[10],k[11]=_||r&&r[11],k[12]=M||r&&r[12]||null,k[9]=b||r&&r[9]||null,k[6]=d,k[20]=function KO(){return $O++}(),k[21]=x,k[16]=2==s.type?r[16]:k,k}function Ue(r,s,c,l,u){let d=r.data[s];if(null===d)d=function ap(r,s,c,l,u){const d=Mv(),p=Kl(),M=r.data[s]=function dp(r,s,c,l,u,d){return{type:c,index:l,insertBeforeIndex:null,injectorIndex:s?s.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:u,attrs:d,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:s,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,p?d:d&&d.parent,c,s,l,u);return null===r.firstChild&&(r.firstChild=M),null!==d&&(p?null==d.child&&null!==M.parent&&(d.child=M):null===d.next&&(d.next=M)),M}(r,s,c,l,u),function Ub(){return Qt.lFrame.inI18n}()&&(d.flags|=64);else if(64&d.type){d.type=c,d.value=l,d.attrs=u;const p=function nr(){const r=Qt.lFrame,s=r.currentTNode;return r.isParent?s:s.parent}();d.injectorIndex=null===p?-1:p.injectorIndex}return li(d,!0),d}function Tr(r,s,c,l){if(0===c)return-1;const u=s.length;for(let d=0;d<c;d++)s.push(l),r.blueprint.push(l),r.data.push(null);return u}function cp(r,s,c){Xl(s);try{const l=r.viewQuery;null!==l&&Zn(1,l,c);const u=r.template;null!==u&&lp(r,s,u,1,c),r.firstCreatePass&&(r.firstCreatePass=!1),r.staticContentQueries&&Wg(r,s),r.staticViewQueries&&Zn(2,r.viewQuery,c);const d=r.components;null!==d&&function CM(r,s){for(let c=0;c<s.length;c++)Cp(r,s[c])}(s,d)}catch(l){throw r.firstCreatePass&&(r.incompleteFirstPass=!0,r.firstCreatePass=!1),l}finally{s[2]&=-5,tg()}}function Xg(r,s,c,l){const u=s[2];if(128!=(128&u)){Xl(s);try{pv(s),function Ov(r){return Qt.lFrame.bindingIndex=r}(r.bindingStartIndex),null!==c&&lp(r,s,c,2,l);const p=3==(3&u);if(p){const b=r.preOrderCheckHooks;null!==b&&rr(s,b,null)}else{const b=r.preOrderHooks;null!==b&&bs(s,b,0,null),tc(s,0)}if(function vp(r){for(let s=bf(r);null!==s;s=Of(s)){if(!s[2])continue;const c=s[9];for(let l=0;l<c.length;l++){const u=c[l],d=u[3];0==(512&u[2])&&Yl(d,1),u[2]|=512}}}(s),function lu(r){for(let s=bf(r);null!==s;s=Of(s))for(let c=10;c<s.length;c++){const l=s[c],u=l[1];Ya(l)&&Xg(u,l,u.template,l[8])}}(s),null!==r.contentQueries&&Wg(r,s),p){const b=r.contentCheckHooks;null!==b&&rr(s,b)}else{const b=r.contentHooks;null!==b&&bs(s,b,1),tc(s,1)}!
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function PP(r,s){const c=r.hostBindingOpCodes;if(null!==c)try{for(let l=0;l<c.length;l++){const u=c[l];if(u<0)Bi(~u);else{const d=u,p=c[++l],_=c[++l];Vb(p,d),_(2,s[d])}}}finally{Bi(-1)}}(r,s);const _=r.components;null!==_&&function vM(r,s){for(let c=0;c<s.length;c++)DM(r,s[c])}(s,_);const M=r.viewQuery;if(null!==M&&Zn(2,M,l),p){const b=r.viewCheckHooks;null!==b&&rr(s,b)}else{const b=r.viewHooks;null!==b&&bs(s,b,2),tc(s,2)}!0===r.firstUpdatePass&&(r.firstUpdatePass=!1),s[2]&=-41,512&s[2]&&(s[2]&=-513,Yl(s[3],-1))}finally{tg()}}}function lp(r,s,c,l,u){const d=fn(),p=2&l;try{Bi(-1),p&&s.length>22&&Pc(r,s,22,!1),c(l,u)}finally{Bi(d)}}function gp(r,s,c){if(Ja(s)){const u=s.directiveEnd;for(let d=s.directiveStart;d<u;d++){const p=r.data[d];p.contentQueries&&p.contentQueries(1,c[d],d)}}}function tu(r,s,c){!mh()||(function ou(r,s,c,l){const u=c.directiveStart,d=c.directiveEnd;r.firstCreatePass||ar(c,s),cn(l,s);const p=c.initialInputs;for(let _=u;_<d;_++){const M=r.data[_],b=Hn(M);b&&_p(s,c,M);const x=ac(s,r,_,c);cn(x,s),null!==p&&wM(0,_-u,x,M,0,p),b&&(xn(c.index,s)[8]=x)}}(r,s,c,ue(c,s)),128==(128&c.flags)&&function ru(r,s,c){const l=c.directiveStart,u=c.directiveEnd,d=c.index,p=function Pv(){return Qt.lFrame.currentDirectiveIndex}();try{Bi(d);for(let _=l;_<u;_++){const M=r.data[_],b=s[_];Wl(_),(null!==M.hostBindings||0!==M.hostVars||null!==M.hostAttrs)&&pp(M,b)}}finally{Bi(-1),Wl(p)}}(r,s,c))}function up(r,s,c=ue){const l=s.localNames;if(null!==l){let u=s.index+1;for(let d=0;d<l.length;d+=2){const p=l[d+1],_=-1===p?c(s,r):r[p];r[u++]=_}}}function Er(r){const s=r.tView;return null===s||s.incompleteFirstPass?r.tView=eu(1,null,r.template,r.decls,r.vars,r.directiveDefs,r.pipeDefs,r.viewQuery,r.schemas,r.consts):s}function eu(r,s,c,l,u,d,p,_,M,b){const x=22+l,k=x+u,N=function nu(r,s){const c=[];for(let l=0;l<s;l++)c.push(l<r?null:zt);return c}(x,k),Q="function"==typeof b?b():b;return N[1]={type:r,blueprint:N,template:c,queries:null,viewQuery:_,declTNode:s,data:N.slice().fill(null,x),bindingStartIndex:x,expandoStartIndex:k,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof d?d():d,pipeRegistry:"function"==typeof p?p():p,firstChild:null,schemas:M,consts:Q,incompleteFirstPass:!1}}function en(r,s,c,l){const u=Rc(s);null===c?u.push(l):(u.push(c),r.firstCreatePass&&Mp(r).push(l,u.length-1))}function nn(r,s,c){for(let l in r)if(r.hasOwnProperty(l)){const u=r[l];(c=null===c?{}:c).hasOwnProperty(l)?c[l].push(s,u):c[l]=[s,u]}return c}function iu(r,s){const l=s.directiveEnd,u=r.data,d=s.attrs,p=[];let _=null,M=null;for(let b=s.directiveStart;b<l;b++){const x=u[b],k=x.inputs,N=null===d||Fg(s)?null:Nc(k,d);p.push(N),_=nn(k,b,_),M=nn(x.outputs,b,M)}null!==_&&(_.hasOwnProperty("class")&&(s.flags|=16),_.hasOwnProperty("style")&&(s.flags|=32)),s.initialInputs=p,s.inputs=_,s.outputs=M}function kn(r,s,c,l,u,d,p,_){const M=ue(s,c);let x,b=s.inputs;!_&&null!=b&&(x=b[l])?(Lo(r,c,x,l,u),Ba(s)&&hp(c,s.index)):3&s.type&&(l=function yM(r){return"class"===r?"className":"for"===r?"htmlFor":"formaction"===r?"formAction":"innerHtml"===r?"innerHTML":"readonly"===r?"readOnly":"tabindex"===r?"tabIndex":r}(l),u=null!=p?p(u,s.value||"",l):u,d.setProperty(M,l,u))}function hp(r,s){const c=xn(s,r);16&c[2]||(c[2]|=32)}function eo(r,s,c,l){let u=!1;if(mh()){const d=function OM(r,s,c){const l=r.directiveRegistry;let u=null;if(l)for(let d=0;d<l.length;d++){const p=l[d];Pr(c,p.selectors,!1)&&(u||(u=[]),ig(ar(c,s),r,p.type),Hn(p)?(su(r,c),u.unshift(p)):u.push(p))}return u}(r,s,c),p=null===l?null:{"":-1};if(null!==d){u=!0,mp(c,r.data.length,d.length);for(let x=0;x<d.length;x++){const k=d[x];k.providersResolver&&k.providersResolver(k)}let _=!1,M=!1,b=Tr(r,s,d.length,null);for(let x=0;x<d.length;x++){const k=d[x];c.mergedAttrs=xs(c.mergedAttrs,k.hostAttrs),au(r,c,s,b,k),xM(b,k,p),null!==k.contentQueries&&(c.flags|=8),(null!==k.hostBindings||null!==k.hostAttrs||0!==k.hostVars)&&(c.flags|=128);const N=k.type.prototype;!_&&(N.ngOnChanges||N.ngOnInit||N.ngDoCheck)&&((r.preOrderHooks||(r.preOrderHooks=[])).push(c.index),_=!0),!M&&(N.ngOnChanges||N.ngDoCheck)&&((r.preOrderCheckHooks||(r.preOrderCheckHooks=[])).push(c.index),M=!0),b++}iu(r,c)}p&&function PM(r,s,c){if(s){const l=r.localNames=[];for(let u=0;u<s.length;u+=2){const d=c[s[u+1]];if(null==d)throw new Ct(-301,!1);l.push(s[u],d)}}}(c,l,p)}return c.mergedAttrs=xs(c.mergedAttrs,c.attrs),u}function Si(r,s,c,l,u,d){const p=d.hostBindings;if(p){let _=r.hostBindingOpCodes;null===_&&(_=r.hostBindingOpCodes=[]);const M=~s.index;(function xP(r){let s=r.length;for(;s>0;){const c=r[--s];if("number"==typeof c&&c<0)return c}return 0})(_)!=M&&_.push(M),_.push(l,u,p)}}function pp(r,s){null!==r.hostBindings&&r.hostBindings(1,s)}function su(r,s){s.flags|=2,(r.components||(r.components=[])).push(s.index)}function xM(r,s,c){if(c){if(s.exportAs)for(let l=0;l<s.exportAs.length;l++)c[s.exportAs[l]]=r;Hn(s)&&(c[""]=r)}}function mp(r,s,c){r.flags|=1,r.directiveStart=s,r.directiveEnd=s+c,r.providerIndexes=s}function au(r,s,c,l,u){r.data[l]=u;const d=u.factory||(u.factory=wi(u.type)),p=new Os(d,Hn(u),Ar);r.blueprint[l]=p,c[l]=p,Si(r,s,0,l,Tr(r,c,u.hostVars,zt),u)}function _p(r,s,c){const l=ue(s,r),u=Er(c),d=r[10],p=Zc(r,Lc(r,u,null,c.onPush?32:16,l,s,d,d.createRenderer(l,c),null,null,null));r[s.index]=p}function hi(r,s,c,l,u,d){const p=ue(r,s);!function Io(r,s,c,l,u,d,p){if(null==d)r.removeAttribute(s,u,c);else{const _=null==p?gt(d):p(d,l||"",u);r.setAttribute(s,u,_,c)}}(s[11],p,d,r.value,c,l,u)}function wM(r,s,c,l,u,d){const p=d[s];if(null!==p){const _=l.setInput;for(let M=0;M<p.length;){const b=p[M++],x=p[M++],k=p[M++];null!==_?l.setInput(c,k,b,x):c[x]=k}}}function Nc(r,s){let c=null,l=0;for(;l<s.length;){const u=s[l];if(0!==u)if(5!==u){if("number"==typeof u)break;r.hasOwnProperty(u)&&(null===c&&(c=[]),c.push(u,r[u],s[l+1])),l+=2}else l+=2;else l+=4}return c}function cu(r,s,c,l){return new Array(r,!0,!1,s,null,0,l,c,null,null)}function DM(r,s){const c=xn(s,r);if(Ya(c)){const l=c[1];48&c[2]?Xg(l,c,l.template,c[8]):c[5]>0&&Fc(c)}}function Fc(r){for(let l=bf(r);null!==l;l=Of(l))for(let u=10;u<l.length;u++){const d=l[u];if(Ya(d))if(512&d[2]){const p=d[1];Xg(p,d,p.template,d[8])}else d[5]>0&&Fc(d)}const c=r[1].components;if(null!==c)for(let l=0;l<c.length;l++){const u=xn(c[l],r);Ya(u)&&u[5]>0&&Fc(u)}}function Cp(r,s){const c=xn(s,r),l=c[1];(function kM(r,s){for(let c=s.length;c<r.blueprint.length;c++)s.push(r.blueprint[c])})(l,c),cp(l,c,c[8])}function Zc(r,s){return r[13]?r[14][4]=s:r[13]=s,r[14]=s,s}function gu(r){for(;r;){r[2]|=32;const s=br(r);if(hb(r)&&!s)return r;r=s}return null}function ta(r,s,c,l=!0){const u=s[10];u.begin&&u.begin();try{Xg(r,s,r.template,c)}catch(p){throw l&&bp(s,p),p}finally{u.end&&u.end()}}function Zn(r,s,c){yh(0),s(r,c)}function Rc(r){return r[7]||(r[7]=[])}function Mp(r){return r.cleanup||(r.cleanup=[])}function bp(r,s){const c=r[9],l=c?c.get(Mc,null):null;l&&l.handleError(s)}function Lo(r,s,c,l,u){for(let d=0;d<c.length;){const p=c[d++],_=c[d++],M=s[p],b=r.data[p];null!==b.setInput?b.setInput(M,u,l,_):M[_]=u}}function Ii(r,s,c){const l=Gl(s,r);!function xf(r,s,c){r.setValue(s,c)}(r[11],l,c)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Kn(r,s,c){let l=c?r.styles:null,u=c?r.classes:null,d=0;if(null!==s)for(let p=0;p<s.length;p++){const _=s[p];"number"==typeof _?d=_:1==d?u=ct(u,_):2==d&&(l=ct(l,_+": "+s[++p]+";"))}c?r.styles=l:r.stylesWithoutHost=l,c?r.classes=u:r.classesWithoutHost=u}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ea(r,s,c,l,u=!1){for(;null!==c;){const d=s[c.index];if(null!==d&&l.push(Ne(d)),ai(d))for(let _=10;_<d.length;_++){const M=d[_],b=M[1].firstChild;null!==b&&ea(M[1],M,b,l)}const p=c.type;if(8&p)ea(r,s,c.child,l);else if(32&p){const _=kg(c,s);let M;for(;M=_();)l.push(M)}else if(16&p){const _=Lf(s,c);if(Array.isArray(_))l.push(..._);else{const M=br(s[16]);ea(M[1],M,_,l,!0)}}c=u?c.projectionNext:c.next}return l}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class je{constructor(s,c){this._lView=s,this._cdRefInjectingView=c,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const s=this._lView,c=s[1];return ea(c,s,c.firstChild,[])}get context(){return this._lView[8]}set context(s){this._lView[8]=s}get destroyed(){return 128==(128&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const s=this._lView[3];if(ai(s)){const c=s[8],l=c?c.indexOf(this):-1;l>-1&&(Tg(s,l),$e(c,l))}this._attachedToViewContainer=!1}Af(this._lView[1],this._lView)}onDestroy(s){en(this._lView[1],this._lView,null,s)}markForCheck(){gu(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-65}reattach(){this._lView[2]|=64}detectChanges(){ta(this._lView[1],this._lView,this.context)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Ct(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function sP(r,s){Bs(r,s,s[11],2,null,null)}(this._lView[1],this._lView)}attachToAppRef(s){if(this._attachedToViewContainer)throw new Ct(902,!1);this._appRef=s}}class no extends je{constructor(s){super(s),this._view=s}detectChanges(){const s=this._view;ta(s[1],s,s[8],!1)}checkNoChanges(){}get context(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class uu extends vc{constructor(s){super(),this.ngModule=s}resolveComponentFactory(s){const c=ge(s);return new Ir(c,this.ngModule)}}function AM(r){const s=[];for(let c in r)r.hasOwnProperty(c)&&s.push({propName:r[c],templateName:c});return s}class Pp{constructor(s,c){this.injector=s,this.parentInjector=c}get(s,c,l){const u=this.injector.get(s,af,l);return u!==af||c===af?u:this.parentInjector.get(s,c,l)}}class Ir extends OC{constructor(s,c){super(),this.componentDef=s,this.ngModule=c,this.componentType=s.type,this.selector=function Zf(r){return r.map(bc).join(",")}(s.selectors),this.ngContentSelectors=s.ngContentSelectors?s.ngContentSelectors:[],this.isBoundToModule=!!c}get inputs(){return AM(this.componentDef.inputs)}get outputs(){return AM(this.componentDef.outputs)}create(s,c,l,u){let d=(u=u||this.ngModule)instanceof Mr?u:u?.injector;d&&null!==this.componentDef.getStandaloneInjector&&(d=this.componentDef.getStandaloneInjector(d)||d);const p=d?new Pp(s,d):s,_=p.get(xC,null);if(null===_)throw new Ct(407,!1);const M=p.get(ZO,null),b=_.createRenderer(null,this.componentDef),x=this.componentDef.selectors[0][0]||"div",k=l?function MM(r,s,c){return r.selectRootElement(s,c===In.ShadowDom)}(b,l,this.componentDef.encapsulation):wf(_.createRenderer(null,this.componentDef),x,function Op(r){const s=r.toLowerCase();return"svg"===s?"svg":"math"===s?"math":null}(x)),N=this.componentDef.onPush?288:272,Q=eu(0,null,null,1,0,null,null,null,null,null),nt=Lc(null,Q,null,N,null,null,_,b,M,p,null);let ht,pt;Xl(nt);try{const Mt=function Dp(r,s,c,l,u,d){const p=c[1];c[22]=r;const M=Ue(p,22,2,"#host",null),b=M.mergedAttrs=s.hostAttrs;null!==b&&(Kn(M,b,!0),null!==r&&(ic(u,r,b),null!==M.classes&&Ng(u,r,M.classes),null!==M.styles&&YC(u,r,M.styles)));const x=l.createRenderer(r,s),k=Lc(c,Er(s),null,s.onPush?32:16,c[22],M,l,x,d||null,null,null);return p.firstCreatePass&&(ig(ar(M,c),p,s.type),su(p,M),mp(M,c.length,1)),Zc(c,k),c[22]=k}(k,this.componentDef,nt,_,b);if(k)if(l)ic(b,k,["ng-version",RO.full]);else{const{attrs:Et,classes:ut}=function XC(r){const s=[],c=[];let l=1,u=2;for(;l<r.length;){let d=r[l];if("string"==typeof d)2===u?""!==d&&s.push(d,r[++l]):8===u&&c.push(d);else{if(!Yn(u))break;u=d}l++}return{attrs:s,classes:c}}(this.componentDef.selectors[0]);Et&&ic(b,k,Et),ut&&ut.length>0&&Ng(b,k,ut.join(" "))}if(pt=ms(Q,22),void 0!==c){const Et=pt.projection=[];for(let ut=0;ut<this.ngContentSelectors.length;ut++){const Rt=c[ut];Et.push(null!=Rt?Array.from(Rt):null)}}ht=function Uc(r,s,c,l){const u=c[1],d=function bM(r,s,c){const l=Ge();r.firstCreatePass&&(c.providersResolver&&c.providersResolver(c),au(r,l,s,Tr(r,s,1,null),c),iu(r,l));const u=ac(s,r,l.directiveStart,l);cn(u,s);const d=ue(l,s);return d&&cn(d,s),u}(u,c,s);if(r[8]=c[8]=d,null!==l)for(const _ of l)_(d,s);if(s.contentQueries){const _=Ge();s.contentQueries(1,d,_.directiveStart)}const p=Ge();return!u.firstCreatePass||null===s.hostBindings&&null===s.hostAttrs||(Bi(p.index),Si(c[1],p,0,p.directiveStart,p.directiveEnd,s),pp(s,d)),d}(Mt,this.componentDef,nt,[kp]),cp(Q,nt,null)}finally{tg()}return new wp(this.componentType,ht,Us(pt,nt),nt,pt)}}class wp extends class TO{}{constructor(s,c,l,u,d){super(),this.location=l,this._rootLView=u,this._tNode=d,this.instance=c,this.hostView=this.changeDetectorRef=new no(u),this.componentType=s}setInput(s,c){const l=this._tNode.inputs;let u;if(null!==l&&(u=l[s])){const d=this._rootLView;Lo(d[1],d,u,s,c),hp(d,this._tNode.index)}}get injector(){return new cr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(s){this.hostView.onDestroy(s)}}function kp(){const r=Ge();or(dt()[1],r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Vc(r){let s=function du(r){return Object.getPrototypeOf(r.prototype).constructor}(r.type),c=!0;const l=[r];for(;s;){let u;if(Hn(r))u=s.\u0275cmp||s.\u0275dir;else{if(s.\u0275cmp)throw new Ct(903,!1);u=s.\u0275dir}if(u){if(c){l.push(u);const p=r;p.inputs=hu(r.inputs),p.declaredInputs=hu(r.declaredInputs),p.outputs=hu(r.outputs);const _=u.hostBindings;_&&fu(r,_);const M=u.viewQuery,b=u.contentQueries;if(M&&Tp(r,M),b&&Ep(r,b),R(r.inputs,u.inputs),R(r.declaredInputs,u.declaredInputs),R(r.outputs,u.outputs),Hn(u)&&u.data.animation){const x=r.data;x.animation=(x.animation||[]).concat(u.data.animation)}}const d=u.features;if(d)for(let p=0;p<d.length;p++){const _=d[p];_&&_.ngInherit&&_(r),_===Vc&&(c=!1)}}s=Object.getPrototypeOf(s)}!function Ap(r){let s=0,c=null;for(let l=r.length-1;l>=0;l--){const u=r[l];u.hostVars=s+=u.hostVars,u.hostAttrs=xs(u.hostAttrs,c=xs(c,u.hostAttrs))}}(l)}function hu(r){return r===$o?{}:r===St?[]:r}function Tp(r,s){const c=r.viewQuery;r.viewQuery=c?(l,u)=>{s(l,u),c(l,u)}:s}function Ep(r,s){const c=r.contentQueries;r.contentQueries=c?(l,u,d)=>{s(l,u,d),c(l,u,d)}:s}function fu(r,s){const c=r.hostBindings;r.hostBindings=c?(l,u)=>{s(l,u),c(l,u)}:s}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let na=null;function io(){if(!na){const r=ce.Symbol;if(r&&r.iterator)na=r.iterator;else{const s=Object.getOwnPropertyNames(Map.prototype);for(let c=0;c<s.length;++c){const l=s[c];"entries"!==l&&"size"!==l&&Map.prototype[l]===Map.prototype.entries&&(na=l)}}}return na}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function oo(r){return!!jc(r)&&(Array.isArray(r)||!(r instanceof Map)&&io()in r)}function jc(r){return null!==r&&("function"==typeof r||"object"==typeof r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function on(r,s,c){return r[s]=c}function Lr(r,s){return r[s]}function Cn(r,s,c){return!Object.is(r[s],c)&&(r[s]=c,!0)}function Nr(r,s,c,l){const u=Cn(r,s,c);return Cn(r,s+1,l)||u}function Fr(r,s,c,l,u){const d=Nr(r,s,c,l);return Cn(r,s+2,u)||d}function Rn(r,s,c,l,u,d){const p=Nr(r,s,c,l);return Nr(r,s+2,u,d)||p}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ia(r,s,c,l){const u=dt();return Cn(u,Cs(),s)&&(ne(),hi(xe(),u,r,s,c,l)),ia}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Zr(r,s,c,l){return Cn(r,Cs(),c)?s+gt(c)+l:zt}function jr(r,s,c,l,u,d,p,_){const M=dt(),b=ne(),x=r+22,k=b.firstCreatePass?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Vr(r,s,c,l,u,d,p,_,M){const b=s.consts,x=Ue(s,r,4,p||null,xo(b,_));eo(s,c,x,xo(b,M)),or(s,x);const k=x.tViews=eu(2,x,l,u,d,s.directiveRegistry,s.pipeRegistry,null,s.schemas,b);return null!==s.queries&&(s.queries.template(s,x),k.queries=s.queries.embeddedTView(x)),x}(x,b,M,s,c,l,u,d,p):b.data[x];li(k,!1);const N=M[11].createComment("");qs(b,M,N,k),cn(N,M),Zc(M,M[x]=cu(N,M,N,k)),za(k)&&tu(b,M,k),null!=p&&up(M,k,_)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function vu(r){return _s(function vh(){return Qt.lFrame.contextLView}(),22+r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function la(r,s,c){const l=dt();return Cn(l,Cs(),s)&&kn(ne(),xe(),l,r,s,l[11],c,!1),la}function Jc(r,s,c,l,u){const p=u?"class":"style";Lo(r,c,s.inputs[p],p,l)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ga(r,s,c,l){const u=dt(),d=ne(),p=22+r,_=u[11],M=u[p]=wf(_,s,function ys(){return Qt.lFrame.currentNamespace}()),b=d.firstCreatePass?function Bc(r,s,c,l,u,d,p){const _=s.consts,b=Ue(s,r,2,u,xo(_,d));return eo(s,c,b,xo(_,p)),null!==b.attrs&&Kn(b,b.attrs,!1),null!==b.mergedAttrs&&Kn(b,b.mergedAttrs,!0),null!==s.queries&&s.queries.elementStart(s,b),b}(p,d,u,0,s,c,l):d.data[p];li(b,!0);const x=b.mergedAttrs;null!==x&&ic(_,M,x);const k=b.classes;null!==k&&Ng(_,M,k);const N=b.styles;return null!==N&&YC(_,M,N),64!=(64&b.flags)&&qs(d,u,M,b),0===function mv(){return Qt.lFrame.elementDepthCount}()&&cn(M,u),function _v(){Qt.lFrame.elementDepthCount++}(),za(b)&&(tu(d,u,b),gp(d,b,u)),null!==l&&up(u,b),ga}function ua(){let r=Ge();Kl()?vs():(r=r.parent,li(r,!1));const s=r;!function Zb(){Qt.lFrame.elementDepthCount--}();const c=ne();return c.firstCreatePass&&(or(c,r),Ja(r)&&c.queries.elementEnd(r)),null!=s.classesWithoutHost&&function eg(r){return 0!=(16&r.flags)}(s)&&Jc(c,s,dt(),s.classesWithoutHost,!0),null!=s.stylesWithoutHost&&function Av(r){return 0!=(32&r.flags)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(s)&&Jc(c,s,dt(),s.stylesWithoutHost,!1),ua}function zc(r,s,c,l){return ga(r,s,c,l),ua(),zc
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}function Mu(r,s,c){const l=dt(),u=ne(),d=r+22,p=u.firstCreatePass?function Cu(r,s,c,l,u){const d=s.consts,p=xo(d,l),_=Ue(s,r,8,"ng-container",p);return null!==p&&Kn(_,p,!0),eo(s,c,_,xo(d,u)),null!==s.queries&&s.queries.elementStart(s,_),_}(d,u,l,s,c):u.data[d];li(p,!0);const _=l[d]=l[11].createComment("");return qs(u,l,_,p),cn(_,l),za(p)&&(tu(u,l,p),gp(u,p,l)),null!=c&&up(l,p),Mu}function yu(){let r=Ge();const s=ne();return Kl()?vs():(r=r.parent,li(r,!1)),s.firstCreatePass&&(or(s,r),Ja(r)&&s.queries.elementEnd(r)),yu}function LM(){return dt()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Hr(r){return!!r&&"function"==typeof r.then}function qr(r){return!!r&&"function"==typeof r.subscribe}const da=qr;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Jr(r,s,c,l){const u=dt(),d=ne(),p=Ge();return function ha(r,s,c,l,u,d,p,_){const M=za(l),x=r.firstCreatePass&&Mp(r),k=s[8],N=Rc(s);let Q=!0;if(3&l.type||_){const pt=ue(l,s),Mt=_?_(pt):pt,Et=N.length,ut=_?re=>_(Ne(re[l.index])):l.index;let Rt=null;if(!_&&M&&(Rt=function bu(r,s,c,l){const u=r.cleanup;if(null!=u)for(let d=0;d<u.length-1;d+=2){const p=u[d];if(p===c&&u[d+1]===l){const _=s[7],M=u[d+2];return _.length>M?_[M]:null}"string"==typeof p&&(d+=2)}return null}(r,s,u,l.index)),null!==Rt)(Rt.__ngLastListenerFn__||Rt).__ngNextListenerFn__=d,Rt.__ngLastListenerFn__=d,Q=!1;else{d=Jp(l,s,k,d,!1);const re=c.listen(Mt,u,d);N.push(d,re),x&&x.push(u,ut,Et,Et+1)}}else d=Jp(l,s,k,d,!1);const nt=l.outputs;let ht;if(Q&&null!==nt&&(ht=nt[u])){const pt=ht.length;if(pt)for(let Mt=0;Mt<pt;Mt+=2){const ye=s[ht[Mt]][ht[Mt+1]].subscribe(d),Go=N.length;N.push(d,ye),x&&x.push(u,l.index,Go,-(Go+1))}}}(d,u,u[11],p,r,s,0,l),Jr}function qp(r,s,c,l){try{return!1!==c(l)}catch(u){return bp(r,u),!1}}function Jp(r,s,c,l,u){return function d(p){if(p===Function)return l;gu(2&r.flags?xn(r.index,s):s);let M=qp(s,0,l,p),b=d.__ngNextListenerFn__;for(;b;)M=qp(s,0,b,p)&&M,b=b.__ngNextListenerFn__;return u&&!1===M&&(p.preventDefault(),p.returnValue=!1),M}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ou(r=1){return function Oh(r){return(Qt.lFrame.contextLView=function Dv(r,s){for(;r>0;)s=s[15],r--;return s}(r,Qt.lFrame.contextLView))[8]}(r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function zp(r,s,c){return Qc(r,"",s,"",c),zp}function Qc(r,s,c,l,u){const d=dt(),p=Zr(d,s,c,l);return p!==zt&&kn(ne(),xe(),d,r,p,d[11],u,!1),Qc}function Du(r,s,c,l,u){const d=r[c+1],p=null===s;let _=l?$n(d):Xi(d),M=!1;for(;0!==_&&(!1===M||p);){const x=r[_+1];Yp(r[_],s)&&(M=!0,r[_+1]=l?Xf(x):Kf(x)),_=l?$n(x):Xi(x)}M&&(r[c+1]=l?Kf(d):Xf(d))}function Yp(r,s){return null===r||null==s||(Array.isArray(r)?r[1]:r)===s||!(!Array.isArray(r)||"string"!=typeof s)&&gr(r,s)>=0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const He={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function UM(r){return r.substring(He.key,He.keyEnd)}function jM(r,s){const c=He.textEnd;return c===s?-1:(s=He.keyEnd=function Kp(r,s,c){for(;s<c&&r.charCodeAt(s)>32;)s++;return s}(r,He.key=s,c),Br(r,s,c))}function Br(r,s,c){for(;s<c&&r.charCodeAt(s)<=32;)s++;return s}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function zr(r,s,c){return Xn(r,s,c,!1),zr}function Au(r,s){return Xn(r,s,null,!0),Au}function tm(r){Un(pn,Wn,r,!0)}function Wn(r,s){for(let c=function $p(r){return function qM(r){He.key=0,He.keyEnd=0,He.value=0,He.valueEnd=0,He.textEnd=r.length}(r),jM(r,Br(r,0,He.textEnd))}(s);c>=0;c=jM(s,c))pn(r,UM(s),!0)}function Xn(r,s,c,l){const u=dt(),d=ne(),p=Ji(2);d.firstUpdatePass&&em(d,r,p,l),s!==zt&&Cn(u,p,s)&&Lu(d,d.data[fn()],u,u[11],r,u[p+1]=function GM(r,s){return null==r||("string"==typeof s?r+=s:"object"==typeof r&&(r=F(Qn(r)))),r}(s,c),l,p)}function Un(r,s,c,l){const u=ne(),d=Ji(2);u.firstUpdatePass&&em(u,null,d,l);const p=dt();if(c!==zt&&Cn(p,d,c)){const _=u.data[fn()];if(va(_,l)&&!Tu(u,d)){let M=l?_.classesWithoutHost:_.stylesWithoutHost;null!==M&&(c=ct(M,c||"")),Jc(u,_,p,c,l)}else!function QM(r,s,c,l,u,d,p,_){u===zt&&(u=St);let M=0,b=0,x=0<u.length?u[0]:null,k=0<d.length?d[0]:null;for(;null!==x||null!==k;){const N=M<u.length?u[M+1]:void 0,Q=b<d.length?d[b+1]:void 0;let ht,nt=null;x===k?(M+=2,b+=2,N!==Q&&(nt=k,ht=Q)):null===k||null!==x&&x<k?(M+=2,nt=x):(b+=2,nt=k,ht=Q),null!==nt&&Lu(r,s,c,l,nt,ht,p,_),x=M<u.length?u[M]:null,k=b<d.length?d[b]:null}}(u,_,p,p[11],p[d+1],p[d+1]=function Su(r,s,c){if(null==c||""===c)return St;const l=[],u=Qn(c);if(Array.isArray(u))for(let d=0;d<u.length;d++)r(l,u[d],!0);else if("object"==typeof u)for(const d in u)u.hasOwnProperty(d)&&r(l,d,u[d]);else"string"==typeof u&&s(l,u);return l}(r,s,c),l,d)}}function Tu(r,s){return s>=r.expandoStartIndex}function em(r,s,c,l){const u=r.data;if(null===u[c+1]){const d=u[fn()],p=Tu(r,c);va(d,l)&&null===s&&!p&&(s=!1),s=function nm(r,s,c,l){const u=function Mh(r){const s=Qt.lFrame.currentDirectiveIndex;return-1===s?null:r[s]}(r);let d=l?s.residualClasses:s.residualStyles;if(null===u)0===(l?s.classBindings:s.styleBindings)&&(c=ma(c=pa(null,r,s,c,l),s.attrs,l),d=null);else{const p=s.directiveStylingLast;if(-1===p||r[p]!==u)if(c=pa(u,r,s,c,l),null===d){let M=function BM(r,s,c){const l=c?s.classBindings:s.styleBindings;if(0!==Xi(l))return r[$n(l)]}(r,s,l);void 0!==M&&Array.isArray(M)&&(M=pa(null,r,s,M[1],l),M=ma(M,s.attrs,l),function Eu(r,s,c,l){r[$n(c?s.classBindings:s.styleBindings)]=l}(r,s,l,M))}else d=function zM(r,s,c){let l;const u=s.directiveEnd;for(let d=1+s.directiveStylingLast;d<u;d++)l=ma(l,r[d].hostAttrs,c);return ma(l,s.attrs,c)}(r,s,l)}return void 0!==d&&(l?s.residualClasses=d:s.residualStyles=d),c}(u,d,s,l),function fa(r,s,c,l,u,d){let p=d?s.classBindings:s.styleBindings,_=$n(p),M=Xi(p);r[l]=c;let x,b=!1;if(Array.isArray(c)){const k=c;x=k[1],(null===x||gr(k,x)>0)&&(b=!0)}else x=c;if(u)if(0!==M){const N=$n(r[_+1]);r[l+1]=zg(N,_),0!==N&&(r[N+1]=Wf(r[N+1],l)),r[_+1]=function dM(r,s){return 131071&r|s<<17}(r[_+1],l)}else r[l+1]=zg(_,0),0!==_&&(r[_+1]=Wf(r[_+1],l)),_=l;else r[l+1]=zg(M,0),0===_?_=l:r[M+1]=Wf(r[M+1],l),M=l;b&&(r[l+1]=Kf(r[l+1])),Du(r,x,l,!0),Du(r,x,l,!1),function wu(r,s,c,l,u){const d=u?r.residualClasses:r.residualStyles;null!=d&&"string"==typeof s&&gr(d,s)>=0&&(c[l+1]=Xf(c[l+1]))}(s,x,r,l,d),p=zg(_,M),d?s.classBindings=p:s.styleBindings=p}(u,d,s,c,p,l)}}function pa(r,s,c,l,u){let d=null;const p=c.directiveEnd;let _=c.directiveStylingLast;for(-1===_?_=c.directiveStart:_++;_<p&&(d=s[_],l=ma(l,d.hostAttrs,u),d!==r);)_++;return null!==r&&(c.directiveStylingLast=_),l}function ma(r,s,c){const l=c?1:2;let u=-1;if(null!==s)for(let d=0;d<s.length;d++){const p=s[d];"number"==typeof p?u=p:u===l&&(Array.isArray(r)||(r=void 0===r?[]:["",r]),pn(r,p,!!c||s[++d]))}return void 0===r?null:r}function Lu(r,s,c,l,u,d,p,_){if(!(3&s.type))return;const M=r.data,b=M[_+1];_a(function hM(r){return 1==(1&r)}(b)?im(M,s,c,u,Xi(b),p):void 0)||(_a(d)||function $s(r){return 2==(2&r)}(b)&&(d=im(M,null,c,u,_,p)),function hP(r,s,c,l,u){if(s)u?r.addClass(c,l):r.removeClass(c,l);else{let d=-1===l.indexOf("-")?void 0:Gn.DashCase;null==u?r.removeStyle(c,l,d):("string"==typeof u&&u.endsWith("!important")&&(u=u.slice(0,-10),d|=Gn.Important),r.setStyle(c,l,u,d))}}(l,p,Gl(fn(),c),u,d))}function im(r,s,c,l,u,d){const p=null===s;let _;for(;u>0;){const M=r[u],b=Array.isArray(M),x=b?M[1]:M,k=null===x;let N=c[u+1];N===zt&&(N=k?St:void 0);let Q=k?lg(N,l):x===l?N:void 0;if(b&&!_a(Q)&&(Q=lg(M,l)),_a(Q)&&(_=Q,p))return _;const nt=r[u+1];u=p?$n(nt):Xi(nt)}if(null!==s){let M=d?s.residualClasses:s.residualStyles;null!=M&&(_=lg(M,l))}return _}function _a(r){return void 0!==r}function va(r,s){return 0!=(r.flags&(s?16:32))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Qr(r,s=""){const c=dt(),l=ne(),u=r+22,d=l.firstCreatePass?Ue(l,u,1,s,null):l.data[u],p=c[u]=function Pf(r,s){return r.createText(s)}(c[11],s);qs(l,c,p,d),li(d,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Nu(r){return Ca("",r,""),Nu}function Ca(r,s,c){const l=dt(),u=Zr(l,r,s,c);return u!==zt&&Ii(l,fn(),u),Ca}function Fu(r,s,c,l,u){const d=dt(),p=function ro(r,s,c,l,u,d){const _=Nr(r,qi(),c,u);return Ji(2),_?s+gt(c)+l+gt(u)+d:zt}(d,r,s,c,l,u);return p!==zt&&Ii(d,fn(),p),Fu}function om(r,s,c,l,u,d,p){const _=dt(),M=function Rr(r,s,c,l,u,d,p,_){const b=Fr(r,qi(),c,u,p);return Ji(3),b?s+gt(c)+l+gt(u)+d+gt(p)+_:zt}(_,r,s,c,l,u,d,p);return M!==zt&&Ii(_,fn(),M),om}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Wc(r,s,c){Un(pn,Wn,Zr(dt(),r,s,c),!0)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const m=void 0;var gy=["en",[["a","p"],["AM","PM"],m],[["AM","PM"],m,m],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],m,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],m,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",m,"{1} 'at' {0}",m],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function j(r){const c=Math.floor(Math.abs(r)),l=r.toString().replace(/^[^.]*\.?/,"").length;return 1===c&&0===l?1:5}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Fi={};function Yr(r){const s=function dy(r){return r.toLowerCase().replace(/_/g,"-")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(r);let c=Zi(s);if(c)return c;const l=s.split("-")[0];if(c=Zi(l),c)return c;if("en"===l)return gy;throw new Ct(701,!1)}function fm(r){return Yr(r)[Tt.PluralCase]}function Zi(r){return r in Fi||(Fi[r]=ce.ng&&ce.ng.common&&ce.ng.common.locales&&ce.ng.common.locales[r]),Fi[r]}var Tt=(()=>((Tt=Tt||{})[Tt.LocaleId=0]="LocaleId",Tt[Tt.DayPeriodsFormat=1]="DayPeriodsFormat",Tt[Tt.DayPeriodsStandalone=2]="DayPeriodsStandalone",Tt[Tt.DaysFormat=3]="DaysFormat",Tt[Tt.DaysStandalone=4]="DaysStandalone",Tt[Tt.MonthsFormat=5]="MonthsFormat",Tt[Tt.MonthsStandalone=6]="MonthsStandalone",Tt[Tt.Eras=7]="Eras",Tt[Tt.FirstDayOfWeek=8]="FirstDayOfWeek",Tt[Tt.WeekendRange=9]="WeekendRange",Tt[Tt.DateFormat=10]="DateFormat",Tt[Tt.TimeFormat=11]="TimeFormat",Tt[Tt.DateTimeFormat=12]="DateTimeFormat",Tt[Tt.NumberSymbols=13]="NumberSymbols",Tt[Tt.NumberFormats=14]="NumberFormats",Tt[Tt.CurrencyCode=15]="CurrencyCode",Tt[Tt.CurrencySymbol=16]="CurrencySymbol",Tt[Tt.CurrencyName=17]="CurrencyName",Tt[Tt.Currencies=18]="Currencies",Tt[Tt.Directionality=19]="Directionality",Tt[Tt.PluralCase=20]="PluralCase",Tt[Tt.ExtraData=21]="ExtraData",Tt))();const No="en-US";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Fo=No;function td(r,s,c,l,u){if(r=W(r),Array.isArray(r))for(let d=0;d<r.length;d++)td(r[d],s,c,l,u);else{const d=ne(),p=dt();let _=Cr(r)?r:W(r.provide),M=bC(r);const b=Ge(),x=1048575&b.providerIndexes,k=b.directiveStart,N=b.providerIndexes>>20;if(Cr(r)||!r.multi){const Q=new Os(M,u,Ar),nt=nd(_,s,u?x:x+N,k);-1===nt?(ig(ar(b,p),d,_),ed(d,r,s.length),s.push(_),b.directiveStart++,b.directiveEnd++,u&&(b.providerIndexes+=1048576),c.push(Q),p.push(Q)):(c[nt]=Q,p[nt]=Q)}else{const Q=nd(_,s,x+N,k),nt=nd(_,s,x,x+N),ht=Q>=0&&c[Q],pt=nt>=0&&c[nt];if(u&&!pt||!u&&!ht){ig(ar(b,p),d,_);const Mt=function Zy(r,s,c,l,u){const d=new Os(r,c,Ar);return d.multi=[],d.index=s,d.componentProviders=0,Im(d,u,l&&!c),d}(u?Fy:Ny,c.length,u,l,M);!u&&pt&&(c[nt].providerFactory=Mt),ed(d,r,s.length,0),s.push(_),b.directiveStart++,b.directiveEnd++,u&&(b.providerIndexes+=1048576),c.push(Mt),p.push(Mt)}else ed(d,r,Q>-1?Q:nt,Im(c[u?nt:Q],M,!u&&l));!u&&l&&pt&&c[nt].componentProviders++}}}function ed(r,s,c,l){const u=Cr(s),d=function bO(r){return!!r.useClass}(s);if(u||d){const M=(d?W(s.useClass):s).prototype.ngOnDestroy;if(M){const b=r.destroyHooks||(r.destroyHooks=[]);if(!u&&s.multi){const x=b.indexOf(c);-1===x?b.push(c,[l,M]):b[x+1].push(l,M)}else b.push(c,M)}}}function Im(r,s,c){return c&&r.componentProviders++,r.multi.push(s)-1}function nd(r,s,c,l){for(let u=c;u<l;u++)if(s[u]===r)return u;return-1}function Ny(r,s,c,l){return id(this.multi,[])}function Fy(r,s,c,l){const u=this.multi;let d;if(this.providerFactory){const p=this.providerFactory.componentProviders,_=ac(c,c[1],this.providerFactory.index,l);d=_.slice(0,p),id(u,d);for(let M=p;M<_.length;M++)d.push(_[M])}else d=[],id(u,d);return d}function id(r,s){for(let c=0;c<r.length;c++)s.push((0,r[c])());return s}function od(r,s=[]){return c=>{c.providersResolver=(l,u)=>
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ly(r,s,c){const l=ne();if(l.firstCreatePass){const u=Hn(r);td(c,l.data,l.blueprint,u,!0),td(s,l.data,l.blueprint,u,!1)}}(l,u?u(r):r,s)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ts{}class rd{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function sd(r,s){return new pi(r,s??null)}class pi extends ts{constructor(s,c){super(),this._parent=c,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new uu(this);const l=Pn(s);this._bootstrapComponents=di(l.bootstrap),this._r3Injector=Jf(s,c,[{provide:ts,useValue:this},{provide:vc,useValue:this.componentFactoryResolver}],F(s),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(s)}get injector(){return this._r3Injector}destroy(){const s=this._r3Injector;!s.destroyed&&s.destroy(),this.destroyCbs.forEach(c=>c()),this.destroyCbs=null}onDestroy(s){this.destroyCbs.push(s)}}class ho extends rd{constructor(s){super(),this.moduleType=s}create(s){return new pi(this.moduleType,s)}}class Nm extends ts{constructor(s,c,l){super(),this.componentFactoryResolver=new uu(this),this.instance=null;const u=new yC([...s,{provide:ts,useValue:this},{provide:vc,useValue:this.componentFactoryResolver}],c||Pg(),l,new Set(["environment"]));this.injector=u,u.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(s){this.injector.onDestroy(s)}}function al(r,s,c=null){return new Nm(r,s,c).injector}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ry=(()=>{class r{constructor(c){this._injector=c,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(c){if(!c.standalone)return null;if(!this.cachedInjectors.has(c.id)){const l=_C(0,c.type),u=l.length>0?al([l],this._injector,`Standalone[${c.type.name}]`):null;this.cachedInjectors.set(c.id,u)}return this.cachedInjectors.get(c.id)}ngOnDestroy(){try{for(const c of this.cachedInjectors.values())null!==c&&c.destroy()}finally{this.cachedInjectors.clear()}}}return r.\u0275prov=gn({token:r,providedIn:"environment",factory:()=>new r(Pe(Mr))}),r})();function fo(r){r.getStandaloneInjector=s=>s.get(Ry).getOrCreateStandaloneInjector(r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ns(r,s,c){const l=bn()+r,u=dt();return u[l]===zt?on(u,l,c?s.call(c):s()):Lr(u,l)}function wa(r,s,c,l){return hl(dt(),bn(),r,s,c,l)}function gl(r,s,c,l,u){return qm(dt(),bn(),r,s,c,l,u)}function jm(r,s,c,l,u,d){return Jm(dt(),bn(),r,s,c,l,u,d)}function Hm(r,s,c,l,u,d,p){return function Bm(r,s,c,l,u,d,p,_,M){const b=s+c;return Rn(r,b,u,d,p,_)?on(r,b+4,M?l.call(M,u,d,p,_):l(u,d,p,_)):dl(r,b+4)}(dt(),bn(),r,s,c,l,u,d,p)}function ul(r,s,c,l,u,d,p,_){const M=bn()+r,b=dt(),x=Rn(b,M,c,l,u,d);return Cn(b,M+4,p)||x?on(b,M+5,_?s.call(_,c,l,u,d,p):s(c,l,u,d,p)):Lr(b,M+5)}function ud(r,s,c,l,u,d,p,_,M){const b=bn()+r,x=dt(),k=Rn(x,b,c,l,u,d);return Nr(x,b+4,p,_)||k?on(x,b+6,M?s.call(M,c,l,u,d,p,_):s(c,l,u,d,p,_)):Lr(x,b+6)}function qy(r,s,c,l){return function fl(r,s,c,l,u,d){let p=s+c,_=!1;for(let M=0;M<u.length;M++)Cn(r,p++,u[M])&&(_=!0);return _?on(r,p,l.apply(d,u)):dl(r,p)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(dt(),bn(),r,s,c,l)}function dl(r,s){const c=r[s];return c===zt?void 0:c}function hl(r,s,c,l,u,d){const p=s+c;return Cn(r,p,u)?on(r,p+1,d?l.call(d,u):l(u)):dl(r,p+1)}function qm(r,s,c,l,u,d,p){const _=s+c;return Nr(r,_,u,d)?on(r,_+2,p?l.call(p,u,d):l(u,d)):dl(r,_+2)}function Jm(r,s,c,l,u,d,p,_){const M=s+c;return Fr(r,M,u,d,p)?on(r,M+3,_?l.call(_,u,d,p):l(u,d,p)):dl(r,M+3)}function An(r,s){const c=ne();let l;const u=r+22;c.firstCreatePass?(l=function zm(r,s){if(s)for(let c=s.length-1;c>=0;c--){const l=s[c];if(r===l.name)return l}}(s,c.pipeRegistry),c.data[u]=l,l.onDestroy&&(c.destroyHooks||(c.destroyHooks=[])).push(u,l.onDestroy)):l=c.data[u];const d=l.factory||(l.factory=wi(l.type)),p=Sn(Ar);try{const _=Ds(!1),M=d();return Ds(_),function _u(r,s,c,l){c>=r.data.length&&(r.data[c]=null,r.blueprint[c]=null),s[c]=l}(c,dt(),u,M),M}finally{Sn(p)}}function Qm(r,s,c){const l=r+22,u=dt(),d=_s(u,l);return Da(u,l)?hl(u,bn(),s,d.transform,c,d):d.transform(c)}function Gm(r,s,c,l){const u=r+22,d=dt(),p=_s(d,u);return Da(d,u)?qm(d,bn(),s,p.transform,c,l,p):p.transform(c,l)}function dd(r,s,c,l,u){const d=r+22,p=dt(),_=_s(p,d);return Da(p,d)?Jm(p,bn(),s,_.transform,c,l,u,_):_.transform(c,l,u)}function Da(r,s){return r[1].data[s].pure}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function qo(r){return s=>{setTimeout(r,void 0,s)}}const mi=class is extends t.x{constructor(s=!1){super(),this.__isAsync=s}emit(s){super.next(s)}subscribe(s,c,l){let u=s,d=c||(()=>null),p=l;if(s&&"object"==typeof s){const M=s;u=M.next?.bind(M),d=M.error?.bind(M),p=M.complete?.bind(M)}this.__isAsync&&(d=qo(d),u&&(u=qo(u)),p&&(p=qo(p)));const _=super.subscribe({next:u,error:d,complete:p});return s instanceof V.w0&&s.add(_),_}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function By(){return this._results[io()]()}class Jo{constructor(s=!1){this._emitDistinctChangesOnly=s,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const c=io(),l=Jo.prototype;l[c]||(l[c]=By)}get changes(){return this._changes||(this._changes=new mi)}get(s){return this._results[s]}map(s){return this._results.map(s)}filter(s){return this._results.filter(s)}find(s){return this._results.find(s)}reduce(s,c){return this._results.reduce(s,c)}forEach(s){this._results.forEach(s)}some(s){return this._results.some(s)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(s,c){const l=this;l.dirty=!1;const u=Ye(s);(this._changesDetected=!function Gt(r,s,c){if(r.length!==s.length)return!1;for(let l=0;l<r.length;l++){let u=r[l],d=s[l];if(c&&(u=c(u),d=c(d)),d!==u)return!1}return!0}(l._results,u,c))&&(l._results=u,l.length=u.length,l.last=u[this.length-1],l.first=u[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ri=(()=>{class r{}return r.__NG_ELEMENT_ID__=Gy,r})();const zy=Ri,Qy=class extends zy{constructor(s,c,l){super(),this._declarationLView=s,this._declarationTContainer=c,this.elementRef=l}createEmbeddedView(s,c){const l=this._declarationTContainer.tViews,u=Lc(this._declarationLView,l,s,16,null,l.declTNode,null,null,null,null,c||null);u[17]=this._declarationLView[this._declarationTContainer.index];const p=this._declarationLView[19];return null!==p&&(u[19]=p.createEmbeddedView(l)),cp(l,u,s),new je(u)}};function Gy(){return _l(Ge(),dt())}function _l(r,s){return 4&r.type?new Qy(s,r,Us(r,s)):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let vl=(()=>{class r{}return r.__NG_ELEMENT_ID__=Yy,r})();function Yy(){return Bo(Ge(),dt())}const jP=vl,Ym=class extends jP{constructor(s,c,l){super(),this._lContainer=s,this._hostTNode=c,this._hostLView=l}get element(){return Us(this._hostTNode,this._hostLView)}get injector(){return new cr(this._hostTNode,this._hostLView)}get parentInjector(){const s=sc(this._hostTNode,this._hostLView);if(Sh(s)){const c=ws(s,this._hostLView),l=sr(s);return new cr(c[1].data[l+8],c)}return new cr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(s){const c=Cl(this._lContainer);return null!==c&&c[s]||null}get length(){return this._lContainer.length-10}createEmbeddedView(s,c,l){let u,d;"number"==typeof l?u=l:null!=l&&(u=l.index,d=l.injector);const p=s.createEmbeddedView(c||{},d);return this.insert(p,u),p}createComponent(s,c,l,u,d){const p=s&&!function Te(r){return"function"==typeof r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(s);let _;if(p)_=c;else{const k=c||{};_=k.index,l=k.injector,u=k.projectableNodes,d=k.environmentInjector||k.ngModuleRef}const M=p?s:new Ir(ge(s)),b=l||this.parentInjector;if(!d&&null==M.ngModule){const N=(p?b:this.parentInjector).get(Mr,null);N&&(d=N)}const x=M.create(b,u,void 0,d);return this.insert(x.hostView,_),x}insert(s,c){const l=s._lView,u=l[1];if(function Fb(r){return ai(r[3])}(l)){const x=this.indexOf(s);if(-1!==x)this.detach(x);else{const k=l[3],N=new Ym(k,k[6],k[3]);N.detach(N.indexOf(s))}}const d=this._adjustIndex(c),p=this._lContainer;!function cP(r,s,c,l){const u=10+l,d=c.length;l>0&&(c[u-1][4]=s),l<d-10?(s[4]=c[u],At(c,10+l,s)):(c.push(s),s[4]=null),s[3]=c;const p=s[17];null!==p&&c!==p&&function Df(r,s){const c=r[9];s[16]!==s[3][3][16]&&(r[2]=!0),null===c?r[9]=[s]:c.push(s)}(p,s);const _=s[19];null!==_&&_.insertView(r),s[2]|=64}(u,l,p,d);const _=Ig(d,p),M=l[11],b=yc(M,p[7]);return null!==b&&function rP(r,s,c,l,u,d){l[0]=u,l[6]=s,Bs(r,l,c,1,u,d)}(u,p[6],M,l,b,_),s.attachToViewContainerRef(),At(os(p),d,s),s}move(s,c){return this.insert(s,c)}indexOf(s){const c=Cl(this._lContainer);return null!==c?c.indexOf(s):-1}remove(s){const c=this._adjustIndex(s,-1),l=Tg(this._lContainer,c);l&&($e(os(this._lContainer),c),Af(l[1],l))}detach(s){const c=this._adjustIndex(s,-1),l=Tg(this._lContainer,c);return l&&null!=$e(os(this._lContainer),c)?new je(l):null}_adjustIndex(s,c=0){return s??this.length+c}};function Cl(r){return r[8]}function os(r){return r[8]||(r[8]=[])}function Bo(r,s){let c;const l=s[r.index];if(ai(l))c=l;else{let u;if(8&r.type)u=Ne(l);else{const d=s[11];u=d.createComment("");const p=ue(r,s);Ki(d,yc(d,p),u,function gP(r,s){return r.nextSibling(s)}(d,p),!1)}s[r.index]=c=cu(l,s,u,r),Zc(s,c)}return new Ym(c,r,s)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class hd{constructor(s){this.queryList=s,this.matches=null}clone(){return new hd(this.queryList)}setDirty(){this.queryList.setDirty()}}class fd{constructor(s=[]){this.queries=s}createEmbeddedView(s){const c=s.queries;if(null!==c){const l=null!==s.contentQueries?s.contentQueries[0]:c.length,u=[];for(let d=0;d<l;d++){const p=c.getByIndex(d);u.push(this.queries[p.indexInDeclarationView].clone())}return new fd(u)}return null}insertView(s){this.dirtyQueriesWithMatches(s)}detachView(s){this.dirtyQueriesWithMatches(s)}dirtyQueriesWithMatches(s){for(let c=0;c<this.queries.length;c++)null!==Ea(s,c).matches&&this.queries[c].setDirty()}}class $m{constructor(s,c,l=null){this.predicate=s,this.flags=c,this.read=l}}class pd{constructor(s=[]){this.queries=s}elementStart(s,c){for(let l=0;l<this.queries.length;l++)this.queries[l].elementStart(s,c)}elementEnd(s){for(let c=0;c<this.queries.length;c++)this.queries[c].elementEnd(s)}embeddedTView(s){let c=null;for(let l=0;l<this.length;l++){const u=null!==c?c.length:0,d=this.getByIndex(l).embeddedTView(s,u);d&&(d.indexInDeclarationView=l,null!==c?c.push(d):c=[d])}return null!==c?new pd(c):null}template(s,c){for(let l=0;l<this.queries.length;l++)this.queries[l].template(s,c)}getByIndex(s){return this.queries[s]}get length(){return this.queries.length}track(s){this.queries.push(s)}}class md{constructor(s,c=-1){this.metadata=s,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=c}elementStart(s,c){this.isApplyingToNode(c)&&this.matchTNode(s,c)}elementEnd(s){this._declarationNodeIndex===s.index&&(this._appliesToNextNode=!1)}template(s,c){this.elementStart(s,c)}embeddedTView(s,c){return this.isApplyingToNode(s)?(this.crossesNgTemplate=!0,this.addMatch(-s.index,c),new md(this.metadata)):null}isApplyingToNode(s){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const c=this._declarationNodeIndex;let l=s.parent;for(;null!==l&&8&l.type&&l.index!==c;)l=l.parent;return c===(null!==l?l.index:-1)}return this._appliesToNextNode}matchTNode(s,c){const l=this.metadata.predicate;if(Array.isArray(l))for(let u=0;u<l.length;u++){const d=l[u];this.matchTNodeWithReadOption(s,c,Wy(c,d)),this.matchTNodeWithReadOption(s,c,rg(c,s,d,!1,!1))}else l===Ri?4&c.type&&this.matchTNodeWithReadOption(s,c,-1):this.matchTNodeWithReadOption(s,c,rg(c,s,l,!1,!1))}matchTNodeWithReadOption(s,c,l){if(null!==l){const u=this.metadata.read;if(null!==u)if(u===Cc||u===vl||u===Ri&&4&c.type)this.addMatch(c.index,-2);else{const d=rg(c,s,u,!1,!1);null!==d&&this.addMatch(c.index,d)}else this.addMatch(c.index,l)}}addMatch(s,c){null===this.matches?this.matches=[s,c]:this.matches.push(s,c)}}function Wy(r,s){const c=r.localNames;if(null!==c)for(let l=0;l<c.length;l+=2)if(c[l]===s)return c[l+1];return null}function Xy(r,s,c,l){return-1===c?function Km(r,s){return 11&r.type?Us(r,s):4&r.type?_l(r,s):null}(s,r):-2===c?function _d(r,s,c){return c===Cc?Us(s,r):c===Ri?_l(s,r):c===vl?Bo(s,r):void 0}(r,s,l):ac(r,r[1],c,s)}function vd(r,s,c,l){const u=s[19].queries[l];if(null===u.matches){const d=r.data,p=c.matches,_=[];for(let M=0;M<p.length;M+=2){const b=p[M];_.push(b<0?null:Xy(s,d[b],p[M+1],c.metadata.read))}u.matches=_}return u.matches}function ka(r,s,c,l){const u=r.queries.getByIndex(c),d=u.matches;if(null!==d){const p=vd(r,s,u,c);for(let _=0;_<d.length;_+=2){const M=d[_];if(M>0)l.push(p[_/2]);else{const b=d[_+1],x=s[-M];for(let k=10;k<x.length;k++){const N=x[k];N[17]===N[3]&&ka(N[1],N,b,l)}if(null!==x[9]){const k=x[9];for(let N=0;N<k.length;N++){const Q=k[N];ka(Q[1],Q,b,l)}}}}}return l}function Aa(r){const s=dt(),c=ne(),l=xv();yh(l+1);const u=Ea(c,l);if(r.dirty&&function fv(r){return 4==(4&r[2])}(s)===(2==(2&u.metadata.flags))){if(null===u.matches)r.reset([]);else{const d=u.crossesNgTemplate?ka(c,s,l,[]):vd(c,s,u,l);r.reset(d,LO),r.notifyOnChanges()}return!0}return!1}function Wm(r,s,c){const l=ne();l.firstCreatePass&&(Cd(l,new $m(r,s,c),-1),2==(2&s)&&(l.staticViewQueries=!0)),Ta(l,dt(),s)}function Xm(r,s,c,l){const u=ne();if(u.firstCreatePass){const d=Ge();Cd(u,new $m(s,c,l),d.index),function e_(r,s){const c=r.contentQueries||(r.contentQueries=[]);s!==(c.length?c[c.length-1]:-1)&&c.push(r.queries.length-1,s)}(u,r),2==(2&c)&&(u.staticContentQueries=!0)}Ta(u,dt(),c)}function t_(){return function t1(r,s){return r[19].queries[s].queryList}(dt(),xv())}function Ta(r,s,c){const l=new Jo(4==(4&c));en(r,s,l,l.destroy),null===s[19]&&(s[19]=new fd),s[19].queries.push(new hd(l))}function Cd(r,s,c){null===r.queries&&(r.queries=new pd),r.queries.track(new md(s,c))}function Ea(r,s){return r.queries.getByIndex(s)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function kd(...r){}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ol=new fe("Application Initializer");let Na=(()=>{class r{constructor(c){this.appInits=c,this.resolve=kd,this.reject=kd,this.initialized=!1,this.done=!1,this.donePromise=new Promise((l,u)=>{this.resolve=l,this.reject=u})}runInitializers(){if(this.initialized)return;const c=[],l=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let u=0;u<this.appInits.length;u++){const d=this.appInits[u]();if(Hr(d))c.push(d);else if(da(d)){const p=new Promise((_,M)=>{d.subscribe({complete:_,error:M})});c.push(p)}}Promise.all(c).then(()=>{l()}).catch(u=>{this.reject(u)}),0===c.length&&l(),this.initialized=!0}}return r.\u0275fac=function(c){return new(c||r)(Pe(Ol,8))},r.\u0275prov=gn({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Fa=new fe("AppId",{providedIn:"root",factory:function y1(){return`${mo()}${mo()}${mo()}`}});function mo(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const Pl=new fe("Platform Initializer"),$P=new fe("Platform ID",{providedIn:"platform",factory:()=>"unknown"}),Ad=new fe("appBootstrapListener"),Td=new fe("AnimationModuleType");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let P1=(()=>{class r{log(c){console.log(c)}warn(c){console.warn(c)}}return r.\u0275fac=function(c){return new(c||r)},r.\u0275prov=gn({token:r,factory:r.\u0275fac,providedIn:"platform"}),r})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const xl=new fe("LocaleId",{providedIn:"root",factory:()=>Bh(xl,qt.Optional|qt.SkipSelf)||function x1(){return typeof $localize<"u"&&$localize.locale||No}()}),v_=new fe("DefaultCurrencyCode",{providedIn:"root",factory:()=>"USD"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class WP{constructor(s,c){this.ngModuleFactory=s,this.componentFactories=c}}let C_=(()=>{class r{compileModuleSync(c){return new ho(c)}compileModuleAsync(c){return Promise.resolve(this.compileModuleSync(c))}compileModuleAndAllComponentsSync(c){const l=this.compileModuleSync(c),d=di(Pn(c).declarations).reduce((p,_)=>{const M=ge(_);return M&&p.push(new Ir(M)),p},[]);return new WP(l,d)}compileModuleAndAllComponentsAsync(c){return Promise.resolve(this.compileModuleAndAllComponentsSync(c))}clearCache(){}clearCacheFor(c){}getModuleId(c){}}return r.\u0275fac=function(c){return new(c||r)},r.\u0275prov=gn({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const D1=(()=>Promise.resolve(0))();function wl(r){typeof Zone>"u"?D1.then(()=>{r&&r.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ni{constructor({enableLongStackTrace:s=!1,shouldCoalesceEventChangeDetection:c=!1,shouldCoalesceRunChangeDetection:l=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new mi(!1),this.onMicrotaskEmpty=new mi(!1),this.onStable=new mi(!1),this.onError=new mi(!1),typeof Zone>"u")throw new Ct(908,!1);Zone.assertZonePatched();const u=this;if(u._nesting=0,u._outer=u._inner=Zone.current,Zone.AsyncStackTaggingZoneSpec){const d=Zone.AsyncStackTaggingZoneSpec;u._inner=u._inner.fork(new d("Angular"))}Zone.TaskTrackingZoneSpec&&(u._inner=u._inner.fork(new Zone.TaskTrackingZoneSpec)),s&&Zone.longStackTraceZoneSpec&&(u._inner=u._inner.fork(Zone.longStackTraceZoneSpec)),u.shouldCoalesceEventChangeDetection=!l&&c,u.shouldCoalesceRunChangeDetection=l,u.lastRequestAnimationFrameId=-1,u.nativeRequestAnimationFrame=function k1(){let r=ce.requestAnimationFrame,s=ce.cancelAnimationFrame;if(typeof Zone<"u"&&r&&s){const c=r[Zone.__symbol__("OriginalDelegate")];c&&(r=c);const l=s[Zone.__symbol__("OriginalDelegate")];l&&(s=l)}return{nativeRequestAnimationFrame:r,nativeCancelAnimationFrame:s}}().nativeRequestAnimationFrame,function Pt(r){const s=()=>{!function ii(r){r.isCheckStableRunning||-1!==r.lastRequestAnimationFrameId||(r.lastRequestAnimationFrameId=r.nativeRequestAnimationFrame.call(ce,()=>{r.fakeTopEventTask||(r.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{r.lastRequestAnimationFrameId=-1,Ce(r),r.isCheckStableRunning=!0,Sd(r),r.isCheckStableRunning=!1},void 0,()=>{},()=>{})),r.fakeTopEventTask.invoke()}),Ce(r))}(r)};r._inner=r._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(c,l,u,d,p,_)=>{try{return Me(r),c.invokeTask(u,d,p,_)}finally{(r.shouldCoalesceEventChangeDetection&&"eventTask"===d.type||r.shouldCoalesceRunChangeDetection)&&s(),Za(r)}},onInvoke:(c,l,u,d,p,_,M)=>{try{return Me(r),c.invoke(u,d,p,_,M)}finally{r.shouldCoalesceRunChangeDetection&&s(),Za(r)}},onHasTask:(c,l,u,d)=>{c.hasTask(u,d),l===u&&("microTask"==d.change?(r._hasPendingMicrotasks=d.microTask,Ce(r),Sd(r)):"macroTask"==d.change&&(r.hasPendingMacrotasks=d.macroTask))},onHandleError:(c,l,u,d)=>(c.handleError(u,d),r.runOutsideAngular(()=>r.onError.emit(d)),!1)})}(u)}static isInAngularZone(){return typeof Zone<"u"&&!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!ni.isInAngularZone())throw new Ct(909,!1)}static assertNotInAngularZone(){if(ni.isInAngularZone())throw new Ct(909,!1)}run(s,c,l){return this._inner.run(s,c,l)}runTask(s,c,l,u){const d=this._inner,p=d.scheduleEventTask("NgZoneEvent: "+u,s,A1,kd,kd);try{return d.runTask(p,c,l)}finally{d.cancelTask(p)}}runGuarded(s,c,l){return this._inner.runGuarded(s,c,l)}runOutsideAngular(s){return this._outer.run(s)}}const A1={};function Sd(r){if(0==r._nesting&&!r.hasPendingMicrotasks&&!r.isStable)try{r._nesting++,r.onMicrotaskEmpty.emit(null)}finally{if(r._nesting--,!r.hasPendingMicrotasks)try{r.runOutsideAngular(()=>r.onStable.emit(null))}finally{r.isStable=!0}}}function Ce(r){r.hasPendingMicrotasks=!!(r._hasPendingMicrotasks||(r.shouldCoalesceEventChangeDetection||r.shouldCoalesceRunChangeDetection)&&-1!==r.lastRequestAnimationFrameId)}function Me(r){r._nesting++,r.isStable&&(r.isStable=!1,r.onUnstable.emit(null))}function Za(r){r._nesting--,Sd(r)}class Tn{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new mi,this.onMicrotaskEmpty=new mi,this.onStable=new mi,this.onError=new mi}run(s,c,l){return s.apply(c,l)}runGuarded(s,c,l){return s.apply(c,l)}runOutsideAngular(s){return s()}runTask(s,c,l,u){return s.apply(c,l)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const le=new fe(""),De=new fe("");let Id,Ut=(()=>{class r{constructor(c,l,u){this._ngZone=c,this.registry=l,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,Id||(function T1(r){Id=r}(u),u.addToWindow(l)),this._watchAngularEvents(),c.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{ni.assertNotInAngularZone(),wl(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())wl(()=>{for(;0!==this._callbacks.length;){let c=this._callbacks.pop();clearTimeout(c.timeoutId),c.doneCb(this._didWork)}this._didWork=!1});else{let c=this.getPendingTasks();this._callbacks=this._callbacks.filter(l=>!l.updateCb||!l.updateCb(c)||(clearTimeout(l.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(c=>({source:c.source,creationLocation:c.creationLocation,data:c.data})):[]}addCallback(c,l,u){let d=-1;l&&l>0&&(d=setTimeout(()=>{this._callbacks=this._callbacks.filter(p=>p.timeoutId!==d),c(this._didWork,this.getPendingTasks())},l)),this._callbacks.push({doneCb:c,timeoutId:d,updateCb:u})}whenStable(c,l,u){if(u&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(c,l,u),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(c){this.registry.registerApplication(c,this)}unregisterApplication(c){this.registry.unregisterApplication(c)}findProviders(c,l,u){return[]}}return r.\u0275fac=function(c){return new(c||r)(Pe(ni),Pe(O_),Pe(De))},r.\u0275prov=gn({token:r,factory:r.\u0275fac}),r})(),O_=(()=>{class r{constructor(){this._applications=new Map}registerApplication(c,l){this._applications.set(c,l)}unregisterApplication(c){this._applications.delete(c)}unregisterAllApplications(){this._applications.clear()}getTestability(c){return this._applications.get(c)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(c,l=!0){return Id?.findTestabilityInTree(this,c,l)??null}}return r.\u0275fac=function(c){return new(c||r)},r.\u0275prov=gn({token:r,factory:r.\u0275fac,providedIn:"platform"}),r})(),_o=null;const Ra=new fe("AllowMultipleToken"),Ld=new fe("PlatformDestroyListeners");class Ui{constructor(s,c){this.name=s,this.token=c}}function x_(r,s,c=[]){const l=`Platform: ${s}`,u=new fe(l);return(d=[])=>{let p=Ft();if(!p||p.injector.get(Ra,!1)){const _=[...c,...d,{provide:u,useValue:!0}];r?r(_):function Fd(r){if(_o&&!_o.get(Ra,!1))throw new Ct(400,!1);_o=r;const s=r.get(vo);(function P_(r){const s=r.get(Pl,null);s&&s.forEach(c=>c())})(r)}(function Mi(r=[],s){return Ti.create({name:s,providers:[{provide:nf,useValue:"platform"},{provide:Ld,useValue:new Set([()=>_o=null])},...r]})}(_,l))}return function ke(r){const s=Ft();if(!s)throw new Ct(401,!1);return s}()}}function Ft(){return _o?.get(vo)??null}let vo=(()=>{class r{constructor(c){this._injector=c,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(c,l){const u=function D_(r,s){let c;return c="noop"===r?new Tn:("zone.js"===r?void 0:r)||new ni(s),c}(l?.ngZone,function w_(r){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!(!r||!r.ngZoneEventCoalescing)||!1,shouldCoalesceRunChangeDetection:!(!r||!r.ngZoneRunCoalescing)||!1}}(l)),d=[{provide:ni,useValue:u}];return u.run(()=>{const p=Ti.create({providers:d,parent:this.injector,name:c.moduleType.name}),_=c.create(p),M=_.injector.get(Mc,null);if(!M)throw new Ct(402,!1);return u.runOutsideAngular(()=>{const b=u.onError.subscribe({next:x=>{M.handleError(x)}});_.onDestroy(()=>{kl(this._modules,_),b.unsubscribe()})}),function k_(r,s,c){try{const l=c();return Hr(l)?l.catch(u=>{throw s.runOutsideAngular(()=>r.handleError(u)),u}):l}catch(l){throw s.runOutsideAngular(()=>r.handleError(l)),l}}(M,u,()=>{const b=_.injector.get(Na);return b.runInitializers(),b.donePromise.then(()=>(function mm(r){Ot(r,"Expected localeId to be defined"),"string"==typeof r&&(Fo=r.toLowerCase().replace(/_/g,"-"))}(_.injector.get(xl,No)||No),this._moduleDoBootstrap(_),_))})})}bootstrapModule(c,l=[]){const u=A_({},l);return function Dt(r,s,c){const l=new ho(c);return Promise.resolve(l)}(0,0,c).then(d=>this.bootstrapModuleFactory(d,u))}_moduleDoBootstrap(c){const l=c.injector.get(Dl);if(c._bootstrapComponents.length>0)c._bootstrapComponents.forEach(u=>l.bootstrap(u));else{if(!c.instance.ngDoBootstrap)throw new Ct(403,!1);c.instance.ngDoBootstrap(l)}this._modules.push(c)}onDestroy(c){this._destroyListeners.push(c)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Ct(404,!1);this._modules.slice().forEach(l=>l.destroy()),this._destroyListeners.forEach(l=>l());const c=this._injector.get(Ld,null);c&&(c.forEach(l=>l()),c.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}}return r.\u0275fac=function(c){return new(c||r)(Pe(Ti))},r.\u0275prov=gn({token:r,factory:r.\u0275fac,providedIn:"platform"}),r})();function A_(r,s){return Array.isArray(s)?s.reduce(A_,r):{...r,...s}}let Dl=(()=>{class r{constructor(c,l,u){this._zone=c,this._injector=l,this._exceptionHandler=u,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this._destroyed=!1,this._destroyListeners=[],this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const d=new B.y(_=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{_.next(this._stable),_.complete()})}),p=new B.y(_=>{let M;this._zone.runOutsideAngular(()=>{M=this._zone.onStable.subscribe(()=>{ni.assertNotInAngularZone(),wl(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,_.next(!0))})})});const b=this._zone.onUnstable.subscribe(()=>{ni.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{_.next(!1)}))});return()=>{M.unsubscribe(),b.unsubscribe()}});this.isStable=(0,$.T)(d,p.pipe(function S(r={}){const{connector:s=(()=>new t.x),resetOnError:c=!0,resetOnComplete:l=!0,resetOnRefCountZero:u=!0}=r;return d=>{let p,_,M,b=0,x=!1,k=!1;const N=()=>{_?.unsubscribe(),_=void 0},Q=()=>{N(),p=M=void 0,x=k=!1},nt=()=>{const ht=p;Q(),ht?.unsubscribe()};return(0,w.e)((ht,pt)=>{b++,!k&&!x&&N();const Mt=M=M??s();pt.add(()=>{b--,0===b&&!k&&!x&&(_=U(nt,u))}),Mt.subscribe(pt),!p&&b>0&&(p=new rt.Hp({next:Et=>Mt.next(Et),error:Et=>{k=!0,N(),_=U(Q,c,Et),Mt.error(Et)},complete:()=>{x=!0,N(),_=U(Q,l),Mt.complete()}}),(0,H.Xf)(ht).subscribe(p))})(d)}}()))}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(c,l){const u=c instanceof OC;if(!this._injector.get(Na).done)throw!u&&si(c),new Ct(405,false);let p;p=u?c:this._injector.get(vc).resolveComponentFactory(c),this.componentTypes.push(p.componentType);const _=function En(r){return r.isBoundToModule}(p)?void 0:this._injector.get(ts),b=p.create(Ti.NULL,[],l||p.selector,_),x=b.location.nativeElement,k=b.injector.get(le,null);return k?.registerApplication(x),b.onDestroy(()=>{this.detachView(b.hostView),kl(this.components,b),k?.unregisterApplication(x)}),this._loadComponent(b),b}tick(){if(this._runningTick)throw new Ct(101,!1);try{this._runningTick=!0;for(let c of this._views)c.detectChanges()}catch(c){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(c))}finally{this._runningTick=!1}}attachView(c){const l=c;this._views.push(l),l.attachToAppRef(this)}detachView(c){const l=c;kl(this._views,l),l.detachFromAppRef()}_loadComponent(c){this.attachView(c.hostView),this.tick(),this.components.push(c),this._injector.get(Ad,[]).concat(this._bootstrapListeners).forEach(u=>u(c))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(c=>c()),this._views.slice().forEach(c=>c.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(c){return this._destroyListeners.push(c),()=>kl(this._destroyListeners,c)}destroy(){if(this._destroyed)throw new Ct(406,!1);const c=this._injector;c.destroy&&!c.destroyed&&c.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}}return r.\u0275fac=function(c){return new(c||r)(Pe(ni),Pe(Mr),Pe(Mc))},r.\u0275prov=gn({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();function kl(r,s){const c=r.indexOf(s);c>-1&&r.splice(c,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Al=!0,E_=!1;function I1(){return E_=!0,Al}function L1(){if(E_)throw new Error("Cannot enable prod mode after platform setup.");Al=!1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let N1=(()=>{class r{}return r.__NG_ELEMENT_ID__=F1,r})();function F1(r){return function Z1(r,s,c){if(Ba(r)&&!c){const l=xn(r.index,s);return new je(l,l)}return 47&r.type?new je(s[16],s):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(Ge(),dt(),16==(16&r))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class N_{constructor(){}supports(s){return oo(s)}create(s){return new q1(s)}}const H1=(r,s)=>s;class q1{constructor(s){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=s||H1}forEachItem(s){let c;for(c=this._itHead;null!==c;c=c._next)s(c)}forEachOperation(s){let c=this._itHead,l=this._removalsHead,u=0,d=null;for(;c||l;){const p=!l||c&&c.currentIndex<Z_(l,u,d)?c:l,_=Z_(p,u,d),M=p.currentIndex;if(p===l)u--,l=l._nextRemoved;else if(c=c._next,null==p.previousIndex)u++;else{d||(d=[]);const b=_-u,x=M-u;if(b!=x){for(let N=0;N<b;N++){const Q=N<d.length?d[N]:d[N]=0,nt=Q+N;x<=nt&&nt<b&&(d[N]=Q+1)}d[p.previousIndex]=x-b}}_!==M&&s(p,_,M)}}forEachPreviousItem(s){let c;for(c=this._previousItHead;null!==c;c=c._nextPrevious)s(c)}forEachAddedItem(s){let c;for(c=this._additionsHead;null!==c;c=c._nextAdded)s(c)}forEachMovedItem(s){let c;for(c=this._movesHead;null!==c;c=c._nextMoved)s(c)}forEachRemovedItem(s){let c;for(c=this._removalsHead;null!==c;c=c._nextRemoved)s(c)}forEachIdentityChange(s){let c;for(c=this._identityChangesHead;null!==c;c=c._nextIdentityChange)s(c)}diff(s){if(null==s&&(s=[]),!oo(s))throw new Ct(900,!1);return this.check(s)?this:null}onDestroy(){}check(s){this._reset();let u,d,p,c=this._itHead,l=!1;if(Array.isArray(s)){this.length=s.length;for(let _=0;_<this.length;_++)d=s[_],p=this._trackByFn(_,d),null!==c&&Object.is(c.trackById,p)?(l&&(c=this._verifyReinsertion(c,d,p,_)),Object.is(c.item,d)||this._addIdentityChange(c,d)):(c=this._mismatch(c,d,p,_),l=!0),c=c._next}else u=0,function Fp(r,s){if(Array.isArray(r))for(let c=0;c<r.length;c++)s(r[c]);else{const c=r[io()]();let l;for(;!(l=c.next()).done;)s(l.value)}}(s,_=>{p=this._trackByFn(u,_),null!==c&&Object.is(c.trackById,p)?(l&&(c=this._verifyReinsertion(c,_,p,u)),Object.is(c.item,_)||this._addIdentityChange(c,_)):(c=this._mismatch(c,_,p,u),l=!0),c=c._next,u++}),this.length=u;return this._truncate(c),this.collection=s,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let s;for(s=this._previousItHead=this._itHead;null!==s;s=s._next)s._nextPrevious=s._next;for(s=this._additionsHead;null!==s;s=s._nextAdded)s.previousIndex=s.currentIndex;for(this._additionsHead=this._additionsTail=null,s=this._movesHead;null!==s;s=s._nextMoved)s.previousIndex=s.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(s,c,l,u){let d;return null===s?d=this._itTail:(d=s._prev,this._remove(s)),null!==(s=null===this._unlinkedRecords?null:this._unlinkedRecords.get(l,null))?(Object.is(s.item,c)||this._addIdentityChange(s,c),this._reinsertAfter(s,d,u)):null!==(s=null===this._linkedRecords?null:this._linkedRecords.get(l,u))?(Object.is(s.item,c)||this._addIdentityChange(s,c),this._moveAfter(s,d,u)):s=this._addAfter(new J1(c,l),d,u),s}_verifyReinsertion(s,c,l,u){let d=null===this._unlinkedRecords?null:this._unlinkedRecords.get(l,null);return null!==d?s=this._reinsertAfter(d,s._prev,u):s.currentIndex!=u&&(s.currentIndex=u,this._addToMoves(s,u)),s}_truncate(s){for(;null!==s;){const c=s._next;this._addToRemovals(this._unlink(s)),s=c}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(s,c,l){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(s);const u=s._prevRemoved,d=s._nextRemoved;return null===u?this._removalsHead=d:u._nextRemoved=d,null===d?this._removalsTail=u:d._prevRemoved=u,this._insertAfter(s,c,l),this._addToMoves(s,l),s}_moveAfter(s,c,l){return this._unlink(s),this._insertAfter(s,c,l),this._addToMoves(s,l),s}_addAfter(s,c,l){return this._insertAfter(s,c,l),this._additionsTail=null===this._additionsTail?this._additionsHead=s:this._additionsTail._nextAdded=s,s}_insertAfter(s,c,l){const u=null===c?this._itHead:c._next;return s._next=u,s._prev=c,null===u?this._itTail=s:u._prev=s,null===c?this._itHead=s:c._next=s,null===this._linkedRecords&&(this._linkedRecords=new F_),this._linkedRecords.put(s),s.currentIndex=l,s}_remove(s){return this._addToRemovals(this._unlink(s))}_unlink(s){null!==this._linkedRecords&&this._linkedRecords.remove(s);const c=s._prev,l=s._next;return null===c?this._itHead=l:c._next=l,null===l?this._itTail=c:l._prev=c,s}_addToMoves(s,c){return s.previousIndex===c||(this._movesTail=null===this._movesTail?this._movesHead=s:this._movesTail._nextMoved=s),s}_addToRemovals(s){return null===this._unlinkedRecords&&(this._unlinkedRecords=new F_),this._unlinkedRecords.put(s),s.currentIndex=null,s._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=s,s._prevRemoved=null):(s._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=s),s}_addIdentityChange(s,c){return s.item=c,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=s:this._identityChangesTail._nextIdentityChange=s,s}}class J1{constructor(s,c){this.item=s,this.trackById=c,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class B1{constructor(){this._head=null,this._tail=null}add(s){null===this._head?(this._head=this._tail=s,s._nextDup=null,s._prevDup=null):(this._tail._nextDup=s,s._prevDup=this._tail,s._nextDup=null,this._tail=s)}get(s,c){let l;for(l=this._head;null!==l;l=l._nextDup)if((null===c||c<=l.currentIndex)&&Object.is(l.trackById,s))return l;return null}remove(s){const c=s._prevDup,l=s._nextDup;return null===c?this._head=l:c._nextDup=l,null===l?this._tail=c:l._prevDup=c,null===this._head}}class F_{constructor(){this.map=new Map}put(s){const c=s.trackById;let l=this.map.get(c);l||(l=new B1,this.map.set(c,l)),l.add(s)}get(s,c){const u=this.map.get(s);return u?u.get(s,c):null}remove(s){const c=s.trackById;return this.map.get(c).remove(s)&&this.map.delete(c),s}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function Z_(r,s,c){const l=r.previousIndex;if(null===l)return l;let u=0;return c&&l<c.length&&(u=c[l]),l+s+u
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class R_{constructor(){}supports(s){return s instanceof Map||jc(s)}create(){return new z1}}class z1{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(s){let c;for(c=this._mapHead;null!==c;c=c._next)s(c)}forEachPreviousItem(s){let c;for(c=this._previousMapHead;null!==c;c=c._nextPrevious)s(c)}forEachChangedItem(s){let c;for(c=this._changesHead;null!==c;c=c._nextChanged)s(c)}forEachAddedItem(s){let c;for(c=this._additionsHead;null!==c;c=c._nextAdded)s(c)}forEachRemovedItem(s){let c;for(c=this._removalsHead;null!==c;c=c._nextRemoved)s(c)}diff(s){if(s){if(!(s instanceof Map||jc(s)))throw new Ct(900,!1)}else s=new Map;return this.check(s)?this:null}onDestroy(){}check(s){this._reset();let c=this._mapHead;if(this._appendAfter=null,this._forEach(s,(l,u)=>{if(c&&c.key===u)this._maybeAddToChanges(c,l),this._appendAfter=c,c=c._next;else{const d=this._getOrCreateRecordForKey(u,l);c=this._insertBeforeOrAppend(c,d)}}),c){c._prev&&(c._prev._next=null),this._removalsHead=c;for(let l=c;null!==l;l=l._nextRemoved)l===this._mapHead&&(this._mapHead=null),this._records.delete(l.key),l._nextRemoved=l._next,l.previousValue=l.currentValue,l.currentValue=null,l._prev=null,l._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(s,c){if(s){const l=s._prev;return c._next=s,c._prev=l,s._prev=c,l&&(l._next=c),s===this._mapHead&&(this._mapHead=c),this._appendAfter=s,s}return this._appendAfter?(this._appendAfter._next=c,c._prev=this._appendAfter):this._mapHead=c,this._appendAfter=c,null}_getOrCreateRecordForKey(s,c){if(this._records.has(s)){const u=this._records.get(s);this._maybeAddToChanges(u,c);const d=u._prev,p=u._next;return d&&(d._next=p),p&&(p._prev=d),u._next=null,u._prev=null,u}const l=new Q1(s);return this._records.set(s,l),l.currentValue=c,this._addToAdditions(l),l}_reset(){if(this.isDirty){let s;for(this._previousMapHead=this._mapHead,s=this._previousMapHead;null!==s;s=s._next)s._nextPrevious=s._next;for(s=this._changesHead;null!==s;s=s._nextChanged)s.previousValue=s.currentValue;for(s=this._additionsHead;null!=s;s=s._nextAdded)s.previousValue=s.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(s,c){Object.is(c,s.currentValue)||(s.previousValue=s.currentValue,s.currentValue=c,this._addToChanges(s))}_addToAdditions(s){null===this._additionsHead?this._additionsHead=this._additionsTail=s:(this._additionsTail._nextAdded=s,this._additionsTail=s)}_addToChanges(s){null===this._changesHead?this._changesHead=this._changesTail=s:(this._changesTail._nextChanged=s,this._changesTail=s)}_forEach(s,c){s instanceof Map?s.forEach(c):Object.keys(s).forEach(l=>c(s[l],l))}}class Q1{constructor(s){this.key=s,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function U_(){return new jd([new N_])}let jd=(()=>{class r{constructor(c){this.factories=c}static create(c,l){if(null!=l){const u=l.factories.slice();c=c.concat(u)}return new r(c)}static extend(c){return{provide:r,useFactory:l=>r.create(c,l||U_()),deps:[[r,new Ai,new Ls]]}}find(c){const l=this.factories.find(u=>u.supports(c));if(null!=l)return l;throw new Ct(901,!1)}}return r.\u0275prov=gn({token:r,providedIn:"root",factory:U_}),r})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function V_(){return new Hd([new R_])}let Hd=(()=>{class r{constructor(c){this.factories=c}static create(c,l){if(l){const u=l.factories.slice();c=c.concat(u)}return new r(c)}static extend(c){return{provide:r,useFactory:l=>r.create(c,l||V_()),deps:[[r,new Ai,new Ls]]}}find(c){const l=this.factories.find(u=>u.supports(c));if(l)return l;throw new Ct(901,!1)}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return r.\u0275prov=gn({token:r,providedIn:"root",factory:V_}),r})();const $1=x_(null,"core",[]);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let qd=(()=>{class r{constructor(c){}}return r.\u0275fac=function(c){return new(c||r)(Pe(Dl))},r.\u0275mod=ql({type:r}),r.\u0275inj=Fl({}),r})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function It(r){return"boolean"==typeof r?r:null!=r&&"false"!==r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */,5861:(bt,it,D)=>{function t(B,$,H,rt,w,S,U){try{var E=B[S](U),R=E.value}catch(F){return void H(F)}E.done?$(R):Promise.resolve(R).then(rt,w)}function V(B){return function(){var $=this,H=arguments;return new Promise(function(rt,w){var S=B.apply($,H);function U(R){t(S,rt,w,U,E,"next",R)}function E(R){t(S,rt,w,U,E,"throw",R)}U(void 0)})}}D.d(it,{Z:()=>V})}},bt=>{bt(bt.s=759)}]);