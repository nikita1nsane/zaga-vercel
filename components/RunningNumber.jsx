import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { useState, useEffect } from "react"

export default function Counter({ val, time }) {
    const [ currVal, setCurrVal ] = useState(0);
  
    useEffect(() => {
      currVal !== val && setTimeout(setCurrVal, 10 * currVal / time, currVal + 1);
    }, [ currVal ]);
  
    return <>{currVal}</>;
  }
  