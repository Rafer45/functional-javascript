
if (!Array.prototype.flatPush) {
    Array.prototype.flatPush = function (arr) {
        return Array.prototype.push.apply(this, arr);
    }
}

function getDependencies(tree) {
    var keys = Object.keys(tree),

    if (keys.indexOf("dependencies") === -1) {
        return [];
    }

    var deps = tree.dependencies;

    return Object.keys(deps).reduce(function(dependencyArr, moduleName){
        var module = deps[moduleName],
            modStr = moduleName + "@" + module.version;

        if (dependencyArr.indexOf(modStr) === -1)
            dependencyArr.push(modStr);

        dependencyArr.flatPush(getDependencies(module));
        return dependencyArr;
    }, []).sort();
}

module.exports = getDependencies;
