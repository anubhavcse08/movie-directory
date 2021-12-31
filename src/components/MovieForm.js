import React, { useRef, useState } from 'react';


const MovieForm = (props) => {
    const [error, setError] = useState(false);
    const movieRef = useRef();
    const ratingRef = useRef();
    const durationRef = useRef();

    const fields = (labels, refs, types, id, placeholder) => {
        return (
            <div className="fields">
                <label className="labels" >{labels}</label><br />
                <input className="input-field" type={types} id={id} ref={refs} placeholder={placeholder} onClick={() => setError(false)} />
            </div>
        )
    }
    const handleSubmit = (e) => {
        e.preventDefault(); // Any events cancel if it's cancelable
        const movRef = movieRef.current.value;
        const ratRef = ratingRef.current.value;
        const durRef = durationRef.current.value;

        if (movRef && ratRef && durRef) {
            const lastIndexDur = durRef[durRef.length - 1];
            const validateRat = ratRef >= 0 && ratRef <= 100;
            const validLastIndex = lastIndexDur === "m" || lastIndexDur === "h";
            const validateDur = validLastIndex && validateDurationValue(durRef);
            if (validateRat && validateDur) {
                const options = {
                    movie: movRef,
                    rating: ratRef,
                    duration: validateDur
                }
                props.onHandleSubmit(options);
            } else {
                setError(true);
            }
        } else {
            movieRef.current.value = "";
            ratingRef.current.value = "";
            durationRef.current.value = "";
        }
    }

    const validateDurationValue = (durRef) => {
        const durValue = durRef.substring(0, durRef.length - 1);
        if (durRef[durRef.length - 1] === "m") {
            return (durValue / 60).toFixed(1);
        } else {
            return durValue;
        }
    }

    return (
        <div>
            <form className="form-submit" onSubmit={handleSubmit}>
                {fields("Movie Name", movieRef, "text", "movieId", "Enter the movie name")}
                {fields("Rating", ratingRef, "Number", "ratingId", "Enter the rating on the scale of 1 to 100")}
                {fields("Duration", durationRef, "text", "durationId", "Enter the duration in min or hours eg: 90m or 1.5h")}
                {error && <div className="submitError">
                    <h5 style={{ margin: '5px' }}>Kindly provide duration in format:<br /> 150m or 2.5h or rating 0 to 100</h5>
                </div>}
                <button type="submit" id="submitBtn" className="submitBtn">Add Movie</button>
            </form>
        </div>
    )
}

export default MovieForm;
