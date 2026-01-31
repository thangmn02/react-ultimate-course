import { COLOR_PICKER } from "../configs/colorPicker";

export const getStatusColor = (status: string): string => {
  const colorMap: Record<string, string> = COLOR_PICKER;
  return colorMap[status] || colorMap['NONE'];
};