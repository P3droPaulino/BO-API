module.exports = {
    routes: [
        {
            method: 'PATCH',
            path: '/user-metas/:id', 
            handler: 'user-meta.patch',
        }
    ]
}    