import o from"moment";function t(t,r){var e=t;console.log("start",r.start_time,"current",e);for(var n=r.start_time,i=r.working_start_time,a=r.working_end_time,u=r.working_days,m=o(n),c=o(),s=o(i,"HH:mm"),h=o(a,"HH:mm"),l=0,f=m.clone();f.isBefore(c);){var d=[0,6];4===u&&d.push(5);var _=d.includes(f.day()),g=f.isBetween(f.clone().set({hour:s.hour(),minute:s.minute()}),f.clone().set({hour:h.hour(),minute:h.minute()}),"hours","[)");!_&&g&&(l+=1),f.add(1,"hour")}var v=h.diff(s,"hours"),k=Math.floor(l/v);console.log("totalTime",l);var w=l%v;return"".concat(k,"d ").concat(w,"h")}function r(){console.log("healthCheck")}function e(t,r){return o(t).format(r)}export{t as calculateTime,e as formatTime,r as healthCheck};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWxwZXJzL2NhbGN1bGF0ZVRpbWUvY2FsY3VsYXRlVGltZS50cyIsIi4uLy4uLy4uL3NyYy9oZWxwZXJzL2hlYWx0aENoZWNrL2hlYWx0aENoZWNrLnRzIiwiLi4vLi4vLi4vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm5hbWVzIjpbImNhbGN1bGF0ZVRpbWUiLCJjdXJyZW50VGltZSIsInBhcmFtcyIsImN1cnJlbnRJU1RUaW1lIiwiY29uc29sZSIsImxvZyIsInN0YXJ0X3RpbWUiLCJ3b3JraW5nX3N0YXJ0X3RpbWUiLCJ3b3JraW5nX2VuZF90aW1lIiwid29ya2luZ19kYXlzIiwic3RhcnRUaW1lIiwibW9tZW50IiwiY3VycmVudFRpbWVNb21lbnQiLCJ3b3JraW5nU3RhcnRUaW1lIiwid29ya2luZ0VuZFRpbWUiLCJ0b3RhbFRpbWUiLCJ0ZW1wVGltZSIsImNsb25lIiwiaXNCZWZvcmUiLCJ3ZWVrZW5kRGF5cyIsInB1c2giLCJpc1dlZWtlbmQiLCJpbmNsdWRlcyIsImRheSIsImlzV29ya2luZ0hvdXJzIiwiaXNCZXR3ZWVuIiwic2V0IiwiaG91ciIsIm1pbnV0ZSIsImFkZCIsInRvdGFsU2hpZnRXb3JraW5nSG91cnMiLCJkaWZmIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwiY29uY2F0IiwiaGVhbHRoQ2hlY2siLCJmb3JtYXRUaW1lIiwidGltZSIsImZvcm1hdCJdLCJtYXBwaW5ncyI6InNCQUdnQixTQUFBQSxFQUFjQyxFQUFxQkMsR0FDakQsSUFBTUMsRUFBaUJGLEVBRXZCRyxRQUFRQyxJQUFJLFFBQVNILEVBQU9JLFdBQVksVUFBV0gsR0FhbkQsSUFYUSxJQUFBRyxFQUNOSixhQURrQkssRUFDbEJMLEVBQU1LLG1CQURnQ0MsRUFDdENOLEVBRHNETSxpQkFBRUMsRUFDeERQLGVBRUlRLEVBQVlDLEVBQU9MLEdBQ25CTSxFQUFvQkQsSUFDcEJFLEVBQW1CRixFQUFPSixFQUFvQixTQUM5Q08sRUFBaUJILEVBQU9ILEVBQWtCLFNBRTVDTyxFQUFZLEVBRVZDLEVBQVdOLEVBQVVPLFFBQ3BCRCxFQUFTRSxTQUFTTixJQUFvQixDQUMzQyxJQUFJTyxFQUF3QixDQUFDLEVBQUcsR0FDWCxJQUFqQlYsR0FFRlUsRUFBWUMsS0FBSyxHQUduQixJQUFNQyxFQUFZRixFQUFZRyxTQUFTTixFQUFTTyxPQUUxQ0MsRUFBaUJSLEVBQVNTLFVBQzlCVCxFQUFTQyxRQUFRUyxJQUFJLENBQ25CQyxLQUFNZCxFQUFpQmMsT0FDdkJDLE9BQVFmLEVBQWlCZSxXQUUzQlosRUFDR0MsUUFDQVMsSUFBSSxDQUFFQyxLQUFNYixFQUFlYSxPQUFRQyxPQUFRZCxFQUFlYyxXQUM3RCxRQUNBLE9BR0dQLEdBQWFHLElBQ2hCVCxHQUFhLEdBR2ZDLEVBQVNhLElBQUksRUFBRyxPQUNqQixDQUVELElBQU1DLEVBQXlCaEIsRUFBZWlCLEtBQUtsQixFQUFrQixTQUMvRG1CLEVBQU9DLEtBQUtDLE1BQU1uQixFQUFZZSxHQUNwQzFCLFFBQVFDLElBQUksWUFBYVUsR0FDekIsSUFBTW9CLEVBQVFwQixFQUFZZSxFQUUxQixNQUFPLEdBQUdNLE9BQUFKLEVBQVMsTUFBQUksT0FBQUQsTUFDckIsVUNyRGdCRSxJQUNaakMsUUFBUUMsSUFBSSxjQUNoQixDQ0lnQixTQUFBaUMsRUFBV0MsRUFBY0MsR0FDckMsT0FBTzdCLEVBQU80QixHQUFNQyxPQUFPQSxFQUM3QiJ9
