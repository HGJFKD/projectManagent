import { Box, Button } from '@mui/material'
import useClickCount from '../../hooks/EX/useClickCount'

type Props = {};

const TowBtn = (props: Props) => {

    const { count: blueBtnCount, increment: setBlueBtnCount } = useClickCount()
    const { count: greenBtnCount, increment: setGreenBtnCount } = useClickCount()
    const { count: mouseBtnCount, increment: setMouseBtnCount } = useClickCount()

    return (
        <Box>
            <Button
                variant='contained'
                onClick={setBlueBtnCount}
            >
                Blue
            </Button>
            <span>Blue clicked: {blueBtnCount}</span>
            <br />
            <Button
                variant="contained" color="success"
                onClick={setGreenBtnCount}
            >
                Green
            </Button>
            <span>Green clicked: {greenBtnCount}</span>
            <br />

            <Box onMouseEnter={setMouseBtnCount}>Box</Box>
            <span>Box entered: {mouseBtnCount}</span>
            <br />
        </Box>
    )
}

export default TowBtn