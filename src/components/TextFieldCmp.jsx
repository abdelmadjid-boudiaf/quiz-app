import { Box, FormControl, TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { handleAmountChange } from '../app/feateurs/questionSlice/questionSlice'

const TextFieldCmp = () => {
    const dispatch = useDispatch()
    const handleChange = (e) => {
        dispatch(handleAmountChange(e.target.value))
    }
  return (
      <Box width='100%' mt={3}>
          <FormControl fullWidth >
              <TextField
                  onChange={handleChange}
                  variant='outlined'
                  label='Amount of questions'
                  type='number'
                  size='small'
              
              />
          </FormControl>
    </Box>
  )
}

export default TextFieldCmp