// import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useGif = (tag) => {
    // REACT_APP_GIPHY_API_KEY='eWRiRsCaaOTYmV6Q648dMtvOpklxkt0i'

    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState("false");
    // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    async function fetchData(tag) {
        setLoading(true);
        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const imageSource = data.data.images.downsized_large.url;
        // console.log(imageSource);
        setGif(imageSource);
        setLoading(false);
    }

    useEffect(() => {
        fetchData("tom");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { gif, loading, fetchData };
};

export default useGif;
