import {checkPassword, checkPasswordAndThrowReason} from './PasswordChecker.js'

const result = checkPassword('Abcdefghijklmnopqrstuvwxyz')

console.log(result);