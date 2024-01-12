export type gameFetchOK = gameResult[]
export interface gameFetchNotOK {
  error: string
}
export interface gameResult {
  id: number
  question: string
  possibleAnswers: string[]
  correctAnswer: any
}