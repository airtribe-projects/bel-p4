const moment =  require('moment');

const roomUsers = [];

function formatMessage(username, text) {
    return {
        username,
        text,
        time: moment().format('h:mm a')
    };
}

function newUser(id, username, room) {
    const user = {id, username, room};
    roomUsers.push(user);
    return user;
}

function getIndividualRoomUsers(room) {
    return roomUsers.filter(user => user.room === room);
}


function exitRoom(id) {
    const index = roomUsers.findIndex(user => user.id === id);
    if (index !== -1) {
        return roomUsers.splice(index, 1)[0];
    }
}


function getActiveUser(id) {
    return roomUsers.find(user => user.id === id);
}

module.exports = {
    newUser,
    getActiveUser,
    exitRoom,
    getIndividualRoomUsers,
    formatMessage
};
