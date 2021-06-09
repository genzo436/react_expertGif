
const apiKey = process.env.REACT_APP_GIPHY_KEY;

export const getGifs = async(category, limitImages = 5) => {

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limitImages}&api_key=${apiKey}`;
  const resp = await fetch(url);
  const {data} = await resp.json();
  const gifs = data.map((img)=> {
    return {
      'id': img.id,
      'url': img.images?.downsized_large.url,
      'title': img.title,
    };
  }); 
  return gifs;
};