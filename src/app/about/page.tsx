import React from 'react'
import Link from 'next/link'

function about() {
    return (
        <div>
            <h1>About Page</h1>
            <p>This is about page</p>
            <Link href="/">back</Link>            
        </div>
    )
}

export default about
