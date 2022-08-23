


const Header = () => {
    const imgStyle = {
        width: "100%",
        objectFit : "cover",
    }
    const headerStyle = {
        fontFamily : "Times New Roman",
        textAlign : 'center',
        marginTop : "2%"
    }
    return(
        <div>
            <div>
                <img style={imgStyle} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYPHwwbW7HQrp-qTqxV-cTh80bT-CoQGg_wQ&usqp=CAU" alt="Covid-19" />
            </div>
            <h1 style={headerStyle}>Global and Country Wise Cases of Corona Virus</h1>
        </div>
    )
}

export default Header;