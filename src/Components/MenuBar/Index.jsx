import React, { useState, useEffect } from 'react';
import './style.scss';

const Index = () => {
    const [menuActive, setMenuActive] = useState(0);
    const [subMenuActive1, setSubMenuActive1] = useState(0);
    const [subMenuActive2, setSubMenuActive2] = useState(0);
    const [subMenuActive3, setSubMenuActive3] = useState(0);
    const [subMenuActive4, setSubMenuActive4] = useState(0);
    const [subMenuActive5, setSubMenuActive5] = useState(0);

    useEffect(() => {
        const handlePopState = (event) => {
            if (event.state && event.state.menuActive !== undefined) {
                setMenuActive(event.state.menuActive);
            }
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    const toggleActiveButton = (id) => {
        setMenuActive(id);
        window.history.pushState({ menuActive: id }, '');
    };

    const toggleSubMenuActiveButton1 = (id) => {
        setSubMenuActive1(id);
    };

    const toggleSubMenuActiveButton2 = (id) => {
        setSubMenuActive2(id);
    };

    const toggleSubMenuActiveButton3 = (id) => {
        setSubMenuActive3(id);
    };

    const toggleSubMenuActiveButton4 = (id) => {
        setSubMenuActive4(id);
    };

    const toggleSubMenuActiveButton5 = (id) => {
        setSubMenuActive5(id);
    };

    return (
        <div className="navbarMainContainer">
            <div className="menuItems">
                <li className={menuActive === 1 ? 'activeMenuBtn' : ''} onClick={() => toggleActiveButton(1)}>Home</li>
                <li className={menuActive === 2 ? 'activeMenuBtn' : ''} onClick={() => toggleActiveButton(2)}>About</li>
                <li className={menuActive === 3 ? 'activeMenuBtn' : ''} onClick={() => toggleActiveButton(3)}>Company</li>
                <li className={menuActive === 4 ? 'activeMenuBtn' : ''} onClick={() => toggleActiveButton(4)}>Services</li>
                <li className={menuActive === 5 ? 'activeMenuBtn' : ''} onClick={() => toggleActiveButton(5)}>Contact Us</li>
            </div>
            <div className="subMenus">
                {menuActive === 1 && (
                    <div className="subMenu">
                        <li className={subMenuActive1 === 1 ? 'activeSubMenuBtn' : ''} onClick={() => toggleSubMenuActiveButton1(1)}>Menu 1 Item 1</li>
                        <li className={subMenuActive1 === 2 ? 'activeSubMenuBtn' : ''} onClick={() => toggleSubMenuActiveButton1(2)}>Menu 1 Item 2</li>
                        <li className={subMenuActive1 === 3 ? 'activeSubMenuBtn' : ''} onClick={() => toggleSubMenuActiveButton1(3)}>Menu 1 Item 3</li>
                        <li className={subMenuActive1 === 4 ? 'activeSubMenuBtn' : ''} onClick={() => toggleSubMenuActiveButton1(4)}>Menu 1 Item 4</li>
                    </div>
                )}
                {menuActive === 2 && (
                    <div className="subMenu">
                        <li className={subMenuActive2 === 1 ? 'activeSubMenuBtn' : ''} onClick={() => toggleSubMenuActiveButton2(1)}>Menu 2 Item 1</li>
                        <li className={subMenuActive2 === 2 ? 'activeSubMenuBtn' : ''} onClick={() => toggleSubMenuActiveButton2(2)}>Menu 2 Item 2</li>
                        <li className={subMenuActive2 === 3 ? 'activeSubMenuBtn' : ''} onClick={() => toggleSubMenuActiveButton2(3)}>Menu 2 Item 3</li>
                        <li className={subMenuActive2 === 4 ? 'activeSubMenuBtn' : ''} onClick={() => toggleSubMenuActiveButton2(4)}>Menu 2 Item 4</li>
                    </div>
                )}
                {menuActive === 3 && (
                    <div className="subMenu">
                        <li className={subMenuActive3 === 1 ? 'activeSubMenuBtn' : ''} onClick={() => toggleSubMenuActiveButton3(1)}>Menu 3 Item 1</li>
                        <li className={subMenuActive3 === 2 ? 'activeSubMenuBtn' : ''} onClick={() => toggleSubMenuActiveButton3(2)}>Menu 3 Item 2</li>
                        <li className={subMenuActive3 === 3 ? 'activeSubMenuBtn' : ''} onClick={() => toggleSubMenuActiveButton3(3)}>Menu 3 Item 3</li>
                        <li className={subMenuActive3 === 4 ? 'activeSubMenuBtn' : ''} onClick={() => toggleSubMenuActiveButton3(4)}>Menu 3 Item 4</li>
                    </div>
                )}
                {menuActive === 4 && (
                    <div className="subMenu">
                        <li className={subMenuActive4 === 1 ? 'activeSubMenuBtn' : ''} onClick={() => toggleSubMenuActiveButton4(1)}>Menu 4 Item 1</li>
                        <li className={subMenuActive4 === 2 ? 'activeSubMenuBtn' : ''} onClick={() => toggleSubMenuActiveButton4(2)}>Menu 4 Item 2</li>
                        <li className={subMenuActive4 === 3 ? 'activeSubMenuBtn' : ''} onClick={() => toggleSubMenuActiveButton4(3)}>Menu 4 Item 3</li>
                        <li className={subMenuActive4 === 4 ? 'activeSubMenuBtn' : ''} onClick={() => toggleSubMenuActiveButton4(4)}>Menu 4 Item 4</li>
                    </div>
                )}
                {menuActive === 5 && (
                    <div className="subMenu">
                        <li className={subMenuActive5 === 1 ? 'activeSubMenuBtn' : ''} onClick={() => toggleSubMenuActiveButton5(1)}>Menu 5 Item 1</li>
                        <li className={subMenuActive5 === 2 ? 'activeSubMenuBtn' : ''} onClick={() => toggleSubMenuActiveButton5(2)}>Menu 5 Item 2</li>
                        <li className={subMenuActive5 === 3 ? 'activeSubMenuBtn' : ''} onClick={() => toggleSubMenuActiveButton5(3)}>Menu 5 Item 3</li>
                        <li className={subMenuActive5 === 4 ? 'activeSubMenuBtn' : ''} onClick={() => toggleSubMenuActiveButton5(4)}>Menu 5 Item 4</li>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Index;
