interface TimeParams {
    start_time: string;
    working_start_time: string;
    working_end_time: string;
    working_days: number;
}

declare function calculateTime(currentTime: string, params: TimeParams): string;

declare const calculateTime_d_calculateTime: typeof calculateTime;
declare namespace calculateTime_d {
  export {
    calculateTime_d_calculateTime as calculateTime,
  };
}

declare function healthCheck(): void;

declare const healthCheck_d_healthCheck: typeof healthCheck;
declare namespace healthCheck_d {
  export {
    healthCheck_d_healthCheck as healthCheck,
  };
}

declare function formatTime(time: string, format: string): string;

export { calculateTime_d as calculateTime, formatTime, healthCheck_d as healthCheck };
