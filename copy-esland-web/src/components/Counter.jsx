"use client"
import { useProgressiveNumber } from "../hooks/useProgresiveNumber"
import { useEffect } from "react"

export function Counter({ initial, final, duration ,decimals }) {

  const [value, setValue] = useProgressiveNumber(initial, duration, decimals)

  useEffect(() => {
    setValue(String(final))
  },[final])

  return (
    <span>
      {value}
    </span>
  )
}