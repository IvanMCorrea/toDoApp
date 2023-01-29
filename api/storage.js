import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key, value) => {
  try {
    const storage = await AsyncStorage.getItem(key);
    let data = storage != null ? JSON.parse(storage) : null;
    if (data) {
      data.push(value);
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(key, jsonValue);
    } else {
      const jsonValue = JSON.stringify([value]);
      await AsyncStorage.setItem(key, jsonValue);
    }
  } catch (e) {
    console.log("error: ", e);
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("error: ", e);
  }
};

const deleteData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log("error: ", e);
  }
};

const deleteItemByPosition = async (index) => {
  try {
    const jsonValue = await AsyncStorage.getItem("TO_DO_LIST");
    const data = jsonValue != null ? JSON.parse(jsonValue) : null;
    if (data) {
      try {
        data.splice(index, 1);
        const jsonReturn = JSON.stringify(data);
        await AsyncStorage.setItem("TO_DO_LIST", jsonReturn);
      } catch (error) {
        console.log("error: ", error);
      }
    }
  } catch (e) {
    console.log("error: ", e);
  }
};

export { storeData, getData, deleteData, deleteItemByPosition };
