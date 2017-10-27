import React, {Component} from 'react';

class Animation extends Component {
    constructor(props) {
        super(props);
        this.title = "Animation";
    };

    render() {
        return (
            <div>
                <div className="col-xs-12 studio-collapse-header p-t-5 ">
                            <span className=" pull-left">
                                <a data-toggle="collapse" href="#animationcontainer"
                                   className="iconstudio viewicon m-r-5" data-viewpopup="container">
                                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                                </a> Animation
                            </span>
                    <span className=" m-l-10 pull-left">
                                <label className="switch switch-flat switch-button">
                                    <input className="switch-input" data-switch="animationcontainer"
                                           data-cssexist="animationclassName" type="checkbox"/>
                                    <span className="switch-label" data-on="On" data-off="Off"></span> 
                                    <span className="switch-handle "></span> 
                                </label>
                            </span>
                    <a href="#" className="iconstudio addicon m-r-5 pull-right"><i className="fa fa-power-off f-s-20"
                                                                                   aria-hidden="true"></i></a>
                </div>
                <div className="col-xs-12 studio-collapse-toobar collapse in" id="animationcontainer">
                    <div className="row">
                        <div className="col-xs-6 col-md-6 col-lg-3 p-t-10 p-b-10 m-t-5">
                            Animation
                        </div>
                        <div className="col-xs-6 col-md-6 col-lg-6 p-t-10 p-b-10">
                            <select id="AnimationclassName" className="form-control customselect"
                                    data-style="className-style-menu" data-selector="animationclassName"
                                    data-css="animationclassName">
                                <option value=".ani-swing">ani-swing</option>
                                <option value=".ani-shake">ani-shake</option>
                                <option value=".ani-rubberband">ani-rubberband</option>
                            </select>
                        </div>
                        <div className="col-xs-12 col-md-12 col-lg-3 p-t-10 p-b-10">
                            <a href="#" className="iconform editicon" data-editpopup="container"></a>
                            <a href="#" className="iconform viewicon" data-viewpopup="container"></a>
                            <a href="#" className="iconform addicon" data-addpopup="container"></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Animation;
