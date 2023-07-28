import './button.css';


function Button(props) {

    function handleClick(){
        props.setPercentage(props.percent);
        
    }

  return <button onClick={handleClick}>{props.percent}%</button>
}

export default Button;
