import "../styles/SuccessScreen.scss"
import DoneIcon from '@mui/icons-material/Done';
import { useContext, useEffect } from "react";
import { VisibilityContext } from "../context/AppContext";


const SuccessScreen = () => {
    const context  = useContext(VisibilityContext)

    if (!context)  return null;

    const {visibilityCondition, setVisibilityCondition} = context;

    useEffect(() => {
    const timer = setTimeout(() => {
      setVisibilityCondition(false);   
    }, 2000);

    return () => clearTimeout(timer); 
  }, [visibilityCondition]);
    return (
        <>

            {visibilityCondition ? (
                <>
                <div className="success-container">
                <div className="success-screen">
                </div>
            
                    <div className="inner-circle">
                        <DoneIcon className="icon"></DoneIcon>
                    </div>  
                    </div>
                    </>  
            ) 
                : ""}

        </>
    )
}

export default SuccessScreen;