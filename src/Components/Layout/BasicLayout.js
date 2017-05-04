import React, { Component } from 'react';
import { Link } from 'react-router';
import Summary from '../Order/Summary';
import './Layout.css';

export default class BasicLayout extends Component {

    render() {
        return (
            <div className="">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/">
                                <img alt="QuadrusMotors" src="/img/Quadrus.svg" />
                            </Link>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/order"><Summary /></Link></li>
                        </ul>
                    </div>
                </nav>

                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}