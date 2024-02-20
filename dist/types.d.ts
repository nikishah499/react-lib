interface TimeParams {
    start_time: string;
    working_start_time: string;
    working_end_time: string;
    working_days: number;
}

declare function calculateTime(currentTime: string, params: TimeParams): string;

declare function healthCheck(): void;

declare const _default: {
    calculateTime: typeof calculateTime;
    healthCheck: typeof healthCheck;
};

declare namespace index {
  export { _default as default };
}

export { index as Helpers };
