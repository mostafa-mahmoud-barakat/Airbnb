import React, { useEffect , useState} from "react";
import "./BecomeHostStyle.css";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import Footerhostormore from "./pagehost/footerhostormore";
import { languages } from './../components/lang/languages';
import Slider from './pagehost/slider';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { db, storage } from './../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { Link } from "react-router-dom";
import { ref, uploadBytes } from "firebase/storage";
import { SingleData } from "../Redux/Actions/AllActions";

export default function BecomeAHost() {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  
  const { t } = useTranslation();

  const [email,setEmail]=useState("")
  const [pass,setPass]=useState("")
  const inputChanges=(e)=>{
      if(e.target.name === "email"){
        setEmail(e.target.value)
      }else if(e.target.name === "password"){
          setPass(e.target.value)
      
      }
    }
    const [avalible,setAvalible] = useState(false)
const [name,setName]= useState("")
const [addresss,setAddress]= useState("")
const [desc,setDesc]= useState("")
const [title,setTitle]= useState("")
const [price,setPrice]= useState("")


    const changes=(e)=>{
      if(e.target.name === "name"){
        setName(e.target.value)
      
      }else if(e.target.name === "address"){
        setAddress(e.target.value)
      }
      else if(e.target.name === "description"){
        setDesc(e.target.value)
      }
      else if(e.target.name === "title"){
        setTitle(e.target.value)
      }
      else if(e.target.name === "price"){
        setPrice(e.target.value)
      }
    }

  useEffect(() => {
    console.log("Setting page stuff");
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  const all = useSelector((state)=>state.allUsers.users)
    const navigate=useNavigate()
    const dispatch =useDispatch()
    const checkLog =()=>{
      if(all.some((ch)=>ch.email=== email)){
        const search = all.find((f)=>f.email === email)
        if(search.password === pass){  
          setAvalible(true)
            dispatch(SingleData(search))
        }else{
            alert("Wrong Password")
        }

      }
      else{
        navigate("/signUp")
      }
    }

    const [files,setFiles]=useState([])
    const uplload=()=>{
      if(files.length <= 0) return;
      files.forEach((file)=>{const imageRed = ref(storage,`Images/${title}/${file.name}`) 
      uploadBytes(imageRed,file).then()})
    }

    const requestCollection = collection(db, "AskRequest")
     const createRequest = async()=>{
    await addDoc(requestCollection,{name:name, email:email,title:title,Url:"",Url2:"",Url3:"",Url4:"",Url5:"", comments:[], address:addresss,price:price, description:desc, category:cat})
      navigate('/user')
}
const room = [
  { id: 1, text:t("entireplace") },
  { id: 2, text:t("sharedroom")},
  { id: 3, text:t("privateroom") },
];
const guestcount= [
  { id: 1, text: t("guest" )},
  { id: 2, text: t("guests" )},
  { id: 4, text: t("guests" ) },
  { id: 5, text: t("guests" ) },
  { id: 6, text: t("guests" ) },
  { id: 7, text: t("guests" ) },
  { id: 8, text: t("guests" ) },
  { id: 9, text: t("guests" ) },
  { id: 10, text: t("guests" ) },
  { id: 11, text: t("guests" ) },
  { id: 12, text: t("guests" ) },
  { id: 13, text: t("guests" ) },
  { id: 14, text: t("guests" ) },
  { id: 15, text: t("guests" ) },
  { id: 16, text: t("guests" ) },

];
const choices = [
  { id: 1, text: t("Alexandria") },
  { id: 2, text: t("cairo")},
]
const [cat,setCat]=useState("")
const cate =(e)=>{
  setCat (e.target.value);
}

  return (
    <>
      <div className="container-fluid">
        <div className="d-flex position-relative">
          <nav className="navbar fixed-top position-absolute">
            <div className="container-fluid">
              <Link to='/' className="navbar-brand" >
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Airbnb homepage"
                  role="img"
                  focusable="false"
                  width={34}
                  className="logo"
                  fill="white"
                >
                  <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.267 3.42-6.414 3.615l-.28.019-.267.006C5.377 31 2.5 28.584 2.5 24.522l.005-.469c.026-.928.23-1.768.83-3.244l.216-.524c.966-2.298 6.083-12.989 7.707-16.034C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.345.836c-.427 1.071-.573 1.655-.605 2.24l-.009.33v.206C4.5 27.395 6.411 29 8.857 29c1.773 0 3.87-1.236 5.831-3.354-2.295-2.938-3.855-6.45-3.855-8.91 0-2.913 1.933-5.386 5.178-5.42 3.223.034 5.156 2.507 5.156 5.42 0 2.456-1.555 5.96-3.855 8.907C19.277 27.766 21.37 29 23.142 29c2.447 0 4.358-1.605 4.358-4.478l-.004-.411c-.019-.672-.17-1.296-.714-2.62l-.248-.6c-1.065-2.478-5.993-12.768-7.538-15.664C18.053 3.539 17.24 3 16 3zm.01 10.316c-2.01.021-3.177 1.514-3.177 3.42 0 1.797 1.18 4.58 2.955 7.044l.21.287.174-.234c1.73-2.385 2.898-5.066 2.989-6.875l.006-.221c0-1.906-1.167-3.4-3.156-3.421h-.001z"></path>
                </svg>
              </Link>
            </div>
          </nav>
        </div>

        <div className="row bgdark">
          <div className="col-lg-6 col-12 d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-white text-center my-5 titles p-2">
              {t("welcome_message")}
            </h1>
            <button
              type="button"
              className="btn btnhost my-5 px-4 py-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              {/* Try hosting */}
              {t("buttonone")}
            </button>
            {/* modal */}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    {(avalible)?

                    <div className='container'>
                    <div >
                      <label htmlFor="exampleInputEmail1" className="form-label">{t("Emailaddress")}</label>
                      <input type="email" className="form-control" name='mail' value={email}  id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    </div>
                    <div className="mb-1">
                      <label htmlFor="exampleInputEmail1" className="form-label">{t("Name")}</label>
                      <input type="text" className="form-control" name='name' value={name} onChange={(e)=>changes(e)} id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    </div>
                    <div className="mb-1">
                      <label htmlFor="exampleInputEmail1" className="form-label">{t("placetitle")}</label>
                      <input type="text" className="form-control" name='title' value={title} onChange={(e)=>changes(e)} id="title" aria-describedby="emailHelp" required/>
                    </div>
                    <div className="mb-1">
                      <label htmlFor="exampleInputEmail1" className="form-label">{t("placeaddress")}</label>
                      <input type="text" className="form-control" name='address' value={addresss} onChange={(e)=>changes(e)} id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    </div>
                    <div className="mb-1">
                      <label htmlFor="exampleInputEmail1" className="form-label">{t("photosofplace")}</label>
                      <input type ="file" className="form-control mb-2" onChange={(e)=>setFiles(files.concat(e.target.files[0]))} required/>
                      <input type ="file" className="form-control mb-2" onChange={(e)=>setFiles(files.concat(e.target.files[0]))} required/>
                      <input type ="file" className="form-control mb-2" onChange={(e)=>setFiles(files.concat(e.target.files[0]))} required/>
                      <input type ="file" className="form-control mb-2" onChange={(e)=>setFiles(files.concat(e.target.files[0]))} required/>
                      <input type ="file" className="form-control mb-2" onChange={(e)=>setFiles(files.concat(e.target.files[0]))} required/>
                      <button className="btn btn-outline-info me-auto" onClick={uplload}>upload</button>
                   
                    </div>
            
                    <div className="mb-1">
                      <label htmlFor="exampleInputEmail1" className="form-label">{t("descriptions")}</label>
                      <input type="text" className="form-control" name='description' value={desc} onChange={(e)=>changes(e)} id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    </div>

                    <div className="mb-1">
                      <label htmlFor="exampleInputEmail1" className="form-label">{t("Pricepernight")}</label>
                      <input type="text" className="form-control" name='price' value={price} onChange={(e)=>changes(e)} id="price" aria-describedby="emailHelp" required/>
                    </div>
                    <div className="my-2">
                    <select className="form-select" onChange={(e)=>cate(e)}>
                      <option selected disabled>Choise Category</option>
                      <option value="Arctic">Arctic</option>
                      <option value="Shared Homes">Shared Homes</option>
                      <option value="LakeFront">LakeFront</option>
                      <option value="National Parks">National Parks</option>
                      <option value="Bed &amp; Breakfast">Bed &amp; Breakfast</option>
                      <option value="OMG!">OMG!</option>
                      <option value="Camping">Camping</option>
                      <option value="A-frames">A-frames</option>
                    </select>
                    </div>
            
            
                    <button className="btn btn-primary" onClick={createRequest} >{t("submit")}</button>
                  </div>:
                    <div className='container'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">{t("Emailaddress")}</label>
                        <input type="email" className="form-control" name='email' value={email} onChange={(e)=>inputChanges(e)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">{t("Password")}</label>
                        <input type="password" className="form-control" name='password' value={pass} onChange={(e)=>inputChanges(e)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                
                    <button className="btn btnhost" onClick={checkLog}>{t("Login")}</button>
                
                  </div>}
                  
                  </div>
                  
                </div>
              </div>
            </div>
            <a href="#two" className="angledown my-4">
              <i className="fa fa-angle-down text-white fs-4"></i>
            </a>
          </div>

          <div className="col-lg-6 col-12">
            <img src="assets/images/headers.jpg" className="images" alt="..."/>
          </div>
        </div>
        {/* section two */}
      <div className="d-flex flex-column  position-relative">
          <nav className="navbar fixed-top position-sticky top-0 ">
            <div className="container-fluid">
              <Link to='/' className="navbar-brand" >
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Airbnb homepage"
                  role="img"
                  focusable="false"
                  width={34}
                  className="logo"
                  fill="black"
                >
                  <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.267 3.42-6.414 3.615l-.28.019-.267.006C5.377 31 2.5 28.584 2.5 24.522l.005-.469c.026-.928.23-1.768.83-3.244l.216-.524c.966-2.298 6.083-12.989 7.707-16.034C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.345.836c-.427 1.071-.573 1.655-.605 2.24l-.009.33v.206C4.5 27.395 6.411 29 8.857 29c1.773 0 3.87-1.236 5.831-3.354-2.295-2.938-3.855-6.45-3.855-8.91 0-2.913 1.933-5.386 5.178-5.42 3.223.034 5.156 2.507 5.156 5.42 0 2.456-1.555 5.96-3.855 8.907C19.277 27.766 21.37 29 23.142 29c2.447 0 4.358-1.605 4.358-4.478l-.004-.411c-.019-.672-.17-1.296-.714-2.62l-.248-.6c-1.065-2.478-5.993-12.768-7.538-15.664C18.053 3.539 17.24 3 16 3zm.01 10.316c-2.01.021-3.177 1.514-3.177 3.42 0 1.797 1.18 4.58 2.955 7.044l.21.287.174-.234c1.73-2.385 2.898-5.066 2.989-6.875l.006-.221c0-1.906-1.167-3.4-3.156-3.421h-.001z"></path>
                </svg>
              </Link>
              <div>
           <button
              type="button"
              className="btn px-4 py-2 shadow rounded-5  bg-white"
            
            >
              {/* Try hosting */}
              {t("buttonone")}
            </button>
           </div>
              <button
              type="button"
              className="btn btnhost  px-4 py-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              {/* Try hosting */}
              {t("buttonone")}
            </button>
         
            </div>
            
          </nav>
        
        <div className="my-5 d-flex justify-content-center flex-column align-items-center">
          <div className=" ms-5 ps-5 " style={{}}>
        </div>
        <h1 className="pt-5 mt-5 text-center" style={{fontSize:"4.4em",width:"10em"}}>{t("youcanhost")}</h1> 

        <Slider/>
        </div>
     
        {/* section three */}
        {/* three section */}
        <div className="container">
          <div className="row  p-5 my-5">
            
            <h1 className="profits text-center">
             {t("Hostyour")}
              <select
                className="text-decoration-underline border-0"
                aria-label="Default select example"
              >{room.map((choice) => {
                return ( <>
                <option
                  value={"enterplace"}
                  className="text-decoration-underline optionss fs-1 "
                >
                 {choice.text}
                </option></>);
          })}
               
              </select>
             {t ("for")}
              <select
                className="text-decoration-underline border-0"
                aria-label="Default select example"
              >{guestcount.map((choice) => {
                return ( <>
                <option
                  value={"enterplace"}
                  className="text-decoration-underline optionss fs-1 "
                >
                 {choice.id} {choice.text}
                </option></>);
          })}
            
              </select>
              <br />
              {t("in")}
              <select
                className="text-decoration-underline border-0"
                aria-label="Default select example"
              >
                {choices.map((choice) => {
                return ( <>
                <option
                  value={"enterplace"}
                  className="text-decoration-underline optionss fs-1 "
                >
                 {choice.text}
                </option></>);
          })}
             
              </select>
              <br />
{t("andearnuptomonth")}            </h1>
            {/* modal */}
            {/* <!-- Button trigger modal --> */}
            <button
              type="button"
              className="anco btn btn-link my-5"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
            >
              {t("how")}
            </button>

            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="exampleModal2"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel2"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <h1> {t("how")}</h1>
                    <p>
                     {t("modal_sub_title")}
                    </p>
                    
                    <ul>
                    
                      <li>
                    {t("model_body1")}
                     
                      </li>
                      <li>
                      {t("model_body2")}

                      </li>

                      <li>
                      {t("model_body3")}

                      </li>
                    </ul>
                    <p>                    {t("model_body4")}
</p>
                    <p>
                    {t("model_body5")}

                      <a href="anco">{t("buttonLearn")}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section four */}
        <div className="container-fluid sectionfour rounded-4  py-5 col-11">
          <div className="d-flex flex-column flex-wrap p-5 gy-5 rounded-4 text-white d-flex text-center align-items-center justify-content-evenly">
            <h1 className="fontsizeh1">
              {/* Help house 100,000 refugees fleeing Ukraine */}
              {t("section5")}
            </h1>
            <div>
              <button
                type="button"
                className="btn btn-outline-secondary text-white fs-5  border-white"
              >
                {/* Learn more */}
                {t("buttonLearn")}
              </button>
            </div>
          </div>
        </div>
        {/* section five */}
        {/* <div> */}
        <div className=" container-fluid position-relative py-5 mh-100 my-5 text-center col-11">
          <img
            src="assets/images/sectionfive.jpg"
            alt="sectionfive"
            className="w-100 rounded-4"
          />
          <div className="position-absolute top-50 start-50 text-white text-center translate-middle">
            <h1 className="h-1 my-5">{t("sectionthree")}</h1>
            <button type="button" className="btn btn-light my-5 px-5 fs-5">
              {t("buttonLearn")}
            </button>
          </div>
        </div>
        {/* section six */}
        <div
          className="container-fluid  rounded-4  py-5 col-11"
          style={{ backgroundColor: "#e6e6e6" }}
        >
          <div className="d-flex flex-wrap">
            <div className="col-6 p-5">
              <img src={t("image")} alt="" className="w-50" />
              <div>
                <p className="fs-2 pt-5 text-wrap lh-sm">{t("sectionfour")}</p>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-light my-5 px-3 py-2 fs-5 border border-dark text-center"
                >
                  {t("buttonLearn")}
                </button>
              </div>
            </div>
            <div className="col-6 align-self-end">
              <img
                src="assets/images/sectionsix2.PNG"
                alt=""
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>
        {/* section siven */}
        <div className="container-fluid py-5 col-12">
          <div className="d-flex flex-wrap">
            <div className="col-md-6 col-12">
              <img
                src="assets/images/section7.PNG "
                alt=""
                className=""
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-md-6 col-12 bgdark text-white text-center d-flex flex-column justify-content-center align-items-center">
              <h1>{t("sectionfive1")}</h1>
              <p>{t("sectionfive2")}</p>
              <button
                type="button"
                className="btn btnhost my-5 px-4 py-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                {t("buttontwo")}
              </button>
            </div>
          </div>
        </div>
        <Footerhostormore></Footerhostormore>
      </div>
    </>
  );
}
