var styles = {
    'reset': '\x1B[0m',
    'bright': '\x1B[1m',
    'grey': '\x1B[2m',
    'italic': '\x1B[3m',
    'underline': '\x1B[4m',
    'reverse': '\x1B[7m',
    'hidden': '\x1B[8m',
    'black': '\x1B[30m',
    'red': '\x1B[31m',
    'green': '\x1B[32m',
    'yellow': '\x1B[33m',
    'blue': '\x1B[34m',
    'magenta': '\x1B[35m',
    'cyan': '\x1B[36m',
    'white': '\x1B[37m',
    'blackBG': '\x1B[40m',
    'redBG': '\x1B[41m',
    'greenBG': '\x1B[42m',
    'yellowBG': '\x1B[43m',
    'blueBG': '\x1B[44m',
    'magentaBG': '\x1B[45m',
    'cyanBG': '\x1B[46m',
    'whiteBG': '\x1B[47m'
}

function colors(keys, source) {
    var values = ''
    if(typeof keys === 'string'){
        values = styles[keys]
    }
    else {
        keys.forEach(key => {
            values += styles[key]
        });
    }
    return values + source + styles['reset']
}

module.exports = colors
