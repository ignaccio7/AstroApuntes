import { useState } from 'preact/hooks'

export function Counter() {
    const [counter, setCounter] = useState(0)

    return (
        <>
            <span class="text-slate-300 text-xl mr-4">{counter}</span>
            <button 
                onClick={() => setCounter(counter + 1)} 
                class="border px-4 py-2 text-xl"
            > 
                + 
            </button>
            <button 
                onClick={() => setCounter(counter - 1)} 
                class="border px-4 py-2 text-xl"
            > 
                - 
            </button>
        </>
    )
}