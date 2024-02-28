import moment from "moment";
// export * as calculateTime from './src/helpers/calculateTime/calculateTime';
// export * as healthCheck from './src/helpers/healthCheck/healthCheck';
// export { calculateTime } from './src/helpers/calculateTime/calculateTime';
// export { healthCheck } from './src/helpers/healthCheck/healthCheck';


export function testFunction() {
  console.log('healthCheck qwqw');
}

export function formatTime(time: string, format: string) {
    return moment(time).format(format);
}