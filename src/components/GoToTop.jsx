 import { useEffect, useState } from "react"

const GoToTop = () => {
    const [backToTopbtn,setBackToTopBtn]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                setBackToTopBtn(true)
            }else{
                setBackToTopBtn(false)
            }
        })
    },[])
    const goToBtn=()=>{
        window.scrollTo({
            top:0,
           
            behavior:"smooth"
        })

    }
  return (
   

   
    <div >
        {
            backToTopbtn && (<button onClick={goToBtn} style={{position:"fixed", bottom:"50px",right:"50px",height:"50px",width:"50px",fontSize:"20px",border:"1px solid red" ,borderRadius:"50px"}}>top</button>)
        }
    </div>
   
  )
}

export default GoToTop 




/* import { useEffect, useState } from "react";

const GoToTop = () => {
  const [backToTopBtn, setBackToTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBackToTopBtn(true);
      } else {
        setBackToTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopBtn && (
        <button
          onClick={goToBtn}
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            height: "50px",
            width: "50px",
            fontSize: "20px",
          }}
        >
          Top
        </button>
      )}
    </div>
  );
};

export default GoToTop; */
