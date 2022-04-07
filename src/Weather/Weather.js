import '../Weather/Weather.css'
function DisplayWeather({name,icon,temp,clouds,feels_like,main}) {
    
    return (
        <div className='dataDisplay'>
            <h1>{name}</h1>
            <h1>{temp}</h1>
            <h3>{feels_like}</h3>
            <h3> {main} </h3>
        </div>
    )
}
export default DisplayWeather;