import { redis } from '@/lib/redis'
export async function GET(req: Request, { params }: { params: Promise<{ code: string }> }) {
  const { code } = await params
  const url = await redis.get(code) as string | null
  if (!url) return new Response('Link not found', {status:404})
  return Response.redirect(url, 302)
}
