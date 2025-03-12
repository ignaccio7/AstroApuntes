"use client"
import { useEffect, useRef, useState } from "react"

export function Counter({ initial = 0, final = 10, decimals = 0 }) {

  const [value, setValue] = useState(initial)
  const step = useRef(final / (final * Math.pow(final, decimals)))
  const intervalRef = useRef(null)

  const increase = () => {
    if(value < final) setValue((prev) => {
      return (Number(prev) + step.current).toFixed(decimals)
    })
    else clearInterval(increase)
  }

  useEffect(() => {
    intervalRef.current = setInterval(increase, 100)

    return () => {
      clearInterval(intervalRef.current)
    }    
  }, [value])

  return (
    <>
      {value}
      <button onClick={() => {console.log("a")}}>+</button>
    </>
  )
}