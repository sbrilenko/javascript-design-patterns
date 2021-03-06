/**
 * Класс-ветка, который может в себе содержать как такие же ветки, так и листья
 * */
var Branch = (function () {

    function Branch(name) {
        this._name = name;
        this._children = [];
    }

    Branch.prototype.addChild = function (child) {
        this._children.push(child);

        return this;
    };

    Branch.prototype.removeChild = function (child) {
        var length = this._children.length,
            i = 0;

        for (; i < length; i++) {
            if (this._children[i] === child) {
                this._children.splice(i, 1);
                return;
            }
        }
    };

    Branch.prototype.getChild = function (item) {
        return this._children[item];
    };

    Branch.prototype.hasChild = function (child) {
        var length = this._children.length,
            i = 0;

        for (; i < length; i++) {
            if (this._children[i] === child) {
                return true;
            }
        }

        return false;
    };

    Branch.prototype.hasChildren = function() {
        return this.getChildrenCount() > 0;
    };

    Branch.prototype.getName = function() {
        return this._name;
    };

    Branch.prototype.getChildrenCount = function () {
        return this._children.length;
    };

    Branch.prototype.print = function() {
        var names = [],
            i = 0,
            length = this._children.length;

        if (length) {
            for (; i < length; i++) {
                names.push(this._children[i].getName());
            }
        }

        return this._name + ' -> [' + names.join(', ') + ']';
    };

    return Branch;
})();


/**
 * Класс-лист, который может принадлежать ветке
 * */
var Leaf = (function () {

    function Leaf(name) {
        this._name = name;
    }

    Leaf.prototype.getName = function() {
        return this._name;
    };

    return Leaf;
})();