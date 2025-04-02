// el .json solo es para indicarle a astro para que sepa el tipo de dato que tiene que devolver
// static file endpoints https://docs.astro.build/en/guides/endpoints/

import type { APIRoute } from 'astro'
import votesInfo from '../../data/editions-vote.json'

const DEFAULT_CATEGORY = 1

export const GET: APIRoute = async ({ request }) => {

  const { url } = request
  const searchParams = new URL(url).searchParams
  const category = Number(searchParams.get('category') ?? DEFAULT_CATEGORY)
  
  const categoryInfo = votesInfo[category]

  return new Response(JSON.stringify(categoryInfo))
}

