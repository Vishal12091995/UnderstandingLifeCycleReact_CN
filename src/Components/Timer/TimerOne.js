import React from "react";

class Timer extends React.Component{
    constructor(){
        super();
        this.state={
            time:0
        }
        this.timer=null;
        console.log("Constructor Called");
    }
    static getDerivedFromProps(){
        console.log("TimerOne get derivedstatefromprops");
        return null;
    }

    shouldComponentUpdate(nextProps,nextState){
        return true;
    }

    render(){
        console.log("Timer One render")
        return(
            <>
                <h1>Timer Spent:</h1>
                {new Date(this.state.time*1000).toISOString().slice(11,19)}
            </>
        )
    }
    componentDidMount(){
        console.log("Timer componentDidMount");
        
    }

    getSanpshotBeforeUpdate(prevProps,prevState){
        console.log("TimerOne getSanpshotBeforeUpdate"
        );
        return null;
    }
    componentDidUpdate(prevProps,prevUpdate,snapShot){
        console.log("Timer componentDidUpdate");
        console.log("__________________");
        console.log(this.props)
        if(prevProps.handleTimer!= this.props.handleTimer){
            if(!this.props.handleTimer){
                clearInterval(this.timer);
            }else{
                this.timer=setInterval(()=>{
                    this.setState((prevstate)=>({time:prevstate.time+1}))
                },1000);
            }
        }
        
    }
}
export default Timer;