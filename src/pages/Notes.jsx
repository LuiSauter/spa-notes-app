import Loading from '../components/Loading/Loading'
import ListNotes from '../components/Notes/ListNotes'
import SubTitles from '../styles/SubTitles'
import useFetch from '../hooks/useFetch'
import PendingNotes from '../styles/Notes/PendingNotes'
function Notes () {
  const { loading } = useFetch()
  return (
    <PendingNotes>
      <SubTitles>PENDING NOTES</SubTitles>
      {
        loading ? <div className='load'><Loading /></div> : ''
      }
      <ListNotes />
    </PendingNotes>
  )
}

export default Notes
