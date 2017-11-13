import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Posts extends Component {
    render(){
        return (
            <ul>
                {this.props.posts.map((posts,i) => <li key={i}>{posts.title}</li>)}
            </ul>
        );
    }
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired
};
