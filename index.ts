import moment from "moment";
export * from './src/index';

export function formatTime(time: string, format: string) {
    return moment(time).format(format);
  }