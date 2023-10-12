import React from 'react'
import useLocalStotageManagement from '../../hooks/EX/useLocalStotageManagement'
import Box from '@mui/material/Box'
import Input from '@mui/material/Input'

const LocalStotageManagement = () => {
    const { lecalStorage: item, addItem: addItem } = useLocalStotageManagement()


    return (
        <Box>
            <Input aria-label='hjhg' type={'text'} value={item}></Input>
        </Box>
    )
}

export default LocalStotageManagement
