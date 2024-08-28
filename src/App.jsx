import { useState } from 'react'
import data from './data'
import { nanoid } from 'nanoid';

function App() {
  const [count, setCount] = useState(1);
  const [text, setText]= useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(count)
    let ammount = parseInt(count);
    setText(data.slice(0, ammount));
   
  }


  return (
    <section className='section-center'>
      <h4>Tired Of Lorem Ipsum?</h4>
      <form action="" className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs</label>
        <input type="number" name="amount" id="amount" min='1' step='1' max='8' value={count} onChange={(e)=>setCount(e.target.value)} />
        <button type="submit" className='btn'>Generate</button>
      </form>
     

     <div className="lorem-text">
      {text.map((item)=>{
        return <p key={nanoid()}>{item}</p>  // item is a paragraph from the data array. Each paragraph is rendered as a new paragraph.  // key is used to identify each element uniquely.  // map function is used to iterate over the array and create a new array with elements.
      })}
     </div>
       
    </section>
  )
}

export default App
