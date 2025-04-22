import { useEffect } from "react";
import { useLocation } from "react-router-dom"

export default scrollToTop = () => {
    const {pathname} = useLocation();

    useEffect(()=>{
        windows.scrollTo(0,0);
    },[pathname])

    return null;
}

