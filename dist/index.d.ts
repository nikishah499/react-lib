interface TimeParams {
    start_time: string;
    working_start_time: string;
    working_end_time: string;
    working_days: number;
}

declare function calculateTime(currentTime: string, params: TimeParams): string;

declare namespace index_d$2 {
  export {
    calculateTime as default,
  };
}

declare function healthCheck(): void;

declare namespace index_d$1 {
  export {
    healthCheck as default,
  };
}

declare namespace index_d {
  export {
    index_d$2 as calculateTime,
    index_d$1 as healthCheck,
  };
}

export { index_d as Helpers };
