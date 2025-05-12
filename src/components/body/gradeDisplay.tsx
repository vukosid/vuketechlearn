

export default function GradeDisplay(props:any){

    return(
        <div className="col">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
    </div> 
    )
}