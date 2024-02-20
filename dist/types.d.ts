interface TimeParams {
    start_time: string;
    working_start_time: string;
    working_end_time: string;
    working_days: number;
}

declare function calculateTime(currentTime: string, params: TimeParams): string;

declare const _default: {
    calculateTime: typeof calculateTime;
};

export { _default as default };
