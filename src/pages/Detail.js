import React, { useEffect, useState } from 'react'
import Job from '../components/JobDetail'
import { useParams } from 'react-router-dom'
import axios from '../service/axios';

export default function Detail() {
    const param = useParams()
    const [data, setdata] = useState({})

    useEffect(() => {
        getDataJobs()
    }, [param.id])

    const getDataJobs = async () => {
        try {
            const { data } = await axios.get(`/jobs/detail/${param.id}`)
            setdata(data?.data)
        } catch (error) {
            console.log(error)
        } finally {
        }
    }

    return (
        <Job
            data={data}
        />
    )
}
