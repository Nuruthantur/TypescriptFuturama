export type Root = Root2[]

export interface Root2 {
  synopsis: string
  yearsAired: string
  creators: Creator[]
  id: number
}

export interface Creator {
  name: string
  url: string
}