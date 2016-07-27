/**
 * Created by poiso_000 on 27/07/2016.
 */
import 'core-js/es6';
import 'reflect-metadata';
require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
    // Production
} else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}