
import {Stack} from '@mui/material';
import { categories } from '../../utilities/constants';
import '../../index.css'

const Sidebar = ({selectedCategory, setSelectedCategory}) => (
  <Stack direction='row' sx={{
      overflowY: 'auto',    
      height: {sx: 'auto', md: '95%'}, 
      flexDirection: {md: 'column'}
    }}
  >
    {categories.map((category) => (
        <button 
          className='category-btn'
          style={{
            backgroundColor: category.name===selectedCategory && '#fc1503',
            color: 'white'
          }}
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
        >
            <span style={{
                color: category.name === selectedCategory ? 'white': 'red', 
                marginRight: '15px'
              }}
            >
                {category.icon}
            </span>
            <span style={{
                opacity: category.name === selectedCategory? '1': '0.8'
              }}
            >
                {category.name}
            </span>
        </button>
    ))}
  </Stack>
)

export default Sidebar
