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

export interface Info {
  synopsis: string;
  yearsAired: string;
  creators: Creator[];
  id: number;
}

export interface Creator {
  name: string;
  url: string;
}
