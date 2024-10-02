import React, { useState } from 'react'
import "./Rating.module.css"
import styles from "./Movie.module.css";


const InputBox = ({handleCmtList}) => {





  const [cmt, setCmt] = useState("")
  const [name,setName] = useState("")

  const handleChange = (event) => {
    const {value} = event.target;
    setCmt(value)
    console.log(value)
  }
  const nameChange = (event) => {
    const {value} = event.target;
    setName(value)
    console.log(value)
  }
  const handleSubmit = (event) => {


    event.preventDefault();
    
    if (name==="" || !cmt) {
      alert("입력해라")
      return ;
    }
    
    const usercomment = {
      name: name,
      cmt: cmt
    }

    handleCmtList(usercomment)
    setCmt("")
    setName("")
    
  }

  return (
    <div>

      <form onSubmit={handleSubmit}>

    <div >
       <label >이름: <input onChange={nameChange} type="text" placeholder='홍길동' className={styles.inputbox1} value={name}></input></label>
       <label className={styles.inputbox3}>댓글: <input onChange={handleChange} type="text" placeholder='여기 평가를 적어주세요' className={styles.inputbox2} value={cmt}></input></label>
       </div>
       
        <button type='submit' className={styles.boxstyle}> 게시 </button>
      </form>

    </div>
  )
}

export default InputBox