import { Pagination } from '@mantine/core'
import React from 'react'

const Paginate = () => {
    return (
        <div className='flex justify-center py-5'>
            <Pagination total={4} color="red" />
        </div>
    )
}

export default Paginate