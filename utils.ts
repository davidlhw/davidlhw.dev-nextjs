import config from 'config';
import { format, parse } from 'date-fns';

export const regex = {
  multipleWs: / +(?= )/g
}

export function openNewTab(url: string) {
  window.open(url, "_blank");
}

export function formatDate(dateString: string) {
  const date = parse(dateString, config.dateFormat.parse, new Date());
  return format(date, config.dateFormat.format);
}