import readline from "readline";
import { questions } from "./questions";
import type { Question, Solution } from "./types";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const q = (question: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        rl.question(question, resolve);
    });
};

const isYes = ( answer: string ): boolean => {
    const sanitised = answer.trim().toLocaleLowerCase();
    return sanitised === 'yes' || sanitised === 'y';
}

const isNo = ( answer: string ): boolean => {
    const sanitised = answer.trim().toLocaleLowerCase();
    return sanitised === 'no' || sanitised === 'n';
}

const isQuestion = ( value: Question | Solution ): value is Question => {
    return !! (value as Question).question;
}

async function survey() {
    let current: typeof questions.yes = questions;

    while ( current ) {

        if ( ! isQuestion( current ) ) {
            break;
        }

        const answer = await q( `${ current!.question } \n` );
        
        if ( isYes( answer ) ) {
            current = current.yes;
            continue;
        }

        if ( isNo( answer ) ) {
            current = current.no;
            continue;
        }

        current.question = `${ current.question } (yes/no)`;
    }

    if ( ! current?.solution ) {
        console.log( 'Cannot find a solution to your problem' );
        return;
    }
    
    console.log( current.solution );
}

(async () => {
    await survey();
    process.exit();
})();

