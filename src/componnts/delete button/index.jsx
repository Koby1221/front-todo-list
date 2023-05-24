function DeleteButton({ onClick }) {
        
    return (
        <div >
            <button style={{background:" #FF4444"}}  onClick={() => { onClick && onClick() }}>DELETE</button>
                
        </div>
    )
}

export default DeleteButton;