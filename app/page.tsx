import { redirect } from 'next/navigation'

export default function Page() {
  // 判断是否需要重定向的逻辑
  const accessDenied = true
  if(accessDenied) {
    redirect('/login')
  }

  // 定义其他需求和逻辑
}