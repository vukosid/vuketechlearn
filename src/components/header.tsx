import {user2, user} from '@/components/utils/dictionaries'

export default function MainHeader(){


    console.log(user)
    return(
        <nav className="gap-8 flex bg-red ">
            <a>Home</a>
            <a>About</a>
            <a>Service</a>
            <a>Contact us</a>
            <p>{user2.name} {user2.lastName}</p>
        </nav>
    )
}




