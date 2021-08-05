import Loader from './Loader';
import TopHeader from './TopHeader.jsx';
import Stepper from './Stepper.jsx';
import {connect} from 'react-redux';
import {set_user} from '../store/action'

const Home=(props)=>{
    return(
      <>
      <TopHeader />
      <div style={{height: '2px', backgroundColor: '#000'}}></div>
      <Stepper />
      </>
    )
}
const mapDispatchToProps=(dispatch)=>({
  set_user : ()=> dispatch(set_user())
})
export default connect(null,mapDispatchToProps) (Home);