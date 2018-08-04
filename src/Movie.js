import React,{Component} from 'react';
import Axios from 'axios';

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "" }
        console.log(this.props.id);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount()
    {  
        //Could put axios call here
    }
    handleClick()
    {
        const baseUrl = "https://api.themoviedb.org/3/";
        const apiKey = "bacc5608c580d34a8c1a8ade7ffa23ba";
            Axios.get(`${baseUrl}movie/${this.props.id}?api_key=${apiKey}&language=en-US`)
            .then(res => {
            console.log(res.data);
            });
    }
    render() { 
        return ( <h1>
            <button onClick={this.handleClick}>Get Details</button>
        </h1> );
    }
}
 
export default Movie;