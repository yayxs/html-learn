function updateRoute(templateId) {
  const path = window.location.pathname
  const route = routes[path]
  if (!route) {
    return navigate('/login')
  }
  // 获取到dom元素
  const template = document.getElementById(route.templateId)
  const view = template.content.cloneNode(true)
  const app = document.getElementById('app')
  app.innerHTML = ''
  app.appendChild(view)
}

const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' }
}

function navigate(path) {
  window.history.pushState({}, path, path)
  updateRoute()
}

function onLinkClick(event) {
  event.preventDefault()
  navigate(event.target.href)
}

window.onpopstate = () => updateRoute()
updateRoute()
