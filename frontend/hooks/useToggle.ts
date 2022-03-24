import { useState } from "react";

export const useToggle = () => {
    
    const [ open, setOpen ] = useState<boolean> (false);  
  
    const toggleOpen = () => { 
        setOpen(!open);
    }

    return {
        open,
        toggleOpen
    };
  };
  