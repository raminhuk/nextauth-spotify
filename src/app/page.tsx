'use client'
import UserCard from "./components/UserCard"
import { useSession } from "next-auth/react"

export default function Home() {
    const { data: session } = useSession()

  return (
    <>
      {session ? (
        <UserCard user={session?.user} pagetype={"Home"} />
      ) : (
        <h1 className="text-2xl">Você não está autenticado</h1>
      )}
    </>
  )
}
