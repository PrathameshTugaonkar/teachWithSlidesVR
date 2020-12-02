import React from 'react';
import {
  asset,
  Environment,
  View,
} from 'react-360';
import Pdf from '../static_assets/assignment.pdf';

export default class PdfReader extends React.Component{
    render(){
        return(
            <div>
                <a href = {Pdf}>Resume</a>
            </div>
        )
    }
};