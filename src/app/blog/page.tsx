import React from 'react'
import Link from 'next/link'

function page() {
    return (
        <div>
            <h2>Blog page</h2>
            <p>This is blog page</p>
            <Link href="/">back</Link>            
        </div>
    )
}

export default page