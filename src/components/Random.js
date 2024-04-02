// import axios from "axios";
// import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
    //     // REACT_APP_GIPHY_API_KEY='eWRiRsCaaOTYmV6Q648dMtvOpklxkt0i'

    //     const [gif, setGif] = useState("");
    //     const [loading, setLoading] = useState(false);

    //     async function fetchData() {
    //         setLoading(true)
    //         const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //         const { data } = await axios.get(url);
    //         const imageSource = data.data.images.downsized_large.url;
    //         // console.log(imageSource);
    //         setGif(imageSource);
    //         setLoading(false)
    //     }

    //     useEffect(() => {
    //         fetchData();
    //     }, []);

    const { gif, loading, fetchData } = useGif();

    return (
        <div className="w-1/2 bg-red-950 rounded-2xl border border-black flex flex-col items-center gap-y-5 mt-[50px]">
            <h1 className="mt-[15px] text-white font-bold text-2xl">
                A Random Gif
            </h1>

            {loading ? (
                <Spinner />
            ) : (
                <img src={gif} width="450px" alt="gif-img" />
            )}

            <button
                className="w-9/12 opacity-60 py-3 rounded-3xl text-black font-bold text-2xl bg-white mb-[20px]"
                onClick={() => fetchData()}
            >
                Generate
            </button>
        </div>
    );
};

export default Random;
