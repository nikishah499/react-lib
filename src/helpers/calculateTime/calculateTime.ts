import moment from "moment";
import { TimeParams } from './calculateTimeProps.types';

function calculateTime(currentTime: string, params: TimeParams): string {
  const currentISTTime = currentTime;

  console.log("start", params.start_time, "current", currentISTTime);

  const { start_time, working_start_time, working_end_time, working_days } =
    params;

  const startTime = moment(start_time);
  const currentTimeMoment = moment();
  const workingStartTime = moment(working_start_time, "HH:mm");
  const workingEndTime = moment(working_end_time, "HH:mm");

  let totalTime = 0;

  const tempTime = startTime.clone();
  while (tempTime.isBefore(currentTimeMoment)) {
    let weekendDays: number[] = [0, 6]; // For 5 working days, consider only Saturday and Sunday as holidays, 6: Saturday, 0: Sunday
    if (working_days === 4) {
      // For 4 working days, consider Friday as holiday
      weekendDays.push(5) // 5: Friday
    }

    const isWeekend = weekendDays.includes(tempTime.day());

    const isWorkingHours = tempTime.isBetween(
      tempTime.clone().set({
        hour: workingStartTime.hour(),
        minute: workingStartTime.minute(),
      }),
      tempTime
        .clone()
        .set({ hour: workingEndTime.hour(), minute: workingEndTime.minute() }),
      "hours",
      "[)"
    );

    if (!isWeekend && isWorkingHours) {
      totalTime += 1;
    }

    tempTime.add(1, "hour");
  }

  const totalShiftWorkingHours = workingEndTime.diff(workingStartTime, "hours");
  const days = Math.floor(totalTime / totalShiftWorkingHours);
  console.log("totalTime", totalTime);
  const hours = totalTime % totalShiftWorkingHours;

  return `${days}d ${hours}h`;
}

// =====================================================================================================

export default calculateTime;