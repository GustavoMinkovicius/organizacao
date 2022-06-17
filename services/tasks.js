import firebase from 'firebase'

export const getTasks = (id) => {
    return firebase.firestore().collection('task').where('user_id', '==', id).get().then((response)=>{
        var x = response.docs.map(y=>y.data())
        return x
    }).catch((error)=>{
        console.log(error)
    })
}