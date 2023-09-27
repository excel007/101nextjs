import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (<div>
      <h1>Hello NextJS </h1>
      <li><Link href="/about">about page</Link></li>
      <li><Link href="/about/profile">profile page</Link></li>
      <li><Link href="/blog">blog page</Link></li>
      </div>
  )
}
