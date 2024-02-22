interface TimeParams {
    start_time: string;
    working_start_time: string;
    working_end_time: string;
    working_days: number;
}

declare function calculateTime(currentTime: string, params: TimeParams): string;

declare namespace index_d$1 {
  export {
    calculateTime as default,
  };
}

declare function healthCheck(): void;

declare namespace index_d {
  export {
    healthCheck as default,
  };
}

export { index_d$1 as calculateTime, index_d as healthCheck };
