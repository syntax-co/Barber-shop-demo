const { Box } = require("@mui/material")




const Navitem = ({label,path}) => {

    const stv = () => {
        console.log(path)
        document.querySelector(path).scrollIntoView({
            behavior:'smooth',
            block:'end',
        });

    }


    return(

        
            <Box sx={{
                height:'100%',
                fontSize:'18px',
                display:'flex',
                alignItems:'center',
                width:'90px',
                fontFamily:'raleway',
                cursor:'pointer',
                
            }}
            onClick={() => {
                stv();
            }}
            >
                
                
                    {label}
            </Box>
        
    )
}



const Navbar = () => {

    return(
        <Box sx={{
            width:'100%',
            height:'10vh',
            backgroundColor:'primary.main',
            display:'flex'
        }}>

            <Box sx={{
                height:'100%',
                width:'50%',
                display:'flex',
                alignItems:'center',
                marginLeft:'5%'
            }}>
                <img src='./images/nav-logo.png' 
                    style={{
                        width:'100px',
                    }}
                />

            </Box>

            <Box sx={{
                width:'50%',
                height:'100%',
                display:'flex',
                justifyContent:'flex-end',
                alignItems:'center',
                color:'white',
            }}>
                
                <Navitem label='Services' path={'#services'} />
                <Navitem label='Book' path={'#book'} />  

            </Box>

        </Box>
    )
}



export default Navbar;