import { redis } from '@/lib/redis'
export async function POST(req: Request) {
  const { url } = await req.json()
  if(!url) return Response.json({error:'No url'}, {status:400})
  const code = Math.random().toString(36).substring(2,7)
  await redis.set(code, url)
  return Response.json({ code })
}
