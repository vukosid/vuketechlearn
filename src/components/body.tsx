import GradeDisplay from "@/components/body/gradeDisplay"

export default function Body(){
    return(
        <div className="grid grid-cols-4 gap-4">
          <GradeDisplay 
                name="Grade 1" 
                description="This grade 1 good for start"
            />
          <GradeDisplay  
                name ="grade 2" 
                description="this is grade 2"
            />
          <GradeDisplay name ="grade 3"  description="this is grade 2"/>
          <GradeDisplay name ="grade 4"  description="this is grade 2"/>
          <GradeDisplay name ="grade 5"  description="this is grade 2"/>
          <GradeDisplay name ="grade 6"  description="this is grade 2"/>
          <GradeDisplay  name ="grade 7"  description="this is grade 2"/>
          <GradeDisplay name ="grade 8"  description="this is grade 2"/>
          <GradeDisplay name="grade 9"  description="this is grade 2"/>
        </div>
    )
}