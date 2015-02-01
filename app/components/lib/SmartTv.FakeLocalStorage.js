/*
    support class FakeLocalStorage
        fallback for older TVs - creates class which works like window.localStorage

        usage:
            set item:
                window.localStorage.setItem(name, value); // name => string | value => all types

            get item:
                window.localStorage.getItem(name); // name => string | return value (not specified)

            remove item:
                window.localStorage.removeItem(name); // name => string

            clear localStorage (remove all items):
                window.localStorage.clear();
*/

function FakeLocalStorage() {
    this.fileSystem = new FileSystem();
    this.filePath = curWidget.id + "local.data";
    this.fileObj = false;
}

FakeLocalStorage.testLocalStorageSupport = function() {
    var testKey = "test";
    var storage = window.localStorage;

    try {
        storage.setItem(testKey, "1");
        storage.removeItem(testKey);
        return true;
    } catch (error) {
        return false;
    }
};

FakeLocalStorage.prototype.getItem = function(name) {
    var data = this.read();
    return data.hasOwnProperty(name) ? data[name] : undefined;
};

FakeLocalStorage.prototype.setItem = function(name, value) {
    var data = this.read();
    data[name] = value;
    this.write(data);
};

FakeLocalStorage.prototype.removeItem = function(name) {
    var data = this.read();
    delete data[name];
    this.write(data);
};

FakeLocalStorage.prototype.clear = function() {
    this.crateFile();
};

FakeLocalStorage.prototype.crateFile = function() {
    this.fileObj = this.openFile('w+');
    this.closeFile(this.fileObj);
};

FakeLocalStorage.prototype.write = function(data) {
    this.fileObj = this.openFile('w');
    this.fileObj.writeAll(JSON.stringify(data));
    if(this.fileObj) this.closeFile(this.fileObj);
};

FakeLocalStorage.prototype.read = function() {
    this.fileObj = this.openFile('r');
    var res = {};
    if(this.fileObj) {
        var read = this.fileObj.readAll();
        this.closeFile(this.fileObj);
        if(read != '') {
            res = JSON.parse(read);
        }
    } else {
        this.crateFile();
    }
    return res;
};

FakeLocalStorage.prototype.openFile = function(val) {
    var file = this.fileSystem.openCommonFile(this.filePath, val);
    return file;
};

FakeLocalStorage.prototype.closeFile = function(file) {
    this.fileSystem.closeCommonFile(file);
};

if(!FakeLocalStorage.testLocalStorageSupport()) {
    window.localStorage = new FakeLocalStorage();
};



