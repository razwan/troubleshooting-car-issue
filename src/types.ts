export type Question = {
    question: string,
    yes?: Question | Solution,
    no?: Question | Solution
}

export type Solution = {
    solution: string
}