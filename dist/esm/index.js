import e from"moment";var t=Object.freeze({__proto__:null,default:function(t,o){var r=t;console.log("start",o.start_time,"current",r);for(var n=o.start_time,a=o.working_start_time,l=o.working_end_time,u=o.working_days,c=e(n),_=e(),i=e(a,"HH:mm"),m=e(l,"HH:mm"),h=0,s=c.clone();s.isBefore(_);){var f=[0,6];4===u&&f.push(5);var d=f.includes(s.day()),v=s.isBetween(s.clone().set({hour:i.hour(),minute:i.minute()}),s.clone().set({hour:m.hour(),minute:m.minute()}),"hours","[)");!d&&v&&(h+=1),s.add(1,"hour")}var p=m.diff(i,"hours"),g=Math.floor(h/p);console.log("totalTime",h);var k=h%p;return"".concat(g,"d ").concat(k,"h")}}),o=Object.freeze({__proto__:null,calculateTime:t});var r=Object.freeze({__proto__:null,default:function(){console.log("healthCheck")}}),n=Object.freeze({__proto__:null,healthCheck:r});function a(t,o){return e(t).format(o)}export{o as calculateTime,a as formatTime,n as healthCheck};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWxwZXJzL2NhbGN1bGF0ZVRpbWUvY2FsY3VsYXRlVGltZS50cyIsIi4uLy4uLy4uL3NyYy9oZWxwZXJzL2hlYWx0aENoZWNrL2hlYWx0aENoZWNrLnRzIiwiLi4vLi4vLi4vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm5hbWVzIjpbImN1cnJlbnRUaW1lIiwicGFyYW1zIiwiY3VycmVudElTVFRpbWUiLCJjb25zb2xlIiwibG9nIiwic3RhcnRfdGltZSIsIndvcmtpbmdfc3RhcnRfdGltZSIsIndvcmtpbmdfZW5kX3RpbWUiLCJ3b3JraW5nX2RheXMiLCJzdGFydFRpbWUiLCJtb21lbnQiLCJjdXJyZW50VGltZU1vbWVudCIsIndvcmtpbmdTdGFydFRpbWUiLCJ3b3JraW5nRW5kVGltZSIsInRvdGFsVGltZSIsInRlbXBUaW1lIiwiY2xvbmUiLCJpc0JlZm9yZSIsIndlZWtlbmREYXlzIiwicHVzaCIsImlzV2Vla2VuZCIsImluY2x1ZGVzIiwiZGF5IiwiaXNXb3JraW5nSG91cnMiLCJpc0JldHdlZW4iLCJzZXQiLCJob3VyIiwibWludXRlIiwiYWRkIiwidG90YWxTaGlmdFdvcmtpbmdIb3VycyIsImRpZmYiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJjb25jYXQiLCJmb3JtYXRUaW1lIiwidGltZSIsImZvcm1hdCJdLCJtYXBwaW5ncyI6ImtFQUdBLFNBQXVCQSxFQUFxQkMsR0FDMUMsSUFBTUMsRUFBaUJGLEVBRXZCRyxRQUFRQyxJQUFJLFFBQVNILEVBQU9JLFdBQVksVUFBV0gsR0FhbkQsSUFYUSxJQUFBRyxFQUNOSixhQURrQkssRUFDbEJMLEVBQU1LLG1CQURnQ0MsRUFDdENOLEVBRHNETSxpQkFBRUMsRUFDeERQLGVBRUlRLEVBQVlDLEVBQU9MLEdBQ25CTSxFQUFvQkQsSUFDcEJFLEVBQW1CRixFQUFPSixFQUFvQixTQUM5Q08sRUFBaUJILEVBQU9ILEVBQWtCLFNBRTVDTyxFQUFZLEVBRVZDLEVBQVdOLEVBQVVPLFFBQ3BCRCxFQUFTRSxTQUFTTixJQUFvQixDQUMzQyxJQUFJTyxFQUF3QixDQUFDLEVBQUcsR0FDWCxJQUFqQlYsR0FFRlUsRUFBWUMsS0FBSyxHQUduQixJQUFNQyxFQUFZRixFQUFZRyxTQUFTTixFQUFTTyxPQUUxQ0MsRUFBaUJSLEVBQVNTLFVBQzlCVCxFQUFTQyxRQUFRUyxJQUFJLENBQ25CQyxLQUFNZCxFQUFpQmMsT0FDdkJDLE9BQVFmLEVBQWlCZSxXQUUzQlosRUFDR0MsUUFDQVMsSUFBSSxDQUFFQyxLQUFNYixFQUFlYSxPQUFRQyxPQUFRZCxFQUFlYyxXQUM3RCxRQUNBLE9BR0dQLEdBQWFHLElBQ2hCVCxHQUFhLEdBR2ZDLEVBQVNhLElBQUksRUFBRyxPQUNqQixDQUVELElBQU1DLEVBQXlCaEIsRUFBZWlCLEtBQUtsQixFQUFrQixTQUMvRG1CLEVBQU9DLEtBQUtDLE1BQU1uQixFQUFZZSxHQUNwQzFCLFFBQVFDLElBQUksWUFBYVUsR0FDekIsSUFBTW9CLEVBQVFwQixFQUFZZSxFQUUxQixNQUFPLEdBQUdNLE9BQUFKLEVBQVMsTUFBQUksT0FBQUQsTUFDckIsa0dDckRBLFdBQ0kvQixRQUFRQyxJQUFJLGNBQ2hCLG9EQ0NnQixTQUFBZ0MsRUFBV0MsRUFBY0MsR0FDckMsT0FBTzVCLEVBQU8yQixHQUFNQyxPQUFPQSxFQUM3QiJ9
