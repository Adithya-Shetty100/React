//const { react, directive } = require("@babel/types");

class Slot extends React.Component{
    

    render(){
        let luck
        {
            if(this.props.s1===this.props.s2 && this.props.s2===this.props.s3)
                luck="win"
            else
                luck="lose"
        }

        return(
            <div>
                <b>{this.props.s1}</b> <b>{this.props.s2}</b> <b>{this.props.s3}</b>
                <p>You {luck}!!</p>
            </div>
        );
    }
}