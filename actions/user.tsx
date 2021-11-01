import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import db from '../config/Firebase'


export const updateEmail = (input: any) => {
    return {type: 'UPDATE_EMAIL', payload: input}
}

export const updatePassword = (input: any) => {
    return {type: 'UPDATE_PASSWORD', payload: input}
}

export const updateUsername = (input: any) => {
    return {type: 'UPDATE_USERNAME', payload: input}
}


export const signup = () => {
    return async(dispatch: (arg0: { type: string; payload: { username: any; email: any; posts: never[]; bio: string; likes: number; photo: string } }) => void, getState: () => { (): any; new(): any; user: { username: any; email: any; password: any } }) =>{
        
        try {
        
            const {username, email, password} = getState().user
            const response = await firebase.auth().createUserWithEmailAndPassword(email, password)

            if(response.user.uid){
                alert('signup up')
                const user = {
                    uid: response.user.uid,
                    username: username,
                    email: email,
                    posts: [],
                    bio: '',
                    likes:0,
                    photo:''
                    
                }
                await db.collection('users').doc(response.user.uid).set(user)
                dispatch({type: 'LOGIN', payload: user})
                alert('User has been signed up')
            }
        } catch (error) {
            alert(error)
        }
        
    }

}