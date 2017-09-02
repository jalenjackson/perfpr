import React from 'react'
import {mount} from 'react-mounter'
import {MainLayout} from './layouts/MainLayout'
import App from "../App"
import Test from '../Components/Test'

FlowRouter.route('/', {
    action(){
        mount(MainLayout, {
            content: (<App/>)
        })
    }
});

FlowRouter.route('/test', {
    action(){
        mount(MainLayout, {
            content: (<Test/>)
        })
    }
});

