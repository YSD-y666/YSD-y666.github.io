/*
Cache: infield-label, uniform, qtip, jquery-smooth-scroll, jquery-form, iphorm-plugin, isotope, revslider-jquery.themepunch.revolution.min, themepunchtools
*/
/* themepunchtools: (https://5b9732f9943c7.t73.qifeiye.com/qfy-content/plugins/revslider/rs-plugin/js/jquery.themepunch.plugins.min.js?rev=4.1.4) */


/********************************************
	-	THEMEPUNCH TOOLS Ver. 1.0     -
	 Last Update of Tools 09.10.2013
*********************************************/

/*! Hammer.JS - v1.0.5 - 2013-04-07
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2013 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */

(function(t,e){"use strict";function n(){if(!i.READY){i.event.determineEventTypes();for(var t in i.gestures)i.gestures.hasOwnProperty(t)&&i.detection.register(i.gestures[t]);i.event.onTouch(i.DOCUMENT,i.EVENT_MOVE,i.detection.detect),i.event.onTouch(i.DOCUMENT,i.EVENT_END,i.detection.detect),i.READY=!0}}var i=function(t,e){return new i.Instance(t,e||{})};i.defaults={stop_browser_behavior:{userSelect:"none",touchAction:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},i.HAS_POINTEREVENTS=navigator.pointerEnabled||navigator.msPointerEnabled,i.HAS_TOUCHEVENTS="ontouchstart"in t,i.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android/i,i.NO_MOUSEEVENTS=i.HAS_TOUCHEVENTS&&navigator.userAgent.match(i.MOBILE_REGEX),i.EVENT_TYPES={},i.DIRECTION_DOWN="down",i.DIRECTION_LEFT="left",i.DIRECTION_UP="up",i.DIRECTION_RIGHT="right",i.POINTER_MOUSE="mouse",i.POINTER_TOUCH="touch",i.POINTER_PEN="pen",i.EVENT_START="start",i.EVENT_MOVE="move",i.EVENT_END="end",i.DOCUMENT=document,i.plugins={},i.READY=!1,i.Instance=function(t,e){var r=this;return n(),this.element=t,this.enabled=!0,this.options=i.utils.extend(i.utils.extend({},i.defaults),e||{}),this.options.stop_browser_behavior&&i.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),i.event.onTouch(t,i.EVENT_START,function(t){r.enabled&&i.detection.startDetect(r,t)}),this},i.Instance.prototype={on:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.addEventListener(n[i],e,!1);return this},off:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.removeEventListener(n[i],e,!1);return this},trigger:function(t,e){var n=i.DOCUMENT.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e;var r=this.element;return i.utils.hasParent(e.target,r)&&(r=e.target),r.dispatchEvent(n),this},enable:function(t){return this.enabled=t,this}};var r=null,o=!1,s=!1;i.event={bindDom:function(t,e,n){for(var i=e.split(" "),r=0;i.length>r;r++)t.addEventListener(i[r],n,!1)},onTouch:function(t,e,n){var a=this;this.bindDom(t,i.EVENT_TYPES[e],function(c){var u=c.type.toLowerCase();if(!u.match(/mouse/)||!s){(u.match(/touch/)||u.match(/pointerdown/)||u.match(/mouse/)&&1===c.which)&&(o=!0),u.match(/touch|pointer/)&&(s=!0);var h=0;o&&(i.HAS_POINTEREVENTS&&e!=i.EVENT_END?h=i.PointerEvent.updatePointer(e,c):u.match(/touch/)?h=c.touches.length:s||(h=u.match(/up/)?0:1),h>0&&e==i.EVENT_END?e=i.EVENT_MOVE:h||(e=i.EVENT_END),h||null===r?r=c:c=r,n.call(i.detection,a.collectEventData(t,e,c)),i.HAS_POINTEREVENTS&&e==i.EVENT_END&&(h=i.PointerEvent.updatePointer(e,c))),h||(r=null,o=!1,s=!1,i.PointerEvent.reset())}})},determineEventTypes:function(){var t;t=i.HAS_POINTEREVENTS?i.PointerEvent.getEvents():i.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],i.EVENT_TYPES[i.EVENT_START]=t[0],i.EVENT_TYPES[i.EVENT_MOVE]=t[1],i.EVENT_TYPES[i.EVENT_END]=t[2]},getTouchList:function(t){return i.HAS_POINTEREVENTS?i.PointerEvent.getTouchList():t.touches?t.touches:[{identifier:1,pageX:t.pageX,pageY:t.pageY,target:t.target}]},collectEventData:function(t,e,n){var r=this.getTouchList(n,e),o=i.POINTER_TOUCH;return(n.type.match(/mouse/)||i.PointerEvent.matchType(i.POINTER_MOUSE,n))&&(o=i.POINTER_MOUSE),{center:i.utils.getCenter(r),timeStamp:(new Date).getTime(),target:n.target,touches:r,eventType:e,pointerType:o,srcEvent:n,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault&&this.srcEvent.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return i.detection.stopDetect()}}}},i.PointerEvent={pointers:{},getTouchList:function(){var t=this,e=[];return Object.keys(t.pointers).sort().forEach(function(n){e.push(t.pointers[n])}),e},updatePointer:function(t,e){return t==i.EVENT_END?this.pointers={}:(e.identifier=e.pointerId,this.pointers[e.pointerId]=e),Object.keys(this.pointers).length},matchType:function(t,e){if(!e.pointerType)return!1;var n={};return n[i.POINTER_MOUSE]=e.pointerType==e.MSPOINTER_TYPE_MOUSE||e.pointerType==i.POINTER_MOUSE,n[i.POINTER_TOUCH]=e.pointerType==e.MSPOINTER_TYPE_TOUCH||e.pointerType==i.POINTER_TOUCH,n[i.POINTER_PEN]=e.pointerType==e.MSPOINTER_TYPE_PEN||e.pointerType==i.POINTER_PEN,n[t]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},i.utils={extend:function(t,n,i){for(var r in n)t[r]!==e&&i||(t[r]=n[r]);return t},hasParent:function(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1},getCenter:function(t){for(var e=[],n=[],i=0,r=t.length;r>i;i++)e.push(t[i].pageX),n.push(t[i].pageY);return{pageX:(Math.min.apply(Math,e)+Math.max.apply(Math,e))/2,pageY:(Math.min.apply(Math,n)+Math.max.apply(Math,n))/2}},getVelocity:function(t,e,n){return{x:Math.abs(e/t)||0,y:Math.abs(n/t)||0}},getAngle:function(t,e){var n=e.pageY-t.pageY,i=e.pageX-t.pageX;return 180*Math.atan2(n,i)/Math.PI},getDirection:function(t,e){var n=Math.abs(t.pageX-e.pageX),r=Math.abs(t.pageY-e.pageY);return n>=r?t.pageX-e.pageX>0?i.DIRECTION_LEFT:i.DIRECTION_RIGHT:t.pageY-e.pageY>0?i.DIRECTION_UP:i.DIRECTION_DOWN},getDistance:function(t,e){var n=e.pageX-t.pageX,i=e.pageY-t.pageY;return Math.sqrt(n*n+i*i)},getScale:function(t,e){return t.length>=2&&e.length>=2?this.getDistance(e[0],e[1])/this.getDistance(t[0],t[1]):1},getRotation:function(t,e){return t.length>=2&&e.length>=2?this.getAngle(e[1],e[0])-this.getAngle(t[1],t[0]):0},isVertical:function(t){return t==i.DIRECTION_UP||t==i.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(t,e){var n,i=["webkit","khtml","moz","ms","o",""];if(e&&t.style){for(var r=0;i.length>r;r++)for(var o in e)e.hasOwnProperty(o)&&(n=o,i[r]&&(n=i[r]+n.substring(0,1).toUpperCase()+n.substring(1)),t.style[n]=e[o]);"none"==e.userSelect&&(t.onselectstart=function(){return!1})}}},i.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(t,e){this.current||(this.stopped=!1,this.current={inst:t,startEvent:i.utils.extend({},e),lastEvent:!1,name:""},this.detect(e))},detect:function(t){if(this.current&&!this.stopped){t=this.extendEventData(t);for(var e=this.current.inst.options,n=0,r=this.gestures.length;r>n;n++){var o=this.gestures[n];if(!this.stopped&&e[o.name]!==!1&&o.handler.call(o,t,this.current.inst)===!1){this.stopDetect();break}}return this.current&&(this.current.lastEvent=t),t.eventType==i.EVENT_END&&!t.touches.length-1&&this.stopDetect(),t}},stopDetect:function(){this.previous=i.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(t){var e=this.current.startEvent;if(e&&(t.touches.length!=e.touches.length||t.touches===e.touches)){e.touches=[];for(var n=0,r=t.touches.length;r>n;n++)e.touches.push(i.utils.extend({},t.touches[n]))}var o=t.timeStamp-e.timeStamp,s=t.center.pageX-e.center.pageX,a=t.center.pageY-e.center.pageY,c=i.utils.getVelocity(o,s,a);return i.utils.extend(t,{deltaTime:o,deltaX:s,deltaY:a,velocityX:c.x,velocityY:c.y,distance:i.utils.getDistance(e.center,t.center),angle:i.utils.getAngle(e.center,t.center),direction:i.utils.getDirection(e.center,t.center),scale:i.utils.getScale(e.touches,t.touches),rotation:i.utils.getRotation(e.touches,t.touches),startEvent:e}),t},register:function(t){var n=t.defaults||{};return n[t.name]===e&&(n[t.name]=!0),i.utils.extend(i.defaults,n,!0),t.index=t.index||1e3,this.gestures.push(t),this.gestures.sort(function(t,e){return t.index<e.index?-1:t.index>e.index?1:0}),this.gestures}},i.gestures=i.gestures||{},i.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(t,e){switch(t.eventType){case i.EVENT_START:clearTimeout(this.timer),i.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==i.detection.current.name&&e.trigger("hold",t)},e.options.hold_timeout);break;case i.EVENT_MOVE:t.distance>e.options.hold_threshold&&clearTimeout(this.timer);break;case i.EVENT_END:clearTimeout(this.timer)}}},i.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},handler:function(t,e){if(t.eventType==i.EVENT_END){var n=i.detection.previous,r=!1;if(t.deltaTime>e.options.tap_max_touchtime||t.distance>e.options.tap_max_distance)return;n&&"tap"==n.name&&t.timeStamp-n.lastEvent.timeStamp<e.options.doubletap_interval&&t.distance<e.options.doubletap_distance&&(e.trigger("doubletap",t),r=!0),(!r||e.options.tap_always)&&(i.detection.current.name="tap",e.trigger(i.detection.current.name,t))}}},i.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_max_touches:1,swipe_velocity:.7},handler:function(t,e){if(t.eventType==i.EVENT_END){if(e.options.swipe_max_touches>0&&t.touches.length>e.options.swipe_max_touches)return;(t.velocityX>e.options.swipe_velocity||t.velocityY>e.options.swipe_velocity)&&(e.trigger(this.name,t),e.trigger(this.name+t.direction,t))}}},i.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,drag_max_touches:1,drag_block_horizontal:!1,drag_block_vertical:!1,drag_lock_to_axis:!1,drag_lock_min_distance:25},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(n.options.drag_max_touches>0&&t.touches.length>n.options.drag_max_touches))switch(t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:if(t.distance<n.options.drag_min_distance&&i.detection.current.name!=this.name)return;i.detection.current.name=this.name,(i.detection.current.lastEvent.drag_locked_to_axis||n.options.drag_lock_to_axis&&n.options.drag_lock_min_distance<=t.distance)&&(t.drag_locked_to_axis=!0);var r=i.detection.current.lastEvent.direction;t.drag_locked_to_axis&&r!==t.direction&&(t.direction=i.utils.isVertical(r)?0>t.deltaY?i.DIRECTION_UP:i.DIRECTION_DOWN:0>t.deltaX?i.DIRECTION_LEFT:i.DIRECTION_RIGHT),this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),n.trigger(this.name+t.direction,t),(n.options.drag_block_vertical&&i.utils.isVertical(t.direction)||n.options.drag_block_horizontal&&!i.utils.isVertical(t.direction))&&t.preventDefault();break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(2>t.touches.length))switch(n.options.transform_always_block&&t.preventDefault(),t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:var r=Math.abs(1-t.scale),o=Math.abs(t.rotation);if(n.options.transform_min_scale>r&&n.options.transform_min_rotation>o)return;i.detection.current.name=this.name,this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),o>n.options.transform_min_rotation&&n.trigger("rotate",t),r>n.options.transform_min_scale&&(n.trigger("pinch",t),n.trigger("pinch"+(1>t.scale?"in":"out"),t));break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(t,n){return n.options.prevent_mouseevents&&t.pointerType==i.POINTER_MOUSE?(t.stopDetect(),e):(n.options.prevent_default&&t.preventDefault(),t.eventType==i.EVENT_START&&n.trigger(this.name,t),e)}},i.gestures.Release={name:"release",index:1/0,handler:function(t,e){t.eventType==i.EVENT_END&&e.trigger(this.name,t)}},"object"==typeof module&&"object"==typeof module.exports?module.exports=i:(t.Hammer=i,"function"==typeof t.define&&t.define.amd&&t.define("hammer",[],function(){return i}))})(this),function(t,e){"use strict";t!==e&&(Hammer.event.bindDom=function(n,i,r){t(n).on(i,function(t){var n=t.originalEvent||t;n.pageX===e&&(n.pageX=t.pageX,n.pageY=t.pageY),n.target||(n.target=t.target),n.which===e&&(n.which=n.button),n.preventDefault||(n.preventDefault=t.preventDefault),n.stopPropagation||(n.stopPropagation=t.stopPropagation),r.call(this,n)})},Hammer.Instance.prototype.on=function(e,n){return t(this.element).on(e,n)},Hammer.Instance.prototype.off=function(e,n){return t(this.element).off(e,n)},Hammer.Instance.prototype.trigger=function(e,n){var i=t(this.element);return i.has(n.target).length&&(i=t(n.target)),i.trigger({type:e,gesture:n})},t.fn.hammer=function(e){return this.each(function(){var n=t(this),i=n.data("hammer");i?i&&e&&Hammer.utils.extend(i.options,e):n.data("hammer",new Hammer(this,e||{}))})})}(window.jQuery||window.Zepto);




/*!
 * VERSION: 1.11.2
 * DATE: 2013-11-20
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
(function(t){"use strict";var e=t.GreenSockGlobals||t;if(!e.TweenLite){var i,s,r,n,a,o=function(t){var i,s=t.split("."),r=e;for(i=0;s.length>i;i++)r[s[i]]=r=r[s[i]]||{};return r},l=o("com.greensock"),h=1e-10,_=[].slice,u=function(){},m=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e}}(),f={},p=function(i,s,r,n){this.sc=f[i]?f[i].sc:[],f[i]=this,this.gsClass=null,this.func=r;var a=[];this.check=function(l){for(var h,_,u,m,c=s.length,d=c;--c>-1;)(h=f[s[c]]||new p(s[c],[])).gsClass?(a[c]=h.gsClass,d--):l&&h.sc.push(this);if(0===d&&r)for(_=("com.greensock."+i).split("."),u=_.pop(),m=o(_.join("."))[u]=this.gsClass=r.apply(r,a),n&&(e[u]=m,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+i.split(".").join("/"),[],function(){return m}):"undefined"!=typeof module&&module.exports&&(module.exports=m)),c=0;this.sc.length>c;c++)this.sc[c].check()},this.check(!0)},c=t._gsDefine=function(t,e,i,s){return new p(t,e,i,s)},d=l._class=function(t,e,i){return e=e||function(){},c(t,[],function(){return e},i),e};c.globals=e;var v=[0,0,1,1],g=[],T=d("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?v.concat(e):v},!0),w=T.map={},P=T.register=function(t,e,i,s){for(var r,n,a,o,h=e.split(","),_=h.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=h[_],r=s?d("easing."+n,null,!0):l.easing[n]||{},a=u.length;--a>-1;)o=u[a],w[n+"."+o]=w[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(r=T.prototype,r._calcEnd=!1,r.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},i=["Linear","Quad","Cubic","Quart","Quint,Strong"],s=i.length;--s>-1;)r=i[s]+",Power"+s,P(new T(null,null,1,s),r,"easeOut",!0),P(new T(null,null,2,s),r,"easeIn"+(0===s?",easeNone":"")),P(new T(null,null,3,s),r,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var y=d("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});r=y.prototype,r.addEventListener=function(t,e,i,s,r){r=r||0;var o,l,h=this._listeners[t],_=0;for(null==h&&(this._listeners[t]=h=[]),l=h.length;--l>-1;)o=h[l],o.c===e&&o.s===i?h.splice(l,1):0===_&&r>o.pr&&(_=l+1);h.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==n||a||n.wake()},r.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},r.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i)};var b=t.requestAnimationFrame,k=t.cancelAnimationFrame,A=Date.now||function(){return(new Date).getTime()},S=A();for(i=["ms","moz","webkit","o"],s=i.length;--s>-1&&!b;)b=t[i[s]+"RequestAnimationFrame"],k=t[i[s]+"CancelAnimationFrame"]||t[i[s]+"CancelRequestAnimationFrame"];d("Ticker",function(t,e){var i,s,r,o,l,h=this,_=A(),m=e!==!1&&b,f=function(t){S=A(),h.time=(S-_)/1e3;var e,n=h.time-l;(!i||n>0||t===!0)&&(h.frame++,l+=n+(n>=o?.004:o-n),e=!0),t!==!0&&(r=s(f)),e&&h.dispatchEvent("tick")};y.call(h),h.time=h.frame=0,h.tick=function(){f(!0)},h.sleep=function(){null!=r&&(m&&k?k(r):clearTimeout(r),s=u,r=null,h===n&&(a=!1))},h.wake=function(){null!==r&&h.sleep(),s=0===i?u:m&&b?b:function(t){return setTimeout(t,0|1e3*(l-h.time)+1)},h===n&&(a=!0),f(2)},h.fps=function(t){return arguments.length?(i=t,o=1/(i||60),l=this.time+o,h.wake(),void 0):i},h.useRAF=function(t){return arguments.length?(h.sleep(),m=t,h.fps(i),void 0):m},h.fps(t),setTimeout(function(){m&&(!r||5>h.frame)&&h.useRAF(!1)},1500)}),r=l.Ticker.prototype=new l.events.EventDispatcher,r.constructor=l.Ticker;var x=d("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,Q){a||n.wake();var i=this.vars.useFrames?G:Q;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});n=x.ticker=new l.Ticker,r=x.prototype,r._dirty=r._gc=r._initted=r._paused=!1,r._totalTime=r._time=0,r._rawPrevTime=-1,r._next=r._last=r._onUpdate=r._timeline=r.timeline=null,r._paused=!1;var C=function(){a&&A()-S>2e3&&n.wake(),setTimeout(C,2e3)};C(),r.play=function(t,e){return arguments.length&&this.seek(t,e),this.reversed(!1).paused(!1)},r.pause=function(t,e){return arguments.length&&this.seek(t,e),this.paused(!0)},r.resume=function(t,e){return arguments.length&&this.seek(t,e),this.paused(!1)},r.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},r.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},r.reverse=function(t,e){return arguments.length&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},r.render=function(){},r.invalidate=function(){return this},r.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},r._enabled=function(t,e){return a||n.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},r._kill=function(){return this._enabled(!1,!1)},r.kill=function(t,e){return this._kill(t,e),this},r._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},r._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},r.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=m(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},r.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},r.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},r.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},r.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},r.totalTime=function(t,e,i){if(a||n.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&this.render(t,e,!1)}return this},r.progress=r.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},r.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},r.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||h,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},r.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._totalTime,!0)),this):this._reversed},r.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){a||t||n.wake();var e=this._timeline,i=e.rawTime(),s=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=s,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=this.isActive(),!t&&0!==s&&this._initted&&this.duration()&&this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var R=d("core.SimpleTimeline",function(t){x.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});r=R.prototype=new x,r.constructor=R,r.kill()._gc=!1,r._first=r._last=null,r._sortChildren=!1,r.add=r.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._timeline&&this._uncache(!0),this},r._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t.timeline=null,t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),this._timeline&&this._uncache(!0)),this},r.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},r.rawTime=function(){return a||n.wake(),this._totalTime};var D=d("TweenLite",function(e,i,s){if(x.call(this,i,s),this.render=D.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:D.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),l=this.vars.overwrite;if(this._overwrite=l=null==l?j[D.defaultOverwrite]:"number"==typeof l?l>>0:j[l],(o||e instanceof Array||e.push&&m(e))&&"number"!=typeof e[0])for(this._targets=a=_.call(e,0),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(_.call(n,0))):(this._siblings[r]=B(n,this,!1),1===l&&this._siblings[r].length>1&&q(n,this,null,1,this._siblings[r])):(n=a[r--]=D.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=B(e,this,!1),1===l&&this._siblings.length>1&&q(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&this.render(-this._delay,!1,!0)},!0),E=function(e){return e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},I=function(t,e){var i,s={};for(i in t)F[i]||i in e&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!N[i]||N[i]&&N[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};r=D.prototype=new x,r.constructor=D,r.kill()._gc=!1,r.ratio=0,r._firstPT=r._targets=r._overwrittenProps=r._startAt=null,r._notifyPluginsOfEnabled=!1,D.version="1.11.2",D.defaultEase=r._ease=new T(null,null,1,1),D.defaultOverwrite="auto",D.ticker=n,D.autoSleep=!0,D.selector=t.$||t.jQuery||function(e){return t.$?(D.selector=t.$,t.$(e)):t.document?t.document.getElementById("#"===e.charAt(0)?e.substr(1):e):e};var O=D._internals={isArray:m,isSelector:E},N=D._plugins={},L=D._tweenLookup={},U=0,F=O.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1},j={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},G=x._rootFramesTimeline=new R,Q=x._rootTimeline=new R;Q._startTime=n.time,G._startTime=n.frame,Q._active=G._active=!0,x._updateRoot=function(){if(Q.render((n.time-Q._startTime)*Q._timeScale,!1,!1),G.render((n.frame-G._startTime)*G._timeScale,!1,!1),!(n.frame%120)){var t,e,i;for(i in L){for(e=L[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete L[i]}if(i=Q._first,(!i||i._paused)&&D.autoSleep&&!G._first&&1===n._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||n.sleep()}}},n.addEventListener("tick",x._updateRoot);var B=function(t,e,i){var s,r,n=t._gsTweenID;if(L[n||(t._gsTweenID=n="t"+U++)]||(L[n]={target:t,tweens:[]}),e&&(s=L[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return L[n].tweens},q=function(t,e,i,s,r){var n,a,o,l;if(1===s||s>=4){for(l=r.length,n=0;l>n;n++)if((o=r[n])!==e)o._gc||o._enabled(!1,!1)&&(a=!0);else if(5===s)break;return a}var _,u=e._startTime+h,m=[],f=0,p=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(_=_||$(e,0,p),0===$(o,_,p)&&(m[f++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale+h>u&&((p||!o._initted)&&2e-10>=u-o._startTime||(m[f++]=o)));for(n=f;--n>-1;)o=m[n],2===s&&o._kill(i,t)&&(a=!0),(2!==s||!o._firstPT&&o._initted)&&o._enabled(!1,!1)&&(a=!0);return a},$=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*h>n-e?h:(n+=t.totalDuration()/t._timeScale/r)>e+h?0:n-e-h};r._init=function(){var t,e,i,s,r=this.vars,n=this._overwrittenProps,a=this._duration,o=r.immediateRender,l=r.ease;if(r.startAt){if(this._startAt&&this._startAt.render(-1,!0),r.startAt.overwrite=0,r.startAt.immediateRender=!0,this._startAt=D.to(this.target,0,r.startAt),o)if(this._time>0)this._startAt=null;else if(0!==a)return}else if(r.runBackwards&&0!==a)if(this._startAt)this._startAt.render(-1,!0),this._startAt=null;else{i={};for(s in r)F[s]&&"autoCSS"!==s||(i[s]=r[s]);if(i.overwrite=0,i.data="isFromStart",this._startAt=D.to(this.target,0,i),r.immediateRender){if(0===this._time)return}else this._startAt.render(-1,!0)}if(this._ease=l?l instanceof T?r.easeParams instanceof Array?l.config.apply(l,r.easeParams):l:"function"==typeof l?new T(l,r.easeParams):w[l]||D.defaultEase:D.defaultEase,this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],n?n[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,n);if(e&&D._onPluginEvent("_onInitAllProps",this),n&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),r.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=r.onUpdate,this._initted=!0},r._initProps=function(e,i,s,r){var n,a,o,l,h,_;if(null==e)return!1;this.vars.css||e.style&&e!==t&&e.nodeType&&N.css&&this.vars.autoCSS!==!1&&I(this.vars,e);for(n in this.vars){if(_=this.vars[n],F[n])_&&(_ instanceof Array||_.push&&m(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(N[n]&&(l=new N[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=h={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:l._priority},a=l._overwriteProps.length;--a>-1;)i[l._overwriteProps[a]]=this._firstPT;(l._priority||l._onInitAllProps)&&(o=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=h={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},h.s=h.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),h.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-h.s||0;h&&h._next&&(h._next._prev=h)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&q(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):o},r.render=function(t,e,i){var s,r,n,a,o=this._time,l=this._duration;if(t>=l)this._totalTime=this._time=l,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete"),0===l&&(a=this._rawPrevTime,(0===t||0>a||a===h)&&a!==t&&(i=!0,a>h&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t?t:h);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===l&&this._rawPrevTime>h)&&(r="onReverseComplete",s=this._reversed),0>t?(this._active=!1,0===l&&(this._rawPrevTime>=0&&(i=!0),this._rawPrevTime=a=!e||t?t:h)):this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var _=t/l,u=this._easeType,m=this._easePower;(1===u||3===u&&_>=.5)&&(_=1-_),3===u&&(_*=2),1===m?_*=_:2===m?_*=_*_:3===m?_*=_*_*_:4===m&&(_*=_*_*_*_),this.ratio=1===u?1-_:2===u?_:.5>t/l?_/2:1-_/2}else this.ratio=this._ease.getRatio(t/l);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;this._time&&!s?this.ratio=this._ease.getRatio(this._time/l):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===l)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||g))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||i&&0===this._time&&0===o||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||g)),r&&(this._gc||(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||g),0===l&&this._rawPrevTime===h&&a!==h&&(this._rawPrevTime=0)))}},r._kill=function(t,e){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var i,s,r,n,a,o,l,h;if((m(e)||E(e))&&"number"!=typeof e[0])for(i=e.length;--i>-1;)this._kill(t,e[i])&&(o=!0);else{if(this._targets){for(i=this._targets.length;--i>-1;)if(e===this._targets[i]){a=this._propLookup[i]||{},this._overwrittenProps=this._overwrittenProps||[],s=this._overwrittenProps[i]=t?this._overwrittenProps[i]||{}:"all";break}}else{if(e!==this.target)return!1;a=this._propLookup,s=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(a){l=t||a,h=t!==s&&"all"!==s&&t!==a&&("object"!=typeof t||!t._tempKill);for(r in l)(n=a[r])&&(n.pg&&n.t._kill(l)&&(o=!0),n.pg&&0!==n.t._overwriteProps.length||(n._prev?n._prev._next=n._next:n===this._firstPT&&(this._firstPT=n._next),n._next&&(n._next._prev=n._prev),n._next=n._prev=null),delete a[r]),h&&(s[r]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return o},r.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._startAt=null,this._initted=this._active=this._notifyPluginsOfEnabled=!1,this._propLookup=this._targets?{}:[],this},r._enabled=function(t,e){if(a||n.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=B(s[i],this,!0);else this._siblings=B(this.target,this,!0)}return x.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?D._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new D(t,e,s)},D.delayedCall=function(t,e,i,s,r){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:r,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:D.selector(t)||t;var i,s,r,n;if((m(t)||E(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(D.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=B(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=D.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var M=d("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=M.prototype},!0);if(r=M.prototype,M.version="1.10.1",M.API=2,r._firstPT=null,r._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},r.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=0|e+(e>0?.5:-.5):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},r._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},r._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},D._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},M.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===M.API&&(N[(new t[e])._propName]=t[e]);return!0},c.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=d("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){M.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new M(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,M.activate([a]),a},i=t._gsQueue){for(s=0;i.length>s;s++)i[s]();for(r in f)f[r].func||t.console.log("GSAP encountered missing dependency: com.greensock."+r)}a=!1}})(window);
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=window.GreenSockGlobals||window,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},c=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},p=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},f=u("Back",p("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),p("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),p("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),p=u,f=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--p>-1;)i=f?Math.random():1/u*p,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),f?s+=Math.random()*r-.5*r:p%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new c(1,1,null),p=u;--p>-1;)a=l[p],o=new c(a.x,a.y,o);this._prev=new c(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t||1,this._p2=e||s,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*a/this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*a/this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),f},!0)}),window._gsDefine&&window._gsQueue.pop()();
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,s,r,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o={},l=a.prototype=new t("css");l.constructor=a,a.version="1.11.2",a.API=2,a.defaultTransformPerspective=0,l="px",a.suffixMap={top:l,right:l,bottom:l,left:l,width:l,height:l,fontSize:l,padding:l,margin:l,perspective:l};var h,u,_,p,f,c,d=/(?:\d|\-\d|\.\d|\-\.\d)+/g,m=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,g=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/[^\d\-\.]/g,y=/(?:\d|\-|\+|=|#|\.)*/g,T=/opacity *= *([^)]*)/,x=/opacity:([^;]*)/,w=/alpha\(opacity *=.+?\)/i,b=/^(rgb|hsl)/,P=/([A-Z])/g,S=/-([a-z])/gi,R=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,k=function(t,e){return e.toUpperCase()},C=/(?:Left|Right|Width)/i,A=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,O=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,D=/,(?=[^\)]*(?:\(|$))/gi,M=Math.PI/180,L=180/Math.PI,N={},X=document,F=X.createElement("div"),I=X.createElement("img"),E=a._internals={_specialProps:o},Y=navigator.userAgent,z=function(){var t,e=Y.indexOf("Android"),i=X.createElement("div");return _=-1!==Y.indexOf("Safari")&&-1===Y.indexOf("Chrome")&&(-1===e||Number(Y.substr(e+8,1))>3),f=_&&6>Number(Y.substr(Y.indexOf("Version/")+8,1)),p=-1!==Y.indexOf("Firefox"),/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y),c=parseFloat(RegExp.$1),i.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",t=i.getElementsByTagName("a")[0],t?/^0.55/.test(t.style.opacity):!1}(),U=function(t){return T.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},B=function(t){window.console&&console.log(t)},j="",V="",q=function(t,e){e=e||F;var i,s,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],s=5;--s>-1&&void 0===r[i[s]+t];);return s>=0?(V=3===s?"ms":i[s],j="-"+V.toLowerCase()+"-",V+t):null},W=X.defaultView?X.defaultView.getComputedStyle:function(){},Q=a.getStyle=function(t,e,i,s,r){var n;return z||"opacity"!==e?(!s&&t.style[e]?n=t.style[e]:(i=i||W(t,null))?(t=i.getPropertyValue(e.replace(P,"-$1").toLowerCase()),n=t||i.length?t:i[e]):t.currentStyle&&(n=t.currentStyle[e]),null==r||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:r):U(t)},Z=function(t,e,i,s,r){if("px"===s||!s)return i;if("auto"===s||!i)return 0;var n,a=C.test(e),o=t,l=F.style,h=0>i;return h&&(i=-i),"%"===s&&-1!==e.indexOf("border")?n=i/100*(a?t.clientWidth:t.clientHeight):(l.cssText="border:0 solid red;position:"+Q(t,"position")+";line-height:0;","%"!==s&&o.appendChild?l[a?"borderLeftWidth":"borderTopWidth"]=i+s:(o=t.parentNode||X.body,l[a?"width":"height"]=i+s),o.appendChild(F),n=parseFloat(F[a?"offsetWidth":"offsetHeight"]),o.removeChild(F),0!==n||r||(n=Z(t,e,i,s,!0))),h?-n:n},H=function(t,e,i){if("absolute"!==Q(t,"position",i))return 0;var s="left"===e?"Left":"Top",r=Q(t,"margin"+s,i);return t["offset"+s]-(Z(t,e,parseFloat(r),r.replace(y,""))||0)},$=function(t,e){var i,s,r={};if(e=e||W(t,null))if(i=e.length)for(;--i>-1;)r[e[i].replace(S,k)]=e.getPropertyValue(e[i]);else for(i in e)r[i]=e[i];else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0!==r[i]&&(r[i.replace(S,k)]=e[i]);return z||(r.opacity=U(t)),s=be(t,e,!1),r.rotation=s.rotation,r.skewX=s.skewX,r.scaleX=s.scaleX,r.scaleY=s.scaleY,r.x=s.x,r.y=s.y,we&&(r.z=s.z,r.rotationX=s.rotationX,r.rotationY=s.rotationY,r.scaleZ=s.scaleZ),r.filters&&delete r.filters,r},G=function(t,e,i,s,r){var n,a,o,l={},h=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||r&&r[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(l[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(v,"")?n:0:H(t,a),void 0!==h[a]&&(o=new _e(h,a,h[a],o)));if(s)for(a in s)"className"!==a&&(l[a]=s[a]);return{difs:l,firstMPT:o}},K={width:["Left","Right"],height:["Top","Bottom"]},J=["marginLeft","marginRight","marginTop","marginBottom"],te=function(t,e,i){var s=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=K[e],n=r.length;for(i=i||W(t,null);--n>-1;)s-=parseFloat(Q(t,"padding"+r[n],i,!0))||0,s-=parseFloat(Q(t,"border"+r[n]+"Width",i,!0))||0;return s},ee=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],r=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==r?r="0":"center"===r&&(r="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==r.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===r.charAt(1),e.ox=parseFloat(s.replace(v,"")),e.oy=parseFloat(r.replace(v,""))),s+" "+r+(i.length>2?" "+i[2]:"")},ie=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},se=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*Number(t.substr(2))+e:parseFloat(t)},re=function(t,e,i,s){var r,n,a,o,l=1e-6;return null==t?o=e:"number"==typeof t?o=t:(r=360,n=t.split("_"),a=Number(n[0].replace(v,""))*(-1===t.indexOf("rad")?1:L)-("="===t.charAt(1)?0:e),n.length&&(s&&(s[i]=e+a),-1!==t.indexOf("short")&&(a%=r,a!==a%(r/2)&&(a=0>a?a+r:a-r)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*r)%r-(0|a/r)*r:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*r)%r-(0|a/r)*r)),o=e+a),l>o&&o>-l&&(o=0),o},ne={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ae=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},oe=function(t){var e,i,s,r,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),ne[t]?ne[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),s=t.charAt(3),t="#"+e+e+i+i+s+s),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(d),r=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=ae(r+1/3,e,i),t[1]=ae(r,e,i),t[2]=ae(r-1/3,e,i),t):(t=t.match(d)||ne.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):ne.black},le="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(l in ne)le+="|"+l+"\\b";le=RegExp(le+")","gi");var he=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(le)||[""])[0]:"",a=t.split(n).join("").match(g)||[],o=t.substr(0,t.indexOf(a[0])),l=")"===t.charAt(t.length-1)?")":"",h=-1!==t.indexOf(" ")?" ":",",u=a.length,_=u>0?a[0].replace(d,""):"";return u?r=e?function(t){var e,p,f,c;if("number"==typeof t)t+=_;else if(s&&D.test(t)){for(c=t.replace(D,"|").split("|"),f=0;c.length>f;f++)c[f]=r(c[f]);return c.join(",")}if(e=(t.match(le)||[n])[0],p=t.split(e).join("").match(g)||[],f=p.length,u>f--)for(;u>++f;)p[f]=i?p[0|(f-1)/2]:a[f];return o+p.join(h)+h+e+l+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,p;if("number"==typeof t)t+=_;else if(s&&D.test(t)){for(n=t.replace(D,"|").split("|"),p=0;n.length>p;p++)n[p]=r(n[p]);return n.join(",")}if(e=t.match(g)||[],p=e.length,u>p--)for(;u>++p;)e[p]=i?e[0|(p-1)/2]:a[p];return o+e.join(h)+l}:function(t){return t}},ue=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var l,h=(i+"").split(" ");for(o={},l=0;4>l;l++)o[t[l]]=h[l]=h[l]||h[(l-1)/2>>0];return r.parse(e,o,n,a)}},_e=(E._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n=this.data,a=n.proxy,o=n.firstMPT,l=1e-6;o;)e=a[o.v],o.r?e=e>0?0|e+.5:0|e-.5:l>e&&e>-l&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;i.l>s;s++)r+=i["xn"+s]+i["xs"+(s+1)];i.e=r}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),pe=(E._parseToProxy=function(t,e,i,s,r,n){var a,o,l,h,u,_=s,p={},f={},c=i._transform,d=N;for(i._transform=null,N=e,s=u=i.parse(t,e,s,r),N=d,n&&(i._transform=c,_&&(_._prev=null,_._prev&&(_._prev._next=null)));s&&s!==_;){if(1>=s.type&&(o=s.p,f[o]=s.s+s.c,p[o]=s.s,n||(h=new _e(s,"s",o,h,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)l="xn"+a,o=s.p+"_"+l,f[o]=s.data[l],p[o]=s[l],n||(h=new _e(s,l,o,h,s.rxp[l]));s=s._next}return{proxy:p,end:f,firstMPT:h,pt:u}},E.CSSPropTween=function(t,e,s,r,a,o,l,h,u,_,p){this.t=t,this.p=e,this.s=s,this.c=r,this.n=l||e,t instanceof pe||n.push(this.n),this.r=h,this.type=o||0,u&&(this.pr=u,i=!0),this.b=void 0===_?s:_,this.e=void 0===p?s+r:p,a&&(this._next=a,a._prev=this)}),fe=a.parseComplex=function(t,e,i,s,r,n,a,o,l,u){i=i||n||"",a=new pe(t,e,0,0,a,u?2:1,null,!1,o,i,s),s+="";var _,p,f,c,g,v,y,T,x,w,P,S,R=i.split(", ").join(",").split(" "),k=s.split(", ").join(",").split(" "),C=R.length,A=h!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(R=R.join(" ").replace(D,", ").split(" "),k=k.join(" ").replace(D,", ").split(" "),C=R.length),C!==k.length&&(R=(n||"").split(" "),C=R.length),a.plugin=l,a.setRatio=u,_=0;C>_;_++)if(c=R[_],g=k[_],T=parseFloat(c),T||0===T)a.appendXtra("",T,ie(g,T),g.replace(m,""),A&&-1!==g.indexOf("px"),!0);else if(r&&("#"===c.charAt(0)||ne[c]||b.test(c)))S=","===g.charAt(g.length-1)?"),":")",c=oe(c),g=oe(g),x=c.length+g.length>6,x&&!z&&0===g[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(k[_]).join("transparent")):(z||(x=!1),a.appendXtra(x?"rgba(":"rgb(",c[0],g[0]-c[0],",",!0,!0).appendXtra("",c[1],g[1]-c[1],",",!0).appendXtra("",c[2],g[2]-c[2],x?",":S,!0),x&&(c=4>c.length?1:c[3],a.appendXtra("",c,(4>g.length?1:g[3])-c,S,!1)));else if(v=c.match(d)){if(y=g.match(m),!y||y.length!==v.length)return a;for(f=0,p=0;v.length>p;p++)P=v[p],w=c.indexOf(P,f),a.appendXtra(c.substr(f,w-f),Number(P),ie(y[p],P),"",A&&"px"===c.substr(w+P.length,2),0===p),f=w+P.length;a["xs"+a.l]+=c.substr(f)}else a["xs"+a.l]+=a.l?" "+c:c;if(-1!==s.indexOf("=")&&a.data){for(S=a.xs0+a.data.s,_=1;a.l>_;_++)S+=a["xs"+_]+a.data["xn"+_];a.e=S+a["xs"+_]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},ce=9;for(l=pe.prototype,l.l=l.pr=0;--ce>0;)l["xn"+ce]=0,l["xs"+ce]="";l.xs0="",l._next=l._prev=l.xfirst=l.data=l.plugin=l.setRatio=l.rxp=null,l.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new pe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var de=function(t,e){e=e||{},this.p=e.prefix?q(t)||t:t,o[t]=o[this.p]=this,this.format=e.formatter||he(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},me=E._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;n.length>s;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new de(n[s],e)},ge=function(t){if(!o[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";me(t,{parser:function(t,i,s,r,n,a,l){var h=(window.GreenSockGlobals||window).com.greensock.plugins[e];return h?(h._cssRegister(),o[s].parse(t,i,s,r,n,a,l)):(B("Error: "+e+" js file not loaded."),n)}})}};l=de.prototype,l.parseComplex=function(t,e,i,s,r,n){var a,o,l,h,u,_,p=this.keyword;if(this.multi&&(D.test(i)||D.test(e)?(o=e.replace(D,"|").split("|"),l=i.replace(D,"|").split("|")):p&&(o=[e],l=[i])),l){for(h=l.length>o.length?l.length:o.length,a=0;h>a;a++)e=o[a]=o[a]||this.dflt,i=l[a]=l[a]||this.dflt,p&&(u=e.indexOf(p),_=i.indexOf(p),u!==_&&(i=-1===_?l:o,i[a]+=" "+p));e=o.join(", "),i=l.join(", ")}return fe(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},l.parse=function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){me(t,{parser:function(t,s,r,n,a,o){var l=new pe(t,r,0,0,a,2,r,!1,i);return l.plugin=o,l.setRatio=e(t,s,n._tween,r),l},priority:i})};var ve="scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),ye=q("transform"),Te=j+"transform",xe=q("transformOrigin"),we=null!==q("perspective"),be=function(t,e,i,s){if(t._gsTransform&&i&&!s)return t._gsTransform;var r,n,o,l,h,u,_,p,f,c,d,m,g,v=i?t._gsTransform||{skewY:0}:{skewY:0},y=0>v.scaleX,T=2e-5,x=1e5,w=179.99,b=w*M,P=we?parseFloat(Q(t,xe,e,!1,"0 0 0").split(" ")[2])||v.zOrigin||0:0;for(ye?r=Q(t,Te,e,!0):t.currentStyle&&(r=t.currentStyle.filter.match(A),r=r&&4===r.length?[r[0].substr(4),Number(r[2].substr(4)),Number(r[1].substr(4)),r[3].substr(4),v.x||0,v.y||0].join(","):""),n=(r||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],o=n.length;--o>-1;)l=Number(n[o]),n[o]=(h=l-(l|=0))?(0|h*x+(0>h?-.5:.5))/x+l:l;if(16===n.length){var S=n[8],R=n[9],k=n[10],C=n[12],O=n[13],D=n[14];if(v.zOrigin&&(D=-v.zOrigin,C=S*D-n[12],O=R*D-n[13],D=k*D+v.zOrigin-n[14]),!i||s||null==v.rotationX){var N,X,F,I,E,Y,z,U=n[0],B=n[1],j=n[2],V=n[3],q=n[4],W=n[5],Z=n[6],H=n[7],$=n[11],G=Math.atan2(Z,k),K=-b>G||G>b;v.rotationX=G*L,G&&(I=Math.cos(-G),E=Math.sin(-G),N=q*I+S*E,X=W*I+R*E,F=Z*I+k*E,S=q*-E+S*I,R=W*-E+R*I,k=Z*-E+k*I,$=H*-E+$*I,q=N,W=X,Z=F),G=Math.atan2(S,U),v.rotationY=G*L,G&&(Y=-b>G||G>b,I=Math.cos(-G),E=Math.sin(-G),N=U*I-S*E,X=B*I-R*E,F=j*I-k*E,R=B*E+R*I,k=j*E+k*I,$=V*E+$*I,U=N,B=X,j=F),G=Math.atan2(B,W),v.rotation=G*L,G&&(z=-b>G||G>b,I=Math.cos(-G),E=Math.sin(-G),U=U*I+q*E,X=B*I+W*E,W=B*-E+W*I,Z=j*-E+Z*I,B=X),z&&K?v.rotation=v.rotationX=0:z&&Y?v.rotation=v.rotationY=0:Y&&K&&(v.rotationY=v.rotationX=0),v.scaleX=(0|Math.sqrt(U*U+B*B)*x+.5)/x,v.scaleY=(0|Math.sqrt(W*W+R*R)*x+.5)/x,v.scaleZ=(0|Math.sqrt(Z*Z+k*k)*x+.5)/x,v.skewX=0,v.perspective=$?1/(0>$?-$:$):0,v.x=C,v.y=O,v.z=D}}else if(!(we&&!s&&n.length&&v.x===n[4]&&v.y===n[5]&&(v.rotationX||v.rotationY)||void 0!==v.x&&"none"===Q(t,"display",e))){var J=n.length>=6,te=J?n[0]:1,ee=n[1]||0,ie=n[2]||0,se=J?n[3]:1;v.x=n[4]||0,v.y=n[5]||0,u=Math.sqrt(te*te+ee*ee),_=Math.sqrt(se*se+ie*ie),p=te||ee?Math.atan2(ee,te)*L:v.rotation||0,f=ie||se?Math.atan2(ie,se)*L+p:v.skewX||0,c=u-Math.abs(v.scaleX||0),d=_-Math.abs(v.scaleY||0),Math.abs(f)>90&&270>Math.abs(f)&&(y?(u*=-1,f+=0>=p?180:-180,p+=0>=p?180:-180):(_*=-1,f+=0>=f?180:-180)),m=(p-v.rotation)%180,g=(f-v.skewX)%180,(void 0===v.skewX||c>T||-T>c||d>T||-T>d||m>-w&&w>m&&false|m*x||g>-w&&w>g&&false|g*x)&&(v.scaleX=u,v.scaleY=_,v.rotation=p,v.skewX=f),we&&(v.rotationX=v.rotationY=v.z=0,v.perspective=parseFloat(a.defaultTransformPerspective)||0,v.scaleZ=1)}v.zOrigin=P;for(o in v)T>v[o]&&v[o]>-T&&(v[o]=0);return i&&(t._gsTransform=v),v},Pe=function(t){var e,i,s=this.data,r=-s.rotation*M,n=r+s.skewX*M,a=1e5,o=(0|Math.cos(r)*s.scaleX*a)/a,l=(0|Math.sin(r)*s.scaleX*a)/a,h=(0|Math.sin(n)*-s.scaleY*a)/a,u=(0|Math.cos(n)*s.scaleY*a)/a,_=this.t.style,p=this.t.currentStyle;if(p){i=l,l=-h,h=-i,e=p.filter,_.filter="";var f,d,m=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==p.position,x="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+l+", M21="+h+", M22="+u,w=s.x,b=s.y;if(null!=s.ox&&(f=(s.oxp?.01*m*s.ox:s.ox)-m/2,d=(s.oyp?.01*g*s.oy:s.oy)-g/2,w+=f-(f*o+d*l),b+=d-(f*h+d*u)),v?(f=m/2,d=g/2,x+=", Dx="+(f-(f*o+d*l)+w)+", Dy="+(d-(f*h+d*u)+b)+")"):x+=", sizingMethod='auto expand')",_.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(O,x):x+" "+e,(0===t||1===t)&&1===o&&0===l&&0===h&&1===u&&(v&&-1===x.indexOf("Dx=0, Dy=0")||T.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&_.removeAttribute("filter")),!v){var P,S,R,k=8>c?1:-1;for(f=s.ieOffsetX||0,d=s.ieOffsetY||0,s.ieOffsetX=Math.round((m-((0>o?-o:o)*m+(0>l?-l:l)*g))/2+w),s.ieOffsetY=Math.round((g-((0>u?-u:u)*g+(0>h?-h:h)*m))/2+b),ce=0;4>ce;ce++)S=J[ce],P=p[S],i=-1!==P.indexOf("px")?parseFloat(P):Z(this.t,S,parseFloat(P),P.replace(y,""))||0,R=i!==s[S]?2>ce?-s.ieOffsetX:-s.ieOffsetY:2>ce?f-s.ieOffsetX:d-s.ieOffsetY,_[S]=(s[S]=Math.round(i-R*(0===ce||2===ce?1:k)))+"px"}}},Se=function(){var t,e,i,s,r,n,a,o,l,h,u,_,f,c,d,m,g,v,y,T,x,w,b,P,S,R,k=this.data,C=this.t.style,A=k.rotation*M,O=k.scaleX,D=k.scaleY,L=k.scaleZ,N=k.perspective;if(p&&(P=C.top?"top":C.bottom?"bottom":parseFloat(Q(this.t,"top",null,!1))?"bottom":"top",T=Q(this.t,P,null,!1),S=parseFloat(T)||0,R=T.substr((S+"").length)||"px",k._ffFix=!k._ffFix,C[P]=(k._ffFix?S+.05:S-.05)+R,S=1e-4,S>O&&O>-S&&(O=L=2e-5),S>D&&D>-S&&(D=L=2e-5)),A||k.skewX)v=Math.cos(A),y=Math.sin(A),t=v,r=y,k.skewX&&(A-=k.skewX*M,v=Math.cos(A),y=Math.sin(A)),e=-y,n=v;else{if(!(k.rotationY||k.rotationX||1!==L||N))return C[ye]="translate3d("+k.x+"px,"+k.y+"px,"+k.z+"px)"+(1!==O||1!==D?" scale("+O+","+D+")":""),void 0;t=n=1,e=r=0}u=1,i=s=a=o=l=h=_=f=c=0,d=N?-1/N:0,m=k.zOrigin,g=1e5,A=k.rotationY*M,A&&(v=Math.cos(A),y=Math.sin(A),l=u*-y,f=d*-y,i=t*y,a=r*y,u*=v,d*=v,t*=v,r*=v),A=k.rotationX*M,A&&(v=Math.cos(A),y=Math.sin(A),T=e*v+i*y,x=n*v+a*y,w=h*v+u*y,b=c*v+d*y,i=e*-y+i*v,a=n*-y+a*v,u=h*-y+u*v,d=c*-y+d*v,e=T,n=x,h=w,c=b),1!==L&&(i*=L,a*=L,u*=L,d*=L),1!==D&&(e*=D,n*=D,h*=D,c*=D),1!==O&&(t*=O,r*=O,l*=O,f*=O),m&&(_-=m,s=i*_,o=a*_,_=u*_+m),s=(T=(s+=k.x)-(s|=0))?(0|T*g+(0>T?-.5:.5))/g+s:s,o=(T=(o+=k.y)-(o|=0))?(0|T*g+(0>T?-.5:.5))/g+o:o,_=(T=(_+=k.z)-(_|=0))?(0|T*g+(0>T?-.5:.5))/g+_:_,C[ye]="matrix3d("+[(0|t*g)/g,(0|r*g)/g,(0|l*g)/g,(0|f*g)/g,(0|e*g)/g,(0|n*g)/g,(0|h*g)/g,(0|c*g)/g,(0|i*g)/g,(0|a*g)/g,(0|u*g)/g,(0|d*g)/g,s,o,_,N?1+-_/N:1].join(",")+")"},Re=function(){var t,e,i,s,r,n,a,o,l,h=this.data,u=this.t,_=u.style;p&&(t=_.top?"top":_.bottom?"bottom":parseFloat(Q(u,"top",null,!1))?"bottom":"top",e=Q(u,t,null,!1),i=parseFloat(e)||0,s=e.substr((i+"").length)||"px",h._ffFix=!h._ffFix,_[t]=(h._ffFix?i+.05:i-.05)+s),h.rotation||h.skewX?(r=h.rotation*M,n=r-h.skewX*M,a=1e5,o=h.scaleX*a,l=h.scaleY*a,_[ye]="matrix("+(0|Math.cos(r)*o)/a+","+(0|Math.sin(r)*o)/a+","+(0|Math.sin(n)*-l)/a+","+(0|Math.cos(n)*l)/a+","+h.x+","+h.y+")"):_[ye]="matrix("+h.scaleX+",0,0,"+h.scaleY+","+h.x+","+h.y+")"};me("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D",{parser:function(t,e,i,s,n,a,o){if(s._transform)return n;var l,h,u,_,p,f,c,d=s._transform=be(t,r,!0,o.parseTransform),m=t.style,g=1e-6,v=ve.length,y=o,T={};if("string"==typeof y.transform&&ye)u=m.cssText,m[ye]=y.transform,m.display="block",l=be(t,null,!1),m.cssText=u;else if("object"==typeof y){if(l={scaleX:se(null!=y.scaleX?y.scaleX:y.scale,d.scaleX),scaleY:se(null!=y.scaleY?y.scaleY:y.scale,d.scaleY),scaleZ:se(null!=y.scaleZ?y.scaleZ:y.scale,d.scaleZ),x:se(y.x,d.x),y:se(y.y,d.y),z:se(y.z,d.z),perspective:se(y.transformPerspective,d.perspective)},c=y.directionalRotation,null!=c)if("object"==typeof c)for(u in c)y[u]=c[u];else y.rotation=c;l.rotation=re("rotation"in y?y.rotation:"shortRotation"in y?y.shortRotation+"_short":"rotationZ"in y?y.rotationZ:d.rotation,d.rotation,"rotation",T),we&&(l.rotationX=re("rotationX"in y?y.rotationX:"shortRotationX"in y?y.shortRotationX+"_short":d.rotationX||0,d.rotationX,"rotationX",T),l.rotationY=re("rotationY"in y?y.rotationY:"shortRotationY"in y?y.shortRotationY+"_short":d.rotationY||0,d.rotationY,"rotationY",T)),l.skewX=null==y.skewX?d.skewX:re(y.skewX,d.skewX),l.skewY=null==y.skewY?d.skewY:re(y.skewY,d.skewY),(h=l.skewY-d.skewY)&&(l.skewX+=h,l.rotation+=h)}for(null!=y.force3D&&(d.force3D=y.force3D,f=!0),p=d.force3D||d.z||d.rotationX||d.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,p||null==y.scale||(l.scaleZ=1);--v>-1;)i=ve[v],_=l[i]-d[i],(_>g||-g>_||null!=N[i])&&(f=!0,n=new pe(d,i,d[i],_,n),i in T&&(n.e=T[i]),n.xs0=0,n.plugin=a,s._overwriteProps.push(n.n));return _=y.transformOrigin,(_||we&&p&&d.zOrigin)&&(ye?(f=!0,i=xe,_=(_||Q(t,i,r,!1,"50% 50%"))+"",n=new pe(m,i,0,0,n,-1,"transformOrigin"),n.b=m[i],n.plugin=a,we?(u=d.zOrigin,_=_.split(" "),d.zOrigin=(_.length>2&&(0===u||"0px"!==_[2])?parseFloat(_[2]):u)||0,n.xs0=n.e=m[i]=_[0]+" "+(_[1]||"50%")+" 0px",n=new pe(d,"zOrigin",0,0,n,-1,n.n),n.b=u,n.xs0=n.e=d.zOrigin):n.xs0=n.e=m[i]=_):ee(_+"",d)),f&&(s._transformType=p||3===this._transformType?3:2),n},prefix:!0}),me("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),me("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,l,h,u,_,p,f,c,d,m,g,v,y,T,x,w,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(d=parseFloat(t.offsetWidth),m=parseFloat(t.offsetHeight),o=e.split(" "),l=0;b.length>l;l++)this.p.indexOf("border")&&(b[l]=q(b[l])),_=u=Q(t,b[l],r,!1,"0px"),-1!==_.indexOf(" ")&&(u=_.split(" "),_=u[0],u=u[1]),p=h=o[l],f=parseFloat(_),v=_.substr((f+"").length),y="="===p.charAt(1),y?(c=parseInt(p.charAt(0)+"1",10),p=p.substr(2),c*=parseFloat(p),g=p.substr((c+"").length-(0>c?1:0))||""):(c=parseFloat(p),g=p.substr((c+"").length)),""===g&&(g=s[i]||v),g!==v&&(T=Z(t,"borderLeft",f,v),x=Z(t,"borderTop",f,v),"%"===g?(_=100*(T/d)+"%",u=100*(x/m)+"%"):"em"===g?(w=Z(t,"borderLeft",1,"em"),_=T/w+"em",u=x/w+"em"):(_=T+"px",u=x+"px"),y&&(p=parseFloat(_)+c+g,h=parseFloat(u)+c+g)),a=fe(P,b[l],_+" "+u,p+" "+h,!1,"0px",a);return a},prefix:!0,formatter:he("0px 0px 0px 0px",!1,!0)}),me("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,l,h,u,_,p,f="background-position",d=r||W(t,null),m=this.format((d?c?d.getPropertyValue(f+"-x")+" "+d.getPropertyValue(f+"-y"):d.getPropertyValue(f):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==m.indexOf("%")!=(-1!==g.indexOf("%"))&&(p=Q(t,"backgroundImage").replace(R,""),p&&"none"!==p)){for(o=m.split(" "),l=g.split(" "),I.setAttribute("src",p),h=2;--h>-1;)m=o[h],u=-1!==m.indexOf("%"),u!==(-1!==l[h].indexOf("%"))&&(_=0===h?t.offsetWidth-I.width:t.offsetHeight-I.height,o[h]=u?parseFloat(m)/100*_+"px":100*(parseFloat(m)/_)+"%");m=o.join(" ")}return this.parseComplex(t.style,m,g,n,a)},formatter:ee}),me("backgroundSize",{defaultValue:"0 0",formatter:ee}),me("perspective",{defaultValue:"0px",prefix:!0}),me("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),me("transformStyle",{prefix:!0}),me("backfaceVisibility",{prefix:!0}),me("userSelect",{prefix:!0}),me("margin",{parser:ue("marginTop,marginRight,marginBottom,marginLeft")}),me("padding",{parser:ue("paddingTop,paddingRight,paddingBottom,paddingLeft")}),me("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,l,h;return 9>c?(l=t.currentStyle,h=8>c?" ":",",o="rect("+l.clipTop+h+l.clipRight+h+l.clipBottom+h+l.clipLeft+")",e=this.format(e).split(",").join(h)):(o=this.format(Q(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),me("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),me("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),me("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,"borderTopWidth",r,!1,"0px")+" "+Q(t,"borderTopStyle",r,!1,"solid")+" "+Q(t,"borderTopColor",r,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(le)||["#000"])[0]}}),me("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new pe(n,a,0,0,r,-1,i,!1,0,n[a],e)}});var ke=function(t){var e,i=this.t,s=i.filter||Q(this.data,"filter"),r=0|this.s+this.c*t;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")&&-1===s.indexOf("oader(")?(i.removeAttribute("filter"),e=!Q(this.data,"filter")):(i.filter=s.replace(w,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity="+r+")"),-1===s.indexOf("opacity")?0===r&&this.xn1||(i.filter=s+" alpha(opacity="+r+")"):i.filter=s.replace(T,"opacity="+r))};me("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o=parseFloat(Q(t,"opacity",r,!1,"1")),l=t.style,h="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),h&&1===o&&"hidden"===Q(t,"visibility",r)&&0!==e&&(o=0),z?n=new pe(l,"opacity",o,e-o,n):(n=new pe(l,"opacity",100*o,100*(e-o),n),n.xn1=h?1:0,l.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=ke),h&&(n=new pe(l,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",s._overwriteProps.push(n.n),s._overwriteProps.push(i)),n}});var Ce=function(t,e){e&&(t.removeProperty?t.removeProperty(e.replace(P,"-$1").toLowerCase()):t.removeAttribute(e))},Ae=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.className=0===t?this.b:this.e;for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Ce(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.className!==this.e&&(this.t.className=this.e)};me("className",{parser:function(t,e,s,n,a,o,l){var h,u,_,p,f,c=t.className,d=t.style.cssText;if(a=n._classNamePT=new pe(t,s,0,0,a,2),a.setRatio=Ae,a.pr=-11,i=!0,a.b=c,u=$(t,r),_=t._gsClassPT){for(p={},f=_.data;f;)p[f.p]=1,f=f._next;_.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:c.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),n._tween._duration&&(t.className=a.e,h=G(t,u,$(t),l,p),t.className=c,a.data=h.firstMPT,t.style.cssText=d,a=a.xfirst=n.parse(t,h.difs,a,o)),a}});var Oe=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,s,r,n=this.t.style,a=o.transform.parse;if("all"===this.e)n.cssText="",r=!0;else for(e=this.e.split(","),s=e.length;--s>-1;)i=e[s],o[i]&&(o[i].parse===a?r=!0:i="transformOrigin"===i?xe:o[i].p),Ce(n,i);r&&(Ce(n,ye),this.t._gsTransform&&delete this.t._gsTransform)}};for(me("clearProps",{parser:function(t,e,s,r,n){return n=new pe(t,s,0,0,n,2),n.setRatio=Oe,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),l="bezier,throwProps,physicsProps,physics2D".split(","),ce=l.length;ce--;)ge(l[ce]);l=a.prototype,l._firstPT=null,l._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,h=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=W(t,""),n=this._overwriteProps;var l,p,c,d,m,g,v,y,T,w=t.style;if(u&&""===w.zIndex&&(l=Q(t,"zIndex",r),("auto"===l||""===l)&&(w.zIndex=0)),"string"==typeof e&&(d=w.cssText,l=$(t,r),w.cssText=d+";"+e,l=G(t,l,$(t)).difs,!z&&x.test(e)&&(l.opacity=parseFloat(RegExp.$1)),e=l,w.cssText=d),this._firstPT=p=this.parse(t,e,null),this._transformType){for(T=3===this._transformType,ye?_&&(u=!0,""===w.zIndex&&(v=Q(t,"zIndex",r),("auto"===v||""===v)&&(w.zIndex=0)),f&&(w.WebkitBackfaceVisibility=this._vars.WebkitBackfaceVisibility||(T?"visible":"hidden"))):w.zoom=1,c=p;c&&c._next;)c=c._next;y=new pe(t,"transform",0,0,null,2),this._linkCSSP(y,null,c),y.setRatio=T&&we?Se:ye?Re:Pe,y.data=this._transform||be(t,r,!0),n.pop()}if(i){for(;p;){for(g=p._next,c=d;c&&c.pr>p.pr;)c=c._next;(p._prev=c?c._prev:m)?p._prev._next=p:d=p,(p._next=c)?c._prev=p:m=p,p=g}this._firstPT=d}return!0},l.parse=function(t,e,i,n){var a,l,u,_,p,f,c,d,m,g,v=t.style;for(a in e)f=e[a],l=o[a],l?i=l.parse(t,f,a,this,i,n,e):(p=Q(t,a,r)+"",m="string"==typeof f,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||m&&b.test(f)?(m||(f=oe(f),f=(f.length>3?"rgba(":"rgb(")+f.join(",")+")"),i=fe(v,a,p,f,!0,"transparent",i,0,n)):!m||-1===f.indexOf(" ")&&-1===f.indexOf(",")?(u=parseFloat(p),c=u||0===u?p.substr((u+"").length):"",(""===p||"auto"===p)&&("width"===a||"height"===a?(u=te(t,a,r),c="px"):"left"===a||"top"===a?(u=H(t,a,r),c="px"):(u="opacity"!==a?0:1,c="")),g=m&&"="===f.charAt(1),g?(_=parseInt(f.charAt(0)+"1",10),f=f.substr(2),_*=parseFloat(f),d=f.replace(y,"")):(_=parseFloat(f),d=m?f.substr((_+"").length)||"":""),""===d&&(d=s[a]||c),f=_||0===_?(g?_+u:_)+d:e[a],c!==d&&""!==d&&(_||0===_)&&(u||0===u)&&(u=Z(t,a,u,c),"%"===d?(u/=Z(t,a,100,"%")/100,u>100&&(u=100),e.strictUnits!==!0&&(p=u+"%")):"em"===d?u/=Z(t,a,1,"em"):(_=Z(t,a,_,d),d="px"),g&&(_||0===_)&&(f=_+u+d)),g&&(_+=u),!u&&0!==u||!_&&0!==_?void 0!==v[a]&&(f||"NaN"!=f+""&&null!=f)?(i=new pe(v,a,_||u||0,0,i,-1,a,!1,0,p,f),i.xs0="none"!==f||"display"!==a&&-1===a.indexOf("Style")?f:p):B("invalid "+a+" tween value: "+e[a]):(i=new pe(v,a,u,_-u,i,0,a,h!==!1&&("px"===d||"zIndex"===a),0,p,f),i.xs0=d)):i=fe(v,a,p,f,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},l.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=e>0?0|e+.5:0|e-.5:n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;)2!==r.type?r.t[r.p]=r.e:r.setRatio(t),r=r._next},l._enableTransforms=function(t){this._transformType=t||3===this._transformType?3:2,this._transform=this._transform||be(this._target,r,!0)},l._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,s=!0),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},l._kill=function(e){var i,s,r,n=e;if(e.autoAlpha||e.alpha){n={};for(s in e)n[s]=e[s];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var De=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)De(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push($(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||De(n,e,i)};return a.cascadeTo=function(t,i,s){var r,n,a,o=e.to(t,i,s),l=[o],h=[],u=[],_=[],p=e._internals.reservedProps;for(t=o._targets||o.target,De(t,h,_),o.render(i,!0),De(t,u),o.render(0,!0),o._enabled(!0),r=_.length;--r>-1;)if(n=G(_[r],h[r],u[r]),n.firstMPT){n=n.difs;for(a in s)p[a]&&(n[a]=s[a]);l.push(e.to(_[r],i,n))}return l},t.activate([a]),a},!0)}),window._gsDefine&&window._gsQueue.pop()();

// WAIT FOR IMAGES
/*
 * waitForImages 1.4
 * -----------------
 * Provides a callback when all images have loaded in your given selector.
 * http://www.alexanderdickson.com/
 *
 *
 * Copyright (c) 2011 Alex Dickson
 * Licensed under the MIT licenses.
 * See website for more info.
 *
 */

(function(e,t){
		e.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage"]};e.expr[":"].uncached=function(t){var n=document.createElement("img");n.src=t.src;return e(t).is('img[src!=""]')&&!n.complete};e.fn.waitForImages=function(t,n,r){if(e.isPlainObject(arguments[0])){n=t.each;r=t.waitForAll;t=t.finished}t=t||e.noop;n=n||e.noop;r=!!r;if(!e.isFunction(t)||!e.isFunction(n)){throw new TypeError("An invalid callback was supplied.")}return this.each(function(){var i=e(this),s=[];if(r){var o=e.waitForImages.hasImageProperties||[],u=/url\((['"]?)(.*?)\1\)/g;i.find("*").each(function(){var t=e(this);if(t.is("img:uncached")){s.push({src:t.attr("src"),element:t[0]})}e.each(o,function(e,n){var r=t.css(n);if(!r){return true}var i;while(i=u.exec(r)){s.push({src:i[2],element:t[0]})}})})}else{i.find("img:uncached").each(function(){s.push({src:this.src,element:this})})}var f=s.length,l=0;if(f==0){t.call(i[0])}e.each(s,function(r,s){var o=new Image;e(o).bind("load error",function(e){l++;n.call(s.element,l,f,e.type=="load");if(l==f){t.call(i[0]);return false}});o.src=s.src})})};
		e.fn.swipe=function(t){if(!this)return false;var n={fingers:1,threshold:75,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,click:null,triggerOnTouchEnd:true,allowPageScroll:"auto"};var r="left";var i="right";var s="up";var o="down";var u="none";var f="horizontal";var l="vertical";var c="auto";var h="start";var p="move";var d="end";var v="cancel";var m="ontouchstart"in window,g=m?"touchstart":"mousedown",y=m?"touchmove":"mousemove",b=m?"touchend":"mouseup",w="touchcancel";var E="start";if(t.allowPageScroll==undefined&&(t.swipe!=undefined||t.swipeStatus!=undefined))t.allowPageScroll=u;if(t)e.extend(n,t);return this.each(function(){function t(){var e=S();if(e<=45&&e>=0)return r;else if(e<=360&&e>=315)return r;else if(e>=135&&e<=225)return i;else if(e>45&&e<135)return o;else return s}function S(){var e=H.x-B.x;var t=B.y-H.y;var n=Math.atan2(t,e);var r=Math.round(n*180/Math.PI);if(r<0)r=360-Math.abs(r);return r}function x(){return Math.round(Math.sqrt(Math.pow(B.x-H.x,2)+Math.pow(B.y-H.y,2)))}function T(e,t){if(n.allowPageScroll==u){e.preventDefault()}else{var a=n.allowPageScroll==c;switch(t){case r:if(n.swipeLeft&&a||!a&&n.allowPageScroll!=f)e.preventDefault();break;case i:if(n.swipeRight&&a||!a&&n.allowPageScroll!=f)e.preventDefault();break;case s:if(n.swipeUp&&a||!a&&n.allowPageScroll!=l)e.preventDefault();break;case o:if(n.swipeDown&&a||!a&&n.allowPageScroll!=l)e.preventDefault();break}}}function N(e,t){if(n.swipeStatus)n.swipeStatus.call(_,e,t,direction||null,distance||0);if(t==v){if(n.click&&(P==1||!m)&&(isNaN(distance)||distance==0))n.click.call(_,e,e.target)}if(t==d){if(n.swipe){n.swipe.call(_,e,direction,distance)}switch(direction){case r:if(n.swipeLeft)n.swipeLeft.call(_,e,direction,distance);break;case i:if(n.swipeRight)n.swipeRight.call(_,e,direction,distance);break;case s:if(n.swipeUp)n.swipeUp.call(_,e,direction,distance);break;case o:if(n.swipeDown)n.swipeDown.call(_,e,direction,distance);break}}}function C(e){P=0;H.x=0;H.y=0;B.x=0;B.y=0;F.x=0;F.y=0}function L(e){e.preventDefault();distance=x();direction=t();if(n.triggerOnTouchEnd){E=d;if((P==n.fingers||!m)&&B.x!=0){if(distance>=n.threshold){N(e,E);C(e)}else{E=v;N(e,E);C(e)}}else{E=v;N(e,E);C(e)}}else if(E==p){E=v;N(e,E);C(e)}M.removeEventListener(y,A,false);M.removeEventListener(b,L,false)}function A(e){if(E==d||E==v)return;var r=m?e.touches[0]:e;B.x=r.pageX;B.y=r.pageY;direction=t();if(m){P=e.touches.length}E=p;T(e,direction);if(P==n.fingers||!m){distance=x();if(n.swipeStatus)N(e,E,direction,distance);if(!n.triggerOnTouchEnd){if(distance>=n.threshold){E=d;N(e,E);C(e)}}}else{E=v;N(e,E);C(e)}}function O(e){var t=m?e.touches[0]:e;E=h;if(m){P=e.touches.length}distance=0;direction=null;if(P==n.fingers||!m){H.x=B.x=t.pageX;H.y=B.y=t.pageY;if(n.swipeStatus)N(e,E)}else{C(e)}M.addEventListener(y,A,false);M.addEventListener(b,L,false)}var M=this;var _=e(this);var D=null;var P=0;var H={x:0,y:0};var B={x:0,y:0};var F={x:0,y:0};try{this.addEventListener(g,O,false);this.addEventListener(w,C)}catch(I){}})}
})(jQuery)
;

/* revslider-jquery.themepunch.revolution.min: (https://5b9732f9943c7.t73.qifeiye.com/qfy-content/plugins/revslider/rs-plugin/js/jquery.themepunch.revolution.min.js?rev=4.1.4) */


/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 4.1.2 (12.12.2013)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
**************************************************************************/


(function(jQuery,undefined){

	
	////////////////////////////////////////
	// THE REVOLUTION PLUGIN STARTS HERE //
	///////////////////////////////////////

	jQuery.fn.extend({

		// OUR PLUGIN HERE :)
		revolution: function(options) {



				////////////////////////////////
				// SET DEFAULT VALUES OF ITEM //
				////////////////////////////////
				jQuery.fn.revolution.defaults = {
					delay:9000,
					startheight:500,
					startwidth:960,
					fullScreenAlignForce:"off",
					autoHeight:"off",

					hideThumbs:200,

					thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
					thumbHeight:50,
					thumbAmount:3,

					navigationType:"bullet",				// bullet, thumb, none
					navigationArrows:"solo",			// nextto, solo, none
					navigation_arrows_style:'defalut',
					hideThumbsOnMobile:"off",
					hideBulletsOnMobile:"off",
					hideArrowsOnMobile:"off",
					hideThumbsUnderResoluition:0,

					navigationStyle:"round",				// round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item),

					navigationHAlign:"center",				// Vertical Align top,center,bottom
					navigationVAlign:"bottom",					// Horizontal Align left,center,right
					navigationHOffset:0,
					navigationVOffset:20,

					soloArrowLeftHalign:"left",
					soloArrowLeftValign:"center",
					soloArrowLeftHOffset:20,
					soloArrowLeftVOffset:0,

					soloArrowRightHalign:"right",
					soloArrowRightValign:"center",
					soloArrowRightHOffset:20,
					soloArrowRightVOffset:0,

					keyboardNavigation:"on",

					touchenabled:"on",						// Enable Swipe Function : on/off
					onHoverStop:"on",						// Stop Banner Timet at Hover on Slide on/off


					stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
					stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

					hideCaptionAtLimit:0,					// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
					hideAllCaptionAtLimit:0,				// Hide all The Captions if Width of Browser is less then this value
					hideSliderAtLimit:0,					// Hide the whole slider, and stop also functions if Width of Browser is less than this value

					shadow:0,								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
					fullWidth:"off",						// Turns On or Off the Fullwidth Image Centering in FullWidth Modus
					fullScreen:"off",
					minFullScreenHeight:0,					// The Minimum FullScreen Height
					fullScreenOffsetContainer:"",
					dottedOverlay:"none",					//twoxtwo, threexthree, twoxtwowhite, threexthreewhite

					forceFullWidth:"off"						// Force The FullWidth

				};

					options = jQuery.extend({}, jQuery.fn.revolution.defaults, options);





					return this.each(function() {

						var opt=options;

						if (opt.fullWidth!="on" && opt.fullScreen!="on") opt.autoHeight = "off";
						if (opt.fullScreen=="on") opt.autoHeight = "on";
						if (opt.fullWidth!="on" && opt.fullScreen!="on") forceFulWidth="off";

						var container=jQuery(this);
					
						if (opt.fullWidth=="on" && opt.autoHeight=="off")
							container.css({maxHeight:opt.startheight+"px"});

						if (is_mobile() && opt.hideThumbsOnMobile=="on" && opt.navigationType=="thumb")
						   opt.navigationType = "none"

						if (is_mobile() && opt.hideBulletsOnMobile=="on" && opt.navigationType=="bullet")
						   opt.navigationType = "none"

						if (is_mobile() && opt.hideBulletsOnMobile=="on" && opt.navigationType=="both")
						   opt.navigationType = "none"

						if (is_mobile() && opt.hideArrowsOnMobile=="on")
						   opt.navigationArrows = "none"

						if (opt.forceFullWidth=="on") {

							var loff = container.parent().offset().left;
							var mb = container.parent().css('marginBottom');
							var mt = container.parent().css('marginTop');
							if (mb==undefined) mb=0;
							if (mt==undefined) mt=0;

							container.parent().wrap('<div style="position:relative;width:100%;height:auto;margin-top:'+mt+';margin-bottom:'+mb+'" class="forcefullwidth_wrapper_tp_banner"></div>');
							container.closest('.forcefullwidth_wrapper_tp_banner').append('<div class="tp-fullwidth-forcer" style="width:100%;height:'+container.height()+'px"></div>');
							container.css({'backgroundColor':container.parent().css('backgroundColor'),'backgroundImage':container.parent().css('backgroundImage')});
							//container.parent().css({'position':'absolute','width':jQuery(window).width()});
							container.parent().css({'left':(0-loff)+"px",position:'absolute','width':jQuery(window).width()});
							opt.width=jQuery(window).width();
						}

						// HIDE THUMBS UNDER RESOLUTION
						try{
							if (opt.hideThumbsUnderResolution>jQuery(window).width() && opt.hideThumbsUnderResolution!=0) {
								container.parent().find('.tp-bullets.tp-thumbs').css({display:"none"});
							} else {
								container.parent().find('.tp-bullets.tp-thumbs').css({display:"block"});
							}
						} catch(e) {}

						if (!container.hasClass("revslider-initialised")) {

									container.addClass("revslider-initialised");
									if (container.attr('id')==undefined) container.attr('id',"revslider-"+Math.round(Math.random()*1000+5));

									// CHECK IF FIREFOX 13 IS ON WAY.. IT HAS A STRANGE BUG, CSS ANIMATE SHOULD NOT BE USED



									opt.firefox13 = false;
									opt.ie = !jQuery.support.opacity;
									opt.ie9 = (document.documentMode == 9);


									// CHECK THE jQUERY VERSION
									var version = jQuery.fn.jquery.split('.'),
										versionTop = parseFloat(version[0]),
										versionMinor = parseFloat(version[1]),
										versionIncrement = parseFloat(version[2] || '0');

									if (versionTop==1 && versionMinor < 7) {
										container.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:'+version+' <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>');
									}

									if (versionTop>1) opt.ie=false;


									// Delegate .transition() calls to .animate()
									// if the browser can't do CSS transitions.
									if (!jQuery.support.transition)
										jQuery.fn.transition = jQuery.fn.animate;

									// CATCH THE CONTAINER


									 // LOAD THE YOUTUBE API IF NECESSARY

									container.find('.caption').each(function() { jQuery(this).addClass('tp-caption')});

									if (is_mobile()) {
										container.find('.tp-caption').each(function() {
											if (jQuery(this).data('autoplay')==true)
												 jQuery(this).data('autoplay',false);
											// && jQuery(this).data('forcecover')!=1)
										})
									}


									var addedyt=0;
									var addedvim=0;
									var addedvid=0;
									var httpprefix = "http";

									if (location.protocol === 'https:') {
											httpprefix = "https";
									}
									container.find('.tp-caption iframe').each(function(i) {
										try {

												if (jQuery(this).attr('src').indexOf('you')>0 && addedyt==0) {
													addedyt=1;
													var s = document.createElement("script");
													s.src = httpprefix+"://www.youtube.com/player_api"; /* Load Player API*/
													var before = document.getElementsByTagName("script")[0];
													var loadit = true;
													jQuery('head').find('*').each(function(){
														if (jQuery(this).attr('src') == httpprefix+"://www.youtube.com/iframe_api")
														   loadit = false;
													});
													if (loadit)
														before.parentNode.insertBefore(s, before);
												}
											} catch(e) {}
									});



									 // LOAD THE VIMEO API
									 container.find('.tp-caption iframe').each(function(i) {
										try{
												if (jQuery(this).attr('src').indexOf('vim')>0 && addedvim==0) {
													addedvim=1;
													var f = document.createElement("script");
													f.src = httpprefix+"://a.vimeocdn.com/js/froogaloop2.min.js"; /* Load Player API*/
													var before = document.getElementsByTagName("script")[0];

													var loadit = true;
													jQuery('head').find('*').each(function(){
														if (jQuery(this).attr('src') == httpprefix+"://a.vimeocdn.com/js/froogaloop2.min.js")
														   loadit = false;
													});
													if (loadit)
														before.parentNode.insertBefore(f, before);
												}
											} catch(e) {}
									});





									// LOAD THE VIDEO.JS API IF NEEDED
									container.find('.tp-caption video').each(function(i) {
										try{
												if (jQuery(this).hasClass('video-js') && addedvid==0) {
													addedvid=1;
													var f = document.createElement("script");
													f.src = opt.videoJsPath+"video.js"; /* Load Player API*/
													var before = document.getElementsByTagName("script")[0];

													var loadit = true;
													jQuery('head').find('*').each(function(){
														if (jQuery(this).attr('src') == opt.videoJsPath+"video.js")
														   loadit = false;
													});
													if (loadit) {
														before.parentNode.insertBefore(f, before);
														jQuery('head').append('<link rel="stylesheet" type="text/css" href="'+opt.videoJsPath+'video-js.min.css" media="screen" />');
														jQuery('head').append('<script> videojs.options.flash.swf = "'+opt.videoJsPath+'video-js.swf";</script>');
													}
												}
											} catch(e) {}
									});

									// SHUFFLE MODE
									if (opt.shuffle=="on") {
										for (var u=0;u<container.find('>ul:first-child >li').length;u++) {
											var it = Math.round(Math.random()*container.find('>ul:first-child >li').length);
											container.find('>ul:first-child >li:eq('+it+')').prependTo(container.find('>ul:first-child'));
										}
									}


									// CREATE SOME DEFAULT OPTIONS FOR LATER
									opt.slots=4;
									opt.act=-1;
									opt.next=0;

									// IF START SLIDE IS SET
									if (opt.startWithSlide !=undefined) opt.next=opt.startWithSlide;
									
									// IF DEEPLINK HAS BEEN SET
									var deeplink = getUrlVars("#")[0];
									if (deeplink.length<9) {
										if (deeplink.split('slide').length>1) {
											var dslide=parseInt(deeplink.split('slide')[1],0);
											if (dslide<1) dslide=1;
											if (dslide>container.find('>ul:first >li').length) dslide=container.find('>ul:first >li').length;
											opt.next=dslide-1;
										}
									}


									opt.origcd=opt.delay;
									opt.firststart=1;

									// BASIC OFFSET POSITIONS OF THE BULLETS
									if (opt.navigationHOffset==undefined) opt.navOffsetHorizontal=0;
									if (opt.navigationVOffset==undefined) opt.navOffsetVertical=0;


									container.append('<div class="tp-loader"></div>');

									// RESET THE TIMER
									if (container.find('.tp-bannertimer').length==0) container.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');
									var bt=container.find('.tp-bannertimer');
									if (bt.length>0) {
										bt.css({'width':'0%'});
									};


									// WE NEED TO ADD A BASIC CLASS FOR SETTINGS.CSS
									container.addClass("tp-simpleresponsive");
									opt.container=container;

									//if (container.height()==0) container.height(opt.startheight);

									// AMOUNT OF THE SLIDES
									opt.slideamount = container.find('>ul:first >li').length;


									// A BASIC GRID MUST BE DEFINED. IF NO DEFAULT GRID EXIST THAN WE NEED A DEFAULT VALUE, ACTUAL SIZE OF CONAINER
									if (container.height()==0) container.height(opt.startheight);
									if (opt.startwidth==undefined || opt.startwidth==0) opt.startwidth=container.width();
									if (opt.startheight==undefined || opt.startheight==0) opt.startheight=container.height();

									// OPT WIDTH && HEIGHT SHOULD BE SET
									opt.width=container.width();
									opt.height=container.height();


									// DEFAULT DEPENDECIES
									opt.bw= opt.startwidth / container.width();
									opt.bh = opt.startheight / container.height();

									// IF THE ITEM ALREADY IN A RESIZED FORM
									if (opt.width!=opt.startwidth) {

										opt.height = Math.round(opt.startheight * (opt.width/opt.startwidth));

										container.height(opt.height);

									}

									// LETS SEE IF THERE IS ANY SHADOW
									if (opt.shadow!=0) {
										container.parent().append('<div class="tp-bannershadow tp-shadow'+opt.shadow+'"></div>');
										var loff=0;
										if (opt.forceFullWidth=="on"){
											var offset = opt.container.parent().offset();
											if(offset){
												loff = 0-offset.left;
											}
										}
										container.parent().find('.tp-bannershadow').css({'width':opt.width,'left':loff});
									}


									container.find('ul').css({'display':'none'});

									var fliparent = container;

									// CHECK IF LAZY LOAD HAS BEEN ACTIVATED
									if (opt.lazyLoad=="on") {
										var fli = container.find('ul >li >img').first();
										if (fli.data('lazyload')!=undefined) fli.attr('src',fli.data('lazyload'));
										fli.data('lazydone',1);
										fliparent = fli.parent();
									}


									// IF IMAGES HAS BEEN LOADED
									fliparent.waitForImages(function() {
												// PREPARE THE SLIDES
												container.find('ul').css({'display':'block'});
												prepareSlides(container,opt);

												// CREATE BULLETS
												if (opt.slideamount >1) createBullets(container,opt);
												if (opt.slideamount >1) createThumbs(container,opt);
												if (opt.slideamount >1) createArrows(container,opt);
												if (opt.keyboardNavigation=="on") createKeyboard(container,opt);

												swipeAction(container,opt);

												if (opt.hideThumbs>0) hideThumbs(container,opt);


												container.waitForImages(function() {
													// START THE FIRST SLIDE

													container.find('.tp-loader').fadeOut(600);
													setTimeout(function() {

														swapSlide(container,opt);
														// START COUNTDOWN
														if (opt.slideamount >1) countDown(container,opt);
														container.trigger('revolution.slide.onloaded');
													},600);

												});
									});



									// IF RESIZED, NEED TO STOP ACTUAL TRANSITION AND RESIZE ACTUAL IMAGES
									jQuery(window).resize(function() {
										if (jQuery('body').find(container)!=0)
											if (opt.forceFullWidth=="on" ) {
												var offset = opt.container.closest('.forcefullwidth_wrapper_tp_banner').offset();
												if(offset){
													var loff = opt.container.closest('.forcefullwidth_wrapper_tp_banner').offset().left;
													//opt.container.parent().css({'width':jQuery(window).width()});
													opt.container.parent().css({'left':(0-loff)+"px",'width':jQuery(window).width()});
												}
											}

											if (container.outerWidth(true)!=opt.width || opt.forceFullWidth=="on") {
													
													containerResized(container,opt);
											}
									});

									// HIDE THUMBS UNDER SIZE...
									try{
										if (opt.hideThumbsUnderResoluition!=0 && opt.navigationType=="thumb") {
											if (opt.hideThumbsUnderResoluition>jQuery(window).width())
												jQuery('.tp-bullets').css({display:"none"});
											 else
											 	jQuery('.tp-bullets').css({display:"block"});
										}
									} catch(e) {}



									// CHECK IF THE CAPTION IS A "SCROLL ME TO POSITION" CAPTION IS
									//if (opt.fullScreen=="on") {
										container.find('.tp-scrollbelowslider').on('click',function() {
												var off=0;
												try{
												 	off = jQuery('body').find(opt.fullScreenOffsetContainer).height();
												 } catch(e) {}
												try{
												 	off = off - jQuery(this).data('scrolloffset');
												 } catch(e) {}

												jQuery('body,html').animate(
													{scrollTop:(container.offset().top+(container.find('>ul >li').height())-off)+"px"},{duration:400});
											});
									//}
						}

					})
				},


		// METHODE PAUSE
		revscroll: function(oy) {
					return this.each(function() {
						var container=jQuery(this);
						jQuery('body,html').animate(
							{scrollTop:(container.offset().top+(container.find('>ul >li').height())-oy)+"px"},{duration:400});
					})
				},
				
		// METHODE PAUSE
		revredraw: function(oy) {
					return this.each(function() {
						var container=jQuery(this);
						var bt = container.parent().find('.tp-bannertimer');
						var opt = bt.data('opt');
						containerResized(container,opt);

					})
				},
		revRefresh: function(obj) {
					
					if(obj.bitAction == "changePostion") {
						
						var s =jQuery(this).find("[data-slideid="+obj.slideid+"] .tp-caption[bitslidetextindex="+obj.textIndex+"]");
						s.data('x',obj.left);
						s.data('y',obj.top);
						s.attr("dataleft",obj.left);
						s.attr("datatop",obj.top);
						s.attr('dataalignhor',"left");
						s.attr('dataalignvert',"top");
						s.attr("data-x",obj.left);
						s.attr("data-y",obj.top);
						s.attr("changePostion",1);
					}
		},
		// METHODE PAUSE
		revpause: function(options) {

					return this.each(function() {
						var container=jQuery(this);
						container.data('conthover',1);
						container.data('conthover-changed',1);
						container.trigger('revolution.slide.onpause');
						var bt = container.parent().find('.tp-bannertimer');
						bt.stop();

					})


				},

		// METHODE RESUME
		revresume: function(options) {
					return this.each(function() {
						var container=jQuery(this);
						container.data('conthover',0);
						container.data('conthover-changed',1);
						container.trigger('revolution.slide.onresume');
						var bt = container.parent().find('.tp-bannertimer');
						var opt = bt.data('opt');
						var t=0;
						if(opt){
							t =((opt.delay-opt.cd)-100);
						}
						bt.animate({'width':"100%"},{duration:t,queue:false, easing:"linear"});
					})

				},

		// METHODE NEXT
		revnext: function(options) {
					return this.each(function() {
						// CATCH THE CONTAINER
						var container=jQuery(this);
						container.parent().find('.tp-rightarrow').click();


					})

				},

		// METHODE RESUME
		revprev: function(options) {
					return this.each(function() {
						// CATCH THE CONTAINER
						var container=jQuery(this);
						container.parent().find('.tp-leftarrow').click();
					})

				},

		// METHODE LENGTH
		revmaxslide: function(options) {
						// CATCH THE CONTAINER
						return jQuery(this).find('>ul:first-child >li').length;
				},


		// METHODE CURRENT
		revcurrentslide: function(options) {
						// CATCH THE CONTAINER
						var container=jQuery(this);
						var bt = container.parent().find('.tp-bannertimer');
						var opt = bt.data('opt');
						return opt.act;
				},

		// METHODE CURRENT
		revlastslide: function(options) {
						// CATCH THE CONTAINER
						var container=jQuery(this);
						var bt = container.parent().find('.tp-bannertimer');
						var opt = bt.data('opt');
						return opt.lastslide;
				},


		// METHODE JUMP TO SLIDE
		revshowslide: function(slide) {
					return this.each(function() {
						// CATCH THE CONTAINER
						var container=jQuery(this);
						container.data('showus',slide);
						container.parent().find('.tp-rightarrow').click();
					})

				}


})


		///////////////////////////
		// GET THE URL PARAMETER //
		///////////////////////////
		function getUrlVars(hashdivider)
			{
				var vars = [], hash;
				var hashes = window.location.href.slice(window.location.href.indexOf(hashdivider) + 1).split('_');
				for(var i = 0; i < hashes.length; i++)
				{
					hashes[i] = hashes[i].replace('%3D',"=");
					hash = hashes[i].split('=');
					vars.push(hash[0]);
					vars[hash[0]] = hash[1];
				}
				return vars;
			}

		//////////////////////////
		//	CONTAINER RESIZED	//
		/////////////////////////
		function containerResized(container,opt) {

			// HIDE THUMBS UNDER SIZE...
			try{
				if (opt.hideThumbsUnderResoluition!=0 && opt.navigationType=="thumb") {
					if (opt.hideThumbsUnderResoluition>jQuery(window).width())
						jQuery('.tp-bullets').css({display:"none"});
					 else
					 	jQuery('.tp-bullets').css({display:"block"});
				}
			} catch(e) {}


			container.find('.defaultimg').each(function(i) {
					setSize(jQuery(this),opt);
			});

			var loff=0;
			if (opt.forceFullWidth=="on")
				var offset = opt.container.parent().offset();
				if(offset){
					loff = 0-offset.left;
				}
			try{
				container.parent().find('.tp-bannershadow').css({'width':opt.width,'left':loff});
			} catch(e) {}

			var actsh = container.find('>ul >li:eq('+opt.act+') .slotholder');
			var nextsh = container.find('>ul >li:eq('+opt.next+') .slotholder');
			removeSlots(container,opt);
			nextsh.find('.defaultimg').css({'opacity':0});
			actsh.find('.defaultimg').css({'opacity':1});

			nextsh.find('.defaultimg').each(function() {
				var dimg = jQuery(this);
				if (dimg.data('kenburn')!=undefined)
				   dimg.data('kenburn').restart();
			});

			var nextli = container.find('>ul >li:eq('+opt.next+')');
	
			animateTheCaptions(nextli, opt,true);
			restartBannerTimer(opt,container);
			setBulPos(container,opt);

		}


		//////////////////
		// IS MOBILE ?? //
		//////////////////
		function is_mobile() {
		    var agents = ['android', 'webos', 'iphone', 'ipad', 'blackberry','Android', 'webos', ,'iPod', 'iPhone', 'iPad', 'Blackberry', 'BlackBerry'];
			var ismobile=false;
		    for(i in agents) {

			    if (navigator.userAgent.split(agents[i]).length>1) {
		            ismobile = true;

		          }
		    }
		    return ismobile;
		}

		/*********************************
			-	CHECK IF BROWSER IS IE	-
		********************************/
		function isIE( version, comparison ){
		    var $div = jQuery('<div style="display:none;"/>').appendTo(jQuery('body'));
		    $div.html('<!--[if '+(comparison||'')+' IE '+(version||'')+']><a>&nbsp;</a><![endif]-->');
		    var ieTest = $div.find('a').length;
		    $div.remove();
		    return ieTest;
		}

		////////////////////////////////
		//	RESTART THE BANNER TIMER //
		//////////////////////////////
		function restartBannerTimer(opt,container) {
						opt.cd=0;

						if (opt.videoplaying !=true) {
							var bt=	container.find('.tp-bannertimer');
								if (bt.length>0) {
									bt.stop();
									bt.css({'width':'0%'});
									bt.animate({'width':"100%"},{duration:(opt.delay-100),queue:false, easing:"linear"});
								}
							clearTimeout(opt.thumbtimer);

							opt.thumbtimer = setTimeout(function() {
								moveSelectedThumb(container);
								setBulPos(container,opt);
							},200);
						}
		}

		////////////////////////////////
		//	RESTART THE BANNER TIMER //
		//////////////////////////////
		function killBannerTimer(opt,container) {
						opt.cd=0;

							var bt=	container.find('.tp-bannertimer');
								if (bt.length>0) {
									bt.stop(true,true);
									bt.css({'width':'0%'});
								}
							clearTimeout(opt.thumbtimer);

		}

		function callingNewSlide(opt,container) {
						opt.cd=0;
						swapSlide(container,opt);
						// STOP TIMER AND RESCALE IT
							var bt=	container.find('.tp-bannertimer');
							if (bt.length>0) {
								bt.stop();
								bt.css({'width':'0%'});

								if (opt.videoplaying!=true) bt.animate({'width':"100%"},{duration:(opt.delay-100),queue:false, easing:"linear"});
							}
		}


		////////////////////////////////
		//	-	CREATE THE BULLETS -  //
		////////////////////////////////
		function createThumbs(container,opt) {

			var cap=container.parent();

			if (opt.navigationType=="thumb" || opt.navsecond=="both") {
						cap.append('<div class="tp-bullets tp-thumbs '+opt.navigationStyle+'"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>');
			}
			var bullets = cap.find('.tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer');
			var bup = bullets.parent();

			bup.width(opt.thumbWidth*opt.thumbAmount);
			bup.height(opt.thumbHeight);
			bup.parent().width(opt.thumbWidth*opt.thumbAmount);
			bup.parent().height(opt.thumbHeight);

			container.find('>ul:first >li').each(function(i) {
							var li= container.find(">ul:first >li:eq("+i+")");
							if (li.data('thumb') !=undefined)
								var src= li.data('thumb')
							else
								var src=li.find("img:first").attr('src');
							bullets.append('<div class="bullet thumb" style="width:'+opt.thumbWidth+'px;height:'+opt.thumbHeight+'px;"><img src="'+src+'"></div>');
							var bullet= bullets.find('.bullet:first');
				});
			//bullets.append('<div style="clear:both"></div>');
			var minwidth=10;


			// ADD THE BULLET CLICK FUNCTION HERE
			bullets.find('.bullet').each(function(i) {
				var bul = jQuery(this);

				if (i==opt.slideamount-1) bul.addClass('last');
				if (i==0) bul.addClass('first');
				bul.width(opt.thumbWidth);
				bul.height(opt.thumbHeight);

				if (minwidth<bul.outerWidth(true)) minwidth=bul.outerWidth(true);
				bul.click(function() {
					if (opt.transition==0 && bul.index() != opt.act) {
						opt.next = bul.index();
						callingNewSlide(opt,container);
					}
				});
			});


			var max=minwidth*container.find('>ul:first >li').length;

			var thumbconwidth=bullets.parent().width();
			opt.thumbWidth = minwidth;



				////////////////////////
				// SLIDE TO POSITION  //
				////////////////////////
				if (thumbconwidth<max) {
					jQuery(document).mousemove(function(e) {
						jQuery('body').data('mousex',e.pageX);
					});



					// ON MOUSE MOVE ON THE THUMBNAILS EVERYTHING SHOULD MOVE :)
					/*
					bullets.parent().mouseenter(function() {
							var $this=jQuery(this);
							$this.addClass("over");
							var offset = $this.offset();
							var x = jQuery('body').data('mousex')-offset.left;
							var thumbconwidth=$this.width();
							var minwidth=$this.find('.bullet:first').outerWidth(true);
							var max=minwidth*container.find('>ul:first >li').length;
							var diff=(max- thumbconwidth)+15;
							var steps = diff / thumbconwidth;
							x=x-30;
							//if (x<30) x=0;
							//if (x>thumbconwidth-30) x=thumbconwidth;

							//ANIMATE TO POSITION
							var pos=(0-((x)*steps));
							if (pos>0) pos =0;
							if (pos<0-max+thumbconwidth) pos=0-max+thumbconwidth;
							moveThumbSliderToPosition($this,pos,200);
					});

					bullets.parent().mousemove(function() {

									var $this=jQuery(this);

									//if (!$this.hasClass("over")) {
											var offset = $this.offset();
											var x = jQuery('body').data('mousex')-offset.left;
											var thumbconwidth=$this.width();
											var minwidth=$this.find('.bullet:first').outerWidth(true);
											var max=minwidth*container.find('>ul:first >li').length-1;
											var diff=(max- thumbconwidth)+15;
											var steps = diff / thumbconwidth;
											x=x-3;
											if (x<6) x=0;
											if (x+3>thumbconwidth-6) x=thumbconwidth;

											//ANIMATE TO POSITION
											var pos=(0-((x)*steps));
											if (pos>0) pos =0;
											if (pos<0-max+thumbconwidth) pos=0-max+thumbconwidth;
											moveThumbSliderToPosition($this,pos,0);
									//} else {
										//$this.removeClass("over");
									//}

					});

					bullets.parent().mouseleave(function() {
									var $this=jQuery(this);
									$this.removeClass("over");
									moveSelectedThumb(container);
					});*/
				}


		}


		///////////////////////////////
		//	SelectedThumbInPosition //
		//////////////////////////////
		function moveSelectedThumb(container) {

									var bullets=container.parent().find('.tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer');
									var $this=bullets.parent();
									var offset = $this.offset();
									var minwidth=$this.find('.bullet:first').outerWidth(true);

									var x = $this.find('.bullet.selected').index() * minwidth;
									var thumbconwidth=$this.width();
									var minwidth=$this.find('.bullet:first').outerWidth(true);
									var max=minwidth*container.find('>ul:first >li').length;
									var diff=(max- thumbconwidth);
									var steps = diff / thumbconwidth;

									//ANIMATE TO POSITION
									var pos=0-x;

									if (pos>0) pos =0;
									if (pos<0-max+thumbconwidth) pos=0-max+thumbconwidth;
									if (!$this.hasClass("over")) {
										moveThumbSliderToPosition($this,pos,200);
									}
		}


		////////////////////////////////////
		//	MOVE THUMB SLIDER TO POSITION //
		///////////////////////////////////
		function moveThumbSliderToPosition($this,pos,speed) {
			//$this.stop();
			//$this.find('.tp-thumbcontainer').animate({'left':pos+'px'},{duration:speed,queue:false});
			TweenLite.to($this.find('.tp-thumbcontainer'),0.2,{left:pos,ease:Power3.easeOut,overwrite:"auto"});
		}



		////////////////////////////////
		//	-	CREATE THE BULLETS -  //
		////////////////////////////////
		function createBullets(container,opt) {

			if (opt.navigationType=="bullet"  || opt.navigationType=="both") {
						container.parent().append('<div class="tp-bullets simplebullets '+opt.navigationStyle+'"></div>');
			}
			var bullets = container.parent().find('.tp-bullets');

			container.find('>ul:first >li').each(function(i) {
							var src=container.find(">ul:first >li:eq("+i+") img:first").attr('src');
							bullets.append('<div class="bullet"></div>');
							var bullet= bullets.find('.bullet:first');


				});

			// ADD THE BULLET CLICK FUNCTION HERE
			bullets.find('.bullet').each(function(i) {
				var bul = jQuery(this);
				if (i==opt.slideamount-1) bul.addClass('last');
				if (i==0) bul.addClass('first');

				bul.click(function() {
					var sameslide = false;
					if (opt.navigationArrows=="withbullet" || opt.navigationArrows=="nexttobullets") {
						if (bul.index()-1 == opt.act) sameslide=true;
					} else {
						if (bul.index() == opt.act) sameslide=true;
					}

					if (opt.transition==0 && !sameslide) {

					if (opt.navigationArrows=="withbullet" || opt.navigationArrows=="nexttobullets") {
							opt.next = bul.index()-1;
					} else {
							opt.next = bul.index();
					}

						callingNewSlide(opt,container);
					}
				});

			});

			bullets.append('<div class="tpclear"></div>');



			setBulPos(container,opt);





		}

		//////////////////////
		//	CREATE ARROWS	//
		/////////////////////
		function createArrows(container,opt) {

						var bullets = container.find('.tp-bullets');

						var hidden="";
						var arst= opt.navigationStyle;
						if (opt.navigationArrows=="none") hidden="visibility:hidden;display:none";
						opt.soloArrowStyle = "default";
						
						if (opt.navigationArrows!="none" && opt.navigationArrows!="nexttobullets") arst = opt.soloArrowStyle;
						if(opt.navigation_arrows_style=="default2"){
							arst = "default2";
						}else if(opt.navigation_arrows_style=="new1"){
							arst = "new1";
						}else if(opt.navigation_arrows_style=="new2"){
							arst = "new2";
						}
						container.parent().append('<div style="'+hidden+'" class="tp-leftarrow tparrows '+arst+'"></div>');
						container.parent().append('<div style="'+hidden+'" class="tp-rightarrow tparrows '+arst+'"></div>');

						// 	THE LEFT / RIGHT BUTTON CLICK !	 //
						container.parent().find('.tp-rightarrow').click(function() {

							if (opt.transition==0) {
									if (container.data('showus') !=undefined && container.data('showus') != -1)
										opt.next = container.data('showus')-1;
									else
										opt.next = opt.next+1;
									container.data('showus',-1);
									if (opt.next >= opt.slideamount) opt.next=0;
									if (opt.next<0) opt.next=0;

									if (opt.act !=opt.next)
										callingNewSlide(opt,container);
							}
						});

						container.parent().find('.tp-leftarrow').click(function() {
							if (opt.transition==0) {
									opt.next = opt.next-1;
									opt.leftarrowpressed=1;
									if (opt.next < 0) opt.next=opt.slideamount-1;
									callingNewSlide(opt,container);
							}
						});

						setBulPos(container,opt);

		}

		//////////////////////
		//	CREATE ARROWS	//
		/////////////////////
		function createKeyboard(container,opt) {

						/*
						// 	THE LEFT / RIGHT BUTTON CLICK !	 //
						jQuery(document).keydown(function(e){
							if (opt.transition==0 && e.keyCode == 39) {
									if (container.data('showus') !=undefined && container.data('showus') != -1)
										opt.next = container.data('showus')-1;
									else
										opt.next = opt.next+1;
									container.data('showus',-1);
									if (opt.next >= opt.slideamount) opt.next=0;
									if (opt.next<0) opt.next=0;

									if (opt.act !=opt.next)
										callingNewSlide(opt,container);
							}

							if (opt.transition==0 && e.keyCode == 37) {
									opt.next = opt.next-1;
									opt.leftarrowpressed=1;
									if (opt.next < 0) opt.next=opt.slideamount-1;
									callingNewSlide(opt,container);
							}
						});

						setBulPos(container,opt);*/

		}

		////////////////////////////
		// SET THE SWIPE FUNCTION //
		////////////////////////////
		function swipeAction(container,opt) {
			// TOUCH ENABLED SCROLL
				
				if (opt.touchenabled=="on")
						container.swipe( {data:container,
										swipeRight:function()
												{

													if (opt.transition==0) {
															opt.next = opt.next-1;
															opt.leftarrowpressed=1;
															if (opt.next < 0) opt.next=opt.slideamount-1;
															callingNewSlide(opt,container);
													}
												},
										swipeLeft:function()
												{

													if (opt.transition==0) {
															opt.next = opt.next+1;
															if (opt.next == opt.slideamount) opt.next=0;
															callingNewSlide(opt,container);
													}
												},
										  swipeUp:function(event, direction, distance, duration) {
												if (opt.transition==0) {
															opt.next = opt.next-1;
															opt.leftarrowpressed=1;
															if (opt.next < 0) opt.next=opt.slideamount-1;
															callingNewSlide(opt,container);
												}
										  },
										  swipeDown:function(event, direction, distance, duration) {
												if (opt.transition==0) {
															opt.next = opt.next+1;
															if (opt.next == opt.slideamount) opt.next=0;
															callingNewSlide(opt,container);
													}
										  },
									allowPageScroll:"auto"} );
		}




		////////////////////////////////////////////////////////////////
		// SHOW AND HIDE THE THUMBS IF MOUE GOES OUT OF THE BANNER  ///
		//////////////////////////////////////////////////////////////
		function hideThumbs(container,opt) {

			var bullets = container.parent().find('.tp-bullets');
			var ca = container.parent().find('.tparrows');

			if (bullets==null) {
				container.append('<div class=".tp-bullets"></div>');
				var bullets = container.parent().find('.tp-bullets');
			}

			if (ca==null) {
				container.append('<div class=".tparrows"></div>');
				var ca = container.parent().find('.tparrows');
			}


			//var bp = (thumbs.parent().outerHeight(true) - opt.height)/2;

			//	ADD THUMBNAIL IMAGES FOR THE BULLETS //
			container.data('hidethumbs',opt.hideThumbs);

			bullets.addClass("hidebullets");
			ca.addClass("hidearrows");

			bullets.hover(function() {
				bullets.addClass("hovered");
				clearTimeout(container.data('hidethumbs'));
				bullets.removeClass("hidebullets");
				ca.removeClass("hidearrows");
			},
			function() {

				bullets.removeClass("hovered");
				if (!container.hasClass("hovered") && !bullets.hasClass("hovered"))
					container.data('hidethumbs', setTimeout(function() {
					bullets.addClass("hidebullets");
					ca.addClass("hidearrows");
					},opt.hideThumbs));
			});


			ca.hover(function() {
				bullets.addClass("hovered");
				clearTimeout(container.data('hidethumbs'));
				bullets.removeClass("hidebullets");
				ca.removeClass("hidearrows");

			},
			function() {

				bullets.removeClass("hovered");
				});



			container.on('mouseenter', function() {
				container.addClass("hovered");
				clearTimeout(container.data('hidethumbs'));
				bullets.removeClass("hidebullets");
				ca.removeClass("hidearrows");
			});

			container.on('mouseleave', function() {
				container.removeClass("hovered");
				if (!container.hasClass("hovered") && !bullets.hasClass("hovered"))
					container.data('hidethumbs', setTimeout(function() {
							bullets.addClass("hidebullets");
							ca.addClass("hidearrows");
					},opt.hideThumbs));
			});

		}







		//////////////////////////////
		//	SET POSITION OF BULLETS	//
		//////////////////////////////
		function setBulPos(container,opt) {
			var topcont=container.parent();
			var bullets=topcont.find('.tp-bullets');

			if (opt.navigationType=="thumb") {
				bullets.find('.thumb').each(function(i) {
					var thumb = jQuery(this);

					thumb.css({'width':opt.thumbWidth * opt.bw+"px", 'height':opt.thumbHeight*opt.bh+"px"});

				})
				var bup = bullets.find('.tp-mask');

				bup.width(opt.thumbWidth*opt.thumbAmount * opt.bw);
				bup.height(opt.thumbHeight * opt.bh);
				bup.parent().width(opt.thumbWidth*opt.thumbAmount * opt.bw);
				bup.parent().height(opt.thumbHeight * opt.bh);
			}


			var tl = topcont.find('.tp-leftarrow');
			var tr = topcont.find('.tp-rightarrow');

			if (opt.navigationType=="thumb" && opt.navigationArrows=="nexttobullets") opt.navigationArrows="solo";
			// IM CASE WE HAVE NAVIGATION BULLETS TOGETHER WITH ARROWS
			if (opt.navigationArrows=="nexttobullets") {
				tl.prependTo(bullets).css({'float':'left'});
				tr.insertBefore(bullets.find('.tpclear')).css({'float':'left'});
			}
			var loff=0;
			if (opt.forceFullWidth=="on"){
					
				var offset = opt.container.parent().offset();
				if(offset){
					loff = 0-offset.left;
				}
			}

			if (opt.navigationArrows!="none" && opt.navigationArrows!="nexttobullets") {

				tl.css({'position':'absolute'});
				tr.css({'position':'absolute'});


				if (opt.soloArrowLeftValign=="center")	tl.css({'top':'50%','marginTop':(opt.soloArrowLeftVOffset-Math.round(tl.innerHeight()/2))+"px"});
				if (opt.soloArrowLeftValign=="bottom")	tl.css({'top':'auto','bottom':(0+opt.soloArrowLeftVOffset)+"px"});
				if (opt.soloArrowLeftValign=="top")	 	tl.css({'bottom':'auto','top':(0+opt.soloArrowLeftVOffset)+"px"});
				if (opt.soloArrowLeftHalign=="center")	tl.css({'left':'50%','marginLeft':(loff+opt.soloArrowLeftHOffset-Math.round(tl.innerWidth()/2))+"px"});
				if (opt.soloArrowLeftHalign=="left")	tl.css({'left':(0+opt.soloArrowLeftHOffset+loff)+"px"});
				if (opt.soloArrowLeftHalign=="right")	tl.css({'right':(0+opt.soloArrowLeftHOffset-loff)+"px"});

				if (opt.soloArrowRightValign=="center")	tr.css({'top':'50%','marginTop':(opt.soloArrowRightVOffset-Math.round(tr.innerHeight()/2))+"px"});
				if (opt.soloArrowRightValign=="bottom")	tr.css({'top':'auto','bottom':(0+opt.soloArrowRightVOffset)+"px"});
				if (opt.soloArrowRightValign=="top")	tr.css({'bottom':'auto','top':(0+opt.soloArrowRightVOffset)+"px"});
				if (opt.soloArrowRightHalign=="center")	tr.css({'left':'50%','marginLeft':(loff+opt.soloArrowRightHOffset-Math.round(tr.innerWidth()/2))+"px"});
				if (opt.soloArrowRightHalign=="left")	tr.css({'left':(0+opt.soloArrowRightHOffset+loff)+"px"});
				if (opt.soloArrowRightHalign=="right")	tr.css({'right':(0+opt.soloArrowRightHOffset-loff)+"px"});


				//if (tl.position()!=null)
					//tl.css({'top':Math.round(parseInt(tl.position().top,0))+"px"});

				//if (tr.position()!=null)
					//tr.css({'top':Math.round(parseInt(tr.position().top,0))+"px"});
			}

			if (opt.navigationArrows=="none") {
				tl.css({'visibility':'hidden'});
				tr.css({'visibility':'hidden'});
			}

			// SET THE POSITIONS OF THE BULLETS // THUMBNAILS


			if (opt.navigationVAlign=="center")	 bullets.css({'top':'50%','marginTop':(opt.navigationVOffset-Math.round(bullets.innerHeight()/2))+"px"});
			if (opt.navigationVAlign=="bottom")	 bullets.css({'bottom':(0+opt.navigationVOffset)+"px"});
			if (opt.navigationVAlign=="top")	 bullets.css({'top':(0+opt.navigationVOffset)+"px"});

			if (opt.navigationHAlign=="center")	bullets.css({'left':'50%','marginLeft':(loff+opt.navigationHOffset-Math.round(bullets.innerWidth()/2))+"px"});
			if (opt.navigationHAlign=="left")	bullets.css({'left':(0+opt.navigationHOffset+loff)+"px"});
			if (opt.navigationHAlign=="right")	bullets.css({'right':(0+opt.navigationHOffset-loff)+"px"});



		}



		//////////////////////////////////////////////////////////
		//	-	SET THE IMAGE SIZE TO FIT INTO THE CONTIANER -  //
		////////////////////////////////////////////////////////
		function setSize(img,opt) {
				
				
				opt.container.closest('.forcefullwidth_wrapper_tp_banner').find('.tp-fullwidth-forcer').css({'height':opt.container.height()});
				opt.container.closest('.rev_slider_wrapper').css({'height':opt.container.height()});


				opt.width=parseInt(opt.container.width(),0);
				opt.height=parseInt(opt.container.height(),0);


				//opt.height= opt.startheight * opt.bh;
				opt.height = Math.round(opt.startheight * (opt.width/opt.startwidth));
				if (opt.height>opt.startheight && opt.autoHeight!="on") opt.height=opt.startheight;
				
				
				
				opt.bw= (opt.width / opt.startwidth);
				opt.bh = (opt.height / opt.startheight);
				
			

				if (opt.bh>opt.bw) opt.bh=opt.bw;
				if (opt.bh<opt.bw) opt.bw = opt.bh;
				if (opt.bw<opt.bh) opt.bh = opt.bw;
				if (opt.bh>1) { opt.bw=1; opt.bh=1; }
				if (opt.bw>1) {opt.bw=1; opt.bh=1; }

				
			

				



				



				if (opt.fullScreen=="on") {
						opt.height = opt.bw * opt.startheight;
						var cow = opt.container.parent().width();
						var coh = jQuery(window).height();
						if (opt.fullScreenOffsetContainer!=undefined) {
							try{
								var offcontainers = opt.fullScreenOffsetContainer.split(",");
								jQuery.each(offcontainers,function(index,searchedcont) {
									coh = coh - jQuery(searchedcont).outerHeight(true);
									if (coh<opt.minFullScreenHeight) coh=opt.minFullScreenHeight;
								});
							} catch(e) {}
						}

						opt.container.parent().height(coh);
						opt.container.css({'height':'100%'});

						opt.height=coh;

				} else {
										opt.container.height(opt.height);
				}


				opt.slotw=Math.ceil(opt.width/opt.slots);

				if (opt.fullSreen=="on")
					opt.sloth=Math.ceil(jQuery(window).height()/opt.slots);
				else
					opt.sloth=Math.ceil(opt.height/opt.slots);

				if (opt.autoHeight=="on")
				 	opt.sloth=Math.ceil(img.height()/opt.slots);




		}




		/////////////////////////////////////////
		//	-	PREPARE THE SLIDES / SLOTS -  //
		///////////////////////////////////////
		function prepareSlides(container,opt) {

			container.find('.tp-caption').each(function() { jQuery(this).addClass(jQuery(this).data('transition')); jQuery(this).addClass('start') });

			// PREPARE THE UL CONTAINER TO HAVEING MAX HEIGHT AND HEIGHT FOR ANY SITUATION
			container.find('>ul:first').css({overflow:'hidden',width:'100%',height:'100%',maxHeight:container.parent().css('maxHeight')});
			if (opt.autoHeight=="on") {
			   container.find('>ul:first').css({overflow:'hidden',width:'100%',height:'100%',maxHeight:"none"});
			   container.css({'maxHeight':'none'});
			   container.parent().css({'maxHeight':'none'});
			 }

			container.find('>ul:first >li').each(function(j) {
				var li=jQuery(this);

				// MAKE LI OVERFLOW HIDDEN FOR FURTHER ISSUES
				li.css({'width':'100%','height':'100%','overflow':'hidden'});

				if (li.data('link')!=undefined) {
					var link = li.data('link');
					var target="_self";
					var zindex=2;
					if (li.data('slideindex')=="back") zindex=0;

					var linktoslide=li.data('linktoslide');
					if (li.data('target')!=undefined) target=li.data('target');

					if (link=="slide") {
						li.append('<div class="tp-caption sft slidelink" style="z-index:'+zindex+';" data-x="0" data-y="0" data-linktoslide="'+linktoslide+'" data-start="0"><a><div></div></a></div>');
					} else {
						linktoslide="no";
						li.append('<div class="tp-caption sft slidelink" style="z-index:'+zindex+';" data-x="0" data-y="0" data-linktoslide="'+linktoslide+'" data-start="0"><a target="'+target+'" href="'+link+'"><div></div></a></div>');
					}

				}
			});

			// RESOLVE OVERFLOW HIDDEN OF MAIN CONTAINER
			container.parent().css({'overflow':'visible'});


			container.find('>ul:first >li >img').each(function(j) {

				var img=jQuery(this);

				img.addClass('defaultimg');
				if (img.data('lazyload')!=undefined && img.data('lazydone') != 1) {

				} else {
					setSize(img,opt);
				}



				img.wrap('<div class="slotholder" style="width:100%;height:100%;"'+
						  'data-duration="'+img.data('duration')+'"'+
						  'data-zoomstart="'+img.data("zoomstart")+'"'+
						  'data-zoomend="'+img.data("zoomend")+'"'+
						  'data-rotationstart="'+img.data("rotationstart")+'"'+
						  'data-rotationend="'+img.data("rotationend")+'"'+
						  'data-ease="'+img.data("ease")+'"'+
						  'data-duration="'+img.data("duration")+'"'+
						  'data-bgpositionend="'+img.data("bgpositionend")+'"'+
						  'data-bgposition="'+img.data("bgposition")+'"'+
						  'data-duration="'+img.data("duration")+'"'+
						  'data-kenburns="'+img.data("kenburns")+'"'+
						  'data-easeme="'+img.data("ease")+'"'+
						  'data-bgfit="'+img.data("bgfit")+'"'+
						  'data-bgfitend="'+img.data("bgfitend")+'"'+
						  'data-owidth="'+img.data("owidth")+'"'+
						  'data-oheight="'+img.data("oheight")+'"'+
						  '></div>');

				if (opt.dottedOverlay!="none" && opt.dottedOverlay!=undefined)
						img.closest('.slotholder').append('<div class="tp-dottedoverlay '+opt.dottedOverlay+'"></div>');

				var src=img.attr('src');
				var ll = img.data('lazyload');
				var bgfit = img.data('bgfit');
				var bgrepeat = img.data('bgrepeat');
				var bgposition = img.data('bgposition');


				if (bgfit==undefined) bgfit="cover";
				if (bgrepeat==undefined) bgrepeat="no-repeat";
				if (bgposition==undefined) bgposition="center center"


				var pari = img.closest('.slotholder');
				img.replaceWith('<div class="tp-bgimg defaultimg" data-lazyload="'+img.data('lazyload')+'" data-bgfit="'+bgfit+'"data-bgposition="'+bgposition+'" data-bgrepeat="'+bgrepeat+'" data-lazydone="'+img.data('lazydone')+'" data-src="'+src+'" style="background-color:'+img.css("backgroundColor")+';background-repeat:'+bgrepeat+';background-image:url('+src+');background-size:'+bgfit+';background-position:'+bgposition+';width:100%;height:100%;"></div>');

				if (isIE(8)) {
					pari.find('.tp-bgimg').css({backgroundImage:"none",'background-image':'none'});
					pari.find('.tp-bgimg').append('<img class="ieeightfallbackimage defaultimg" src="'+src+'" style="width:100%">');
				}




				img.css({'opacity':0});
				img.data('li-id',j);

			});
		}





		///////////////////////
		// PREPARE THE SLIDE //
		//////////////////////
		function prepareOneSlideSlot(slotholder,opt,visible,vorh) {
				

				var sh=slotholder;
				var img = sh.find('.defaultimg')

				var scalestart = sh.data('zoomstart');
				var rotatestart = sh.data('rotationstart');

				if (img.data('currotate')!=undefined)
					rotatestart = img.data('currotate');
				if (img.data('curscale')!=undefined)
					scalestart = img.data('curscale');
				setSize(img,opt)
				var src = img.data('src');
				var bgcolor=img.css('background-color');

				var w = opt.width;
				var h = opt.height;
				if (opt.autoHeight=="on")
				  h = opt.container.height();

				var fulloff = img.data("fxof");
				if (fulloff==undefined) fulloff=0;

				fullyoff=0;

				var off=0;

				var bgfit = img.data('bgfit');
				var bgrepeat = img.data('bgrepeat');
				var bgposition = img.data('bgposition');

				if (bgfit==undefined) bgfit="cover";
				if (bgrepeat==undefined) bgrepeat="no-repeat";
				if (bgposition==undefined) bgposition="center center";



				if (sh.data('kenburns')=="on") {
				   bgfit=scalestart;
				   if (bgfit.toString().length<4)
					   bgfit = calculateKenBurnScales(bgfit,sh,opt);
				 }

			   if (isIE(8)) {
					var imgsrc=src;
			    	src="";
				}

				if (vorh == "horizontal") {

					if (!visible) var off=0-opt.slotw;

					for (var i=0;i<opt.slots;i++) {
							sh.append('<div class="slot" style="position:absolute;'+
															'top:'+(0+fullyoff)+'px;'+
															'left:'+(fulloff+i*opt.slotw)+'px;'+
															'overflow:hidden;width:'+opt.slotw+'px;'+
															'height:'+h+'px">'+
							'<div class="slotslide" style="position:absolute;'+
															'top:0px;left:'+off+'px;'+
															'width:'+opt.slotw+'px;'+
															'height:'+h+'px;overflow:hidden;">'+
							'<div style="background-color:'+bgcolor+';'+
															'position:absolute;top:0px;'+
															'left:'+(0-(i*opt.slotw))+'px;'+
															'width:'+w+'px;height:'+h+'px;'+
															'background-image:url('+src+');'+
															'background-repeat:'+bgrepeat+';'+
															'background-size:'+bgfit+';background-position:'+bgposition+';">'+
							'</div></div></div>');
							if (scalestart!=undefined && rotatestart!=undefined)
								TweenLite.set(sh.find('.slot').last(),{rotationZ:rotatestart});
							if (isIE(8)) {
							   sh.find('.slot ').last().find('.slotslide').append('<img class="ieeightfallbackimage" src="'+imgsrc+'" style="width:100%">');
							   ieimgposition(sh,opt);

						}
					}
				} else {

					if (!visible) var off=0-opt.sloth;

					for (var i=0;i<opt.slots+2;i++) {
						sh.append('<div class="slot" style="position:absolute;'+
												 'top:'+(fullyoff+(i*opt.sloth))+'px;'+
												 'left:'+(fulloff)+'px;'+
												 'overflow:hidden;'+
												 'width:'+w+'px;'+
												 'height:'+(opt.sloth)+'px">'+

									 '<div class="slotslide" style="position:absolute;'+
														 'top:'+(off)+'px;'+
														 'left:0px;width:'+w+'px;'+
														 'height:'+opt.sloth+'px;'+
														 'overflow:hidden;">'+
									'<div style="background-color:'+bgcolor+';'+
															'position:absolute;'+
															'top:'+(0-(i*opt.sloth))+'px;'+
															'left:0px;'+
															'width:'+w+'px;height:'+h+'px;'+
															'background-image:url('+src+');'+
															'background-repeat:'+bgrepeat+';'+
															'background-size:'+bgfit+';background-position:'+bgposition+';">'+

									'</div></div></div>');
							if (scalestart!=undefined && rotatestart!=undefined)
								TweenLite.set(sh.find('.slot').last(),{rotationZ:rotatestart});
							if (isIE(8)) {
						    	sh.find('.slot ').last().find('.slotslide').append('<img class="ieeightfallbackimage" src="'+imgsrc+'" style="width:100%">');
						    	ieimgposition(sh,opt);
							}
					}
				}




		}



		///////////////////////
		// PREPARE THE SLIDE //
		//////////////////////
		function prepareOneSlideBox(slotholder,opt,visible) {

				var sh=slotholder;
				var img = sh.find('.defaultimg');

				var scalestart = sh.data('zoomstart');
				var rotatestart = sh.data('rotationstart');

				if (img.data('currotate')!=undefined)
					rotatestart = img.data('currotate');
				if (img.data('curscale')!=undefined)
					scalestart = img.data('curscale')*100;

				setSize(img,opt)
				var src = img.data('src');
				var bgcolor=img.css('backgroundColor');

				var w = opt.width;
				var h = opt.height;
				if (opt.autoHeight=="on")
				  h = opt.container.height();

				var fulloff = img.data("fxof");
				if (fulloff==undefined) fulloff=0;

				fullyoff=0;



				var off=0;


				if (isIE(8)) {
					var imgsrc=src;
			    	src="";
				}

				// SET THE MINIMAL SIZE OF A BOX
				var basicsize = 0;
				if (opt.sloth>opt.slotw)
					basicsize=opt.sloth
				else
					basicsize=opt.slotw;


				if (!visible) {
					var off=0-basicsize;
				}

				opt.slotw = basicsize;
				opt.sloth = basicsize;
				var x=0;
				var y=0;

				var bgfit = img.data('bgfit');
				var bgrepeat = img.data('bgrepeat');
				var bgposition = img.data('bgposition');

				if (bgfit==undefined) bgfit="cover";
				if (bgrepeat==undefined) bgrepeat="no-repeat";
				if (bgposition==undefined) bgposition="center center";

				if (sh.data('kenburns')=="on") {
				   bgfit=scalestart;
				   
				   if (bgfit.toString().length<4)
					   bgfit = calculateKenBurnScales(bgfit,sh,opt);
				 }

				for (var j=0;j<opt.slots;j++) {

					y=0;
					for (var i=0;i<opt.slots;i++) 	{


						sh.append('<div class="slot" '+
								  'style="position:absolute;'+
											'top:'+(fullyoff+y)+'px;'+
											'left:'+(fulloff+x)+'px;'+
											'width:'+basicsize+'px;'+
											'height:'+basicsize+'px;'+
											'overflow:hidden;">'+

								  '<div class="slotslide" data-x="'+x+'" data-y="'+y+'" '+
								  			'style="position:absolute;'+
											'top:'+(0)+'px;'+
											'left:'+(0)+'px;'+
											'width:'+basicsize+'px;'+
											'height:'+basicsize+'px;'+
											'overflow:hidden;">'+

								  '<div style="position:absolute;'+
											'top:'+(0-y)+'px;'+
											'left:'+(0-x)+'px;'+
											'width:'+w+'px;'+
											'height:'+h+'px;'+
											'background-color:'+bgcolor+';'+
											'background-image:url('+src+');'+
											'background-repeat:'+bgrepeat+';'+
											'background-size:'+bgfit+';background-position:'+bgposition+';">'+
								  '</div></div></div>');
						y=y+basicsize;

						if (isIE(8)) {

							sh.find('.slot ').last().find('.slotslide').append('<img src="'+imgsrc+'">');
							ieimgposition(sh,opt);
						}

						if (scalestart!=undefined && rotatestart!=undefined)
								TweenLite.set(sh.find('.slot').last(),{rotationZ:rotatestart});
					}
					x=x+basicsize;
				}
		}

		/***********************************************
			-	MOVE IE8 IMAGE IN RIGHT POSITION	-
		***********************************************/

		function ieimgposition(nextsh,opt) {

			if (isIE(8)) {
					var ie8img = nextsh.find('.ieeightfallbackimage');
					if (opt.startwidth/opt.startheight <nextsh.data('owidth')/nextsh.data('oheight'))
						ie8img.css({width:"auto",height:"100%"})
					else
						ie8img.css({width:"100%",height:"auto"})



					var ie8w = ie8img.width(),
					    ie8h = ie8img.height();

					if (nextsh.data('bgposition')=="center center")
						ie8img.css({position:"absolute",top:opt.height/2 - ie8h/2+"px", left:opt.width/2-ie8w/2+"px"});

					if (nextsh.data('bgposition')=="center top" || nextsh.data('bgposition')=="top center")
						ie8img.css({position:"absolute",top:"0px", left:opt.width/2-ie8w/2+"px"});

					if (nextsh.data('bgposition')=="center bottom" || nextsh.data('bgposition')=="bottom center")
						ie8img.css({position:"absolute",bottom:"0px", left:opt.width/2-ie8w/2+"px"});


					if (nextsh.data('bgposition')=="right top" || nextsh.data('bgposition')=="top right")
						ie8img.css({position:"absolute",top:"0px", right:"0px"});

					if (nextsh.data('bgposition')=="right bottom" || nextsh.data('bgposition')=="bottom right")
						ie8img.css({position:"absolute",bottom:"0px", right:"0px"});

					if (nextsh.data('bgposition')=="right center" || nextsh.data('bgposition')=="center right")
						ie8img.css({position:"absolute",top:opt.height/2 - ie8h/2+"px", right:"0px"});

					if (nextsh.data('bgposition')=="left bottom" || nextsh.data('bgposition')=="bottom left")
						ie8img.css({position:"absolute",bottom:"0px", left:"0px"});

					if (nextsh.data('bgposition')=="left center" || nextsh.data('bgposition')=="center left")
						ie8img.css({position:"absolute",top:opt.height/2 - ie8h/2+"px", left:"0px"});
				}
		}




		///////////////////////
		//	REMOVE SLOTS	//
		/////////////////////
		function removeSlots(container,opt,time) {
			if (time==undefined)
				time==80

			setTimeout(function() {
				container.find('.slotholder .slot').each(function() {
					clearTimeout(jQuery(this).data('tout'));
					jQuery(this).remove();
				});
				opt.transition = 0;
			},time);
		}





		//////////////////////////////
		//                         //
		//	-	SWAP THE SLIDES -  //
		//                        //
		////////////////////////////
		function swapSlide(container,opt) {
			try{
				var actli = container.find('>ul:first-child >li:eq('+opt.act+')');
			} catch(e) {
				var actli=container.find('>ul:first-child >li:eq(1)');
			}
			opt.lastslide=opt.act;
			var nextli = container.find('>ul:first-child >li:eq('+opt.next+')');

			var defimg= nextli.find('.defaultimg');

			if (defimg.data('lazyload') !=undefined && defimg.data('lazyload') !="undefined" && defimg.data('lazydone') !=1 ) {

				defimg.css({backgroundImage:'url("'+nextli.find('.defaultimg').data('lazyload')+'")'});
				defimg.data('src',nextli.find('.defaultimg').data('lazyload'));
				defimg.data('lazydone',1);
				defimg.data('orgw',0);
				nextli.data('loadeddone',1);
				container.find('.tp-loader').css({'display':'block'}).animate({opacity:1,duration:300});
				var limg = new Image();
				limg.onload = function() {
						setTimeout(function() { killBannerTimer(opt,container)},180);

							nextli.waitForImages(function() {

									defimg.data('lazydone',1);
									nextli.data('owidth',limg.width);
									nextli.data('oheight',limg.height);
									nextli.find('.slotholder').data('owidth',limg.width);
									nextli.find('.slotholder').data('oheight',limg.height);


									setTimeout(function() {restartBannerTimer(opt,container)},190);
									setSize(defimg,opt);
									setBulPos(container,opt);
									setSize(defimg,opt);
									swapSlideProgress(container,opt);
									container.find('.tp-loader').animate({opacity:0,duration:300});

									setTimeout(function() {
										container.find('.tp-loader').css({'display':'none'});

									},2200)
														});
						}
				limg.src=nextli.find('.defaultimg').data('lazyload');

			} else {
				if (nextli.data('loadeddone')==undefined) {
						var limg = new Image();
						limg.onload = function() {
									nextli.data('loadeddone',1);
									nextli.data('owidth',limg.width);
									nextli.data('oheight',limg.height);
									nextli.find('.slotholder').data('owidth',limg.width);
									nextli.find('.slotholder').data('oheight',limg.height);


									nextli.waitForImages(function() {
											setSize(defimg,opt);
											setBulPos(container,opt);
											setSize(defimg,opt);
											swapSlideProgress(container,opt);
										});
								}
						limg.src=nextli.find('.defaultimg').data('src');
				} else {
				   	swapSlideProgress(container,opt);
				 }
			}
		}

		/******************************
			-	SWAP SLIDE PROGRESS	-
		********************************/
		/*!SWAP SLIDE*/
		function swapSlideProgress(container,opt) {


	
			container.trigger('revolution.slide.onbeforeswap');

			opt.transition = 1;
			opt.videoplaying = false;
			//konsole.log("VideoPlay set to False due swapSlideProgress");

			try{
				var actli = container.find('>ul:first-child >li:eq('+opt.act+')');
			} catch(e) {
				var actli=container.find('>ul:first-child >li:eq(1)');
			}

			opt.lastslide=opt.act;

			var nextli = container.find('>ul:first-child >li:eq('+opt.next+')');
		

			var actsh = actli.find('.slotholder');
			var nextsh = nextli.find('.slotholder');
			actli.css({'visibility':'visible'});
			nextli.css({'visibility':'visible'});

			if (nextsh.data('kenburns')=="on")
				stopKenBurn(container,opt);


			if (opt.ie) {
				if (comingtransition=="boxfade") comingtransition = "boxslide";
				if (comingtransition=="slotfade-vertical") comingtransition = "slotzoom-vertical";
				if (comingtransition=="slotfade-horizontal") comingtransition = "slotzoom-horizontal";
			}


			// IF DELAY HAS BEEN SET VIA THE SLIDE, WE TAKE THE NEW VALUE, OTHER WAY THE OLD ONE...
			if (nextli.data('delay')!=undefined) {
						opt.cd=0;
						opt.delay=nextli.data('delay');
			} else {
				opt.delay=opt.origcd;
			}

			// RESET POSITION AND FADES OF LI'S
			actli.css({'left':'0px','top':'0px'});
			nextli.css({'left':'0px','top':'0px'});


			// IF THERE IS AN OTHER FIRST SLIDE START HAS BEED SELECTED
			if (nextli.data('differentissplayed') =='prepared') {
				nextli.data('differentissplayed','done');
				nextli.data('transition',nextli.data('savedtransition'));
				nextli.data('slotamount',nextli.data('savedslotamount'));
				nextli.data('masterspeed',nextli.data('savedmasterspeed'));
			}


			if (nextli.data('fstransition') != undefined && nextli.data('differentissplayed') !="done") {
				nextli.data('savedtransition',nextli.data('transition'));
				nextli.data('savedslotamount',nextli.data('slotamount'));
				nextli.data('savedmasterspeed',nextli.data('masterspeed'));

				nextli.data('transition',nextli.data('fstransition'));
				nextli.data('slotamount',nextli.data('fsslotamount'));
				nextli.data('masterspeed',nextli.data('fsmasterspeed'));

				nextli.data('differentissplayed','prepared');
			}

			///////////////////////////////////////
			// TRANSITION CHOOSE - RANDOM EFFECTS//
			///////////////////////////////////////
			var nexttrans = 0;


			var transtext = nextli.data('transition').split(",");
			var curtransid = nextli.data('nexttransid');
			if (curtransid == undefined) {
			  curtransid=0;
			  nextli.data('nexttransid',curtransid);
			} else {
				curtransid=curtransid+1;
				if (curtransid==transtext.length) curtransid=0;
				nextli.data('nexttransid',curtransid);

			}



			var comingtransition = transtext[curtransid];
			if(jQuery(window).width()<768 && opt.forceFullWidth=="on"){
				comingtransition = "slideup";		
			}
			
			var specials = 0;

			/*if (opt.ffnn == undefined) opt.ffnn=0;
			comingtransition=opt.ffnn;
			opt.ffnn=opt.ffnn+1;
			if (opt.ffnn>46) opt.ffnn=0;*/


			/* Transition Name ,
			   Transition Code,
			   Transition Sub Code,
			   Max Slots,
			   MasterSpeed Delays,
			   Preparing Slots (box,slideh, slidev),
			   Call on nextsh (null = no, true/false for visibility first preparing),
			   Call on actsh (null = no, true/false for visibility first preparing),
			*/

			if (comingtransition=="slidehorizontal") {
						comingtransition = "slideleft"
					if (opt.leftarrowpressed==1)
						comingtransition = "slideright"
				}

			if (comingtransition=="slidevertical") {
						comingtransition = "slideup"
					if (opt.leftarrowpressed==1)
						comingtransition = "slidedown"
				}


			var transitionsArray = [ ['boxslide' , 0, 1, 10, 0,'box',false,null,0],
									 ['boxfade', 1, 0, 10, 0,'box',false,null,1],
									 ['slotslide-horizontal', 2, 0, 0, 200,'horizontal',true,false,2],
									 ['slotslide-vertical', 3, 0,0,200,'vertical',true,false,3],
									 ['curtain-1', 4, 3,0,0,'horizontal',true,true,4],
									 ['curtain-2', 5, 3,0,0,'horizontal',true,true,5],
									 ['curtain-3', 6, 3,25,0,'horizontal',true,true,6],
									 ['slotzoom-horizontal', 7, 0,0,400,'horizontal',true,true,7],
									 ['slotzoom-vertical', 8, 0,0,0,'vertical',true,true,8],
									 ['slotfade-horizontal', 9, 0,0,500,'horizontal',true,null,9],
									 ['slotfade-vertical', 10, 0,0 ,500,'vertical',true,null,10],
									 ['fade', 11, 0, 1 ,300,'horizontal',true,null,11],
									 ['slideleft', 12, 0,1,0,'horizontal',true,true,12],
									 ['slideup', 13, 0,1,0,'horizontal',true,true,13],
									 ['slidedown', 14, 0,1,0,'horizontal',true,true,14],
									 ['slideright', 15, 0,1,0,'horizontal',true,true,15],
									 ['papercut', 16, 0,0,600,'',null,null,16],
									 ['3dcurtain-horizontal', 17, 0,20,100,'vertical',false,true,17],
									 ['3dcurtain-vertical', 18, 0,10,100,'horizontal',false,true,18],
									 ['cubic', 19, 0,20,600,'horizontal',false,true,19],
									 ['cube',19,0,20,600,'horizontal',false,true,20],
									 ['flyin', 20, 0,4,600,'vertical',false,true,21],
									 ['turnoff', 21, 0,1,1600,'horizontal',false,true,22],
									 ['incube', 22, 0,20,600,'horizontal',false,true,23],
									 ['cubic-horizontal', 23, 0,20,500,'vertical',false,true,24],
									 ['cube-horizontal', 23, 0,20,500,'vertical',false,true,25],
									 ['incube-horizontal', 24, 0,20,500,'vertical',false,true,26],
									 ['turnoff-vertical', 25, 0,1,1600,'horizontal',false,true,27],
									 ['fadefromright', 12, 1,1,0,'horizontal',true,true,28],
									 ['fadefromleft', 15, 1,1,0,'horizontal',true,true,29],
									 ['fadefromtop', 14, 1,1,0,'horizontal',true,true,30],
									 ['fadefrombottom', 13, 1,1,0,'horizontal',true,true,31],
									 ['fadetoleftfadefromright', 12, 2,1,0,'horizontal',true,true,32],
									 ['fadetorightfadetoleft', 15, 2,1,0,'horizontal',true,true,33],
									 ['fadetobottomfadefromtop', 14, 2,1,0,'horizontal',true,true,34],
									 ['fadetotopfadefrombottom', 13, 2,1,0,'horizontal',true,true,35],
									 ['parallaxtoright', 12, 3,1,0,'horizontal',true,true,36],
									 ['parallaxtoleft', 15, 3,1,0,'horizontal',true,true,37],
									 ['parallaxtotop', 14, 3,1,0,'horizontal',true,true,38],
									 ['parallaxtobottom', 13, 3,1,0,'horizontal',true,true,39],
									 ['scaledownfromright', 12, 4,1,0,'horizontal',true,true,40],
									 ['scaledownfromleft', 15, 4,1,0,'horizontal',true,true,41],
									 ['scaledownfromtop', 14, 4,1,0,'horizontal',true,true,42],
									 ['scaledownfrombottom', 13, 4,1,0,'horizontal',true,true,43],
									 ['zoomout', 13, 5,1,0,'horizontal',true,true,44],
									 ['zoomin', 13, 6,1,0,'horizontal',true,true,45],
									 ['notransition',26,0,1,0,'horizontal',true,null,46]
								   ];


			var flatTransitions = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];
			var premiumTransitions = [16,17,18,19,20,21,22,23,24,25,26,27]

			var nexttrans =0;
			var specials = 1;
			var STAindex = 0;
			var indexcounter =0;
			var STA = new Array;
			

			// RANDOM TRANSITIONS
			if (comingtransition == "random") {
				comingtransition = Math.round(Math.random()*transitionsArray.length-1);
				if (comingtransition>transitionsArray.length-1) comingtransition=transitionsArray.length-1;
			}

			// RANDOM FLAT TRANSITIONS
			if (comingtransition == "random-static") {
				comingtransition = Math.round(Math.random()*flatTransitions.length-1);
				if (comingtransition>flatTransitions.length-1) comingtransition=flatTransitions.length-1;
				comingtransition = flatTransitions[comingtransition];
			}

			// RANDOM PREMIUM TRANSITIONS
			if (comingtransition == "random-premium") {
				comingtransition = Math.round(Math.random()*premiumTransitions.length-1);
				if (comingtransition>premiumTransitions.length-1) comingtransition=premiumTransitions.length-1;
				comingtransition = premiumTransitions[comingtransition];
			}

			findTransition();

			// CHECK IF WE HAVE IE8 AND THAN FALL BACK ON FLAT TRANSITIONS
			if (isIE(8) && nexttrans>15 && nexttrans<28) {
				comingtransition = Math.round(Math.random()*flatTransitions.length-1);
				if (comingtransition>flatTransitions.length-1) comingtransition=flatTransitions.length-1;
				comingtransition = flatTransitions[comingtransition];
				indexcounter =0;
				findTransition();
			}

			function findTransition() {
				// FIND THE RIGHT TRANSITION PARAMETERS HERE
				jQuery.each(transitionsArray,function(inde,trans) {
					if (trans[0] == comingtransition || trans[8] == comingtransition) {
						nexttrans = trans[1];
						specials = trans[2];
						STAindex = indexcounter;
					}
					indexcounter = indexcounter+1;
				})
			}



		    var direction=-1;
			if (opt.leftarrowpressed==1 || opt.act>opt.next) direction=1;



			opt.leftarrowpressed=0;

			if (nexttrans>26) nexttrans = 26;
			if (nexttrans<0) nexttrans = 0;


			// DEFINE THE MASTERSPEED FOR THE SLIDE //
			var masterspeed=300;
			if (nextli.data('masterspeed')!=undefined && nextli.data('masterspeed')>99 && nextli.data('masterspeed')<4001)
				masterspeed = nextli.data('masterspeed');

			// PREPARED DEFAULT SETTINGS PER TRANSITION
			STA = transitionsArray[STAindex];





			/////////////////////////////////////////////
			// SET THE BULLETS SELECTED OR UNSELECTED  //
			/////////////////////////////////////////////


			container.parent().find(".bullet").each(function() {
				var bul = jQuery(this);
				bul.removeClass("selected");

				if (opt.navigationArrows=="withbullet" || opt.navigationArrows=="nexttobullets") {
					if (bul.index()-1 == opt.next) bul.addClass('selected');

				} else {

					if (bul.index() == opt.next)  bul.addClass('selected');

				}
			});



			//////////////////////////////////////////////////////////////////
			// 		SET THE NEXT CAPTION AND REMOVE THE LAST CAPTION		//
			//////////////////////////////////////////////////////////////////

					container.find('>li').each(function() {
						var li = jQuery(this);
						if (li.index!=opt.act && li.index!=opt.next) li.css({'z-index':16});
					});

					actli.css({'z-index':18});
					nextli.css({'z-index':20});
					nextli.css({'opacity':0});


			///////////////////////////
			//	ANIMATE THE CAPTIONS //
			///////////////////////////

			if (actli.index() != nextli.index() && opt.firststart!=1) {
				removeTheCaptions(actli,opt);

			}
		
			animateTheCaptions(nextli, opt);




			/////////////////////////////////////////////
			//	SET THE ACTUAL AMOUNT OF SLIDES !!     //
			//  SET A RANDOM AMOUNT OF SLOTS          //
			///////////////////////////////////////////
						if (nextli.data('slotamount')==undefined || nextli.data('slotamount')<1) {
							opt.slots=Math.round(Math.random()*12+4);
							if (comingtransition=="boxslide")
								opt.slots=Math.round(Math.random()*6+3);
							else
							if (comingtransition=="flyin")
								opt.slots=Math.round(Math.random()*4+1);
						 } else {
							opt.slots=nextli.data('slotamount');

						}

			/////////////////////////////////////////////
			//	SET THE ACTUAL AMOUNT OF SLIDES !!     //
			//  SET A RANDOM AMOUNT OF SLOTS          //
			///////////////////////////////////////////
						if (nextli.data('rotate')==undefined)
							opt.rotate = 0
						 else
							if (nextli.data('rotate')==999)
								opt.rotate=Math.round(Math.random()*360);
							 else
							    opt.rotate=nextli.data('rotate');
						if (!jQuery.support.transition  || opt.ie || opt.ie9) opt.rotate=0;



			//////////////////////////////
			//	FIRST START 			//
			//////////////////////////////

			if (opt.firststart==1) {
					actli.css({'opacity':0});
					opt.firststart=0;
			}


			// HERE COMES THE TRANSITION ENGINE

			// ADJUST MASTERSPEED
			masterspeed = masterspeed + STA[4];

			if ((nexttrans==4 || nexttrans==5 || nexttrans==6) && opt.slots<3 ) opt.slots=3;

			// ADJUST SLOTS
			if (STA[3] != 0) opt.slots = Math.min(opt.slots,STA[3]);
			if (nexttrans==9) opt.slots = opt.width/20;
			if (nexttrans==10) opt.slots = opt.height/20;




			// PREPAREONESLIDEBOX
			if (STA[5] == "box") {
				if (STA[7] !=null) prepareOneSlideBox(actsh,opt,STA[7]);
				if (STA[6] !=null) prepareOneSlideBox(nextsh,opt,STA[6]);
			} else

			if (STA[5] == "vertical" || STA[5] == "horizontal") {
				if (STA[7] !=null) prepareOneSlideSlot(actsh,opt,STA[7],STA[5]);
				if (STA[6] !=null) prepareOneSlideSlot(nextsh,opt,STA[6],STA[5]);
			}

			// SHOW FIRST LI
			if (nexttrans<12 || nexttrans>16)  nextli.css({'opacity':1});


			/////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION I.  //
			////////////////////////////////////
			if (nexttrans==0) {								// BOXSLIDE
						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT

						var maxz = Math.ceil(opt.height/opt.sloth);
						var curz = 0;
						nextsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);
							curz=curz+1;
							if (curz==maxz) curz=0;

							TweenLite.fromTo(ss,(masterspeed)/600,
												{opacity:0,top:(0-opt.sloth),left:(0-opt.slotw),rotation:opt.rotate},
												{opacity:1,transformPerspective:600,top:0,left:0,scale:1,rotation:0,delay:((j)*15 + (curz)*30)/1500, ease:Power2.easeOut,onComplete:function() {
																if (j==(opt.slots*opt.slots)-1) {
																		letItFree(container,opt,nextsh,actsh,nextli,actli)
																	}

												}});
						});
			}
			/////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION I.  //
			////////////////////////////////////
			if (nexttrans==1) {


						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT

						var maxtime;

						nextsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);

							rand=Math.random()*masterspeed+300;
							rand2=Math.random()*500+200;

							if (rand+rand2>maxtime) maxtime = rand2+rand2;


							TweenLite.fromTo(ss,rand/1000,
										{opacity:0,transformPerspective:600,rotation:opt.rotate},
										{opacity:1, ease:Power2.easeInOut,rotation:0,delay:rand2/1000})



						});

						setTimeout(function() {
											letItFree(container,opt,nextsh,actsh,nextli,actli)
								},masterspeed+300);

			}


			/////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION I.  //
			////////////////////////////////////
			if (nexttrans==2) {


						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});

						// ALL OLD SLOTS SHOULD BE SLIDED TO THE RIGHT
						actsh.find('.slotslide').each(function() {
							var ss=jQuery(this);

									TweenLite.to(ss,masterspeed/1000,{left:opt.slotw, rotation:(0-opt.rotate),onComplete:function() {
															letItFree(container,opt,nextsh,actsh,nextli,actli)

									}});

						});

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
						nextsh.find('.slotslide').each(function() {
							var ss=jQuery(this);

								TweenLite.fromTo(ss,masterspeed/1000,
												{left:0-opt.slotw, rotation:opt.rotate,transformPerspective:600},
												{left:0, rotation:0,ease:Power2.easeOut,onComplete:function() {
															letItFree(container,opt,nextsh,actsh,nextli,actli)
														}
									});

						});
			}



			/////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION I.  //
			////////////////////////////////////
			if (nexttrans==3) {


						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});

						// ALL OLD SLOTS SHOULD BE SLIDED TO THE RIGHT
						actsh.find('.slotslide').each(function() {
							var ss=jQuery(this);
									TweenLite.to(ss,masterspeed/1000,{top:opt.sloth,rotation:opt.rotate,transformPerspective:600,onComplete:function() {
															letItFree(container,opt,nextsh,actsh,nextli,actli)
									}});

						});

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
						nextsh.find('.slotslide').each(function() {
							var ss=jQuery(this);

								TweenLite.fromTo(ss,masterspeed/1000,
												{top:0-opt.sloth,rotation:opt.rotate,transformPerspective:600},
												{top:0,rotation:0,ease:Power2.easeOut,onComplete:function() {
													letItFree(container,opt,nextsh,actsh,nextli,actli)
								}});

						});
			}



			/////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION I.  //
			////////////////////////////////////
			if (nexttrans==4 || nexttrans==5) {

						//SET DEFAULT IMG UNVISIBLE




						nextsh.find('.defaultimg').css({'opacity':0});
						setTimeout(function() {
							actsh.find('.defaultimg').css({opacity:0});
						},100);



						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
						var cspeed = (masterspeed)/1000;
						var ticker = cspeed;



						actsh.find('.slotslide').each(function(i) {
							var ss=jQuery(this);
							var del = (i*cspeed)/opt.slots;
							if (nexttrans==5) del = ((opt.slots-i-1)*cspeed)/(opt.slots)/1.5;
							TweenLite.to(ss,cspeed*3,{transformPerspective:600,top:0+opt.height,opacity:0.5,rotation:opt.rotate,ease:Power2.easeInOut,delay:del});
						});

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
						nextsh.find('.slotslide').each(function(i) {
							var ss=jQuery(this);
							var del = (i*cspeed)/opt.slots;
							if (nexttrans==5) del = ((opt.slots-i-1)*cspeed)/(opt.slots)/1.5;
							TweenLite.fromTo(ss,cspeed*3,
											{top:(0-opt.height),opacity:0.5,rotation:opt.rotate,transformPerspective:600},
											{top:0,opacity:1,rotation:0,ease:Power2.easeInOut,delay:del,onComplete:function() {
													if (i==opt.slots-1) {
																letItFree(container,opt,nextsh,actsh,nextli,actli)
													}
							}});

						});


			}




			/////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION I.  //
			////////////////////////////////////
			if (nexttrans==6) {


						if (opt.slots<2) opt.slots=2;

						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});
						setTimeout(function() {
							actsh.find('.defaultimg').css({opacity:0});
						},100);

						actsh.find('.slotslide').each(function(i) {
							var ss=jQuery(this);

							if (i<opt.slots/2)
								var tempo = (i+2)*60;
							else
								var tempo = (2+opt.slots-i)*60;

							TweenLite.to(ss,(masterspeed+tempo)/1000,{top:0+opt.height,opacity:1,rotation:opt.rotate,transformPerspective:600,ease:Power2.easeInOut});


						});

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
						nextsh.find('.slotslide').each(function(i) {
							var ss=jQuery(this);

							if (i<opt.slots/2)
								var tempo = (i+2)*60;
							else
								var tempo = (2+opt.slots-i)*60;

									TweenLite.fromTo(ss,(masterspeed+tempo)/1000,
													{top:(0-opt.height),opacity:1,rotation:opt.rotate,transformPerspective:600},
													{top:(0),opacity:1,rotation:0,ease:Power2.easeInOut,onComplete:function() {
															if (i==Math.round(opt.slots/2)) {
																letItFree(container,opt,nextsh,actsh,nextli,actli)
															}
									}});




						});
			}


			////////////////////////////////////
			// THE SLOTSZOOM - TRANSITION II. //
			////////////////////////////////////
			if (nexttrans==7) {

						masterspeed = masterspeed *2;

						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});
						setTimeout(function() {
							actsh.find('.defaultimg').css({opacity:0});
						},100);
						// ALL OLD SLOTS SHOULD BE SLIDED TO THE RIGHT
						actsh.find('.slotslide').each(function() {
							var ss=jQuery(this).find('div');
							TweenLite.to(ss,masterspeed/1000,{
									left:(0-opt.slotw/2)+'px',
									top:(0-opt.height/2)+'px',
									width:(opt.slotw*2)+"px",
									height:(opt.height*2)+"px",
									opacity:0,
									rotation:opt.rotate,
									transformPerspective:600,
									ease:Power2.easeOut});

						});

						//////////////////////////////////////////////////////////////
						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT //
						///////////////////////////////////////////////////////////////
						nextsh.find('.slotslide').each(function(i) {
							var ss=jQuery(this).find('div');

							TweenLite.fromTo(ss,masterspeed/1000,
										{left:0,top:0,opacity:0,transformPerspective:600},
										{left:(0-i*opt.slotw)+'px',
										 ease:Power2.easeOut,
									     top:(0)+'px',
									     width:opt.width,
									     height:opt.height,
										 opacity:1,rotation:0,
										 delay:0.1,
										 onComplete:function() {
												letItFree(container,opt,nextsh,actsh,nextli,actli)
										 }
										});
						});
			}




			////////////////////////////////////
			// THE SLOTSZOOM - TRANSITION II. //
			////////////////////////////////////
			if (nexttrans==8) {

						masterspeed = masterspeed * 3;

						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});


						// ALL OLD SLOTS SHOULD BE SLIDED TO THE RIGHT
						actsh.find('.slotslide').each(function() {
							var ss=jQuery(this).find('div');

									TweenLite.to(ss,masterspeed/1000,
												  {left:(0-opt.width/2)+'px',
												   top:(0-opt.sloth/2)+'px',
												   width:(opt.width*2)+"px",
												   height:(opt.sloth*2)+"px",
												   transformPerspective:600,
												   opacity:0,rotation:opt.rotate

													});

						});


						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT //
						///////////////////////////////////////////////////////////////
						nextsh.find('.slotslide').each(function(i) {
							var ss=jQuery(this).find('div');

									TweenLite.fromTo(ss,masterspeed/1000,
												  {left:0, top:0,opacity:0,transformPerspective:600},
												  {'left':(0)+'px',
												   'top':(0-i*opt.sloth)+'px',
												   'width':(nextsh.find('.defaultimg').data('neww'))+"px",
												   'height':(nextsh.find('.defaultimg').data('newh'))+"px",
												   opacity:1,rotation:0,
												   onComplete:function() {
															letItFree(container,opt,nextsh,actsh,nextli,actli)
													}});

						});
			}


			////////////////////////////////////////
			// THE SLOTSFADE - TRANSITION III.   //
			//////////////////////////////////////
			if (nexttrans==9 || nexttrans==10) {


						nextsh.find('.defaultimg').css({'opacity':0});

						var ssamount=0;
						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
						nextsh.find('.slotslide').each(function(i) {
							var ss=jQuery(this);
							ssamount++;
							TweenLite.fromTo(ss,masterspeed/1000,{opacity:0,transformPerspective:600,left:0,top:0},{opacity:1,ease:Power2.easeInOut,delay:(i*4)/1000});

						});

						//nextsh.find('.defaultimg').transition({'opacity':1},(masterspeed+(ssamount*4)));

						setTimeout(function() {
									letItFree(container,opt,nextsh,actsh,nextli,actli)
							},(masterspeed+(ssamount*4)));
			}


			///////////////////////////
			// SIMPLE FADE ANIMATION //
			///////////////////////////

			if (nexttrans==11 || nexttrans==26) {


						nextsh.find('.defaultimg').css({'opacity':0,'position':'relative'});

						var ssamount=0;
						if (nexttrans==26) masterspeed=0;

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
						nextsh.find('.slotslide').each(function(i) {
							var ss=jQuery(this);
							TweenLite.fromTo(ss,masterspeed/1000,{opacity:0},{opacity:1,ease:Power2.easeInOut});
						});

						setTimeout(function() {
									letItFree(container,opt,nextsh,actsh,nextli,actli)
							},masterspeed+15);
			}






			if (nexttrans==12 || nexttrans==13 || nexttrans==14 || nexttrans==15) {

						//masterspeed = masterspeed * 3;


						setTimeout(function() {
							actsh.find('.defaultimg').css({opacity:0});
						},100);
						nextsh.find('.defaultimg').css({'opacity':0});

					//	kill();

						var oow = opt.width;
						var ooh = opt.height;


						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
						var ssn=nextsh.find('.slotslide')

						if (opt.fullWidth=="on" || opt.fullSreen=="on") {
							oow=ssn.width();
							ooh=ssn.height();
						}
						var twx = 0;
						var twy = 0;

						if (nexttrans==12)
							twx = oow;
						else
						if (nexttrans==15)
							twx = 0-oow;
						else
						if (nexttrans==13)
							twy = ooh;
						else
						if (nexttrans==14)
							twy = 0-ooh;

						// SPECIALS FOR EXTENDED ANIMATIONS
						var op = 1;
						var scal = 1;
						var fromscale = 1;
						var easeitout = Power2.easeInOut;
						var easeitin = Power2.easeInOut;
						var speedy = masterspeed/1000;
						var speedy2 = speedy;

						// DEPENDING ON EXTENDED SPECIALS, DIFFERENT SCALE AND OPACITY FUNCTIONS NEED TO BE ADDED
						if (specials == 1) op = 0;
						if (specials == 2) op = 0;
						if (specials == 3) {
								easeitout = Power2.easeInOut;
								easeitin = Power1.easeInOut;
								actli.css({'position':'absolute','z-index':20});
								nextli.css({'position':'absolute','z-index':15});
								speedy = masterspeed / 1200;
						}

						if (specials==4 || specials==5)
							scal=0.6;
						if (specials==6 )
							scal=1.4;


						if (specials==5 || specials==6) {
						    fromscale=1.4;
						    op=0;
						    oow=0;
						    ooh=0;twx=0;twy=0;
						 }
						if (specials==6) fromscale=0.6;



						TweenLite.fromTo(ssn,speedy,
										{left:twx, top:twy, scale:fromscale, opacity:op,rotation:opt.rotate},
										{opacity:1,rotation:0,left:0,top:0,scale:1,ease:easeitin,onComplete:function() {
														letItFree(container,opt,nextsh,actsh,nextli,actli);
														actli.css({'position':'absolute','z-index':18});
														nextli.css({'position':'absolute','z-index':20});
												}

										});

						var ssa=actsh.find('.slotslide');

						if (specials==4 || specials==5) {
							oow = 0; ooh=0;
						}

						if (specials!=1) {
								if (nexttrans==12)
									TweenLite.to(ssa,speedy2,{'left':(0-oow)+'px',scale:scal,opacity:op,rotation:opt.rotate,ease:easeitout});
								else
								if (nexttrans==15)
									TweenLite.to(ssa,speedy2,{'left':(oow)+'px',scale:scal,opacity:op,rotation:opt.rotate,ease:easeitout});
								else
								if (nexttrans==13)
									TweenLite.to(ssa,speedy2,{'top':(0-ooh)+'px',scale:scal,opacity:op,rotation:opt.rotate,ease:easeitout});
								else
								if (nexttrans==14)
									TweenLite.to(ssa,speedy2,{'top':(ooh)+'px',scale:scal,opacity:op,rotation:opt.rotate,ease:easeitout});
						}
						nextli.css({'opacity':1});

			}


			//////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION XVI.  //
			//////////////////////////////////////
			if (nexttrans==16) {						// PAPERCUT



					actli.css({'position':'absolute','z-index':20});
					nextli.css({'position':'absolute','z-index':15});


					// PREPARE THE CUTS
					actli.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>');

					actli.find('.tp-half-one').clone(true).appendTo(actli).addClass("tp-half-two");
					actli.find('.tp-half-two').removeClass('tp-half-one');

					var oow = opt.width;
					var ooh = opt.height;
					if (opt.autoHeight=="on")
						ooh = container.height();


					actli.find('.tp-half-one .defaultimg').wrap('<div class="tp-papercut" style="width:'+oow+'px;height:'+ooh+'px;"></div>')

					actli.find('.tp-half-two .defaultimg').wrap('<div class="tp-papercut" style="width:'+oow+'px;height:'+ooh+'px;"></div>')

					actli.find('.tp-half-two .defaultimg').css({position:'absolute',top:'-50%'});

					actli.find('.tp-half-two .tp-caption').wrapAll('<div style="position:absolute;top:-50%;left:0px"></div>');

					TweenLite.set(actli.find('.tp-half-two'),
					                 {width:oow,height:ooh,overflow:'hidden',zIndex:15,position:'absolute',top:ooh/2,left:'0px',transformPerspective:600,transformOrigin:"center bottom"});

					TweenLite.set(actli.find('.tp-half-one'),
					                 {width:oow,height:ooh/2,overflow:'visible',zIndex:10,position:'absolute',top:'0px',left:'0px',transformPerspective:600,transformOrigin:"center top"});



					// ANIMATE THE CUTS
					var img=actli.find('.defaultimg');


					var ro1=Math.round(Math.random()*20-10);
					var ro2=Math.round(Math.random()*20-10);
					var ro3=Math.round(Math.random()*20-10);
					var xof = Math.random()*0.4-0.2;
					var yof = Math.random()*0.4-0.2;
					var sc1=Math.random()*1+1;
					var sc2=Math.random()*1+1;


					TweenLite.fromTo(actli.find('.tp-half-one'),masterspeed/1000,
					                 {width:oow,height:ooh/2,position:'absolute',top:'0px',left:'0px',transformPerspective:600,transformOrigin:"center top"},
					                 {scale:sc1,rotation:ro1,y:(0-ooh-ooh/4),ease:Power2.easeInOut});
					setTimeout(function() {
						TweenLite.set(actli.find('.tp-half-one'),{overflow:'hidden'});
					},50);
					TweenLite.fromTo(actli.find('.tp-half-one'),masterspeed/2000,{opacity:1,transformPerspective:600,transformOrigin:"center center"},{opacity:0,delay:masterspeed/2000});

					TweenLite.fromTo(actli.find('.tp-half-two'),masterspeed/1000,
					                 {width:oow,height:ooh,overflow:'hidden',position:'absolute',top:ooh/2,left:'0px',transformPerspective:600,transformOrigin:"center bottom"},
					                 {scale:sc2,rotation:ro2,y:ooh+ooh/4,ease:Power2.easeInOut});

					TweenLite.fromTo(actli.find('.tp-half-two'),masterspeed/2000,{opacity:1,transformPerspective:600,transformOrigin:"center center"},{opacity:0,delay:masterspeed/2000});

					if (actli.html()!=null)
						TweenLite.fromTo(nextli,(masterspeed-200)/1000,{opacity:0,scale:0.8,x:opt.width*xof, y:ooh*yof,rotation:ro3,transformPerspective:600,transformOrigin:"center center"},{rotation:0,scale:1,x:0,y:0,opacity:1,ease:Power2.easeInOut});

					nextsh.find('.defaultimg').css({'opacity':1});
					setTimeout(function() {


								// CLEAN UP BEFORE WE START
								actli.css({'position':'absolute','z-index':18});
								nextli.css({'position':'absolute','z-index':20});
								nextsh.find('.defaultimg').css({'opacity':1});
								actsh.find('.defaultimg').css({'opacity':0});
								if (actli.find('.tp-half-one').length>0)  {
									actli.find('.tp-half-one .defaultimg').unwrap();
									actli.find('.tp-half-one .slotholder').unwrap();

								}
								actli.find('.tp-half-two').remove();
								opt.transition = 0;
								opt.act = opt.next;

					},masterspeed);
					nextli.css({'opacity':1});

			}

			////////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION XVII.  //
			///////////////////////////////////////
			if (nexttrans==17) {								// 3D CURTAIN HORIZONTAL


						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT


						nextsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);

							TweenLite.fromTo(ss,(masterspeed)/800,
											{opacity:0,rotationY:0,scale:0.9,rotationX:-110,transformPerspective:600,transformOrigin:"center center"},
											{opacity:1,top:0,left:0,scale:1,rotation:0,rotationX:0,rotationY:0,ease:Power3.easeOut,delay:j*0.06,onComplete:function() {
													if (j==opt.slots-1) letItFree(container,opt,nextsh,actsh,nextli,actli)
											}});

						});
			}



			////////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION XVIII.  //
			///////////////////////////////////////
			if (nexttrans==18) {								// 3D CURTAIN VERTICAL


						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});


						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT

						nextsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);

							TweenLite.fromTo(ss,(masterspeed)/500,
											{opacity:0,rotationY:310,scale:0.9,rotationX:10,transformPerspective:600,transformOrigin:"center center"},
											{opacity:1,top:0,left:0,scale:1,rotation:0,rotationX:0,rotationY:0,ease:Power3.easeOut,delay:j*0.06,onComplete:function() {
													if (j==opt.slots-1)
														letItFree(container,opt,nextsh,actsh,nextli,actli)
											}});

						});



			}


			////////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION XIX.  //
			///////////////////////////////////////


			if (nexttrans==19 || nexttrans==22) {								// IN CUBE


						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});
						setTimeout(function() {
							actsh.find('.defaultimg').css({opacity:0});
						},100);
						var chix=nextli.css('z-index');
						var chix2=actli.css('z-index');

						var rot = 90;
						var op = 1;
						if (direction==1) rot = -90;

						if (nexttrans==19) {
							var torig = "center center -"+opt.height/2;
							op=0;

						} else {
							var torig = "center center "+opt.height/2;

						}

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT

						//if (nexttrans==129) {
							TweenLite.fromTo(nextsh,masterspeed/2000,{transformPerspective:600,z:0,x:0,rotationY:0},{rotationY:1,ease:Power1.easeInOut,z:-40});
							TweenLite.fromTo(nextsh,masterspeed/2000,{transformPerspective:600,z:-40,rotationY:1},{rotationY:0,z:0,ease:Power1.easeInOut,x:0,delay:3*(masterspeed/4000)});
							TweenLite.fromTo(actsh,masterspeed/2000,{transformPerspective:600,z:0,x:0,rotationY:0},{rotationY:1,x:0,ease:Power1.easeInOut,z:-40});
							TweenLite.fromTo(actsh,masterspeed/2000,{transformPerspective:600,z:-40,x:0,rotationY:1},{rotationY:0,z:0,x:0,ease:Power1.easeInOut,delay:3*(masterspeed/4000)});
						//}

						nextsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);

							TweenLite.fromTo(ss,masterspeed/1000,
											{left:0,rotationY:opt.rotate,opacity:op,top:0,scale:0.8,transformPerspective:600,transformOrigin:torig,rotationX:rot},
											{left:0,rotationY:0,opacity:1,top:0,z:0, scale:1,rotationX:0, delay:(j*50)/1000,ease:Power2.easeInOut,onComplete: function() {

																	if (j==opt.slots-1)
																		letItFree(container,opt,nextsh,actsh,nextli,actli)
															}
											});
							TweenLite.to(ss,0.1,{opacity:1,delay:(j*50)/1000+masterspeed/3000});

						});

						actsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);
							var rot = -90;
							if (direction==1) rot = 90;

							TweenLite.fromTo(ss,masterspeed/1000,
											{opacity:1,rotationY:0,top:0,z:0,scale:1,transformPerspective:600,transformOrigin:torig, rotationX:0},
											{opacity:1,rotationY:opt.rotate,top:0, scale:0.8,rotationX:rot, delay:(j*50)/1000,ease:Power2.easeInOut,onComplete: function() {

																	if (j==opt.slots-1)
																		letItFree(container,opt,nextsh,actsh,nextli,actli)
															}
											});
							TweenLite.to(ss,0.1,{opacity:0,delay:(j*50)/1000+(masterspeed/1000 - (masterspeed/10000))});


						});
			}




			////////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION XX.  //
			///////////////////////////////////////
			if (nexttrans==20 ) {								// FLYIN


						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});
						setTimeout(function() {
							actsh.find('.defaultimg').css({opacity:0});
						},100);
						var chix=nextli.css('z-index');
						var chix2=actli.css('z-index');


						if (direction==1) {
						   var ofx = -opt.width
						   var rot  =70;
						   var torig = "left center -"+opt.height/2;
						} else {
							var ofx = opt.width;
							var rot = -70;
							var torig = "right center -"+opt.height/2;
						}


						nextsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);
							//ss.css({overflow:'visible'});
							TweenLite.fromTo(ss,masterspeed/1500,
											{left:ofx,rotationX:40,z:-600, opacity:op,top:0,transformPerspective:600,transformOrigin:torig,rotationY:rot},
											{left:0, delay:(j*50)/1000,ease:Power2.easeInOut});

							TweenLite.fromTo(ss,masterspeed/1000,
											{rotationX:40,z:-600, opacity:op,top:0,scale:1,transformPerspective:600,transformOrigin:torig,rotationY:rot},
											{rotationX:0,opacity:1,top:0,z:0, scale:1,rotationY:0, delay:(j*50)/1000,ease:Power2.easeInOut,onComplete: function() {

																	if (j==opt.slots-1)
																		letItFree(container,opt,nextsh,actsh,nextli,actli)
															}
											});
							TweenLite.to(ss,0.1,{opacity:1,delay:(j*50)/1000+masterspeed/2000});

						});



						actsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);
							//ss.css({overflow:'visible'});
							if (direction!=1) {
							   var ofx = -opt.width
							   var rot  =70;
							   var torig = "left center -"+opt.height/2;
							} else {
								var ofx = opt.width;
								var rot = -70;
								var torig = "right center -"+opt.height/2;
							}
							TweenLite.fromTo(ss,masterspeed/1000,
											{opacity:1,rotationX:0,top:0,z:0,scale:1,left:0, transformPerspective:600,transformOrigin:torig, rotationY:0},
											{opacity:1,rotationX:40,top:0, z:-600, left:ofx, scale:0.8,rotationY:rot, delay:(j*50)/1000,ease:Power2.easeInOut,onComplete: function() {

																if (j==opt.slots-1)
																	letItFree(container,opt,nextsh,actsh,nextli,actli)																	}
											});
							TweenLite.to(ss,0.1,{opacity:0,delay:(j*50)/1000+(masterspeed/1000 - (masterspeed/10000))});


						});
			}






			////////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION XX.  //
			///////////////////////////////////////
			if (nexttrans==21 || nexttrans==25) {								// TURNOFF


						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});
						setTimeout(function() {
							actsh.find('.defaultimg').css({opacity:0});
						},100);
						var chix=nextli.css('z-index');
						var chix2=actli.css('z-index');


						if (direction==1) {
						   var ofx = -opt.width
						   var rot  =110;

						   if (nexttrans==25) {
						   	 var torig = "center top 0"
						   	 rot2 = -rot;
						   	 rot = opt.rotate;
						   } else {
						     var torig = "left center 0";
						     rot2 = opt.rotate;
						   }

						} else {
							var ofx = opt.width;
							var rot = -110;
							if (nexttrans==25) {
						   	 var torig = "center bottom 0"
						   	 rot2 = -rot;
						   	 rot = opt.rotate;
						   } else {
						     var torig = "right center 0";
						     rot2 = opt.rotate;
						   }
						}


						nextsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);


							TweenLite.fromTo(ss,masterspeed/1500,
											{left:0,rotationX:rot2,z:0, opacity:0,top:0,scale:1,transformPerspective:600,transformOrigin:torig,rotationY:rot},
											{left:0,rotationX:0,top:0,z:0, scale:1,rotationY:0, delay:(j*100)/1000+masterspeed/10000,ease:Power2.easeInOut,onComplete: function() {

																	if (j==opt.slots-1)
																		letItFree(container,opt,nextsh,actsh,nextli,actli)
															}
											});
							TweenLite.to(ss,0.3,{opacity:1,delay:(j*100)/1000+(masterspeed*0.2)/2000+masterspeed/10000});

						});



						if (direction!=1) {
						   var ofx = -opt.width
						   var rot  = 90;

						   if (nexttrans==25) {
						   	 var torig = "center top 0"
						   	 rot2 = -rot;
						   	 rot = opt.rotate;
						   } else {
						     var torig = "left center 0";
						     rot2 = opt.rotate;
						   }

						} else {
							var ofx = opt.width;
							var rot = -90;
							if (nexttrans==25) {
						   	 var torig = "center bottom 0"
						   	 rot2 = -rot;
						   	 rot = opt.rotate;
						   } else {
						     var torig = "right center 0";
						     rot2 = opt.rotate;
						   }
						}

						actsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);


							TweenLite.fromTo(ss,masterspeed/3000,
											{left:0,rotationX:0,z:0, opacity:1,top:0,scale:1,transformPerspective:600,transformOrigin:torig,rotationY:0},
											{left:0,rotationX:rot2,top:0,z:0, scale:1,rotationY:rot, delay:(j*100)/1000,ease:Power1.easeInOut});
							TweenLite.to(ss,0.2,{opacity:0,delay:(j*50)/1000+(masterspeed/3000 - (masterspeed/10000))});


						});
			}



			////////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION XX.  //
			///////////////////////////////////////
			if (nexttrans==23 || nexttrans == 24) {								// cube-horizontal - inboxhorizontal


						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});
						setTimeout(function() {
							actsh.find('.defaultimg').css({opacity:0});
						},100);
						var chix=nextli.css('z-index');
						var chix2=actli.css('z-index');

						var rot = -90;
						if (direction==1)
							  rot = 90;

						var op = 1;


						if (nexttrans==23) {
							var torig = "center center -"+opt.width/2;
							op=0;

						} else {
							var torig = "center center "+opt.width/2;

						}


						var opx=0;

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
						TweenLite.fromTo(nextsh,masterspeed/2000,{transformPerspective:600,z:0,x:0,rotationY:0},{rotationY:1,ease:Power1.easeInOut,z:-90});
						TweenLite.fromTo(nextsh,masterspeed/2000,{transformPerspective:600,z:-90,rotationY:1},{rotationY:0,z:0,ease:Power1.easeInOut,x:0,delay:3*(masterspeed/4000)});
						TweenLite.fromTo(actsh,masterspeed/2000,{transformPerspective:600,z:0,x:0,rotationY:0},{rotationY:1,x:0,ease:Power1.easeInOut,z:-90});
						TweenLite.fromTo(actsh,masterspeed/2000,{transformPerspective:600,z:-90,x:0,rotationY:1},{rotationY:0,z:0,x:0,ease:Power1.easeInOut,delay:3*(masterspeed/4000)});

						nextsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);

							TweenLite.fromTo(ss,masterspeed/1000,
											{left:opx,rotationX:opt.rotate,opacity:op,top:0,scale:1,transformPerspective:600,transformOrigin:torig,rotationY:rot},
											{left:0,rotationX:0,opacity:1,top:0,z:0, scale:1,rotationY:0, delay:(j*50)/1000,ease:Power2.easeInOut,onComplete: function() {

																	if (j==opt.slots-1)
																		letItFree(container,opt,nextsh,actsh,nextli,actli);

															}
											});
							TweenLite.to(ss,0.1,{opacity:1,delay:(j*50)/1000+masterspeed/3000});

						});

						rot = 90;
						if (direction==1)
							  rot = -90;




						actsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);
							TweenLite.fromTo(ss,masterspeed/1000,
											{left:0,opacity:1,rotationX:0,top:0,z:0,scale:1,transformPerspective:600,transformOrigin:torig, rotationY:0},
											{left:opx,opacity:1,rotationX:opt.rotate,top:0, scale:1,rotationY:rot, delay:(j*50)/1000,ease:Power2.easeInOut,onComplete: function() {

																	if (j==opt.slots-1)
																		letItFree(container,opt,nextsh,actsh,nextli,actli)

															}
											});
							TweenLite.to(ss,0.1,{opacity:0,delay:(j*50)/1000+(masterspeed/1000 - (masterspeed/10000))});


						});
			}


			var data={};
			data.slideIndex=opt.next+1;
			container.trigger('revolution.slide.onchange',data);
			setTimeout(function() { container.trigger('revolution.slide.onafterswap'); },masterspeed);
			container.trigger('revolution.slide.onvideostop');
		}


		/******************************
			-	STOP KEN BURN	-
		********************************/
		function stopKenBurn(container,opt) {
			try{
				var actli = container.find('>ul:first-child >li:eq('+opt.act+')');
			} catch(e) {
				var actli=container.find('>ul:first-child >li:eq(1)');
			}

			opt.lastslide=opt.act;

			var nextli = container.find('>ul:first-child >li:eq('+opt.next+')');


			var actsh = actli.find('.slotholder');
			var nextsh = nextli.find('.slotholder');

			nextsh.find('.defaultimg').each(function() {
				var defimg = jQuery(this);
				if (defimg.data('kenburn')!=undefined)
					defimg.data('kenburn').restart();
				TweenLite.killTweensOf(defimg,false);
				TweenLite.set(defimg,{scale:1,rotationZ:0});

				defimg.data('bgposition',nextsh.data('bgposition'));
				defimg.data('currotate',nextsh.data('rotationstart'));
				defimg.data('curscale',nextsh.data('bgfit'));

				});
			/*actsh.find('.defaultimg').each(function() {
				var defimg = jQuery(this);
				TweenLite.killTweensOf(defimg,false);
				TweenLite.set(defimg,{scale:1,rotationZ:0});
				if (defimg.data('oldbgposition')!=undefined)
					defimg.data('bgposition',defimg.data('oldbgposition'));

				defimg.data('currotate',nextsh.data('rotationstart'));
				defimg.data('curscale',nextsh.data('zoomstart')/100);

				});*/

		}


		/******************************
			-	startKenBurn	-
		********************************/
		function startKenBurn(container,opt) {

			try{
				var actli = container.find('>ul:first-child >li:eq('+opt.act+')');
			} catch(e) {
				var actli=container.find('>ul:first-child >li:eq(1)');
			}

			opt.lastslide=opt.act;

			var nextli = container.find('>ul:first-child >li:eq('+opt.next+')');


			var actsh = actli.find('.slotholder');
			var nextsh = nextli.find('.slotholder');

			var
				bgps = nextsh.data('bgposition'),
				bgpe = nextsh.data('bgpositionend'),
				zos = nextsh.data('zoomstart')/100,
				zoe = nextsh.data('zoomend')/100,
				ros = nextsh.data('rotationstart'),
				roe = nextsh.data('rotationend'),
				bgfs = nextsh.data('bgfit'),
				bgfe = nextsh.data('bgfitend'),
				easeme = nextsh.data('easeme'),
				dur = nextsh.data('duration')/1000;

				if (bgfs==undefined) bgfs=100;
				if (bgfe==undefined) bgfe=100;

				bgfs = calculateKenBurnScales(bgfs,nextsh,opt);
				bgfe = calculateKenBurnScales(bgfe,nextsh,opt);
				bgfe = bgfs;

				if (zos==undefined) zos=1;
				if (zoe==undefined) zoe=1;
				if (ros==undefined) ros=0;
				if (roe==undefined) roe=0;

				if (zos<1) zos=1;
				if (zoe<1) zoe=1;

				nextsh.find('.defaultimg').each(function() {
					var defimg = jQuery(this);
					defimg.data(
						'kenburn',
						TweenLite.fromTo(
								defimg,
								dur,
								{
									transformPerspective:1200, 
									backgroundSize:bgfs, 
									z:0,
									backgroundPosition:bgps,
									//rotationZ:ros,
									scale:zos,
								},
								{
									yoyo:2,
									//rotationZ:roe,
									ease:easeme,
									backgroundSize:bgfe,
									backgroundPosition:bgps,
									scale:zoe,
									onUpdate:function() {
										defimg.data('bgposition',defimg.css('backgroundPosition'));
										if (!isIE(8)) defimg.data('currotate',getRotationDegrees(defimg));
										if (!isIE(8)) defimg.data('curscale',defimg.css('backgroundSize'));
									}
								}
						)
					);
			})
		}


		/***********************************************
			-	KEN BURN BACKGROUND FIT CALCULATOR	-
		***********************************************/
		function calculateKenBurnScales(proc,sloth,opt) {
			var ow = sloth.data('owidth');
			var oh = sloth.data('oheight');

			var factor = (opt.container.width() /ow);
			var nheight = oh * factor;

			var hfactor = (nheight / opt.container.height())*proc;



			return (proc+"% "+hfactor+"%");
		}


		/******************************************************
			-	CALCULATE CURRENT SCALE AND ROTATION	-
		*******************************************************/

		function getMatrix(obj) {
		    var matrix = obj.css("-webkit-transform") ||
		                 obj.css("-moz-transform")    ||
		                 obj.css("-ms-transform")     ||
		                 obj.css("-o-transform")      ||
		                 obj.css("transform");
		    return matrix;
		};

		function parseMatrix(_str) {
			    return _str.replace(/^matrix(3d)?\((.*)\)$/,'$2').split(/, /);
			}

		function getScaleDegrees(obj) {
			    var matrix = parseMatrix(getMatrix(obj)),
			        scale = 1;

			    if(matrix[0] !== 'none') {
			        var a = matrix[0],
			            b = matrix[1],
			            d = 10;
			        scale = Math.round( Math.sqrt( a*a + b*b ) * d ) / d;
			    }

			    return scale;
			};

		function getRotationDegrees(obj) {
			    var matrix = obj.css("-webkit-transform") ||
			    obj.css("-moz-transform")    ||
			    obj.css("-ms-transform")     ||
			    obj.css("-o-transform")      ||
			    obj.css("transform");
			    if(matrix !== 'none') {
			        var values = matrix.split('(')[1].split(')')[0].split(',');
			        var a = values[0];
			        var b = values[1];
			        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
			    } else { var angle = 0; }
			    return (angle < 0) ? angle +=360 : angle;
			}

		/**************************************
			-	GIVE FREE THE TRANSITIOSN	-
		**************************************/
		function letItFree(container,opt,nextsh,actsh,nextli,actli) {
					removeSlots(container,opt);
					nextsh.find('.defaultimg').css({'opacity':1});
					if (nextli.index()!=actli.index()) actsh.find('.defaultimg').css({'opacity':0});
					opt.act=opt.next;
					moveSelectedThumb(container);
					if (nextsh.data('kenburns')=="on")
						startKenBurn(container,opt);
		}


				//////////////////////////////////////////
				// CHANG THE YOUTUBE PLAYER STATE HERE //
				////////////////////////////////////////
				 function onPlayerStateChange(event) {

					 var embedCode = event.target.getVideoEmbedCode();
					 var ytcont = jQuery('#'+embedCode.split('id="')[1].split('"')[0])
					 var container = ytcont.closest('.tp-simpleresponsive');
					 var player = ytcont.parent().data('player');

					if (event.data == YT.PlayerState.PLAYING) {

						var bt = container.find('.tp-bannertimer');
						var opt = bt.data('opt');
						bt.stop();

						if (ytcont.closest('.tp-caption').data('volume')=="mute")
							  player.mute();

						opt.videoplaying=true;
						//konsole.log("VideoPlay set to True due onPlayerStateChange PLAYING");
						opt.videostartednow=1;

					} else {

						var bt = container.find('.tp-bannertimer');
						var opt = bt.data('opt');

						if (event.data!=-1) {
							if (opt.conthover==0)
								bt.animate({'width':"100%"},{duration:((opt.delay-opt.cd)-100),queue:false, easing:"linear"});
							opt.videoplaying=false;
							opt.videostoppednow=1;

						}

					}
					if (event.data==0 && opt.nextslideatend==true)
						opt.container.revnext();


				  }



				 ////////////////////////
				// VIMEO ADD EVENT /////
				////////////////////////
				function addEvent(element, eventName, callback) {

							if (element.addEventListener)  element.addEventListener(eventName, callback, false);
								else
							element.attachEvent(eventName, callback, false);
				}



				/////////////////////////////////////
				// EVENT HANDLING FOR VIMEO VIDEOS //
				/////////////////////////////////////

					function vimeoready_auto(player_id,autoplay) {

						var froogaloop = $f(player_id);
						var vimcont = jQuery('#'+player_id);
						var container = vimcont.closest('.tp-simpleresponsive');


						froogaloop.addEvent('ready', function(data) {
								if(autoplay) froogaloop.api('play');

								froogaloop.addEvent('play', function(data) {
									var bt = container.find('.tp-bannertimer');
									var opt = bt.data('opt');
									bt.stop();
									opt.videoplaying=true;
									if (vimcont.closest('.tp-caption').data('volume')=="mute")
									  froogaloop.api('setVolume',"0");
									//konsole.log("VideoPlay set to True due vimeoready_auto PLAYING");
								});

								froogaloop.addEvent('finish', function(data) {
										var bt = container.find('.tp-bannertimer');
										var opt = bt.data('opt');
										if (opt.conthover==0)
											bt.animate({'width':"100%"},{duration:((opt.delay-opt.cd)-100),queue:false, easing:"linear"});
										opt.videoplaying=false;
									//konsole.log("VideoPlay set to False due vimeoready_auto FINISH");
										opt.videostartednow=1;
										if (opt.nextslideatend==true)
											opt.container.revnext();

								});

								froogaloop.addEvent('pause', function(data) {
										var bt = container.find('.tp-bannertimer');
										var opt = bt.data('opt');
										if (opt.conthover==0)
											bt.animate({'width':"100%"},{duration:((opt.delay-opt.cd)-100),queue:false, easing:"linear"});
										opt.videoplaying=false;
									//konsole.log("VideoPlay set to False due vimeoready_auto PAUSE");
										opt.videostoppednow=1;
								});
						});
					}


					///////////////////////////////////////
					// EVENT HANDLING FOR VIDEO JS VIDEOS //
					////////////////////////////////////////
					function html5vidready(myPlayer,player_id) {

						if (player_id==undefined) player_id = jQuery(myPlayer["b"]).attr('id');
						var player_cont = jQuery('#'+player_id);
						var container = player_cont.closest('.tp-simpleresponsive');

						myPlayer.on("play",function() {

							if (player_cont.closest('.tp-caption').data('volume')=="mute")
								  myPlayer.volume(0);
							var bt = jQuery('body').find('.tp-bannertimer');
							var opt = bt.data('opt');
							bt.stop();
							try{
								opt.videoplaying=true;
							} catch(e) {}


							//konsole.log("VideoPlay set to True due html5vidready PLAYING");
						});

						myPlayer.on("pause",function() {
							    var bt = container.find('.tp-bannertimer');
								var opt = bt.data('opt');
								if (opt.conthover==0)
									bt.animate({'width':"100%"},{duration:((opt.delay-opt.cd)-100),queue:false, easing:"linear"});
								opt.videoplaying=false;
								//konsole.log("VideoPlay set to False due html5vidready pause");
								opt.videostoppednow=1;
						});

						myPlayer.on("ended",function() {
								var bt = container.find('.tp-bannertimer');
								var opt = bt.data('opt');
								if (opt.conthover==0)
									bt.animate({'width':"100%"},{duration:((opt.delay-opt.cd)-100),queue:false, easing:"linear"});
								opt.videoplaying=false;
								//konsole.log("VideoPlay set to False due html5vidready pause");
								opt.videostoppednow=1;
								if (opt.nextslideatend==true)
									opt.container.revnext();
						});


						myPlayer.on('loadedmetadata', function(data) {



								var videoWidth =0;
								var videoHeight=0;

								for(var prop in this) {
										try{
											if(this[prop].hasOwnProperty('videoWidth'))
												videoWidth = this[prop].videoWidth;

											if(this[prop].hasOwnProperty('videoHeight'))
												 videoHeight = this[prop].videoHeight;
										} catch(e) {}
									}


								var mediaAspect = videoWidth/videoHeight;




								if (player_cont.data('mediaAspect') == undefined) player_cont.data('mediaAspect',mediaAspect);
								if (player_cont.closest('.tp-caption').data('forcecover')==1)
									updateHTML5Size(player_cont,container);

						});

					}
				/////////////////////////////////////
				// RESIZE HTML5VIDEO FOR FULLSCREEN//
				/////////////////////////////////////
				function updateHTML5Size(pc,container) {
						var windowW = container.width();
						var windowH = container.height();
						var mediaAspect = pc.data('mediaAspect');

						var windowAspect = windowW/windowH;
						pc.parent().find('.vjs-poster').css({width:"100%",height:"100%"});
						if (windowAspect < mediaAspect) {
							// taller
								pc
									.width(windowH*mediaAspect)
									.height(windowH);
								pc
									.css('top',0)
									.css('left',-(windowH*mediaAspect-windowW)/2)
									.css('height',windowH);
								pc.find('.vjs-tech').css('width',windowH*mediaAspect);

						} else {
							// wider
								pc
									.width(windowW)
									.height(windowW/mediaAspect);
								pc
									.css('top',-(windowW/mediaAspect-windowH)/2)
									.css('left',0)
									.css('height',windowW/mediaAspect);
								pc.find('.vjs-tech').css('width','100%');

						}

					}
					
					
	


				////////////////////////
				// SHOW THE CAPTION  //
				///////////////////////
				function animateTheCaptions(nextli, opt,recalled) {
						
						var offsetx=0;
						var offsety=0;

						nextli.find('.tp-caption').each(function(i) {
								

								offsetx = opt.width/2 - (opt.startwidth*opt.bw)/2;



								var xbw = opt.bw;
								var xbh = opt.bh;


								if (opt.fullScreen=="on")
									  offsety = opt.height/2 - (opt.startheight*opt.bh)/2;

								if (opt.autoHeight=="on")
									  offsety = opt.container.height()/2 - (opt.startheight*opt.bh)/2;;

								if (offsety<0) offsety=0;

								var nextcaption=jQuery(this);//nextli.find('.tp-caption:eq('+i+')');
								

								var handlecaption=0;

								// HIDE CAPTION IF RESOLUTION IS TOO LOW
								if (opt.width<opt.hideCaptionAtLimit && nextcaption.data('captionhidden')=="on") {
									nextcaption.addClass("tp-hidden-caption")
									handlecaption=1;
								} else {
									if (opt.width<opt.hideAllCaptionAtLimit || opt.width<opt.hideAllCaptionAtLilmit)	{
										nextcaption.addClass("tp-hidden-caption")
										handlecaption=1;
									} else {
										nextcaption.removeClass("tp-hidden-caption")
									}
								}

								if (handlecaption==0) {

									// ADD A CLICK LISTENER TO THE CAPTION
									if (nextcaption.data('linktoslide')!=undefined && !nextcaption.hasClass("hasclicklistener")) {
										nextcaption.addClass("hasclicklistener")
										nextcaption.css({'cursor':'pointer'});
										if (nextcaption.data('linktoslide')!="no") {
											nextcaption.click(function() {
												var nextcaption=jQuery(this);
												var dir = nextcaption.data('linktoslide');
												if (dir!="next" && dir!="prev") {
													opt.container.data('showus',dir);
													opt.container.parent().find('.tp-rightarrow').click();
												} else
													if (dir=="next")
														opt.container.parent().find('.tp-rightarrow').click();
												else
													if (dir=="prev")
														opt.container.parent().find('.tp-leftarrow').click();
											});
										}
									}// END OF CLICK LISTENER


									if (offsetx<0) offsetx=0;


									// YOUTUBE AND VIMEO LISTENRES INITIALISATION

									var frameID = "iframe"+Math.round(Math.random()*1000+1);

									if (nextcaption.find('iframe').length>0 || nextcaption.find('video').length>0) {

										if (nextcaption.data('autoplayonlyfirsttime') == true || nextcaption.data('autoplayonlyfirsttime')=="true" ) {
											nextcaption.data('autoplay',true);
										}

										nextcaption.find('iframe').each(function() {
												var ifr=jQuery(this);
												

												// START YOUTUBE HANDLING
												opt.nextslideatend = nextcaption.data('nextslideatend');
												if (nextcaption.data('thumbimage')!=undefined && nextcaption.data('thumbimage').length>2 && nextcaption.data('autoplay')!=true && !recalled) {
													nextcaption.find('.tp-thumb-image').remove();
													nextcaption.append('<div class="tp-thumb-image" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url('+nextcaption.data('thumbimage')+'); background-size:cover"></div>');
												}

													if (ifr.attr('src').toLowerCase().indexOf('youtube')>=0) {

														 if (!ifr.hasClass("HasListener")) {
															try {
																ifr.attr('id',frameID);

																var player;
																if (nextcaption.data('autoplay')==true)
																	player = new YT.Player(frameID, {
																		events: {
																			"onStateChange": onPlayerStateChange,
																			'onReady': function(event) {event.target.playVideo()}
																		}
																	});
																else
																	player = new YT.Player(frameID, {
																		events: {
																			"onStateChange": onPlayerStateChange
																		}
																	});
																ifr.addClass("HasListener");

																nextcaption.data('player',player);

															} catch(e) {}
													 } else {
														if (nextcaption.data('autoplay')==true) {
																var player=nextcaption.data('player');
																nextcaption.data('timerplay',setTimeout(function() {
																	if (nextcaption.data('forcerewind')=="on")
																		player.seekTo(0);
																	player.playVideo();
																},nextcaption.data('start')));
														}
													 } // END YOUTUBE HANDLING

													 // PLAY VIDEO IF THUMBNAIL HAS BEEN CLICKED
															 nextcaption.find('.tp-thumb-image').click(function() {
																 TweenLite.to(jQuery(this),0.3,{opacity:0,ease:Power3.easeInOut,onComplete: function() {
																	 nextcaption.find('.tp-thumb-image').remove();
																	}
																 })
																 var player=nextcaption.data('player');
																 player.playVideo();
															 })
												} else {
													// START VIMEO HANDLING
													if (ifr.attr('src').toLowerCase().indexOf('vimeo')>=0) {

														   if (!ifr.hasClass("HasListener")) {
																ifr.addClass("HasListener");
																ifr.attr('id',frameID);
																var isrc = ifr.attr('src');
																var queryParameters = {}, queryString = isrc,
																re = /([^&=]+)=([^&]*)/g, m;
																// Creates a map with the query string parameters
																while (m = re.exec(queryString)) {
																	queryParameters[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
																}

																if (queryParameters['player_id']!=undefined)
																	isrc = isrc.replace(queryParameters['player_id'],frameID);
																else
																	isrc=isrc+"&player_id="+frameID;

																try{ isrc = isrc.replace('api=0','api=1'); } catch(e) {}

																isrc=isrc+"&api=1";

																ifr.attr('src',isrc);
																var player = nextcaption.find('iframe')[0];

																$f(player).addEvent('ready', function() {vimeoready_auto(frameID,nextcaption.data('autoplay'))});

															 } else {
																	if (nextcaption.data('autoplay')==true) {

																		var ifr = nextcaption.find('iframe');
																		var id = ifr.attr('id');
																		var froogaloop = $f(id);
																		nextcaption.data('timerplay',setTimeout(function() {
																			if (nextcaption.data('forcerewind')=="on")
																				froogaloop.api("seekTo",0);
																			froogaloop.api("play");
																		},nextcaption.data('start')));
																	}
															 }// END HAS LISTENER HANDLING

															 // PLAY VIDEO IF THUMBNAIL HAS BEEN CLICKED
															 nextcaption.find('.tp-thumb-image').click(function() {
																 TweenLite.to(jQuery(this),0.3,{opacity:0,ease:Power3.easeInOut,onComplete: function() {
																	 nextcaption.find('.tp-thumb-image').remove();
																	}
																 })
																 var ifr = nextcaption.find('iframe');
																 var id = ifr.attr('id');
																 var froogaloop = $f(id);
																 froogaloop.api("play");
															 })


													}  // END OF VIMEO HANDLING
											}  // END OF CHOOSE BETWEEN YOUTUBE AND VIMEO
										}); // END OF LOOP THROUGH IFRAMES

										// START OF VIDEO JS
										if (nextcaption.find('video').length>0) {


															nextcaption.find('video').each(function(i) {
																var html5vid = jQuery(this).parent();

																if (nextcaption.data('dottedoverlay')!="none" && nextcaption.data('dottedoverlay')!=undefined)
																	if (nextcaption.find('.tp-dottedoverlay').length!=1)
																		html5vid.append('<div class="tp-dottedoverlay '+nextcaption.data('dottedoverlay')+'"></div>');

																var mediaaspect=16/9;
																if (nextcaption.data('aspectratio')=="4:3") mediaaspect=4/3;
																html5vid.data('mediaAspect',mediaaspect);



																if (html5vid.closest('.tp-caption').data('forcecover')==1) 
																	updateHTML5Size(html5vid,opt.container);



																if (html5vid.hasClass("video-js")) {
																	opt.nextslideatend = nextcaption.data('nextslideatend');
																	if (!html5vid.hasClass("HasListener")) {
																		html5vid.addClass("HasListener");
																		var videoID = "videoid_"+Math.round(Math.random()*1000+1);
																		html5vid.attr('id',videoID);

																		videojs(videoID).ready(function(){

																			html5vidready(this,videoID)

																		});

																	} else {
																		videoID = html5vid.attr('id');
																	}


																	html5vid.find('.vjs-poster').css({display:"block"});

																	if (nextcaption.data('autoplay')==true) {

																		var bt=jQuery('body').find('#'+opt.container.attr('id')).find('.tp-bannertimer');
																		setTimeout(function(){
																			bt.stop();
																			opt.videoplaying=true;
																		},200);

																		//konsole.log("VideoPlay set to True due HTML5 VIDEO 1st/2nd load AutoPlay");


																		videojs(videoID).ready(function(){
																			var myPlayer = this;
																			try {
																					if (nextcaption.data('forcerewind')=="on")
																						  myPlayer.currentTime(0);
																				} catch(e) {

																				}

																			html5vid.data('timerplay',setTimeout(function() {
																				if (nextcaption.data('forcerewind')=="on")
																				  myPlayer.currentTime(0);

																				if (html5vid.closest('.tp-caption').data('volume')=="mute")
																				  myPlayer.volume(0);

																				setTimeout(function() {
																					myPlayer.play(0);
																					html5vid.find('.vjs-poster').css({display:"none"});
																				},50);
																			},10+nextcaption.data('start')));
																		});
																	}


																	if (html5vid.data('ww') == undefined) html5vid.data('ww',html5vid.width());
																	if (html5vid.data('hh') == undefined) html5vid.data('hh',html5vid.height());

																	videojs(videoID).ready(function(){
																		if (!nextcaption.hasClass("fullscreenvideo")) {
																			var myPlayer = videojs(videoID);

																			try{
																				myPlayer.width(html5vid.data('ww')*opt.bw);
																				myPlayer.height(html5vid.data('hh')*opt.bh);
																			} catch(e) {}
																		}
																	});



																	if (html5vid.closest('.tp-caption').data('forcecover')==1) {
																		updateHTML5Size(html5vid,opt.container);
																		html5vid.addClass("fullcoveredvideo");
																	}



																 }

															});
											} // END OF VIDEO JS FUNCTIONS

											// IF AUTOPLAY IS ON, WE NEED SOME STOP FUNCTION ON
												if (nextcaption.data('autoplay')==true) {
													var bt=jQuery('body').find('#'+opt.container.attr('id')).find('.tp-bannertimer');

													setTimeout(function() {
														bt.stop();
														opt.videoplaying=true;

													},200)
													opt.videoplaying=true;

													if (nextcaption.data('autoplayonlyfirsttime') == true || nextcaption.data('autoplayonlyfirsttime')=="true" ) {
														nextcaption.data('autoplay',false);
														nextcaption.data('autoplayonlyfirsttime',false);
													}
												}
									}




										// NEW ENGINE
										//if (nextcaption.hasClass("randomrotate") && (opt.ie || opt.ie9)) nextcaption.removeClass("randomrotate").addClass("sfb");
										//	nextcaption.removeClass('noFilterClass');



										   var imw =0;
										   var imh = 0;

													if (nextcaption.find('img').length>0) {
														var im = nextcaption.find('img');
														if (im.data('ww') == undefined) im.data('ww',im.width());
														if (im.data('hh') == undefined) im.data('hh',im.height());

														var ww = im.data('ww');
														var hh = im.data('hh');

														if(nextcaption.find('.tp-resizeme').length>0){
															im.width(ww*opt.bw);
															im.height(hh*opt.bh);
															imw = im.width();
															imh = im.height();
														}
													} else {
													if (nextcaption.find('iframe').length>0 || nextcaption.find('.video-js').length>0) {

															var im = nextcaption.find('iframe');
															im.css({display:"block"});
															if (nextcaption.data('ww') == undefined) {
																nextcaption.data('ww',im.width());
															}
															if (nextcaption.data('hh') == undefined) nextcaption.data('hh',im.height());

															var ww = nextcaption.data('ww');
															var hh = nextcaption.data('hh');

															var nc =nextcaption;
																if (nc.data('fsize') == undefined) nc.data('fsize',parseInt(nc.css('font-size'),0) || 0);
																if (nc.data('pt') == undefined) nc.data('pt',parseInt(nc.css('paddingTop'),0) || 0);
																if (nc.data('pb') == undefined) nc.data('pb',parseInt(nc.css('paddingBottom'),0) || 0);
																if (nc.data('pl') == undefined) nc.data('pl',parseInt(nc.css('paddingLeft'),0) || 0);
																if (nc.data('pr') == undefined) nc.data('pr',parseInt(nc.css('paddingRight'),0) || 0);

																if (nc.data('mt') == undefined) nc.data('mt',parseInt(nc.css('marginTop'),0) || 0);
																if (nc.data('mb') == undefined) nc.data('mb',parseInt(nc.css('marginBottom'),0) || 0);
																if (nc.data('ml') == undefined) nc.data('ml',parseInt(nc.css('marginLeft'),0) || 0);
																if (nc.data('mr') == undefined) nc.data('mr',parseInt(nc.css('marginRight'),0) || 0);

																if (nc.data('bt') == undefined) nc.data('bt',parseInt(nc.css('borderTop'),0) || 0);
																if (nc.data('bb') == undefined) nc.data('bb',parseInt(nc.css('borderBottom'),0) || 0);
																if (nc.data('bl') == undefined) nc.data('bl',parseInt(nc.css('borderLeft'),0) || 0);
																if (nc.data('br') == undefined) nc.data('br',parseInt(nc.css('borderRight'),0) || 0);

																//if (nc.data('lh') == undefined) nc.data('lh',parseInt(nc.css('lineHeight'),0) || 0);

																var fvwidth=opt.width;
																var fvheight=opt.height;
																if (fvwidth>opt.startwidth) fvwidth=opt.startwidth;
																if (fvheight>opt.startheight) fvheight=opt.startheight;


															
																if (!nextcaption.hasClass('fullscreenvideo'))
																			nextcaption.css({

																				 'font-size': (nc.data('fsize') * opt.bw)+"px",

																				 'padding-top': (nc.data('pt') * opt.bh) + "px",
																				 'padding-bottom': (nc.data('pb') * opt.bh) + "px",
																				 'padding-left': (nc.data('pl') * opt.bw) + "px",
																				 'padding-right': (nc.data('pr') * opt.bw) + "px",

																				 'margin-top': (nc.data('mt') * opt.bh) + "px",
																				 'margin-bottom': (nc.data('mb') * opt.bh) + "px",
																				 'margin-left': (nc.data('ml') * opt.bw) + "px",
																				 'margin-right': (nc.data('mr') * opt.bw) + "px",

																				 'border-top': (nc.data('bt') * opt.bh) + "px",
																				 'border-bottom': (nc.data('bb') * opt.bh) + "px",
																				 'border-left': (nc.data('bl') * opt.bw) + "px",
																				 'border-right': (nc.data('br') * opt.bw) + "px",

																				  //'line-height': (nc.data('lh') * opt.bh) + "px",
																				 'height':(hh*opt.bh)+'px',
																				 'white-space':"nowrap"
																				});
																	else  {
																		   offsetx=0; offsety=0;
																		   nextcaption.data('x',0)
																		   nextcaption.data('y',0)

																		   var ovhh = opt.height
																		   if (opt.autoHeight=="on")
																		   		ovhh = opt.container.height()
																			nextcaption.css({

																				'width':opt.width,
																				'height':ovhh
																			});
																		}


															im.width(ww*opt.bw);
															im.height(hh*opt.bh);
															imw = im.width();
															imh = im.height();
														} else {
															
															
															nextcaption.find('.tp-resizeme, .tp-resizeme *').each(function() {
																	
																	calcCaptionResponsive(jQuery(this),opt);
															});
														
															
															if (nextcaption.hasClass("tp-resizeme")) {
																nextcaption.find('*').each(function() {
																	calcCaptionResponsive(jQuery(this),opt,"first");
																});
																calcCaptionResponsive(nextcaption,opt,"first");
																nextcaption.find('*').each(function() {
																	calcCaptionResponsive(jQuery(this),opt);
																});
																calcCaptionResponsive(nextcaption,opt);
															}

															imh=nextcaption.outerHeight(true);
															imw=nextcaption.outerWidth(true);

															// NEXTCAPTION FRONTCORNER CHANGES
															var ncch = nextcaption.outerHeight();
															var bgcol = nextcaption.css('backgroundColor');
															nextcaption.find('.frontcorner').css({
																			'borderWidth':ncch+"px",
																			'left':(0-ncch)+'px',
																			'borderRight':'0px solid transparent',
																			'borderTopColor':bgcol
															});

															nextcaption.find('.frontcornertop').css({
																			'borderWidth':ncch+"px",
																			'left':(0-ncch)+'px',
																			'borderRight':'0px solid transparent',
																			'borderBottomColor':bgcol
															});

															// NEXTCAPTION BACKCORNER CHANGES
															nextcaption.find('.backcorner').css({
																			'borderWidth':ncch+"px",
																			'right':(0-ncch)+'px',
																			'borderLeft':'0px solid transparent',
																			'borderBottomColor':bgcol
															});

															// NEXTCAPTION BACKCORNER CHANGES
															nextcaption.find('.backcornertop').css({
																			'borderWidth':ncch+"px",
																			'right':(0-ncch)+'px',
																			'borderLeft':'0px solid transparent',
																			'borderTopColor':bgcol
															});

														}


												}

											if (opt.fullScreenAlignForce == "on") {
												xbw = 1;
												xbh = 1;
												offsetx=0;
												offsety=0;
											}

											if (nextcaption.data('voffset')==undefined) nextcaption.data('voffset',0);
											if (nextcaption.data('hoffset')==undefined) nextcaption.data('hoffset',0);

											var vofs= nextcaption.data('voffset')*xbw;
											var hofs= nextcaption.data('hoffset')*xbw;

											var crw = opt.startwidth*xbw;
											var crh = opt.startheight*xbw;

											if (opt.fullScreenAlignForce == "on") {
												crw = opt.container.width();
												crh = opt.container.height();

											}

										

											// CENTER THE CAPTION HORIZONTALLY
											if (nextcaption.data('x')=="center" || nextcaption.data('xcenter')=='center') {
												nextcaption.data('xcenter','center');
												nextcaption.data('x',(crw/2 - nextcaption.outerWidth(true)/2)/xbw+  hofs);

											}

											// ALIGN LEFT THE CAPTION HORIZONTALLY
											if (nextcaption.data('x')=="left" || nextcaption.data('xleft')=='left') {
												nextcaption.data('xleft','left');
												nextcaption.data('x',(0)/xbw+hofs);

											}

											// ALIGN RIGHT THE CAPTION HORIZONTALLY
											if (nextcaption.data('x')=="right" || nextcaption.data('xright')=='right') {
												nextcaption.data('xright','right');
												nextcaption.data('x',((crw - nextcaption.outerWidth(true))+hofs)/xbw);
												//konsole.log("crw:"+crw+"  width:"+nextcaption.outerWidth(true)+"  xbw:"+xbw);
												//konsole.log("x-pos:"+nextcaption.data('x'))
											}


											// CENTER THE CAPTION VERTICALLY
											if (nextcaption.data('y')=="center" || nextcaption.data('ycenter')=='center') {
												nextcaption.data('ycenter','center');
												nextcaption.data('y',(crh/2 - nextcaption.outerHeight(true)/2)/xbh + vofs);

											}

											// ALIGN TOP THE CAPTION VERTICALLY
											if (nextcaption.data('y')=="top" || nextcaption.data('ytop')=='top') {
												nextcaption.data('ytop','top');
												nextcaption.data('y',(0)/opt.bh+vofs);

											}

											// ALIGN BOTTOM THE CAPTION VERTICALLY
											if (nextcaption.data('y')=="bottom" || nextcaption.data('ybottom')=='bottom') {
												nextcaption.data('ybottom','bottom');
												nextcaption.data('y',((crh - nextcaption.outerHeight(true))+vofs)/xbw);
											}



											// THE TRANSITIONS OF CAPTIONS
											// MDELAY AND MSPEED
											if (nextcaption.data('start') == undefined) nextcaption.data('start',1000);



											var easedata=nextcaption.data('easing');
											if (easedata==undefined) easedata="Power1.easeOut";


											var mdelay = nextcaption.data('start')/1000;
											var mspeed = nextcaption.data('speed')/1000;
											var d_x = nextcaption.data('x');
											var d_y = nextcaption.data('y');
											if(	nextcaption.attr("changePostion") == "1"){
												d_x =  nextcaption.attr('dataleft');
												d_y =  nextcaption.attr('datatop');
											}
											
											
											var calcx = (xbw*d_x+offsetx);
											
											var calcy = (opt.bh*d_y+offsety);




											if (opt.fullScreenAlignForce == "on")
												calcy = nextcaption.data('y')+offsety;

													TweenLite.killTweensOf(nextcaption,false);
													clearTimeout(nextcaption.data('reversetimer'));


													var tlop = 0,
													 	tlxx = calcx, tlyy = calcy, tlzz = 2,
													    tlsc = 1,tlro = 0,
													    sc=1,scX=1,scY= 1,
													    ro=0,roX=0,roY=0,roZ = 0,
														skwX=0, skwY = 0,
														opa = 0,
														trorig = "center,center",
														tper = 300,
														repeatV = 0,
														yoyoV = false,
													    repeatdelayV = 0;

													if (nextcaption.data('repeat')!=undefined) repeatV = nextcaption.data('repeat');
													if (nextcaption.data('yoyo')!=undefined) yoyoV = nextcaption.data('yoyo');
													if (nextcaption.data('repeatdelay')!=undefined) repeatdelayV = nextcaption.data('repeatdelay');


													if (nextcaption.hasClass("customin")) {

														var customarray = nextcaption.data('customin').split(';');
														jQuery.each(customarray,function(index,param) {

															param = param.split(":")

															var w = param[0],
																v = param[1];


															if (w=="rotationX") roX = parseInt(v,0);
															if (w=="rotationY") roY = parseInt(v,0);
															if (w=="rotationZ") roZ = parseInt(v,0);
															if (w=="scaleX")  scX = parseFloat(v);
															if (w=="scaleY")  scY = parseFloat(v);
															if (w=="opacity") opa = parseFloat(v);
															if (w=="skewX")   skwX = parseInt(v,0);
															if (w=="skewY")   skwY = parseInt(v,0);
															if (w=="x") tlxx = calcx + parseInt(v,0);
															if (w=="y") tlyy = calcy + parseInt(v,0);
															if (w=="z") tlzz = parseInt(v,0);
															if (w=="transformOrigin") trorig = v.toString();
															if (w=="transformPerspective") tper=parseInt(v,0);


														})
													}



													if (nextcaption.hasClass("randomrotate")) {

																sc = Math.random()*3+1;
																ro = Math.round(Math.random()*200-100);
																tlxx = calcx + Math.round(Math.random()*200-100);
																tlyy = calcy + Math.round(Math.random()*200-100);
													}

													if (nextcaption.hasClass('lfr') || nextcaption.hasClass('skewfromright'))
														tlxx = 15+opt.width;



													if (nextcaption.hasClass('lfl') || nextcaption.hasClass('skewfromleft'))
														tlxx = -15-imw;

													if (nextcaption.hasClass('sfl') | nextcaption.hasClass('skewfromleftshort'))
														tlxx = calcx-50;

													if (nextcaption.hasClass('sfr') | nextcaption.hasClass('skewfromrightshort'))
														tlxx = calcx+50;


													if (nextcaption.hasClass('lft'))
														tlyy = -25 - imh;


													if (nextcaption.hasClass('lfb'))
														tlyy = 25 + opt.height;

													if (nextcaption.hasClass('sft'))
														tlyy = calcy-50;

													if (nextcaption.hasClass('sfb'))
														tlyy = calcy+50;

													if (nextcaption.hasClass('skewfromright') || nextcaption.hasClass('skewfromrightshort'))
														skwX = -85

													if (nextcaption.hasClass('skewfromleft') || nextcaption.hasClass('skewfromleftshort'))
														skwX =  85

													if (get_browser().toLowerCase()=="safari") {
														roX=0;roY=0;
													}
													tlxx=Math.round(tlxx);
													tlyy=Math.round(tlyy);
													calcx=Math.round(calcx);
													calcy=Math.round(calcy);
													

													// CHANGE to TweenMax.  if Yoyo and Repeat is used. Dont forget to laod the Right Tools for it !!
													if (nextcaption.hasClass("customin")) {
												
																nextcaption.data('anim',TweenLite.fromTo(nextcaption,mspeed,
																				{ scaleX:scX,
																				  scaleY:scY,
																				  rotationX:roX,
																				  rotationY:roY,
																				  rotationZ:roZ,
																				  x:0,
																				  y:0,
																				  left:tlxx,
																				  top:tlyy,
																				  z:tlzz,
																				  opacity:opa,
																				  transformPerspective:tper,
																				  transformOrigin:trorig,
																				  visibility:'hidden'},

																				{
																				  left:calcx,
																				  top:calcy,
																				  scaleX:1,
																				  scaleY:1,
																				  rotationX:0,
																				  rotationY:0,
																				  rotationZ:0,
																				  skewX:0,
																				  skewY:0,
																				  z:0,
																				  x:0,
																				  y:0,
																				  visibility:'visible',
																				  opacity:1,
																				  delay:mdelay,
																				  ease:easedata,
																				  overwrite:"all",

																				  /*yoyo:yoyoV,
																				  repeat:repeatV,
																				  repeatDelay:repeatdelayV*/
																				}));


													} else {
														nextcaption.data('anim',TweenLite.fromTo(nextcaption,mspeed,
																				{ scale:sc,
																				  rotationX:0,
																				  rotationY:0,
																				  skewY:0,
																				  rotation:ro,
																				  left:tlxx+'px',
																				  top:tlyy+"px",
																				  opacity:0,
																				  z:0,
																				  x:0,
																				  y:0,
																				  skewX:skwX,
																				  transformPerspective:600,
																				  visibility:'visible',

																				 },

																				{ left:calcx+'px',
																				  top:calcy+"px",
																				  scale:1,
																				  skewX:0,
																				  rotation:0,
																				  z:0,
																				  visibility:'visible',
																				  opacity:1,
																				  delay:mdelay,
																				  ease:easedata,
																				  overwrite:"all",
																				  yoyo:yoyoV,
																				  repeat:repeatV,
																				  repeatDelay:repeatdelayV,


																				}));
													}





											  nextcaption.data('killall',setTimeout(function() {
												   nextcaption.css({transform:"none",'-moz-transform':'none','-webkit-transform':'none'});
											   },(mspeed*1000)+(mdelay*1000)+20))


												nextcaption.data('timer',setTimeout(function() {
													if (nextcaption.hasClass("fullscreenvideo"))
														nextcaption.css({'display':'block'});

												},nextcaption.data('start')));


												// IF THERE IS ANY EXIT ANIM DEFINED
												if (nextcaption.data('end')!=undefined)
																endMoveCaption(nextcaption,opt,nextcaption.data('end')/1000);


											}

						})

						var bt=jQuery('body').find('#'+opt.container.attr('id')).find('.tp-bannertimer');
						bt.data('opt',opt);
				}


				function get_browser(){
				    var N=navigator.appName, ua=navigator.userAgent, tem;
				    var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
				    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
				    M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
				    return M[0];
				    }
				function get_browser_version(){
				    var N=navigator.appName, ua=navigator.userAgent, tem;
				    var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
				    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
				    M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
				    return M[1];
				    }

				/////////////////////////////////////////////////////////////////
				//	-	CALCULATE THE RESPONSIVE SIZES OF THE CAPTIONS	-	  //
				/////////////////////////////////////////////////////////////////
				function calcCaptionResponsive(nc,opt,flag) {
								if (nc.data('fsize') == undefined) nc.data('fsize',parseInt(nc.css('font-size'),0) || 0);
								if (nc.data('pt') == undefined) nc.data('pt',parseInt(nc.css('paddingTop'),0) || 0);
								if (nc.data('pb') == undefined) nc.data('pb',parseInt(nc.css('paddingBottom'),0) || 0);
								if (nc.data('pl') == undefined) nc.data('pl',parseInt(nc.css('paddingLeft'),0) || 0);
								if (nc.data('pr') == undefined) nc.data('pr',parseInt(nc.css('paddingRight'),0) || 0);

								if (nc.data('mt') == undefined) nc.data('mt',parseInt(nc.css('marginTop'),0) || 0);
								if (nc.data('mb') == undefined) nc.data('mb',parseInt(nc.css('marginBottom'),0) || 0);
								if (nc.data('ml') == undefined) nc.data('ml',parseInt(nc.css('marginLeft'),0) || 0);
								if (nc.data('mr') == undefined) nc.data('mr',parseInt(nc.css('marginRight'),0) || 0);

								if (nc.data('bt') == undefined) nc.data('bt',parseInt(nc.css('borderTopWidth'),0) || 0);
								if (nc.data('bb') == undefined) nc.data('bb',parseInt(nc.css('borderBottomWidth'),0) || 0);
								if (nc.data('bl') == undefined) nc.data('bl',parseInt(nc.css('borderLeftWidth'),0) || 0);
								if (nc.data('br') == undefined) nc.data('br',parseInt(nc.css('borderRightWidth'),0) || 0);

								//if (nc.data('lh') == undefined) nc.data('lh',parseInt(nc.css('lineHeight'),0) || 0);
								if (nc.data('minwidth') == undefined) nc.data('minwidth',parseInt(nc.css('minWidth'),0) || 0);
								if (nc.data('minheight') == undefined) nc.data('minheight',parseInt(nc.css('minHeight'),0) || 0);
								if (nc.data('maxwidth') == undefined) nc.data('maxwidth',parseInt(nc.css('maxWidth'),0) || "none");
								if (nc.data('maxheight') == undefined) nc.data('maxheight',parseInt(nc.css('maxHeight'),0) || "none");
								
								if (nc.data('wan') == undefined) nc.data('wan',nc.css("-webkit-transition"));
								if (nc.data('moan') == undefined) nc.data('moan',nc.css("-moz-animation-transition"));
								if (nc.data('man') == undefined) nc.data('man',nc.css("-ms-animation-transition"));
								if (nc.data('ani') == undefined) nc.data('ani',nc.css("transition"));

								if(flag=="first"){
									return;
								}

							    nc.css("-webkit-transition", "none");
							    nc.css("-moz-transition", "none");
							    nc.css("-ms-transition", "none");
							    nc.css("transition", "none");


								TweenLite.set(nc,{
												 fontSize: Math.round((nc.data('fsize') * opt.bw))+"px",

												 paddingTop: Math.round((nc.data('pt') * opt.bh)) + "px",
												 paddingBottom: Math.round((nc.data('pb') * opt.bh)) + "px",
												 paddingLeft: Math.round((nc.data('pl') * opt.bw)) + "px",
												 paddingRight: Math.round((nc.data('pr') * opt.bw)) + "px",

												 marginTop: (nc.data('mt') * opt.bh) + "px",
												 marginBottom: (nc.data('mb') * opt.bh) + "px",
												 marginLeft: (nc.data('ml') * opt.bw) + "px",
												 marginRight: (nc.data('mr') * opt.bw) + "px",

												 borderTopWidth: Math.round((nc.data('bt') * opt.bh)) + "px",
												 borderBottomWidth: Math.round((nc.data('bb') * opt.bh)) + "px",
												 borderLeftWidth: Math.round((nc.data('bl') * opt.bw)) + "px",
												 borderRightWidth: Math.round((nc.data('br') * opt.bw)) + "px",

												 //lineHeight: Math.round((nc.data('lh') * opt.bh)) + "px",
												 whiteSpace:"nowrap",
												 minWidth:(nc.data('minwidth') * opt.bw) + "px",
												 minHeight:(nc.data('minheight') * opt.bh) + "px"
								});
								setTimeout(function() {
									nc.css("-webkit-transition", nc.data('wan'));
								    nc.css("-moz-transition", nc.data('moan'));
								    nc.css("-ms-transition", nc.data('man'));
								    nc.css("transition", nc.data('ani'));

								},30);

								//konsole.log(nc.data('maxwidth')+"  "+nc.data('maxheight'));
								if (nc.data('maxheight')!='none')
									nc.css({'maxHeight':(nc.data('maxheight') * opt.bh) + "px"});


								if (nc.data('maxwidth')!='none')
									nc.css({'maxWidth':(nc.data('maxwidth') * opt.bw) + "px"});
						}


				//////////////////////////
				//	REMOVE THE CAPTIONS //
				/////////////////////////
				function removeTheCaptions(actli,opt) {


						actli.find('.tp-caption').each(function(i) {
							var nextcaption=jQuery(this); //actli.find('.tp-caption:eq('+i+')');

							if (nextcaption.find('iframe').length>0) {
															// VIMEO VIDEO PAUSE
															try {
																var ifr = nextcaption.find('iframe');
																var id = ifr.attr('id');
																var froogaloop = $f(id);
																froogaloop.api("pause");
																clearTimeout(nextcaption.data('timerplay'));
															} catch(e) {}
															//YOU TUBE PAUSE
															try {
																var player=nextcaption.data('player');
																player.stopVideo();
																clearTimeout(nextcaption.data('timerplay'));
															} catch(e) {}
														}

							// IF HTML5 VIDEO IS EMBEDED
							if (nextcaption.find('video').length>0) {
											try{
												nextcaption.find('video').each(function(i) {
													var html5vid = jQuery(this).parent();
													var videoID =html5vid.attr('id');
													clearTimeout(html5vid.data('timerplay'));
													videojs(videoID).ready(function(){
														var myPlayer = this;
														myPlayer.pause();
													});
												})
											}catch(e) {}
										} // END OF VIDEO JS FUNCTIONS
							try {
									endMoveCaption(nextcaption,opt,0);
								} catch(e) {}



						});
				}

				//////////////////////////
				//	MOVE OUT THE CAPTIONS //
				/////////////////////////
				function endMoveCaption(nextcaption,opt,mdelay) {


														var mspeed=nextcaption.data('endspeed');
														if (mspeed==undefined) mspeed=nextcaption.data('speed');

														mspeed = mspeed/1000;

														var easedata=nextcaption.data('endeasing');
														if (easedata==undefined) easedata=Power1.easeInOut;



														if (nextcaption.hasClass('ltr') ||
															nextcaption.hasClass('ltl') ||
															nextcaption.hasClass('str') ||
															nextcaption.hasClass('stl') ||
															nextcaption.hasClass('ltt') ||
															nextcaption.hasClass('ltb') ||
															nextcaption.hasClass('stt') ||
															nextcaption.hasClass('stb') ||
															nextcaption.hasClass('skewtoright') ||
															nextcaption.hasClass('skewtorightshort') ||
															nextcaption.hasClass('skewtoleft') ||
															nextcaption.hasClass('skewtoleftshort'))
														{

															skwX = 0;

															if (nextcaption.hasClass('skewtoright') || nextcaption.hasClass('skewtorightshort'))
																skwX = 35

															if (nextcaption.hasClass('skewtoleft') || nextcaption.hasClass('skewtoleftshort'))
																skwX =  -35

															var xx=0;
															var yy=0;

															if (nextcaption.hasClass('ltr') || nextcaption.hasClass('skewtoright'))
																xx=opt.width+60;
															else if (nextcaption.hasClass('ltl') || nextcaption.hasClass('skewtoleft'))
																xx=0-(opt.width+60);
															else if (nextcaption.hasClass('ltt'))
																yy=0-(opt.height+60);
															else if (nextcaption.hasClass('ltb'))
																yy=opt.height+60;
															else if (nextcaption.hasClass('str') || nextcaption.hasClass('skewtorightshort')) {
																xx=50;oo=0;
															} else if (nextcaption.hasClass('stl') || nextcaption.hasClass('skewtoleftshort')) {
																xx=-50;oo=0;
															} else if (nextcaption.hasClass('stt')) {
																yy=-50;oo=0;
															} else if (nextcaption.hasClass('stb')) {
																yy=50;oo=0;
															}

															if (nextcaption.hasClass('skewtorightshort'))
																xx = xx + 220;

															if (nextcaption.hasClass('skewtoleftshort'))
																xx =  xx -220


															nextcaption.data('outanim',TweenLite.to(nextcaption,mspeed,
																		{
																		  x:xx,
																		  y:yy,
																		  scale:1,
																		  rotation:0,
																		  skewX:skwX,
																		  opacity:0,
																		  delay:mdelay,
																		  z:0,
																		  overwrite:"auto",
																		  ease:easedata,
																		  onStart:function() {
						  													if (nextcaption.data('anim') !=undefined)
																			  nextcaption.data('anim').pause();
																		  }
																		 }));

														}

														else

														if ( nextcaption.hasClass("randomrotateout")) {

															nextcaption.data('outanim',TweenLite.to(nextcaption,mspeed,
																		{ left:Math.random()*opt.width,
																		  top:Math.random()*opt.height,
																		  scale:Math.random()*2+0.3,
																		  rotation:Math.random()*360-180,
																		  z:0,
																		  opacity:0,
																		  delay:mdelay,
																		  ease:easedata,
																		  onStart:function() {
																		    if (nextcaption.data('anim') !=undefined)
																			  nextcaption.data('anim').pause();
																		  }
																	}));

														}

														else

														if (nextcaption.hasClass('fadeout')) {


	
															nextcaption.data('outanim',TweenLite.to(nextcaption,mspeed,
																		{ opacity:0,
																		  delay:mdelay,
																		  ease:easedata,
																		  onStart:function() {
																		  if (nextcaption.data('anim') !=undefined)
																			  nextcaption.data('anim').pause();
																		}}));

														}

														else

														if (nextcaption.hasClass("customout")) {
															var tlop = 0,
															 	tlxx = 0, tlyy = 0, tlzz = 2,
															    tlsc = 1,tlro = 0,
															    sc=1,scX=1,scY= 1,
															    ro=0,roX=0,roY=0,roZ = 0,
																skwX=0, skwY = 0,
																opa = 0,
																trorig = "center,center",
																tper = 300;

															var customarray = nextcaption.data('customout').split(';');
															jQuery.each(customarray,function(index,param) {
															//customarray.forEach(function(param) {
																param = param.split(":")

																var w = param[0],
																	v = param[1];


																if (w=="rotationX") roX = parseInt(v,0);
																if (w=="rotationY") roY = parseInt(v,0);
																if (w=="rotationZ") roZ = parseInt(v,0);
																if (w=="scaleX")  scX = parseFloat(v);
																if (w=="scaleY")  scY = parseFloat(v);
																if (w=="opacity") opa = parseFloat(v);
																if (w=="skewX")   skwX = parseInt(v,0);
																if (w=="skewY")   skwY = parseInt(v,0);
																if (w=="x") tlxx = parseInt(v,0);
																if (w=="y") tlyy = parseInt(v,0);
																if (w=="z") tlzz = parseInt(v);
																if (w=="transformOrigin") trorig = v;
																if (w=="transformPerspective") tper=parseInt(v,0);


															})

														
												
															nextcaption.data('outanim',TweenLite.to(nextcaption,mspeed,


																				{
																				  scaleX:scX,
																				  scaleY:scY,
																				  rotationX:roX,
																				  rotationY:roY,
																				  rotationZ:roZ,
																				  x:tlxx,
																				  y:tlyy,
																				  z:tlzz,
																				  opacity:opa,
																				  delay:mdelay,
																				  ease:easedata,
																				  overwrite:"auto",
																				  onStart:function() {

																					  if (nextcaption.data('anim') !=undefined)
																						  nextcaption.data('anim').pause();
																					  TweenLite.set(nextcaption,{
																						  transformPerspective:tper,
																						  transformOrigin:trorig,
																						  overwrite:"auto"
																					  });

																		}}));
														}

														else {
															//TweenLite.to(nextcaption,{delay:mdelay,overwrite:"auto"});
															clearTimeout(nextcaption.data('reversetimer'));
															/*nextcaption.data('reversetimer',setTimeout(function() {
																nextcaption.animate({opacity:"0"});

															},mdelay*1000));*/
														nextcaption.data('reversetimer',setTimeout(function() {

																nextcaption.data('anim').reverse()
															},mdelay*1000));														
	

														}
												}

		///////////////////////////
		//	REMOVE THE LISTENERS //
		///////////////////////////
		function removeAllListeners(container,opt) {
			container.children().each(function() {
			  try{ jQuery(this).die('click'); } catch(e) {}
			  try{ jQuery(this).die('mouseenter');} catch(e) {}
			  try{ jQuery(this).die('mouseleave');} catch(e) {}
			  try{ jQuery(this).unbind('hover');} catch(e) {}
			})
			try{ container.die('click','mouseenter','mouseleave');} catch(e) {}
			clearInterval(opt.cdint);
			container=null;



		}

		///////////////////////////
		//	-	COUNTDOWN	-	//
		/////////////////////////
		function countDown(container,opt) {
			opt.cd=0;
			opt.loop=0;
			if (opt.stopAfterLoops!=undefined && opt.stopAfterLoops>-1)
					opt.looptogo=opt.stopAfterLoops;
			else
				opt.looptogo=9999999;

			if (opt.stopAtSlide!=undefined && opt.stopAtSlide>-1)
					opt.lastslidetoshow=opt.stopAtSlide;
			else
					opt.lastslidetoshow=999;

			opt.stopLoop="off";

			if (opt.looptogo==0) opt.stopLoop="on";



			if (opt.slideamount >1 && !(opt.stopAfterLoops==0 && opt.stopAtSlide==1) ) {
					var bt=container.find('.tp-bannertimer');
					if (bt.length>0) {
						bt.css({'width':'0%'});

						if (opt.videoplaying!=true)
							bt.animate({'width':"100%"},{duration:(opt.delay-100),queue:false, easing:"linear"});

					}

					bt.data('opt',opt);


					opt.cdint=setInterval(function() {

						if (jQuery('body').find(container).length==0) removeAllListeners(container,opt);
						if (container.data('conthover-changed') == 1) {
							opt.conthover=	container.data('conthover');
							container.data('conthover-changed',0);
						}

						if (opt.conthover!=1 && opt.videoplaying!=true && opt.width>opt.hideSliderAtLimit) {
							opt.cd=opt.cd+100;
						}


						if (opt.fullWidth!="on")
							if (opt.width>opt.hideSliderAtLimit)
								container.parent().removeClass("tp-hide-revslider")
							else
								container.parent().addClass("tp-hide-revslider")
						// EVENT TRIGGERING IN CASE VIDEO HAS BEEN STARTED
						if (opt.videostartednow==1) {
							container.trigger('revolution.slide.onvideoplay');
							opt.videostartednow=0;
						}

						// EVENT TRIGGERING IN CASE VIDEO HAS BEEN STOPPED
						if (opt.videostoppednow==1) {
							container.trigger('revolution.slide.onvideostop');
							opt.videostoppednow=0;
						}


						if (opt.cd>=opt.delay) {
							opt.cd=0;
							// SWAP TO NEXT BANNER
							opt.act=opt.next;
							opt.next=opt.next+1;
							if (opt.next>container.find('>ul >li').length-1) {
									opt.next=0;
									opt.looptogo=opt.looptogo-1;

									if (opt.looptogo<=0) {
											opt.stopLoop="on";

									}
								}

							// STOP TIMER IF NO LOOP NO MORE NEEDED.

							if (opt.stopLoop=="on" && opt.next==opt.lastslidetoshow-1) {
									clearInterval(opt.cdint);
									container.find('.tp-bannertimer').css({'visibility':'hidden'});
									container.trigger('revolution.slide.onstop');
							}

							// SWAP THE SLIDES
							swapSlide(container,opt);


							// Clear the Timer
							if (bt.length>0) {
								bt.css({'width':'0%'});
								if (opt.videoplaying!=true)
									bt.animate({'width':"100%"},{duration:(opt.delay-100),queue:false, easing:"linear"});
							}
						}
					},100);


					container.hover(
						function() {

							if (opt.onHoverStop=="on") {
									opt.conthover=1;
								bt.stop();
								container.trigger('revolution.slide.onpause');
								var nextsh = container.find('>ul >li:eq('+opt.next+') .slotholder');
								nextsh.find('.defaultimg').each(function() {
									var dimg = jQuery(this);
									if (dimg.data('kenburn')!=undefined)
									   dimg.data('kenburn').pause();
								});
							}
						},
						function() {
							if (container.data('conthover')!=1) {
								container.trigger('revolution.slide.onresume');
								opt.conthover=0;
								if (opt.onHoverStop=="on" && opt.videoplaying!=true) {
									bt.animate({'width':"100%"},{duration:((opt.delay-opt.cd)-100),queue:false, easing:"linear"});
								}
								var nextsh = container.find('>ul >li:eq('+opt.next+') .slotholder');
								nextsh.find('.defaultimg').each(function() {
									var dimg = jQuery(this);
									if (dimg.data('kenburn')!=undefined)
									   dimg.data('kenburn').play();
								});
							}
						});
			}
		}



})(jQuery);


// SOME ERROR MESSAGES IN CASE THE PLUGIN CAN NOT BE LOADED
function revslider_showDoubleJqueryError(sliderID) {
	var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
	errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
	errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
	errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
	errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>"
		jQuery(sliderID).show().html(errorMessage);
}

;

/* isotope: (https://5b9732f9943c7.t73.qifeiye.com/qfy-content/plugins/qfy_editor/assets/lib/isotope/jquery.isotope.min.js) */
/**
 * Isotope v1.5.25
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time purchase of a commercial license
 * http://isotope.metafizzy.co/docs/license.html
 *
 * Non-commercial use is licensed under the MIT License
 *
 * Copyright 2013 Metafizzy
 */
(function(a,b,c){"use strict";var d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b=d.documentElement.style,c;if(typeof b[a]=="string")return a;a=f(a);for(var e=0,h=g.length;e<h;e++){c=g[e]+a;if(typeof b[c]=="string")return c}},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=f.height()===3,f.remove(),e.remove()}return a},csstransitions:function(){return!!j}},l;if(e)for(l in k)e.hasOwnProperty(l)||e.addTest(l,k[l]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m=" ",n;for(l in k)n=k[l](),e[l]=n,m+=" "+(n?"":"no-")+l;b("html").addClass(m)}if(e.csstransforms){var o=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},p=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},g,h={},j;f[c]=d,b.extend(e,f);for(g in e)j=e[g],h[g]=o[g](j);var k=h.translate||"",l=h.scale||"",m=k+l;b.data(a,"isoTransform",e),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var q,r;e.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[j],r=h("transitionDuration"));var s=b.event,t=b.event.handle?"handle":"dispatch",u;s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",u&&clearTimeout(u),u=setTimeout(function(){s[t].apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var v=["width","height"],w=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=v.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;f<g;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&w.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return c=c.filter(function(a,b){return b.nodeType===1}),this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!e.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",f=this.options.animationOptions,g=this.options.onLayout,h,i,j,k;i=function(a,b){b.$el[d](b.style,f)};if(this._isInserting&&this.isUsingJQueryAnimation)i=function(a,b){h=b.$el.hasClass("no-transition")?"css":d,b.$el[h](b.style,f)};else if(c||g||f.complete){var l=!1,m=[c,g,f.complete],n=this;j=!0,k=function(){if(l)return;var b;for(var c=0,d=m.length;c<d;c++)b=m[c],typeof b=="function"&&b.call(n.element,a,n);l=!0};if(this.isUsingJQueryAnimation&&d==="animate")f.complete=k,j=!1;else if(e.csstransitions){var o=0,p=this.styleQueue[0],s=p&&p.$el,t;while(!s||!s.length){t=this.styleQueue[o++];if(!t)return;s=t.$el}var u=parseFloat(getComputedStyle(s[0])[r]);u>0&&(i=function(a,b){b.$el[d](b.style,f).one(q,k)},j=!1)}}b.each(this.styleQueue,i),j&&k(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a);var c=this,d=function(){a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),w.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",d=a?"height":"width",e=a?"rows":"cols",g=this.element[d](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+f(d)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][e]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var x=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c){x("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(c[a])||a.charAt(0)==="_"){x("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);;

/* iphorm-plugin: (https://5b9732f9943c7.t73.qifeiye.com/qfy-content/plugins/qfy_form/js/jquery.iphorm.js) */
/*
 * iPhorm BitWebcms jQuery plugin
 */
function phone_num_timer(label,label_text){
		var num =label.text();
		if(num*1<2){
			label.html(label_text);
		}
		setTimeout(function(){
			if(label.text()!=label_text){
				num = num*1 -1;
				label.text(num);
				phone_num_timer(label,label_text);
			}
		},1000);
}
function get_iphorm_phone(obj,e){
	var $form = jQuery(obj).closest("form");
	var $element =  jQuery(obj).closest(".iphorm-element-wrap");
	var $pre_element =  jQuery(obj).closest(".iphorm-element-wrap").prev();
	var phone = $pre_element.find("input").val();
	var phoneid = $pre_element.find("input").attr("name");
	$element.find("[name='iphorm_sms_phone_id']").val(phoneid);
	phone = jQuery.trim(phone);
	//if(!phone) return;

	var label = jQuery(obj).closest(".iphorm-input-wrap").find(".iphorm_phone_label");
	var info =  jQuery(obj).closest(".iphorm-input-wrap").find(".iphorm_phone_info").html();
	label.width(label.width());
	var label_text = label.text();
	if(label_text>1) return;
	label.html("30");
	phone_num_timer(label,label_text);
	$('.iphorm-errors-wrap', $element).html("");
	$('.iphorm-errors-wrap', $pre_element).html("");
	jQuery.post("/admin/admin-ajax.php",{"action":"tosendsms","phone":phone},function(response){
		if(response!="success"){
			label.html(label_text);
			if(phone){
				$error = '<div class="iphorm-errors-list iphorm-clearfix"><div class="iphorm-error"><i class="fa fa-exclamation-triangle" aria-hidden="true" style="padding-right:5px;"></i>'+response+'</div></div>';	
				$('.iphorm-errors-wrap', $element).html($error).fadeIn(1000).show();
			}else{
				$error = '<div class="iphorm-errors-list iphorm-clearfix"><div class="iphorm-error"><i class="fa fa-exclamation-triangle" aria-hidden="true" style="padding-right:5px;"></i>'+response+'</div></div>';	
				$('.iphorm-errors-wrap', $pre_element).html($error).fadeIn(1000).show();
			}
		}else{
			top.qfy_popinfo_fun('<div style="text-align:center;" ><div style="padding:20px;">'+info+'</div></div>',3);
		}
	});
	
}
;(function($) {
	$.iPhorm = function ($form, options) {
		var _this = this,
		settings = {},
		extraData = {
			iphorm_ajax: 1
		},
		submitted = false,
		uploaders = [],
		uploadQueue = [],
		swfUploadError = false,
		supportsSwfUpload = typeof swfobject === 'object'  && swfobject.hasFlashPlayerVersion('9.0.28'),
		$successMessage = $('.iphorm-success-message', $form),
		$errorMessage = $('.iphorm-error-message', $form),
		$loadingSpinner = $('.iphorm-loading-wrap', $form);
		
		$pop = $('.popaction', $form);
		// Expose the form to the outside world
		_this.$form = $form;

		// Load in any options
		if (options) {
			$.extend(settings, options);
		}

		/**
		 * Add an SWFUpload element to the form
		 *
		 * @param object element JavaScript object containing the element information
		 */
		_this.addUploader = function (element) {
			if (supportsSwfUpload) {
				// Hide the normal file element
				$('.' + element.name + '-input-wrap', $form).hide();
				$('.' + element.name + '-add-another-upload', $form).hide();

				// Show the SWFUpload element
				$('#' + element.uniqueId + '-swfupload').show();

				var $queue = $('#' + element.uniqueId + '-file-queue'),
                $queueErrors = $('#' + element.uniqueId + '-file-queue-errors'),
                browseButton = getHiddenDimensions($('#' + element.uniqueId + '-browse')), swfu;

				// Define SWFUpload handles
				function fileDialogStart () {
					$queueErrors.hide().empty();
				}

				function fileQueued (file) {
					var $close = $('<div class="iphorm-upload-queue-remove">X</div>').click(function () {
                        swfu.cancelUpload(file.id);
                        for (var i = 0; i < uploadQueue.length; i++) {
                            if (uploadQueue[i].file.id == file.id) {
                                uploadQueue.splice(i, 1);
                            }
                        }
                        $(this).parent().remove();

                        if ($queue.children().length == 0) {
                        	$queue.hide();
                        }
                    });

                    uploadQueue.push({
                        file: file,
                        uploaderId: swfu.movieName
                    });

                    $queue.append($('<div id="' + file.id + '" class="iphorm-upload-queue-file"><div class="iphorm-upload-queue-filename">' + file.name + ' (' + formatFileSize(file.size) + ')</div></div>').append($close)).show();
				}

				function fileQueueError (file, errorCode, message) {
					$queueErrorsList = $('<div class="iphorm-queue-errors-list iphorm-clearfix"></div>');

					switch (errorCode) {
	                    case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
	                    	$queueErrorsList.append('<div class="iphorm-queue-error">' + iphormL10n.swfupload_too_many + '</div>');
	                        break;
	                    case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
	                    	$queueErrorsList.append('<div class="iphorm-queue-error">' + file.name + ' - ' + iphormL10n.swfupload_file_too_big + '</div>');
	                        break;
	                    case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
	                    	$queueErrorsList.append('<div class="iphorm-queue-error">' + file.name + ' - ' + iphormL10n.swfupload_file_empty + '</div>');
	                        break;
	                    case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
	                    	$queueErrorsList.append('<div class="iphorm-queue-error">' + file.name + ' - ' + iphormL10n.swfupload_file_type_not_allowed + '</div>');
	                        break;
	                    default:
	                    	$queueErrorsList.append('<div class="iphorm-queue-error">' + iphormL10n.swfupload_unknown_queue_error + '</div>');
	                        break;
	                }

					$queueErrors.append($queueErrorsList).show();
				}

				function uploadStart(file) {
					// Show the upload progress bar
					$('.iphom-upload-progress-wrap').show();
				}

				function uploadProgress(file, bytesLoaded, bytesTotal) {
					var progress = Math.min(100, ((bytesLoaded / file.size) * 100)); // Limit to 100% maximum
					$('.iphorm-upload-progress-bar').css('width', progress + '%');
					$('.iphorm-upload-filename').text(file.name);
				}

				function uploadError(file, errorCode, message) {
					switch (errorCode) {
						case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:
							swfUploadError = true;
							$('.iphorm-upload-error', $form).text(iphormL10n.swfupload_upload_error).show();
							break;
						case SWFUpload.UPLOAD_ERROR.UPLOAD_FAILED:
							swfUploadError = true;
							$('.iphorm-upload-error', $form).text(iphormL10n.swfupload_upload_failed).show();
							break;
						case SWFUpload.UPLOAD_ERROR.IO_ERROR:
							swfUploadError = true;
							$('.iphorm-upload-error', $form).text(iphormL10n.swfupload_server_io).show();
							break;
						case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR:
							swfUploadError = true;
							$('.iphorm-upload-error', $form).text(iphormL10n.swfupload_security_error).show();
							break;
						case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:
							swfUploadError = true;
							$('.iphorm-upload-error', $form).text(iphormL10n.swfupload_limit_exceeded).show();
							break;
						case SWFUpload.UPLOAD_ERROR.FILE_VALIDATION_FAILED:
							swfUploadError = true;
							$('.iphorm-upload-error', $form).text(iphormL10n.swfupload_validation_failed).show();
							break;
						case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:
							break;
						case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:
							swfUploadError = true;
							$('.iphorm-upload-error', $form).text(iphormL10n.swfupload_upload_stopped).show();
							break;
						default:
							swfUploadError = true;
							$('.iphorm-upload-error', $form).text(iphormL10n.swfupload_unknown_upload_error).show();
							break;
					}
				}

				function uploadSuccess(file, response) {
					if (response) {
						var response = $.parseJSON(response);

						if (typeof response == 'object' && response.type == 'error') {
						    swfUploadError = true;
						    $('.iphorm-upload-error', $form).text(file.name + ' - ' + response.data[0]).show();
							$('#' + file.id, $form).remove();
						}
					}
				}

				function uploadComplete(file) {
					if (!swfUploadError) {
						// Show the file as uploaded successfully
						$('#' + file.id, $form).find('.iphorm-upload-queue-remove').removeClass('iphorm-upload-queue-remove').addClass('iphorm-upload-queue-success').unbind('click');

						if (uploadQueue.length > 0) {
							var next = uploadQueue.shift();
							getUploader(next.uploaderId).startUpload(next.file.id);
						} else {
							// Nothing left in the queue so this time we submit the form
							$('.iphom-upload-progress-wrap').hide();
							_this.submit();
						}
					} else {
						// Hide the loading spinner
						$loadingSpinner.hide();
						resetSWFUpload();
						submitted = false;
					}
				}

				swfu = new SWFUpload({
					button_height: browseButton.outerHeight,
                    button_width: browseButton.outerWidth,
                    button_window_mode: SWFUpload.WINDOW_MODE.TRANSPARENT,
                    button_placeholder_id: element.uniqueId + '-object',
                    button_cursor: SWFUpload.CURSOR.HAND,

                    flash_url: iphormL10n.swfupload_flash_url,
                    upload_url: iphormL10n.swfupload_upload_url,
                    file_post_name: element.name,

                    file_dialog_start_handler: fileDialogStart,
                    file_queued_handler: fileQueued,
    				file_queue_error_handler: fileQueueError,
    				upload_start_handler: uploadStart,
    				upload_progress_handler: uploadProgress,
    				upload_error_handler: uploadError,
    				upload_success_handler: uploadSuccess,
    				upload_complete_handler: uploadComplete,

                    post_params: {
                        iphorm_id: settings.id,
                        iphorm_form_uniq_id: settings.uniqueId,
                        iphorm_element_id: element.id,
                        iphorm_element_name: element.name,
                        PHPSESSID: settings.PHPSESSID
                    },

                    prevent_swf_caching: true,

                    file_types : element.fileTypes,
                    file_types_description: element.fileTypesDescription,
                    file_size_limit : element.fileSizeLimit,
                    file_upload_limit : element.fileUploadLimit,

                    debug: false
				});

				uploaders.push(swfu);
			}
		}; // End addUploader

		/**
		 * Bind to the submit event of the form
		 */
		if (settings.useAjax) {
			$form.bind('submit', function(event) {
				// Can't submit during preview
				if (settings.preview === true) {
					jAlert(iphormL10n.preview_no_submit);
					return false;
				}
				// Prevent double submit
				if (submitted) {
					return false;
				} else {
					submitted = true;
				}

				// Show loading image
				$loadingSpinner.fadeIn('slow');

				// Prevent the browser submitting the form normally
				event.preventDefault();

				// Remove any previous upload error
				$('.iphorm-upload-error', $form).hide().text('');
				var isrequired = false;
				$('.iphorm-errors-wrap', $form).hide().text('');
				var iphorm_str = ".iphorm-required:visible";
				if($form.attr("data-check") == "1"){
					iphorm_str = ".iphorm-required";
				}

				$(iphorm_str,$form).each(function(){
					  var p = $(this).closest(".iphorm-element-wrap");
					 if(p.find(".iphorm-element-radio").length>0 && p.find(".iphorm-element-radio:checked").length==0){
						    $error = '<div class="iphorm-errors-list iphorm-clearfix"><div class="iphorm-error"><i class="fa fa-exclamation-triangle" aria-hidden="true" style="padding-right:5px;"></i>'+iphormL10n.iphorm_required+'</div></div>';	
							$('.iphorm-errors-wrap', p).html($error).fadeIn(1000).show();
							isrequired = true;
					 }else if(p.find(".iphorm-element-checkbox").length>0 && p.find(".iphorm-element-checkbox:checked").length==0){
						    $error = '<div class="iphorm-errors-list iphorm-clearfix"><div class="iphorm-error"><i class="fa fa-exclamation-triangle" aria-hidden="true" style="padding-right:5px;"></i>'+iphormL10n.iphorm_required+'</div></div>';	
							$('.iphorm-errors-wrap', p).html($error).fadeIn(1000).show();
							isrequired = true;
					  }else if(p.find("input,select,textarea").val()==""){
						     $error = '<div class="iphorm-errors-list iphorm-clearfix"><div class="iphorm-error"><i class="fa fa-exclamation-triangle" aria-hidden="true" style="padding-right:5px;"></i>'+iphormL10n.iphorm_required+'</div></div>';	
							$('.iphorm-errors-wrap', p).html($error).fadeIn(1000).show();
							isrequired = true;
					  }else  if(p.find("[data-toggle='distpicker']").length>0 &&  p.find("[data-toggle='distpicker'] select:last").val()==""){
						     $error = '<div class="iphorm-errors-list iphorm-clearfix"><div class="iphorm-error"><i class="fa fa-exclamation-triangle" aria-hidden="true" style="padding-right:5px;"></i>'+iphormL10n.iphorm_required+'</div></div>';	
								$('.iphorm-errors-wrap', p).html($error).fadeIn(1000).show();
								isrequired = true;
					  }
					
				})
				//这里检查下required
				if(isrequired){
					$loadingSpinner.hide();
					submitted = false;
					if($form.attr("data-check") == "1"){
							if($form.find(".iphorm-errors-list:visible").length==0){
								var tostr = "";
								if(iPhorm.logic){
									$.each(iPhorm.logic,function(k,iphorm){
										$.each(iphorm.logic,function(kk,obj){
											var name="iphorm_"+k+"_"+kk;
											if( $("."+name+"-group-wrap").find(".iphorm-errors-list").length>0 ){
												if(obj.rules.length>0){
													if(obj.rules[0].operator=="eq"){
														if(tostr==""){
															tostr = "[name='iphorm_"+k+"_"+obj.rules[0].element_id+"'][value='"+obj.rules[0].value+"']";
														}

													}
												}
											}
										})
									})
								}
								if(tostr!=""){
									//two
									$(tostr).click();
									$(tostr).click();
								}
							}


					}
					return false;
				}
				
				

				// Detect if there are any SWFUpload files in the queue and upload them first
				if (uploadQueue.length > 0) {
					extraData.iphorm_swfu = 1;
					var next = uploadQueue.shift();
					getUploader(next.uploaderId).startUpload(next.file.id);
				} else {
					// There are no uploads in the queue, submit the form normally
					_this.submit();
				}
			}); // End bind
		} // if settings.useAjax

		/**
		 * Submits the form
		 */
		_this.submit = function () {
			 if(typeof jQuery.fn.ajaxSubmit=="undefined"){
				 jQuery.getScript( "/qfy-content/plugins/qfy_form/js/jquery.form.min.js",function(){
					 _this._submit();
				 });
			 }else{
				 _this._submit();
			 }
		};
		_this._submit = function () {
			// Bind the form submit to use the ajax form plugin
			$form.ajaxSubmit({
				async: false,
				type: 'post',
				dataType: 'json',
				data: extraData,
				iframe: true,
				url: '',
				success: function(response) {
					// Reload the recaptcha, we can't use it twice
					if (typeof Recaptcha === 'object') {
					    try { // Catching errors due to conflict with another plugin
					        Recaptcha.reload();
					    } catch (e) {}
					}

					// Prepares the form to be submitted again
					var prepareForm = function () {
						// Hide the loading spinner
						$loadingSpinner.hide();

						// Hide any previous errors or success messages
						$('.iphorm-errors-wrap', $form).hide();
						$('.iphorm-errors-list, .iphorm-error', $form).remove();
						$('.iphorm-queue-errors', $form).hide().empty();
						$successMessage.hide();
						$errorMessage.hide();
						$('.iphorm-element-error', $form).removeClass('iphorm-element-error');

						// Allow the form to be submitted again
						submitted = false;
					};

					// Check if the form submission was successful
					if (response === null || response === undefined) {
						// Hide the loading spinner
						$loadingSpinner.hide();

						// Allow resubmitting
						submitted = false;

						jAlert(iphormL10n.error_submitting_form);
					} else if (typeof response === 'object') {

						if (response.type == 'success') {
							prepareForm();
							// Reset the captcha
							$('.iphorm-captcha-image', $form).trigger('click');

							// Reset the form
							$form.resetForm();

							// Call blur on element to reset inline labels
							$('input[type="text"], textarea', $form).blur();

							// Hide dynamically added file inputs
							$('.iphorm-add-another-file-wrap', $form).remove();

							// Reset conditional logic
							_this.applyAllLogic();

							// Sync uniform with underlying elements
							if (typeof $.uniform === 'object' && typeof $.uniform.update === 'function') {
								$.uniform.update();
							}

							// Reset SWF upload stats
							resetSWFUpload();

							// Hide any tooltips
							$('.qtip').hide();

							if (typeof response.redirect === 'string') {
							    if (response.redirect == '') {
							        window.location.reload();
							    } else {
							        window.location = response.redirect;
							    }
							} else {
								// Then fade in the success message
								if($pop.length >0 && $pop.val()==""){
									var success_htm = '<div style="text-align:center;" ><img class="qfy_pop_checkedimg" src="/FeiEditor/images/bitcms/check.png" style="margin-top:20px;margin-bottom:20px;" /><div style="padding-bottom:20px;">'+response.data+'</div></div>';
									top.qfy_popinfo_fun(success_htm,settings.successMessageTimeout*1/3);
								}else{
									$successMessage.html('<i class="fa fa-check-square" aria-hidden="true" style="padding-right:8px;"></i>'+response.data).fadeIn('slow').show(0, function() {
										// Set timeout
										if (settings.successMessageTimeout > 0) {
											setTimeout(function () {
												$successMessage.fadeOut(400);
											}, (settings.successMessageTimeout * 1000));
										}

										// Custom success callback
										if (typeof settings.success === 'function') {
											settings.success();
										}
									});
									if($successMessage.closest(".notice_content").length>0){
										$successMessage.closest(".notice_content").scrollTop(0);
									}
									// Scroll to the success message if it's not in view
									if (!isScrolledIntoView($successMessage) && $.isFunction($.smoothScroll)) {
										$.smoothScroll({
											scrollTarget: $successMessage,
											offset: -50,
											speed: 500
										});
									}
								}
							}
						} else if (response.type == 'error' || response.type == 'adminerror') {
							prepareForm();
							if(response.data && response.type == 'error'){
								var $errors = $();

								// Go through each element containing errors
								$.each(response.data, function(index, info) {
									// If there are errors for this element
									if (info.errors != undefined && info.errors.length > 0) {
										// Save a reference to this element
										var $elementWrap = $("." + index + "-element-wrap", $form),
										$errorsWrap = $elementWrap.find('.iphorm-errors-wrap');

										// If the returned element exists
										if ($elementWrap.length && $errorsWrap.length) {
											// Create a blank error list
											var $errorList = $('<div class="iphorm-errors-list iphorm-clearfix"></div>');

											// Go through each error for this field
											$.each(info.errors, function(i, e) {
												// Append the error to the list as a list item
												$errorList.append('<div class="iphorm-error"><i class="fa fa-exclamation-triangle" aria-hidden="true" style="padding-right:5px;"></i>' + e + '</div>');
												return false; // Just display one error per element
											});

											$errors = $errors.add($elementWrap);

											// Add the error list after the element's wrapper
											$errorsWrap.append($errorList);

											// Add an error class to the element wrapper
											$elementWrap.addClass('iphorm-element-error');
										}
									}
								});

								// Fade all errors in
								$('.iphorm-errors-wrap', $form).fadeIn(1000).show();

								// Scroll to the first error
								if ($errors.size()) {
									var $targetError = $errors.get(0);
									
									if($form.closest(".notice_content").length>0){
										var first_error_top = $('.iphorm-errors-wrap .iphorm-error:first:visible', $form).closest(".iphorm-element-wrap").position().top;
										if(first_error_top)
											$form.closest(".notice_content").scrollTop(first_error_top);
										
									}
									if (!isScrolledIntoView($targetError) && $.isFunction($.smoothScroll)) {
										$.smoothScroll({
											scrollTarget: $targetError,
											offset: -50,
											speed: 700
										});
									}
								}
								// Custom error callback
								if (typeof settings.error === 'function') {
									settings.error();
								}
							}else{
		
								if(top!=self){
									$errorMessage.html("发送失败，网站邮箱配置有异常，无法接受或者发送信息！").fadeIn('slow').show(0, function() {
										// Set timeout
										if (settings.successMessageTimeout > 0) {
											setTimeout(function () {
												$successMessage.fadeOut(400);
											}, (settings.successMessageTimeout * 1000));
										}

										// Custom success callback
										if (typeof settings.success === 'function') {
											settings.success();
										}
									});
								}else{
									prepareForm();
									// Reset the captcha
									$('.iphorm-captcha-image', $form).trigger('click');

									// Reset the form
									$form.resetForm();

									// Call blur on element to reset inline labels
									$('input[type="text"], textarea', $form).blur();

									// Hide dynamically added file inputs
									$('.iphorm-add-another-file-wrap', $form).remove();

									// Reset conditional logic
									_this.applyAllLogic();

									// Sync uniform with underlying elements
									if (typeof $.uniform === 'object' && typeof $.uniform.update === 'function') {
										$.uniform.update();
									}

									// Reset SWF upload stats
									resetSWFUpload();

									// Hide any tooltips
									$('.qtip').hide();

									if (typeof response.redirect === 'string') {
										if (response.redirect == '') {
											window.location.reload();
										} else {
											window.location = response.redirect;
										}
									} else {
										if($pop.length >0 && $pop.val()==""){
											var success_htm = '<div style="text-align:center;" ><img class="qfy_pop_checkedimg" src="/FeiEditor/images/bitcms/check.png" style="margin-top:20px;margin-bottom:20px;" /><div style="padding-bottom:20px;font-family:微软雅黑;">'+response.data+'</div></div>';
											top.qfy_popinfo_fun(success_htm,settings.successMessageTimeout*1/3);
										}else{
											// Then fade in the success message
											
											$successMessage.html('<i class="fa fa-check-square" aria-hidden="true" style="padding-right:8px;"></i>'+response.data).fadeIn('slow').show(0, function() {
												// Set timeout
												if (settings.successMessageTimeout > 0) {
													setTimeout(function () {
														$successMessage.fadeOut(400);
													}, (settings.successMessageTimeout * 1000));
												}

												// Custom success callback
												if (typeof settings.success === 'function') {
													settings.success();
												}
											});
											if($successMessage.closest(".notice_content").length>0){
												$successMessage.closest(".notice_content").scrollTop(0);
											}
											// Scroll to the success message if it's not in view
											if (!isScrolledIntoView($successMessage) && $.isFunction($.smoothScroll)) {

												$.smoothScroll({
													scrollTarget: $successMessage,
													offset: -50,
													speed: 500
												});
											}
										}
									}
								
								
								}
							}
							
						} // End reponse.type == error
					} // End typeof response == object
				}, // End success callback
				error: function () {
					// Hide the loading spinner
					$loadingSpinner.hide();

					// Allow resubmitting
					submitted = false;

					jAlert(iphormL10n.error_submitting_form);
				}
			}); // End ajaxSubmit()
		}; // End submit()

		/**
		 * Adds a datepicker to the element with the given unique ID
		 *
		 * @param string uniqueId
		 */
		_this.addDatepicker = function (uniqueId, options) {
            if ($.isFunction($.fn.datepicker)) {
                var $daySelect = $('#' + uniqueId + '_day'),
                $monthSelect = $('#' + uniqueId + '_month'),
                $yearSelect = $('#' + uniqueId + '_year'),
            	$datePicker = $('.iphorm-datepicker', '#' + uniqueId).datepicker($.extend({}, {
            		onSelect: function (dateText, inst) {
            		   $daySelect.val(inst.selectedDay);
            		   $monthSelect.val(inst.selectedMonth + 1);
            		   $yearSelect.val(inst.selectedYear);
            		   if (typeof $.uniform === 'object' && typeof $.uniform.update === 'function') {
                           $.uniform.update($daySelect.add($monthSelect).add($yearSelect));
                       }
                    },
                    beforeShow: function (input, inst) {
                        var currentTime = new Date(),
                        dayToSet = ($daySelect.val().length > 0) ? $daySelect.val() : currentTime.getDate(),
                        monthToSet = ($monthSelect.val().length > 0) ? $monthSelect.val()-1 : currentTime.getMonth(),
                        yearToSet = ($yearSelect.val().length > 0) ? $yearSelect.val() : currentTime.getFullYear();

                    	$datePicker.datepicker('setDate', new Date(yearToSet, monthToSet, dayToSet));
                    }}, options)
                );

                $('.iphorm-datepicker-icon', '#' + uniqueId).click(function () {
                    $datePicker.datepicker('show');
                }).show();
            }
		};

		/**
		 * Applies the the logic to all elements
		 *
		 * If loading is true, bind the logic triggers and do not animate the logic
		 *
		 * @param boolean loading
		 */
		_this.applyAllLogic = function (loading) {
			_this.applyLogic(settings.clElementIds, loading);

			if (loading) {
				_this.applyDependentLogic(settings.clDependentElementIds);
			}
		};

		/**
		 * Applies logic to show or hide the elements with the given IDs
		 *
		 * @param array elementIds The element IDs to apply the logic to
		 * @param boolean loading True if we are applying initial logic (to skip animating)
		 */
		_this.applyLogic = function (elementIds, loading) {
			for (var i = 0; i < elementIds.length; i++) {
				_this.applyElementLogic(elementIds[i], loading);
			}
		};

		/**
		 * Apply logic to the given element ID
		 *
		 * @param int elementId
		 * @param boolean loading True if we are applying initial logic (to skip animating)
		 */
		_this.applyElementLogic = function (elementId, loading) {
			if (iPhorm.logic[settings.id] && iPhorm.logic[settings.id].logic) {
				var logic = iPhorm.logic[settings.id].logic[elementId];

				if (logic && logic.rules && logic.rules.length) {
					var matchedValues = 0;
					for (var i = 0; i < logic.rules.length; i++) {
						var rule = logic.rules[i];
						if ((rule.operator == 'eq' && _this.elementHasValue(rule.element_id, rule.value)) || (rule.operator == 'neq' && !_this.elementHasValue(rule.element_id, rule.value))) {
							matchedValues++;
						}
					}

					if ((logic.match == 'any' && matchedValues > 0) || (logic.match == 'all' && matchedValues == logic.rules.length)) {
						var action = logic.action;
					} else {
						var action = logic.action == 'show' ? 'hide' : 'show';
					}

					var $element = $('.iphorm_'+settings.id+'_'+elementId+'-element-wrap, .iphorm_'+settings.id+'_'+elementId+'-group-wrap', $form);

					if (!loading && iPhorm.logic[settings.id].animate) {
						if (action == 'show') {
							$element.slideDown(400, function () {
								centerFancybox();
							});
						} else {
							$element.slideUp(400, function () {
								centerFancybox();
							});
						}
					} else {
						if (action == 'show') {
							$element.show();
						} else {
							$element.hide();
						}

						if (!loading) {
							centerFancybox();
						}
					}
				}
			}
		};

		/**
		 * Binds the conditional logic events to the elements
		 *
		 * @param array elementIds
		 */
		_this.applyDependentLogic = function (elementIds) {
			if (iPhorm.logic[settings.id] && iPhorm.logic[settings.id].dependents) {
				for (var i = 0; i < elementIds.length; i++) {
					var dependentElementIds = iPhorm.logic[settings.id].dependents[elementIds[i]],
					$input = $('.iphorm_' + settings.id + '_' + elementIds[i], $form);

					if ($input.length) {
						var bind;
						if ($input.is('select')) {
							bind = 'change.iphorm';
						} else if ($input.is('input[type=checkbox]') || $input.is('input[type=radio]')) {
							bind = 'click.iphorm';
						}

						if (bind) {
							(function (deps) {
								$input.bind(bind, function () {
									_this.applyLogic(deps);
								});
							})(dependentElementIds);
						}
					}
				}
			}
		};

		/**
		 * Does the element of the given ID has the given value?
		 *
		 * @param int elementId
		 * @param string value
		 * @return boolean
		 */
		_this.elementHasValue = function (elementId, value) {
			var $input = $('.iphorm_' + settings.id + '_' + elementId, $form);

			if ($input.length) {
				if ($input.is('select')) {
					if ($input.val() == value) {
						return true;
					}
				} else if ($input.is('input[type=checkbox]') || $input.is('input[type=radio]')) {
					var hasValue = false;
					$.each($input, function () {
						if ($(this).is(':checked') && $(this).val() == value) {
							hasValue = true;
							return false;
						}
					});
					return hasValue;
				}
			}

			return false;
		};

		/**
		 * Clears the default value and saves it and unbind the focus event,
		 * if reset is true a blur event is bound to show the default value
		 * again on blur if left empty.
		 *
		 * @param boolean reset
		 */
		_this.clearDefaultValue = function (reset) {
        	$(this).data('iphorm-default-value', $(this).val()).val('').unbind('focus');

        	if (reset) {
            	$(this).bind('blur', function () {
            		_this.resetDefaultValue.call(this);
                });
        	}
        };

        /**
         * Resets the default value of the element
         */
        _this.resetDefaultValue = function () {
			if ($(this).val() == '') {
				$(this).val($(this).data('iphorm-default-value')).unbind('blur').bind('focus', function () {
					_this.clearDefaultValue.call(this, true);
				});
			}
        };

        /**
         * Center the fancybox inside the viewport
         */
        function centerFancybox()
        {
        	if (settings.centerFancybox && typeof $.fancybox === 'function' && typeof $.fancybox.center === 'function' && $('#fancybox-wrap').length && $('#fancybox-wrap').is(':visible')) {
                $.fancybox.center(settings.centerFancyboxSpeed);
        	}
        }

		/**
		 * Format a file size given in bytes to a human readable value
		 *
		 * @param int File size in bytes
		 * @return string
		 */
		function formatFileSize(size) {
			if (size >= 1073741824) {
				size = (Math.round((size / 1073741824) * 10) / 10) + ' GB';
			} else if (size >= 1048576) {
				size = (Math.round((size / 1048576) * 10) / 10) + ' MB';
			} else if (size >= 1024) {
				size = (Math.round((size / 1024) * 10) / 10) + ' KB';
			} else {
				size = size + ' bytes';
			}

			return size;
		}

		/**
		 * Get the SWFUploader with the given ID
		 *
		 * @param string The uploader movie ID
		 * @return object|null
		 */
		function getUploader(uploaderId)
		{
			for (var i = 0; i < uploaders.length; i++) {
				if (uploaders[i].movieName == uploaderId) {
					return uploaders[i];
				}
			}

			return null;
		}

		/**
		 * Is the element in or scrolled out of the current viewport
		 *
		 * @param DOMElement element
		 * @return boolean
		 */
		function isScrolledIntoView(elem) {
	        var docViewTop = $(window).scrollTop();
	        var docViewBottom = docViewTop + $(window).height();

	        var elemTop = $(elem).offset().top;
	        var elemBottom = elemTop + $(elem).height();

	        return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
	          && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );
	    }

		/**
		 * Reset all the SWFUpload fields and stats
		 */
		function resetSWFUpload()
		{
			// Reset the SWFUpload stats and queues
			$('.iphorm-file-queue').hide().empty();
			for (var i = 0; i < uploaders.length; i++) {
				try {
					uploaders[i].setStats({
						in_progress: 0,
						files_queued : 0,
						successful_uploads : 0,
						upload_errors : 0,
						upload_cancelled : 0,
						queue_errors : 0
					});
				} catch (e) {}
			}
		}

		/**
		 * Get the dimensions of the given element even if it is hidden
		 *
		 * @param DOMElement element
		 * @param boolean includeMargin Include margin in outerWidth?
		 * @return object Object with all dimensions
		 */
		function getHiddenDimensions(element, includeMargin) {
		    var $item = $(element),
		        props = { position: 'absolute', visibility: 'hidden', display: 'block' },
		        dim = { width:0, height:0, innerWidth: 0, innerHeight: 0,outerWidth: 0,outerHeight: 0 },
		        $hiddenParents = $item.parents()[!!$.fn.addBack ? 'addBack' : 'andSelf']().not(':visible'),
		        includeMargin = (includeMargin == null)? false : includeMargin;

		    var oldProps = [];
		    $hiddenParents.each(function() {
		        var old = {};

		        for ( var name in props ) {
		            old[ name ] = this.style[ name ];
		            this.style[ name ] = props[ name ];
		        }

		        oldProps.push(old);
		    });

		    dim.width = $item.width();
		    dim.outerWidth = $item.outerWidth(includeMargin);
		    dim.innerWidth = $item.innerWidth();
		    dim.height = $item.height();
		    dim.innerHeight = $item.innerHeight();
		    dim.outerHeight = $item.outerHeight(includeMargin);

		    $hiddenParents.each(function(i) {
		        var old = oldProps[i];
		        for ( var name in props ) {
		            this.style[ name ] = old[ name ];
		        }
		    });

		    return dim;
		};
	}; // End $.iPhorm()

	$.fn.iPhorm = function(options) {
		return this.each(function () {
			iPhorm.instance = new $.iPhorm($(this), options);
		});
	}; // End $.fn.iPhorm

	// Preload the images in the base theme
//	$(window).load(function () {
//        window.iPhorm.preload([
//            'file-upload-tick.png',
//            'captcha-refresh-icon.png',
//            'default-loading.gif',
//            'error.png',
//            'success.png'
//        ], iphormL10n.plugin_url + '/images/');
//    });
})(jQuery); // End jQuery wrapper








(function (d, w) {
    var c = d.className;
    d.className = c + (c && ' ') + 'iphorm-js';
    w.iPhorm = {
        preloadedImages: [],
        preload: function (images, prefix) {
            for (var i = 0; i < images.length; i++) {
                var elem = document.createElement('img');
                elem.src = prefix ? prefix + images[i] : images[i];
                w.iPhorm.preloadedImages.push(elem);
            }
        },
        instance: null,
        logic: {}
    };
})(document.documentElement, window);;

/* jquery-form: (https://5b9732f9943c7.t73.qifeiye.com/qfy-includes/js/jquery/jquery.form.min.js) */
/*!
 * jQuery Form Plugin
 * version: 3.37.0-2013.07.11
 * @requires jQuery v1.5 or later
 * Copyright (c) 2013 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function(a){"use strict";function b(b){var c=b.data;b.isDefaultPrevented()||(b.preventDefault(),a(this).ajaxSubmit(c))}function c(b){var c=b.target,d=a(c);if(!d.is("[type=submit],[type=image]")){var e=d.closest("[type=submit]");if(0===e.length)return;c=e[0]}var f=this;if(f.clk=c,"image"==c.type)if(void 0!==b.offsetX)f.clk_x=b.offsetX,f.clk_y=b.offsetY;else if("function"==typeof a.fn.offset){var g=d.offset();f.clk_x=b.pageX-g.left,f.clk_y=b.pageY-g.top}else f.clk_x=b.pageX-c.offsetLeft,f.clk_y=b.pageY-c.offsetTop;setTimeout(function(){f.clk=f.clk_x=f.clk_y=null},100)}function d(){if(a.fn.ajaxSubmit.debug){var b="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(b):window.opera&&window.opera.postError&&window.opera.postError(b)}}var e={};e.fileapi=void 0!==a("<input type='file'/>").get(0).files,e.formdata=void 0!==window.FormData;var f=!!a.fn.prop;a.fn.attr2=function(){if(!f)return this.attr.apply(this,arguments);var a=this.prop.apply(this,arguments);return a&&a.jquery||"string"==typeof a?a:this.attr.apply(this,arguments)},a.fn.ajaxSubmit=function(b){function c(c){var d,e,f=a.param(c,b.traditional).split("&"),g=f.length,h=[];for(d=0;g>d;d++)f[d]=f[d].replace(/\+/g," "),e=f[d].split("="),h.push([decodeURIComponent(e[0]),decodeURIComponent(e[1])]);return h}function g(d){for(var e=new FormData,f=0;f<d.length;f++)e.append(d[f].name,d[f].value);if(b.extraData){var g=c(b.extraData);for(f=0;f<g.length;f++)g[f]&&e.append(g[f][0],g[f][1])}b.data=null;var h=a.extend(!0,{},a.ajaxSettings,b,{contentType:!1,processData:!1,cache:!1,type:i||"POST"});b.uploadProgress&&(h.xhr=function(){var c=a.ajaxSettings.xhr();return c.upload&&c.upload.addEventListener("progress",function(a){var c=0,d=a.loaded||a.position,e=a.total;a.lengthComputable&&(c=Math.ceil(100*(d/e))),b.uploadProgress(a,d,e,c)},!1),c}),h.data=null;var j=h.beforeSend;return h.beforeSend=function(a,b){b.data=e,j&&j.call(this,a,b)},a.ajax(h)}function h(c){function e(a){var b=null;try{a.contentWindow&&(b=a.contentWindow.document)}catch(c){d("cannot get iframe.contentWindow document: "+c)}if(b)return b;try{b=a.contentDocument?a.contentDocument:a.document}catch(c){d("cannot get iframe.contentDocument: "+c),b=a.document}return b}function g(){function b(){try{var a=e(r).readyState;d("state = "+a),a&&"uninitialized"==a.toLowerCase()&&setTimeout(b,50)}catch(c){d("Server abort: ",c," (",c.name,")"),h(A),w&&clearTimeout(w),w=void 0}}var c=l.attr2("target"),f=l.attr2("action");x.setAttribute("target",o),i||x.setAttribute("method","POST"),f!=m.url&&x.setAttribute("action",m.url),m.skipEncodingOverride||i&&!/post/i.test(i)||l.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(w=setTimeout(function(){v=!0,h(z)},m.timeout));var g=[];try{if(m.extraData)for(var j in m.extraData)m.extraData.hasOwnProperty(j)&&(a.isPlainObject(m.extraData[j])&&m.extraData[j].hasOwnProperty("name")&&m.extraData[j].hasOwnProperty("value")?g.push(a('<input type="hidden" name="'+m.extraData[j].name+'">').val(m.extraData[j].value).appendTo(x)[0]):g.push(a('<input type="hidden" name="'+j+'">').val(m.extraData[j]).appendTo(x)[0]));m.iframeTarget||(q.appendTo("body"),r.attachEvent?r.attachEvent("onload",h):r.addEventListener("load",h,!1)),setTimeout(b,15);try{x.submit()}catch(k){var n=document.createElement("form").submit;n.apply(x)}}finally{x.setAttribute("action",f),c?x.setAttribute("target",c):l.removeAttr("target"),a(g).remove()}}function h(b){if(!s.aborted&&!F){if(E=e(r),E||(d("cannot access response document"),b=A),b===z&&s)return s.abort("timeout"),y.reject(s,"timeout"),void 0;if(b==A&&s)return s.abort("server abort"),y.reject(s,"error","server abort"),void 0;if(E&&E.location.href!=m.iframeSrc||v){r.detachEvent?r.detachEvent("onload",h):r.removeEventListener("load",h,!1);var c,f="success";try{if(v)throw"timeout";var g="xml"==m.dataType||E.XMLDocument||a.isXMLDoc(E);if(d("isXml="+g),!g&&window.opera&&(null===E.body||!E.body.innerHTML)&&--G)return d("requeing onLoad callback, DOM not available"),setTimeout(h,250),void 0;var i=E.body?E.body:E.documentElement;s.responseText=i?i.innerHTML:null,s.responseXML=E.XMLDocument?E.XMLDocument:E,g&&(m.dataType="xml"),s.getResponseHeader=function(a){var b={"content-type":m.dataType};return b[a]},i&&(s.status=Number(i.getAttribute("status"))||s.status,s.statusText=i.getAttribute("statusText")||s.statusText);var j=(m.dataType||"").toLowerCase(),k=/(json|script|text)/.test(j);if(k||m.textarea){var l=E.getElementsByTagName("textarea")[0];if(l)s.responseText=l.value,s.status=Number(l.getAttribute("status"))||s.status,s.statusText=l.getAttribute("statusText")||s.statusText;else if(k){var o=E.getElementsByTagName("pre")[0],p=E.getElementsByTagName("body")[0];o?s.responseText=o.textContent?o.textContent:o.innerText:p&&(s.responseText=p.textContent?p.textContent:p.innerText)}}else"xml"==j&&!s.responseXML&&s.responseText&&(s.responseXML=H(s.responseText));try{D=J(s,j,m)}catch(t){f="parsererror",s.error=c=t||f}}catch(t){d("error caught: ",t),f="error",s.error=c=t||f}s.aborted&&(d("upload aborted"),f=null),s.status&&(f=s.status>=200&&s.status<300||304===s.status?"success":"error"),"success"===f?(m.success&&m.success.call(m.context,D,"success",s),y.resolve(s.responseText,"success",s),n&&a.event.trigger("ajaxSuccess",[s,m])):f&&(void 0===c&&(c=s.statusText),m.error&&m.error.call(m.context,s,f,c),y.reject(s,"error",c),n&&a.event.trigger("ajaxError",[s,m,c])),n&&a.event.trigger("ajaxComplete",[s,m]),n&&!--a.active&&a.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,s,f),F=!0,m.timeout&&clearTimeout(w),setTimeout(function(){m.iframeTarget||q.remove(),s.responseXML=null},100)}}}var j,k,m,n,o,q,r,s,t,u,v,w,x=l[0],y=a.Deferred();if(c)for(k=0;k<p.length;k++)j=a(p[k]),f?j.prop("disabled",!1):j.removeAttr("disabled");if(m=a.extend(!0,{},a.ajaxSettings,b),m.context=m.context||m,o="jqFormIO"+(new Date).getTime(),m.iframeTarget?(q=a(m.iframeTarget),u=q.attr2("name"),u?o=u:q.attr2("name",o)):(q=a('<iframe name="'+o+'" src="'+m.iframeSrc+'" />'),q.css({position:"absolute",top:"-1000px",left:"-1000px"})),r=q[0],s={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(b){var c="timeout"===b?"timeout":"aborted";d("aborting upload... "+c),this.aborted=1;try{r.contentWindow.document.execCommand&&r.contentWindow.document.execCommand("Stop")}catch(e){}q.attr("src",m.iframeSrc),s.error=c,m.error&&m.error.call(m.context,s,c,b),n&&a.event.trigger("ajaxError",[s,m,c]),m.complete&&m.complete.call(m.context,s,c)}},n=m.global,n&&0===a.active++&&a.event.trigger("ajaxStart"),n&&a.event.trigger("ajaxSend",[s,m]),m.beforeSend&&m.beforeSend.call(m.context,s,m)===!1)return m.global&&a.active--,y.reject(),y;if(s.aborted)return y.reject(),y;t=x.clk,t&&(u=t.name,u&&!t.disabled&&(m.extraData=m.extraData||{},m.extraData[u]=t.value,"image"==t.type&&(m.extraData[u+".x"]=x.clk_x,m.extraData[u+".y"]=x.clk_y)));var z=1,A=2,B=a("meta[name=csrf-token]").attr("content"),C=a("meta[name=csrf-param]").attr("content");C&&B&&(m.extraData=m.extraData||{},m.extraData[C]=B),m.forceSync?g():setTimeout(g,10);var D,E,F,G=50,H=a.parseXML||function(a,b){return window.ActiveXObject?(b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a)):b=(new DOMParser).parseFromString(a,"text/xml"),b&&b.documentElement&&"parsererror"!=b.documentElement.nodeName?b:null},I=a.parseJSON||function(a){return window.eval("("+a+")")},J=function(b,c,d){var e=b.getResponseHeader("content-type")||"",f="xml"===c||!c&&e.indexOf("xml")>=0,g=f?b.responseXML:b.responseText;return f&&"parsererror"===g.documentElement.nodeName&&a.error&&a.error("parsererror"),d&&d.dataFilter&&(g=d.dataFilter(g,c)),"string"==typeof g&&("json"===c||!c&&e.indexOf("json")>=0?g=I(g):("script"===c||!c&&e.indexOf("javascript")>=0)&&a.globalEval(g)),g};return y}if(!this.length)return d("ajaxSubmit: skipping submit process - no element selected"),this;var i,j,k,l=this;"function"==typeof b?b={success:b}:void 0===b&&(b={}),i=b.type||this.attr2("method"),j=b.url||this.attr2("action"),k="string"==typeof j?a.trim(j):"",k=k||window.location.href||"",k&&(k=(k.match(/^([^#]+)/)||[])[1]),b=a.extend(!0,{url:k,success:a.ajaxSettings.success,type:i||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},b);var m={};if(this.trigger("form-pre-serialize",[this,b,m]),m.veto)return d("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(b.beforeSerialize&&b.beforeSerialize(this,b)===!1)return d("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var n=b.traditional;void 0===n&&(n=a.ajaxSettings.traditional);var o,p=[],q=this.formToArray(b.semantic,p);if(b.data&&(b.extraData=b.data,o=a.param(b.data,n)),b.beforeSubmit&&b.beforeSubmit(q,this,b)===!1)return d("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[q,this,b,m]),m.veto)return d("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var r=a.param(q,n);o&&(r=r?r+"&"+o:o),"GET"==b.type.toUpperCase()?(b.url+=(b.url.indexOf("?")>=0?"&":"?")+r,b.data=null):b.data=r;var s=[];if(b.resetForm&&s.push(function(){l.resetForm()}),b.clearForm&&s.push(function(){l.clearForm(b.includeHidden)}),!b.dataType&&b.target){var t=b.success||function(){};s.push(function(c){var d=b.replaceTarget?"replaceWith":"html";a(b.target)[d](c).each(t,arguments)})}else b.success&&s.push(b.success);if(b.success=function(a,c,d){for(var e=b.context||this,f=0,g=s.length;g>f;f++)s[f].apply(e,[a,c,d||l,l])},b.error){var u=b.error;b.error=function(a,c,d){var e=b.context||this;u.apply(e,[a,c,d,l])}}if(b.complete){var v=b.complete;b.complete=function(a,c){var d=b.context||this;v.apply(d,[a,c,l])}}var w=a('input[type=file]:enabled[value!=""]',this),x=w.length>0,y="multipart/form-data",z=l.attr("enctype")==y||l.attr("encoding")==y,A=e.fileapi&&e.formdata;d("fileAPI :"+A);var B,C=(x||z)&&!A;b.iframe!==!1&&(b.iframe||C)?b.closeKeepAlive?a.get(b.closeKeepAlive,function(){B=h(q)}):B=h(q):B=(x||z)&&A?g(q):a.ajax(b),l.removeData("jqxhr").data("jqxhr",B);for(var D=0;D<p.length;D++)p[D]=null;return this.trigger("form-submit-notify",[this,b]),this},a.fn.ajaxForm=function(e){if(e=e||{},e.delegation=e.delegation&&a.isFunction(a.fn.on),!e.delegation&&0===this.length){var f={s:this.selector,c:this.context};return!a.isReady&&f.s?(d("DOM not ready, queuing ajaxForm"),a(function(){a(f.s,f.c).ajaxForm(e)}),this):(d("terminating; zero elements found by selector"+(a.isReady?"":" (DOM not ready)")),this)}return e.delegation?(a(document).off("submit.form-plugin",this.selector,b).off("click.form-plugin",this.selector,c).on("submit.form-plugin",this.selector,e,b).on("click.form-plugin",this.selector,e,c),this):this.ajaxFormUnbind().bind("submit.form-plugin",e,b).bind("click.form-plugin",e,c)},a.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},a.fn.formToArray=function(b,c){var d=[];if(0===this.length)return d;var f=this[0],g=b?f.getElementsByTagName("*"):f.elements;if(!g)return d;var h,i,j,k,l,m,n;for(h=0,m=g.length;m>h;h++)if(l=g[h],j=l.name,j&&!l.disabled)if(b&&f.clk&&"image"==l.type)f.clk==l&&(d.push({name:j,value:a(l).val(),type:l.type}),d.push({name:j+".x",value:f.clk_x},{name:j+".y",value:f.clk_y}));else if(k=a.fieldValue(l,!0),k&&k.constructor==Array)for(c&&c.push(l),i=0,n=k.length;n>i;i++)d.push({name:j,value:k[i]});else if(e.fileapi&&"file"==l.type){c&&c.push(l);var o=l.files;if(o.length)for(i=0;i<o.length;i++)d.push({name:j,value:o[i],type:l.type});else d.push({name:j,value:"",type:l.type})}else null!==k&&"undefined"!=typeof k&&(c&&c.push(l),d.push({name:j,value:k,type:l.type,required:l.required}));if(!b&&f.clk){var p=a(f.clk),q=p[0];j=q.name,j&&!q.disabled&&"image"==q.type&&(d.push({name:j,value:p.val()}),d.push({name:j+".x",value:f.clk_x},{name:j+".y",value:f.clk_y}))}return d},a.fn.formSerialize=function(b){return a.param(this.formToArray(b))},a.fn.fieldSerialize=function(b){var c=[];return this.each(function(){var d=this.name;if(d){var e=a.fieldValue(this,b);if(e&&e.constructor==Array)for(var f=0,g=e.length;g>f;f++)c.push({name:d,value:e[f]});else null!==e&&"undefined"!=typeof e&&c.push({name:this.name,value:e})}}),a.param(c)},a.fn.fieldValue=function(b){for(var c=[],d=0,e=this.length;e>d;d++){var f=this[d],g=a.fieldValue(f,b);null===g||"undefined"==typeof g||g.constructor==Array&&!g.length||(g.constructor==Array?a.merge(c,g):c.push(g))}return c},a.fieldValue=function(b,c){var d=b.name,e=b.type,f=b.tagName.toLowerCase();if(void 0===c&&(c=!0),c&&(!d||b.disabled||"reset"==e||"button"==e||("checkbox"==e||"radio"==e)&&!b.checked||("submit"==e||"image"==e)&&b.form&&b.form.clk!=b||"select"==f&&-1==b.selectedIndex))return null;if("select"==f){var g=b.selectedIndex;if(0>g)return null;for(var h=[],i=b.options,j="select-one"==e,k=j?g+1:i.length,l=j?g:0;k>l;l++){var m=i[l];if(m.selected){var n=m.value;if(n||(n=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),j)return n;h.push(n)}}return h}return a(b).val()},a.fn.clearForm=function(b){return this.each(function(){a("input,select,textarea",this).clearFields(b)})},a.fn.clearFields=a.fn.clearInputs=function(b){var c=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var d=this.type,e=this.tagName.toLowerCase();c.test(d)||"textarea"==e?this.value="":"checkbox"==d||"radio"==d?this.checked=!1:"select"==e?this.selectedIndex=-1:"file"==d?/MSIE/.test(navigator.userAgent)?a(this).replaceWith(a(this).clone(!0)):a(this).val(""):b&&(b===!0&&/hidden/.test(d)||"string"==typeof b&&a(this).is(b))&&(this.value="")})},a.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},a.fn.enable=function(a){return void 0===a&&(a=!0),this.each(function(){this.disabled=!a})},a.fn.selected=function(b){return void 0===b&&(b=!0),this.each(function(){var c=this.type;if("checkbox"==c||"radio"==c)this.checked=b;else if("option"==this.tagName.toLowerCase()){var d=a(this).parent("select");b&&d[0]&&"select-one"==d[0].type&&d.find("option").selected(!1),this.selected=b}})},a.fn.ajaxSubmit.debug=!1}(jQuery);;

/* jquery-smooth-scroll: (https://5b9732f9943c7.t73.qifeiye.com/qfy-content/plugins/qfy_form/js/jquery.smooth-scroll.min.js) */
/*! Smooth Scroll - v1.4.9 - 2013-01-21
* https://github.com/kswedberg/jquery-smooth-scroll
* Copyright (c) 2013 Karl Swedberg; Licensed MIT
*
* Modified by to be compatible with jQuery Tools Scrollable
* The following code was removed from the original file:
* 
*   scrollable: function(dir) {
*	    var scrl = getScrollable.call(this, {dir: dir});
*	    return this.pushStack(scrl);
*  	},
* 
*/
(function(b){function m(b){return b.replace(/(:|\.)/g,"\\$1")}b.fn.extend({firstScrollable:function(e){var c=[],a=!1,f=e&&"left"==e?"scrollLeft":"scrollTop";this.each(function(){if(!(this==document||this==window)){var d=b(this);0<d[f]()?c.push(this):(d[f](1),(a=0<d[f]())&&c.push(this),d[f](0))}});c.length||this.each(function(){"BODY"===this.nodeName&&(c=[this])});1<c.length&&(c=[c[0]]);return this.pushStack(c)},smoothScroll:function(e){e=e||{};var c=b.extend({},b.fn.smoothScroll.defaults,e),a=b.smoothScroll.filterPath(location.pathname); this.unbind("click.smoothscroll").bind("click.smoothscroll",function(e){var d=b(this),g=c.exclude,j=c.excludeWithin,h=0,k=0,l=!0,n={},q=location.hostname===this.hostname||!this.hostname,r=c.scrollTarget||(b.smoothScroll.filterPath(this.pathname)||a)===a,p=m(this.hash);if(!c.scrollTarget&&(!q||!r||!p))l=!1;else{for(;l&&h<g.length;)d.is(m(g[h++]))&&(l=!1);for(;l&&k<j.length;)d.closest(j[k++]).length&&(l=!1)}l&&(e.preventDefault(),b.extend(n,c,{scrollTarget:c.scrollTarget||p,link:this}),b.smoothScroll(n))}); return this}});b.smoothScroll=function(e,c){var a,f,d,g;g=0;var j="offset",h="scrollTop",k={};d={};"number"===typeof e?(a=b.fn.smoothScroll.defaults,d=e):(a=b.extend({},b.fn.smoothScroll.defaults,e||{}),a.scrollElement&&(j="position","static"==a.scrollElement.css("position")&&a.scrollElement.css("position","relative")));a=b.extend({link:null},a);h="left"==a.direction?"scrollLeft":h;a.scrollElement?(f=a.scrollElement,g=f[h]()):f=b("html, body").firstScrollable();a.beforeScroll.call(f,a);d="number"=== typeof e?e:c||b(a.scrollTarget)[j]()&&b(a.scrollTarget)[j]()[a.direction]||0;k[h]=d+g+a.offset;g=a.speed;"auto"===g&&(g=k[h]||f.scrollTop(),g/=a.autoCoefficent);d={duration:g,easing:a.easing,complete:function(){a.afterScroll.call(a.link,a)}};a.step&&(d.step=a.step);f.length?f.stop().animate(k,d):a.afterScroll.call(a.link,a)};b.smoothScroll.version="1.4.9";b.smoothScroll.filterPath=function(b){return b.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")};b.fn.smoothScroll.defaults= {exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficent:2}})(jQuery);;

/* qtip: (https://5b9732f9943c7.t73.qifeiye.com/qfy-content/plugins/qfy_form/js/qtip2/jquery.qtip.min.js) */
/*! qTip2 v2.0.1-36- (includes: tips / basic css3) | qtip2.com | Licensed MIT, GPL | Wed Mar 20 2013 08:57:14 */
(function(e,t,n){(function(e){"use strict";typeof define=="function"&&define.amd?define(["jquery"],e):jQuery&&!jQuery.fn.qtip&&e(jQuery)})(function(r){function P(n){S={pageX:n.pageX,pageY:n.pageY,type:"mousemove",scrollX:e.pageXOffset||t.body.scrollLeft||t.documentElement.scrollLeft,scrollY:e.pageYOffset||t.body.scrollTop||t.documentElement.scrollTop}}function H(e){var t=function(e){return e===o||"object"!=typeof e},n=function(e){return!r.isFunction(e)&&(!e&&!e.attr||e.length<1||"object"==typeof e&&!e.jquery&&!e.then)};if(!e||"object"!=typeof e)return s;t(e.metadata)&&(e.metadata={type:e.metadata});if("content"in e){if(t(e.content)||e.content.jquery)e.content={text:e.content};n(e.content.text||s)&&(e.content.text=s),"title"in e.content&&(t(e.content.title)&&(e.content.title={text:e.content.title}),n(e.content.title.text||s)&&(e.content.title.text=s))}return"position"in e&&t(e.position)&&(e.position={my:e.position,at:e.position}),"show"in e&&t(e.show)&&(e.show=e.show.jquery?{target:e.show}:e.show===i?{ready:i}:{event:e.show}),"hide"in e&&t(e.hide)&&(e.hide=e.hide.jquery?{target:e.hide}:{event:e.hide}),"style"in e&&t(e.style)&&(e.style={classes:e.style}),r.each(E,function(){this.sanitize&&this.sanitize(e)}),e}function B(n,u,a,f){function R(e){var t=0,n,r=u,i=e.split(".");while(r=r[i[t++]])t<i.length&&(n=r);return[n||u,i.pop()]}function U(e){return C.concat("").join(e?"-"+e+" ":" ")}function z(){var e=u.style.widget,t=B.hasClass(F);B.removeClass(F),F=e?"ui-state-disabled":"qtip-disabled",B.toggleClass(F,t),B.toggleClass("ui-helper-reset "+U(),e).toggleClass(L,u.style.def&&!e),I.content&&I.content.toggleClass(U("content"),e),I.titlebar&&I.titlebar.toggleClass(U("header"),e),I.button&&I.button.toggleClass(x+"-icon",!e)}function W(e){I.title&&(I.titlebar.remove(),I.titlebar=I.title=I.button=o,e!==s&&l.reposition())}function X(){var e=u.content.title.button,t=typeof e=="string",n=t?e:"Close tooltip";I.button&&I.button.remove(),e.jquery?I.button=e:I.button=r("<a />",{"class":"qtip-close "+(u.style.widget?"":x+"-icon"),title:n,"aria-label":n}).prepend(r("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"})),I.button.appendTo(I.titlebar||B).attr("role","button").click(function(e){return B.hasClass(F)||l.hide(e),s})}function V(){var e=g+"-title";I.titlebar&&W(),I.titlebar=r("<div />",{"class":x+"-titlebar "+(u.style.widget?U("header"):"")}).append(I.title=r("<div />",{id:e,"class":x+"-title","aria-atomic":i})).insertBefore(I.content).delegate(".qtip-close","mousedown keydown mouseup keyup mouseout",function(e){r(this).toggleClass("ui-state-active ui-state-focus",e.type.substr(-4)==="down")}).delegate(".qtip-close","mouseover mouseout",function(e){r(this).toggleClass("ui-state-hover",e.type==="mouseover")}),u.content.title.button&&X()}function J(e){var t=I.button;if(!l.rendered)return s;e?X():t.remove()}function K(e,t){var i=I.title;if(!l.rendered||!e)return s;r.isFunction(e)&&(e=e.call(n,q.event,l));if(e===s||!e&&e!=="")return W(s);e.jquery&&e.length>0?i.empty().append(e.css({display:"block"})):i.html(e),t!==s&&l.rendered&&B[0].offsetWidth>0&&l.reposition(q.event)}function Q(e){e&&r.isFunction(e.done)&&e.done(function(e){G(e,null,s)})}function G(e,t,i){function a(e){function s(t){if(t.src===b||r.inArray(t,i)!==-1)return;i.push(t),r.data(t,"imagesLoaded",{src:t.src}),n.length===i.length&&(setTimeout(e),n.unbind(".imagesLoaded"))}var t=r(this),n=t.find("img").add(t.filter("img")),i=[];if(!n.length)return e();n.bind("load.imagesLoaded error.imagesLoaded",function(e){s(e.target)}).each(function(e,t){var n=t.src,i=r.data(t,"imagesLoaded");if(i&&i.src===n||t.complete&&t.naturalWidth)s(t);else if(t.readyState||t.complete)t.src=b,t.src=n})}var o=I.content;return!l.rendered||!e?s:(r.isFunction(e)&&(e=e.call(n,q.event,l)||""),i!==s&&Q(u.content.deferred),e.jquery&&e.length>0?o.empty().append(e.css({display:"block"})):o.html(e),l.rendered<0?B.queue("fx",a):(M=0,a.call(B[0],r.noop)),l)}function Y(){function p(e){if(B.hasClass(F))return s;clearTimeout(l.timers.show),clearTimeout(l.timers.hide);var t=function(){l.toggle(i,e)};u.show.delay>0?l.timers.show=setTimeout(t,u.show.delay):t()}function d(e){if(B.hasClass(F)||y||M)return s;var t=r(e.relatedTarget),n=t.closest(k)[0]===B[0],i=t[0]===f.show[0];clearTimeout(l.timers.show),clearTimeout(l.timers.hide);if(this!==t[0]&&o.target==="mouse"&&n||u.hide.fixed&&/mouse(out|leave|move)/.test(e.type)&&(n||i)){try{e.preventDefault(),e.stopImmediatePropagation()}catch(a){}return}u.hide.delay>0?l.timers.hide=setTimeout(function(){l.hide(e)},u.hide.delay):l.hide(e)}function v(e){if(B.hasClass(F))return s;clearTimeout(l.timers.inactive),l.timers.inactive=setTimeout(function(){l.hide(e)},u.hide.inactive)}function m(e){l.rendered&&B[0].offsetWidth>0&&l.reposition(e)}var o=u.position,f={show:u.show.target,hide:u.hide.target,viewport:r(o.viewport),document:r(t),body:r(t.body),window:r(e)},c={show:r.trim(""+u.show.event).split(" "),hide:r.trim(""+u.hide.event).split(" ")},h=E.ie===6;B.bind("mouseenter"+j+" mouseleave"+j,function(e){var t=e.type==="mouseenter";t&&l.focus(e),B.toggleClass(O,t)}),/mouse(out|leave)/i.test(u.hide.event)&&u.hide.leave==="window"&&f.document.bind("mouseout"+j+" blur"+j,function(e){!/select|option/.test(e.target.nodeName)&&!e.relatedTarget&&l.hide(e)}),u.hide.fixed?(f.hide=f.hide.add(B),B.bind("mouseover"+j,function(){B.hasClass(F)||clearTimeout(l.timers.hide)})):/mouse(over|enter)/i.test(u.show.event)&&f.hide.bind("mouseleave"+j,function(e){clearTimeout(l.timers.show)}),(""+u.hide.event).indexOf("unfocus")>-1&&o.container.closest("html").bind("mousedown"+j+" touchstart"+j,function(e){var t=r(e.target),i=l.rendered&&!B.hasClass(F)&&B[0].offsetWidth>0,s=t.parents(k).filter(B[0]).length>0;t[0]!==n[0]&&t[0]!==B[0]&&!s&&!n.has(t[0]).length&&i&&l.hide(e)}),"number"==typeof u.hide.inactive&&(f.show.bind("qtip-"+a+"-inactive",v),r.each(w.inactiveEvents,function(e,t){f.hide.add(I.tooltip).bind(t+j+"-inactive",v)})),r.each(c.hide,function(e,t){var n=r.inArray(t,c.show),i=r(f.hide);n>-1&&i.add(f.show).length===i.length||t==="unfocus"?(f.show.bind(t+j,function(e){B[0].offsetWidth>0?d(e):p(e)}),delete c.show[n]):f.hide.bind(t+j,d)}),r.each(c.show,function(e,t){f.show.bind(t+j,p)}),"number"==typeof u.hide.distance&&f.show.add(B).bind("mousemove"+j,function(e){var t=q.origin||{},n=u.hide.distance,r=Math.abs;(r(e.pageX-t.pageX)>=n||r(e.pageY-t.pageY)>=n)&&l.hide(e)}),o.target==="mouse"&&(f.show.bind("mousemove"+j,P),o.adjust.mouse&&(u.hide.event&&(B.bind("mouseleave"+j,function(e){(e.relatedTarget||e.target)!==f.show[0]&&l.hide(e)}),I.target.bind("mouseenter"+j+" mouseleave"+j,function(e){q.onTarget=e.type==="mouseenter"})),f.document.bind("mousemove"+j,function(e){l.rendered&&q.onTarget&&!B.hasClass(F)&&B[0].offsetWidth>0&&l.reposition(e||S)}))),(o.adjust.resize||f.viewport.length)&&(r.event.special.resize?f.viewport:f.window).bind("resize"+j,m),o.adjust.scroll&&f.window.add(o.container).bind("scroll"+j,m)}function Z(){var n=[u.show.target[0],u.hide.target[0],l.rendered&&I.tooltip[0],u.position.container[0],u.position.viewport[0],u.position.container.closest("html")[0],e,t];l.rendered?r([]).pushStack(r.grep(n,function(e){return typeof e=="object"})).unbind(j):u.show.target.unbind(j+"-create")}var l=this,m=t.body,g=x+"-"+a,y=0,M=0,B=r(),j=".qtip-"+a,F="qtip-disabled",I,q;l.id=a,l.rendered=s,l.destroyed=s,l.elements=I={target:n},l.timers={img:{}},l.options=u,l.checks={},l.plugins={},l.cache=q={event:{},target:r(),disabled:s,attr:f,onTarget:s,lastClass:""},l.checks.builtin={"^id$":function(e,t,n){var o=n===i?w.nextid:n,u=x+"-"+o;o!==s&&o.length>0&&!r("#"+u).length&&(B[0].id=u,I.content[0].id=u+"-content",I.title[0].id=u+"-title")},"^content.text$":function(e,t,n){G(u.content.text)},"^content.deferred$":function(e,t,n){Q(u.content.deferred)},"^content.title.text$":function(e,t,n){if(!n)return W();!I.title&&n&&V(),K(n)},"^content.title.button$":function(e,t,n){J(n)},"^position.(my|at)$":function(e,t,n){"string"==typeof n&&(e[t]=new E.Corner(n))},"^position.container$":function(e,t,n){l.rendered&&B.appendTo(n)},"^show.ready$":function(){l.rendered?l.toggle(i):l.render(1)},"^style.classes$":function(e,t,n){B.attr("class",x+" qtip "+n)},"^style.width|height":function(e,t,n){B.css(t,n)},"^style.widget|content.title":z,"^events.(render|show|move|hide|focus|blur)$":function(e,t,n){B[(r.isFunction(n)?"":"un")+"bind"]("tooltip"+t,n)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){var e=u.position;B.attr("tracking",e.target==="mouse"&&e.adjust.mouse),Z(),Y()}},r.extend(l,{_triggerEvent:function(e,t,n){var i=r.Event("tooltip"+e);return i.originalEvent=(n?r.extend({},n):o)||q.event||o,B.trigger(i,[l].concat(t||[])),!i.isDefaultPrevented()},render:function(e){if(l.rendered)return l;var t=u.content.text,o=u.content.title,a=u.position;return r.attr(n[0],"aria-describedby",g),B=I.tooltip=r("<div/>",{id:g,"class":[x,L,u.style.classes,x+"-pos-"+u.position.my.abbrev()].join(" "),width:u.style.width||"",height:u.style.height||"",tracking:a.target==="mouse"&&a.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":s,"aria-describedby":g+"-content","aria-hidden":i}).toggleClass(F,q.disabled).data("qtip",l).appendTo(u.position.container).append(I.content=r("<div />",{"class":x+"-content",id:g+"-content","aria-atomic":i})),l.rendered=-1,y=1,o.text?(V(),r.isFunction(o.text)||K(o.text,s)):o.button&&X(),(!r.isFunction(t)||t.then)&&G(t,s),l.rendered=i,z(),r.each(u.events,function(e,t){r.isFunction(t)&&B.bind(e==="toggle"?"tooltipshow tooltiphide":"tooltip"+e,t)}),r.each(E,function(){this.initialize==="render"&&this(l)}),Y(),B.queue("fx",function(t){l._triggerEvent("render"),y=0,(u.show.ready||e)&&l.toggle(i,q.event,s),t()}),l},get:function(e){var t,n;switch(e.toLowerCase()){case"dimensions":t={height:B.outerHeight(s),width:B.outerWidth(s)};break;case"offset":t=E.offset(B,u.position.container);break;default:n=R(e.toLowerCase()),t=n[0][n[1]],t=t.precedance?t.string():t}return t},set:function(e,t){function p(e,t){var n,r,i;for(n in c)for(r in c[n])if(i=(new RegExp(r,"i")).exec(e))t.push(i),c[n][r].apply(l,t)}var n=/^position\.(my|at|adjust|target|container)|style|content|show\.ready/i,a=/^content\.(title|attr)|style/i,f=s,c=l.checks,h;return"string"==typeof e?(h=e,e={},e[h]=t):e=r.extend(i,{},e),r.each(e,function(t,i){var s=R(t.toLowerCase()),o;o=s[0][s[1]],s[0][s[1]]="object"==typeof i&&i.nodeType?r(i):i,e[t]=[s[0],s[1],i,o],f=n.test(t)||f}),H(u),y=1,r.each(e,p),y=0,l.rendered&&B[0].offsetWidth>0&&f&&l.reposition(u.position.target==="mouse"?o:q.event),l},toggle:function(e,n){function w(){e?(E.ie&&B[0].style.removeAttribute("filter"),B.css("overflow",""),"string"==typeof f.autofocus&&r(f.autofocus,B).focus(),f.target.trigger("qtip-"+a+"-inactive")):B.css({display:"",visibility:"",opacity:"",left:"",top:""}),l._triggerEvent(e?"visible":"hidden")}if(n){if(/over|enter/.test(n.type)&&/out|leave/.test(q.event.type)&&u.show.target.add(n.target).length===u.show.target.length&&B.has(n.relatedTarget).length)return l;q.event=r.extend({},n)}if(!l.rendered)return e?l.render(1):l;var o=e?"show":"hide",f=u[o],c=u[e?"hide":"show"],h=u.position,p=u.content,d=B.css("width"),v=B[0].offsetWidth>0,m=e||f.target.length===1,g=!n||f.target.length<2||q.target[0]===n.target,y,b;return(typeof e).search("boolean|number")&&(e=!v),!B.is(":animated")&&v===e&&g?l:!l._triggerEvent(o,[90])&&!l.destroyed?l:(r.attr(B[0],"aria-hidden",!e),e?(q.origin=r.extend({},S),l.focus(n),r.isFunction(p.text)&&G(p.text,s),r.isFunction(p.title.text)&&K(p.title.text,s),!D&&h.target==="mouse"&&h.adjust.mouse&&(r(t).bind("mousemove.qtip",P),D=i),d||B.css("width",B.outerWidth()),l.reposition(n,arguments[2]),d||B.css("width",""),!f.solo||(typeof f.solo=="string"?r(f.solo):r(k,f.solo)).not(B).not(f.target).qtip("hide",r.Event("tooltipsolo"))):(clearTimeout(l.timers.show),delete q.origin,D&&!r(k+'[tracking="true"]:visible',f.solo).not(B).length&&(r(t).unbind("mousemove.qtip"),D=s),l.blur(n)),f.effect===s||m===s?(B[o](),w.call(B)):r.isFunction(f.effect)?(B.stop(1,1),f.effect.call(B,l),B.queue("fx",function(e){w(),e()})):B.fadeTo(90,e?1:0,w),e&&f.target.trigger("qtip-"+a+"-inactive"),l)},show:function(e){return l.toggle(i,e)},hide:function(e){return l.toggle(s,e)},focus:function(e){if(!l.rendered)return l;var t=r(k),n=parseInt(B[0].style.zIndex,10),i=w.zindex+t.length,s=r.extend({},e),o;return B.hasClass(A)||l._triggerEvent("focus",[i],s)&&(n!==i&&(t.each(function(){this.style.zIndex>n&&(this.style.zIndex=this.style.zIndex-1)}),t.filter("."+A).qtip("blur",s)),B.addClass(A)[0].style.zIndex=i),l},blur:function(e){return B.removeClass(A),l._triggerEvent("blur",[B.css("zIndex")],e),l},reposition:function(n,i){if(!l.rendered||y)return l;y=1;var o=u.position.target,a=u.position,f=a.my,m=a.at,g=a.adjust,b=g.method.split(" "),w=B.outerWidth(s),x=B.outerHeight(s),T=0,N=0,C=B.css("position"),k=a.viewport,L={left:0,top:0},A=a.container,O=B[0].offsetWidth>0,M=n&&n.type==="scroll",_=r(e),D,P;if(r.isArray(o)&&o.length===2)m={x:h,y:c},L={left:o[0],top:o[1]};else if(o==="mouse"&&(n&&n.pageX||q.event.pageX))m={x:h,y:c},n=S&&S.pageX&&(g.mouse||!n||!n.pageX)?{pageX:S.pageX,pageY:S.pageY}:(!n||n.type!=="resize"&&n.type!=="scroll"?n&&n.pageX&&n.type==="mousemove"?n:(!g.mouse||u.show.distance)&&q.origin&&q.origin.pageX?q.origin:n:q.event)||n||q.event||S||{},C!=="static"&&(L=A.offset()),L={left:n.pageX-L.left,top:n.pageY-L.top},g.mouse&&M&&(L.left-=S.scrollX-_.scrollLeft(),L.top-=S.scrollY-_.scrollTop());else{o==="event"&&n&&n.target&&n.type!=="scroll"&&n.type!=="resize"?q.target=r(n.target):o!=="event"&&(q.target=r(o.jquery?o:I.target)),o=q.target,o=r(o).eq(0);if(o.length===0)return l;o[0]===t||o[0]===e?(T=E.iOS?e.innerWidth:o.width(),N=E.iOS?e.innerHeight:o.height(),o[0]===e&&(L={top:(k||o).scrollTop(),left:(k||o).scrollLeft()})):E.imagemap&&o.is("area")?D=E.imagemap(l,o,m,E.viewport?b:s):E.svg&&o[0].ownerSVGElement?D=E.svg(l,o,m,E.viewport?b:s):(T=o.outerWidth(s),N=o.outerHeight(s),L=o.offset()),D&&(T=D.width,N=D.height,P=D.offset,L=D.position),L=E.offset(o,L,A);if(E.iOS>3.1&&E.iOS<4.1||E.iOS>=4.3&&E.iOS<4.33||!E.iOS&&C==="fixed")L.left-=_.scrollLeft(),L.top-=_.scrollTop();L.left+=m.x===d?T:m.x===v?T/2:0,L.top+=m.y===p?N:m.y===v?N/2:0}return L.left+=g.x+(f.x===d?-w:f.x===v?-w/2:0),L.top+=g.y+(f.y===p?-x:f.y===v?-x/2:0),E.viewport?(L.adjusted=E.viewport(l,L,a,T,N,w,x),P&&L.adjusted.left&&(L.left+=P.left),P&&L.adjusted.top&&(L.top+=P.top)):L.adjusted={left:0,top:0},l._triggerEvent("move",[L,k.elem||k],n)?(delete L.adjusted,i===s||!O||isNaN(L.left)||isNaN(L.top)||o==="mouse"||!r.isFunction(a.effect)?B.css(L):r.isFunction(a.effect)&&(a.effect.call(B,l,r.extend({},L)),B.queue(function(e){r(this).css({opacity:"",height:""}),E.ie&&this.style.removeAttribute("filter"),e()})),y=0,l):l},disable:function(e){return"boolean"!=typeof e&&(e=!B.hasClass(F)&&!q.disabled),l.rendered?(B.toggleClass(F,e),r.attr(B[0],"aria-disabled",e)):q.disabled=!!e,l},enable:function(){return l.disable(s)},destroy:function(e){function t(){var e=n[0],t=r.attr(e,_),i=n.data("qtip");l.rendered&&(r.each(l.plugins,function(e){this.destroy&&this.destroy(),delete l.plugins[e]}),B.stop(1,0).find("*").remove().end().remove(),l.rendered=s),clearTimeout(l.timers.show),clearTimeout(l.timers.hide),Z();if(!i||l===i)n.removeData("qtip").removeAttr(T),u.suppress&&t&&(n.attr("title",t),n.removeAttr(_)),n.removeAttr("aria-describedby");n.unbind(".qtip-"+a),delete N[l.id],delete l.options,delete l.elements,delete l.cache,delete l.timers,delete l.checks}if(l.destroyed)return;l.destroyed=i;var o=s;return e!==i&&(B.bind("tooltiphide",function(){o=i,B.bind("tooltiphidden",t)}),l.hide()),o||t(),n}})}function j(e,n,u){var a,f,l,c,h,p=r(t.body),d=e[0]===t?p:e,v=e.metadata?e.metadata(u.metadata):o,m=u.metadata.type==="html5"&&v?v[u.metadata.name]:o,g=e.data(u.metadata.name||"qtipopts");try{g=typeof g=="string"?r.parseJSON(g):g}catch(y){}c=r.extend(i,{},w.defaults,u,typeof g=="object"?H(g):o,H(m||v)),f=c.position,c.id=n;if("boolean"==typeof c.content.text){l=e.attr(c.content.attr);if(c.content.attr===s||!l)return s;c.content.text=l}f.container.length||(f.container=p),f.target===s&&(f.target=d),c.show.target===s&&(c.show.target=d),c.show.solo===i&&(c.show.solo=f.container.closest("body")),c.hide.target===s&&(c.hide.target=d),c.position.viewport===i&&(c.position.viewport=f.container),f.container=f.container.eq(0),f.at=new E.Corner(f.at),f.my=new E.Corner(f.my);if(e.data("qtip"))if(c.overwrite)e.qtip("destroy");else if(c.overwrite===s)return s;return e.attr(T,!0),c.suppress&&(h=e.attr("title"))&&e.removeAttr("title").attr(_,h).attr("title",""),a=new B(e,c,n,!!l),e.data("qtip",a),e.one("remove.qtip-"+n+" removeqtip.qtip-"+n,function(){var e;(e=r(this).data("qtip"))&&e.destroy()}),a}function R(e,t,n){var r=Math.ceil(t/2),i=Math.ceil(n/2),s={bottomright:[[0,0],[t,n],[t,0]],bottomleft:[[0,0],[t,0],[0,n]],topright:[[0,n],[t,0],[t,n]],topleft:[[0,0],[0,n],[t,n]],topcenter:[[0,n],[r,0],[t,n]],bottomcenter:[[0,0],[t,0],[r,n]],rightcenter:[[0,0],[t,i],[0,n]],leftcenter:[[t,0],[t,n],[0,i]]};return s.lefttop=s.bottomright,s.righttop=s.bottomleft,s.leftbottom=s.topright,s.rightbottom=s.topleft,s[e.string()]}function U(e,t){function k(e){var t=w.is(":visible");w.show(),e(),w.toggle(t)}function L(){x.width=g.height,x.height=g.width}function A(){x.width=g.width,x.height=g.height}function O(t,r,o,f){if(!b.tip)return;var l=m.corner.clone(),w=o.adjusted,E=e.options.position.adjust.method.split(" "),x=E[0],T=E[1]||E[0],N={left:s,top:s,x:0,y:0},C,k={},L;m.corner.fixed!==i&&(x===y&&l.precedance===u&&w.left&&l.y!==v?l.precedance=l.precedance===u?a:u:x!==y&&w.left&&(l.x=l.x===v?w.left>0?h:d:l.x===h?d:h),T===y&&l.precedance===a&&w.top&&l.x!==v?l.precedance=l.precedance===a?u:a:T!==y&&w.top&&(l.y=l.y===v?w.top>0?c:p:l.y===c?p:c),l.string()!==S.corner.string()&&(S.top!==w.top||S.left!==w.left)&&m.update(l,s)),C=m.position(l,w),C[l.x]+=_(l,l.x),C[l.y]+=_(l,l.y),C.right!==n&&(C.left=-C.right),C.bottom!==n&&(C.top=-C.bottom),C.user=Math.max(0,g.offset);if(N.left=x===y&&!!w.left)l.x===v?k["margin-left"]=N.x=C["margin-left"]-w.left:(L=C.right!==n?[w.left,-C.left]:[-w.left,C.left],(N.x=Math.max(L[0],L[1]))>L[0]&&(o.left-=w.left,N.left=s),k[C.right!==n?d:h]=N.x);if(N.top=T===y&&!!w.top)l.y===v?k["margin-top"]=N.y=C["margin-top"]-w.top:(L=C.bottom!==n?[w.top,-C.top]:[-w.top,C.top],(N.y=Math.max(L[0],L[1]))>L[0]&&(o.top-=w.top,N.top=s),k[C.bottom!==n?p:c]=N.y);b.tip.css(k).toggle(!(N.x&&N.y||l.x===v&&N.y||l.y===v&&N.x)),o.left-=C.left.charAt?C.user:x!==y||N.top||!N.left&&!N.top?C.left:0,o.top-=C.top.charAt?C.user:T!==y||N.left||!N.left&&!N.top?C.top:0,S.left=w.left,S.top=w.top,S.corner=l.clone()}function M(){var t=g.corner,n=e.options.position,r=n.at,o=n.my.string?n.my.string():n.my;return t===s||o===s&&r===s?s:(t===i?m.corner=new E.Corner(o):t.string||(m.corner=new E.Corner(t),m.corner.fixed=i),S.corner=new E.Corner(m.corner.string()),m.corner.string()!=="centercenter")}function _(e,t,n){t=t?t:e[e.precedance];var r=b.titlebar&&e.y===c,i=r?b.titlebar:w,s="border-"+t+"-width",o=function(e){return parseInt(e.css(s),10)},u;return k(function(){u=(n?o(n):o(b.content)||o(i)||o(w))||0}),u}function D(e){var t=b.titlebar&&e.y===c,n=t?b.titlebar:b.content,r="-moz-",i="-webkit-",s="border-radius-"+e.y+e.x,o="border-"+e.y+"-"+e.x+"-radius",u=function(e){return parseInt(n.css(e),10)||parseInt(w.css(e),10)},a;return k(function(){a=u(o)||u(s)||u(r+o)||u(r+s)||u(i+o)||u(i+s)||0}),a}function P(e){function N(e,t,n){var r=e.css(t)||p;return n&&r===e.css(n)?s:f.test(r)?s:r}var t,n,o,u=b.tip.css("cssText",""),a=e||m.corner,f=/rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,l="border-"+a[a.precedance]+"-color",h="background-color",p="transparent",d=" !important",y=b.titlebar,E=y&&(a.y===c||a.y===v&&u.position().top+x.height/2+g.offset<y.outerHeight(i)),S=E?y:b.content;k(function(){T.fill=N(u,h)||N(S,h)||N(b.content,h)||N(w,h)||u.css(h),T.border=N(u,l,"color")||N(S,l,"color")||N(b.content,l,"color")||N(w,l,"color")||w.css(l),r("*",u).add(u).css("cssText",h+":"+p+d+";border:0"+d+";")})}function H(e){var t=e.precedance===a,n=x[t?f:l],r=x[t?l:f],i=e.string().indexOf(v)>-1,s=n*(i?.5:1),o=Math.pow,u=Math.round,c,h,p,d=Math.sqrt(o(s,2)+o(r,2)),m=[N/s*d,N/r*d];return m[2]=Math.sqrt(o(m[0],2)-o(N,2)),m[3]=Math.sqrt(o(m[1],2)-o(N,2)),c=d+m[2]+m[3]+(i?0:m[0]),h=c/d,p=[u(h*r),u(h*n)],{height:p[t?0:1],width:p[t?1:0]}}function B(e,t,n){return"<qvml:"+e+' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" '+(t||"")+' style="behavior: url(#default#VML); '+(n||"")+'" />'}var m=this,g=e.options.style.tip,b=e.elements,w=b.tooltip,S={top:0,left:0},x={width:g.width,height:g.height},T={},N=g.border||0,C;m.corner=o,m.mimic=o,m.border=N,m.offset=g.offset,m.size=x,e.checks.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){m.init()||m.destroy(),e.reposition()},"^style.tip.(height|width)$":function(){x={width:g.width,height:g.height},m.create(),m.update(),e.reposition()},"^content.title.text|style.(classes|widget)$":function(){b.tip&&b.tip.length&&m.update()}},r.extend(m,{init:function(){var e=M()&&(q||E.ie);return e&&(m.create(),m.update(),w.unbind(I).bind("tooltipmove"+I,O)),e},create:function(){var e=x.width,t=x.height,n;b.tip&&b.tip.remove(),b.tip=r("<div />",{"class":"qtip-tip"}).css({width:e,height:t}).prependTo(w),q?r("<canvas />").appendTo(b.tip)[0].getContext("2d").save():(n=B("shape",'coordorigin="0,0"',"position:absolute;"),b.tip.html(n+n),r("*",b.tip).bind("click"+I+" mousedown"+I,function(e){e.stopPropagation()}))},update:function(e,t){var n=b.tip,f=n.children(),l=x.width,y=x.height,C=g.mimic,k=Math.round,O,M,D,j,F;e||(e=S.corner||m.corner),C===s?C=e:(C=new E.Corner(C),C.precedance=e.precedance,C.x==="inherit"?C.x=e.x:C.y==="inherit"?C.y=e.y:C.x===C.y&&(C[e.precedance]=e[e.precedance])),O=C.precedance,e.precedance===u?L():A(),b.tip.css({width:l=x.width,height:y=x.height}),P(e),T.border!=="transparent"?(N=_(e,o),g.border===0&&N>0&&(T.fill=T.border),m.border=N=g.border!==i?g.border:N):m.border=N=0,D=R(C,l,y),m.size=F=H(e),n.css(F).css("line-height",F.height+"px"),e.precedance===a?j=[k(C.x===h?N:C.x===d?F.width-l-N:(F.width-l)/2),k(C.y===c?F.height-y:0)]:j=[k(C.x===h?F.width-l:0),k(C.y===c?N:C.y===p?F.height-y-N:(F.height-y)/2)],q?(f.attr(F),M=f[0].getContext("2d"),M.restore(),M.save(),M.clearRect(0,0,3e3,3e3),M.fillStyle=T.fill,M.strokeStyle=T.border,M.lineWidth=N*2,M.lineJoin="miter",M.miterLimit=100,M.translate(j[0],j[1]),M.beginPath(),M.moveTo(D[0][0],D[0][1]),M.lineTo(D[1][0],D[1][1]),M.lineTo(D[2][0],D[2][1]),M.closePath(),N&&(w.css("background-clip")==="border-box"&&(M.strokeStyle=T.fill,M.stroke()),M.strokeStyle=T.border,M.stroke()),M.fill()):(D="m"+D[0][0]+","+D[0][1]+" l"+D[1][0]+","+D[1][1]+" "+D[2][0]+","+D[2][1]+" xe",j[2]=N&&/^(r|b)/i.test(e.string())?E.ie===8?2:1:0,f.css({coordsize:l+N+" "+(y+N),antialias:""+(C.string().indexOf(v)>-1),left:j[0],top:j[1],width:l+N,height:y+N}).each(function(e){var t=r(this);t[t.prop?"prop":"attr"]({coordsize:l+N+" "+(y+N),path:D,fillcolor:T.fill,filled:!!e,stroked:!e}).toggle(!!N||!!e),!e&&t.html()===""&&t.html(B("stroke",'weight="'+N*2+'px" color="'+T.border+'" miterlimit="1000" joinstyle="miter"'))})),setTimeout(function(){b.tip.css({display:"inline-block",visibility:"visible"})},1),t!==s&&m.position(e)},position:function(e){var t=b.tip,n={},i=Math.max(0,g.offset),o,p,d;return g.corner===s||!t?s:(e=e||m.corner,o=e.precedance,p=H(e),d=[e.x,e.y],o===u&&d.reverse(),r.each(d,function(t,r){var s,u,d;r===v?(s=o===a?h:c,n[s]="50%",n["margin-"+s]=-Math.round(p[o===a?f:l]/2)+i):(s=_(e,r),u=_(e,r,b.content),d=D(e),n[r]=t?u:i+(d>s?d:-s))}),n[e[o]]-=p[o===u?f:l],t.css({top:"",bottom:"",left:"",right:"",margin:""}).css(n),n)},destroy:function(){w.unbind(I),b.tip&&b.tip.find("*").remove().end().remove(),delete m.corner,delete m.mimic,delete m.size}}),m.init()}var i=!0,s=!1,o=null,u="x",a="y",f="width",l="height",c="top",h="left",p="bottom",d="right",v="center",m="flip",g="flipinvert",y="shift",b="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",w,E,S,x="qtip",T="data-hasqtip",N={},C=["ui-widget","ui-tooltip"],k="div.qtip."+x,L=x+"-default",A=x+"-focus",O=x+"-hover",M="_replacedByqTip",_="oldtitle",D;w=r.fn.qtip=function(e,t,u){var a=(""+e).toLowerCase(),f=o,l=r.makeArray(arguments).slice(1),c=l[l.length-1],h=this[0]?r.data(this[0],"qtip"):o;if(!arguments.length&&h||a==="api")return h;if("string"==typeof e)return this.each(function(){var e=r.data(this,"qtip");if(!e)return i;c&&c.timeStamp&&(e.cache.event=c);if(a!=="option"&&a!=="options"||!t)e[a]&&e[a].apply(e[a],l);else{if(!r.isPlainObject(t)&&u===n)return f=e.get(t),s;e.set(t,u)}}),f!==o?f:this;if("object"==typeof e||!arguments.length)return h=H(r.extend(i,{},e)),w.bind.call(this,h,c)},w.bind=function(e,t){return this.each(function(o){function p(e){function t(){c.render(typeof e=="object"||u.show.ready),a.show.add(a.hide).unbind(l)}if(c.cache.disabled)return s;c.cache.event=r.extend({},e),c.cache.target=e?r(e.target):[n],u.show.delay>0?(clearTimeout(c.timers.show),c.timers.show=setTimeout(t,u.show.delay),f.show!==f.hide&&a.hide.bind(f.hide,function(){clearTimeout(c.timers.show)})):t()}var u,a,f,l,c,h;h=r.isArray(e.id)?e.id[o]:e.id,h=!h||h===s||h.length<1||N[h]?w.nextid++:N[h]=h,l=".qtip-"+h+"-create",c=j(r(this),h,e);if(c===s)return i;u=c.options,r.each(E,function(){this.initialize==="initialize"&&this(c)}),a={show:u.show.target,hide:u.hide.target},f={show:r.trim(""+u.show.event).replace(/ /g,l+" ")+l,hide:r.trim(""+u.hide.event).replace(/ /g,l+" ")+l},/mouse(over|enter)/i.test(f.show)&&!/mouse(out|leave)/i.test(f.hide)&&(f.hide+=" mouseleave"+l),a.show.bind("mousemove"+l,function(e){P(e),c.cache.onTarget=i}),a.show.bind(f.show,p),(u.show.ready||u.prerender)&&p(t)})},E=w.plugins={Corner:function(e){e=(""+e).replace(/([A-Z])/," $1").replace(/middle/gi,v).toLowerCase(),this.x=(e.match(/left|right/i)||e.match(/center/)||["inherit"])[0].toLowerCase(),this.y=(e.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase();var t=e.charAt(0);this.precedance=t==="t"||t==="b"?a:u,this.string=function(){return this.precedance===a?this.y+this.x:this.x+this.y},this.abbrev=function(){var e=this.x.substr(0,1),t=this.y.substr(0,1);return e===t?e:this.precedance===a?t+e:e+t},this.invertx=function(e){this.x=this.x===h?d:this.x===d?h:e||this.x},this.inverty=function(e){this.y=this.y===c?p:this.y===p?c:e||this.y},this.clone=function(){return{x:this.x,y:this.y,precedance:this.precedance,string:this.string,abbrev:this.abbrev,clone:this.clone,invertx:this.invertx,inverty:this.inverty}}},offset:function(e,n,i){function c(e,t){n.left+=t*e.scrollLeft(),n.top+=t*e.scrollTop()}var s=e.closest("body"),o=E.ie&&t.compatMode!=="CSS1Compat",u=i,a,f,l;if(u){do u.css("position")!=="static"&&(f=u.position(),n.left-=f.left+(parseInt(u.css("borderLeftWidth"),10)||0)+(parseInt(u.css("marginLeft"),10)||0),n.top-=f.top+(parseInt(u.css("borderTopWidth"),10)||0)+(parseInt(u.css("marginTop"),10)||0),!a&&(l=u.css("overflow"))!=="hidden"&&l!=="visible"&&(a=u));while((u=r(u[0].offsetParent)).length);(a&&a[0]!==s[0]||o)&&c(a||s,1)}return n},ie:function(){var e=3,n=t.createElement("div");while(n.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->")if(!n.getElementsByTagName("i")[0])break;return e>4?e:s}(),iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||s,fn:{attr:function(e,t){if(this.length){var n=this[0],i="title",s=r.data(n,"qtip");if(e===i&&s&&"object"==typeof s&&s.options.suppress)return arguments.length<2?r.attr(n,_):(s&&s.options.content.attr===i&&s.cache.attr&&s.set("content.text",t),this.attr(_,t))}return r.fn["attr"+M].apply(this,arguments)},clone:function(e){var t=r([]),n="title",i=r.fn["clone"+M].apply(this,arguments);return e||i.filter("["+_+"]").attr("title",function(){return r.attr(this,_)}).removeAttr(_),i}}},r.each(E.fn,function(e,t){if(!t||r.fn[e+M])return i;var n=r.fn[e+M]=r.fn[e];r.fn[e]=function(){return t.apply(this,arguments)||n.apply(this,arguments)}}),r.ui||(r["cleanData"+M]=r.cleanData,r.cleanData=function(e){for(var t=0,n;(n=r(e[t])).length&&n.attr(T);t++)try{n.triggerHandler("removeqtip")}catch(i){}r["cleanData"+M](e)}),w.version="2.0.1-36-",w.nextid=0,w.inactiveEvents="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),w.zindex=15e3,w.defaults={prerender:s,id:s,overwrite:i,suppress:i,content:{text:i,attr:"title",deferred:s,title:{text:s,button:s}},position:{my:"top left",at:"bottom right",target:s,container:s,viewport:s,adjust:{x:0,y:0,mouse:i,scroll:i,resize:i,method:"flipinvert flipinvert"},effect:function(e,t,n){r(this).animate(t,{duration:200,queue:s})}},show:{target:s,event:"mouseenter",effect:i,delay:90,solo:s,ready:s,autofocus:s},hide:{target:s,event:"mouseleave",effect:i,delay:0,fixed:s,inactive:s,leave:"window",distance:s},style:{classes:"",widget:s,width:s,height:s,def:i},events:{render:o,move:o,show:o,hide:o,toggle:o,visible:o,hidden:o,focus:o,blur:o}};var F,I=".qtip-tip",q=!!t.createElement("canvas").getContext;F=E.tip=function(e){var t=e.plugins.tip;return"object"==typeof t?t:e.plugins.tip=new U(e)},F.initialize="render",F.sanitize=function(e){var t=e.style,n;t&&"tip"in t&&(n=e.style.tip,typeof n!="object"&&(e.style.tip={corner:n}),/string|boolean/i.test(typeof n.corner)||(n.corner=i),typeof n.width!="number"&&delete n.width,typeof n.height!="number"&&delete n.height,typeof n.border!="number"&&n.border!==i&&delete n.border,typeof n.offset!="number"&&delete n.offset)},r.extend(i,w.defaults,{style:{tip:{corner:i,mimic:s,width:6,height:6,border:i,offset:0}}})})})(window,document);;

/* uniform: (https://5b9732f9943c7.t73.qifeiye.com/qfy-content/plugins/qfy_form/js/uniform/jquery.uniform.min.js) */
/* Uniform v2.1.2 Copyright © 2009 Josh Pyles / Pixelmatrix Design LLC http://pixelmatrixdesign.com https://github.com/uniform */
!function(a,b,c){"use strict";function d(a){var b=Array.prototype.slice.call(arguments,1);return a.prop?a.prop.apply(a,b):a.attr.apply(a,b)}function e(a,b,c){var d,e;for(d in c)c.hasOwnProperty(d)&&(e=d.replace(/ |$/g,b.eventNamespace),a.bind(e,c[d]))}function f(a,b,c){e(a,c,{focus:function(){b.addClass(c.focusClass)},blur:function(){b.removeClass(c.focusClass),b.removeClass(c.activeClass)},mouseenter:function(){b.addClass(c.hoverClass)},mouseleave:function(){b.removeClass(c.hoverClass),b.removeClass(c.activeClass)},"mousedown touchbegin":function(){a.is(":disabled")||b.addClass(c.activeClass)},"mouseup touchend":function(){b.removeClass(c.activeClass)}})}function g(a,b){a.removeClass(b.hoverClass+" "+b.focusClass+" "+b.activeClass)}function h(a,b,c){c?a.addClass(b):a.removeClass(b)}function i(a,b,c){var d="checked",e=b.is(":"+d);b.prop?b.prop(d,e):e?b.attr(d,d):b.removeAttr(d),h(a,c.checkedClass,e)}function j(a,b,c){h(a,c.disabledClass,b.is(":disabled"))}function k(a,b,c){switch(c){case"after":return a.after(b),a.next();case"before":return a.before(b),a.prev();case"wrap":return a.wrap(b),a.parent()}return null}function l(a,c,e){var f,g,h;return e||(e={}),e=b.extend({bind:{},divClass:null,divWrap:"wrap",spanClass:null,spanHtml:null,spanWrap:"wrap"},e),f=b("<div />"),g=b("<span />"),c.autoHide&&a.is(":hidden")&&"none"===a.css("display")&&f.hide(),e.divClass&&f.addClass(e.divClass),c.wrapperClass&&f.addClass(c.wrapperClass),e.spanClass&&g.addClass(e.spanClass),h=d(a,"id"),c.useID&&h&&d(f,"id",c.idPrefix+"-"+h),e.spanHtml&&g.html(e.spanHtml),f=k(a,f,e.divWrap),g=k(a,g,e.spanWrap),j(f,a,c),{div:f,span:g}}function m(a,c){var d;return c.wrapperClass?(d=b("<span />").addClass(c.wrapperClass),d=k(a,d,"wrap")):null}function n(){var c,d,e,f;return f="rgb(120,2,153)",d=b('<div style="width:0;height:0;color:'+f+'">'),b("body").append(d),e=d.get(0),c=a.getComputedStyle?a.getComputedStyle(e,"").color:(e.currentStyle||e.style||{}).color,d.remove(),c.replace(/ /g,"")!==f}function o(a){return a?b("<span />").text(a).html():""}function p(){return navigator.cpuClass&&!navigator.product}function q(){return void 0!==a.XMLHttpRequest?!0:!1}function r(a){var b;return a[0].multiple?!0:(b=d(a,"size"),!b||1>=b?!1:!0)}function s(){return!1}function t(a,b){var c="none";e(a,b,{"selectstart dragstart mousedown":s}),a.css({MozUserSelect:c,msUserSelect:c,webkitUserSelect:c,userSelect:c})}function u(a,b,c){var d=a.val();""===d?d=c.fileDefaultHtml:(d=d.split(/[\/\\]+/),d=d[d.length-1]),b.text(d)}function v(a,b,c){var d,e;for(d=[],a.each(function(){var a;for(a in b)Object.prototype.hasOwnProperty.call(b,a)&&(d.push({el:this,name:a,old:this.style[a]}),this.style[a]=b[a])}),c();d.length;)e=d.pop(),e.el.style[e.name]=e.old}function w(a,b){var c;c=a.parents(),c.push(a[0]),c=c.not(":visible"),v(c,{visibility:"hidden",display:"block",position:"absolute"},b)}function x(a,b){return function(){a.unwrap().unwrap().unbind(b.eventNamespace)}}var y=!0,z=!1,A=[{match:function(a){return a.is("a, button, :submit, :reset, input[type='button']")},apply:function(b,c){var h,i,k,m,n;return i=c.submitDefaultHtml,b.is(":reset")&&(i=c.resetDefaultHtml),m=b.is("a, button")?function(){return b.html()||i}:function(){return o(d(b,"value"))||i},k=l(b,c,{divClass:c.buttonClass,spanHtml:m()}),h=k.div,f(b,h,c),n=!1,e(h,c,{"click touchend":function(){var c,e,f,g;n||b.is(":disabled")||(n=!0,b[0].dispatchEvent?(c=document.createEvent("MouseEvents"),c.initEvent("click",!0,!0),e=b[0].dispatchEvent(c),b.is("a")&&e&&(f=d(b,"target"),g=d(b,"href"),f&&"_self"!==f?a.open(g,f):document.location.href=g)):b.click(),n=!1)}}),t(h,c),{remove:function(){return h.after(b),h.remove(),b.unbind(c.eventNamespace),b},update:function(){g(h,c),j(h,b,c),b.detach(),k.span.html(m()).append(b)}}}},{match:function(a){return a.is(":checkbox")},apply:function(a,b){var c,d,h;return c=l(a,b,{divClass:b.checkboxClass}),d=c.div,h=c.span,f(a,d,b),e(a,b,{"click touchend":function(){i(h,a,b)}}),i(h,a,b),{remove:x(a,b),update:function(){g(d,b),h.removeClass(b.checkedClass),i(h,a,b),j(d,a,b)}}}},{match:function(a){return a.is(":file")},apply:function(a,c){function o(){u(a,m,c)}var h,i,m,n;return h=l(a,c,{divClass:c.fileClass,spanClass:c.fileButtonClass,spanHtml:c.fileButtonHtml,spanWrap:"after"}),i=h.div,n=h.span,m=b("<span />").html(c.fileDefaultHtml),m.addClass(c.filenameClass),m=k(a,m,"after"),d(a,"size")||d(a,"size",i.width()/10),f(a,i,c),o(),p()?e(a,c,{click:function(){a.trigger("change"),setTimeout(o,0)}}):e(a,c,{change:o}),t(m,c),t(n,c),{remove:function(){return m.remove(),n.remove(),a.unwrap().unbind(c.eventNamespace)},update:function(){g(i,c),u(a,m,c),j(i,a,c)}}}},{match:function(a){if(a.is("input")){var b=(" "+d(a,"type")+" ").toLowerCase(),c=" color date datetime datetime-local email month number password search tel text time url week ";return c.indexOf(b)>=0}return!1},apply:function(a,b){var c,e;return c=d(a,"type"),a.addClass(b.inputClass),e=m(a,b),f(a,a,b),b.inputAddTypeAsClass&&a.addClass(c),{remove:function(){a.removeClass(b.inputClass),b.inputAddTypeAsClass&&a.removeClass(c),e&&a.unwrap()},update:s}}},{match:function(a){return a.is(":radio")},apply:function(a,c){var h,k,m;return h=l(a,c,{divClass:c.radioClass}),k=h.div,m=h.span,f(a,k,c),e(a,c,{"click touchend":function(){b.uniform.update(b(':radio[name="'+d(a,"name")+'"]'))}}),i(m,a,c),{remove:x(a,c),update:function(){g(k,c),i(m,a,c),j(k,a,c)}}}},{match:function(a){return a.is("select")&&!r(a)?!0:!1},apply:function(a,c){var d,h,i,k;return c.selectAutoWidth&&w(a,function(){k=a.width()}),d=l(a,c,{divClass:c.selectClass,spanHtml:(a.find(":selected:first")||a.find("option:first")).html(),spanWrap:"before"}),h=d.div,i=d.span,c.selectAutoWidth?w(a,function(){v(b([i[0],h[0]]),{display:"block"},function(){var a;a=i.outerWidth()-i.width(),h.width(k+a),i.width(k)})}):h.addClass("fixedWidth"),f(a,h,c),e(a,c,{change:function(){i.html(a.find(":selected").html()),h.removeClass(c.activeClass)},"click touchend":function(){var b=a.find(":selected").html();i.html()!==b&&a.trigger("change")},keyup:function(){i.html(a.find(":selected").html())}}),t(i,c),{remove:function(){return i.remove(),a.unwrap().unbind(c.eventNamespace),a},update:function(){c.selectAutoWidth?(b.uniform.restore(a),a.uniform(c)):(g(h,c),a[0].selectedIndex=a[0].selectedIndex,i.html(a.find(":selected").html()),j(h,a,c))}}}},{match:function(a){return a.is("select")&&r(a)?!0:!1},apply:function(a,b){var c;return a.addClass(b.selectMultiClass),c=m(a,b),f(a,a,b),{remove:function(){a.removeClass(b.selectMultiClass),c&&a.unwrap()},update:s}}},{match:function(a){return a.is("textarea")},apply:function(a,b){var c;return a.addClass(b.textareaClass),c=m(a,b),f(a,a,b),{remove:function(){a.removeClass(b.textareaClass),c&&a.unwrap()},update:s}}}];p()&&!q()&&(y=!1),b.uniform={defaults:{activeClass:"active",autoHide:!0,buttonClass:"button",checkboxClass:"checker",checkedClass:"checked",disabledClass:"disabled",eventNamespace:".uniform",fileButtonClass:"action",fileButtonHtml:"Choose File",fileClass:"uploader",fileDefaultHtml:"No file selected",filenameClass:"filename",focusClass:"focus",hoverClass:"hover",idPrefix:"uniform",inputAddTypeAsClass:!0,inputClass:"uniform-input",radioClass:"radio",resetDefaultHtml:"Reset",resetSelector:!1,selectAutoWidth:!0,selectClass:"selector",selectMultiClass:"uniform-multiselect",submitDefaultHtml:"Submit",textareaClass:"uniform",useID:!0,wrapperClass:null},elements:[]},b.fn.uniform=function(c){var d=this;return c=b.extend({},b.uniform.defaults,c),z||(z=!0,n()&&(y=!1)),y?(c.resetSelector&&b(c.resetSelector).mouseup(function(){a.setTimeout(function(){b.uniform.update(d)},10)}),this.each(function(){var d,e,f,a=b(this);if(a.data("uniformed"))return b.uniform.update(a),void 0;for(d=0;d<A.length;d+=1)if(e=A[d],e.match(a,c))return f=e.apply(a,c),a.data("uniformed",f),b.uniform.elements.push(a.get(0)),void 0})):this},b.uniform.restore=b.fn.uniform.restore=function(a){a===c&&(a=b.uniform.elements),b(a).each(function(){var c,d,a=b(this);d=a.data("uniformed"),d&&(d.remove(),c=b.inArray(this,b.uniform.elements),c>=0&&b.uniform.elements.splice(c,1),a.removeData("uniformed"))})},b.uniform.update=b.fn.uniform.update=function(a){a===c&&(a=b.uniform.elements),b(a).each(function(){var c,a=b(this);c=a.data("uniformed"),c&&c.update(a,c.options)})}}(this,jQuery);;

/* infield-label: (https://5b9732f9943c7.t73.qifeiye.com/qfy-content/plugins/qfy_form/js/jquery.infieldlabel.min.js) */
/*
 In-Field Label jQuery Plugin
 http://fuelyourcoding.com/scripts/infield.html

 Copyright (c) 2009 Doug Neiner
 Dual licensed under the MIT and GPL licenses.
 Uses the same license as jQuery, see:
 http://docs.jquery.com/License

*/
(function(d){d.InFieldLabels=function(e,b,f){var a=this;a.$label=d(e);a.label=e;a.$field=d(b);a.field=b;a.$label.data("InFieldLabels",a);a.showing=true;a.init=function(){a.options=d.extend({},d.InFieldLabels.defaultOptions,f);if(a.$field.val()!==""){a.$label.hide();a.showing=false}a.$field.focus(function(){a.fadeOnFocus()}).blur(function(){a.checkForEmpty(true)}).bind("keydown.infieldlabel",function(c){a.hideOnChange(c)}).bind("paste",function(){a.setOpacity(0)}).change(function(){a.checkForEmpty()}).bind("onPropertyChange",
function(){a.checkForEmpty()})};a.fadeOnFocus=function(){a.showing&&a.setOpacity(a.options.fadeOpacity)};a.setOpacity=function(c){a.$label.stop().animate({opacity:c},a.options.fadeDuration);a.showing=c>0};a.checkForEmpty=function(c){if(a.$field.val()===""){a.prepForShow();a.setOpacity(c?1:a.options.fadeOpacity)}else a.setOpacity(0)};a.prepForShow=function(){if(!a.showing){a.$label.css({opacity:0}).show();a.$field.bind("keydown.infieldlabel",function(c){a.hideOnChange(c)})}};a.hideOnChange=function(c){if(!(c.keyCode===
16||c.keyCode===9)){if(a.showing){a.$label.hide();a.showing=false}a.$field.unbind("keydown.infieldlabel")}};a.init()};d.InFieldLabels.defaultOptions={fadeOpacity:0.5,fadeDuration:300};d.fn.inFieldLabels=function(e){return this.each(function(){var b=d(this).attr("for");if(b){b=d("input#"+b+"[type='text'],input#"+b+"[type='search'],input#"+b+"[type='tel'],input#"+b+"[type='url'],input#"+b+"[type='email'],input#"+b+"[type='password'],textarea#"+b);b.length!==0&&new d.InFieldLabels(this,b[0],e)}})}})(jQuery);
;

