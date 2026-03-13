import React from 'react'

export default function page(params:{id:string}) {
    const id = params.id
  return (
    <div>page {Number(id)}</div>
  )
}
