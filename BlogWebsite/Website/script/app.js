// Die routes habe ich aus der Aufgabe LA_294_8431_ClientSideRouting kopiert und angepasst.

const routes = {
  //login: { hash: '/login', function: renderLogin, navlabel: 'Login' },
  home: { hash: '', function: renderHome, navlabel: 'Home' },
  project: { hash: '/projects', function: renderProjects, navlabel: 'Project' },
  takeabreak: {
    hash: '/takeabreak',
    function: renderTakeabreak,
    navlabel: 'Take a break'
  },
  add: {
    hash: '/add',
    function: renderAdd,
    navlabel: 'add'
  },
  error: { function: renderNotFound }
}

let router = new Router(routes)

const app = document.getElementById('app')
renderNavigation()
