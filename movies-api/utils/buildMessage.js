function buildMessage(entidy, action) {
    if (action === 'list') {
        return `${entidy}s ${action}ed`;
    }
    
    return `${entidy} ${action}d`;
}

module.exports = buildMessage;