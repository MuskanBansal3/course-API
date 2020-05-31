import React, { Component } from 'react';
import CourseDataService from '../service/CourseDataService'

const INSTRUCTOR='muskan'

class ListCoursesComponent extends Component {

    constructor(props) {
        super(props)
        this.state={
            courses:[],
            message: null
        }
        this.deleteCourseClicked = this.deleteCourseClicked.bind(this)
        this.updateCourseClicked = this.updateCourseClicked.bind(this)
        this.addCourseClicked = this.addCourseClicked.bind(this)
        this.refreshCourses = this.refreshCourses.bind(this)
    }

    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() {
        CourseDataService.retrieveAllCourses(INSTRUCTOR)
            .then(
                response => {
                    console.log(response);
                    this.setState({courses: response.data})
                }
            )
    }

    deleteCourseClicked(id) {
        CourseDataService.deleteCourse(INSTRUCTOR, id)
            .then(
                response => {
                    this.setState({ message: `Delete of course ${id} Successful` })
                    this.refreshCourses()
                }
            )
    }

    addCourseClicked() {
        this.props.history.push(`/courses/-1`)
    }

    updateCourseClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/courses/${id}`)
    }

    render() {
        console.log('render')
        return (
            <div className="container" style={{marginLeft:"20px"}}>
                <h3 style={{color:"grey"}}>ALL COURSES</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">                   
                    <table className="table" striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                this.state.courses.map(
                                    course =>
                                        <tr key={course.id}>
                                            <td>{course.id}</td>
                                            <td>{course.description}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateCourseClicked(course.id)} style={{backgroundColor:"grey", color:"white"}}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteCourseClicked(course.id)} style={{backgroundColor:"light grey", color:"black"}}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                    <button className="btn btn-success" onClick={this.addCourseClicked} style={{backgroundColor:"green", color:"white"}}>Add</button>  
                    </div>
                </div>
            </div>
        )
    }
}

export default ListCoursesComponent
