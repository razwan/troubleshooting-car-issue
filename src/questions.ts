import type { Question }  from './types';

export const questions: Question = {
    question: 'Is the car silent when you turn the key?',
    yes: {
        question: 'Are the battery terminals corroded?',
        yes: {
            solution: 'Clean terminals and try starting again.'
        },
        no: {
            solution: 'Replace cables and try again',
        }
    },
    no: {
        question: 'Does the car make a clicking noise?',
        yes: {
            solution: 'Replace the battery',
        },
        no: {
            question: 'Does the car crank up but fail to start?',
            yes: {
                solution: 'Check spark plug connections.'
            },
            no: {
                question: 'Does the engine start and then die?',
                yes: {
                    question: 'Does your car have fuel injection?',
                    yes: {
                        solution: 'Get it in for service'
                    },
                    no: {
                        solution: 'Check to ensure the choke is opening and closing'
                    },
                }
            }
        }
    }
}
