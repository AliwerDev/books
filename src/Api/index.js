import axios from "axios";

const API_KEY = "U0If98nJruiMISvt1ydtvhsbioDYYydL";

export const getCategoriesApi = async () => {
  try {
    const res = await axios.get(
      `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API_KEY}`
    );
    return { success: true, data: res.data };
  } catch (error) {
    return { success: false };
  }
};

export const getBooksApi = async (list_name_encoded) => {
  console.log("keldiku");
  try {
    const res = await axios.get(
      `https://api.nytimes.com/svc/books/v3/lists/current/${list_name_encoded}.json?api-key=${API_KEY}`
    );
    console.log("nimadir", res);
    return { success: true, data: { id: list_name_encoded, data: res.data } };
  } catch (error) {
    return { success: false };
  }
};

// export const searchImg = async (page, value) => {
//   try {
//     const res = await instanceAxios.get(
//       `search?query=${value}&page=${page}&per_page=20`
//     );

//     return { success: true, data: res.data };
//   } catch (error) {
//     return { success: false };
//   }
// };
