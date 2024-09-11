
import Link from "next/link"
export default function Header() {
    return (
        <>
            <header className="flex items-center justify-between px-2 py-2 bg-green-700">
            
                <Link className="text-2xl font-semibold text-white" href="">FLORIS HÔTEL</Link>
                    <nav className="flex items-center gap-8 font-semibold text-black ">
                    <Link href={''}>Home</Link>
                    <Link href={''}>Menu</Link>
                    <Link href={''}>About</Link>
                    <Link href={''}>Contact</Link>
                    <Link href={''} className="px-8 py-2 text-green-700 bg-white rounded-full ">
                        Login
                    </Link>
                </nav>
            </header>
        </>
    )
}