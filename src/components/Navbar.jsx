import {useState} from 'react'
import { CSSTransition } from 'react-transition-group'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [isLastActiveElement, setIsLastActiveElement] = useState("")

    const handleOnMouseEnter = () => {
        setTimeout(() => {
            setIsOpen(true)
        }, 300)
    }

    const handleOnMouseLeave = () => {
        setIsOpen(false)

    }

    const handleKeyDown = e => {
        if (e.key !== "Tab") {
            e.preventDefault()
            e.key === "Enter" && setIsOpen(!isOpen); setIsLastActiveElement(document.activeElement);
            e.code === "Space" && setIsOpen(!isOpen);
            e.key === "Escape" && setIsOpen(false); isLastActiveElement.focus();
        }
    }

    return (
        <nav aria-label="Menu principal" className='bg-slate-50 relative h-14'>
            <div className="container items-center flex gap-5 m-auto h-full">
                <h1 className="text-3xl">Navbar</h1>
                <menu className="flex h-full gap-5">
                    <li aria-expanded={isOpen}
                        aria-controls="megamenu"
                        className='h-full items-center'
                        onMouseEnter={handleOnMouseEnter}
                        onMouseLeave={handleOnMouseLeave}
                        onKeyDown={handleKeyDown}
                    ><a className="relative top-4" href="">Services</a>

                        <CSSTransition 
                            in={isOpen} 
                            timeout={500} 
                            classNames="megamenu"
                            unmountOnExit>
                            <div id="megamenu" className="bg-black text-white absolute left-0 flex justify-between w-full p-5 pt-10  megamenu">
                                <ul>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="">About</a></li>
                                    <li><a href="">Contact</a></li>
                                    <li><a href="">Services</a></li>
                                    <li><a href="">About</a></li>
                                    <li><a href="">Contact</a></li>
                                </ul>
                                <ul>
                                    <li><a href="">Services</a></li>
                                    <li><a href="">About</a></li>
                                    <li><a href="">Contact</a></li>
                                    <li><a href="">Services</a></li>
                                    <li><a href="">About</a></li>
                                    <li><a href="">Contact</a></li>
                                </ul>
                                <ul>
                                    <li><a href="">Services</a></li>
                                    <li><a href="">About</a></li>
                                    <li><a href="">Contact</a></li>
                                    <li><a href="">Services</a></li>
                                    <li><a href="">About</a></li>
                                    <li><a href="">Contact</a></li>
                                </ul>
                                <ul>
                                    <li><a href="">Services</a></li>
                                    <li><a href="">About</a></li>
                                    <li><a href="">Contact</a></li>
                                    <li><a href="">Services</a></li>
                                    <li><a href="">About</a></li>
                                    <li><a href="">Contact</a></li>
                                </ul>
                            </div>
                        </CSSTransition>
                    </li>
                    <li><a className="relative top-4" href="">About</a></li>
                    <li><a className="relative top-4" href="">Contact</a></li>
                </menu>
            </div>

        </nav>
    )
}

export default Navbar