import React, {Component} from 'react';

class Animation extends Component {
    constructor(props) {
        super(props);
        this.title = "Animation";
    };

    render() {
        return (
            <div>
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
