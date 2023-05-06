import './Search.css';

export default ({ handleChange , handleClick , value }) => {
    return (
        <div className="main__centered">
            <div className="main__container">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" onChange={handleChange} placeholder="Pokemon name" aria-label="Pokemon name" aria-describedby="button-addon2" />
                    <button className={"btn btn-primary" + `${!!value ? '' : ' disabled'}`} type="button" id="button-addon2" onClick={handleClick} >Search</button>
                </div>
            </div>
        </div>
    )
}