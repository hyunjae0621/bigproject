import React, { useState } from 'react'
import "./Rating.module.css"
import styles from "./Movie.module.css";


const InputBox = ({handleCmtList}) => {

  const [cmt, setCmt] = useState("")
  const handleChange = (event) => {
    const {value} = event.target;
    setCmt(value)
    console.log(value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    handleCmtList(cmt)

  }

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder='여기 댓글을 달아주세요' className={styles.inputbox} value={cmt}></input>
        <button type='submit' className={styles.boxstyle}> 게시 </button>
      </form>

    </div>
  )
}

export default InputBox