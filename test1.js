function Test(){
    let counter=0;
    function updateCount(){        
        counter++;
        console.log(counter);        
    }
    return(
        <div>
            <h2>Counter value is{counter}</h2>
<button onClick={updateCount}>change</button>
        </div>
    )
}
export default Test;
