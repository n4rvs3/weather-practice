const Form = ({ city, setCity, getWeather }) => {
    return (
        <form>
            <input className="ph-white" type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)} value={city} />
            <button type="submit" onClick={getWeather}>Get Weather</button>
        </form>
    );
};

export default Form;