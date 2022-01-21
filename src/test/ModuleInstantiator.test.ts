import * as assert from 'assert';
import * as path from 'path';
import * as vscode from 'vscode';
import { formatInstance } from '../providers/ModuleInstantiator';
import os = require('os')
const testFolderLocation = '../../src/test';

suite('ModuleInstantiator Tests', () => {
    test('test #1: formatInstance without parameters', async () => {
        let uri = vscode.Uri.file(path.join(__dirname, testFolderLocation, 'test-files', 'ModuleInstantiator.test.1.v'));
        let document = await vscode.workspace.openTextDocument(uri);

        // Range of the module in the document
        let fullRange = null;
        if(os.platform() == 'win32') {
            fullRange = new vscode.Range(document.positionAt(608), document.positionAt(1181));
        } else {
            fullRange = new vscode.Range(document.positionAt(585), document.positionAt(1129));
        }

        const container = document.getText(fullRange).replace(/^\s+|\s+$/g, '');
        uri = vscode.Uri.file(path.join(__dirname, testFolderLocation, 'test-files', 'ModuleInstantiator.test.2.v'));
        document = await vscode.workspace.openTextDocument(uri);

        if(os.platform() == 'win32') {
            fullRange = new vscode.Range(document.positionAt(152), document.positionAt(370));
        } else {
            fullRange = new vscode.Range(document.positionAt(152), document.positionAt(354));
        }

        let instance = document.getText(fullRange).trim();
        // Replace multiple space with a single space
        instance = instance.replace(/ +/g, ' ');

        let actual_instance;

        try {
            actual_instance = formatInstance('adder', container).trim();
        } catch (error) {
            assert.fail(`formatInstance produced an error: ${error}`);
        }

        // Replace multiple space with a single space
        actual_instance = actual_instance.replace(/ +/g, ' ');
        if(os.platform() == 'win32') {
            actual_instance = actual_instance.replace(/\n/g, '\r\n');
            actual_instance = actual_instance.replace(/\r\r/g, '\r');
        }

        assert.strictEqual(actual_instance, instance);
    });

    test('test #2: formatInstance with parameters', async () => {
        let uri = vscode.Uri.file(path.join(__dirname, testFolderLocation, 'test-files', 'ModuleInstantiator.test.1.v'));
        let document = await vscode.workspace.openTextDocument(uri);

        let fullRange = null;
        // Range of the module in the document
        if(os.platform() == 'win32') {
            fullRange = new vscode.Range(document.positionAt(1338), document.positionAt(1965));
        } else{
            fullRange = new vscode.Range(document.positionAt(1278), document.positionAt(1872));
        }

        let container = document.getText(fullRange).replace(/^\s+|\s+$/g, '');
        // Replace multiple space with a single space
        container = container.replace(/ +/g, ' ');

        uri = vscode.Uri.file(path.join(__dirname, testFolderLocation, 'test-files', 'ModuleInstantiator.test.2.v'));
        document = await vscode.workspace.openTextDocument(uri);

        if(os.platform() == 'win32') {
            fullRange = new vscode.Range(document.positionAt(526), document.positionAt(820));
        } else {
            fullRange = new vscode.Range(document.positionAt(506), document.positionAt(785));
        }

        let instance = document.getText(fullRange).trim();
        // Replace multiple space with a single space
        instance = instance.replace(/ +/g, ' ');

        let actual_instance;

        try {
            actual_instance = formatInstance('bar', container).trim();
        } catch (error) {
            assert.fail(`formatInstance produced an error: ${error}`);
        }

        // Replace multiple space with a single space
        actual_instance = actual_instance.replace(/ +/g, ' ');
        if(os.platform() == 'win32') {
            actual_instance = actual_instance.replace(/\n/g, '\r\n');
            actual_instance = actual_instance.replace(/\r\r/g, '\r');
        }

        assert.strictEqual(actual_instance, instance);
    });

    test('test #3: formatInstance without parameters, ports in header', async () => {
        let uri = vscode.Uri.file(path.join(__dirname, testFolderLocation, 'test-files', 'ModuleInstantiator.test.1.v'));
        let document = await vscode.workspace.openTextDocument(uri);

        let fullRange = null;
        // Range of the module in the document
        if(os.platform() == 'win32') {
            fullRange = new vscode.Range(document.positionAt(2141), document.positionAt(2741));
        } else {
            fullRange = new vscode.Range(document.positionAt(2041), document.positionAt(2611));
        }

        let container = document.getText(fullRange).replace(/^\s+|\s+$/g, '');
        // Replace multiple space with a single space
        container = container.replace(/ +/g, ' ');

        uri = vscode.Uri.file(path.join(__dirname, testFolderLocation, 'test-files', 'ModuleInstantiator.test.2.v'));
        document = await vscode.workspace.openTextDocument(uri);

        if(os.platform() == 'win32') {
            fullRange = new vscode.Range(document.positionAt(994), document.positionAt(1120));
        } else {
            fullRange = new vscode.Range(document.positionAt(954), document.positionAt(1071));
        }

        let instance = document.getText(fullRange).trim();
        // Replace multiple space with a single space
        instance = instance.replace(/ +/g, ' ');

        let actual_instance;

        try {
            actual_instance = formatInstance('akker', container).trim();
        } catch (error) {
            assert.fail(`formatInstance produced an error: ${error}`);
        }

        // Replace multiple space with a single space
        actual_instance = actual_instance.replace(/ +/g, ' ');
        if(os.platform() == 'win32') {
            actual_instance = actual_instance.replace(/\n/g, '\r\n');
            actual_instance = actual_instance.replace(/\r\r/g, '\r');
        }

        assert.strictEqual(actual_instance, instance);
    });

    test('test #4: formatInstance with parameters, ports in header', async () => {
        let uri = vscode.Uri.file(path.join(__dirname, testFolderLocation, 'test-files', 'ModuleInstantiator.test.1.v'));
        let document = await vscode.workspace.openTextDocument(uri);

        let fullRange = null;
        // Range of the module in the document
        if(os.platform() == 'win32') {
            fullRange = new vscode.Range(document.positionAt(2911), document.positionAt(3567));
        } else {
            fullRange = new vscode.Range(document.positionAt(2777), document.positionAt(3398));
        }

        let container = document.getText(fullRange).replace(/^\s+|\s+$/g, '');
        // Replace multiple space with a single space
        container = container.replace(/ +/g, ' ');

        uri = vscode.Uri.file(path.join(__dirname, testFolderLocation, 'test-files', 'ModuleInstantiator.test.2.v'));
        document = await vscode.workspace.openTextDocument(uri);

        if(os.platform() == 'win32') {
            fullRange = new vscode.Range(document.positionAt(1296), document.positionAt(1471));
        } else {
            fullRange = new vscode.Range(document.positionAt(1240), document.positionAt(1407));
        }

        let instance = document.getText(fullRange).trim();
        // Replace multiple space with a single space
        instance = instance.replace(/ +/g, ' ');

        let actual_instance;

        try {
            actual_instance = formatInstance('accer', container).trim();
        } catch (error) {
            assert.fail(`formatInstance produced an error: ${error}`);
        }

        // Replace multiple white spaces with a single space
        actual_instance = actual_instance.replace(/ +/g, ' ');
        if(os.platform() == 'win32') {
            actual_instance = actual_instance.replace(/\n/g, '\r\n');
            actual_instance = actual_instance.replace(/\r\r/g, '\r');
        }

        assert.strictEqual(actual_instance, instance);
    });

    test('test #5: formatInstance with defaulted parameters.', async () => {
        let uri = vscode.Uri.file(path.join(__dirname, testFolderLocation, 'test-files', 'ModuleInstantiator.test.1.v'));
        let document = await vscode.workspace.openTextDocument(uri);

        let fullRange = null;
        // Range of the module in the document
        if(os.platform() == 'win32') {
            fullRange = new vscode.Range(document.positionAt(3774), document.positionAt(4136));
        } else {
            fullRange = new vscode.Range(document.positionAt(3597), document.positionAt(3942));
        }

        let container = document.getText(fullRange).replace(/^\s+|\s+$/g, '');
        // Replace multiple space with a single space
        container = container.replace(/ +/g, ' ');

        uri = vscode.Uri.file(path.join(__dirname, testFolderLocation, 'test-files', 'ModuleInstantiator.test.2.v'));
        document = await vscode.workspace.openTextDocument(uri);

        if(os.platform() == 'win32') {
            fullRange = new vscode.Range(document.positionAt(1662), document.positionAt(1828));
        } else {
            fullRange = new vscode.Range(document.positionAt(1590), document.positionAt(1747));
        }

        let instance = document.getText(fullRange).trim();
        // Replace multiple space with a single space
        instance = instance.replace(/ +/g, ' ');

        let actual_instance;

        try {
            actual_instance = formatInstance('anner', container).trim();
        } catch (error) {
            assert.fail(`formatInstance produced an error: ${error}`);
        }

        // Replace multiple white spaces with a single space
        actual_instance = actual_instance.replace(/ +/g, ' ');
        if(os.platform() == 'win32') {
            actual_instance = actual_instance.replace(/\n/g, '\r\n');
            actual_instance = actual_instance.replace(/\r\r/g, '\r');
        }

        assert.strictEqual(actual_instance, instance);
    });

    test('test #6: empty and undefined container/symbol scenarios', async () => {
        let actual_instance;

        // Empty container with valid symbol
        try {
            actual_instance = formatInstance('bar', '');
            assert.strictEqual(actual_instance, undefined);
        } catch (error) {
            assert.fail(`formatInstance produced an error: ${error}`);
        }

        // Undefined container with valid symbol
        try {
            actual_instance = formatInstance('bar', undefined);
            assert.strictEqual(actual_instance, undefined);
        } catch (error) {
            assert.fail(`formatInstance produced an error: ${error}`);
        }

        const uri = vscode.Uri.file(path.join(__dirname, testFolderLocation, 'test-files', 'ModuleInstantiator.test.1.v'));
        const document = await vscode.workspace.openTextDocument(uri);

        // Range of the module in the document
        const fullRange = new vscode.Range(document.positionAt(1293), document.positionAt(1899));

        let container = document.getText(fullRange).replace(/^\s+|\s+$/g, '');
        // Replace multiple space with a single space
        container = container.replace(/ +/g, ' ');

        // Empty symbol with valid container
        try {
            actual_instance = formatInstance('', container);
            assert.strictEqual(actual_instance, undefined);
        } catch (error) {
            assert.fail(`formatInstance produced an error: ${error}`);
        }

        // Undefined symbol with valid container
        try {
            actual_instance = formatInstance(undefined, container);
            assert.strictEqual(actual_instance, undefined);
        } catch (error) {
            assert.fail(`formatInstance produced an error: ${error}`);
        }

        // Empty symbol and container
        try {
            actual_instance = formatInstance('', '');
            assert.strictEqual(actual_instance, undefined);
        } catch (error) {
            assert.fail(`formatInstance produced an error: ${error}`);
        }

        // Undefined symbol and container
        try {
            actual_instance = formatInstance(undefined, undefined);
            assert.strictEqual(actual_instance, undefined);
        } catch (error) {
            assert.fail(`formatInstance produced an error: ${error}`);
        }

        // Valid symbol and null container
        try {
            actual_instance = formatInstance('bar', null);
            assert.strictEqual(actual_instance, undefined);
        } catch (error) {
            assert.fail(`formatInstance produced an error: ${error}`);
        }

        // Null symbol and container
        try {
            actual_instance = formatInstance(null, null);
            assert.strictEqual(actual_instance, undefined);
        } catch (error) {
            assert.fail(`formatInstance produced an error: ${error}`);
        }
    });

    test('test #7: formatInstance golden output.', async () => {
        let uri = vscode.Uri.file(path.join(__dirname, testFolderLocation, 'test-files', 'ModuleInstantiator.test.1.v'));
        let document = await vscode.workspace.openTextDocument(uri);

        let fullRange = null;
        // Range of the module in the document
        if(os.platform() == 'win32') {
            fullRange = new vscode.Range(document.positionAt(5533), document.positionAt(6114));
        } else {
            fullRange = new vscode.Range(document.positionAt(5269), document.positionAt(5814));
        }

        let container = document.getText(fullRange).replace(/^\s+|\s+$/g, '');
        // Replace multiple space with a single space
        container = container.replace(/ +/g, ' ');

        uri = vscode.Uri.file(path.join(__dirname, testFolderLocation, 'test-files', 'ModuleInstantiator.test.2.v'));
        document = await vscode.workspace.openTextDocument(uri);

        if(os.platform() == 'win32') {
            fullRange = new vscode.Range(document.positionAt(2759), document.positionAt(2987));
        } else{
            fullRange = new vscode.Range(document.positionAt(2636), document.positionAt(2856));
        }

        const instance = document.getText(fullRange).trim();

        let actual_instance;

        try {
            actual_instance = formatInstance('golden', container).trim();
        } catch (error) {
            assert.fail(`formatInstance produced an error: ${error}`);
        }

         if(os.platform() == 'win32') {
             actual_instance = actual_instance.replace(/\n/g, '\r\n');
             actual_instance = actual_instance.replace(/\r\r/g, '\r');
         }

        assert.strictEqual(actual_instance, instance);
    });
});
