import { ChatTeardropDots } from "phosphor-react"
import {Popover} from '@headlessui/react'

export function Widget() {
    
    return (
        <Popover className="absolute bottom-6 right-6">

            <Popover.Panel>Olá!</Popover.Panel>
            <Popover.Button className="bg-brand-default px-3 py-3 rounded-full text-white hover:bg-brand-hover transition flex items-center group">
                <ChatTeardropDots className="w-6 h-6"/>
                
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                    <span className="pl-2">Feedback</span>
                </span>
            </Popover.Button>
            
        </Popover>
    )
}

// ESTADO
// const [isWidgetOpen, setIsWidgetOpen] = useState(false)

// function toggleWidgetVisibility() {
//     setIsWidgetOpen(!isWidgetOpen)
// }

// { isWidgetOpen && <p>Olá!</p> }