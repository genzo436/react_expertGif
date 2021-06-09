import { useEffect } from "react";
import { useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ({category}) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  })

  useEffect(()=>{
    setTimeout(() => {
      getGifs(category).then((imgs) => setState({
        data: imgs,
        loading: false,
      }));
    }, 500);
  },[category]);

  return state;
};