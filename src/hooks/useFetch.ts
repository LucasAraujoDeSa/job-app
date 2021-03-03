import useSWR from "swr";
import api from "../services/api";

export const useFecth = <Data = any, Error = any>(url: string, InitialData?: Data) => {
  const {data, error} = useSWR<Data, Error>(url, async url=>{
    const response = await api.get(url);
    return response.data

  }, {initialData: InitialData})

  return {data, error}
}


