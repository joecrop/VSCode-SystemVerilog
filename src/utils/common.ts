import * as uriJs from 'uri-js';
const os = require('os');
/**
    Get path from a given `uri`

    @param uri the uri
    @param rootPath the root path
    @return the path
*/
export function getPathFromUri(uri: string, rootPath: string): string {
    if (!uri || !rootPath) {
        return '';
    }

    const nUri = uri.replace(/\\/g, '/');
    const lUri = decodeURIComponent(nUri); // convert hexadecimal characters to ASCII
    const parsedUri = uriJs.parse(lUri);
    if (!parsedUri.path) {
        return '';
    }
    let parsedUriPlatform = parsedUri.path;
    if (os.platform() == 'win32') {
        parsedUriPlatform = parsedUri.scheme + ":" + parsedUri.path
    }

    let matches;
    const lRootPath = rootPath.replace(/\\/g, '/');
    console.log("parsedUri.path: " + parsedUriPlatform)
    console.log("lRootPath: " + lRootPath)
    const regex = new RegExp(`/?${lRootPath}(.*)`);
    if ((matches = regex.exec(parsedUriPlatform)) != null && matches.length > 1) {
        if (os.platform() == 'win32') {
            let path = lRootPath + matches[1];
            return path.replace(/\//g, '\\');
        }
        return lRootPath + matches[1];
    }

    return '';
}
