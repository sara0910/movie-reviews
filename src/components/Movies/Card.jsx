import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { mdata, data, mclick } = this.props;
        const imgpath = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
        console.log(data);
        return(
            <div className="card-container">
                { mdata.map((i, index) => (
                    <div className="card-list" key={index} onClick={() => {mclick(data)}}>
                        <div>
                            <img src={`${imgpath}${i.poster_path}`}  alt="image"/>
                        </div>
                        <div className="card-details"> 
                            <div>{i.title}</div>
                            <div>{i.release_date}</div>
                        </div>
                    </div>
                )
                )}
            </div>
        )
    }
}
export default Card;