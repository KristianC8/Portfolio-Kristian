import { useEffect, useState } from 'react'
import './ScrollTop.css'

export const ScrollTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        function handleScroll() {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;

            if (scrollPosition > 60) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo(0, 0)
    }

    return (
        <button className={`scrolltop-btn ${isVisible ? 'show' : 'hide'}`} onClick={handleClick}>
            <div className='scrolltop-img' ></div>
        </button>
    )
}
