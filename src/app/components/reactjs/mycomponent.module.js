import { react2angular } from 'react2angular'
import mycomponent from "../reactjs/mycomponent"
angular.module('reactEmbed', [])
    .component("myComponent", react2angular(mycomponent));