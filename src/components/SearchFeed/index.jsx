
import {useState, useEffect} from 'react'
import {Box, Typography} from '@mui/material'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../../utilities/fetchFromApi'
import Videos from '../Videos'
import '../../index.css'

const SearchFeed = () => {
    const [videos, setVideos] = useState([]);
    const {searchTerm} = useParams()
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
        .then((data) => setVideos(data.items))
    }, [searchTerm])

    return (
      <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography 
          variant='h4' 
          fontWeight='bold'
          mb={2} 
          sx={{color: 'white'}}
        >
          Search Results for: <span style={{color: '#fc1503'}}>{searchTerm}</span> videos
        </Typography>
        <Videos videos={videos} />
      </Box>
    )
}

export default SearchFeed
