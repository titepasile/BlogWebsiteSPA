// Wenn ich mich einloggen möchte und auf anmelden klicke, kann der browser mein index.html nicht errichen. Ich habe nicht die
//geringste Ahnung wieso.
//-----------------------------------------------------------------

class Login {
  LoginFormular () {
    const form = document.getElementById('myform')
    // form.setAttribute('enctype', 'application/json')
    // form.setAttribute('method', 'POST')
    form.addEventListener('submit', ev => {
      ev.preventDefault()
      try {
        checkform()
        if (sessionStorage.getItem('token')) {
          alert('Sie haben sich erfolgreich eingeloggt')
        } else {
          alert('Melden Sie sich an')
          router.navigate('#login')
        }
      } catch (error) {
        alert('Funktioniert nicht: ${Error.message}')
      }
    })
  }

  checkform (ev) {
    const Benutzername = document.getElementById('Benutzername')
    const passwort = document.getElementById('Passwort')

    if (Benutzername.value.length < 5) {
      throw new Error('Username is to short')
    }
    if (Benutzername.value.length > 20) {
      throw new Error('Benutzername ist zu lang')
    }
    if (passwort.value.length < 12) {
      throw new Error('passwort ist zu kurz')
    }
  }
}
