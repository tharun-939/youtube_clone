
import {Stack, Box} from '@mui/material'
import VideoCard from '../VideoCard'
import ChannelCard from '../ChannelCard'
import Loader from '../Loader'

const Videos = ({videos, direction, fromVideoDetails}) => {
  if(!videos?.length) return <Loader />;

  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='space-evenly' gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx} sx={{width: {xs: '100%', sm: '320px', md: '330px'}}}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos