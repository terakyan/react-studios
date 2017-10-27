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
            <a href="#" className="iconstudio addicon m-r-5 pull-right"><i className="fa fa-power-off f-s-20" aria-hidden="true"></i></a>
          </div>
          <div className="col-xs-12 studio-collapse-toobar collapse in" id="collapseBasic">
              Contnent
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
        <PanelHeader title={basic.title}/>
        <PanelHeader title={basic.title}/>
        <PanelHeader title={basic.title}/>
      </div>
    );
  }
}

export default Settings;
