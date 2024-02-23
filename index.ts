import moment from "moment";

export function formatTime(time: string, format: string) {
    return moment(time).format(format);
  }