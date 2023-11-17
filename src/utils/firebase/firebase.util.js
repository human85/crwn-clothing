// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCFAafMZayB7w0UlZrG1Eu3Jv7ywc0ticM',
  authDomain: 'crwn-clothing-d1e7d.firebaseapp.com',
  projectId: 'crwn-clothing-d1e7d',
  storageBucket: 'crwn-clothing-d1e7d.appspot.com',
  messagingSenderId: '573642915932',
  appId: '1:573642915932:web:c3dde4f1f 4df45944e2699'
}

// Initialize Firebase
// const firebaseApp =
initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
// 新开窗口登录
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
// 当前页面跳转登录
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)
// 获取 firestore 数据库实例
export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
  if (!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  // 文档不存在根据用户信息创建文档
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }

  return userDocRef
}

// 根据邮箱与密码创建用户
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

// 通过邮箱密码登录
export const signInAuthUserWithEmailAndPassword = (email, password) => {
  if (!email || !password) return

  return signInWithEmailAndPassword(auth, email, password)
}

// 退出登录
export const signOutUser = () => signOut(auth)

export const onAuthStateChangedListener = callback => onAuthStateChanged(auth, callback)
