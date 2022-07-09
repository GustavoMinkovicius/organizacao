import firebase from 'firebase'

export const deleteTask = (id) => {
    return firebase.firestore().collection('task').doc(id).delete()
    .then((response)=>{
        console.log("Atividade apagada")
    }).catch((error)=>{
        console.log(error)
    })
}
