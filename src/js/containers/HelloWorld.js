import { connect } from 'react-redux'
import Hello from './../components/Hello'

const mapStateToProps = (state) => {
    return {
        text: state.helloWorld.text
    }
}

const HelloWorld = connect(mapStateToProps)(Hello)

export default HelloWorld