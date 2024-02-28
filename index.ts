import moment from "moment";
export * as calculateTime from './src/helpers/calculateTime';
export * as healthCheck from './src/helpers/healthCheck';

export function formatTime(time: string, format: string) {
    return moment(time).format(format);
  }