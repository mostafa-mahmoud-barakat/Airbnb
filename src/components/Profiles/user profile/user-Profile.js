import React, { useEffect, useState } from 'react'
import Header from './../../Header';
import { useSelector } from 'react-redux';
import Footerhostormore from './../../../pages/pagehost/footerhostormore';
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from 'react-router-dom';
// import "../../../components/cardStyle.css"
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db, storage } from '../../../firebaseConfig';
import { useTranslation } from 'react-i18next';
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";

export default function UserProfile() {
  const { t } = useTranslation();
  const [dis,setDis]=useState({
    reservsion:true,
    Requests:false,
    accept:false,
    rej:false
  })
  const display = (e)=>{
    if(e === "Reservation"){
      setDis({...dis,reservsion:true,
        Requests:false,
        accept:false,
        rej:false})

    }else if(e==="Requests"){
      setDis({...dis,reservsion:false,
        Requests:true,
        accept:false,
        rej:false})

    }else if(e=== "Accepted"){
      setDis({...dis,reservsion:false,
        Requests:false,
        accept:true,
        rej:false})

    }else if(e==="Rejected"){
      setDis({...dis,reservsion:false,
        Requests:false,
        accept:false,
        rej:true})

    }else{
      setDis({...dis,reservsion:false,
        Requests:false,
        accept:false,
        rej:true,})

    }

  }

  const x = useSelector((state)=>state.userData.info)
  const allData = useSelector((state)=>state.allRequests.requests)
  const accepted = allData.filter(info=>info.email == x.email)


  const[review,setReview]= useState([])
  const reviewCollection = collection(db, "AskRequest")
  const reviewData = review.filter(info=>info.email == x.email)


  const[reject,setRejected]= useState([])
  const requestCollect = collection(db, "Rejected")
  const rejectedData = reject.filter(info=>info.email == x.email)




  const imagesRefr = ref(storage,x.path)
 

  const [uuu,setUrl]=useState("")
  useEffect(()=>{

    const getReject = async()=>{
      const data = await getDocs(requestCollect);
      setRejected(data.docs.map( (doc) => ( {...doc.data(), id: doc.id} ) ))
   };

   const getReview = async()=>{
    const data = await getDocs(reviewCollection);
    setReview(data.docs.map( (doc) => ( {...doc.data(), id: doc.id} ) ))
 };
 getDownloadURL(imagesRefr).then((res)=>{
  setUrl(res);
 })

   getReject()
   getReview()
  },[])
 
  function toDetail(){}

  const[reviews,setReviews]=useState({
    comnt:"",
    rate:"",
  })
  const rev = (e)=>{
    if(e.target.name =="comt"){
      setReviews({...reviews,comnt:e.target.value})

    }else if(e.target.name =="rat"){
      setReviews({...reviews,rate:e.target.value})
    }
  }
  const sendNow = (d)=>{
    const sentData = [{name:x.name,imgs:uuu,comment:reviews.comnt, rating:reviews.rate}]
    // const newArr=d.comments
    
    const uplod = async()=>{
      const dos = doc(db , "Requests" , d.id)
          const newDat = {comments : sentData}
           await updateDoc(dos,newDat)
           console.log(newDat)
    }
    
    uplod()

  }
  
  return (<>
  
  {console.log(uuu)}
  <Header />
  <div className='container'>
    <div className='row py-5'>
      <div className='col-md-3 border border-1 rounded p-3 text-center h-50'>
        <div className=' '>
          <img className='rounded-circle w-75' src={uuu}/>
        </div>
        
        <div className='my-2'>
          <h4>{x.name}</h4>
        </div>
      </div>
      <div className='col-md-9 px-5'>
        <h2>Hi, {x.name}</h2>
        
      <div className='text-center'>
        <button type="button" className={`btn  btn-outline-light text-dark border-0 `}onClick={(e)=>display(e.target.innerHTML)}>Reservation</button>
        <button type="button" className='btn  btn-outline-light text-dark border-0 mx-2'onClick={(e)=>display(e.target.innerHTML)}>Requests</button>
        <button type="button" className='btn  btn-outline-light text-dark border-0 mx-2'onClick={(e)=>display(e.target.innerHTML)}>Accepted</button>
        <button type="button" className='btn  btn-outline-light text-dark border-0'onClick={(e)=>display(e.target.innerHTML)}>Rejected </button>
      </div>
        <hr className='mb-0'></hr>
        {(dis.reservsion)?<><h5>Reservsions</h5>
        {(x.reservsion.length ===0)?<h6 className='text-center'>There is no Reservesion Data </h6>:
               <div className="row ">
          {x.reservsion.map((dat,ky)=><Card className={`col-lg-4 col-md-4 col-sm-6 col-xs-12 border-0 `}  key={ky} >
        <div className='w-100'>
          <Carousel
          className="parent"
            interval={50000}
          >
            <Carousel.Item>
              <img  
                className="d-block rounded wdth " 
                src={dat.Url}
                alt="First slide"
                // width={640} 
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block  rounded wdth"
                src={dat.Url2}
                alt="Second slide"
                // width={640} 

              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block rounded wdth "
                src={dat.Url3}
                alt="third slide"
                // width={640}  

              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block rounded wdth"
                src={dat.Url4}
                alt="forth slide"
                // width={640} 

              />
            </Carousel.Item>
          </Carousel>
        
        <Link to={`/details`} key={dat.id} style={{textDecoration:'none'}}>
          <Card.Body className="text-muted">
           <div className='d-flex flex-row justify-content-between text-black'>
             <Card.Title onClick={()=>toDetail(dat)} >{dat.address}</Card.Title>
             <div> <StarIcon fontSize="inherit"/> 5.0</div>
             </div>
            <div >3.200 kilometers away</div>
            <div >Aug 29-sep 3</div>
            <div >${dat.price} {t("total")}</div>
          </Card.Body>
          </Link>
          <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add Comment and Rate
</button>
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add Review</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="input-group mb-2">
        <input type="text" className="form-control"name='comt'placeholder='Your Comment' value={reviews.comnt} onChange={(e)=>rev(e)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
      </div>
      <div className="input-group mb-2">
        <input type="number" min={0} max={5} name='rat' placeholder='Rate' value={reviews.rate} onChange={(e)=>rev(e)} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
      </div>
        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" onClick={()=>sendNow(dat)}>Save changes</button>
      </div>
    </div>
  </div>
</div>
          </div>
          
        </Card>)}
        </div>}</>

        
      
      :(dis.Requests)?<><h5>Host Requests</h5>
      {(reviewData.length === 0)?<h6 className='text-center'>There is no Requests in Review </h6>:
        <div className="row ">
        {reviewData.map((dat,ky)=><Card className="col-lg-4 col-md-4 col-sm-6 col-xs-12 border-0 "  key={ky} >
            <div className='w-100'>

                    <Carousel
        
                      interval={50000}
                    >
                      <Carousel.Item>
                        <img  
                          className="d-block rounded wdth w-100" 
                          src={dat.Url}
                          alt="First slide"
                          // width={640} 
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block  rounded wdth"
                          src={dat.Url2}
                          alt="Second slide"
                          // width={640} 
        
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block rounded wdth "
                          src={dat.Url3}
                          alt="third slide"
                          // width={640}  
        
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block rounded wdth"
                          src={dat.Url4}
                          alt="forth slide"
                          // width={640} 
        
                        />
                      </Carousel.Item>
                      
                    </Carousel>
                  
                  <Link to={`/details`}  style={{textDecoration:'none'}}>
                    <Card.Body className="text-muted">
                     <div className='d-flex flex-row justify-content-between text-black'>
                       <Card.Title onClick={()=>toDetail(dat)} >{dat.address}</Card.Title>
                       <div> <StarIcon fontSize="inherit"/> 5.0</div>
                       </div>
                      <div >3.200 kilometers away</div>
                      <div >Aug 29-sep 3</div>
                      <div >${dat.price} night</div>
                    </Card.Body>
                    </Link>
                    </div>
                  </Card>
        
        )}
        </div>}
      
      
      
      
      
      
      </>
      
      
      
      :(dis.accept)?<><h5>Accepted Requsts</h5>
      {(accepted.length <= 0)?<h6 className='text-center'>There is no Acceptance Yet</h6>:
        <div className="row ">
        {accepted.map((dat,ky)=><Card className="col-lg-4 col-md-4 col-sm-6 col-xs-12 border-0 "  key={ky} >

                    <Carousel
        
                      interval={50000}
                    >
                      <Carousel.Item>
                        <img  
                          className="d-block rounded wdth " 
                          src={dat.Url}
                          alt="First slide"
                          // width={640} 
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block  rounded wdth"
                          src={dat.Url2}
                          alt="Second slide"
                          // width={640} 
        
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block rounded wdth "
                          src={dat.Url3}
                          alt="third slide"
                          // width={640}  
        
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block rounded wdth"
                          src={dat.Url4}
                          alt="forth slide"
                          // width={640} 
        
                        />
                      </Carousel.Item>
                      
                    </Carousel>
                  
                  <Link to={`/details`}  style={{textDecoration:'none'}}>
                    <Card.Body className="text-muted">
                     <div className='d-flex flex-row justify-content-between text-black'>
                       <Card.Title onClick={()=>toDetail(dat)} >{dat.address}</Card.Title>
                       <div> <StarIcon fontSize="inherit"/> 5.0</div>
                       </div>
                      <div >3.200 kilometers away</div>
                      <div >Aug 29-sep 3</div>
                      <div >${dat.price} night</div>
                    </Card.Body>
                    </Link>
                  </Card>
        
        )}
        </div>
        }


      
      
      </>
      
      
      
      
      
      :(dis.rej)?<><h5>Rejected Requests</h5>
       {(rejectedData.length <= 0)?<h6 className='text-center'>There is no Rejection Data</h6>:
        <div className="row ">
        {rejectedData.map((dat,ky)=><Card className="col-lg-4 col-md-4 col-sm-6 col-xs-12 border-0 "  key={ky} >
            <div className='w-100'>

                    <Carousel
        
                      interval={50000}
                    >
                      <Carousel.Item>
                        <img  
                          className="d-block rounded wdth w-100" 
                          src={dat.Url}
                          alt="First slide"
                          // width={640} 
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block  rounded wdth"
                          src={dat.Url2}
                          alt="Second slide"
                          // width={640} 
        
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block rounded wdth "
                          src={dat.Url3}
                          alt="third slide"
                          // width={640}  
        
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block rounded wdth"
                          src={dat.Url4}
                          alt="forth slide"
                          // width={640} 
        
                        />
                      </Carousel.Item>
                      
                    </Carousel>
                  
                  <Link to={`/details`}  style={{textDecoration:'none'}}>
                    <Card.Body className="text-muted">
                     <div className='d-flex flex-row justify-content-between text-black'>
                       <Card.Title onClick={()=>toDetail(dat)} >{dat.address}</Card.Title>
                       <div> <StarIcon fontSize="inherit"/> 5.0</div>
                       </div>
                      <div >3.200 kilometers away</div>
                      <div >Aug 29-sep 3</div>
                      <div >${dat.price} night</div>
                    </Card.Body>
                    </Link>
                    </div>
                  </Card>
        
        )}
        </div>
        }

      
      </>:''}
      </div>
    </div>
  </div>
  <Footerhostormore/>
  </>
  )
}
