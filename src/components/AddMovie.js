import React,{useState} from 'react';
import Modal from 'react-modal';
 import Rate from'./Rate';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    color :'#e0ece4',
    backgroundColor :'#50a3a2'
  }
};


function AddMovie({handleAdd}){               //state pour update chaque input dans le modal.
const[name,setName]=useState("");
const[type,setType]=useState("");
const[date,setDate]=useState("");
const[rating,setRating]=useState("");
const[description,setDescription]=useState("");
const[image,setImage]=useState("");



const add=(e)=>{
let newMovie={
  id:Math.random,
name,
type,
date,
imgUrl:image,
description,
rating
}
handleAdd(e,newMovie)
setIsOpen(false)
setName("")
setType("")
setDate("")
setImage("")
setDescription("")
setRating("")
}

  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#43658b';
    subtitle.style.fontFamily='serif'
    subtitle.style.textAlign='center'
  }
 
  function closeModal(){
    setIsOpen(false);
  }
  return (
    <div>
      <button className="add-btn" onClick={openModal}>Add</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='form'>
        <h2 ref={_subtitle => (subtitle = _subtitle)}>Add New Movie</h2>
        
      
        <form >
          <label>image Movie:</label>
          <input type='url' name="image"  required    value={image} onChange={(e)=>setImage(e.target.value)} /> <br/>
          <label> Name Movie:</label>
          <input type="text" required   value={name} onChange={(e)=>setName(e.target.value)}      /> <br/>
          
          <label> Date Movie:</label>
          <input type="text"  required    value={date} onChange={(e)=>setDate(e.target.value)}                         />  <br/>

          <label> Type Movie:</label>
          <input type="text"  required   value={type} onChange={(e)=>setType(e.target.value)}                        /> <br/>
          <Rate  rating= {rating}  /> 
          <label> Rating Movie:</label>
          <input type="number"      value={rating} onChange={(e)=>setRating(e.target.value)}                  />
          <br/>
          <label> Description Movie:</label>
          <input type="text" required       value={description} onChange={(e)=>setDescription(e.target.value)}              /> <br/>
           <button  className="add-btn" onClick={add} > Save </button>
          <button  className="add-btn" onClick={closeModal}>close</button>
            
          </form>
          </div>
        </Modal>
        
      </div>)}

export default AddMovie;