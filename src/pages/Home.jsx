import React,{useState} from 'react'
import { Button, Col,Row } from 'react-bootstrap'
import { QuizData } from '../Components/QuizData'
import { Link } from 'react-router-dom';


function Home() {

  const [currentQs,setCurrentQs]=useState(0);
  const [showScore,setShowScore] = useState(false);
  const [score,setScore]=useState(0)

  const handleAnsButtonClick =(isCorrect)=>{
    if(isCorrect===true){
        setScore(score+1)
    }
    const nxtQs=currentQs+1
    if(nxtQs<QuizData.length){
      setCurrentQs(nxtQs)
    }else{
      setShowScore(true);
    }
    
  }
 
  return (
   
      <div style={{height:'550px',width:'430px',background:'linear-gradient(35deg,rgb(115,40,120),rgb(58,30,120),rgb(200,140,60))'}} className="container shadow border mt-5">
        {
          showScore ?
            <div className='d-flex text-light flex-column align-items-center justify-content-center border bg-secondary bg-opacity-10 rounded shadow mt-5' style={{height:'200px'}}>
              <h1>Thank You !!!</h1>
              <h3 style={{fontStyle:'italic'}}>Your Score is <span style={{color:'turquoise',fontWeight:'bolder'}}>{score}</span> out of {QuizData.length}</h3>
              <Link to='/'><button className="btn btn-dark mt-3 fw-bold" >Restart</button></Link>
            </div>  
          :
         <div>
            <h1 className='text-center text-light fw-bolder mt-2'>Quiz</h1>
            <p className='ms-2 text-info fw-bolder'>Question {currentQs+1} out of 10</p>
            <h4 className='ms-4 fw-bolder text-light mt-4'>{QuizData[currentQs].qs}</h4>
              <Row className='ms-2'>
                <Col sm={12} md={6} className='mt-3' >
                   {
                    QuizData[currentQs].answer.map(option=>(<Button onClick={()=>handleAnsButtonClick(option.isCorrect)} style={{width:'350px'}} className="btn btn-light btn-outline-warning btn-block me-md-5 mb-4 fw-bold">{option.ans}</Button>))
                   }
                </Col>
                
              </Row>
         </div>
            
        }
              
      </div>
  )
}

export default Home


