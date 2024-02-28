"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("moment"));var r=Object.freeze({__proto__:null,default:function(e,r){var o=e;console.log("start",r.start_time,"current",o);for(var u=r.start_time,a=r.working_start_time,l=r.working_end_time,n=r.working_days,c=t.default(u),i=t.default(),f=t.default(a,"HH:mm"),_=t.default(l,"HH:mm"),s=0,m=c.clone();m.isBefore(i);){var d=[0,6];4===n&&d.push(5);var h=d.includes(m.day()),p=m.isBetween(m.clone().set({hour:f.hour(),minute:f.minute()}),m.clone().set({hour:_.hour(),minute:_.minute()}),"hours","[)");!h&&p&&(s+=1),m.add(1,"hour")}var v=_.diff(f,"hours"),b=Math.floor(s/v);console.log("totalTime",s);var g=s%v;return"".concat(b,"d ").concat(g,"h")}}),o=Object.freeze({__proto__:null,calculateTime:r});var u=Object.freeze({__proto__:null,default:function(){console.log("healthCheck")}}),a=Object.freeze({__proto__:null,healthCheck:u});exports.calculateTime=o,exports.formatTime=function(e,r){return t.default(e).format(r)},exports.healthCheck=a;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWxwZXJzL2NhbGN1bGF0ZVRpbWUvY2FsY3VsYXRlVGltZS50cyIsIi4uLy4uLy4uL3NyYy9oZWxwZXJzL2hlYWx0aENoZWNrL2hlYWx0aENoZWNrLnRzIiwiLi4vLi4vLi4vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm5hbWVzIjpbImN1cnJlbnRUaW1lIiwicGFyYW1zIiwiY3VycmVudElTVFRpbWUiLCJjb25zb2xlIiwibG9nIiwic3RhcnRfdGltZSIsIndvcmtpbmdfc3RhcnRfdGltZSIsIndvcmtpbmdfZW5kX3RpbWUiLCJ3b3JraW5nX2RheXMiLCJzdGFydFRpbWUiLCJtb21lbnQiLCJjdXJyZW50VGltZU1vbWVudCIsIndvcmtpbmdTdGFydFRpbWUiLCJ3b3JraW5nRW5kVGltZSIsInRvdGFsVGltZSIsInRlbXBUaW1lIiwiY2xvbmUiLCJpc0JlZm9yZSIsIndlZWtlbmREYXlzIiwicHVzaCIsImlzV2Vla2VuZCIsImluY2x1ZGVzIiwiZGF5IiwiaXNXb3JraW5nSG91cnMiLCJpc0JldHdlZW4iLCJzZXQiLCJob3VyIiwibWludXRlIiwiYWRkIiwidG90YWxTaGlmdFdvcmtpbmdIb3VycyIsImRpZmYiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJjb25jYXQiLCJ0aW1lIiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoibU5BR0EsU0FBdUJBLEVBQXFCQyxHQUMxQyxJQUFNQyxFQUFpQkYsRUFFdkJHLFFBQVFDLElBQUksUUFBU0gsRUFBT0ksV0FBWSxVQUFXSCxHQWFuRCxJQVhRLElBQUFHLEVBQ05KLGFBRGtCSyxFQUNsQkwsRUFBTUssbUJBRGdDQyxFQUN0Q04sRUFEc0RNLGlCQUFFQyxFQUN4RFAsZUFFSVEsRUFBWUMsVUFBT0wsR0FDbkJNLEVBQW9CRCxFQUFBQSxVQUNwQkUsRUFBbUJGLEVBQUFBLFFBQU9KLEVBQW9CLFNBQzlDTyxFQUFpQkgsRUFBQUEsUUFBT0gsRUFBa0IsU0FFNUNPLEVBQVksRUFFVkMsRUFBV04sRUFBVU8sUUFDcEJELEVBQVNFLFNBQVNOLElBQW9CLENBQzNDLElBQUlPLEVBQXdCLENBQUMsRUFBRyxHQUNYLElBQWpCVixHQUVGVSxFQUFZQyxLQUFLLEdBR25CLElBQU1DLEVBQVlGLEVBQVlHLFNBQVNOLEVBQVNPLE9BRTFDQyxFQUFpQlIsRUFBU1MsVUFDOUJULEVBQVNDLFFBQVFTLElBQUksQ0FDbkJDLEtBQU1kLEVBQWlCYyxPQUN2QkMsT0FBUWYsRUFBaUJlLFdBRTNCWixFQUNHQyxRQUNBUyxJQUFJLENBQUVDLEtBQU1iLEVBQWVhLE9BQVFDLE9BQVFkLEVBQWVjLFdBQzdELFFBQ0EsT0FHR1AsR0FBYUcsSUFDaEJULEdBQWEsR0FHZkMsRUFBU2EsSUFBSSxFQUFHLE9BQ2pCLENBRUQsSUFBTUMsRUFBeUJoQixFQUFlaUIsS0FBS2xCLEVBQWtCLFNBQy9EbUIsRUFBT0MsS0FBS0MsTUFBTW5CLEVBQVllLEdBQ3BDMUIsUUFBUUMsSUFBSSxZQUFhVSxHQUN6QixJQUFNb0IsRUFBUXBCLEVBQVllLEVBRTFCLE1BQU8sR0FBR00sT0FBQUosRUFBUyxNQUFBSSxPQUFBRCxNQUNyQixrR0NyREEsV0FDSS9CLFFBQVFDLElBQUksY0FDaEIsK0ZDRWdCLFNBQVdnQyxFQUFjQyxHQUNyQyxPQUFPM0IsRUFBTSxRQUFDMEIsR0FBTUMsT0FBT0EsRUFDN0IifQ==
