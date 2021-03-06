import React from 'react'

class Movie extends React.Component {
  render() {
    return (
      <div>
      <div className="card" /* style="width: 18rem;" */>
        <div className="card-header d-flex justify-content-between">
          <span>
            <strong>Title: </strong>{this.props.title}
          </span>
          <div>
            <span onClick={this.props.onEditClick} className="mr-2"><i className="far fa-edit"></i></span>
            <span onClick={this.props.onDeleteClick}><i className="fas fa-trash"></i></span>
          </div>
        </div>
        <div className="card-body">
          {this.props.description}
        </div>
        <div className="card-footer">
          <strong>Director:</strong>  {this.props.director}
        </div>
      </div>
      </div>

    );
  }
}

export default Movie
