import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import Hello from './helloComponent'
import {changeText} from './helloReducer';

const mapStateToProps = state => ({
    text: state.hello.text
})

const mapDispatchToProps = dispatch => bindActionCreators({changeText}, dispatch);

const HelloContainer = connect(mapStateToProps, mapDispatchToProps)(Hello)

export default HelloContainer