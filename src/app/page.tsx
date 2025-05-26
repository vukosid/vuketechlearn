
import Mainheader from "@/components/header"
import AboutUs from "@/components/aboutUs"
import Body from "@/components/body"
import {grade_r_students} from '@/data/students'
export default function Page() {
    return (<div>
    <Mainheader />
    {/* <AboutUs/>
    <Body /> */}

    <p>Length: {grade_r_students.length}</p>
    </div>)
}