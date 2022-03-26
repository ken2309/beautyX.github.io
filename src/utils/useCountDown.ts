import { useEffect, useState } from 'react'

function useCountDown(seconds: number) {
    const [sec, setSec] = useState(seconds);
    useEffect(() => {
        const timeSec = setInterval(() => {
            setSec(prevState => prevState - 1)
        }, 1000)
        return () => clearInterval(timeSec)
    })
    return sec;
}
export default useCountDown