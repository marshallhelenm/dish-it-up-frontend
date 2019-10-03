import React, {Component} from 'react'
import ProgressBar from '../components/ProgressBar'

const LoadingHOC = WrappedComponent => {
    return class LoaderHOC extends React.Component{

        // constructor(){
        //     super()
        //     this.state = {
        //         progress: 50
        //     }
        // }

        isLoaded = () =>{
            return (Array.isArray(this.props.recipes))
        }
    
        render(){
            if (this.isLoaded()) {
                return <WrappedComponent {...this.props} />
            }
            if(this.props.performed) {
                return <ProgressBar />
            }
            return null;
        }
    }
}

export default LoadingHOC