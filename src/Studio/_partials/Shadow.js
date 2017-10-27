import React, {Component} from 'react';

class Shadow extends Component {
    constructor(props) {
        super(props);
        this.title = "Shadow";
    };

    render() {
        return (
            <div className="col-xs-12 studio-collapse-header p-t-5 ">
                <span className="pull-left">
                    <a data-toggle="collapse" href="#textShadowcontainer"
                       className="iconstudio viewicon m-r-5" data-viewpopup="container">
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </a> Shadow
                </span>
                <span className=" m-l-10 pull-left">
                                <label className="switch switch-flat switch-button">
                                    <input className="switch-input" data-switch="textShadowcontainer"
                                           data-cssexist="text-shadow" type="checkbox"/>
                                    <span className="switch-label" data-on="On" data-off="Off"></span> 
                                    <span className="switch-handle "></span> 
                                </label>
                            </span>
                <a href="#" className="iconstudio addicon m-r-5 pull-right"><i className="fa fa-power-off f-s-20"
                                                                               aria-hidden="true"></i></a>
                <a href="#" className="iconstudio viewicon m-r-5 pull-right" data-roletemplate="textshadow"><i
                    className="fa fa-plus" aria-hidden="true"></i></a>
            </div>
            // <div className="col-xs-12 studio-collapse-toobar collapse in">&nbsp;</div>
    );
    }
}

export default Shadow;
