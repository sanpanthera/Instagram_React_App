import Main from './Main';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../Redux/Actions';

function mapStateToProps (state) {
    return {
        posts: state
    }
}

function mapDispatchToMap(dispatch){
  return  bindActionCreators(actions,dispatch);
}

const App = connect(mapStateToProps,mapDispatchToMap)(Main);

export default App;