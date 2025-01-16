astro por defecto no ejecuta nada del JS en la parte del cliente
lo hace en la parte del servidor o de la compilacion

# Crear un proyecto en astro
para inicializar un proyecto con astro

npm create astro@latest
# Agregar tailwind en astro
si quisieramos instalar tailwind en astro

npx astro add --help
-> esto nos dira todas las integraciones que con un comando podemos añadir

en el caso de tailwind

npx astro add tailwind

--> una vez que hagamos el fetching de datos podriamos tipar los datos con ayuda de 
para que tenga autocompletado y demas cosas

https://app.quicktype.io/
ahi copiamos el json de nuestra api para que nos lo tipe

la api que usaremos para los launches sera
https://api.spacexdata.com/v3/launches/
para launch por id sera
https://api.spacexdata.com/v3/launches/id

cuando nos salga el siguiente error
getStaticPaths() function required for dynamic routes.
-> Como astro por defecto es un SSG pues el error nos paso cuando quisimos hacer rutas dinamicas al momento de que cuando den click a una card dinamica de los launchs entonces nos lleve a mas informacion de esta pero como no sabriamos exactamente cuantas seran tenemos maneras para manejar este tipo de situacion:
    - por ejemplo si tenemos 100 productos podriamos decirle a astro que nos genere dinamicamente 100 paginas estaticas y luego servir estas desde el servidor
    NOTA-> esto es correcto cuando antes de que el usuario ingrese a la pagina nosotros conocemos la cantidad de paginas que queremos servir y son limitados. decenas hasta cientos pero no sin conocer.

    // aqui nosotros deberiamos colocar las 100 rutas si en caso fueran 100
    https://docs.astro.build/es/reference/api-reference/#getstaticpaths

    export const getStaticPaths = () => {
        // tambien podriamos llamar a la api y obtener mediante JS todos los ids y posterior a eso generamos las rutas 1 opcion
        // aqui colocamos todas las rutas que quisieramos generar
        return [
            { params: { id: "1" } },
            { params: { id: "2" } },
            { params: { id: "3" } },
        ];

        // y llamando a la API seria
        /* const launches = await getLaunches()
        return launches.map((launch)=>({
            params: { id: launch.id }   
        }))*/

    };

    NOTA-> si nosotros ponemos npm run build podemos ver que nos genera todas las paginas que nosotros definimos anteriormente

    - decirle a astro que maneje ssr
    https://docs.astro.build/es/core-concepts/rendering-modes/#renderizado-bajo-demanda
    https://docs.astro.build/es/guides/server-side-rendering/

    asi podemos indicarle astro que funcione en el servidor
    eso en el archivo astro.config.mjs

    export default defineConfig({
        integrations: [tailwind()],
        output:'server'
    });
    asi definiriamos que por defecto toda nuestra pagina es serversiderendering

    o tambien definirlo en modo hybrido y definir nosotros exactamente en que paginas queremos utilizar ssr
    export default defineConfig({
        integrations: [tailwind()],
        output:'hybrid'
    });
    asi colocar en la pagina que queramos renderizado
    export const prerender = false


si quisieramos añadir una isla
podriamos instalar react vue o preact 

npx astro add preact
y de esta manera podriamos agregarle un poco de interactividad a nuestras paginas

por defecto el counter sera estatico al estar en astro se estara renderizando de esa manera
y para que sea dinamico se agrega una directiva
<Counter client:visible />

y si quisiseramos agregar persistencia entonces algo mas que tendriamos que agregar es la directiva
<Counter transition:persist  client:visible />
pero si que mejora la experiencia del usuario al cambiar entre paginas
pero si la recargamos si no la persiste de esa manera


# Como agregar un alias a nuestros componentes-iconos-lib-etc

// para arreglar que las importaciones no sean del tipo 
    import LibraryIcon from "../icons/Library.astro";
    import HomeIcon from "../icons/Home.astro";
    import SearchIcon from "../icons/Search.astro";
    import AsideMenuItem from "./AsideMenuItem.astro";
    import { playlists } from "../lib/data";
con el .. para salir luego ir a la raiz y configurar eso debemos asignar un alias 
en: 
  
  tsconfig.json

y añadiriamos esto
```[typescript]
  "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/*": ["src/*"]
      }
  }
```

