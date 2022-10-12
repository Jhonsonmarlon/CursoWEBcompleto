import { useState } from 'react'
import { format, addDays, subDays } from 'date-fns'
import { Icon } from '~/Components/Icon'
import { ptBR } from 'date-fns/locale'

export const DataSelect = () => {

    const [currentDate, setCurrentDate] = useState(new Date ('2022-11-20T00:00:00Z'))

    const PrevDay = () => {
        const nextDate = subDays(currentDate, 1)
        setCurrentDate (nextDate)
    }

    const NextDay = () => {
        const nextDate = addDays(currentDate, 1)
        setCurrentDate (nextDate)
    }

    return (
        <div className="flex justify-center p-8 space-x-6 text-red-500">
            
                <Icon name="arrowleft" className="w-6" onClick={PrevDay} />
            

            <span className="font-bold text-black">{format(currentDate, "d 'de' MMMM", {locale: ptBR})}</span>
                            
            
                <Icon name="arrowright" className="w-6" onClick={NextDay} />
            
        </div>
    )
}