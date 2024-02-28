"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("moment"));exports.calculateTime=function(e,o){var r=e;console.log("start",o.start_time,"current",r);for(var n=o.start_time,u=o.working_start_time,a=o.working_end_time,i=o.working_days,l=t.default(n),c=t.default(),s=t.default(u,"HH:mm"),f=t.default(a,"HH:mm"),m=0,d=l.clone();d.isBefore(c);){var h=[0,6];4===i&&h.push(5);var _=h.includes(d.day()),v=d.isBetween(d.clone().set({hour:s.hour(),minute:s.minute()}),d.clone().set({hour:f.hour(),minute:f.minute()}),"hours","[)");!_&&v&&(m+=1),d.add(1,"hour")}var p=f.diff(s,"hours"),g=Math.floor(m/p);console.log("totalTime",m);var k=m%p;return"".concat(g,"d ").concat(k,"h")},exports.formatTime=function(e,o){return t.default(e).format(o)},exports.healthCheck=function(){console.log("healthCheck")};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWxwZXJzL2NhbGN1bGF0ZVRpbWUvY2FsY3VsYXRlVGltZS50cyIsIi4uLy4uLy4uL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibmFtZXMiOlsiY3VycmVudFRpbWUiLCJwYXJhbXMiLCJjdXJyZW50SVNUVGltZSIsImNvbnNvbGUiLCJsb2ciLCJzdGFydF90aW1lIiwid29ya2luZ19zdGFydF90aW1lIiwid29ya2luZ19lbmRfdGltZSIsIndvcmtpbmdfZGF5cyIsInN0YXJ0VGltZSIsIm1vbWVudCIsImN1cnJlbnRUaW1lTW9tZW50Iiwid29ya2luZ1N0YXJ0VGltZSIsIndvcmtpbmdFbmRUaW1lIiwidG90YWxUaW1lIiwidGVtcFRpbWUiLCJjbG9uZSIsImlzQmVmb3JlIiwid2Vla2VuZERheXMiLCJwdXNoIiwiaXNXZWVrZW5kIiwiaW5jbHVkZXMiLCJkYXkiLCJpc1dvcmtpbmdIb3VycyIsImlzQmV0d2VlbiIsInNldCIsImhvdXIiLCJtaW51dGUiLCJhZGQiLCJ0b3RhbFNoaWZ0V29ya2luZ0hvdXJzIiwiZGlmZiIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsImNvbmNhdCIsInRpbWUiLCJmb3JtYXQiXSwibWFwcGluZ3MiOiI2TEFHZ0IsU0FBY0EsRUFBcUJDLEdBQ2pELElBQU1DLEVBQWlCRixFQUV2QkcsUUFBUUMsSUFBSSxRQUFTSCxFQUFPSSxXQUFZLFVBQVdILEdBYW5ELElBWFEsSUFBQUcsRUFDTkosYUFEa0JLLEVBQ2xCTCxFQUFNSyxtQkFEZ0NDLEVBQ3RDTixFQURzRE0saUJBQUVDLEVBQ3hEUCxlQUVJUSxFQUFZQyxVQUFPTCxHQUNuQk0sRUFBb0JELEVBQUFBLFVBQ3BCRSxFQUFtQkYsRUFBQUEsUUFBT0osRUFBb0IsU0FDOUNPLEVBQWlCSCxFQUFBQSxRQUFPSCxFQUFrQixTQUU1Q08sRUFBWSxFQUVWQyxFQUFXTixFQUFVTyxRQUNwQkQsRUFBU0UsU0FBU04sSUFBb0IsQ0FDM0MsSUFBSU8sRUFBd0IsQ0FBQyxFQUFHLEdBQ1gsSUFBakJWLEdBRUZVLEVBQVlDLEtBQUssR0FHbkIsSUFBTUMsRUFBWUYsRUFBWUcsU0FBU04sRUFBU08sT0FFMUNDLEVBQWlCUixFQUFTUyxVQUM5QlQsRUFBU0MsUUFBUVMsSUFBSSxDQUNuQkMsS0FBTWQsRUFBaUJjLE9BQ3ZCQyxPQUFRZixFQUFpQmUsV0FFM0JaLEVBQ0dDLFFBQ0FTLElBQUksQ0FBRUMsS0FBTWIsRUFBZWEsT0FBUUMsT0FBUWQsRUFBZWMsV0FDN0QsUUFDQSxPQUdHUCxHQUFhRyxJQUNoQlQsR0FBYSxHQUdmQyxFQUFTYSxJQUFJLEVBQUcsT0FDakIsQ0FFRCxJQUFNQyxFQUF5QmhCLEVBQWVpQixLQUFLbEIsRUFBa0IsU0FDL0RtQixFQUFPQyxLQUFLQyxNQUFNbkIsRUFBWWUsR0FDcEMxQixRQUFRQyxJQUFJLFlBQWFVLEdBQ3pCLElBQU1vQixFQUFRcEIsRUFBWWUsRUFFMUIsTUFBTyxHQUFHTSxPQUFBSixFQUFTLE1BQUFJLE9BQUFELE1BQ3JCLHFCQy9DZ0IsU0FBV0UsRUFBY0MsR0FDckMsT0FBTzNCLEVBQU0sUUFBQzBCLEdBQU1DLE9BQU9BLEVBQzdCLGlDQUdFbEMsUUFBUUMsSUFBSSxjQUNoQiJ9
