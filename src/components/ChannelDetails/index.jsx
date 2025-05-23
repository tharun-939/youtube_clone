import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material'
import Videos from '../Videos'
import ChannelCard from '../ChannelCard'
import { fetchFromAPI } from '../../utilities/fetchFromApi'

const ChannelDetails = () => {
    const [channelDetails, setChannelDetails] = useState();
    const [videos, setVideos] = useState([]);
    const {id} = useParams();
    console.log(id) 

    useEffect(() => {
        const fetchResults = async () => {
            const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
            setChannelDetails(data?.items[0]);

            const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
            setVideos(videosData?.items);
        }
        
        fetchResults();
    }, [id]);
    console.log(videos, channelDetails)

    return (
        <Box minHeight='95vh'>
             <Box>
                <div style={{
                    background: 'linear-gradient(187deg,rgba(34, 193, 195, 1) 53%, rgba(253, 187, 45, 1) 100%)',
                    zIndex: 10,
                    height: '300px'
                  }}
                />
                <ChannelCard 
                    channelDetail={channelDetails} 
                    marginTop='-110px' 
                />
                <Box p='2' display="flex">
                    <Box sx={{ mr: { sm: '100px' } }}/>
                    <Videos videos={videos} />
                </Box>
             </Box>

        </Box>
    )
}

export default ChannelDetails
