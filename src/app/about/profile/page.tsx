import React from 'react'
import Link from 'next/link'

function profile() {
    return (
        <div>
            <h2>Profile Page</h2>
            <hr/>
            <p>This is profile page.</p>
            <Link href="/">back</Link>
        </div>
    )
}

export default profile
