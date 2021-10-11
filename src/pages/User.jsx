import SubTitles from '../components/SubTitles'
import CreateUser from '../components/User/CreateUser'
import useFetch from '../hooks/useFetch'

function User () {
  const { getUser, handleNewUser, deleteUser } = useFetch()
  return (
    <>
      <SubTitles>Create User</SubTitles>
      <CreateUser
        getUser={getUser}
        handleNewUser={handleNewUser}
        deleteUser={deleteUser}
      />
    </>
  )
}

export default User
