// 在服务器上设置cookie
'use server'

import { cookies } from 'next/headers'

export async function handleLogin(sessionData) {
  const encryptedSessionData = encrypt(sessionData) // 加密会话数据
  cookies().set('session', encryptedSessionData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 一周
    path: '/'
  })

  // 重定向或处理设置cookie后的响应
}