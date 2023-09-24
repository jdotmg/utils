import { SECOND, MINUTE, HOUR, DAY, WEEK } from "./constants/TimeStamp";

/**
 * 判断是不是非数字
 * @param val 值
 */
export const isNotNumber = (val: any): boolean => {
  return typeof val !== "number" || isNaN(val);
};

export { SECOND, MINUTE, HOUR, DAY, WEEK };
