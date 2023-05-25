import Jobs from "../components/Jobs";
import { useEffect, useState } from "react";
import axios from '../service/axios';

function Home() {
    const [data, setdata] = useState({})
    const [pageData, setPageData] = useState(1)
    const [location, setlocation] = useState("")
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [loading, setLoading] = useState(false);

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
            setLoading(true)
            const resAxios = await axios.get(`/jobs?page=${pageData}&total=6&location=${location}&description=${description}&type=${type}`)
            setdata({
                total: resAxios?.data?.total,
                data: data?.data ?
                    [...data?.data, ...resAxios?.data?.data] :
                    resAxios?.data?.data
            });
        } catch (error) {
            // console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className="wp-filter">
                <div className="header-container">
                    <ul className="wp-filter">
                        <input type="text" placeholder="Description" className="input-text" onChange={(e) => setDescription(e.target.value)} />
                        <input type="text" placeholder="Location" className="input-text" onChange={(e) => setlocation(e.target.value)} />
                        <div className="radio">
                            <input
                                type="radio"
                                checked={type?.length}
                                onChange={(e) => {
                                    setType(type?.length ? "" : "Full Time")
                                }}
                                name="type"
                            />
                            <div>Full Time</div>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="wp-jobs">
                <Jobs
                    data={data?.data}
                />
                <div className="wp-jobs wp-bottom">
                    {
                        data?.data?.length < data?.total ?
                            <button className='button' onClick={() => {
                                setPageData(pageData + 1)
                            }}>
                                {loading ? "Loading" : <a> Load</a>}
                            </button>
                            : ""
                    }
                </div >
            </div >
        </>
    );
}

export default Home;
