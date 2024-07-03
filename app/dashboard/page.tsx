// 使用服务器组件授权
export default async function Dashboard() {
  const session = await getSession()
  const userRole = session?.user?.role // 假设role是对象的属性

  if (userRole === 'admin') {
    return <AdminDashboard /> // admin用户组件
  } else if (userRole === 'user') {
    return <UserDashboard /> // 普通用户组件
  } else {
    return <AccessDenied /> // 未经授权的用户组件
  }
}