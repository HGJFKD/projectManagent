import React from 'react'
import Tab from '@mui/material/Tab';
import a11yProps from '../functions/a11yProps'
import TabProps from '../interfacies/typeTabProps';

const MuiTab = (props: TabProps) => {

    const {label, index} = props

  return (
    <Tab label={label} {...a11yProps(index)} />
  )
}

export default MuiTab