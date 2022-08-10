import AsyncStorage from "@react-native-async-storage/async-storage"
export const storeData = async (key, value) => {
        try {
            console.log("O ", key, "é: ", value)
          await AsyncStorage.setItem(key, value)
        } catch (e) {
          // saving error
          console.log(e)
        }   
      }

export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        return value
    } catch(e) {
      // error reading value
    }
  }
  
export const RemoveData = async (key)=> {
  try{
    await AsyncStorage.removeItem(key)
  }catch (e){
    console.log(e)
  }
}

  // file.js é um services criado para impedir que o usuario tenha que fazer o login em sua conta toda vez que desejar entrar no aplicativo