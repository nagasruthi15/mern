function Test(){
    let counter=0;
    function updateCount(){        
        counter++;
        console.log(counter);        
    }
    return(
        <div>
            <h2>Counter value is{counter}</h2>
        </div>
    )
}
export default Test;
