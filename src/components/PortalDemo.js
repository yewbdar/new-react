import React, { Component } from 'react'
import ReactDom from 'react-dom'
export default function PortalDemo()  {
    // render() {
        return ReactDom.createPortal(
            <h1>
                this is portal demo
            </h1>
        ,document.getElementById('portal-demo'))
        
    // }
}
