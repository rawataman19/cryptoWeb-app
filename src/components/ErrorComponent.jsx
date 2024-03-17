import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const ErrorComponent = ({message}) => {
  return (
     <Alert status='error' position={"fixed"} top={"20"} left={"50%"} transform={"translateX(-50%)"} w={"container.lg"}  height={"20"} >
      <AlertIcon>{message}</AlertIcon>
    </Alert>
  )
}

export default ErrorComponent