import React, { Component } from 'react';

class Course extends Component {
    render () {
        console.log(this.props);
        return (
            <div style={{margin: '50px 100px', backgroundColor: '#fef', padding: '20px'}}>
                <h2 style={{color: '#444'}}>{this.props.match.params.title}</h2>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;