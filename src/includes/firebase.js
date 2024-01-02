import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBK0CVKVzlYRY7krKZar24Oo0bVzko25yc',
  authDomain: 'music-63052.firebaseapp.com',
  projectId: 'music-63052',
  storageBucket: 'music-63052.appspot.com',
  appId: '1:306373479030:web:cadd35bf8bba7e783e2d57'
}

export default firebase.initializeApp(firebaseConfig)
