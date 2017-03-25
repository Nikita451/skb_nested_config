let fs = require('fs')
let path = require('path')
let _ = require('lodash')

class EnvWork {
    constructor(dir, file) {
        this.dir = dir
        this.file = file
        this.plainObject = {}
    }

    getObject() {
        return this.plainObject
    }
    
    searchFileAndCreateObject( callback ) {
        let self = this
        fs.readFile( this._getCurrentPath(), (err, data) => {
            if (err) {
                let newDir = self._getNewDir()
                if (newDir != self.dir) {
                    self.dir = newDir
                    return self.searchFileAndCreateObject( callback )
                } else {
                    console.log('File not found ...')
                    return;
                }
            } else {
                self.plainObject = self._createObject( data.toString() )
                callback( self.plainObject )
            }
        })
    }
    
    _createObject(data) {
        let self = this
        this.plainObject = {}
        data = data.split('\n')
        for (let i=0; i < data.length; i++) {
            let el = data[i]
            let result = self._correctRaw(el)
            if (result) {
                let ar = el.split('=')
                self.plainObject[ ar[0].trim() ] = ar[1].trim()
            } else if (result === undefined) {
                self.plainObject = {}
                console.log('incorrect configuration file!')
                return {};
            } 
        }
        return this.plainObject
    }
    
    _correctRaw(raw) {
        raw = raw.trim();
        //empty row or comment - pass raw
        if (!raw || raw[0] == '#') return false
        if (raw.indexOf('=') != -1 ) return true;
        console.log('incorrect raw: ' + raw)
        return undefined
    }
    
    _getNewDir() {
        return path.join( this.dir, '..')    
    }
    
    _getCurrentPath() {
        return path.join( this.dir, this.file )
    }
}

module.exports = EnvWork