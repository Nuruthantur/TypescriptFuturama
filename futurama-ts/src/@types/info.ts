export type Root = FuturamaInfo[]

export interface FuturamaInfo{
  synopsis: string
  yearsAired: string
  creators: Creator[]
  id: number
}

export interface Creator {
  name: string
  url: string
}

