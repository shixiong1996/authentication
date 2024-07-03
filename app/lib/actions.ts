'use server'
 
import { signIn } from '@/auth'
import { get } from 'http'
 
export async function authenticate(_currentState: unknown, formData: FormData) {
  try {
    await signIn('credentials', formData)
  } catch (error) {
    if (error) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}

// 操作继续之前检查用户的角色
export async function serverAction() {
  const session = await getSession()
  const userRole = session?.user?.role

  // 检查用户是否被授权
  if(userRole !== 'admin') {
    throw new Error('未经授权的访问：用户没有管理员权限')
  }

  // 继续授权用户操作
}