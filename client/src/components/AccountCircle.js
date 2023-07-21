import { Person } from '@mui/icons-material'

export default function AccountCircle(props) {

    const handleClick = () => {
        props.setModalIsOpen(true)
    }

  return (
    <div 
        className="account-circle"
        onClick={handleClick}
    >
        <Person 
            style={{ color: "white", fontSize:40 }}
        />
    </div>
  )
}
