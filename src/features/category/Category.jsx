import React from 'react'
import { Link } from 'react-router-dom'

export default function Category() {
    return (

        <div>
            Category
            <br />
            <Link to='/category/form'>
                add category
            </Link>
            <br />
            <Link to='/category/form/id123'>
                edit category
            </Link>
        </div>

    )
}
