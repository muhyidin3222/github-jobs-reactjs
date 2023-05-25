import Jobs from "../components/Jobs";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from '../service/axios';

function Home() {
    const [data, setdata] = useState([])
    const [pageData] = useState(1)
    const [location, setlocation] = useState("")
    const [filterKeywords, setfilterKeywords] = useState([]);
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");

    useEffect(() => {
        getDataJobs()
    }, [
        pageData,
        location,
        type,
        description
    ])
    
    const getDataJobs = async () => {
        try {
            const { data } = await axios.get(`/jobs?page=${pageData}&total=10&location=${location}&description=${description}&type=${type}`)
            setdata(data?.data)
        } catch (error) {
            console.log(error)
        } finally {
        }
    }

    const addFilterKeywords = (data) => {
        if (!filterKeywords.includes(data)) {
            setfilterKeywords([...filterKeywords, data]);
        }
    };

    const deleteKeyword = (data) => {
        const newKeywords = filterKeywords.filter((key) => key !== data);
        setfilterKeywords(newKeywords);
    };

    const clearAll = () => {
        setfilterKeywords([]);
    };

    return (
        <>
            <div className="wp-filter">
                {filterKeywords.length > 0 ? (
                    <Header
                        keywords={filterKeywords}
                        removeKeywords={deleteKeyword}
                        clearAll={clearAll}
                    />
                ) :
                    <div className="header-container">
                        <ul className="wp-filter">
                            <input type="text" placeholder="Description" className="input-text" onChange={(e) => setDescription(e.target.value)} />
                            <input type="text" placeholder="Location" className="input-text" onChange={(e) => setlocation(e.target.value)} />
                            <div className="radio">
                                <input
                                    type="radio"
                                    // value={type?.length}
                                    checked={type?.length}
                                    onChange={(e) => {
                                        // console.log(e.target)
                                        // if (e.target.value)
                                        setType(type?.length ? "" : "Full Time")
                                    }}
                                    name="type"
                                />
                                <div>Full Time</div>
                            </div>
                        </ul>
                    </div>
                }
            </div>
            <div className="wp-jobs">
                <Jobs
                    keywords={filterKeywords}
                    data={data}
                    setKeywords={addFilterKeywords}
                />
            </div>
        </>
    );
}

export default Home;
