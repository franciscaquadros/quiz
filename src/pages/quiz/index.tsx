interface QuizProps{
    questions: any
}

export const Quiz = (props: QuizProps)=>{
    return <div>{JSON.stringify(props.questions)}</div>;
}