
import Footer from "Components/Footer"
import Navbar from "Components/Navbar"
import { connect } from "react-redux"


const FullWidthLayout = ({children}) => {
    return(
        <>
        <Navbar  />
        {children}
        <Footer/>
        </>
    )
}

const mapStateToProps = state =>({

})

export default connect(mapStateToProps,{

})(FullWidthLayout)