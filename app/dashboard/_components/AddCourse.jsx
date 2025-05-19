"use client"
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { useContext } from 'react';
import { Button } from '../../../components/ui/button';
import { UserCourseListContext } from '../../_context/UserCourseListContext';

const Addcourse = () => {
    const {user} =  useUser();
    const{userCourseList, setUserCourseList} = useContext(UserCourseListContext)
    
    console.log(userCourseList?.length);
  const isAdmin = user?.primaryEmailAddress?.emailAddress == 'aryans12345678@gmail.com' || "gurpreetsehaj1005@gmail.com" || "pinak650.be22@chitkara.edu.in";
  const hasCourseLimit = userCourseList?.length >= 2;
  const destination = isAdmin || !hasCourseLimit ? '/create-course' : '/dashboard/upgrade';
    
  return (
    <div  className='flex justify-between items-center'>
        <div>
            <h2 className='text-xl'>Hello, <span className='font-bold'> {user?.fullName} </span> </h2>
            <p className='text-sm text-gray-500'>Create new course with Ai, Share with friends!</p>
        </div>

        <Link href={destination}>
        <Button variant="startButton">+ Create AI Course</Button>
        </Link>
        
    </div>
  )
}

export default Addcourse