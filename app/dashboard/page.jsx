import Addcourse from './_components/AddCourse'
import UserCourseList from './_components/UserCourseList'


const Dashboard = () => {
  return (
    <div>
      {/* <UserButton/> */}
      <Addcourse/>
      {/* display list of course  */}
      <UserCourseList />
      
    </div>
  )
}

export default Dashboard