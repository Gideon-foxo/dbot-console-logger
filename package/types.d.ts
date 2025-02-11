/**
 * Logs an error
 * @param text - Text description of the error
 * @param objects - Error object 
 */
function error (text: string, objects: unknown = null): void


/**
 * Logs a warning
 * @param text - Text description of the warning
 * @param objects - Warning object 
 */
function warn (text: string, objects: unknown = null): void


/**
 * Logs a info message
 * @param text - Text description of the info message
 * @param objects - Info message object 
 */
function info (text: string, objects: unknown = null): void


/**
 * Logs a debug message
 * @param text - Text description of the debug message
 * @param objects - Debug message object 
 */
function debug (text: string, objects: unknown = null): void


/**
 * Returns formatted date and time to be used for console logging
 */
function time (): string


/** Export of chalk - https://www.npmjs.com/package/chalk */
import chalk from 'chalk'

/** Export of moment - https://www.npmjs.com/package/moment */
import moment from 'moment'

export default {
    error,
    err: error,
    e: error,

    warn,
    warning: warn,
    w: warn,

    info,
    i: info,

    debug,
    db: debug,
    d: debug,

    time,
    timestamp: time,
    ts: time,
    t: time,

    chalk,
    c: chalk,

    moment,
    m: moment
}
