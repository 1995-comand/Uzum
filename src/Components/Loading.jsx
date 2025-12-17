import React from 'react'

const Loading = () => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]">
            <span className="loading loading-infinity loading-lg text-[#7000FF] scale-[2]"></span>
        </div>
    )
}

export default Loading