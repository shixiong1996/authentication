import { redirect } from 'next/navigation'

// 访问服务器组件中 cookie 中存储的会话数据
import { cookies } from 'next/headers'

export default function Page() {
  // 判断是否需要重定向的逻辑
  const accessDenied = true
  if(accessDenied) {
    redirect('/login')
  }

  // 定义其他需求和逻辑
}

// 访问服务器组件中 cookie 中存储的会话数据
export async function getSessionData(req) {
  const encryptedSessionData = cookies().get('session')?.value
  return encryptedSessionData ? JSON.parse(decrypt(encryptedSessionData)) : null
}