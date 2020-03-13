import fireApp from './_firebase'
import router from '@/router'

export default {
  logOut () {
    fireApp.auth().signOut()
    router.push({ name: 'login' })
  },

  async checkUser () {
    let user = await fireApp.auth().currentUser
    if (user) {
      return user
    }
    return null
  },

  async login (data) {
    await fireApp
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(result => {
        console.log(result)
        router.push({ name: 'perfil' })
      })
      .catch(err => {
        console.log(err)
        return Promise.reject(err)
      })
  },

  async Registrarse (data) {
    if (
      data.name === '' ||
      data.apellido === '' ||
      data.email === '' ||
      data.password === ''
    ) {
      return alert('todos los campos son obligatorios')
    }
    await fireApp
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(result => {
        let newUser = {
          displayName: data.name,
          displayLastName: data.apellido,
          email: result.user.email,
          uid: result.user.id
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
  },
  getUser () {
    return fireApp.auth().currentUser
  }
}
