import e from"moment";var t={calculateTime:function(t,o){var r=t;console.log("start",o.start_time,"current",r);for(var n=o.start_time,a=o.working_start_time,u=o.working_end_time,i=o.working_days,c=e(n),l=e(),m=e(a,"HH:mm"),s=e(u,"HH:mm"),h=0,f=c.clone();f.isBefore(l);){var _=[0,6];4===i&&_.push(5);var d=_.includes(f.day()),v=f.isBetween(f.clone().set({hour:m.hour(),minute:m.minute()}),f.clone().set({hour:s.hour(),minute:s.minute()}),"hours","[)");!d&&v&&(h+=1),f.add(1,"hour")}var g=s.diff(m,"hours"),k=Math.floor(h/g);console.log("totalTime",h);var p=h%g;return"".concat(k,"d ").concat(p,"h")},healthCheck:function(){console.log("healthCheck")}},o=Object.freeze({__proto__:null,default:t});function r(t,o){return e(t).format(o)}export{r as formatTime,o as helpers};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbmRleC50cyIsIi4uLy4uLy4uL3NyYy9oZWxwZXJzL2NhbGN1bGF0ZVRpbWUvY2FsY3VsYXRlVGltZS50cyIsIi4uLy4uLy4uL3NyYy9oZWxwZXJzL2hlYWx0aENoZWNrL2hlYWx0aENoZWNrLnRzIiwiLi4vLi4vLi4vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibmFtZXMiOlsiaW5kZXgiLCJjYWxjdWxhdGVUaW1lIiwiY3VycmVudFRpbWUiLCJwYXJhbXMiLCJjdXJyZW50SVNUVGltZSIsImNvbnNvbGUiLCJsb2ciLCJzdGFydF90aW1lIiwid29ya2luZ19zdGFydF90aW1lIiwid29ya2luZ19lbmRfdGltZSIsIndvcmtpbmdfZGF5cyIsInN0YXJ0VGltZSIsIm1vbWVudCIsImN1cnJlbnRUaW1lTW9tZW50Iiwid29ya2luZ1N0YXJ0VGltZSIsIndvcmtpbmdFbmRUaW1lIiwidG90YWxUaW1lIiwidGVtcFRpbWUiLCJjbG9uZSIsImlzQmVmb3JlIiwid2Vla2VuZERheXMiLCJwdXNoIiwiaXNXZWVrZW5kIiwiaW5jbHVkZXMiLCJkYXkiLCJpc1dvcmtpbmdIb3VycyIsImlzQmV0d2VlbiIsInNldCIsImhvdXIiLCJtaW51dGUiLCJhZGQiLCJ0b3RhbFNoaWZ0V29ya2luZ0hvdXJzIiwiZGlmZiIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsImNvbmNhdCIsImhlYWx0aENoZWNrIiwiZm9ybWF0VGltZSIsInRpbWUiLCJmb3JtYXQiXSwibWFwcGluZ3MiOiJzQkFJQSxJQUFlQSxFQUFBLENBQ1hDLGNDRkosU0FBdUJDLEVBQXFCQyxHQUMxQyxJQUFNQyxFQUFpQkYsRUFFdkJHLFFBQVFDLElBQUksUUFBU0gsRUFBT0ksV0FBWSxVQUFXSCxHQWFuRCxJQVhRLElBQUFHLEVBQ05KLGFBRGtCSyxFQUNsQkwsRUFBTUssbUJBRGdDQyxFQUN0Q04sRUFEc0RNLGlCQUFFQyxFQUN4RFAsZUFFSVEsRUFBWUMsRUFBT0wsR0FDbkJNLEVBQW9CRCxJQUNwQkUsRUFBbUJGLEVBQU9KLEVBQW9CLFNBQzlDTyxFQUFpQkgsRUFBT0gsRUFBa0IsU0FFNUNPLEVBQVksRUFFVkMsRUFBV04sRUFBVU8sUUFDcEJELEVBQVNFLFNBQVNOLElBQW9CLENBQzNDLElBQUlPLEVBQXdCLENBQUMsRUFBRyxHQUNYLElBQWpCVixHQUVGVSxFQUFZQyxLQUFLLEdBR25CLElBQU1DLEVBQVlGLEVBQVlHLFNBQVNOLEVBQVNPLE9BRTFDQyxFQUFpQlIsRUFBU1MsVUFDOUJULEVBQVNDLFFBQVFTLElBQUksQ0FDbkJDLEtBQU1kLEVBQWlCYyxPQUN2QkMsT0FBUWYsRUFBaUJlLFdBRTNCWixFQUNHQyxRQUNBUyxJQUFJLENBQUVDLEtBQU1iLEVBQWVhLE9BQVFDLE9BQVFkLEVBQWVjLFdBQzdELFFBQ0EsT0FHR1AsR0FBYUcsSUFDaEJULEdBQWEsR0FHZkMsRUFBU2EsSUFBSSxFQUFHLE9BQ2pCLENBRUQsSUFBTUMsRUFBeUJoQixFQUFlaUIsS0FBS2xCLEVBQWtCLFNBQy9EbUIsRUFBT0MsS0FBS0MsTUFBTW5CLEVBQVllLEdBQ3BDMUIsUUFBUUMsSUFBSSxZQUFhVSxHQUN6QixJQUFNb0IsRUFBUXBCLEVBQVllLEVBRTFCLE1BQU8sR0FBR00sT0FBQUosRUFBUyxNQUFBSSxPQUFBRCxNQUNyQixFRC9DSUUsWUVOSixXQUNJakMsUUFBUUMsSUFBSSxjQUNoQiwrQ0NDZ0IsU0FBQWlDLEVBQVdDLEVBQWNDLEdBQ3JDLE9BQU83QixFQUFPNEIsR0FBTUMsT0FBT0EsRUFDN0IifQ==
