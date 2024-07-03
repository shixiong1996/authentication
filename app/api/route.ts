// 保护路由处理程序
export async function GET() {
  // 用户身份验证和用户角色验证
  const session = await getSession()

  // 检查用户是否通过身份验证
  if(!session) {
    return new Response(null, {status: 401}) // 用户未被认证
  }

  // 检查用户是否拥有'amdin'角色
  if(session.user.role !== 'admin') {
    return new Response(null, {status: 403}) // 用户已通过认证，但没有权限
  }

  // 获取授权用户的数据
}

// 此示例演示了具有两层安全检查的路由处理程序，用于身份验证和授权。
// 它首先检查活动会话，然后验证登录用户是否为“管理员”。
// 这种方法可确保安全访问（仅限于经过身份验证和授权的用户），从而为请求处理保持强大的安全性。