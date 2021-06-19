//const { react, directive } = require("@babel/types");
//gives error


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


/*class Machine extends React.Component {
    render() {
      const { s1, s2, s3 } = this.props;   //object destructuring
      const winner = (s1 === s2) && (s2 === s3);
  
      return (
        <div className="Machine">
          <b>{s1}</b> <b>{s2}</b> <b>{s3}</b>
          <p>You {winner ? "win!" : "lose!"}</p>
        </div>
      );
    }
  }*/