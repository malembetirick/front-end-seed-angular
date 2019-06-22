import { react2angular } from 'react2angular'
import Game from "./Game"
angular.module('tictactoeGame', [])
    .component("game", react2angular(Game));