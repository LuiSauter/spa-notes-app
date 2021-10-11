import CreateNote from '../components/Notes/CreateNote'
import SubTitles from '../components/SubTitles'
import useFetch from '../hooks/useFetch'
import useNote from '../hooks/useNote'
function Create () {
  const { getUser } = useFetch()
  const { note, PostNoteAdd } = useNote()
  return (
    <>
      <SubTitles>CREATE NOTE</SubTitles>
      <CreateNote
        getUser={getUser}
        note={note}
        PostNoteAdd={PostNoteAdd}
      />
    </>
  )
}

export default Create
