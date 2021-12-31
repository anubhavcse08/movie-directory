import React from 'react';


const MovieLists = (props) => {
    return (
        <div className="movie-list">
            {props.movies.map((item, index) => {
                return (
                    <ul key={index} className="movie-ul">
                        <h4 className="movie-name">{item.movie}</h4>
                        <div className="movie-rat">
                            <p className="movie-details">{`Rating: ${item.rating}/100`}</p>
                            <p className="movie-details">{`${item.duration} hours`}</p>
                        </div>
                    </ul>
                )
            })}
        </div>
    )
}

export default MovieLists;
