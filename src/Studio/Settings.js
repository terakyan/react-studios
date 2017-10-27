import React, { Component } from 'react';
import Basic from "./_partials/Basic";
import Shadow from "./_partials/Shadow";
import Animation from "./_partials/Animation";
import '.././Css/Text.css';

function PanelHeader(props) {
    return (
        <div className="row formrow form-horizontal">
          <div className="col-xs-12 studio-collapse-header p-t-5 p-b-5">
                            <span className="pull-left">
                                <a data-toggle="collapse" href="#collapseBasic" className="iconstudio viewicon m-r-5" data-viewpopup="container">
                                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                                </a>{props.title}
                            </span>
                            <span className=" m-l-10 pull-left">
                                <label className="switch switch-flat switch-button">
                                    <input className="switch-input" data-switch="animationcontainer"
                                           data-cssexist="animationclassName" type="checkbox"/>
                                    <span className="switch-label" data-on="On" data-off="Off"></span>
                                    <span className="switch-handle "></span>
                                </label>
                            </span>
            <a href="#" className="iconstudio addicon m-r-5 pull-right"><i className="fa fa-power-off f-s-20" aria-hidden="true"></i></a>
          </div>
          <div className="col-xs-12 studio-collapse-toobar collapse in" id="collapseBasic">
              {props.content}
          </div>
        </div>
    );
}

class Settings extends Component {
  render() {
    var basic = new Basic();
    var shadow = new Shadow();
    var animation = new Animation();
    return (
      <div className='settings'>
        <PanelHeader title={basic.title} content={basic.render()}/>
        <PanelHeader title={shadow.title} content={shadow.render()}/>
        <PanelHeader title={animation.title} content={animation.render()}/>
      </div>
    );
  }
}

export default Settings;
