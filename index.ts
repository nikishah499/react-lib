import moment from "moment";
import helpers from "./src/index";

export function formatTime(time: string, format: string) {
    return moment(time).format(format);
  }

export default helpers;