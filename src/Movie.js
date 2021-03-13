import React, {Component}  from 'react';


class Movie extends Component {

  render(){
  const {names, movie, users} = this.props;
console.log(names)
   
    return(
       <div>
      <h2>{movie}</h2>
      {
        names.length? 
        <div>
        <p>Liked By:</p>
      <ul>
      { names.map(name => <li key={name.id} > {users[name.id].name} </li>)}
</ul> </div>:
      <div>
<p>None of the current users liked this movie</p>
      </div>
      }
      </div>
    )
  }

}
export default Movie;
