// Die Router Klasse habe ich aus der Aufgabe LA_294_8431_ClientSideRouting kopiert
class Router {
  constructor (routes) {
    this.routes = routes
    this.navigate = function (hash) {
      let route = this.getRouteByHash(hash)
      history.pushState({}, '', hash)
      route.function()
    }

    this.urlResolve = function () {
      this.navigate(location.hash)
    }

    this.getRouteByHash = hash => {
      if (hash == '') {
        return routes['home']
      }
      let route = routes['error']
      Object.keys(routes).forEach(key => {
        if (routes[key].hash == hash) {
          route = routes[key]
        }
      })
      return route
    }

    addEventListener('hashchange', event => {
      this.urlResolve()
    })
  }
}
