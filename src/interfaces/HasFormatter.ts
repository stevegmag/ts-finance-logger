export interface HasFormatter {
  amount: number;
  format(): string;
}