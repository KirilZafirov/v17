import { Address } from "./address.model";
import { Company } from "./company.model";

 
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address,
  phone: string;
  website: string;
  company: Company;
  rowPosition?: RowPosition;
  isSelected?: boolean;
}


export type RowPosition = "isFirst" | "isLast" | "isOdd" | "isEven";

export const deduceRowPosition = (index: number, users: User[]): RowPosition => {
  if (index === 0) return "isFirst";
  if (index === users.length - 1) return "isLast";
  if (index % 2 === 0) return "isEven";
  return "isOdd";
}