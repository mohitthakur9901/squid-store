
import { useSelector } from 'react-redux'
import { RootState } from '../redux-store/store'

const Profile = () => {
  const user = useSelector((state: RootState) => state.user)
  console.log(user);
  
  return (
    <div>
    </div>
  )
}

export default Profile