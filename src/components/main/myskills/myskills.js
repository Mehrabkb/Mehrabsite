import React , {Component} from "react";
import './myskills.css';
import ProgressBar from "@ramonak/react-progress-bar";

class myskills extends Component{
    render(){
        return (
            <div className="myskills-container">
                <h2>توانایی های من </h2>
                <div className="myskill-item">
                    <h3>PHP , MYSQL</h3>
                    <ProgressBar completed={89} />;
                </div>
                <div className="myskill-item">
                    <h3>HTML , CSS </h3>
                    <ProgressBar completed={97} />;
                </div>
                <div className="myskill-item">
                    <h3>JAVASCRIPT</h3>
                    <ProgressBar completed={83} />;
                </div>
                <div className="myskill-item">
                    <h3>PYTHON</h3>
                    <ProgressBar completed={70} />;
                </div>
                <div className="myskill-item">
                    <h3>Laravel</h3>
                    <ProgressBar completed={70} />;
                </div>
                <div className="myskill-item">
                    <h3>ًREACT</h3>
                    <ProgressBar completed={65} />;
                </div>
                <div className="myskill-item">
                    <h3>ANGULAR</h3>
                    <ProgressBar completed={70} />;
                </div>
            </div>
        )
    }
}
export default myskills;