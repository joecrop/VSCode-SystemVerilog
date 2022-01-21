import * as assert from 'assert';
import { getPathFromUri } from '../utils/common';

suite('Utils Common Tests', () => {
    test('test #1: getPathFromUri-file', async () => {
        let rootPath = 'c:/home/users/workspace';
        let expectedPath = 'c:/home/users/workspace/directory/design.sv';
        let uri = 'file:///c%3A/home/users/workspace/directory/design.sv';

        assert.strictEqual(expectedPath, getPathFromUri(uri, rootPath));

    });

    test('test #2: getPathFromUri-windows', async () => {

        let rootPath = 'c:\\home\\users\\workspace';
        let expectedPath = 'c:\\home\\users\\workspace\\directory\\design.sv';
        let uri = 'c:\\home\\users\\workspace\\directory\\design.sv';
        let got = getPathFromUri(uri, rootPath);
        assert.strictEqual(expectedPath, got);

    });

    test('test #3: getPathFromUri-linux', async () => {

        let rootPath = '/home/users/workspace';
        let expectedPath = '/home/users/workspace/directory/design.sv';
        let uri = 'file:///home/users/workspace/directory/design.sv';

        assert.strictEqual(expectedPath, getPathFromUri(uri, rootPath));
    });

    test('test #4: getPathFromUri-undef', async () => {

        // URI without a path
        assert.strictEqual('', getPathFromUri('file:///', ''));

        // undefined/null/empty document
        assert.strictEqual('', getPathFromUri('', ''));
        assert.strictEqual('', getPathFromUri(undefined, undefined));
        assert.strictEqual('', getPathFromUri(null, null));
    });
});
