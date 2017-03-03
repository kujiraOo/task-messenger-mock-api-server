module.exports = (storage) => {

    return (req, res, next) => {

        const appUserId = parseInt(req.header('Authorization'));
        const appUser = storage.getUserById(appUserId);

        if (appUser && appUser.status === 'HR_MANAGER') {

            next();
        } else {
            res.status(403).send();
        }
    };
}