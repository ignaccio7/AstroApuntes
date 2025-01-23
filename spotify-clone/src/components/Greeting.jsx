
export default function Greeting() {  
  const date = new Date()
  const hours = date.getHours()
  const greeting = hours < 12 
  ? 'Buenos dias'
  : hours < 18
    ? 'Buenas tardes'
    : 'Buenas noches'  

  return (
    <h2 class="text-5xl font-bold mt-14 mb-8 text-white">¡{greeting}!</h2>
  )
}