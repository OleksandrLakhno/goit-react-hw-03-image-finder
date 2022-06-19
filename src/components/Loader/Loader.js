import React from "react";
import './Loader.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from 'react-loader-spinner'

export default function Loader() { 
    return (
        <div className="loader">
            <ThreeDots
            color="#00BFFF"
            height={80}
            width={80}
        />
        </div>
    );   
};