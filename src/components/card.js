import React , {useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useTranslation } from "react-i18next";
//bootstrap
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from 'react-redux';
import "../components/cardStyle.css"
import { doc, updateDoc } from 'firebase/firestore';
import { db } from "../firebaseConfig";
import { RequestInfo, WishListData } from "../Redux/Actions/AllActions";


export default function MainCard() {
  const { t } = useTranslation();
  


  const data = useSelector((state)=>state.allRequests.requests)

  const userInfo = useSelector((state)=>state.userData.info)
  const favArr = userInfo.favorit



  const newArr = useSelector((state)=>state.favoritData.wishArr)
  const [fav,setfav]= useState(newArr)

  const prof = useSelector((state)=>state.userData.info)
  const navigate = useNavigate()

  const uplod = async()=>{
    const dos = doc(db , "users" , prof.id)
        const newDat = {favorit : fav}
         await updateDoc(dos,newDat)
        
  }
  const addWishList =(dat)=>{
    
    if(Object.keys(prof).length > 0){
      if(fav.some(f=>f.title === dat.title)){
        setfav(fav.filter(f=> f.title != dat.title))
      }else{
        setfav(fav.concat(dat))
      }
      uplod()    
    }else{
      navigate('/Login')

    }
  }
  const dispatch = useDispatch()
  const toDetail = (dat)=>{
    dispatch(RequestInfo(dat))
    // navigate("/")

  }
  const findCategory = (c)=>{
    setLast(data.filter((dt)=>dt.category === c))
  }
  const [lastDes,setLast]=useState([])
  const categoryy = useSelector((state)=>state.categoryName.Cate)

  useEffect(()=>{
    if(categoryy === "Design"){
      setLast(data)
    }else{
      findCategory(categoryy)
    }

  },[categoryy])
dispatch(WishListData(fav))

console.log(categoryy);




  return (
    <>
   
      <div className="container d-flex">
        <div className="row ">
{lastDes.map((dat,ky)=><Card className={`col-lg-3 col-md-4 col-sm-6 col-xs-12 border-0 `}  key={ky} >
          <IconButton   size="large" onClick={()=>addWishList(dat)}  sx={{width:40, position:'absolute', top:10, left:230,zIndex:5}}>
  <FavoriteBorderIcon  className={`${fav.some(f=>f.title === dat.title)? 'text-danger': 'text-light'}`} fontSize="inherit" style={{color:'white'}}/>
</IconButton>
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
              {/* <i className={`fa-solid fa-heart ${fav.some(f=>f.title === dat.title)? 'text-danger': 'text-light'}  fa-xl child` }onClick={()=>addWishList(dat)}></i> */}
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
          </Card>

)}
        </div>
      </div>
    </>
  );
}
