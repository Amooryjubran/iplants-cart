<div className="container" id="container-nav">
        <div className="navbar">
            <div className="logo">
                <div className="logo-image"><p className="dummyimage unselectable">iPlants</p></div>
            </div>
            <div className="menu">
                <div className="menu-button bt1 unselectable"><p>iHome</p></div>
                <div className="menu-button bt2 unselectable"><p>iShop</p></div>
                <div className="menu-button bt3 unselectable"><p>iAbout</p></div>
                <div className="menu-button bt4 unselectable"><p>iContact</p></div>
            </div>
            <div className="menu-mobile-btn">
                <div className="hamburger">
                    <div className="hamb-ico"><p onclick="myFunction()" className="dummyicon unselectable">X</p></div>
                </div>
            </div>
            <div id="menu-mob" className="menu-mobile">
                <div className="menu-button2 bt1 unselectable"><p>iHome</p></div>
                <div className="menu-button2 bt2 unselectable"><p>iShop</p></div>
                <div className="menu-button2 bt3 unselectable"><p>iAbout</p></div>
                <div className="menu-button2 bt4 unselectable"><p>iContact</p></div>
            </div>
        </div>
    </div>






@import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');

#container-nav {
    height: 1000px;
    width: 100%;
    padding: 0px;
    margin-left: 80px;
    
}
.navbar {
    display: flex;
    flex-direction: row;
    min-height: 100px;
    width: 100%;
    
    justify-content: center;
    align-items: left;
    align-content: left;
    position: fixed;
    opacity: 1;
    
}
.logo {
    order: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 20px;
    width: 30%;
    height: 100%;
}
.logo-image {
    order: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 40px;
    width: 170px;
    background: lightgreen;
}
.dummyimage {
    order: 1;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 30px;
    line-height: 20px;
    color: white;

}
.menu {
    order: 2;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 70%;
    height: 100%;
}
.unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.menu-button {
    height: 100%;
    width: 100px;
    padding: 10px;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 16px;
    text-decoration: none;
    color: #000000;
}
.menu-button:hover {
    cursor: pointer;
    background-color: #d64161;
    color: #ffffff;
}
.menu-button:active {

}
.btn1 {
    order: 1;
}
.btn2 {
    order: 2;
}
.btn3 {
    order: 3;
}
.btn4 {
    order: 4;
}
.menu-mobile {
    display: none;
}


@media screen and (max-width: 800px) {
.navbar {
    flex-direction: column;
}
.logo-image {
    order: 1;
    height: 50;
    width: 200px;
}
.menu {
    display: none;
}
.menu-mobile-btn{
    order: 2;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 10px;
    width: 50%;
    height: 100%;
}
.hamburger{
    order: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    max-width: 100%;
    min-height: 100%;
}
.hamb-ico {
    order: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 40px;
    width: 40px;
}
.dummyicon {
    order: 1;
    color: #000000;
    font-family: 'Open Sans', sans-serif;
    font-size: 40px;
    text-decoration: none;
}
.dummyicon:hover {
    cursor: pointer;
    color: #d64161;
}

.menu-mobile {
    order: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 0px;
    max-width: 100%;
    max-height: 600px;
}
.menu-button2 {
    height: 40px;
    width: 200px;
    padding: 10px;
    text-align: center;
    line-height: 16px;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    text-decoration: none;
}
.menu-button2:hover {
    cursor: pointer;
    background-color: #d64161;
    color: #ffffff;
}

}

@media screen and (min-width: 800px) {
#menu-mob {
    display: none !important;
}
.dummyicon {
    display: none;
}
}



