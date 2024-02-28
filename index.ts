import moment from "moment";

export { calculateTime } from './src/helpers/calculateTime/calculateTime';
export { healthCheck } from './src/helpers/healthCheck/healthCheck';

export function formatTime(time: string, format: string) {
    return moment(time).format(format);
}