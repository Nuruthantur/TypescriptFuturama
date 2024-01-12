export type Root = Root2[]

export interface Root2 {
  id: number
  question: string
  possibleAnswers: string[]
  correctAnswer: any
}