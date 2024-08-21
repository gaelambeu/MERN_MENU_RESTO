import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <Link className="text-green-500 font-semibold" href="">FLORIS HÔTEL</Link>
        <nav>
          <Link href={''}>Home</Link>
          <Link href={''}>Menu</Link>
          <Link href={''}>About</Link>
          <Link href={''}>Contact</Link>
          <Link href={''}>Login</Link>
        </nav>
      </header>
    </>
  )
}