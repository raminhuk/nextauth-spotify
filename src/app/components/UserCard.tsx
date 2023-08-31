import Image from "next/image"

type User = {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
} | undefined

type Props = {
    user: User,
    pagetype: string,
}

export default function Card({ user, pagetype }: Props) {


    const greeting = user?.name ? (
        <div className="flex flex-col items-center p-4 text-2xl text-white">
            Hello, {user?.name}!
        </div>
    ) : null

    const userImage = user?.image ? (
        <Image
            className="border-4 border-sky-800/100 dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
            src={user?.image}
            width={200}
            height={200}
            alt={user?.name ?? "Profile Pic"}
            priority={true}
        />
    ) : null

    return (
        <section className="flex items-center flex-col gap-4">
            <p className="text-2xl text-center">{pagetype} Page!</p>
            {greeting}
            {userImage}
            <>{user?.email}</>
        </section>
    )
}