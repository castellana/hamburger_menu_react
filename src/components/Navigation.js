import { Link } from "react-router-dom";
import './navigation.css'
import {useState, useEffect, useRef} from 'react'

const Navigation = () => {
    const ref = useRef(); //cogido de https://usehooks.com/useOnClickOutside/
    const [show, setShow] = useState(false)
    useOnClickOutside(ref, () => setShow(false));
    
    return ( 
        <nav>
            <img src="http://picsum.photos/30/30" alt=""/>
            <ul ref={ref} className={show ? "show" : ""}> 
            {/* wenn true ist, wollen wir die classe show, ansonsten keine classe */}
                <li>
                    <Link to="/" onClick={() => setShow(false)}>Home</Link>
                </li>
                <li>
                    <Link to="/about" onClick={() => setShow(false)}>About</Link>
                </li>
                <li>
                    <Link to="/FAQ" onClick={() => setShow(false)}>FAQ</Link>
                </li>
            </ul>
            <div ref={ref} className="hamburger" onClick= {() => setShow(!show)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
     );
}
 
export default Navigation;


//fuera del componente escribimos estas líneas del hook useEffect para que se cierre el menú si damos click fuera del menú:
function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = event => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
  
          handler(event);
        };
  
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
  
        return () => {
          document.removeEventListener('mousedown', listener);
          document.removeEventListener('touchstart', listener);
        };
      },
      // Add ref and handler to effect dependencies
      // It's worth noting that because passed in handler is a new ...
      // ... function on every render that will cause this effect ...
      // ... callback/cleanup to run every render. It's not a big deal ...
      // ... but to optimize you can wrap handler in useCallback before ...
      // ... passing it into this hook.
      [ref, handler]
    );
  }