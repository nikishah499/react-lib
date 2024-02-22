import { TimeParams } from './calculateTime/calculateTimeProps.types';
declare function calculateTime(currentTime: string, params: TimeParams): string;
declare function healthCheck(): void;
declare const _default: {
    healthCheck: typeof healthCheck;
    calculateTime: typeof calculateTime;
};
export default _default;
