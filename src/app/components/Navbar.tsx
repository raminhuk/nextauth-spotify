'use client'
import Link from "next/link"
import { useSession } from "next-auth/react"

export default function Navbar() {
    const { data: session } = useSession()

    return (
        <div className="bg-sky-800/100">
            <div className="container mx-auto">
                <nav>
                    <ul className="flex justify-between text-1xl">
                        <div className="flex">
                            <li className="flex"><Link className="p-4 hover:bg-sky-700/100" href="/">Home</Link></li>
                            <li className="flex"><Link className="p-4 hover:bg-sky-700/100" href="/client">Client</Link></li>
                            <li className="flex"><Link className="p-4 hover:bg-sky-700/100" href="/extra">Extra</Link></li>
                        </div>
                        
                        <div>
                        { !session ? 
                            <li className="flex"><Link className="p-4 hover:bg-sky-700/100" href="/api/auth/signin">Sign In</Link></li>
                        :
                            <li className="flex"><Link className="p-4 hover:bg-sky-700/100" href="/api/auth/signout">Sign Out</Link></li>
                        }
                        </div>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

