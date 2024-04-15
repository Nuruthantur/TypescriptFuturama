export type FetchResultOK = FuturamaInfo;

export interface FetchResultNotOK {
  error: string;
}
export interface FuturamaInfo {
  synopsis: string;
  yearsAired: string;
  creators: { name: string; url: string }[];
  id: number;
}
