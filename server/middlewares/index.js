function authorizedUser(req, res, next) {
    if (!req.user) {
        var err = new Error('Not authorized');
        err.status = 401;
        next(err);
    }
    else {
        next();
    }
};

function rightUser(req, res, next) {
    if (!req.user || req.params.userId !== req.user._id) {
        var err = new Error('Not authorized');
        err.status = 401;
        next(err);
    }
    else {
        next();
    }
};

module.exports = {
    rightUser,
    authorizedUser
}