import fireApp from './_firebase'
import router from '@/router'

export default {
  logOut () {
    fireApp.auth().signOut()
    router.push({ name: 'login' })
  },

  checkUser () {
    let user = fireApp.auth().currentUser
    if (user) {
      return user
    }
  },

  actualizarUsuario (data) {
    let newUser = {
      displayName: data.displayName,
      displayLastName: data.apellido,
      email: data.email
    }

    fireApp
      .auth()
      .updateCurrentUser(newUser)
      .catch(err => console.table(err))
    router.push('about')
  },

  login (data) {
    fireApp.auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then(result => {
        console.log(result)
        router.push({ name: 'perfil' })
      })
      .catch(err => {
        console.log(err)
      })
  },

  Registrarse (data) {
    if (
      data.name === '' ||
      data.apellido === '' ||
      data.email === '' ||
      data.password === ''
    ) {
      return alert('todos los campos son obligatorios')
    }
    fireApp
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(result => {
        let newUser = {
          displayName: data.name,
          displayLastName: data.apellido,
          email: result.user.email,
          id: result.user.id
        }

        fireApp
          .auth()
          .updateCurrentUser(newUser)
          .catch(err => console.table(err))
      })
      .catch(err => {
        console.table(err)
      })
    console.log(data)
  }
}
