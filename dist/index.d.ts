interface TimeParams {
    start_time: string;
    working_start_time: string;
    working_end_time: string;
    working_days: number;
}

declare function calculateTime(currentTime: string, params: TimeParams): string;

declare namespace calculateTime_d {
  export {
    calculateTime as default,
  };
}

declare namespace index_d$1 {
  export {
    calculateTime_d as calculateTime,
  };
}

declare function healthCheck(): void;

declare namespace healthCheck_d {
  export {
    healthCheck as default,
  };
}

declare namespace index_d {
  export {
    healthCheck_d as healthCheck,
  };
}

declare function formatTime(time: string, format: string): string;

export { index_d$1 as calculateTime, formatTime, index_d as healthCheck };
