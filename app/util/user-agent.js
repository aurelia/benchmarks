import UAParser from 'faisalman/ua-parser-js/ua-parser.min.js';

let parser = new UAParser(),
    browser = parser.getBrowser(), // {name, version}
    os = parser.getOS();           // {name, version}

export var userAgent = `${browser.name} on ${os.name} ${os.version}`;
