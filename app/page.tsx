'use client'
import { useState } from 'react'
export default function Page(){
  const [url,setUrl]=useState(''); const [short,setShort]=useState(''); const [loading,setLoading]=useState(false)
  async function onSubmit(e:any){
    e.preventDefault(); setLoading(true)
    const res = await fetch('/api/shorten',{method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({url})})
    const data = await res.json()
    setShort(window.location.origin+'/'+data.code)
    setLoading(false)
  }
  return <div style={{padding:20}}><h1>ShortKaro.in</h1><form onSubmit={onSubmit}><input style={{width:'70%',padding:8}} value={url} onChange={e=>setUrl(e.target.value)} placeholder='https://google.com'/><button style={{padding:8,marginLeft:8}}>{loading?'...':'Shorten'}</button></form>{short&&<div style={{marginTop:20}}><a href={short}>{short}</a></div>}</div>
}
