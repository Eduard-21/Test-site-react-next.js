import Link from "next/link"

const header = () => {
  return (
    <header>
      <span>itProject</span>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  )
}

export default header
