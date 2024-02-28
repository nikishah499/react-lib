interface TimeParams {
    start_time: string;
    working_start_time: string;
    working_end_time: string;
    working_days: number;
}

declare function calculateTime(currentTime: string, params: TimeParams): string;

declare function healthCheck(): void;

declare function formatTime(time: string, format: string): string;

export { calculateTime, formatTime, healthCheck };
