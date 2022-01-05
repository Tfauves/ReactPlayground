import axios from "axios";
import React, {useState, useEffect} from "react";

const NewsContext = React.createContext({});

const NewsProvider = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const getNews = async (query) => {
            try {
                const res = await axios.get()
            }
        }
    })
}