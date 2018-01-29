import { say } from 'cowsay'

var w = window
w.say = say
w.config = {}
var c = w.config
c.MY_NAME = window.MY_NAME || 'student'
c.ENV = process.env.NODE_ENV || 'development'
