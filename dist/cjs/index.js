"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("moment"));var o=Object.freeze({__proto__:null,default:function(e,o){var r=e;console.log("start",o.start_time,"current",r);for(var u=o.start_time,a=o.working_start_time,n=o.working_end_time,l=o.working_days,c=t.default(u),i=t.default(),s=t.default(a,"HH:mm"),f=t.default(n,"HH:mm"),d=0,_=c.clone();_.isBefore(i);){var h=[0,6];4===l&&h.push(5);var m=h.includes(_.day()),v=_.isBetween(_.clone().set({hour:s.hour(),minute:s.minute()}),_.clone().set({hour:f.hour(),minute:f.minute()}),"hours","[)");!m&&v&&(d+=1),_.add(1,"hour")}var p=f.diff(s,"hours"),g=Math.floor(d/p);console.log("totalTime",d);var k=d%p;return"".concat(g,"d ").concat(k,"h")}});var r=Object.freeze({__proto__:null,default:function(){console.log("healthCheck")}});exports.calculateTime=o,exports.healthCheck=r;
//# sourceMappingURL=index.js.map
