import React, { Suspense } from 'react'
import Skeleton from './Skeleton'

export default function Layout({ children, title }) {
    return (
        <div>
            <div className='header'>
                <div className='text-header'>{title || "Github Jobs"}</div>
            </div>
            <div className='wp-body-jobs'>
                <Suspense
                    fallback={
                        <Skeleton />
                    }
                >
                    {children}
                </Suspense>
            </div>
        </div>
    )
}