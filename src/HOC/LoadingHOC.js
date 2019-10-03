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

        isLoading = () =>{
            return (Array.isArray(this.props.recipes) && this.props.onShow)
        }
    
        render(){
            return this.isLoading()?<WrappedComponent {...this.props} /> : <ProgressBar />
        }
    }
}

export default LoadingHOC