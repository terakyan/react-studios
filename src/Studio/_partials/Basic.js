import React, {Component} from 'react';
import { SketchPicker } from 'react-color';

class Basic extends Component {
    constructor(props) {
        super(props);
        this.title = "Basic";
    };
    render() {
        return (
            <div>
                <div className="row b-b-1">
                    <div className="col-xs-12 col-md-6 col-lg-4 p-t-10 p-b-10 basic-font-color">
                        <div className="pull-left col-xs-9 p-l-0 p-r-0  ">
                            <select data-selector="fontfamily" data-css="font-family"
                                    className="customselect form-control" data-style="className-style-menu">
                                <option value="Georgia, serif">Georgia, serif</option>
                                <option value="Times New Roman">Times New Roman</option>
                                <option value="Arial, Helvetica, sans-serif">Arial</option>
                                <option value="Helvetica, sans-serif">Helvetica</option>
                                <option value="Tahoma, Geneva, sans-serif">Tahoma</option>
                                <option value="Trebuchet MS, Helvetica, sans-serif">Trebuchet MS</option>
                                <option value="Verdana, Geneva, sans-serif">Verdana</option>
                            </select>
                        </div>
                        <div className="pull-right col-xs-3 p-l-10  p-r-0">
                            {/*<SketchPicker />*/}
                  <span className="input-group color-picker input-color input-color-inblock"
                        data-textcolor="color">
                  <input type="text" className="form-control hide" id="" value="#000" name=""
                         data-css="color"/>
                  <span className="input-group-addon"><i></i></span> </span>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-3  p-t-10 p-b-10 text-style-tool ">
                        <div className="width100">
                            <div className="spinner letter-spacing">
                                <label htmlFor="font-size" className="sr-only">font-size</label>
                                <input type="text" value="12" data-css="font-size" data-html="font-size" data-after="px"
                                       id="font-size" className="form-control"/>
                                <div className="input-group-btn-vertical">
                                    <button className="btn btn-default" type="button"><i
                                        className="fa fa-caret-up"></i></button>
                                    <button className="btn btn-default" type="button"><i
                                        className="fa fa-caret-down"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-6 col-lg-3 p-t-10 p-b-10 basic-font-weight">
                        <a href="#" className="btn btn-default bold-button" data-actioncss="font-weight"
                           data-val="bold">B</a> <a href="#" className="btn btn-default italic-button"
                                                    data-actioncss="font-style" data-val="italic">I</a>
                    </div>
                    <div className="col-xs-6 col-md-6 col-lg-2  p-t-10 p-b-10 text-decoration-style">
                        <select className="form-control customselect" data-style="className-style-menu"
                                data-css="text-decoration"
                                data-selector="textdecoration">
                            <option value="none">none</option>
                            <option value="blink" selected="selected">blink</option>
                            <option value="line-through">line-through</option>
                            <option value="overline">overline</option>
                            <option value="underline">underline</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-12 col-lg-6 p-t-10 p-b-10 text-style-tool basic-letter-spacing">
                        <div className="spinner line-height col-xs-6">
                            <label htmlFor="AngleInput" className="sr-only">line-height</label>
                            <input type="text" value="12" data-css="line-height" data-html="line-height" data-after="px"
                                   id="line-height" className="form-control"/>
                            <div className="input-group-btn-vertical">
                                <button className="btn btn-default" type="button"><i className="fa fa-caret-up"></i>
                                </button>
                                <button className="btn btn-default" type="button"><i
                                    className="fa fa-caret-down"></i></button>
                            </div>
                        </div>
                        <div className="spinner word-spacing col-xs-6">
                            <label htmlFor="letter-spacing" className="sr-only">letter-spacing</label>
                            <input type="text" value="0" data-css="letter-spacing" data-html="letter-spacing"
                                   data-after="px" id="letter-spacing" className="form-control"/>
                            <div className="input-group-btn-vertical">
                                <button className="btn btn-default" type="button"><i className="fa fa-caret-up"></i>
                                </button>
                                <button className="btn btn-default" type="button"><i
                                    className="fa fa-caret-down"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-6 col-lg-3 p-t-10 p-b-10  text-style-tool basic-text-transform">
                        <div className="text-transform">
                            <select className="form-control customselect" data-css="text-transform"
                                    data-selector="texttransform" data-style="className-style-menu">
                                <option value="none">none</option>
                                <option value="capitalize" selected="selected">capitalize</option>
                                <option value="lowercase">lowercase</option>
                                <option value="uppercase">uppercase</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-6  col-lg-3 p-t-10 p-b-10 text-tool-align ">
                        <label htmlFor="textalign" className="sr-only">Text Align</label>
                        <select className="form-control customselect" data-css="text-align"
                                data-selector="textalign" data-style="className-style-menu">
                            <option data-icon="glyphicon-align-left" value="left"></option>
                            <option data-icon="glyphicon-align-center" value="center"></option>
                            <option data-icon="glyphicon-align-right" value="right"></option>
                            <option data-icon="glyphicon-align-justify" value="justify"></option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default Basic;
