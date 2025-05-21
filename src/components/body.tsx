import GradeDisplay from "@/components/body/gradeDisplay"

export default function Body(){
    var grades = [
        {name:'grade1', descrption:'this is grade 1'},
        {name:'grade2', descrption:'this is grade 2'},
        {name:'grade3', descrption:'this is grade 3'},
        {name:'grade4', descrption:'this is grade 4'}
    ]
    return(
        <div className="grid grid-cols-4 gap-4">
        {grades.map((item)=><GradeDisplay name={item.name}  description={item.descrption}/>)}
        </div>
    )
}