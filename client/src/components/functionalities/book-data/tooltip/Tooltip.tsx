
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import { FaBook } from 'react-icons/fa'

const MyTooltip = () => {
  return (
    <div
    >
      <Grid container justifyContent="center">
        <Grid item>
          <Tooltip
            title="You have not started reading this book"
            placement="top"
          >
            <Button>
              <FaBook />
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  )
}

export default MyTooltip
