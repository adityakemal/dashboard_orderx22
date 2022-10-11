import React from 'react'
import { useParams } from 'react-router-dom'
import LayoutApp from '../../shared/components/LayoutApp'

export default function FormCategory() {
    const { id } = useParams()
    return (
        <div>Category Form {id}</div>
    )
}