pero tambien podriamos tener un alias para los componentes o los iconos y asi
"compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "src/*"
      ],
      "@/components": [
        "src/components/*"
      ],
      "@/icons": [
        "src/icons/*"
      ],
      "@/lib": [
        "src/data/*"
      ]
    },    
  }

y ya las importaciones se volverian del tipo
    import LibraryIcon from "@/icons/Library.astro";
    import HomeIcon from "@/icons/Home.astro";
    import SearchIcon from "@/icons/Search.astro";
    import AsideMenuItem from "./AsideMenuItem.astro";

    import { playlists } from "@/lib/data";

# Para tener un estado global (Proyecto Spotify)
si manejamos proyecto con react entonces podriamos instalar zustand
Que es un manejador de estados global que se puede usar con react vue svelte etc
```
  pnpm install zustand -E
```

Creariamos una carpeta llamada "store" o lo que queramos
y pondriamos un archivo con lo que queramos en el caso de este proyecto es 
  -> playerStore.js

# Obtener parametros de la URL -> nativo de JS
// si tenemos la Url de esta forma src/pages/api/get-info-playlist.json.js?id=123
/*const requestUrl = 'src/pages/api/get-info-playlist.json.js?id=123'
const [,queryString] = requestUrl.split('?')
const query = new URLSearchParams(queryString)
console.log(query.get('id')) // -> '123'*/
// si tuvieramos la url completa http://localhost:300/src/pages/api/get-info-playlist.json.js?id=123
const requestUrl = 'http://localhost:300/src/pages/api/get-info-playlist.json.js?id=123'
const url = new URL(requestUrl)
console.log(url.searchParams.get('id')) // -> '123'

# Para implementar un componente de shacdn se puede hacer via manual
de la pagina -> https://ui.shadcn.com/docs/components/slider

instalando -> pnpm add @radix-ui/react-slider
tambien se le debe añadir clsx que es una dependencia que necesita asi 
el comando seria -> pnpm add @radix-ui/react-slider clsx

Y creamos y copiamos el componente en nuestro proyecto para usarlo
el proyecto es el clon de spotify el componente Slider.tsx

# Para copiar componentes predefinidos en tailwind

https://flowbite.com/

# Para activar las view transition -> esto porque astro antes no las tenia pero para entender

necesitamos una metaetiqueta en el html para indicarle que las transiciones estaran en el mismo origen
siempre que sean del mismo dominio
<meta name="view-transition" content="same-origin">

Lo siguiente que debemos hacer es interceptar la navegacion a nuestro mismo dominio
eso lo veremos agregando un script en la pagina principal o layout que tengamos

```[javascript]
  const checkIsNavigationSupported = () => {
  return Boolean(document.startViewTransition)
}

const fetchPage = async (url) => {
  // vamos a cargar la página de destino
  // utilizando un fetch para obtener el HTML
  const response = await fetch(url) // /clean-code
  const text = await response.text()
  // quedarnos sólo con el contenido del html dentro de la etiqueta body
  // usamos un regex para extraerlo
  const [, data] = text.match(/<body>([\s\S]*)<\/body>/i)
  return data
}

export const startViewTransition = () => {
  if (!checkIsNavigationSupported()) return

  window.navigation.addEventListener('navigate', (event) => {
    const toUrl = new URL(event.destination.url)

    // es una página externa? si es así, lo ignoramos
    if (location.origin !== toUrl.origin) return

    // si es una navegación en el mismo dominio (origen)
    event.intercept({
      async handler () {
        const data = await fetchPage(toUrl.pathname)

        // utilizar la api de View Transition API
        document.startViewTransition(() => {
          // el scroll hacia arriba del todo
          document.body.innerHTML = data
          document.documentElement.scrollTop = 0
        })
      }
    })
  })
}
```

Y por ultimo el css a colocar:
```[css]
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation-duration: 0.5s;
  }
```
Y ya luego seguir lo de la pagina de guia https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API
y probar 

## Nota: Por defecto pero astro ya soporta View Transitions con directivas

importando en nuestro layout 
  -> import { ViewTransitions } from 'astro:transitions';
Colocando como etiqueta

		<title>{title}</title>
		<meta name="view-transition" content="same-origin">
		--> <ViewTransitions />
	</head>

Y por ultimo colocando un nombre a cada transicion que tengamos esto tiene que ser unico para que funcione

--> transition:name={`book-id-${id}`}

