import React from 'react'

export const StyleTailwind9 = () => {
    return (
        <div>
            <h2 className='py-4 bg-sky-300 text-white'>tailwindcss</h2>
            <p className='p-3'>이미 만들어준 class를 적용하면되요</p>

            <div className='flex gap-4'>
                <div className='border'><img src="./images/goods2.png" alt="" className='w-50' /></div>
                <div className='border px-4 m-4'>
                    <h3 className='text-4xl'>상품제목</h3>
                    <p className='text-2xl'>상품설명</p>
                    <p>가격</p>
                </div>
            </div>
        </div>
    )
}
