# Copy-ESLand-Web

Esta pagina es una copia de la pagina web y NO es la oficial.

## Recursos Utilizados

Para los estilos TailwindCSS

```bash
pnpm astro add tailwind
```

Para en el video agregar una forma de punta al final de la primera seccion con un clip path

Iremos a la siguiente url [https://bennettfeely.com/clippy/](https://bennettfeely.com/clippy/)

Para las fuentes utilizaremos [fontsource](https://fontsource.org/fonts/jura/install)
Usaremos las fuentes **Jura** y **Onest**

Para las animaciones con tailwindcss usaremos [tailwindcss-animated](https://www.tailwindcss-animated.com/)
Para la instalacion:
```bash
npm install tailwindcss-animated
```

Para embeber videos es mejor no usar el tag de iframe porque te carga mucho javascript que no es necesario para eso mejor usaremos un webcomponent de video que es [lite-youtube](https://github.com/justinribeiro/lite-youtube) que lo que hara es cargar el video sobre demanda osea cuando el usuario quiera verlo y no cuando el sitio se cargue.

```bash
pnpm i @justinribeiro/lite-youtube
```

Para el CountUp de la secccion esland numeros
Tenemos diferentes opciones para usar como ser:
* Usando React
[react-countup](https://github.com/glennreyes/react-countup) y su [pagina](https://tr8tk.csb.app/)
[use-count-up](https://use-count-up.vercel.app/)
* Vanilla JS
[Counter](https://codepen.io/lonekorean/pen/dyOVxmy)
animated number counter vanilla js

* Usaremos este que nos copiamos de la copia de midudev
```javascript
import { useCallback, useEffect, useState } from 'preact/hooks'

export const useProgressiveNumber = (
	initialValue: number | (() => number),
	duration = 1500,
	decimals = 0,
	delay = 5
): [string, (value: string | ((prevTarget: number) => number)) => void] => {
	const [target, setTarget] = useState(initialValue)
	const [current, setCurrent] = useState(initialValue)
	const [steps, setSteps] = useState(1)
	const [currentStep, setCurrentStep] = useState(1);

	const initial = typeof initialValue === 'function' ? initialValue() : initialValue;
	
	const setValue = useCallback(
		(value: string | ((prevTarget: number) => number)) => {
			const nextTarget = typeof value === 'function' ? value(target) : value
			const steps = Math.max(Math.floor(duration / delay), 1)
			setSteps(steps)
			setTarget(Number(nextTarget))
			setCurrentStep(1);
			setCurrent(lerp(initial, Number(nextTarget), easeOutCubic(1 / steps)))
		},
		[delay, duration, target]
	)

	useEffect(() => {
		const timeout = setTimeout(
			() => {
				const progress = currentStep / steps;
				if (progress === 1) {
					setCurrent(target);
				} else {
					setCurrent(lerp(initial, target, easeOutCubic(progress)))
					setCurrentStep(currentStep + 1)
				}
			},
			delay
		)

		return () => clearTimeout(timeout)
	}, [delay, currentStep, target])
	const value = current.toFixed(decimals)
	return [value, setValue]
}

const lerp = (a: number, b: number, alpha: number): number => {
	return a + (alpha * (b - a))
}

const easeOutCubic = (value: number): number => {
	return 1 - Math.pow(1 - value, 3)
}
```

Para la galeria tenemos diferentes opciones como ser:
[] [lightGallery](https://www.lightgalleryjs.com/)
[x] [phoswipe](https://photoswipe.com/)

El diseño [masonry](https://github.com/andreasbm/masonry-layout)


Para la autenticacion usaremos [astro auth](https://docs.astro.build/es/guides/authentication/)

```bash
pnpm astro add auth-astro
```




```bash

```