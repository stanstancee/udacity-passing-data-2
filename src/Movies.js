import React, {Component}  from 'react';
import Movie from './Movie';

class Movies extends Component {

  render(){
  const {profiles, users, movies} = this.props;
    const  myMovies = [];
    for (const a in movies){
      myMovies.push(a)
    }
    const filteredProfile =(profile,movie) => profile.favoriteMovieID === movie;
   
    return(
       <div>
      {myMovies.map((movie, index) => {
         const names = profiles.filter(profile => filteredProfile(profile,movie));
        return  <Movie names={names} movie= {movies[movie].name} key={index} users={users} />
      })}
      </div>
    )
  }

}
export default Movies;
