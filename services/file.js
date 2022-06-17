import AsyncStorage from "@react-native-async-storage/async-storage"
export const storeData = async (key, value) => {
        try {
            console.log(key, value)
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
  