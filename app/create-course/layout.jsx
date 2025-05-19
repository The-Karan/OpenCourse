"use client"

import { useState } from 'react'
import { UserInputContext } from '../_context/UserInputContext'
import Header from '../dashboard/_components/Header'

const CreateCourseLayout = ({children}) => {
    const [userCourseInput, setUserCourseInput] =  useState([]);
  return (
    <div>
<UserInputContext.Provider value={{userCourseInput, setUserCourseInput}}>

    <>

    <Header/>
    <div>{children}</div>
    </>
</UserInputContext.Provider>
    </div>
  )
}

export default CreateCourseLayout