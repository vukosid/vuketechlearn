import GradeDisplay from "@/components/body/gradeDisplay"
import {user} from "@/components/utils/dictionaries"
export default function Body(){
    var grades = [
        {name:'grade1', descrption:'this is grade 1'},
        {name:'grade2', descrption:'this is grade 2'},
        {name:'grade3', descrption:'this is grade 3'},
        {name:'grade4', descrption:'this is grade 4'}
    ]
    return(
        <div className="grid grid-cols-4 gap-4">
            <div className="card">
                <h1>These are courses for {user.productname} {user.lastName}</h1>
            </div>
        {grades.map((item)=><GradeDisplay name={item.name}  description={item.descrption}/>)}
        </div>
    )
}