import firebase from 'firebase'

export const getTasks = (id) => {
    return firebase.firestore().collection('task').where('user_id', '==', id).get().then((response)=>{
        var x = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
        return x
    }).catch((error)=>{
        console.log(error)
    })
}

export const addTasks = (task) => {
    return firebase.firestore().collection('task').add(task).then((response)=>{
        var x = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
        return x
    }).catch((error)=>{
        console.log(error)
    })
}

export const res = () => {
 
firebase.firestore().collection('task').add({
    name: 'Tokyo',
    country: 'Japan'
  });
  
  console.log('Added document with ID: ', res.id);
}