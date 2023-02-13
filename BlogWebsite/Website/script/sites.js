// Die render Klassen habe ich aus der Aufgabe LA_294_8431_ClientSideRouting kopiert und angepasst.
let renderLogin = () => {
  app.innerHTML = ''
  let title = document.createElement('h1')
  title.innerHTML = ''
  let form = `
  <div class="LiginContainer">
        <div class="LoginBox">
            <h2>Login</h2>
            <form id="myform">
                <div class="UserBox">
                    <label>Username</label> <br>
                    <input 
                    type="text" 
                    name="Unsername" 
                    id="Username" 
                    placeholder="Enter unsername" 
                    required
                    />
                </div>
                <div class="UserBox">
                    <label>Password</label> <br>
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Enter password"
                    required
                    />
                </div>
                <div class="button-form">
                    <a id="submit" href="./Homepage.html">Submit</a>
                    <!-- <div id="register">
                        Don't have an account?
                        <a href="./login.html">Register</a> -->
                </div>
            </form>
        </div>
    <div>`
  var parser = document.createElement('div')
  parser.innerHTML = form
  console.log(title)
  app.appendChild(title)
  app.appendChild(parser)
  let login = new Login(routes)
}

let renderHome = () => {
  app.innerHTML = ''
  let title = document.createElement('h1')
  title.innerHTML = 'Home'
  let form = `
  <div class="homeInput">
      <div class="AboutWebsite">
        <h2 class="aboutText">About this website</h2>
        <p class="aboutText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, iste
          fuga. Molestias sint itaque cumque nesciunt deleniti laborum alias
          odit beatae, repudiandae rem, dolorem maxime? Cupiditate hic, natus
          adipisci qui suscipit doloremque dicta temporibus. Quasi repellendus
          at sapiente ratione nobis odit vero accusantium culpa ea nemo dolorem
          dolor eum mollitia pariatur necessitatibus quisquam dolores rem
          excepturi, saepe consequatur a alias praesentium. Ad fugiat eos
          voluptatum doloribus ipsa aut laboriosam! Deserunt cum quod, repellat
          neque dignissimos doloremque unde magni fuga quibusdam molestias quos.
          Nesciunt quaerat corporis ab nam sed necessitatibus praesentium natus
          consequuntur, ipsam, laudantium, voluptatem soluta perspiciatis
          dolorem vero nostrum. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Suscipit est vitae culpa totam veniam illum
          voluptatem expedita corporis magnam ullam optio, iusto aliquam, sint
          vero ab corrupti sit? Impedit, ea dolor? Neque ad suscipit quas ex
          asperiores aspernatur nisi alias! Praesentium exercitationem nihil
          accusamus excepturi alias optio dolorem incidunt fugiat laborum
          deserunt repudiandae repellat quidem et necessitatibus, reiciendis
          reprehenderit est debitis dolore. Officiis sit laboriosam voluptas a
          quam accusantium quas totam deleniti, illo consectetur, aperiam, nulla
          repellendus dolor? Iste dolorum ea quia est maiores consectetur odit
          tenetur excepturi minima facere, libero debitis ducimus ex
          necessitatibus accusamus molestiae sit perferendis praesentium.
        </p>
      </div>
      <a href="../HTML/projects.html">
        <div class="ProjectsHome">
          <h2 class="projectsText">Projects</h2>
          <p class="projectsText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, iste
            fuga. Molestias sint itaque cumque nesciunt deleniti laborum alias
            odit beatae, repudiandae rem, dolorem maxime? Cupiditate hic, natus
            adipisci qui suscipit doloremque dicta temporibus. Quasi repellendus
            at sapiente ratione nobis odit vero accusantium culpa ea nemo
            dolorem dolor eum mollitia pariatur necessitatibus quisquam dolores
            rem excepturi, saepe consequatur a alias praesentium. Ad fugiat eos
            voluptatum doloribus ipsa aut laboriosam! Deserunt cum quod,
            repellat neque dignissimos doloremque unde magni fuga quibusdam
            molestias quos. Nesciunt quaerat corporis ab nam sed necessitatibus
            praesentium natus consequuntur, ipsam, laudantium, voluptatem soluta
            perspiciatis dolorem vero nostrum. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Suscipit est vitae culpa totam veniam
            illum voluptatem expedita corporis magnam ullam optio, iusto
            aliquam, sint vero ab corrupti sit? Impedit, ea dolor? Neque ad
            suscipit quas ex asperiores aspernatur nisi alias! Praesentium
            exercitationem nihil accusamus excepturi alias optio dolorem
            incidunt fugiat laborum deserunt repudiandae repellat quidem et
            necessitatibus, reiciendis reprehenderit est debitis dolore.
            Officiis sit laboriosam voluptas a quam accusantium quas totam
            deleniti, illo consectetur, aperiam, nulla repellendus dolor? Iste
            dolorum ea quia est maiores consectetur odit tenetur excepturi
            minima facere, libero debitis ducimus ex necessitatibus accusamus
            molestiae sit perferendis praesentium.
          </p>
        </div>
      </a>
    </div>`
  var parser = document.createElement('div')
  parser.innerHTML = form
  console.log(title)
  app.appendChild(title)
  app.appendChild(parser)
}

let renderProjects = () => {
  app.innerHTML = ''
  let title = document.createElement('h1')
  title.innerHTML = 'Projects'
  let text = document.createElement('p')
  text.innerHTML = `
  Comming soon`
  app.appendChild(title)
  app.appendChild(text)
}

let renderTakeabreak = () => {
  app.innerHTML = ''
  let title = document.createElement('h1')
  title.innerHTML = 'Listen to music'
  let form = `
  <div class="entireInput">
        <div class="inputContainer">
            <div class="sideBar">
                <a class="sideBarText" href="../HTML/takeABreak-music.html">Music</a>
            </div>
        </div>
        <div class="musicPlaylists">
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/403S8w7xlSn9fdwdHuZuXb?utm_source=generator" 
            width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; 
            picture-in-picture" loading="lazy"></iframe>
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6IekUwd0bcbrw0QHygBVv7?utm_source=generator" 
            width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"></iframe>
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX17GkScaAekA?utm_source=generator" 
            width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; 
            fullscreen; picture-in-picture" loading="lazy"></iframe>
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4aOu12HE44A2qXqqwrqBEH?utm_source=generator" 
            width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; 
            fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </div>`
  var parser = document.createElement('div')
  parser.innerHTML = form
  console.log(title)
  app.appendChild(title)
  app.appendChild(parser)
}

let renderAdd = () => {
  app.innerHTML = ''
  let title = document.createElement('h1')
  title.innerHTML = 'Create a project'
  let form = `

    `
  var parser = document.createElement('div')
  parser.innerHTML = form
  console.log(title)
  app.appendChild(title)
  app.appendChild(parser)
}

let renderNotFound = () => {
  app.innerHTML = ''
  let title = document.createElement('h1')
  title.innerHTML = 'Seite nicht gefunden'
  let text = document.createElement('p')
  text.innerHTML = 'Comming soon'
  app.appendChild(title)
  app.appendChild(text)
}

let renderNavigation = () => {
  let navigation = document.querySelector('nav')
  Object.keys(routes).forEach(key => {
    if (routes[key].navlabel != undefined) {
      let link = document.createElement('a')
      link.onclick = () => {
        router.navigate(routes[key].hash)
      }
      link.innerHTML = routes[key].navlabel
      navigation.appendChild(link)
    }
  })
}
