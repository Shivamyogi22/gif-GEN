// import axios from "axios";
import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  

    const [tag, setTage] = useState("tom");
    // const [gif, setGif] = useState("");
    // const [loading, setLoading] = useState(false);

    // async function fetchData() {
    //     setLoading(true)
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const { data } = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     // console.log(imageSource);
    //     setGif(imageSource);
    //     setLoading(false)
    // }

    // useEffect(() => {
    //     fetchData();
    // }, []);

    const { gif, loading, fetchData } = useGif();

    return (
        <div className="w-1/2 bg-purple-950 rounded-2xl border border-black flex flex-col items-center gap-y-5 mt-[50px]">
            <h1 className="mt-[15px] text-white font-bold text-2xl">
                Random {tag} Gif
            </h1>

            {loading ? (
                <Spinner />
            ) : (
                <img src={gif} width="450px" alt="gif-img" />
            )}

            <input
                className="w-10/12 opacity-90 py-3 rounded-3xl text-black font-bold text-2xl bg-white mb-[20px] text-center"
                onChange={(event) => setTage(event.target.value)}
                value={tag}
                placeholder="Search the GIF"
            />

            <button
                className="w-9/12 opacity-60 py-3 rounded-3xl text-black font-bold text-2xl bg-white mb-[20px]"
                onClick={() => fetchData(tag)}
            >
                Generate
            </button>
        </div>
    );
};

export default Tag;
