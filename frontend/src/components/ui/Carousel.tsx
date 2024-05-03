import React, { useEffect, useState } from 'react'


interface Props {
    link : JSX.Element[]
    autoSlide : boolean
}

const Carousel : React.FC<Props> = ({link , autoSlide}) => {
    const [curr , setCurr] = useState<number>(0)
    
    const next = () => {
        setCurr((c) => (
            c === link.length - 1 ? 0 : c + 1
        ) )
    }

    useEffect(() => {
        if(autoSlide){
            const interval = setInterval(() => {
                next()
            }, 2000)
            return () => clearInterval(interval)
        }
    })
    return (
        <div className='overflow-hidden rounded-b-lg'>
            <div className="flex transition-transform ease-out duration-500" style={{transform : `translateX(-${curr *100}%)`}}>
                {link}
            </div>
            
        </div>
    )
}

export default Carousel